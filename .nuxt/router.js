import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ba32adc = () => interopDefault(import('..\\pages\\contest.vue' /* webpackChunkName: "pages/contest" */))
const _d991dc44 = () => interopDefault(import('..\\pages\\data-processing.vue' /* webpackChunkName: "pages/data-processing" */))
const _3bcc3eb1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ea66c01c = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _7b84908b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2d5c336f = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _6e5cbf10 = () => interopDefault(import('..\\pages\\hideout\\create.vue' /* webpackChunkName: "pages/hideout/create" */))
const _1aaa486c = () => interopDefault(import('..\\pages\\hideout\\_id\\index.vue' /* webpackChunkName: "pages/hideout/_id/index" */))
const _3fee4597 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _659dc540 = () => interopDefault(import('..\\pages\\hideout\\_id\\edit.vue' /* webpackChunkName: "pages/hideout/_id/edit" */))
const _72249b9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
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
    path: "/hideout/:id",
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
}

export function createRouter () {
  return new Router(routerOptions)
}
