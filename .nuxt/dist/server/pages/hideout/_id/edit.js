exports.ids = [3];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("423eeeec", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-dialog,.modal-header{border-radius:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/hideout/_id/edit.vue?vue&type=template&id=1ab9b4f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row py-5"},[_vm._ssrNode("<div class=\"col-12\">","</div>",[_c('card-layout',{attrs:{"title":"Add Hideout"}},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitHideout()}}},[_c('div',{staticClass:"form-row"},[_c('div',{staticClass:"form-group col-md-12 "},[_c('h3',{staticClass:"text-white bg-dark pl-3 pb-1  border-left border-primary"},[_vm._v("About")])]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-10 ml-auto"},[_c('label',{attrs:{"for":"Title"}},[_vm._v("Title")]),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:({required:true,max:150}),expression:"{required:true,max:150}"},{name:"model",rawName:"v-model",value:(_vm.hideout.nameDescription),expression:"hideout.nameDescription"}],staticClass:"form-control",attrs:{"id":"nameDescription","name":"Title","required":"","type":"input","placeholder":"Title"},domProps:{"value":(_vm.hideout.nameDescription)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "nameDescription", $event.target.value)}}}),_vm._v(" "),(_vm.errors.first('Title'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('Title')))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-10 ml-auto"},[_c('label',{attrs:{"for":"inputDescription"}},[_vm._v("Description")]),_vm._v(" "),_c('div',{staticClass:"row",attrs:{"id":"inputDescription"}},[_c('div',{staticClass:"col-12"},[_c('no-ssr',[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:(_vm.editorSettings),expression:"editorSettings",arg:"myQuillEditor"}],ref:"markdownEditor",staticClass:"w-100 bg-dark text-white",staticStyle:{"height":"200px"},attrs:{"content":_vm.hideout.hideoutDescription,"name":"description","required":""},on:{"change":function($event){return _vm.onEditorChange($event)}}})])],1)])]),_vm._v(" "),(!_vm.$store.getters['auth/username'])?_c('div',{staticClass:"form-group col-6 col-lg-4 ml-auto"},[_c('label',{attrs:{"for":"inputAuthor"}},[_vm._v("Author")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.hideout.author),expression:"hideout.author"}],staticClass:"form-control",attrs:{"id":"inputAuthor","type":"text","placeholder":"Author name"},domProps:{"value":(_vm.hideout.author)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "author", $event.target.value)}}})]):_vm._e(),_vm._v(" "),(!_vm.$store.getters['auth/username'])?_c('div',{staticClass:"form-group col-6 col-lg-4 ml-auto"},[_c('label',{attrs:{"for":"inputAuthor"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('email'),expression:"'email'"},{name:"model",rawName:"v-model",value:(_vm.hideout.authorEmail),expression:"hideout.authorEmail"}],staticClass:"form-control",attrs:{"id":"inputAuthor","name":"authorEmail","type":"email","placeholder":"Author Email"},domProps:{"value":(_vm.hideout.authorEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "authorEmail", $event.target.value)}}}),_vm._v(" "),(_vm.errors.first('authorEmail'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('authorEmail')))]):_vm._e(),_vm._v(" "),_c('p',[_c('small',{staticClass:"text-muted"},[_vm._v("\n\t\t\t\t\t\t\t\tIf you decide to create an account, you will be able to link the hideout to your account.\n\t\t\t\t\t\t\t")])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-row justify-content-end"},[_c('div',{staticClass:"form-group col-12"},[_c('h3',{staticClass:"text-white bg-dark pl-3 pb-1  border-left border-primary"},[_vm._v("Details")])]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-5"},[_c('label',{attrs:{"for":"inputPastebin"}},[_vm._v("Pastebin link")]),_vm._v(" "),_c('div',{staticClass:"input-group"},[(_vm.pastebinSubmitted)?_c('div',{staticClass:"input-group-prepend"},[_c('a',{staticClass:"btn btn-success",attrs:{"href":"#","disabled":""},on:{"click":function($event){$event.preventDefault();}}},[_c('span',[_c('i',{staticClass:"fas fa-check"})])])]):_vm._e(),_vm._v(" "),(_vm.pastebinError)?_c('div',{staticClass:"input-group-prepend"},[_c('a',{staticClass:"btn btn-danger",attrs:{"href":"#","disabled":""},on:{"click":function($event){$event.preventDefault();}}},[_c('span',[_c('i',{staticClass:"fas fa-times"})])])]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:({ required: true, regex: /https:\/\/pastebin.com\// }),expression:"{ required: true, regex: /https:\\/\\/pastebin.com\\// }"},{name:"model",rawName:"v-model",value:(_vm.hideout.hideoutFileLink),expression:"hideout.hideoutFileLink"}],staticClass:"form-control",attrs:{"id":"inputPastebin","disabled":_vm.pastebinSubmitted,"name":"pastebinLink","required":"","type":"text","placeholder":"Link to pastebin"},domProps:{"value":(_vm.hideout.hideoutFileLink)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "hideoutFileLink", $event.target.value)}}}),_vm._v(" "),(_vm.pastebinSubmitted || _vm.pastebinError)?_c('div',{staticClass:"input-group-append"},[_c('a',{staticClass:"btn btn-danger",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.clearPastebin()}}},[_c('span',[_c('i',{staticClass:"far fa-trash-alt"})])])]):_c('div',{staticClass:"input-group-append"},[_c('a',{class:("btn btn-primary " + ((!_vm.hideout.hideoutFileLink)?'disabled':'')),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.resolvePastebin()}}},[(!_vm.pastebinProcessing)?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t\tProcess\n\t\t\t\t\t\t\t\t\t")]):_c('span',[_c('i',{staticClass:"fas fa-cog fa-spin"})])])])]),_vm._v(" "),(_vm.errors.first('pastebinLink'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('pastebinLink')))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-5"},[_c('label',{attrs:{"for":"Imgur Gallery"}},[_vm._v("Imgur Gallery")]),_vm._v(" "),_c('div',{staticClass:"input-group"},[(_vm.hideout.gallery && !_vm.errors.first('Imgur Gallery'))?_c('div',{staticClass:"input-group-prepend"},[_c('a',{staticClass:"btn btn-success",attrs:{"href":"#","disabled":""},on:{"click":function($event){$event.preventDefault();}}},[_c('span',[_c('i',{staticClass:"fas fa-check"})])])]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:({ regex: /https:\/\/imgur.com\// }),expression:"{ regex: /https:\\/\\/imgur.com\\// }"},{name:"model",rawName:"v-model",value:(_vm.hideout.gallery),expression:"hideout.gallery"}],staticClass:"form-control",attrs:{"id":"inputGallery","name":"Imgur Gallery","type":"text","placeholder":"Link to imgur gallery"},domProps:{"value":(_vm.hideout.gallery)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "gallery", $event.target.value)}}}),_vm._v(" "),(_vm.hideout.gallery && !_vm.errors.first('Imgur Gallery'))?_c('div',{staticClass:"input-group-append"},[_c('a',{staticClass:"btn btn-danger",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.hideout.gallery=''}}},[_c('span',[_c('i',{staticClass:"far fa-trash-alt"})])])]):_vm._e()]),_vm._v(" "),(_vm.errors.first('Imgur Gallery'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('Imgur Gallery')))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"w-100"}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-5"},[_c('label',{attrs:{"for":"thumbnail"}},[_vm._v("Thumbnail link "),_c('small',[_vm._v("(Direct link to image)")])]),_vm._v(" "),_c('div',{staticClass:"input-group"},[(!_vm.imageSubmitted)?_c('div',{staticClass:"input-group-prepend"},[_c('a',{class:("btn btn-primary border-left  " + ((!_vm.pastebinSubmitted )?'disabled':'')),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.resolveThumbnail(true)}}},[_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t\tUse default Image\n\t\t\t\t\t\t\t\t\t")])])]):_vm._e(),_vm._v(" "),(!_vm.imageSubmitted)?_c('div',{staticClass:"input-group-prepend"},[_c('a',{class:("btn btn-primary  " + ((!_vm.pastebinSubmitted || !_vm.hideout.gallery|| _vm.imgueGalleryError)?'disabled':'')),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.getThumbnailFromGallery()}}},[_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t\tGallery image\n\t\t\t\t\t\t\t\t\t")])])]):_vm._e(),_vm._v(" "),(_vm.imageSubmitted)?_c('div',{staticClass:"input-group-prepend"},[_c('a',{staticClass:"btn btn-success",attrs:{"href":"#","disabled":""},on:{"click":function($event){$event.preventDefault();}}},[_c('span',[_c('i',{staticClass:"fas fa-check"})])])]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:({ required: true, regex: /^https:\/\/(.*)(.jpg$|.png$)/ }),expression:"{ required: true, regex: /^https:\\/\\/(.*)(.jpg$|.png$)/ }"},{name:"model",rawName:"v-model",value:(_vm.hideout.hideoutScreenshot),expression:"hideout.hideoutScreenshot"}],staticClass:"form-control",attrs:{"id":"inputScreenshot","disabled":!_vm.pastebinSubmitted || _vm.imageSubmitted,"placeholder":(_vm.pastebinSubmitted)?'Link to image url':'Submit Pastebin first',"name":"thumbnail","type":"text"},domProps:{"value":(_vm.hideout.hideoutScreenshot)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "hideoutScreenshot", $event.target.value)}}}),_vm._v(" "),(!_vm.imageSubmitted)?_c('div',{staticClass:"input-group-append"},[_c('a',{class:("btn btn-primary " + ((!_vm.pastebinSubmitted||_vm.error)?'disabled':'')),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.resolveThumbnail()}}},[_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t\tProcess\n\t\t\t\t\t\t\t\t\t")])])]):_vm._e(),_vm._v(" "),(_vm.imageSubmitted)?_c('div',{staticClass:"input-group-append"},[_c('a',{staticClass:"btn btn-danger",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.clearImage()}}},[_c('span',[_c('i',{staticClass:"far fa-trash-alt"})])])]):_vm._e(),_vm._v(" "),_c('small',{staticClass:"text-muted"},[_vm._v("\n\t\t\t\t\t\t\t\tSetting the thumbnail to "),_c('strong',[_vm._v("default")]),_vm._v(" or "),_c('strong',[_vm._v("not")]),_vm._v(" setting one will prevent your hideout from showing up on the default homepage.\n\t\t\t\t\t\t\t")])]),_vm._v(" "),(_vm.errors.first('thumbnail'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('thumbnail')))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-5"},[_c('label',{attrs:{"for":"inputVideo"}},[_vm._v("Video link")]),_vm._v(" "),_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('url:require_protocol'),expression:"'url:require_protocol'"},{name:"model",rawName:"v-model",value:(_vm.hideout.hideoutVideo),expression:"hideout.hideoutVideo"}],staticClass:"form-control",attrs:{"id":"inputVideo","name":"videoLink","type":"text","placeholder":"Link to youtube url"},domProps:{"value":(_vm.hideout.hideoutVideo)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hideout, "hideoutVideo", $event.target.value)}}}),_vm._v(" "),(_vm.errors.first('videoLink'))?_c('span',{staticClass:"badge badge-danger"},[_vm._v(_vm._s(_vm.errors.first('videoLink')))]):_vm._e()])]),_vm._v(" "),(_vm.pastebinSubmitted)?_c('div',{staticClass:"form-row justify-content-center"},[_c('div',{staticClass:"col-12"},[_c('h3',{staticClass:"text-white bg-dark pl-3 pb-1  border-left border-primary"},[_vm._v("Preview")])]),_vm._v(" "),(_vm.pastebinSubmitted || _vm.pastebinError)?_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"form-group col-md-12 p-relative"},[_c('h4',{staticClass:"text-white",attrs:{"for":"inputHideout"}},[_vm._v("Thumbnail")]),_c('br'),_vm._v(" "),_c('div',{staticClass:"image-container"},[(!_vm.imgurGallery)?_c('img',{staticClass:"img-fluid",staticStyle:{"height":"272px","object-fit":"cover"},attrs:{"id":"inputHideout","src":_vm.$getThumbnail(_vm.displayedImage),"alt":""}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-subheader"})])]),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('h4',{staticClass:"text-white text-capitalize"},[_vm._v(_vm._s(_vm.hideout.nameDescription))])]),_vm._v(" "),_c('table',{staticClass:"table table-sm table-striped table-dark bg-secondary text-primary "},[_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Type")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.getHideout(_vm.hideout.hideoutType)))])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Favour required")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.hideoutCost.string))])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Unique decorations")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.getHideoutDoodads.length))])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("MTX")]),_vm._v(" "),_c('td',{staticClass:"text-white"},[_c('strong',[_vm._v(_vm._s(_vm.hideout.isMtx?'Yes':'No'))])])])])]),_vm._v(" "),_c('div',{staticClass:"col-6 mt-3",attrs:{"id":"preview"}},[_c('div',{staticClass:"card bg-secondary"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingOne"}},[_c('h5',{staticClass:"mb-0"},[_c('a',{staticClass:"text-white",attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tPreview\n\t\t\t\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('div',{staticClass:"collapse show  border border-primary bg-dark",attrs:{"id":"collapseOne","aria-labelledby":"headingOne","data-parent":"#preview"}},[_c('div',{staticClass:"ql-editor"},[_c('div',{staticClass:"card-body",staticStyle:{"max-width":"1066px"},domProps:{"innerHTML":_vm._s(_vm.hideout.hideoutDescription)}})])])])])]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.error && _vm.getHideoutDoodads )?_c('div',{staticClass:"form-row justify-content-center mt-5"},[_c('div',{staticClass:"col-12"},[_c('h3',{staticClass:"text-white bg-dark pl-3 pb-1  border-left border-primary"},[_vm._v("\n\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t")])]),_vm._v(" "),_c('div',{staticClass:"col-6 ml-auto"},[_c('vue-recaptcha',{ref:"recaptcha",attrs:{"size":"invisible","sitekey":"6Lce9oEUAAAAAArGCOuyLXTSjFGarewlLYCN9E_e"},on:{"verify":_vm.onCaptchaVerified,"expired":_vm.onCaptchaExpired}}),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"disabled":_vm.status==='submitting' || !!_vm.error || !_vm.getHideoutDoodads,"type":"submit"}},[_vm._v("Edit")])],1)]):_vm._e()])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/hideout/_id/edit.vue?vue&type=template&id=1ab9b4f2&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// EXTERNAL MODULE: external "vue-recaptcha"
var external_vue_recaptcha_ = __webpack_require__(47);
var external_vue_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_vue_recaptcha_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hideout/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var editvue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      const hideouts = await context.app.$axios.$get(`/api/hideouts?hideoutId=${context.params.id}`);
      const hideout = hideouts[0];

      if (hideout.user) {
        if (hideout.user.username === context.store.getters['auth/username'] || context.store.getters['auth/role'] === 'Administrator') {
          return {
            hideout,
            hideoutImage: hideout.hideoutScreenshot || context.store.getters.getHideout(hideout.hideoutType)['Icon'],
            pastebinData: hideout.hideoutDoodads
          };
        } else {
          context.error({
            statusCode: 403,
            message: 'You are not the author of this hideout'
          });
        }
      } else {
        context.error({
          statusCode: 403,
          message: 'You are not the author of this hideout'
        });
      }
    } catch (e) {
      context.error({
        statusCode: 404,
        message: e.message
      });
    }
  },

  middleware: 'auth',
  components: {
    CardLayout: CardLayout["a" /* default */],
    VueRecaptcha: external_vue_recaptcha_default.a
  },

  data() {
    return {
      status: '',
      poeVersion: '3.5.1',
      pastebinData: '',
      pastebinError: false,
      pastebinProcessing: false,
      pastebinSubmitted: true,
      textDescription: '',
      imageSubmitted: true,
      editorSettings: {
        placeholder: 'Description of the hideout',
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
          }], ['link', 'image'], ['clean'] // remove formatting button
          ]
        }
      },
      errorMessage: ''
    };
  },

  computed: {
    hideoutCost() {
      return {
        string: this.$favorCost(this.$favorCostNotString(this.getHideoutDoodads)),
        number: this.$favorCostNotString(this.getHideoutDoodads)
      };
    },

    error() {
      return !!this.errors.items.length > 0;
    },

    masterMaxLevel() {
      if (this.getHideoutDoodads) {
        return this.$mastersObject(this.getHideoutDoodads);
      }
    },

    hideoutDescriptionMD() {
      return this.hideoutDescription;
    },

    imgueGalleryError() {
      return !!this.errors.items.filter(err => err.field === 'Imgur Gallery').length;
    },

    imgurGallery() {
      // return false;
      // return !!/imgur/g.test(this.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideoutScreenshot);
      return !/.png|.jpg|.jpeg/g.test(this.hideoutImage);
    },

    displayedImage() {
      return this.hideout.hideoutScreenshot;
    },

    getHideoutDoodads() {
      if (this.pastebinData['Doodads']) {
        return this.$getDoodadsFromHideout(this.$store.state.doodads, this.pastebinData['Doodads']);
      }

      if (this.pastebinData) {
        // return 'noooo';
        return this.$getDoodadsFromHideout(this.$store.state.doodads, this.pastebinData);
      }
    },

    hideoutOptions() {
      return this.$store.state.hideouts;
    }

  },

  mounted() {
    this.textDescription = this.hideout.hideoutDescription;
  },

  methods: {
    getHideout(hash) {
      return this.$store.getters.getHideout(hash)['Name'];
    },

    async getThumbnailFromGallery() {
      if (this.hideout.gallery && /imgur.com\/a/.test(this.hideout.gallery)) {
        const hideoutGallery = this.hideout.gallery.replace(/https:\/\/imgur.com\/a\/([a-zA-Z0-9]*)/gi, '$1');
        const imgurGalleryPhotos = await this.$axios.$get(`/imgur/3/album/${hideoutGallery}/images`);
        this.hideout.hideoutScreenshot = imgurGalleryPhotos.data[0].link;
        this.hideoutImage = imgurGalleryPhotos.data[0].link;
        this.resolveThumbnail();
      }
    },

    strip(html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    },

    submitHideout() {
      this.$refs.recaptcha.execute();
    },

    onEditorChange({
      editor,
      html,
      text
    }) {
      this.textDescription = html;
    },

    resolveThumbnail(defaultImage = false) {
      if (this.hideoutImage) {
        this.imageSubmitted = true;
      }

      if (this.pastebinData && defaultImage) {
        this.hideoutImage = this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideout.hideoutType)[0]['Icon'] || '';
        this.imageSubmitted = true;
      }
    },

    async onCaptchaVerified() {
      if (!this.error && !this.pastebinError) {
        this.status = 'submitting';
        this.$refs.recaptcha.reset();
        let user = this.$store.state.auth.user;

        if (this.$store.state.auth.user.role.name === 'Administrator') {
          user = this.hideout.user;
        }

        try {
          const newHideout = this.$hideoutObject({
            author: this.hideout.author,
            downloads: this.hideout.downloads,
            views: this.hideout.views,
            hideoutId: this.hideout.hideoutId,
            hideoutDateSubmit: this.hideout.hideoutDateSubmit,
            authorEmail: this.hideout.authorEmail,
            nameDescription: this.hideout.nameDescription,
            hideoutType: this.hideout.hideoutType,
            hideoutFileLink: this.hideout.hideoutFileLink,
            hideoutDescription: this.textDescription,
            hideoutScreenshot: this.hideoutImage,
            hideoutVideo: this.hideout.hideoutVideo,
            decorationsCost: this.$favorCostNotString(this.getHideoutDoodads),
            uniqueDecorations: this.getHideoutDoodads.length,
            dateSubmitted: this.hideout.dateSubmitted,
            hideoutDoodads: this.getHideoutDoodads,
            gallery: this.hideout.gallery,
            hideoutMasters: this.masterMaxLevel,
            user: user || null
          });
          await this.$axios.put(`/api/hideouts/${this.hideout._id}`, newHideout);
          this.status = '';
          this.$router.push('/');
        } catch (e) {
          alert(e);
        }
      } else {
        this.errorMessage = 'Cannot submit hideout until errors are resolved';
      }
    },

    clearPastebin() {
      this.hideout.hideoutType = '';
      this.pastebinData = '';
      this.hideout.hideoutFileLink = '';
      this.pastebinSubmitted = false;
      this.pastebinError = false;
    },

    clearImage() {
      this.hideoutImage = '';
      this.imageSubmitted = false;
    },

    async resolvePastebin() {
      const pastebin = this.hideout.hideoutFileLink;
      this.pastebinError = false;

      if (/https:\/\/pastebin.com\//gi.test(pastebin)) {
        this.pastebinProcessing = true;
        const rawPastebin = pastebin.replace(/https:\/\/pastebin.com\//gi, '/raw/');

        try {
          this.errorMessage = '';
          const {
            data
          } = await this.$axios.get(rawPastebin);
          const pastebinObject = this.$parseHideoutFile(data);

          if (pastebinObject['Hideout Hash']) {
            this.hideout.hideoutType = parseInt(pastebinObject['Hideout Hash']);
            this.pastebinData = this.$parseHideoutFile(data);
            this.pastebinProcessing = false;
            this.pastebinSubmitted = true;
          } else {
            this.errorMessage = 'Not a valid hideout file';
            this.pastebinError = true;
            this.pastebinProcessing = false;
          }
        } catch (e) {
          this.pastebinProcessing = false;
          this.pastebinError = true;
          return e;
        }
      } else {
        this.pastebinProcessing = false;
        this.pastebinError = true;
        this.errorMessage = 'Not a pastebin link';
      }
    },

    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    }

  },

  head() {
    return {
      script: [{
        type: 'text/javascript',
        src: 'https://www.google.com/recaptcha/api.js',
        body: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/hideout/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/hideout/_id/edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "27736bfc"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit.js.map