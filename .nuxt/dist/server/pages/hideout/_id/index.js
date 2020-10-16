exports.ids = [4];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Exalted_Orb.fa33744.png";

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/hideout/_id/index.vue?vue&type=template&id=75cda9d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row py-5"},[_vm._ssrNode("<div class=\"col-12\">","</div>",[_c('card-layout',{attrs:{"title":_vm.hideout.nameDescription}},[(_vm.isImgurGallery)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"carousel border border-dark slide",attrs:{"id":"carouselExampleControls","data-ride":"carousel"}},[_c('div',{staticClass:"carousel-inner bg-dark"},_vm._l((_vm.imgurGalleryPhotos),function(image,index){return _c('div',{key:image.id || index,class:(index===0)?'carousel-item active text-center':'carousel-item text-center'},[_c('img',{staticClass:"img-fluid",attrs:{"src":image.link,"alt":"Card image cap"}})])}),0)]),_vm._v(" "),_c('a',{staticClass:"carousel-control-prev text-white",staticStyle:{"background":"linear-gradient(to right,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"},attrs:{"href":"#carouselExampleControls","role":"button","data-slide":"prev"}},[_c('i',{staticClass:"fas fa-caret-left fa-7x"}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])]),_vm._v(" "),_c('a',{staticClass:"carousel-control-next",staticStyle:{"background":"linear-gradient(to right,rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"},attrs:{"href":"#carouselExampleControls","role":"button","data-slide":"next"}},[_c('i',{staticClass:"fas fa-caret-right fa-7x"}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])])]):_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 mb-5"},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.hideout.hideoutScreenshot || _vm.getScreenshot,"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-5"},[_c('div',{staticClass:"col-12"},[_c('table',{staticClass:"table table-bordered table-striped table-dark bg-secondary text-primary "},[_c('tbody',[_c('tr',[_c('th',{staticClass:"text-center w-25 text-h",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tHideout Type:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.getHideoutType))])]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"text-center w-25 text-h",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tRating:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[(!!_vm.$store.getters['auth/username'])?_c('image-rating',{attrs:{"read-only":false,"src":__webpack_require__(48),"show-rating":false,"item-size":30},on:{"rating-selected":function($event){return _vm.rateHideout()}},model:{value:(_vm.hideout.rating),callback:function ($$v) {_vm.$set(_vm.hideout, "rating", $$v)},expression:"hideout.rating"}}):_c('image-rating',{attrs:{"rating":_vm.$calculateVotes(_vm.hideout.votes),"read-only":true,"src":__webpack_require__(48),"show-rating":false,"item-size":30},on:{"rating-selected":function($event){return _vm.rateHideout()}}})],1)]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"text-center w-25",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tTotal Favor:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$favorCost(_vm.hideout.decorationsCost)))])]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"text-center w-25",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tAuthor:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[(_vm.hideout.user && _vm.hideout.user.username)?_c('nuxt-link',{staticClass:"text-white",attrs:{"to":("/user/" + (_vm.hideout.user._id))}},[_c('i',{staticClass:"fas fa-user"}),_vm._v("  "+_vm._s(_vm.hideout.user.username))]):_c('span',[_vm._v(_vm._s(_vm.hideout.author || 'Anonymous'))])],1)]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"text-center w-25",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tDownload Link:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-primary",class:{'btn-danger':!_vm.hideoutFile, 'disabled':!_vm.hideoutFile},attrs:{"download":((_vm.hideout.nameDescription) + ".hideout"),"href":_vm.downloadLink},on:{"click":function($event){return _vm.downloaded()}}},[(_vm.hideoutFile)?_c('span',[_vm._v("Download")]):_c('span',[_vm._v("PASTEBIN NOT VALID")])]),_vm._v(" "),_c('p',[_c('small',[_vm._v("Note: You might have to change the file extension to .hideout")])])])]),_vm._v(" "),(_vm.hideout.hideoutVideo)?_c('tr',[_c('th',{staticClass:"text-center w-25",attrs:{"scope":"row"}},[_vm._v("\n\t\t\t\t\t\t\t\t\tVideo Link:\n\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('td',[_c('a',{staticClass:"text-danger",attrs:{"href":_vm.hideout.hideoutVideo,"target":"_blank"}},[_c('i',{staticClass:"bg-white fab fa-youtube fa-4x"})])])]):_vm._e(),_vm._v(" "),_c('tr',[_c('th',{staticClass:"text-center w-25 ",attrs:{"scope":"row"}},[_c('small',[_vm._v("\n\t\t\t\t\t\t\t\t\t\tLast Updated:\n\t\t\t\t\t\t\t\t\t")])]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('small',[_vm._v("\n\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.$moment(_vm.hideout.updatedAt).format('HH:mm, MMMM Do YYYY'))+"\n\t\t\t\t\t\t\t\t\t")])])])])])])]),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs",attrs:{"id":"myTab","role":"tablist"}},[_c('li',{staticClass:"nav-item "},[_c('a',{staticClass:"nav-link active",attrs:{"id":"home-tab","data-toggle":"tab","href":"#description","role":"tab","aria-controls":"home","aria-selected":"true"}},[_vm._v("Description")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"id":"list-tab","data-toggle":"tab","href":"#list","role":"tab","aria-controls":"list","aria-selected":"false"}},[_vm._v("Shopping List")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"id":"comment-tab","data-toggle":"tab","href":"#comment","role":"tab","aria-controls":"comment","aria-selected":"false"}},[_vm._v("Comments ("+_vm._s(_vm.hideout.comments.length)+")")])])]),_vm._v(" "),_c('div',{staticClass:"tab-content",attrs:{"id":"myTabContent"}},[_c('div',{staticClass:"tab-pane show active bg-dark mt-3 p-2 border border-primary",attrs:{"id":"description","role":"tabpanel","aria-labelledby":"description-tab"}},[_c('div',{staticClass:"row m-4"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"ql-editor"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.hideout.hideoutDescription)}})])])])]),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"list","role":"tabpanel","aria-labelledby":"list-tab"}},[_c('div',{staticClass:"row m-4"},[_c('div',{staticClass:"col-12"},[_c('h2',{staticClass:"display-4 border border-primary py-3 bg-dark text-center"},[_vm._v("Shopping List")]),_vm._v(" "),_c('hr')]),_vm._v(" "),(_vm.shoppingList.alva.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 panel-title",attrs:{"id":"alva"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseAlva","aria-expanded":"true","aria-controls":"collapseTwo"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://web.poecdn.com/image/Art/2DItems/Hideout/Alva.png?scale=1","alt":""}}),_c('br'),_vm._v(" "),_c('span',{staticClass:"btn btn-primary mt-3"},[_vm._v("Alva decorations")])]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseAlva","aria-labelledby":"headingOne","data-parent":"#alva"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.alva}})],1)])])])]):_vm._e(),_vm._v(" "),(_vm.shoppingList.einhar.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"id":"Einhar"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseEinhar","aria-expanded":"true","aria-controls":"collapseEinhar"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://web.poecdn.com/image/Art/2DItems/Hideout/Einhar.png?scale=1","alt":""}}),_c('br'),_vm._v(" "),_c('span',{staticClass:"btn btn-primary mt-3"},[_vm._v("Einhar decorations")])]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseEinhar","aria-labelledby":"headingOne","data-parent":"#Einhar"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.einhar}})],1)])])])]):_vm._e(),_vm._v(" "),(_vm.shoppingList.niko.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"id":"Niko"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseNiko","aria-expanded":"true","aria-controls":"collapseNiko"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://web.poecdn.com/image/Art/2DItems/Hideout/Niko.png?scale=1","alt":""}}),_c('br'),_vm._v(" "),_c('span',{staticClass:"btn btn-primary mt-3"},[_vm._v("Niko decorations")])]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseNiko","aria-labelledby":"headingOne","data-parent":"#Niko"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.niko}})],1)])])])]):_vm._e(),_vm._v(" "),(_vm.shoppingList.zana.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"id":"Zana"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseZana","aria-expanded":"true","aria-controls":"collapseZana"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://web.poecdn.com/image/Art/2DItems/Hideout/Zana.png?scale=1","alt":""}}),_c('br'),_vm._v(" "),_c('span',{staticClass:"btn btn-primary mt-3"},[_vm._v("Zana decorations")])]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseZana","aria-labelledby":"headingOne","data-parent":"#Zana"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.zana}})],1)])])])]):_vm._e(),_vm._v(" "),(_vm.shoppingList.jun.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"id":"Jun"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseJun","aria-expanded":"true","aria-controls":"collapseJun"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://web.poecdn.com/image/Art/2DItems/Hideout/Jun.png?scale=1","alt":""}}),_c('br'),_vm._v(" "),_c('span',{staticClass:"btn btn-primary mt-3"},[_vm._v("Jun decorations")])]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseJun","aria-labelledby":"headingOne","data-parent":"#Jun"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.jun}})],1)])])])]):_vm._e(),_vm._v(" "),(_vm.shoppingList.other.length> 0)?_c('div',{staticClass:"col-xs-12 col-lg-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12",attrs:{"id":"mtx"}},[_c('h5',{staticClass:"mb-0 text-center"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseOther","aria-expanded":"true","aria-controls":"collapseOther"}},[_c('span',{staticClass:"display-4"},[_c('img',{staticClass:"pb-4",attrs:{"src":"https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000","alt":""}}),_vm._v("Microtransactions")]),_vm._v(" "),_c('hr')])]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseOther","aria-labelledby":"headingOne","data-parent":"#mtx"}},[_c('div',{staticClass:"card bg-secondary"},[_c('shopping-list',{attrs:{"list":_vm.shoppingList.other}})],1)])])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"comment","role":"tabpanel","aria-labelledby":"comment-tab"}},[(_vm.hideout.comments.length > 0)?_c('div',{staticClass:"m-3"},_vm._l((_vm.hideout.comments),function(comment){return _c('div',{key:comment._id,staticClass:"card border border-secondary mt-3"},[_c('div',{staticClass:"card-body bg-dark"},[_c('div',{staticClass:"ql-editor",staticStyle:{"min-height":"0px"}},[_c('div',{domProps:{"innerHTML":_vm._s(comment.comment)}})])]),_vm._v(" "),_c('div',{staticClass:"card-footer text-white bg-secondary text-right"},[_vm._v("\n\t\t\t\t\t\t\t\tBy\n\t\t\t\t\t\t\t\t"),(comment.user && comment.user.username && comment.user.Donator)?_c('nuxt-link',{staticStyle:{"color":"rgb(255, 108, 0)"},attrs:{"to":("/user/" + (comment.user._id))}},[_c('img',{staticStyle:{"max-height":"1rem"},attrs:{"src":"/images/Chaos_Orb.png","alt":""}}),_vm._v("  "+_vm._s(comment.user.username)+"\n\t\t\t\t\t\t\t\t")]):_vm._e(),_vm._v(" "),(comment.user && comment.user.username&& !comment.user.Donator)?_c('nuxt-link',{staticClass:"text-primary",attrs:{"to":("/user/" + (comment.user._id))}},[_c('i',{staticClass:"fas fa-user"}),_vm._v("  "+_vm._s(comment.user.username)+"\n\t\t\t\t\t\t\t\t")]):_vm._e(),_vm._v("\n\n\t\t\t\t\t\t\t\ton "+_vm._s(_vm.$moment(comment.createdAt).format(' MMMM Do YYYY'))+"\n\t\t\t\t\t\t\t")],1)])}),0):_c('div',{staticClass:"m-3"},[_c('div',{staticClass:"bg-dark mt-3 p-2 border border-primary"},[_c('p',[_vm._v("No comments yet")])])]),_vm._v(" "),_c('div',{staticClass:"border-bottom border-dark"}),_vm._v(" "),(_vm.$store.getters['auth/username'])?_c('div',{staticClass:"m-3"},[(!_vm.$store.state.auth.user.confirmed)?_c('div',[_c('h4',[_vm._v("Account not confirmed, check your email to confirm account. ")]),_vm._v(" "),_c('p',[_vm._v("If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact\n\t\t\t\t\t\t\t\t"),_c('a',{staticClass:"text-white",attrs:{"href":"mailto:support@poe.house"}},[_vm._v("support@poe.house")]),_vm._v(" with your registered email.\n\t\t\t\t\t\t\t")])]):_c('no-ssr',[_c('div',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"quill",rawName:"v-quill:myQuillEditor",value:(_vm.editorSettings),expression:"editorSettings",arg:"myQuillEditor"}],ref:"markdownEditor",staticClass:"w-100 bg-dark text-white",staticStyle:{"height":"100px"},attrs:{"content":_vm.currentComment,"name":"description","required":""},on:{"change":function($event){return _vm.onEditorChange($event)}}}),_vm._v(" "),_c('div',{staticClass:"row justify-content-end"},[_c('div',{staticClass:"col mt-3"},[_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.submitComment()}}},[_vm._v("Post")])])])])],1):_vm._e()])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/hideout/_id/index.vue?vue&type=template&id=75cda9d2&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ShoppingList.vue?vue&type=template&id=869ad95a&
var ShoppingListvue_type_template_id_869ad95a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table table-bordered table-striped table-dark bg-secondary text-primary table-hover"},[_vm._ssrNode("<thead><tr><th></th> <th>Quantity</th> <th>Name</th> "+((_vm.list[0]['MasterLevel'] !== '0')?("<th>Level req.</th>"):"<!---->")+" "+((_vm.list[0]['Cost'] !== '0')?("<th>Cost</th>"):"<!---->")+"</tr></thead> <tbody>"+(_vm._ssrList((_vm.orderedList),function(doodad){return ("<tr><td scope=\"row\"><img"+(_vm._ssrAttr("src",doodad['Icon']))+" alt></td> <td>"+_vm._ssrEscape(_vm._s(doodad['Count']))+"</td> <td>"+_vm._ssrEscape(_vm._s(doodad['Name']))+"</td> "+((_vm.list[0]['MasterLevel'] !== '0')?("<td>"+_vm._ssrEscape(_vm._s(doodad['MasterLevel']))+"</td>"):"<!---->")+" "+((_vm.list[0]['Cost'] !== '0')?("<td>"+_vm._ssrEscape(_vm._s(doodad['Cost']))+"</td>"):"<!---->")+"</tr>")}))+"</tbody>")])}
var ShoppingListvue_type_template_id_869ad95a_staticRenderFns = []


