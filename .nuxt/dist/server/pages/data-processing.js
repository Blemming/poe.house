exports.ids = [2];
exports.modules = {

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/data-processing.vue?vue&type=template&id=526780b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card-layout',{attrs:{"title":'Custom Data Processing'}},[_c('div',{staticClass:"row justify-content-center"},[_c('p',{staticClass:"col-12 text-center"},[_vm._v("\n\t\t\tProcess data\n\t\t")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.processData($event)}}},[_vm._v("Process")])]),_vm._v(" "),_c('div',{staticClass:"row justify-content-center"},[_c('p',{staticClass:"col-12 text-center"},[_vm._v("\n\t\t\tProcessing data\n\t\t")]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"progress"},[_c('div',{staticClass:"progress-bar",style:({width: (((_vm.progress/(_vm.hideouts.length-1))*100) + "%")}),attrs:{"role":"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/data-processing.vue?vue&type=template&id=526780b3&

// EXTERNAL MODULE: ./components/CardLayout.vue + 4 modules
var CardLayout = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/data-processing.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var data_processingvue_type_script_lang_js_ = ({
  components: {
    CardLayout: CardLayout["a" /* default */]
  },

  data() {
    return {
      processing: false,
      progress: 0,
      newHideouts: []
    };
  },

  computed: {
    testDoodads() {
      return this.$getDoodadsFromHideout(this.$store.state.doodads, this.hideouts[0].hideoutDoodads);
    },

    testFavorCost() {
      return this.$favorCostNotString(this.testDoodads);
    }

  },

  async asyncData(context) {
    try {
      const hideouts = await context.app.$axios.$get('/api/hideouts?_limit=9999');
      return {
        hideouts
      };
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async processData() {
      this.processing = !this.processing;

      for (const hideoutIndex in this.hideouts) {
        try {
          // const rawPastebin = this.hideouts[hideoutIndex].hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, '/raw/');
          // const data = await this.$axios.$get(rawPastebin);
          // const pastebinData = this.$parseHideoutFile(data);
          // const hideoutDoodads = await this.$getDoodadsFromHideout(this.$store.state.doodads, pastebinData['Doodads']);
          // const decorationsCost = await this.$favorCostNotString(this.hideouts[hideoutIndex].hideoutDoodads);
          // // hideout.hideoutDoodads = hideoutDoodads;
          // // hideout.decorationsCost = decorationsCost;
          const hideoutMasters = this.$mastersObject(this.hideouts[hideoutIndex].hideoutDoodads);
          await this.$axios.put(`/api/hideouts/${this.hideouts[hideoutIndex].id}`, {
            hideoutMasters
          });
          console.info(`${this.hideouts[hideoutIndex].id} is OK`);
          this.progress++;
        } catch (e) {
          console.error(`${this.hideouts[hideoutIndex].id} is not OK`);
          console.error(e);
        }
      } // for (let i = 0; i < this.hideouts.length; i++) {
      // 	try {
      // 		const hideoutDoodads = this.$getDoodadsFromHideout(this.$store.state.doodads, this.hideouts[i].hideoutDoodads);
      // 		const decorationsCost = this.$favorCostNotString(this.hideouts[i].hideoutDoodads);
      // 		// await this.$axios.put(`/api/hideouts/${this.hideouts[i]._id}`, { hideoutDoodads, decorationsCost });
      // 		this.progress++;
      // 	} catch (e) {
      // 		console.log(e);
      // 	}
      // }


      this.processing = !this.processing;
    }

  }
});
// CONCATENATED MODULE: ./pages/data-processing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_data_processingvue_type_script_lang_js_ = (data_processingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/data-processing.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_data_processingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75aefa46"
  
)

/* harmony default export */ var data_processing = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=data-processing.js.map