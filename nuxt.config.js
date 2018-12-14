const pkg = require('./package');
const fireBaseConfig = require('./.firebase.json');

module.exports = {
	mode: 'universal',

	/*
  ** Headers of the page
  */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
			{ name: 'robots', content: 'index,follow' },
			{ name: 'googlebot', content: 'index,follow' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }
		],
		script: [
			{ type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', body: true },
			{ type: 'text/javascript', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js', body: true }
		]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#f2c462' },

	/*
  ** Global CSS
  */
	css: [
		'~assets/scss/main.scss'
	],

	/*
  ** Plugins to load before mounting the App
  */

	plugins: [
		'~/plugins/hideouts.js'
	],

	/*
  ** Nuxt.js modules
  */
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/markdownit',
		['nuxt-fire',
			{
				config: {
					development: fireBaseConfig,
					production: fireBaseConfig
				},
				useOnly: ['auth', 'firestore']
			}
		],
		['nuxt-validate', {
			aria: true
		}]
	],
	/*
  ** Axios module configuration
  */
	axios: {
		proxy: true
	},
	proxy: [
		['/raw', {
			target: 'https://pastebin.com/',
			changeOrigin: true,
			pathRewrite: {
				'^/raw': '/raw'
			}
		}]
	],

	/*
  ** Markdownit module configuration
  */
	markdownit: {
		injected: true
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend (config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