// CONCATENATED MODULE: ./components/ShoppingList.vue?vue&type=template&id=869ad95a&

// EXTERNAL MODULE: external "lodash/orderBy"
var orderBy_ = __webpack_require__(16);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShoppingList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ShoppingListvue_type_script_lang_js_ = ({
  props: {
    list: {
      default() {
        return [];
      },

      type: Array
    }
  },
  computed: {
    orderedList() {
      return orderBy_default()(this.list, ['MasterLevel'], 'asc');
    }

  }
});
// CONCATENATED MODULE: ./components/ShoppingList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShoppingListvue_type_script_lang_js_ = (ShoppingListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShoppingList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShoppingListvue_type_script_lang_js_,
  ShoppingListvue_type_template_id_869ad95a_render,
  ShoppingListvue_type_template_id_869ad95a_staticRenderFns,
  false,
  null,
  null,
  "57653394"
  
)

/* harmony default export */ var ShoppingList = (component.exports);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(1);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hideout/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  middleware: 'views',

  async asyncData({
    app,
    store,
    params,
    error
  }) {
    const query = `
        query{
  hideouts(limit:9000, where:{isDeleted_ne:true,hideoutId:"${params.id}"}){
      _id,
    author,
    downloads,
    hideoutFileLink,
    hideoutId,
    hideoutMasters,
    hideoutScreenshot,
    hideoutVideo
    gallery,
    hideoutType,
    nameDescription,
    views,
    hideoutDateSubmit,
    decorationsCost,
    hideoutDescription,
    hideoutDoodads,
    updatedAt,
    comments{
      user{
          Donator,
        username,
        _id
      },
      comment
    },
    user{
        _id,
      username
    },
    votes{
        _id,
      score,
      user{
        _id
      }
    }
  }
}
        `;

    try {
      const {
        data
      } = await app.$axios.$post(`/api/graphql`, {
        query
      });
      const hideout = data.hideouts[0];
      let isImgurGallery = false;
      let imgurGalleryPhotos = '';

      if (data.hideouts.length) {
        if (hideout.gallery && /imgur.com\/a/.test(hideout.gallery)) {
          isImgurGallery = true;
          const hideoutGallery = hideout.gallery.replace(/https:\/\/imgur.com\/a\/([a-zA-Z0-9]*)/gi, '$1');
          imgurGalleryPhotos = await app.$axios.$get(`/imgur/3/album/${hideoutGallery}/images`);
        }

        if (hideout.gallery && /imgur.com\/gallery/.test(hideout.gallery)) {
          isImgurGallery = true;
          const hideoutGallery = hideout.gallery.replace(/https:\/\/imgur.com\/gallery\/([a-zA-Z0-9]*)/gi, '$1');
          imgurGalleryPhotos = await app.$axios.$get(`/imgur/3/gallery/${hideoutGallery}/images`);
        }

        if (hideout) {
          let votes = [];

          if (store.getters['auth/username']) {
            votes = hideout.votes.filter(v => v.user._id === store.state.auth.user._id);
          }

          imgurGalleryPhotos = imgurGalleryPhotos.data && imgurGalleryPhotos.data.images || imgurGalleryPhotos.data;
          return {
            isImgurGallery,
            imgurGalleryPhotos: imgurGalleryPhotos,
            hideout,
            rating: votes.length > 0 ? votes[0].score : undefined
          };
        } else {
          error({
            statusCode: 404,
            message: 'This hideout does not exist'
          });
        }
      } else {
        error({
          statusCode: 404,
          message: 'This hideout does not exist'
        });
      }
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message
      });
    }
  },

  components: {
    CardLayout: CardLayout["a" /* default */],
    ShoppingList: ShoppingList
  },

  data() {
    return {
      hideoutFile: '',
      currentComment: '',
      editorSettings: {
        placeholder: 'Post a comment',
        modules: {
          toolbar: [[{
            'header': 1
          }, {
            'header': 2
          }], // custom button values
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'size': ['small', false, 'large', 'huge']
          }], // custom dropdown
          [{
            'color': []
          }, {
            'background': []
          }], // dropdown with defaults from theme
          [{
            'align': []
          }], ['link'], ['clean'] // remove formatting button
          ]
        }
      }
    };
  },

  computed: {
    getHideoutType() {
      return this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === this.hideout.hideoutType)[0]['Name'];
    },

    getScreenshot() {
      console.log('getting screenshot');
      const image = this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === this.hideout.hideoutType)[0]['Icon'];
      return image.replace(/\?scale=1/gi, '');
    },

    imgurGallery() {
      return !!/imgur/g.test(this.hideout.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideout.hideoutScreenshot);
    },

    shoppingList() {
      const alva = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Alva');
      const einhar = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Einhar');
      const niko = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Niko');
      const zana = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Zana');
      const jun = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Jun');
      const other = this.$getMTX(this.hideout.hideoutDoodads);
      return {
        alva,
        einhar,
        niko,
        zana,
        jun,
        other
      };
    },

    checkUserHasVoted() {
      const votes = this.hideout.votes.filter(v => v.user._id === this.$store.state.auth.user._id) || [];
      return {
        hasVoted: votes.length > 0,
        id: votes.length > 0 ? votes[0]._id : undefined,
        score: votes.length > 0 ? votes[0].score : undefined
      };
    },

    totalFavorCost() {
      return this.$favorCost(this.hideout.hideoutDoodads);
    },

    downloadLink() {
      return `data:text/plain;charset=utf-8,${encodeURIComponent(this.hideoutFile)}`;
    }

  },

  async mounted() {
    try {
      const hideoutLink = this.hideout.hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, '/raw/');
      const hideoutFile = await this.$axios.$get(hideoutLink);
      this.hideoutFile = hideoutFile.replace(/\n/g, '\n');
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    strip(html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    },

    onEditorChange({
      editor,
      html,
      text
    }) {
      this.currentComment = html;
    },

    async submitComment() {
      try {
        await this.$axios.post(`/api/comments`, {
          user: this.$store.state.auth.user,
          comment: this.currentComment,
          hideout: this.hideout
        });
        await this.$store.dispatch('auth/updateUserHideouts');
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },

    async downloaded() {
      const downloaded = JSON.parse(external_js_cookie_default.a.get('downloaded') || '[]');

      try {
        if (downloaded.indexOf(this.hideout.hideoutId) === -1) {
          downloaded.push(this.hideout.hideoutId);
          const downloads = this.hideout.downloads || 0;
          this.hideout.downloads = downloads + 1;
          await this.$axios.put(`/api/hideouts/${this.hideout._id}`, this.hideout);
          external_js_cookie_default.a.set('downloaded', downloaded);
        }
      } catch (e) {
        console.log(e);
      }
    },

    async rateHideout() {
      try {
        if (this.checkUserHasVoted.hasVoted) {
          await this.$axios.put(`/api/votes/${this.checkUserHasVoted.id}`, {
            user: this.$store.state.auth.user,
            score: this.rating,
            hideout: this.hideout
          });
          await this.$store.dispatch('auth/updateUserHideouts'); // location.reload();
        } else {
          await this.$axios.post(`/api/votes`, {
            user: this.$store.state.auth.user,
            score: this.rating,
            hideout: this.hideout
          });
          await this.$store.dispatch('auth/updateUserHideouts');
          location.reload();
        }
      } catch (e) {
        console.log(e);
      }
    }

  },

  head() {
    return {
      title: this.hideout.nameDescription
    };
  }

});
// CONCATENATED MODULE: ./pages/hideout/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hideout_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/hideout/_id/index.vue





/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  hideout_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08b1cd50"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map