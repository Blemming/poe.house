import cookieparser from 'cookieparser';

export const state = () => ({
	firestoreData: null,
	doodads: null,
	hideouts: null
});
export const getters = {
	getHideout: (state) => (hash) => {
		if (hash) {
			return state.hideouts.filter(hideout => parseInt(hideout['Hash']) === hash)[0];
		} else {
			return { 'Icon': '', 'Name': '' };
		}
	}
};
export const mutations = {
	SET_BEX_POST: function (state, post) {
		state.bexPost = post;
	},
	SET_FIRESTOREDATA: function (state, data) {
		state.firestoreData = data;
	},
	SET_DOODADS: function (state, doodads) {
		state.doodads = doodads;
	},
	SET_HIDEOUTS: function (state, hideouts) {
		state.hideouts = hideouts;
	}
};
export const actions = {
	async nuxtServerInit ({ state, commit }, { req }) {
		let user = null;
		let token = null;
		if (req && req.headers && req.headers.cookie) {
			const parsed = cookieparser.parse(req.headers.cookie);
			user = (parsed.user && JSON.parse(parsed.user)) || null;
			token = (parsed.token) || null;
		}
		if (user) {
			const { data: confirmedUser } = await this.$axios.get(`/api/users/${user._id}`);
			user = confirmedUser;
		}
		commit('auth/setUser', user);
		commit('auth/setToken', token);

		const { doodads } = require('~/data/doodads.json');
		const { hideouts } = require('~/data/hideouts.json');
		commit('SET_DOODADS', doodads);
		commit('SET_HIDEOUTS', hideouts);
	}
};
