exports.ids = [7];
exports.modules = {

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=6a2b27e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 mt-3\">","</div>",[_c('card-layout',{attrs:{"title":"Log in"}},[_c('form',{attrs:{"autocomplete":"off"},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],class:(_vm.isError)?'form-control is-invalid':'form-control',attrs:{"id":"email","type":"email","autofocus":"true","placeholder":"Enter your email","required":""},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),(_vm.isError)?_c('small',{staticClass:"form-text text-center text-danger",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],class:(_vm.isError)?'form-control is-invalid':'form-control',attrs:{"id":"password","label":"password","type":"password","autofocus":"true","placeholder":"Enter your password","required":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),(_vm.isError)?_c('small',{staticClass:"form-text text-center text-danger",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_c('small',[_vm._v("If you are still encountering confirmation issues. Send an email to "),_c('a',{attrs:{"href":"mailto:support@poe.house"}},[_vm._v("support@poe.house")]),_vm._v(" with the email you have registered with and I will gladly confirm your email.")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-block mt-3",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Submit")]),_vm._v(" "),_c('p',{staticClass:"text-center mt-3"},[_vm._v("\n\t\t\t\t\tNo account yet\n\t\t\t\t\t"),_c('router-link',{attrs:{"to":"/register","tag":"a"}},[_vm._v("\n\t\t\t\t\t\tRegister\n\t\t\t\t\t")])],1)])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=6a2b27e6&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    CardLayout: CardLayout["a" /* default */]
  },

  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: ''
    };
  },

  computed: {
    isError() {
      return !!this.error;
    }

  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        await this.loginUser({
          identifier: this.email,
          password: this.password
        });
        this.loading = false;
        this.$router.push('/');
      } catch (err) {
        this.loading = false;
        this.error = err.message || 'Incorrect email or password';
      }
    },

    ...Object(external_vuex_["mapActions"])({
      loginUser: 'auth/loginUser'
    })
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64100919"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map