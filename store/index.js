import cookieparser from 'cookieparser';

export const state = () => ({
	firestoreData: null,
	filters: {
		type: '',
		mtx: '',
		'Alva': 0,
		'Einhar': 0,
		'Niko': 0,
		sortBy: 'date-old',
		'Zana': 0
	},
	pageControls: {
		currentPage: 1,
		perPage: 9
	},
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
	SET_FILTER_OBJECT: function (state, { filter, choice }) {
		state.filters[filter] = choice;
	},
	SET_PAGE_OBJECT: function (state, { prop, choice }) {
		state.pageControls[prop] = choice;
	},
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
			const query = `
            query{
                user(id:"${user._id}"){
                  username
                  email
                  _id
                  provider
                  confirmed
                  hideouts(where:{
                    isDeleted_ne:true
                  }){
                    hideoutId
                    nameDescription
                    hideoutType
                    views
                    downloads
                    hideoutDateSubmit
                    hideoutMasters
                    hideoutScreenshot
                  }
                }
              }
            `;
			const { data: confirmedUser } = await this.$axios.post(`/api/graphql`, { query });
			user = confirmedUser.data.user;
		}
		commit('auth/setUser', user);
		commit('auth/setToken', token);

		const { doodads } = require('~/data/doodads.json');
		const { hideouts } = require('~/data/hideouts.json');
		commit('SET_DOODADS', doodads);
		commit('SET_HIDEOUTS', hideouts);
	}
};
