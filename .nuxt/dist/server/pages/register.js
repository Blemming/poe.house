exports.ids = [9];
exports.modules = {

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=21413733&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 mt-3\">","</div>",[_c('card-layout',{attrs:{"title":"Register"}},[(!_vm.registered)?_c('form',{attrs:{"autocomplete":"off"},on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"username"}},[_vm._v("Username")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"form-control",attrs:{"id":"username","type":"username","autofocus":"true","placeholder":"Enter your username","required":""},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}}),_vm._v(" "),(_vm.isError)?_c('small',{staticClass:"form-text text-center text-danger",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"id":"email","type":"email","autofocus":"true","placeholder":"Enter your email","required":""},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"emailHelp"}},[_vm._v("We'll never share your email with anyone else.")]),_vm._v(" "),(_vm.isError)?_c('small',{staticClass:"form-text text-center text-danger",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"id":"password","label":"password","type":"password","autofocus":"true","placeholder":"Enter your password","required":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),(_vm.isError)?_c('small',{staticClass:"form-text text-center text-danger",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Confirm Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rePassword),expression:"rePassword"}],staticClass:"form-control",attrs:{"id":"rePassword","label":"rePassword","type":"password","autofocus":"true","placeholder":"Retype your password","required":""},domProps:{"value":(_vm.rePassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.rePassword=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"mt-3",staticStyle:{"height":"50px"}},[(_vm.noPasswordMatchError)?_c('small',{staticClass:"form-text text-center text-danger m-0",attrs:{"id":"passwordHelp"}},[_vm._v(_vm._s(_vm.noPasswordMatchError))]):_vm._e()])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-block mt-3",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Submit")]),_vm._v(" "),_c('p',{staticClass:"text-center mt-3"},[_vm._v("\n\t\t\t\t\tAlready have an account?\n\t\t\t\t\t"),_c('router-link',{attrs:{"to":"/login","tag":"a"}},[_vm._v("\n\t\t\t\t\t\tLogin\n\t\t\t\t\t")])],1)]):_c('div',[_c('h4',[_vm._v("Account not confirmed, check your email to confirm account. ")]),_vm._v(" "),_c('p',[_vm._v("If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact\n\t\t\t\t\t"),_c('a',{staticClass:"text-white",attrs:{"href":"mailto:support@poe.house"}},[_vm._v("support@poe.house")]),_vm._v(" with your registered email.\n\t\t\t\t")])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=21413733&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&
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


/* harmony default export */ var registervue_type_script_lang_js_ = ({
  components: {
    CardLayout: CardLayout["a" /* default */]
  },

  data() {
    return {
      email: '',
      password: '',
      username: '',
      registered:  false || !!this.$store.getters['auth/username'],
      rePassword: '',
      error: '',
      loading: false
    };
  },

  computed: {
    isError() {
      return !!this.error || !!this.noPasswordMatchError;
    },

    passwordsMatch() {
      return this.password === this.rePassword;
    },

    noPasswordMatchError() {
      if (!this.passwordsMatch) {
        return 'Password does not match';
      } else {
        return '';
      }
    }

  },
  methods: {
    async handleSubmit() {
      try {
        if (this.passwordsMatch) {
          this.loading = true;
          await this.registerUser({
            username: this.username,
            email: this.email,
            password: this.password
          });
          this.loading = false;
          this.registered = true;
        }
      } catch (err) {
        this.loading = false;
        console.log(err);
        this.error = err;
      }
    },

    ...Object(external_vuex_["mapActions"])({
      registerUser: 'auth/registerUser'
    })
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2463cd23"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map