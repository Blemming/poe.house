(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{390:function(t,e,s){"use strict";s.r(e);s(20),s(19);var r=s(1),o=s.n(r),a={components:{CardLayout:s(96).a},data:function(){return{processing:!1,progress:0,newHideouts:[]}},computed:{testDoodads:function(){return this.$getDoodadsFromHideout(this.$store.state.doodads,this.hideouts[0].hideoutDoodads)},testFavorCost:function(){return this.$favorCostNotString(this.testDoodads)}},asyncData:function(){var t=o()(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.app.$axios.$get("/api/hideouts?_limit=9999");case 3:return s=t.sent,t.abrupt("return",{hideouts:s});case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),methods:{processData:function(){var t=o()(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.processing=!this.processing,t.t0=regeneratorRuntime.keys(this.hideouts);case 2:if((t.t1=t.t0()).done){t.next=18;break}return e=t.t1.value,t.prev=4,s=this.$mastersObject(this.hideouts[e].hideoutDoodads),t.next=8,this.$axios.put("/api/hideouts/".concat(this.hideouts[e].id),{hideoutMasters:s});case 8:console.info("".concat(this.hideouts[e].id," is OK")),this.progress++,t.next=16;break;case 12:t.prev=12,t.t2=t.catch(4),console.error("".concat(this.hideouts[e].id," is not OK")),console.error(t.t2);case 16:t.next=2;break;case 18:this.processing=!this.processing;case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(){return t.apply(this,arguments)}}()}},n=s(16),i=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-layout",{attrs:{title:"Custom Data Processing"}},[s("div",{staticClass:"row justify-content-center"},[s("p",{staticClass:"col-12 text-center"},[t._v("\n\t\t\tProcess data\n\t\t")]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.processData(e)}}},[t._v("Process")])]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[s("p",{staticClass:"col-12 text-center"},[t._v("\n\t\t\tProcessing data\n\t\t")]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar",style:{width:t.progress/(t.hideouts.length-1)*100+"%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])])])},[],!1,null,null,null);i.options.__file="data-processing.vue";e.default=i.exports}}]);