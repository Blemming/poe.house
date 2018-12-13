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
			async setUser ({ commit }, user) {
				try {
					const foundUserRef = await this.$fireStore.collection('accounts').where('uid', '==', user.user.uid).get();
					const account = foundUserRef.docs[0].data();
					commit('SET_USER', account);
				} catch (e) {
					return e;
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
							icon: account.icon
						};
						await newAccountRef.set(user);
						state.dispatch('userLogin', user);
					} catch (e) {
						console.log(e);
						return;
					}
				} catch (e) {
					console.log(e);
				}
			},
			async userLogin ({ state }, account) {
				return this.$fireAuth.signInWithEmailAndPassword(account.email, account.password)
					.then((user) => {
						return this.dispatch('setUser', user);
					});
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
