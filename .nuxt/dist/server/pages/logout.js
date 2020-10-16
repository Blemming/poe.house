exports.ids = [8];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/logout.vue?vue&type=template&id=3cfbe796&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card-layout',{attrs:{"title":"Logging out"}},[_c('p',[_vm._v("Logging you out !")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/logout.vue?vue&type=template&id=3cfbe796&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/logout.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var logoutvue_type_script_lang_js_ = ({
  components: {
    CardLayout: CardLayout["a" /* default */]
  },

  mounted() {
    this.logOut();
    this.$router.push('/');
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      logOut: 'auth/logout'
    })
  }
});
// CONCATENATED MODULE: ./pages/logout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_logoutvue_type_script_lang_js_ = (logoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/logout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_logoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b02228a"
  
)

/* harmony default export */ var logout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=logout.js.map