import Cookies from 'js-cookie';

export const state = () => ({
	token: '',
	user: {}
});

export const mutations = {
	setUser (state, user) {
		state.user = user;
		Cookies.set('user', JSON.stringify(user));
	},
	setToken (state, token) {
		state.token = token;
		Cookies.set('token', token);
	},
	logout (state) {
		state.user = null;
		state.token = '';
		Cookies.remove('user');
		Cookies.remove('token');
	}
};

export const actions = {
	logoutUser ({ commit }) {
		commit('logout');
	},
	async updateUserHideouts ({ state, commit }) {
		const user = state.user;
		const query = `
        query{
            user(id:"${user._id}"){
              username
              confirmed
              Donator
              votes{
                  _id
              }
              hideouts(where:{
                isDeleted_ne:true
              }){
                hideoutId
                nameDescription
                hideoutType
                views
                comments{
                    user{
                    username,
                    _id
                    },
                    comment
                },
                downloads
                hideoutDateSubmit
                hideoutMasters
                hideoutScreenshot
              }
            }
          }
        `;
		const { data: confirmedUser } = await this.$axios.post(`/api/graphql`, { query });
		const newuser = { ...user, ...confirmedUser.data.user };
		commit('setUser', newuser);
	},
	async loginUser ({ commit, dispatch }, payload) {
		try {
			const { data: session } = await this.$axios.post('/api/auth/local', {
				identifier: payload.identifier,
				password: payload.password
			});
			const user = session.user;
			await commit('setUser', user);
			dispatch('updateUserHideouts');
			commit('setToken', session.jwt);
		} catch (e) {
			throw Error(e.response.data.message);
		}
	},
	async registerUser ({ commit }, payload) {
		try {
			const { data: session } = await this.$axios.post('/api/auth/local/register', {
				username: payload.username,
				email: payload.email,
				password: payload.password
			});
			commit('setUser', session.user);
			commit('setToken', session.jwt);
		} catch (e) {
			throw Error(e.response.data.message);
		}
	}
};
export const getters = {
	username: state => {
		return state.user && state.user.username;
	}
};
