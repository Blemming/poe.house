const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['views'] = require('..\\middleware\\views.js')
middleware['views'] = middleware['views'].default || middleware['views']

export default middleware
