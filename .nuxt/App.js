import Vue from 'vue'

import '..\\node_modules\\quill\\dist\\quill.core.css'

import '..\\assets\\quill.custom.css'

import '..\\assets\\scss\\main.scss'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"poe.house","meta":[{"charset":"utf-8"},{"http-equiv":"x-ua-compatible","content":"ie=edge"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"name":"robots","content":"index,follow"},{"name":"googlebot","content":"index,follow"},{"hid":"description","name":"description","content":"Website for sharing Path of Exile hideouts"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.3.1\u002Fcss\u002Fall.css","integrity":"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU","crossorigin":"anonymous"}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fbabel-polyfill\u002F7.0.0\u002Fpolyfill.min.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fapi.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.3\u002Fjs\u002Fbootstrap.bundle.min.js","body":true}],"style":[]},

  render(h, props) {
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [

      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  methods: {
    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
  }
}
