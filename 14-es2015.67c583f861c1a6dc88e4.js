(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HymT:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("uWAI"),s=n("tk/3"),b=n("fXoL"),c=n("tyNb");let r=(()=>{class e{constructor(e,t){this.dataSource=e,this.router=t,this.serviceUrl="api/v1/ships",this.serviceAdminUrl="api/v1/admin/ships",this.serviceAdminAgentUrl="api/v1/adminAgent/ships",this.serviceServiceAdminUrl="api/v1/serviceAdmin/ships",this.serviceServiceAgentUrl="api/v1/serviceAgent/ships"}getAllShip(e=0){const t=(new s.c).set("page",e.toString());return this.dataSource.sendRequest("GET",this.serviceUrl,null,!1,t)}getAdminShipPage(e=0){const t=(new s.c).set("page",e.toString());return this.dataSource.sendRequest("GET",this.serviceAdminUrl,null,!0,t)}getAdminShip(e){return this.dataSource.sendRequest("GET",this.serviceAdminUrl+"/"+e,null,!0,null)}saveAdminShip(e){return this.dataSource.sendRequest("POST",this.serviceAdminUrl,e,!0,null)}updateAdminShip(e,t){return this.dataSource.sendRequest("PUT",this.serviceAdminUrl+"/"+e,t,!0,null)}getAdminShipMap(e,t,n){const i=(new s.c).set("startDate",t).set("endDate",n);return this.dataSource.sendRequest("GET",this.serviceAdminUrl+"/shipMap/"+e,null,!0,i)}updateAdminShipMap(e,t,n){const i=(new s.c).set("date",t).set("value",n?"true":"false");return this.dataSource.sendRequest("PUT",this.serviceAdminUrl+"/updateMap/"+e,null,!0,i)}getAdminAgentShips(e=0){const t=(new s.c).set("page",e.toString());return this.dataSource.sendRequest("GET",this.serviceAdminAgentUrl,null,!0,t)}getServiceAdminShips(){return this.dataSource.sendRequest("GET",this.serviceServiceAdminUrl+"/myShips",null,!0,null)}getServiceAgentShips(){return this.dataSource.sendRequest("GET",this.serviceServiceAgentUrl+"/myShips",null,!0,null)}}return e.\u0275fac=function(t){return new(t||e)(b.Vb(i.a),b.Vb(c.b))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},IxGd:function(e,t,n){"use strict";n.r(t),n.d(t,"ROUTES",function(){return oe}),n.d(t,"UsersModule",function(){return ae});var i=n("tyNb"),s=n("3whx"),b=n("mrSG"),c=n("/7iW"),r=n("fXoL"),o=n("3Pt+"),a=n("ofXK"),l=n("uEz7");function u(e,t){1&e&&r.Kb(0,"div",25)}function h(e,t){if(1&e&&(r.Ob(0,"span",29),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.hc("ngClass",t.index%2==0?"badge-success":"badge-info"),r.xb(1),r.Ac(" ",e.name," ")}}function d(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Kb(3,"br"),r.wc(4,h,2,2,"span",26),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Kb(7,"br"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.yc(10),r.bc(11,"date"),r.Nb(),r.Ob(12,"td"),r.yc(13),r.Nb(),r.Ob(14,"td"),r.Ob(15,"button",27),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac().onEdit(n.id)}),r.Kb(16,"i",28),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.Ac(" ",e.name," "),r.xb(2),r.hc("ngForOf",null==e?null:e.roles),r.xb(2),r.Ac(" ",e.phoneNumber," "),r.xb(2),r.Ac(" ",e.email," "),r.xb(2),r.zc(r.dc(11,6,e.created,"MMM d, y, h:mm:ss a")),r.xb(3),r.zc(e.enabled?"ACTIVE":"INACTIVE")}}function m(e,t){if(1&e){const e=r.Pb();r.Ob(0,"pagination",30),r.Yb("getPage",function(t){r.qc(e);const n=r.ac();return n.getUserPage(t,n.query,n.role)}),r.Nb()}if(2&e){const e=r.ac();r.hc("page",e.userPage)}}function g(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac(" ",e.name,", ")}}function p(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",31),r.Ob(1,"div",32),r.Ob(2,"h4",33),r.yc(3,"User details"),r.Nb(),r.Ob(4,"table",34),r.Ob(5,"tr"),r.Ob(6,"td"),r.yc(7,"id"),r.Nb(),r.Ob(8,"td"),r.yc(9),r.Nb(),r.Nb(),r.Ob(10,"tr"),r.Ob(11,"td"),r.yc(12,"name"),r.Nb(),r.Ob(13,"td"),r.yc(14),r.Nb(),r.Nb(),r.Ob(15,"tr"),r.Ob(16,"td"),r.yc(17,"Username"),r.Nb(),r.Ob(18,"td"),r.yc(19),r.Nb(),r.Nb(),r.Ob(20,"tr"),r.Ob(21,"td"),r.yc(22,"Email"),r.Nb(),r.Ob(23,"td"),r.yc(24),r.Nb(),r.Nb(),r.Ob(25,"tr"),r.Ob(26,"td"),r.yc(27,"Phone Number"),r.Nb(),r.Ob(28,"td"),r.yc(29),r.Nb(),r.Nb(),r.Ob(30,"tr"),r.Ob(31,"td"),r.yc(32,"Enabled"),r.Nb(),r.Ob(33,"td"),r.Kb(34,"i",35),r.Nb(),r.Nb(),r.Ob(35,"tr"),r.Ob(36,"td"),r.yc(37,"Roles"),r.Nb(),r.Ob(38,"td"),r.wc(39,g,2,1,"span",21),r.Nb(),r.Nb(),r.Nb(),r.Ob(40,"span"),r.Ob(41,"a",36),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.chageRole(t.user.id,"User")}),r.yc(42," User "),r.Nb(),r.Ob(43,"a",36),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.chageRole(t.user.id,"Service Agent")}),r.yc(44," Ship Agent "),r.Nb(),r.Ob(45,"a",37),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.chageRole(t.user.id,"Service Admin")}),r.yc(46," Ship Admin "),r.Nb(),r.Ob(47,"a",37),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.chageRole(t.user.id,"Agent")}),r.yc(48," Agent "),r.Nb(),r.Ob(49,"button",38),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.activate(t.user.id)}),r.Kb(50,"i",39),r.Nb(),r.Ob(51,"button",40),r.Yb("click",function(){return r.qc(e),r.ac().clear()}),r.yc(52," Close "),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=r.ac();r.xb(9),r.zc(e.user.id),r.xb(5),r.zc(e.user.name),r.xb(5),r.zc(e.user.username),r.xb(5),r.zc(e.user.email),r.xb(5),r.zc(e.user.phoneNumber),r.xb(5),r.hc("ngClass",e.user.enabled?"fa-check":"fa-times"),r.xb(5),r.hc("ngForOf",e.user.roles),r.xb(10),r.hc("ngClass",e.user.enabled?"btn-success":"btn-danger")}}let N=(()=>{class e{constructor(e){this.userService=e,this.loading=!1,console.log("Yureka")}ngOnInit(){this.getUserPage(),console.log("OK")}getUserPage(e=0,t=null,n=null){return Object(b.a)(this,void 0,void 0,function*(){this.loading=!0;try{this.userPage=yield this.userService.findByUsernameOrPhoneNumber(t,n,e).toPromise(),this.loading=!1}catch(i){console.log(i)}})}searchUser(){this.getUserPage(0,this.query,this.role)}getUser(e){return Object(b.a)(this,void 0,void 0,function*(){try{this.user=yield this.userService.getAdminUser(e).toPromise()}catch(t){console.log(t)}})}onRoleChange(e){this.role=e.length>0?e:null,this.getUserPage(0,null,this.role)}onEdit(e){const t=this.userPage.content.find(t=>t.id===e);this.user=t}chageRole(e,t){return Object(b.a)(this,void 0,void 0,function*(){try{const n=yield this.userService.changeAdminUserRole(e,t).toPromise();this.userPage.content.splice(this.userPage.content.findIndex(e=>e.id===n.id),1,n),this.user&&this.getUser(this.user.id)}catch(n){console.log(n)}})}activate(e){return Object(b.a)(this,void 0,void 0,function*(){let t;t=this.user?!this.user.enabled:!this.userPage.content.find(t=>t.id===e).enabled;try{const n=yield this.userService.changeAdminUserEnable(e,t).toPromise();this.userPage.content.splice(this.userPage.content.findIndex(e=>e.id===n.id),1,n),this.user&&this.getUser(this.user.id)}catch(n){console.log(n)}})}clear(){this.user=null}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-list"]],decls:50,vars:5,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"pull-right"],[1,"form-control",3,"change"],["value","","selected",""],["value","User"],["value","Service Agent"],["value","Service Admin"],["value","Agent"],["value","Admin"],[1,"row","m-0"],["class","offset-md-3 col-md-6 p-2",4,"ngIf"],[1,"col-md-7"],[1,"mx-3","my-1",3,"ngSubmit"],[1,"input-group","mb-2"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-search"],["type","text","id","userQuery","name","userQuery","placeholder","User name or phone",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-hover","table-responsive-sm","shadow-sm"],[1,"pl-3"],[4,"ngFor","ngForOf"],["colspan","5"],[3,"page","getPage",4,"ngIf"],["class","col-md-5",4,"ngIf"],[1,"offset-md-3","col-md-6","p-2"],["class","badge badge-pill",3,"ngClass",4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-edit"],[1,"badge","badge-pill",3,"ngClass"],[3,"page","getPage"],[1,"col-md-5"],[1,"p-4","shadow-sm"],[1,"text-center"],[1,"table"],[1,"fa",3,"ngClass"],[1,"btn","btn-info","btn-sm","raised","mr-1",3,"click"],[1,"btn","btn-success","btn-sm","raised","mr-1",3,"click"],[1,"btn","btn-sm","raised",3,"ngClass","click"],[1,"fa","fa-power-off"],[1,"btn","btn-sm","btn-danger","float-right",3,"click"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"span",1),r.yc(2," All User "),r.Ob(3,"span",2),r.Ob(4,"select",3),r.Yb("change",function(e){return t.onRoleChange(e.target.value)}),r.Ob(5,"option",4),r.yc(6,"All"),r.Nb(),r.Ob(7,"option",5),r.yc(8,"User"),r.Nb(),r.Ob(9,"option",6),r.yc(10,"Ship Agent"),r.Nb(),r.Ob(11,"option",7),r.yc(12,"Ship Admin"),r.Nb(),r.Ob(13,"option",8),r.yc(14,"Hotelswave Agent"),r.Nb(),r.Ob(15,"option",9),r.yc(16,"Admin "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(17,"div",0),r.Ob(18,"div",10),r.wc(19,u,1,0,"div",11),r.Nb(),r.Ob(20,"div",10),r.Ob(21,"div",12),r.Ob(22,"form",13),r.Yb("ngSubmit",function(){return t.searchUser()}),r.Ob(23,"div",14),r.Ob(24,"div",15),r.Ob(25,"div",16),r.Kb(26,"i",17),r.yc(27,"\xa0 Search "),r.Nb(),r.Nb(),r.Ob(28,"input",18),r.Yb("ngModelChange",function(e){return t.query=e}),r.Nb(),r.Nb(),r.Nb(),r.Ob(29,"table",19),r.Ob(30,"thead"),r.Ob(31,"tr"),r.Ob(32,"th",20),r.yc(33,"Name"),r.Nb(),r.Ob(34,"th"),r.yc(35,"Phone "),r.Kb(36,"br"),r.yc(37,"Email "),r.Nb(),r.Ob(38,"th"),r.yc(39,"Registration time"),r.Nb(),r.Ob(40,"th"),r.yc(41,"Staus"),r.Nb(),r.Kb(42,"th"),r.Nb(),r.Nb(),r.Ob(43,"tbody"),r.wc(44,d,17,9,"tr",21),r.Nb(),r.Ob(45,"tfoot"),r.Ob(46,"tr"),r.Ob(47,"td",22),r.wc(48,m,1,1,"pagination",23),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.wc(49,p,53,8,"div",24),r.Nb(),r.Nb()),2&e&&(r.xb(19),r.hc("ngIf",t.user),r.xb(9),r.hc("ngModel",t.query),r.xb(16),r.hc("ngForOf",null==t.userPage?null:t.userPage.content),r.xb(4),r.hc("ngIf",null!=t.userPage),r.xb(1),r.hc("ngIf",t.user))},directives:[o.o,o.u,a.n,o.v,o.l,o.m,o.b,o.k,o.n,a.m,a.l,l.a],pipes:[a.e],styles:[""]}),e})(),O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-add"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Ob(0,"p"),r.yc(1," add works!\n"),r.Nb())},styles:[""]}),e})();function f(e,t){1&e&&(r.Ob(0,"small",16),r.yc(1," Name required "),r.Nb())}function y(e,t){if(1&e&&(r.Ob(0,"small",16),r.Ob(1,"div",17),r.yc(2," Phone number required "),r.Nb(),r.Ob(3,"div",17),r.yc(4," Phone number format 01934953023 "),r.Nb(),r.Nb()),2&e){const e=r.ac();r.xb(1),r.hc("hidden",!e.form.controls.phoneNumber.errors.required),r.xb(2),r.hc("hidden",!e.form.controls.phoneNumber.errors.pattern)}}function v(e,t){1&e&&(r.Ob(0,"small",16),r.yc(1," Commission required "),r.Nb())}function x(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",18),r.Yb("click",function(){r.qc(e);const t=r.ac();return t.onRemoveAgent(t.user.id)}),r.yc(1," Remove this agent "),r.Nb()}}n("zdEN");const P=function(e,t,n){return{disabled:e,"btn-warning":t,"btn-success":n}};let S=(()=>{class e{constructor(e){this.builder=e,this.create=new r.n,this.removeAgent=new r.n,this.exists=!1,this.createForm()}ngOnChanges(e){e.user&&this.user&&this.user.id&&(this.exists=!0,this.form.patchValue(Object.assign({},{name:this.user.name,phoneNumber:this.user.phoneNumber,email:this.user.email,commission:this.user.commission})))}createForm(){this.form=this.builder.group({name:["",o.t.required],phoneNumber:["",[o.t.required,o.t.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")]],email:"",commission:["",o.t.required]})}submit(){if(this.form.valid){if(this.exists){const e=Object.assign(Object.assign({},this.user),this.form.value);this.create.emit(e)}else this.create.emit(this.form.value);this.onClear()}}onRemoveAgent(e){this.removeAgent.emit(e),this.onClear()}onClear(){this.form.reset(),this.exists=!1}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(o.c))},e.\u0275cmp=r.Db({type:e,selectors:[["admin-agent-form"]],inputs:{user:"user"},outputs:{create:"create",removeAgent:"removeAgent"},features:[r.vb],decls:27,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["for","name"],["id","name","placeholder","Name","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","phone"],["placeholder","Phone","id","phone","maxlength","11","formControlName","phoneNumber",1,"form-control"],["for","email"],["type","email","id","email","placeholder","Email","formControlName","email",1,"form-control"],["for","commission"],["type","number","id","commission","placeholder","Commission","formControlName","commission",1,"form-control"],[1,"d-flex","flex-row-reverse","bd-highlight","my-2","mb-5"],["type","submit",1,"btn","btn-sm","mx-1",3,"ngClass"],["type","button","class","btn btn-sm btn-success mx-1",3,"click",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-danger","mx-1",3,"click"],[1,"text-danger"],[3,"hidden"],["type","button",1,"btn","btn-sm","btn-success","mx-1",3,"click"]],template:function(e,t){1&e&&(r.Ob(0,"form",0),r.Yb("ngSubmit",function(){return t.submit()}),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"label",3),r.yc(4,"Name *"),r.Nb(),r.Kb(5,"input",4),r.wc(6,f,2,0,"small",5),r.Nb(),r.Ob(7,"div",2),r.Ob(8,"label",6),r.yc(9,"Phone *"),r.Nb(),r.Kb(10,"input",7),r.wc(11,y,5,2,"small",5),r.Nb(),r.Ob(12,"div",2),r.Ob(13,"label",8),r.yc(14,"Email"),r.Nb(),r.Kb(15,"input",9),r.Nb(),r.Ob(16,"div",2),r.Ob(17,"label",10),r.yc(18,"Commission in percent* [for no commission type -1]"),r.Nb(),r.Kb(19,"input",11),r.wc(20,v,2,0,"small",5),r.Nb(),r.Nb(),r.Ob(21,"div",12),r.Ob(22,"button",13),r.yc(23),r.Nb(),r.wc(24,x,2,0,"button",14),r.Ob(25,"button",15),r.Yb("click",function(){return t.onClear()}),r.yc(26," Clear "),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.hc("formGroup",t.form),r.xb(6),r.hc("ngIf",t.form.controls.name.errors&&t.form.controls.name.touched),r.xb(5),r.hc("ngIf",t.form.controls.phoneNumber.errors&&t.form.controls.phoneNumber.touched),r.xb(9),r.hc("ngIf",t.form.controls.commission.errors&&t.form.controls.commission.touched),r.xb(2),r.hc("ngClass",r.nc(7,P,t.form.invalid,t.exists,!t.exists)),r.xb(1),r.Ac(" ",t.exists?"Update":"Create"," User "),r.xb(1),r.hc("ngIf",t.exists))},directives:[o.v,o.l,o.e,o.b,o.k,o.d,a.n,o.h,o.p,a.l],styles:[""]}),e})();function A(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Nb(),r.Ob(7,"td"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.Ob(10,"button",10),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac().onSelect(n.id)}),r.Kb(11,"i",11),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.zc(e.email),r.xb(2),r.zc(e.commission)}}let w=(()=>{class e{constructor(e){this.userService=e}ngOnInit(){this.getUserPage()}getUserPage(e=0){return Object(b.a)(this,void 0,void 0,function*(){try{this.userPage=yield this.userService.getAdminAgents(e).toPromise()}catch(t){console.log(t)}})}onCreate(e){return Object(b.a)(this,void 0,void 0,function*(){try{yield this.userService.createAdminAgent(e).toPromise(),this.getUserPage()}catch(t){console.log(t)}})}onSelect(e){const t=this.userPage.content.find(t=>t.id===e);this.user=t}onRemoveAgent(e){return Object(b.a)(this,void 0,void 0,function*(){if(confirm("Are you sure remove agent with id "+e))try{yield this.userService.removeAdminAgents(e).toPromise(),this.getUserPage()}catch(t){console.log(t)}})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-admin-agent"]],decls:30,vars:3,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row"],[1,"col-md-6"],[1,"text-center"],[1,"table","border"],[4,"ngFor","ngForOf"],["colspan","4"],[3,"page","getPage"],[3,"user","create","removeAgent"],[1,"btn-sm","btn-warning",3,"click"],[1,"fa","fa-pencil-square-o"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"span",1),r.yc(2,"Agents"),r.Nb(),r.Nb(),r.Ob(3,"div",0),r.Ob(4,"div",2),r.Ob(5,"div",3),r.Ob(6,"h3",4),r.yc(7,"Agent list"),r.Nb(),r.Ob(8,"table",5),r.Ob(9,"thead"),r.Ob(10,"tr"),r.Ob(11,"th"),r.yc(12,"Name"),r.Nb(),r.Ob(13,"th"),r.yc(14,"Phone"),r.Nb(),r.Ob(15,"th"),r.yc(16,"Email"),r.Nb(),r.Ob(17,"th"),r.yc(18,"Commission"),r.Nb(),r.Kb(19,"th"),r.Nb(),r.Nb(),r.Ob(20,"tbody"),r.wc(21,A,12,4,"tr",6),r.Nb(),r.Ob(22,"tfoot"),r.Ob(23,"tr"),r.Ob(24,"td",7),r.Ob(25,"pagination",8),r.Yb("getPage",function(e){return t.getUserPage(e)}),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(26,"div",3),r.Ob(27,"h3",4),r.yc(28,"Add Agent"),r.Nb(),r.Ob(29,"admin-agent-form",9),r.Yb("create",function(e){return t.onCreate(e)})("removeAgent",function(e){return t.onRemoveAgent(e)}),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.xb(21),r.hc("ngForOf",null==t.userPage?null:t.userPage.content),r.xb(4),r.hc("page",t.userPage),r.xb(4),r.hc("user",t.user))},directives:[a.m,l.a,S],styles:[""]}),e})();var U=n("WGvi");function I(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac(" ",e.name," ")}}function C(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Nb(),r.Ob(7,"td"),r.wc(8,I,2,1,"span",17),r.Nb(),r.Ob(9,"td",18),r.Ob(10,"button",19),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac(2).onEdit(n.id)}),r.Kb(11,"i",20),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.zc(e.email),r.xb(2),r.hc("ngForOf",null==e?null:e.roles)}}function k(e,t){if(1&e&&(r.Ob(0,"tbody"),r.wc(1,C,12,4,"tr",17),r.Nb()),2&e){const e=r.ac();r.xb(1),r.hc("ngForOf",e.userPage.content)}}function q(e,t){if(1&e){const e=r.Pb();r.Ob(0,"pagination",21),r.Yb("getPage",function(t){return r.qc(e),r.ac().getUserPage(t)}),r.Nb()}if(2&e){const e=r.ac();r.hc("page",e.userPage)}}function F(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",4),r.Ob(1,"change-password-form",22),r.Yb("create",function(t){return r.qc(e),r.ac().onChangePassword(t)}),r.Nb(),r.Nb()}if(2&e){const e=r.ac();r.xb(1),r.hc("user",e.user)}}function L(e,t){1&e&&(r.Ob(0,"div",4),r.Ob(1,"div",23),r.yc(2," Congratulation! Password changed successfully "),r.Nb(),r.Nb())}let z=(()=>{class e{constructor(e){this.userService=e,this.loading=!1,this.successMessage=!1}ngOnInit(){this.getUserPage()}getUserPage(e=0,t=null,n=null){return Object(b.a)(this,void 0,void 0,function*(){this.loading=!0;try{this.userPage=yield this.userService.findByUsernameOrPhoneNumber(t,n,e).toPromise(),this.loading=!1}catch(i){console.log(i)}})}onEdit(e){this.successMessage=!1;const t=this.userPage.content.find(t=>t.id===e);this.user=Object.assign({},t)}onFindByPhone(e){return Object(b.a)(this,void 0,void 0,function*(){})}searchUser(){this.getUserPage(0,this.query)}onChangePassword(e){return Object(b.a)(this,void 0,void 0,function*(){try{yield this.userService.changePasswordByAdmin(e.id,e.password).toPromise(),this.user=null,this.successMessage=!0}catch(t){console.log(t)}})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-change-password"]],decls:34,vars:5,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"text-center"],[1,"mx-3","my-1",3,"ngSubmit"],[1,"input-group","mb-2"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-search"],["type","text","id","userQuery","name","userQuery","placeholder","User name or phone",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","border","table-responsive-sm"],[4,"ngIf"],["colspan","5"],[3,"page","getPage",4,"ngIf"],["class","col-md-6",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-right"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-edit"],[3,"page","getPage"],[3,"user","create"],["role","alert",1,"alert","alert-success"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"span",1),r.yc(2," Change password "),r.Nb(),r.Nb(),r.Ob(3,"div",2),r.Ob(4,"div",3),r.Ob(5,"div",4),r.Ob(6,"h3",5),r.yc(7,"User List"),r.Nb(),r.Ob(8,"form",6),r.Yb("ngSubmit",function(){return t.searchUser()}),r.Ob(9,"div",7),r.Ob(10,"div",8),r.Ob(11,"div",9),r.Kb(12,"i",10),r.yc(13,"\xa0 Search "),r.Nb(),r.Nb(),r.Ob(14,"input",11),r.Yb("ngModelChange",function(e){return t.query=e}),r.Nb(),r.Nb(),r.Nb(),r.Ob(15,"table",12),r.Ob(16,"thead"),r.Ob(17,"tr"),r.Ob(18,"th"),r.yc(19,"Name"),r.Nb(),r.Ob(20,"th"),r.yc(21,"Phone"),r.Nb(),r.Ob(22,"th"),r.yc(23,"Email"),r.Nb(),r.Ob(24,"th"),r.yc(25,"Role"),r.Nb(),r.Kb(26,"th"),r.Nb(),r.Nb(),r.wc(27,k,2,1,"tbody",13),r.Ob(28,"tfoot"),r.Ob(29,"tr"),r.Ob(30,"td",14),r.wc(31,q,1,1,"pagination",15),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.wc(32,F,2,1,"div",16),r.wc(33,L,3,0,"div",16),r.Nb(),r.Nb()),2&e&&(r.xb(14),r.hc("ngModel",t.query),r.xb(13),r.hc("ngIf",(null==t.userPage?null:t.userPage.content.length)>0),r.xb(4),r.hc("ngIf",null!=t.userPage),r.xb(1),r.hc("ngIf",t.user&&!t.successMessage),r.xb(1),r.hc("ngIf",t.successMessage))},directives:[o.v,o.l,o.m,o.b,o.k,o.n,a.n,a.m,l.a,U.a],styles:[""]}),e})();var K=n("HymT");function Y(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac(" ",e.name," ")}}function E(e,t){if(1&e&&(r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.wc(6,Y,2,1,"span",13),r.Nb(),r.Nb()),2&e){const e=t.$implicit,n=r.ac(2);r.xb(2),r.zc(e.shipNumber),r.xb(2),r.zc(e.name),r.xb(2),r.hc("ngForOf",null==n.user?null:n.user.roles)}}function R(e,t){if(1&e&&(r.Ob(0,"div",14),r.Ob(1,"h4"),r.yc(2),r.Nb(),r.Ob(3,"table",9),r.Ob(4,"thead"),r.Ob(5,"tr"),r.Ob(6,"th"),r.yc(7," Ship No. "),r.Nb(),r.Ob(8,"th"),r.yc(9," Name "),r.Nb(),r.Ob(10,"th"),r.yc(11,"Role"),r.Nb(),r.Nb(),r.Nb(),r.Ob(12,"tbody"),r.wc(13,E,7,3,"tr",13),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.ac();r.xb(2),r.Ac("",e.user.name," Ship list"),r.xb(11),r.hc("ngForOf",e.userShipList)}}function $(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",21),r.Yb("click",function(){return r.qc(e),r.ac(2).onSubmit()}),r.yc(1,"Submit"),r.Nb()}}function j(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",15),r.Ob(1,"h4"),r.yc(2," Assign Ship Admin"),r.Nb(),r.Ob(3,"div",16),r.Ob(4,"label",17),r.yc(5,"User Name"),r.Nb(),r.Ob(6,"label",18),r.yc(7),r.Nb(),r.Nb(),r.Ob(8,"div",16),r.Ob(9,"label",17),r.yc(10,"Ship Name"),r.Nb(),r.Ob(11,"label",18),r.yc(12),r.Nb(),r.Nb(),r.Ob(13,"button",19),r.Yb("click",function(){return r.qc(e),r.ac().onClear()}),r.yc(14,"clear"),r.Nb(),r.wc(15,$,2,0,"button",20),r.Nb()}if(2&e){const e=r.ac();r.xb(7),r.zc(null==e.user?null:e.user.name),r.xb(5),r.Bc("",null==e.ship?null:e.ship.shipNumber," - ",null==e.ship?null:e.ship.name,""),r.xb(3),r.hc("ngIf",e.user&&e.ship)}}function M(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac("",e.name,", ")}}function B(e,t){if(1&e&&(r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.wc(6,M,2,1,"span",13),r.Nb(),r.Nb()),2&e){const e=t.$implicit;r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.hc("ngForOf",e.roles)}}function T(e,t){if(1&e&&(r.Ob(0,"div",14),r.Ob(1,"div",22),r.Ob(2,"h4"),r.yc(3),r.Nb(),r.Ob(4,"table",9),r.Ob(5,"thead"),r.Ob(6,"tr"),r.Ob(7,"th"),r.yc(8," Name "),r.Nb(),r.Ob(9,"th"),r.yc(10," Phone "),r.Nb(),r.Ob(11,"th"),r.yc(12,"Role"),r.Nb(),r.Nb(),r.Nb(),r.Ob(13,"tbody"),r.wc(14,B,7,3,"tr",13),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.ac();r.xb(3),r.Bc("",e.ship.shipNumber,"-",e.ship.name," User list"),r.xb(11),r.hc("ngForOf",e.shipUserList)}}function G(e,t){if(1&e&&(r.Ob(0,"span",26),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.hc("ngClass",t.index%2==0?"badge-success":"badge-info"),r.xb(1),r.Ac(" ",e.name," ")}}function J(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Kb(3,"br"),r.wc(4,G,2,2,"span",23),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Kb(7,"br"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.yc(10),r.Nb(),r.Ob(11,"td"),r.Ob(12,"button",24),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac(2).onSelectUser(n.id)}),r.Kb(13,"i",25),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.Ac(" ",e.name," "),r.xb(2),r.hc("ngForOf",null==e?null:e.roles),r.xb(2),r.Ac(" ",e.phoneNumber," "),r.xb(2),r.Ac(" ",e.email," "),r.xb(2),r.zc(e.enabled?"ACTIVE":"INACTIVE")}}function D(e,t){if(1&e&&(r.Ob(0,"tbody"),r.wc(1,J,14,5,"tr",13),r.Nb()),2&e){const e=r.ac();r.xb(1),r.hc("ngForOf",e.userPage.content)}}function V(e,t){if(1&e){const e=r.Pb();r.Ob(0,"pagination",27),r.Yb("getPage",function(t){return r.qc(e),r.ac().getUserPage(t)}),r.Nb()}if(2&e){const e=r.ac();r.hc("page",e.userPage)}}function H(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Nb(),r.Ob(7,"td"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.yc(10),r.Kb(11,"br"),r.yc(12),r.Nb(),r.Ob(13,"td"),r.Ob(14,"button",24),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac().onSelectShip(n.id)}),r.Kb(15,"i",25),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.zc(e.shipNumber),r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.zc(e.enabled),r.xb(2),r.Ac("",null==e||null==e.admin?null:e.admin.name," "),r.xb(2),r.Ac(" ",null==e||null==e.admin?null:e.admin.phoneNumber," ")}}function Q(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac(" ",e.name," ")}}function W(e,t){if(1&e&&(r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.wc(6,Q,2,1,"span",13),r.Nb(),r.Nb()),2&e){const e=t.$implicit,n=r.ac(2);r.xb(2),r.zc(e.shipNumber),r.xb(2),r.zc(e.name),r.xb(2),r.hc("ngForOf",null==n.user?null:n.user.roles)}}function X(e,t){if(1&e&&(r.Ob(0,"div",14),r.Ob(1,"h4"),r.yc(2),r.Nb(),r.Ob(3,"table",9),r.Ob(4,"thead"),r.Ob(5,"tr"),r.Ob(6,"th"),r.yc(7," Ship No. "),r.Nb(),r.Ob(8,"th"),r.yc(9," Name "),r.Nb(),r.Ob(10,"th"),r.yc(11,"Role"),r.Nb(),r.Nb(),r.Nb(),r.Ob(12,"tbody"),r.wc(13,W,7,3,"tr",13),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.ac();r.xb(2),r.Ac("",e.user.name," Ship list"),r.xb(11),r.hc("ngForOf",e.userShipList)}}function Z(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",21),r.Yb("click",function(){return r.qc(e),r.ac(2).onSubmit()}),r.yc(1,"Submit"),r.Nb()}}function _(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",15),r.Ob(1,"h4"),r.yc(2," Assign Ship Admin"),r.Nb(),r.Ob(3,"div",16),r.Ob(4,"label",17),r.yc(5,"User Name"),r.Nb(),r.Ob(6,"label",18),r.yc(7),r.Nb(),r.Nb(),r.Ob(8,"div",16),r.Ob(9,"label",17),r.yc(10,"Ship Name"),r.Nb(),r.Ob(11,"label",18),r.yc(12),r.Nb(),r.Nb(),r.Ob(13,"button",19),r.Yb("click",function(){return r.qc(e),r.ac().onClear()}),r.yc(14,"clear"),r.Nb(),r.wc(15,Z,2,0,"button",20),r.Nb()}if(2&e){const e=r.ac();r.xb(7),r.zc(null==e.user?null:e.user.name),r.xb(5),r.zc(null==e.ship?null:e.ship.name),r.xb(3),r.hc("ngIf",e.user&&e.ship)}}function ee(e,t){if(1&e&&(r.Ob(0,"span"),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.xb(1),r.Ac("",e.name,", ")}}function te(e,t){if(1&e&&(r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.wc(6,ee,2,1,"span",13),r.Nb(),r.Nb()),2&e){const e=t.$implicit;r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.hc("ngForOf",e.roles)}}function ne(e,t){if(1&e&&(r.Ob(0,"div",14),r.Ob(1,"h4"),r.yc(2),r.Nb(),r.Ob(3,"table",9),r.Ob(4,"thead"),r.Ob(5,"tr"),r.Ob(6,"th"),r.yc(7," Name "),r.Nb(),r.Ob(8,"th"),r.yc(9," Phone "),r.Nb(),r.Ob(10,"th"),r.yc(11,"Role"),r.Nb(),r.Nb(),r.Nb(),r.Ob(12,"tbody"),r.wc(13,te,7,3,"tr",13),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.ac();r.xb(2),r.Bc("",e.ship.shipNumber,"-",e.ship.name," User list"),r.xb(11),r.hc("ngForOf",e.shipUserList)}}function ie(e,t){if(1&e&&(r.Ob(0,"span",25),r.yc(1),r.Nb()),2&e){const e=t.$implicit;r.hc("ngClass",t.index%2==0?"badge-success":"badge-info"),r.xb(1),r.Ac(" ",e.name," ")}}function se(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Kb(3,"br"),r.wc(4,ie,2,2,"span",22),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Kb(7,"br"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.yc(10),r.Nb(),r.Ob(11,"td"),r.Ob(12,"button",23),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac(2).onSelectUser(n.id)}),r.Kb(13,"i",24),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.Ac(" ",e.name," "),r.xb(2),r.hc("ngForOf",null==e?null:e.roles),r.xb(2),r.Ac(" ",e.phoneNumber," "),r.xb(2),r.Ac(" ",e.email," "),r.xb(2),r.zc(e.enabled?"ACTIVE":"INACTIVE")}}function be(e,t){if(1&e&&(r.Ob(0,"tbody"),r.wc(1,se,14,5,"tr",13),r.Nb()),2&e){const e=r.ac();r.xb(1),r.hc("ngForOf",e.userPage.content)}}function ce(e,t){if(1&e){const e=r.Pb();r.Ob(0,"pagination",26),r.Yb("getPage",function(t){return r.qc(e),r.ac().getUserPage(t)}),r.Nb()}if(2&e){const e=r.ac();r.hc("page",e.userPage)}}function re(e,t){if(1&e){const e=r.Pb();r.Ob(0,"tr"),r.Ob(1,"td"),r.yc(2),r.Nb(),r.Ob(3,"td"),r.yc(4),r.Nb(),r.Ob(5,"td"),r.yc(6),r.Nb(),r.Ob(7,"td"),r.yc(8),r.Nb(),r.Ob(9,"td"),r.yc(10),r.Kb(11,"br"),r.yc(12),r.Nb(),r.Ob(13,"td"),r.Ob(14,"button",23),r.Yb("click",function(){r.qc(e);const n=t.$implicit;return r.ac().onSelectShip(n.id)}),r.Kb(15,"i",24),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.xb(2),r.zc(e.shipNumber),r.xb(2),r.zc(e.name),r.xb(2),r.zc(e.phoneNumber),r.xb(2),r.zc(e.enabled),r.xb(2),r.Ac("",null==e||null==e.admin?null:e.admin.name," "),r.xb(2),r.Ac(" ",null==e||null==e.admin?null:e.admin.phoneNumber,"")}}const oe=[{path:"add",component:O},{path:"assign",component:(()=>{class e{constructor(e,t){this.shipService=e,this.userService=t,this.shipUserList=[],this.userShipList=[]}ngOnInit(){this.getAdminShipPage(),this.getUserPage()}getAdminShipPage(e=0){return Object(b.a)(this,void 0,void 0,function*(){try{this.shipPage=yield this.shipService.getAdminShipPage(e).toPromise()}catch(t){console.log(t)}})}getUserPage(e=0,t=null){return Object(b.a)(this,void 0,void 0,function*(){try{this.userPage=yield this.userService.getAdminUsers(e,t).toPromise()}catch(n){console.log(n)}})}getUerListByShipId(e){return Object(b.a)(this,void 0,void 0,function*(){this.shipUserList=[];try{this.shipUserList=yield this.userService.gerAdminUserListByShipId(e).toPromise()}catch(t){console.log(t)}})}getShipListByUserId(e){return Object(b.a)(this,void 0,void 0,function*(){this.userShipList=[];try{this.userShipList=yield this.userService.getAdminShipListByUserId(e).toPromise()}catch(t){console.log(t)}})}onSelectUser(e){const t=this.userPage.content.find(t=>t.id===e);this.user=t,this.getShipListByUserId(e)}onSelectShip(e){const t=this.shipPage.content.find(t=>t.id===e);this.ship=t,this.getUerListByShipId(e)}onSubmit(){return Object(b.a)(this,void 0,void 0,function*(){try{this.userService.assignAdminShipAgent(this.user.id,this.ship.id).toPromise(),this.getUserPage(),this.onClear()}catch(e){console.log(e)}})}onClear(){this.ship=null,this.user=null,this.shipUserList=[],this.userShipList=[]}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(K.a),r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-assign-user"]],decls:47,vars:6,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container"],[1,"row","m-0"],["class","col-md-4",4,"ngIf"],["class","col-md-4 border",4,"ngIf"],[1,"row"],[1,"col-md-6"],[1,"text-center",2,"background","#75edf1"],[1,"table","border"],[4,"ngIf"],["colspan","4"],[3,"page","getPage",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"col-md-4","border"],[1,"form-group"],["for","userName"],["id","userName",1,"form-control"],[1,"btn","btn-sm","btn-danger","mb-2","mx-1",3,"click"],["class","btn btn-sm btn-primary mb-2 mx-1",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-primary","mb-2","mx-1",3,"click"],[1,"shadow-sm","p-3"],["class","badge badge-pill",3,"ngClass",4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-edit"],[1,"badge","badge-pill",3,"ngClass"],[3,"page","getPage"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"span",1),r.yc(2," Assign User "),r.Nb(),r.Nb(),r.Ob(3,"div",2),r.Ob(4,"div",3),r.wc(5,R,14,2,"div",4),r.wc(6,j,16,4,"div",5),r.wc(7,T,15,3,"div",4),r.Nb(),r.Nb(),r.Ob(8,"div",0),r.Ob(9,"div",6),r.Ob(10,"div",7),r.Ob(11,"h3",8),r.yc(12,"User list"),r.Nb(),r.Ob(13,"table",9),r.Ob(14,"thead"),r.Ob(15,"tr"),r.Ob(16,"th"),r.yc(17,"Name"),r.Nb(),r.Ob(18,"th"),r.yc(19,"Phone, Email"),r.Nb(),r.Ob(20,"th"),r.yc(21,"Staus"),r.Nb(),r.Kb(22,"th"),r.Nb(),r.Nb(),r.wc(23,D,2,1,"tbody",10),r.Ob(24,"tfoot"),r.Ob(25,"tr"),r.Ob(26,"td",11),r.wc(27,V,1,1,"pagination",12),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(28,"div",7),r.Ob(29,"h3",8),r.yc(30,"Ship list"),r.Nb(),r.Ob(31,"table",9),r.Ob(32,"thead"),r.Ob(33,"tr"),r.Ob(34,"th"),r.yc(35,"Ship No."),r.Nb(),r.Ob(36,"th"),r.yc(37,"Name"),r.Nb(),r.Ob(38,"th"),r.yc(39,"Phone"),r.Nb(),r.Ob(40,"th"),r.yc(41,"Enabled"),r.Nb(),r.Ob(42,"th"),r.yc(43,"Admin"),r.Nb(),r.Kb(44,"th"),r.Nb(),r.Nb(),r.Ob(45,"tbody"),r.wc(46,H,16,6,"tr",13),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.xb(5),r.hc("ngIf",t.userShipList.length>0),r.xb(1),r.hc("ngIf",t.user||t.ship),r.xb(1),r.hc("ngIf",t.shipUserList.length),r.xb(16),r.hc("ngIf",t.userPage),r.xb(4),r.hc("ngIf",null!=t.userPage),r.xb(19),r.hc("ngForOf",null==t.shipPage?null:t.shipPage.content))},directives:[a.n,a.m,a.l,l.a],styles:[""]}),e})()},{path:"assign-ship-admin",component:(()=>{class e{constructor(e,t){this.shipService=e,this.userService=t,this.shipUserList=[],this.userShipList=[]}ngOnInit(){this.getAdminShipPage(),this.getUserPage()}getAdminShipPage(e=0){return Object(b.a)(this,void 0,void 0,function*(){try{this.shipPage=yield this.shipService.getAdminShipPage(e).toPromise()}catch(t){console.log(t)}})}getUserPage(e=0,t=null){return Object(b.a)(this,void 0,void 0,function*(){try{this.userPage=yield this.userService.getAdminUsers(e,t).toPromise()}catch(n){console.log(n)}})}getUerListByShipId(e){return Object(b.a)(this,void 0,void 0,function*(){this.shipUserList=[];try{this.shipUserList=yield this.userService.gerAdminUserListByShipId(e).toPromise()}catch(t){console.log(t)}})}getShipListByUserId(e){return Object(b.a)(this,void 0,void 0,function*(){this.userShipList=[];try{this.userShipList=yield this.userService.getAdminShipListByUserId(e).toPromise()}catch(t){console.log(t)}})}onSelectUser(e){const t=this.userPage.content.find(t=>t.id===e);this.user=t,this.getShipListByUserId(e)}onSelectShip(e){const t=this.shipPage.content.find(t=>t.id===e);this.ship=t,this.getUerListByShipId(e)}onSubmit(){return Object(b.a)(this,void 0,void 0,function*(){try{yield this.userService.assignAdminShipAdmin(this.user.id,this.ship.id).toPromise(),this.onClear(),this.getAdminShipPage(),this.getUserPage()}catch(e){console.log(e)}})}onClear(){this.user=null,this.ship=null,this.shipUserList=[],this.userShipList=[]}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(K.a),r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-assign-ship-admin"]],decls:46,vars:6,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container"],[1,"row","mb-2"],["class","col-md-4",4,"ngIf"],["class","col-md-4 border",4,"ngIf"],[1,"row"],[1,"col-md-6"],[1,"text-center",2,"background","#75edf1"],[1,"table","border"],[4,"ngIf"],["colspan","4"],[3,"page","getPage",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"col-md-4","border"],[1,"form-group"],["for","userName"],["id","userName",1,"form-control"],[1,"btn","btn-sm","btn-danger","mb-2","mx-1",3,"click"],["class","btn btn-sm btn-primary mb-2 mx-1",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-primary","mb-2","mx-1",3,"click"],["class","badge badge-pill",3,"ngClass",4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-edit"],[1,"badge","badge-pill",3,"ngClass"],[3,"page","getPage"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"span",1),r.yc(2," Assign Ship Admin "),r.Nb(),r.Nb(),r.Ob(3,"div",2),r.Ob(4,"div",3),r.wc(5,X,14,2,"div",4),r.wc(6,_,16,3,"div",5),r.wc(7,ne,14,3,"div",4),r.Nb(),r.Ob(8,"div",6),r.Ob(9,"div",7),r.Ob(10,"h3",8),r.yc(11,"User list"),r.Nb(),r.Ob(12,"table",9),r.Ob(13,"thead"),r.Ob(14,"tr"),r.Ob(15,"th"),r.yc(16,"Name"),r.Nb(),r.Ob(17,"th"),r.yc(18,"Phone, Email"),r.Nb(),r.Ob(19,"th"),r.yc(20,"Staus"),r.Nb(),r.Kb(21,"th"),r.Nb(),r.Nb(),r.wc(22,be,2,1,"tbody",10),r.Ob(23,"tfoot"),r.Ob(24,"tr"),r.Ob(25,"td",11),r.wc(26,ce,1,1,"pagination",12),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(27,"div",7),r.Ob(28,"h3",8),r.yc(29,"Ship list"),r.Nb(),r.Ob(30,"table",9),r.Ob(31,"thead"),r.Ob(32,"tr"),r.Ob(33,"th"),r.yc(34,"Ship No."),r.Nb(),r.Ob(35,"th"),r.yc(36,"Name"),r.Nb(),r.Ob(37,"th"),r.yc(38,"Phone"),r.Nb(),r.Ob(39,"th"),r.yc(40,"Enabled"),r.Nb(),r.Ob(41,"th"),r.yc(42,"Admin"),r.Nb(),r.Kb(43,"th"),r.Nb(),r.Nb(),r.Ob(44,"tbody"),r.wc(45,re,16,6,"tr",13),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.xb(5),r.hc("ngIf",t.userShipList.length>0),r.xb(1),r.hc("ngIf",t.user||t.ship),r.xb(1),r.hc("ngIf",t.shipUserList.length>0),r.xb(15),r.hc("ngIf",t.userPage),r.xb(4),r.hc("ngIf",null!=t.userPage),r.xb(19),r.hc("ngForOf",null==t.shipPage?null:t.shipPage.content))},directives:[a.n,a.m,a.l,l.a],styles:[""]}),e})()},{path:"admin-agent",component:w},{path:"change-password",component:z},{path:"",component:N}];let ae=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[s.a,i.e.forChild(oe)]]}),e})()}}]);