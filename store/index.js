// import axios from 'axios';
export const state = () => ({
	firestoreData: null,
	bexPost: '',
	doodads: null,
	hideouts: null
});
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
	async nuxtServerInit ({ state, commit }) {
		// const { data: doodadsData } = await axios.get('http://poedb.tw/us/api.php/HideoutDoodads');
		const { doodads } = require('~/data/doodads.json');
		const { hideouts } = require('~/data/hideouts.json');
		commit('SET_DOODADS', doodads);
		commit('SET_HIDEOUTS', hideouts);
	}
};
