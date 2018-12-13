import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: {
			user: null
		},
		getters: {
			isAuthenticated (state) {
				return !!state.user;
			}
		},
		actions: {
			async setUser ({ commit }, uid) {
				if (uid) {
					try {
						const foundUserRef = await this.$fireStore.collection('accounts').where('uid', '==', uid).get();
						const account = foundUserRef.docs[0].data();
						commit('SET_USER', account);
					} catch (e) {
						return e;
					}
				} else {
					commit('SET_USER', null);
				}
			},
			resetUser ({ state }) {
				state.user = null;
			},
			async createUser ({ state }, account) {
				try {
					const createdUser = await this.$fireAuth.createUserWithEmailAndPassword(
						account.email,
						account.password
					);
					const newAccountRef = this.$fireStore.collection('accounts').doc(createdUser.uid);
					try {
						const user = {
							username: account.username,
							email: account.email,
							uid: createdUser.uid,
							icon: account.icon || '/images/default-profile.png'
						};
						await newAccountRef.set(user);
						state.dispatch('userLogin', user.user.uid);
					} catch (e) {
						console.log(e);
						return;
					}
				} catch (e) {
					console.log(e);
				}
			},
			async userLogin ({ state }, account) {
				const user = await this.$fireAuth.signInWithEmailAndPassword(account.email, account.password);
				const token = await this.$fireAuth.currentUser.getIdToken(true);
				await this.$axios.$post('/api/login', { uid: user.user.uid, token: token });

				return this.dispatch('setUser', user.user.uid);
			},
			async userLogout ({ state }) {
				try {
					await this.$fireAuth.signOut();
					await this.dispatch('setUser', null);
					await this.$axios.post('/api/logout');
				} catch (e) {
					console.log(e);
				}
			},
			async nuxtServerInit ({ dispatch }, { req }) {
				if (req.session && req.session.userId) {
					await dispatch('setUser', req.session.userId);
				}
			}
		},
		mutations: {
			SET_USER (state, user) {
				state.user = user;
			}
		}
	});
};
export default createStore;
