import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_veevalidate_c3532846 from 'nuxt_plugin_veevalidate_c3532846' // Source: .\\vee-validate.js (mode: 'all')
import nuxt_plugin_googleanalytics_2bc864b8 from 'nuxt_plugin_googleanalytics_2bc864b8' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_moment_0c3466ac from 'nuxt_plugin_moment_0c3466ac' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_axios_51e91aae from 'nuxt_plugin_axios_51e91aae' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_moment_57893d7e from 'nuxt_plugin_moment_57893d7e' // Source: ..\\plugins\\moment.js (mode: 'all')
import nuxt_plugin_hideouts_14c8ac3a from 'nuxt_plugin_hideouts_14c8ac3a' // Source: ..\\plugins\\hideouts.js (mode: 'all')
import nuxt_plugin_paginate_1ee734ea from 'nuxt_plugin_paginate_1ee734ea' // Source: ..\\plugins\\paginate.js (mode: 'client')
import nuxt_plugin_vuerateit_039cb95c from 'nuxt_plugin_vuerateit_039cb95c' // Source: ..\\plugins\\vue-rate-it.js (mode: 'client')
import nuxt_plugin_vue2editor_345c4d3f from 'nuxt_plugin_vue2editor_345c4d3f' // Source: ..\\plugins\\vue2-editor.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"poe.house","meta":[{"charset":"utf-8"},{"http-equiv":"x-ua-compatible","content":"ie=edge"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"name":"robots","content":"index,follow"},{"name":"googlebot","content":"index,follow"},{"hid":"description","name":"description","content":"Website for sharing Path of Exile hideouts"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.3.1\u002Fcss\u002Fall.css","integrity":"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU","crossorigin":"anonymous"}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fbabel-polyfill\u002F7.0.0\u002Fpolyfill.min.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fapi.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.3\u002Fjs\u002Fbootstrap.bundle.min.js","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_veevalidate_c3532846 === 'function') {
    await nuxt_plugin_veevalidate_c3532846(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_2bc864b8 === 'function') {
    await nuxt_plugin_googleanalytics_2bc864b8(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_0c3466ac === 'function') {
    await nuxt_plugin_moment_0c3466ac(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_51e91aae === 'function') {
    await nuxt_plugin_axios_51e91aae(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_57893d7e === 'function') {
    await nuxt_plugin_moment_57893d7e(app.context, inject)
  }

  if (typeof nuxt_plugin_hideouts_14c8ac3a === 'function') {
    await nuxt_plugin_hideouts_14c8ac3a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_paginate_1ee734ea === 'function') {
    await nuxt_plugin_paginate_1ee734ea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuerateit_039cb95c === 'function') {
    await nuxt_plugin_vuerateit_039cb95c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2editor_345c4d3f === 'function') {
    await nuxt_plugin_vue2editor_345c4d3f(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
