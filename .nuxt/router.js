import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5ba32adc = () => interopDefault(import('..\\pages\\contest.vue' /* webpackChunkName: "pages_contest" */))
const _d991dc44 = () => interopDefault(import('..\\pages\\data-processing.vue' /* webpackChunkName: "pages_data-processing" */))
const _3bcc3eb1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _ea66c01c = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */))
const _7b84908b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _2d5c336f = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _6e5cbf10 = () => interopDefault(import('..\\pages\\hideout\\create.vue' /* webpackChunkName: "pages_hideout_create" */))
const _1aaa486c = () => interopDefault(import('..\\pages\\hideout\\_id\\index.vue' /* webpackChunkName: "pages_hideout__id_index" */))
const _3fee4597 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages_user__id" */))
const _659dc540 = () => interopDefault(import('..\\pages\\hideout\\_id\\edit.vue' /* webpackChunkName: "pages_hideout__id_edit" */))
const _72249b9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/contest",
      component: _5ba32adc,
      name: "contest"
    }, {
      path: "/data-processing",
      component: _d991dc44,
      name: "data-processing"
    }, {
      path: "/login",
      component: _3bcc3eb1,
      name: "login"
    }, {
      path: "/logout",
      component: _ea66c01c,
      name: "logout"
    }, {
      path: "/register",
      component: _7b84908b,
      name: "register"
    }, {
      path: "/user",
      component: _2d5c336f,
      name: "user"
    }, {
      path: "/hideout/create",
      component: _6e5cbf10,
      name: "hideout-create"
    }, {
      path: "/hideout/:id?",
      component: _1aaa486c,
      name: "hideout-id"
    }, {
      path: "/user/:id",
      component: _3fee4597,
      name: "user-id"
    }, {
      path: "/hideout/:id?/edit",
      component: _659dc540,
      name: "hideout-id-edit"
    }, {
      path: "/",
      component: _72249b9a,
      name: "index"
    }],

    fallback: false
  })
}
