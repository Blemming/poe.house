exports.ids = [11];
exports.modules = {

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=template&id=3aa0183b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row py-5"},[(_vm.$store.getters['auth/username'])?_vm._ssrNode("<div class=\"col-12\">","</div>",[_c('card-layout',{attrs:{"title":_vm.user.username}},[_c('div',{staticClass:"card-body text-primary text-left"},[(!_vm.$store.state.auth.user.confirmed)?_c('div',[_c('h4',[_vm._v("Account not confirmed, check your email to confirm account. ")]),_vm._v(" "),_c('p',[_vm._v("If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact\n\t\t\t\t\t\t"),_c('a',{staticClass:"text-white",attrs:{"href":"mailto:support@poe.house"}},[_vm._v("support@poe.house")]),_vm._v(" with your registered email.\n\t\t\t\t\t")])]):_vm._e(),_vm._v(" "),(_vm.$store.state.auth.user.confirmed)?_c('div',[(_vm.userHideouts.length <= 0 || !_vm.userHideouts)?_c('div',{staticClass:"text-center"},[(_vm.claimable)?_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.claimEmailHideouts()}}},[_c('h4',[_vm._v("Claim email hideouts")])]):_vm._e(),_vm._v(" "),(!_vm.claimable)?_c('h4',[_vm._v("You have no hideouts yet. If you want to claim a hideout send an email to\n\t\t\t\t\t\t\t"),_c('a',{staticClass:"text-white",attrs:{"href":"mailto:support@poe.house"}},[_vm._v("support@poe.house")]),_vm._v(" with a link to the hideout and your account name.\n\t\t\t\t\t\t")]):_vm._e()]):_vm._e(),_vm._v(" "),_vm._l((_vm.userHideouts),function(hideout,index){return _c('div',{key:index,staticClass:"col-xs-12 my-2"},[_c('div',{staticClass:"media border-bottom border-dark"},[_c('div',{staticClass:"row w-100"},[_c('img',{staticClass:"align-self-center mr-3 xs-12 lg-2",attrs:{"src":_vm.$getThumbnail(_vm.getImage(hideout))}}),_vm._v(" "),_c('div',{staticClass:"media-body py-3  xs-12 lg-10"},[_c('div',{staticClass:"card-title text-white "},[_c('h4',[_vm._v(_vm._s(hideout.nameDescription))]),_vm._v(" "),_c('small',{staticClass:"text-primary"},[_vm._v(_vm._s(hideout.views)+" "),_c('i',{staticClass:"fas fa-eye pr-2"}),_vm._v(" "+_vm._s(hideout.downloads)+" "),_c('i',{staticClass:"fas fa-file-download pr-2"}),_vm._v(" "+_vm._s(hideout.comments.length)+" "),_c('i',{staticClass:"fas fa-comments"})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('table',{staticClass:"table table-sm table-striped table-dark bg-secondary text-primary "},[_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Hideout")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.getHideout(hideout.hideoutType)))])])]),_vm._v(" "),(hideout.views)?_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Views")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(hideout.views))])])]):_vm._e(),_vm._v(" "),(hideout.downloads)?_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Downloads")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(hideout.downloads))])])]):_vm._e(),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Posted")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.$moment.unix(hideout.hideoutDateSubmit.seconds).format(' MMMM Do YYYY')))])])])])])])]),_vm._v(" "),_c('div',{staticClass:"row justify-content-between"},[_c('div',{staticClass:"col-3"},[(hideout.hideoutMasters['mtx'])?_c('img',{attrs:{"src":"https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000","alt":""}}):_vm._e(),_vm._v(" "),(hideout.hideoutMasters['mtx'])?_c('small',[_vm._v("MTX")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-3 text-right"},[_c('nuxt-link',{staticClass:"btn btn-primary mt-3",attrs:{"to":("/hideout/" + (hideout.hideoutId) + "/edit")}},[_vm._v("Edit")]),_vm._v(" "),_c('a',{staticClass:"btn btn-danger text-white mt-3",attrs:{"data-target":("#exampleModal-" + (hideout.hideoutId)),"hrf":"#","data-toggle":"modal"}},[_vm._v("Delete")]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":("exampleModal-" + (hideout.hideoutId)),"tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog bg-dark",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content  bg-secondary"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_vm._v("Deletion Confirmation")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body text-left"},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAre you sure you want to delete this hideout ? It will be lost for ever!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-success",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":function($event){$event.preventDefault();return _vm.deleteHideout(_vm.userHideouts[index].hideoutId)}}},[_vm._v("Confirm")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_vm._v("Cancel")])])])])])],1)])])])])])})],2):_vm._e()])])],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=template&id=3aa0183b&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var uservue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {
    CardLayout: CardLayout["a" /* default */]
  },

  data() {
    return {
      user: {},
      claimable: true
    };
  },

  computed: {
    // user () {
    // 	return this.$store.state.auth.user;
    // },
    userHideouts() {
      return this.user.hideouts ? this.user.hideouts : [];
    }

  },

  async created() {
    await this.getUserHideouts();
  },

  methods: {
    getImage(hideout) {
      if (/.jpg|.png|jpeg/gi.test(hideout.hideoutScreenshot)) {
        return hideout.hideoutScreenshot;
      } else {
        return this.$store.getters.getHideout(hideout.hideoutType)['Icon'];
      }
    },

    async deleteHideout(id) {
      try {
        const hideout = await this.$axios.$get(`/api/hideouts?hideoutId=${id}`);
        hideout[0].isDeleted = true;
        await this.$axios.put(`/api/hideouts/${hideout[0].id}`, hideout[0]);
        await this.$store.dispatch('auth/updateUserHideouts');
        await this.getUserHideouts();
      } catch (e) {
        console.log(e);
      }
    },

    getHideout(hash) {
      return this.$store.getters.getHideout(hash)['Name'];
    },

    async getUserHideouts() {
      let query = '';

      if (this.$store.state.auth.user) {
        query = `
                query{
                    user(id:"${this.$store.state.auth.user._id}"){
                            username
                            confirmed
                            hideouts(where:{
                                isDeleted_ne:true
                            }){
                                hideoutId
                                nameDescription
                                hideoutType
                                views
                                downloads
                                comments{
                                    _id
                                }
                                hideoutDateSubmit
                                hideoutMasters
                                hideoutScreenshot
                                votes{
                                    score
                                }
                            }
                            }
                        }
                `;
      }

      try {
        const {
          data
        } = await this.$axios.$post(`/api/graphql`, {
          query
        });
        this.user = data.user;
      } catch (e) {
        console.log(e);
      }
    },

    async claimEmailHideouts() {
      try {
        const getHideoutsQuery = `
                        query{
                            hideouts(where:{
                                authorEmail:"${this.$store.state.auth.user.email}",
                                isDeleted_ne:true
                            }){
                                _id
                            }
                            }
                        `;
        const {
          data
        } = await this.$axios.$post(`/api/graphql`, {
          query: getHideoutsQuery
        });
        let ids = '';

        if (data.hideouts.length > 0) {
          data.hideouts.forEach(hide => {
            ids += `, "${hide._id}"`;
          });
          const updateQuery = `
                                mutation{
                                    updateHideout(input:{
                                        where:{
                                            id:${ids.replace(', "', '"')}
                                        },
                                        data:{
                                            user:"${this.$store.state.auth.user._id}"
                                        }
                                    }){
                                        hideout{
                                            user{
                                                username,
                                                email
                                            }
                                        }
                                    }
                                }
                    `;
          await this.$axios.post(`/api/graphql`, {
            query: updateQuery
          });
          this.$store.dispatch('auth/updateUserHideouts');
        } else {
          this.claimable = false;
        }
      } catch (e) {
        console.log(e.response.data);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "46afef01"
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map