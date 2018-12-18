export const state = () => ({
	bexPost: '',
	doodads: null,
	hideouts: null
});
export const mutations = {
	SET_BEX_POST: function (state, post) {
		state.bexPost = post;
	},
	SET_DOODADS: function (state, doodads) {
		state.doodads = doodads;
	},
	SET_HIDEOUTS: function (state, hideouts) {
		state.hideouts = hideouts;
	}
};
export const actions = {
	async nuxtServerInit ({ state, commit }) {
		const { doodads } = require('~/data/doodads.json');
		const { hideouts } = require('~/data/hideouts.json');
		commit('SET_DOODADS', doodads);
		commit('SET_HIDEOUTS', hideouts);
		commit('SET_BEX_POST', stripped);
	}
};
