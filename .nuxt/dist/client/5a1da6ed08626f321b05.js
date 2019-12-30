(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{394:function(t,e,s){"use strict";s.r(e);s(48),s(20),s(19);var a=s(1),i=s.n(a),n={middleware:"auth",components:{CardLayout:s(96).a},data:function(){return{user:{},claimable:!0}},computed:{userHideouts:function(){return this.user.hideouts?this.user.hideouts:[]}},created:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getUserHideouts();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getImage:function(t){return/.jpg|.png|jpeg/gi.test(t.hideoutScreenshot)?t.hideoutScreenshot:this.$store.getters.getHideout(t.hideoutType).Icon},deleteHideout:function(){var t=i()(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/hideouts?hideoutId=".concat(e));case 3:return(s=t.sent)[0].isDeleted=!0,t.next=7,this.$axios.put("/api/hideouts/".concat(s[0].id),s[0]);case 7:return t.next=9,this.$store.dispatch("auth/updateUserHideouts");case 9:return t.next=11,this.getUserHideouts();case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e){return t.apply(this,arguments)}}(),getHideout:function(t){return this.$store.getters.getHideout(t).Name},getUserHideouts:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,s,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="",this.$store.state.auth.user&&(e='\n                query{\n                    user(id:"'.concat(this.$store.state.auth.user._id,'"){\n                            username\n                            confirmed\n                            hideouts(where:{\n                                isDeleted_ne:true\n                            }){\n                                hideoutId\n                                nameDescription\n                                hideoutType\n                                views\n                                downloads\n                                comments{\n                                    _id\n                                }\n                                hideoutDateSubmit\n                                hideoutMasters\n                                hideoutScreenshot\n                                votes{\n                                    score\n                                }\n                            }\n                            }\n                        }\n                ')),t.prev=2,t.next=5,this.$axios.$post("/api/graphql",{query:e});case 5:s=t.sent,a=s.data,this.user=a.user,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[2,10]])}));return function(){return t.apply(this,arguments)}}(),claimEmailHideouts:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,s,a,i,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e='\n                        query{\n                            hideouts(where:{\n                                authorEmail:"'.concat(this.$store.state.auth.user.email,'",\n                                isDeleted_ne:true\n                            }){\n                                _id\n                            }\n                            }\n                        '),t.next=4,this.$axios.$post("/api/graphql",{query:e});case 4:if(s=t.sent,a=s.data,i="",!(a.hideouts.length>0)){t.next=15;break}return a.hideouts.forEach(function(t){i+=', "'.concat(t._id,'"')}),n="\n                                mutation{\n                                    updateHideout(input:{\n                                        where:{\n                                            id:".concat(i.replace(', "','"'),'\n                                        },\n                                        data:{\n                                            user:"').concat(this.$store.state.auth.user._id,'"\n                                        }\n                                    }){\n                                        hideout{\n                                            user{\n                                                username,\n                                                email\n                                            }\n                                        }\n                                    }\n                                }\n                    '),t.next=12,this.$axios.post("/api/graphql",{query:n});case 12:this.$store.dispatch("auth/updateUserHideouts"),t.next=16;break;case 15:this.claimable=!1;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0.response.data);case 21:case"end":return t.stop()}},t,this,[[0,18]])}));return function(){return t.apply(this,arguments)}}()}},r=s(16),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row py-5"},[t.$store.getters["auth/username"]?s("div",{staticClass:"col-12"},[s("card-layout",{attrs:{title:t.user.username}},[s("div",{staticClass:"card-body text-primary text-left"},[t.$store.state.auth.user.confirmed?t._e():s("div",[s("h4",[t._v("Account not confirmed, check your email to confirm account. ")]),t._v(" "),s("p",[t._v("If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact\n\t\t\t\t\t\t"),s("a",{staticClass:"text-white",attrs:{href:"mailto:support@poe.house"}},[t._v("support@poe.house")]),t._v(" with your registered email.\n\t\t\t\t\t")])]),t._v(" "),t.$store.state.auth.user.confirmed?s("div",[t.userHideouts.length<=0||!t.userHideouts?s("div",{staticClass:"text-center"},[t.claimable?s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.claimEmailHideouts()}}},[s("h4",[t._v("Claim email hideouts")])]):t._e(),t._v(" "),t.claimable?t._e():s("h4",[t._v("You have no hideouts yet. If you want to claim a hideout send an email to\n\t\t\t\t\t\t\t"),s("a",{staticClass:"text-white",attrs:{href:"mailto:support@poe.house"}},[t._v("support@poe.house")]),t._v(" with a link to the hideout and your account name.\n\t\t\t\t\t\t")])]):t._e(),t._v(" "),t._l(t.userHideouts,function(e,a){return s("div",{key:a,staticClass:"col-xs-12 my-2"},[s("div",{staticClass:"media border-bottom border-dark"},[s("div",{staticClass:"row w-100"},[s("img",{staticClass:"align-self-center mr-3 xs-12 lg-2",attrs:{src:t.$getThumbnail(t.getImage(e))}}),t._v(" "),s("div",{staticClass:"media-body py-3  xs-12 lg-10"},[s("div",{staticClass:"card-title text-white "},[s("h4",[t._v(t._s(e.nameDescription))]),t._v(" "),s("small",{staticClass:"text-primary"},[t._v(t._s(e.views)+" "),s("i",{staticClass:"fas fa-eye pr-2"}),t._v(" "+t._s(e.downloads)+" "),s("i",{staticClass:"fas fa-file-download pr-2"}),t._v(" "+t._s(e.comments.length)+" "),s("i",{staticClass:"fas fa-comments"})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("table",{staticClass:"table table-sm table-striped table-dark bg-secondary text-primary "},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Hideout")]),t._v(" "),s("td",{staticClass:"text-white"},[s("strong",[t._v(t._s(t.getHideout(e.hideoutType)))])])]),t._v(" "),e.views?s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Views")]),t._v(" "),s("td",{staticClass:"text-white"},[s("strong",[t._v(t._s(e.views))])])]):t._e(),t._v(" "),e.downloads?s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Downloads")]),t._v(" "),s("td",{staticClass:"text-white"},[s("strong",[t._v(t._s(e.downloads))])])]):t._e(),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Posted")]),t._v(" "),s("td",{staticClass:"text-white"},[s("strong",[t._v(t._s(t.$moment.unix(e.hideoutDateSubmit.seconds).format(" MMMM Do YYYY")))])])])])])])]),t._v(" "),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-3"},[e.hideoutMasters.mtx?s("img",{attrs:{src:"https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000",alt:""}}):t._e(),t._v(" "),e.hideoutMasters.mtx?s("small",[t._v("MTX")]):t._e()]),t._v(" "),s("div",{staticClass:"col-3 text-right"},[s("nuxt-link",{staticClass:"btn btn-primary mt-3",attrs:{to:"/hideout/"+e.hideoutId+"/edit"}},[t._v("Edit")]),t._v(" "),s("a",{staticClass:"btn btn-danger text-white mt-3",attrs:{hrf:"#","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Delete")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog bg-dark",attrs:{role:"document"}},[s("div",{staticClass:"modal-content  bg-secondary"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Deletion Confirmation")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body text-left"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAre you sure you want to delete this hideout ? It will be lost for ever!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){s.preventDefault(),t.deleteHideout(e.hideoutId)}}},[t._v("Confirm")]),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Cancel")])])])])])],1)])])])])])})],2):t._e()])])],1):t._e()])},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);