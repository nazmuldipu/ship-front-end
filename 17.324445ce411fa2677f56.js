(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"e/j9":function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=e("mrSG"),o=e("/7iW"),i=function(){function n(n){this.userService=n}return n.prototype.ngOnInit=function(){this.getServiceAdminAgents()},n.prototype.getServiceAdminAgents=function(n){return void 0===n&&(n=null),t.b(this,void 0,void 0,function(){var l=this;return t.e(this,function(e){return this.userService.getServiceAdminAgents(n).subscribe(function(n){console.log(n),l.userPage=n}),[2]})})},n.prototype.onCreate=function(n){return t.b(this,void 0,void 0,function(){var l=this;return t.e(this,function(e){switch(e.label){case 0:return[4,this.userService.createSerivceAdminAgent(n).subscribe(function(n){l.getServiceAdminAgents()})];case 1:return e.sent(),[2]}})})},n.prototype.onSelect=function(n){var l=this.userPage.content.find(function(l){return l.id===n});this.user=l},n.prototype.onRemoveAgent=function(n){return t.b(this,void 0,void 0,function(){var l=this;return t.e(this,function(e){switch(e.label){case 0:return console.log("On leave ",n),[4,this.userService.removeServiceAdminAgent(n).subscribe(function(n){l.getServiceAdminAgents()})];case 1:return e.sent(),[2]}})})},n}(),r=function(){return function(){}}(),s=e("pMnS"),d=e("9AJC"),a=e("UhKO"),c=e("FCUJ"),m=e("gIcY"),g=e("Ip0R"),p=(e("zdEN"),function(){function n(n){this.builder=n,this.create=new u.EventEmitter,this.removeAgent=new u.EventEmitter,this.exists=!1,this.createForm()}return n.prototype.ngOnChanges=function(n){n.user&&this.user&&this.user.id&&(this.exists=!0,this.form.patchValue(t.a({},{name:this.user.name,phoneNumber:this.user.phoneNumber,email:this.user.email,commission:this.user.commission})))},n.prototype.createForm=function(){this.form=this.builder.group({name:["",m.v.required],phoneNumber:["",[m.v.required,m.v.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")]],email:"",commission:["",m.v.required]})},n.prototype.submit=function(){if(this.form.valid){if(this.exists){var n=t.a({},this.user,this.form.value);this.create.emit(n)}else this.create.emit(this.form.value);this.onClear()}},n.prototype.onRemoveAgent=function(n){this.removeAgent.emit(n),this.onClear()},n.prototype.onClear=function(){this.form.reset(),this.exists=!1},n}()),v=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"small",[["class","text-danger"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Name required "]))],null,null)}function h(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,4,"small",[["class","text-danger"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Phone number required "])),(n()(),u["\u0275eld"](3,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Phone number format 01934953023 "]))],null,function(n,l){var e=l.component;n(l,1,0,!e.form.controls.phoneNumber.errors.required),n(l,3,0,!e.form.controls.phoneNumber.errors.pattern)})}function b(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"small",[["class","text-danger"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Commission required "]))],null,null)}function C(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-sm btn-success mx-1"],["type","button"]],null,[[null,"click"]],function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==t.onRemoveAgent(t.user.id)&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,[" Remove this agent "]))],null,null)}function A(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,59,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,o=n.component;return"submit"===l&&(t=!1!==u["\u0275nov"](n,2).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==o.submit()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,m.y,[],null,null),u["\u0275did"](2,540672,null,0,m.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,m.c,null,[m.g]),u["\u0275did"](4,16384,null,0,m.o,[[4,m.c]],null,null),(n()(),u["\u0275eld"](5,0,null,null,45,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,10,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](7,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Name *"])),(n()(),u["\u0275eld"](9,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,10)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,10).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,10)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,10)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](10,16384,null,0,m.d,[u.Renderer2,u.ElementRef,[2,m.a]],null,null),u["\u0275prd"](1024,null,m.l,function(n){return[n]},[m.d]),u["\u0275did"](12,671744,null,0,m.f,[[3,m.c],[8,null],[8,null],[6,m.l],[2,m.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.m,null,[m.f]),u["\u0275did"](14,16384,null,0,m.n,[[4,m.m]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](16,16384,null,0,g.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](17,0,null,null,12,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](18,0,null,null,1,"label",[["for","phone"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Phone *"])),(n()(),u["\u0275eld"](20,0,null,null,7,"input",[["class","form-control"],["formControlName","phoneNumber"],["id","phone"],["maxlength","11"],["placeholder","Phone"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,21)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,21).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,21)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,21)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](21,16384,null,0,m.d,[u.Renderer2,u.ElementRef,[2,m.a]],null,null),u["\u0275did"](22,540672,null,0,m.j,[],{maxlength:[0,"maxlength"]},null),u["\u0275prd"](1024,null,m.k,function(n){return[n]},[m.j]),u["\u0275prd"](1024,null,m.l,function(n){return[n]},[m.d]),u["\u0275did"](25,671744,null,0,m.f,[[3,m.c],[6,m.k],[8,null],[6,m.l],[2,m.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.m,null,[m.f]),u["\u0275did"](27,16384,null,0,m.n,[[4,m.m]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](29,16384,null,0,g.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](30,0,null,null,8,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](31,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Email"])),(n()(),u["\u0275eld"](33,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,34)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,34).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,34)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,34)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](34,16384,null,0,m.d,[u.Renderer2,u.ElementRef,[2,m.a]],null,null),u["\u0275prd"](1024,null,m.l,function(n){return[n]},[m.d]),u["\u0275did"](36,671744,null,0,m.f,[[3,m.c],[8,null],[8,null],[6,m.l],[2,m.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.m,null,[m.f]),u["\u0275did"](38,16384,null,0,m.n,[[4,m.m]],null,null),(n()(),u["\u0275eld"](39,0,null,null,11,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](40,0,null,null,1,"label",[["for","commission"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Commission *"])),(n()(),u["\u0275eld"](42,0,null,null,6,"input",[["class","form-control"],["formControlName","commission"],["id","commission"],["placeholder","Commission"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,43)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,43).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,43)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,43)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==u["\u0275nov"](n,44).onChange(e.target.value)&&t),"input"===l&&(t=!1!==u["\u0275nov"](n,44).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,44).onTouched()&&t),t},null,null)),u["\u0275did"](43,16384,null,0,m.d,[u.Renderer2,u.ElementRef,[2,m.a]],null,null),u["\u0275did"](44,16384,null,0,m.x,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,m.l,function(n,l){return[n,l]},[m.d,m.x]),u["\u0275did"](46,671744,null,0,m.f,[[3,m.c],[8,null],[8,null],[6,m.l],[2,m.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.m,null,[m.f]),u["\u0275did"](48,16384,null,0,m.n,[[4,m.m]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](50,16384,null,0,g.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](51,0,null,null,8,"div",[["class","d-flex flex-row-reverse bd-highlight my-2 mb-5"]],null,null,null,null,null)),(n()(),u["\u0275eld"](52,0,null,null,3,"button",[["class","btn btn-sm mx-1"],["type","submit"]],null,null,null,null,null)),u["\u0275did"](53,278528,null,0,g.l,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](54,{disabled:0,"btn-warning":1,"btn-success":2}),(n()(),u["\u0275ted"](55,null,[" "," User "])),(n()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](57,16384,null,0,g.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](58,0,null,null,1,"button",[["class","btn btn-sm btn-danger mx-1"],["type","button"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.onClear()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,[" Clear "]))],function(n,l){var e=l.component;n(l,2,0,e.form),n(l,12,0,"name"),n(l,16,0,e.form.controls.name.errors&&e.form.controls.name.touched),n(l,22,0,"11"),n(l,25,0,"phoneNumber"),n(l,29,0,e.form.controls.phoneNumber.errors&&e.form.controls.phoneNumber.touched),n(l,36,0,"email"),n(l,46,0,"commission"),n(l,50,0,e.form.controls.commission.errors&&e.form.controls.commission.touched);var u=n(l,54,0,e.form.invalid,e.exists,!e.exists);n(l,53,0,"btn btn-sm mx-1",u),n(l,57,0,e.exists)},function(n,l){var e=l.component;n(l,0,0,u["\u0275nov"](l,4).ngClassUntouched,u["\u0275nov"](l,4).ngClassTouched,u["\u0275nov"](l,4).ngClassPristine,u["\u0275nov"](l,4).ngClassDirty,u["\u0275nov"](l,4).ngClassValid,u["\u0275nov"](l,4).ngClassInvalid,u["\u0275nov"](l,4).ngClassPending),n(l,9,0,u["\u0275nov"](l,14).ngClassUntouched,u["\u0275nov"](l,14).ngClassTouched,u["\u0275nov"](l,14).ngClassPristine,u["\u0275nov"](l,14).ngClassDirty,u["\u0275nov"](l,14).ngClassValid,u["\u0275nov"](l,14).ngClassInvalid,u["\u0275nov"](l,14).ngClassPending),n(l,20,0,u["\u0275nov"](l,22).maxlength?u["\u0275nov"](l,22).maxlength:null,u["\u0275nov"](l,27).ngClassUntouched,u["\u0275nov"](l,27).ngClassTouched,u["\u0275nov"](l,27).ngClassPristine,u["\u0275nov"](l,27).ngClassDirty,u["\u0275nov"](l,27).ngClassValid,u["\u0275nov"](l,27).ngClassInvalid,u["\u0275nov"](l,27).ngClassPending),n(l,33,0,u["\u0275nov"](l,38).ngClassUntouched,u["\u0275nov"](l,38).ngClassTouched,u["\u0275nov"](l,38).ngClassPristine,u["\u0275nov"](l,38).ngClassDirty,u["\u0275nov"](l,38).ngClassValid,u["\u0275nov"](l,38).ngClassInvalid,u["\u0275nov"](l,38).ngClassPending),n(l,42,0,u["\u0275nov"](l,48).ngClassUntouched,u["\u0275nov"](l,48).ngClassTouched,u["\u0275nov"](l,48).ngClassPristine,u["\u0275nov"](l,48).ngClassDirty,u["\u0275nov"](l,48).ngClassValid,u["\u0275nov"](l,48).ngClassInvalid,u["\u0275nov"](l,48).ngClassPending),n(l,55,0,e.exists?"Update":"Create")})}var R=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"span",[["class","row px-3 details-title text-left"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Agents"])),(n()(),u["\u0275eld"](3,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u["\u0275eld"](4,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),u["\u0275eld"](5,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,1,"service-admin-agent-list",[],null,[[null,"userId"],[null,"page"]],function(n,l,e){var u=!0,t=n.component;return"userId"===l&&(u=!1!==t.onSelect(e)&&u),"page"===l&&(u=!1!==t.getServiceAdminAgents(e)&&u),u},a.b,a.a)),u["\u0275did"](7,49152,null,0,c.a,[],{userPage:[0,"userPage"]},{userId:"userId",page:"page"}),(n()(),u["\u0275eld"](8,0,null,null,5,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),u["\u0275eld"](9,0,null,null,4,"div",[["class","p-3 shadow-sm"]],null,null,null,null,null)),(n()(),u["\u0275eld"](10,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Add Agent"])),(n()(),u["\u0275eld"](12,0,null,null,1,"agent-form",[],null,[[null,"create"],[null,"removeAgent"]],function(n,l,e){var u=!0,t=n.component;return"create"===l&&(u=!1!==t.onCreate(e)&&u),"removeAgent"===l&&(u=!1!==t.onRemoveAgent(e)&&u),u},A,v)),u["\u0275did"](13,573440,null,0,p,[m.e],{user:[0,"user"]},{create:"create",removeAgent:"removeAgent"})],function(n,l){var e=l.component;n(l,7,0,e.userPage),n(l,13,0,e.user)},null)}function S(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-add-agent",[],null,null,null,y,R)),u["\u0275did"](1,114688,null,0,i,[o.a],null,null)],function(n,l){n(l,1,0)},null)}var E=u["\u0275ccf"]("app-add-agent",i,S,{},{},[]),I=e("CLyB"),x=e("4GxJ"),N=e("ZYCi"),w=e("bBiL"),P=e("KZX/"),_=e("MKLO");e.d(l,"SUsersModuleNgFactory",function(){return k});var k=u["\u0275cmf"](r,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,d.a,d.b,d.h,d.i,d.e,d.f,d.g,E]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,g.p,g.o,[u.LOCALE_ID,[2,g.B]]),u["\u0275mpd"](4608,m.z,m.z,[]),u["\u0275mpd"](4608,m.e,m.e,[]),u["\u0275mpd"](4608,I.DaterangepickerConfig,I.DaterangepickerConfig,[]),u["\u0275mpd"](4608,x.A,x.A,[u.ComponentFactoryResolver,u.Injector,x.kb,x.B]),u["\u0275mpd"](1073742336,g.b,g.b,[]),u["\u0275mpd"](1073742336,N.n,N.n,[[2,N.t],[2,N.k]]),u["\u0275mpd"](1073742336,m.w,m.w,[]),u["\u0275mpd"](1073742336,m.i,m.i,[]),u["\u0275mpd"](1073742336,m.t,m.t,[]),u["\u0275mpd"](1073742336,w.Daterangepicker,w.Daterangepicker,[]),u["\u0275mpd"](1073742336,x.c,x.c,[]),u["\u0275mpd"](1073742336,x.f,x.f,[]),u["\u0275mpd"](1073742336,x.g,x.g,[]),u["\u0275mpd"](1073742336,x.k,x.k,[]),u["\u0275mpd"](1073742336,x.l,x.l,[]),u["\u0275mpd"](1073742336,x.r,x.r,[]),u["\u0275mpd"](1073742336,x.w,x.w,[]),u["\u0275mpd"](1073742336,x.C,x.C,[]),u["\u0275mpd"](1073742336,x.G,x.G,[]),u["\u0275mpd"](1073742336,x.J,x.J,[]),u["\u0275mpd"](1073742336,x.M,x.M,[]),u["\u0275mpd"](1073742336,x.P,x.P,[]),u["\u0275mpd"](1073742336,x.S,x.S,[]),u["\u0275mpd"](1073742336,x.W,x.W,[]),u["\u0275mpd"](1073742336,x.X,x.X,[]),u["\u0275mpd"](1073742336,x.Y,x.Y,[]),u["\u0275mpd"](1073742336,x.D,x.D,[]),u["\u0275mpd"](1073742336,P.a,P.a,[]),u["\u0275mpd"](1073742336,_.a,_.a,[]),u["\u0275mpd"](1073742336,r,r,[]),u["\u0275mpd"](1024,N.i,function(){return[[{path:"agent",component:i}]]},[])])})},zdEN:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var u,t=function(){return function(n,l){this.name=n,this.phoneNumber=l,this.username=l}}();!function(n){n.ROLE_ADMIN="Admin",n.ROLE_AGENT="Agent",n.ROLE_SERVICE_ADMIN="Service Admin",n.ROLE_SERVICE_AGENT="Service Agent",n.ROLE_USER="User"}(u||(u={}))}}]);