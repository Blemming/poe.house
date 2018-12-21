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
	async loginUser ({ commit }, payload) {
		try {
			const { data: session } = await this.$axios.post('/api/auth/local', {
				identifier: payload.identifier,
				password: payload.password
			});
			let user = session.user;
			const { data: confirmedUser } = await this.$axios.get(`/api/users/${user._id}`);
			user = { ...user, hideouts: confirmedUser.hideouts };
			commit('setUser', user);
			commit('setToken', session.jwt);
		} catch (e) {
			throw Error(e);
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
			throw Error(e.message);
		}
	}
};
export const getters = {
	username: state => {
		return state.user && state.user.username;
	}
};
