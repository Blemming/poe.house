import Cookies from 'js-cookie';

// const testData = {
// 	'username': 'Kiflin',
// 	'confirmed': true,
// 	'Donator': null,
// 	'votes': [
// 		{
// 			'_id': '5c2a0ea43346664543e7f1ef'
// 		},
// 		{
// 			'_id': '5c2a39243346664543e7f1f4'
// 		}
// 	],
// 	'hideouts': [
// 		{
// 			'hideoutId': 'VYAPM0MX6VsdiWmVKT5c',
// 			'nameDescription': "Cartographer's hideout: Templar labaratory ",
// 			'hideoutType': 55414,
// 			'views': 3448,
// 			'comments': [
// 				{
// 					'user': {
// 						'username': 'Thorosor',
// 						'_id': '5c2b75646d7650561406c076'
// 					},
// 					'viewed': false,
// 					'comment': '<p>i think the shopping list is bugging or u fail it.. only 1 always?</p><p><br></p>'
// 				}
// 			],
// 			'downloads': 608,
// 			'hideoutDateSubmit': {
// 				'seconds': 1545084321,
// 				'nanoseconds': 630000000
// 			},
// 			'hideoutMasters': {
// 				'Zana': 7,
// 				'Niko': 7,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': false
// 			},
// 			'hideoutScreenshot': 'https://i.imgur.com/TUGecVt.png'
// 		},
// 		{
// 			'hideoutId': 'P86niXkr',
// 			'nameDescription': 'Something special',
// 			'hideoutType': 13485,
// 			'views': 216,
// 			'comments': [],
// 			'downloads': 16,
// 			'hideoutDateSubmit': {
// 				'seconds': 1545269664,
// 				'nanoseconds': 1545269664205
// 			},
// 			'hideoutMasters': {
// 				'Zana': 7,
// 				'Niko': 7,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': true
// 			},
// 			'hideoutScreenshot': ''
// 		},
// 		{
// 			'hideoutId': 'OzddyWEP',
// 			'nameDescription': 'Immaculate hideout',
// 			'hideoutType': 13485,
// 			'views': 416,
// 			'comments': [],
// 			'downloads': 80,
// 			'hideoutDateSubmit': {
// 				'seconds': 1545329462,
// 				'nanoseconds': 1545329461592
// 			},
// 			'hideoutMasters': {
// 				'Zana': 7,
// 				'Niko': 7,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': true
// 			},
// 			'hideoutScreenshot': 'https://i.imgur.com/e3UPMbl.png'
// 		},
// 		{
// 			'hideoutId': 'EZKE7KRW',
// 			'nameDescription': 'Desert hideout',
// 			'hideoutType': 750,
// 			'views': 302,
// 			'comments': [],
// 			'downloads': 57,
// 			'hideoutDateSubmit': {
// 				'seconds': 1545751735,
// 				'nanoseconds': 1545751734905
// 			},
// 			'hideoutMasters': {
// 				'Zana': 7,
// 				'Niko': 0,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': false
// 			},
// 			'hideoutScreenshot': 'https://i.imgur.com/DlpqUQP.png'
// 		},
// 		{
// 			'hideoutId': 'CaB4nKms',
// 			'nameDescription': 'Infected Encampment: Unearthed hideout',
// 			'hideoutType': 45200,
// 			'views': 401,
// 			'comments': [
// 				{
// 					'user': {
// 						'username': 'blemming',
// 						'_id': '5c1a8501ba4377361b4f5b73'
// 					},
// 					'viewed': false,
// 					'comment': '<p>Nice hideout</p>'
// 				}
// 			],
// 			'downloads': 6,
// 			'hideoutDateSubmit': {
// 				'seconds': 1546270898,
// 				'nanoseconds': 1546270898369
// 			},
// 			'hideoutMasters': {
// 				'Zana': 6,
// 				'Niko': 6,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': false
// 			},
// 			'hideoutScreenshot': 'https://i.imgur.com/j8KtczF.png'
// 		},
// 		{
// 			'hideoutId': 'JzoKfYVa',
// 			'nameDescription': 'Overgrown Temple',
// 			'hideoutType': 31968,
// 			'views': 11,
// 			'comments': [],
// 			'downloads': 0,
// 			'hideoutDateSubmit': {
// 				'seconds': 1546808051,
// 				'nanoseconds': 1546808051327
// 			},
// 			'hideoutMasters': {
// 				'Zana': 7,
// 				'Niko': 7,
// 				'Einhar': 7,
// 				'Alva': 7,
// 				'mtx': false
// 			},
// 			'hideoutScreenshot': 'https://i.imgur.com/w3YSsHQ.png'
// 		}
// 	]
// };

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
		state.user = {};
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
	},
	role: state => {
		if (state.user && state.user.role) {
			return state.user.role.name;
		}
		return null;
	}
	// unreadComments: state => {
	// 	const userHideouts = testData.hideouts;
	// 	if (userHideouts.length > 0) {
	// 		let unreadComments = [];
	// 		userHideouts.forEach(hideout => {
	// 			const newStuff = hideout.comments.filter(comment => !comment.viewed);
	// 			unreadComments = [...unreadComments, ...newStuff];
	// 		});
	// 		return unreadComments;
	// 	} else {
	// 		return [];
	// 	}
	// }
};
