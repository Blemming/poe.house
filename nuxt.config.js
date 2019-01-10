// import webpack from 'webpack';
const pkg = require('./package');
const apiConfig = require('./.api.json');

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

			{ type: 'text/javascript', src: 'https://www.google.com/recaptcha/api.js', body: true },
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
		'quill/dist/quill.core.css',
		'~assets/quill.custom.css',
		'~assets/scss/main.scss'
	],

	/*
  ** Plugins to load before mounting the App
  */

	plugins: [
		'~/plugins/moment.js',
		'~/plugins/hideouts.js',
		{ src: '~/plugins/paginate.js', ssr: false },
		{ src: '~/plugins/vue-rate-it.js', ssr: false },
		{ src: '~/plugins/vue2-editor.js', ssr: false }
	],

	/*
  ** Nuxt.js modules
  */
	modules: [
		'@nuxtjs/axios',
		['@nuxtjs/moment'],
		['@nuxtjs/google-analytics', {
			track: 'PageView',
			id: 'UA-131152589-1'
		}],
		['nuxt-validate', {
			aria: true
		}]
	],
	/*
  ** Axios module configuration
  */
	axios: {
		proxy: true,
		proxyHeaders: true
	},
	proxy: [
		['/api', {
			target: apiConfig.server,
			pathRewrite: {
				'^/api': '/'
			}
		}],
		['/imgur', {
			target: 'https://api.imgur.com',
			preserveHeaderKeyCase: true,
			headers: { 'Authorization': `Client-ID ${apiConfig.imgurKey}` },
			pathRewrite: {
				'^/imgur': '/'
			}
		}],
		['/raw', {
			target: 'https://pastebin.com/',
			changeOrigin: true,
			pathRewrite: {
				'^/raw': '/raw'
			}
		}],
		['/githubraw', {
			target: 'https://raw.githubusercontent.com',
			changeOrigin: true,
			pathRewrite: {
				'^/githubraw': '/'
			}
		}]
	],
	/*
  ** Markdownit module configuration
  */
	/*
  ** Build configuration
  */
	build: {
		// plugins: [
		// 	new webpack.ProvidePlugin({
		// 		'window.Quill': 'quill/dist/quill.js',
		// 		'Quill': 'quill/dist/quill.js'
		// 	})
		// ],
		// analyze: true,
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
