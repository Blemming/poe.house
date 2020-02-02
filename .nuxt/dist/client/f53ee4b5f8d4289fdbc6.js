(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{393:function(t,e,r){"use strict";r.r(e);r(19);var s=r(1),a=r.n(s),o=r(12),i=r.n(o),n=r(96),l=r(69),u={components:{CardLayout:n.a},data:function(){return{email:"",password:"",username:"",registered:!!this.$store.getters["auth/username"],rePassword:"",error:"",loading:!1}},computed:{isError:function(){return!!this.error||!!this.noPasswordMatchError},passwordsMatch:function(){return this.password===this.rePassword},noPasswordMatchError:function(){return this.passwordsMatch?"":"Password does not match"}},methods:i()({handleSubmit:function(){var t=a()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!this.passwordsMatch){t.next=7;break}return this.loading=!0,t.next=5,this.registerUser({username:this.username,email:this.email,password:this.password});case 5:this.loading=!1,this.registered=!0;case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),this.loading=!1,this.error=t.t0.message;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()},Object(l.b)({registerUser:"auth/registerUser"}))},d=r(16),c=Object(d.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"col-md-6 offset-md-3 mt-3"},[r("card-layout",{attrs:{title:"Register"}},[t.registered?r("div",[r("h4",[t._v("Account not confirmed, check your email to confirm account. ")]),t._v(" "),r("p",[t._v("If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact\n\t\t\t\t\t"),r("a",{staticClass:"text-white",attrs:{href:"mailto:support@poe.house"}},[t._v("support@poe.house")]),t._v(" with your registered email.\n\t\t\t\t")])]):r("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{id:"username",type:"username",autofocus:"true",placeholder:"Enter your username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t.isError?r("small",{staticClass:"form-text text-center text-danger",attrs:{id:"passwordHelp"}},[t._v(t._s(t.error))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"email",autofocus:"true",placeholder:"Enter your email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")]),t._v(" "),t.isError?r("small",{staticClass:"form-text text-center text-danger",attrs:{id:"passwordHelp"}},[t._v(t._s(t.error))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",label:"password",type:"password",autofocus:"true",placeholder:"Enter your password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.isError?r("small",{staticClass:"form-text text-center text-danger",attrs:{id:"passwordHelp"}},[t._v(t._s(t.error))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Confirm Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.rePassword,expression:"rePassword"}],staticClass:"form-control",attrs:{id:"rePassword",label:"rePassword",type:"password",autofocus:"true",placeholder:"Retype your password",required:""},domProps:{value:t.rePassword},on:{input:function(e){e.target.composing||(t.rePassword=e.target.value)}}}),t._v(" "),r("div",{staticClass:"mt-3",staticStyle:{height:"50px"}},[t.noPasswordMatchError?r("small",{staticClass:"form-text text-center text-danger m-0",attrs:{id:"passwordHelp"}},[t._v(t._s(t.noPasswordMatchError))]):t._e()])]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-block mt-3",attrs:{disabled:t.loading,type:"submit"}},[t._v("Submit")]),t._v(" "),r("p",{staticClass:"text-center mt-3"},[t._v("\n\t\t\t\t\tAlready have an account?\n\t\t\t\t\t"),r("router-link",{attrs:{to:"/login",tag:"a"}},[t._v("\n\t\t\t\t\t\tLogin\n\t\t\t\t\t")])],1)])])],1)])},[],!1,null,null,null);c.options.__file="register.vue";e.default=c.exports}}]);