(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{qFm2:function(t,e,n){"use strict";n.r(e),n.d(e,"ROUTES",function(){return tt}),n.d(e,"AccountingsModule",function(){return et});var i=n("mrSG"),c=n("/7iW"),o=n("5Pr4"),b=n("fXoL"),a=n("ofXK"),s=n("uEz7"),r=n("3Pt+");function d(t,e){if(1&t){const t=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.Nb(),b.Ob(3,"td"),b.yc(4),b.Nb(),b.Ob(5,"td"),b.yc(6),b.Nb(),b.Ob(7,"td"),b.Ob(8,"button",11),b.Yb("click",function(){b.qc(t);const n=e.$implicit;return b.ac(2).onSelect(n.id)}),b.Kb(9,"i",12),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=e.$implicit;b.xb(2),b.zc(t.name),b.xb(2),b.zc(t.phoneNumber),b.xb(2),b.zc(t.email)}}function l(t,e){if(1&t){const t=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td",13),b.Ob(2,"pagination",14),b.Yb("getPage",function(e){return b.qc(t),b.ac(2).getUserPage(e)}),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=b.ac(2);b.xb(2),b.hc("page",t.userPage)}}function u(t,e){if(1&t&&(b.Ob(0,"div",6),b.Ob(1,"h3",7),b.yc(2,"Agent list"),b.Nb(),b.Ob(3,"table",8),b.Ob(4,"thead"),b.Ob(5,"tr"),b.Ob(6,"th"),b.yc(7,"Name"),b.Nb(),b.Ob(8,"th"),b.yc(9,"Phone"),b.Nb(),b.Ob(10,"th"),b.yc(11,"Email"),b.Nb(),b.Kb(12,"th"),b.Nb(),b.Nb(),b.Ob(13,"tbody"),b.wc(14,d,10,3,"tr",9),b.Nb(),b.Ob(15,"tfoot"),b.wc(16,l,3,1,"tr",10),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.ac();b.xb(14),b.hc("ngForOf",null==t.userPage?null:t.userPage.content),b.xb(2),b.hc("ngIf",(null==t.userPage?null:t.userPage.totalPages)>1)}}function m(t,e){if(1&t&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.bc(3,"date"),b.Nb(),b.Ob(4,"td"),b.yc(5),b.Nb(),b.Ob(6,"td"),b.yc(7),b.Nb(),b.Ob(8,"td"),b.yc(9),b.Nb(),b.Ob(10,"td",19),b.yc(11),b.bc(12,"currency"),b.Nb(),b.Nb()),2&t){const t=e.$implicit;b.xb(2),b.zc(b.dc(3,5,t.date,"MMM d, y, h:mm:ss a")),b.xb(3),b.zc(t.explanation),b.xb(2),b.zc(t.debit),b.xb(2),b.zc(t.credit),b.xb(2),b.Ac(" ",b.ec(12,8,t.balance,"BDT ","symbol","4.2-2")," ")}}function g(t,e){if(1&t&&(b.Ob(0,"tbody"),b.wc(1,m,13,13,"tr",9),b.Nb()),2&t){const t=b.ac(2);b.xb(1),b.hc("ngForOf",t.adminAgentLedgerPage.content)}}function h(t,e){1&t&&(b.Ob(0,"tr"),b.Ob(1,"td",15),b.Kb(2,"app-loading"),b.Nb(),b.Nb())}function f(t,e){if(1&t){const t=b.Pb();b.Ob(0,"pagination",14),b.Yb("getPage",function(e){b.qc(t);const n=b.ac(2);return n.getAgentLedger(null==n.user?null:n.user.id,e)}),b.Nb()}if(2&t){const t=b.ac(2);b.hc("page",t.adminAgentLedgerPage)}}function p(t,e){if(1&t){const t=b.Pb();b.Ob(0,"div",6),b.Ob(1,"h3",7),b.yc(2),b.Nb(),b.Ob(3,"table",8),b.Ob(4,"thead"),b.Ob(5,"tr"),b.Ob(6,"th"),b.yc(7,"Date"),b.Nb(),b.Ob(8,"th"),b.yc(9,"Explanation"),b.Nb(),b.Ob(10,"th"),b.yc(11,"Debit"),b.Nb(),b.Ob(12,"th"),b.yc(13,"Credit"),b.Nb(),b.Ob(14,"th"),b.yc(15,"Balance"),b.Nb(),b.Nb(),b.Nb(),b.wc(16,g,2,1,"tbody",10),b.Ob(17,"tfoot"),b.wc(18,h,3,0,"tr",10),b.Ob(19,"tr"),b.Ob(20,"td",15),b.wc(21,f,1,1,"pagination",16),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(22,"div",17),b.Ob(23,"button",18),b.Yb("click",function(){return b.qc(t),b.ac().clear()}),b.yc(24," Back to agent list "),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=b.ac();b.xb(2),b.Ac("",null==t.user?null:t.user.name," Ledger"),b.xb(14),b.hc("ngIf",t.adminAgentLedgerPage),b.xb(2),b.hc("ngIf",t.loading),b.xb(3),b.hc("ngIf",null!=t.adminAgentLedgerPage)}}function O(t,e){if(1&t&&(b.Ob(0,"div",24),b.yc(1),b.Nb()),2&t){const t=b.ac(2);b.xb(1),b.Ac(" ",t.message," ")}}function N(t,e){if(1&t){const t=b.Pb();b.Ob(0,"button",30),b.Yb("click",function(){return b.qc(t),b.ac(3).addBalace()}),b.yc(1," Add "),b.Nb()}}function y(t,e){if(1&t){const t=b.Pb();b.Ob(0,"form",25),b.Ob(1,"div",26),b.Ob(2,"label"),b.yc(3," Amount "),b.Nb(),b.Nb(),b.Ob(4,"div",27),b.Ob(5,"input",28),b.Yb("ngModelChange",function(e){return b.qc(t),b.ac(2).amount=e}),b.Nb(),b.Nb(),b.wc(6,N,2,0,"button",29),b.Nb()}if(2&t){const t=b.ac(2);b.xb(5),b.hc("ngModel",t.amount),b.xb(1),b.hc("ngIf",t.amount>0)}}function x(t,e){if(1&t&&(b.Ob(0,"div",20),b.Ob(1,"h3",7),b.yc(2,"Add agent balance"),b.Nb(),b.wc(3,O,2,1,"div",21),b.Ob(4,"div",22),b.wc(5,y,7,2,"form",23),b.Nb(),b.Nb()),2&t){const t=b.ac();b.xb(3),b.hc("ngIf",t.message.length>0),b.xb(2),b.hc("ngIf",t.user)}}let v=(()=>{class t{constructor(t,e){this.userService=t,this.accountingService=e,this.amount=0,this.loading=!1,this.message=""}ngOnInit(){this.getUserPage()}getUserPage(t=0){return Object(i.a)(this,void 0,void 0,function*(){this.loading=!0;try{this.userPage=yield this.userService.getAdminAgents(t).toPromise(),this.loading=!1}catch(e){console.log(e)}})}onSelect(t){const e=this.userPage.content.find(e=>e.id===t);this.user=Object.assign({},e),this.getAgentLedger(e.id)}getAgentLedger(t,e=0){return Object(i.a)(this,void 0,void 0,function*(){this.loading=!0;try{this.adminAgentLedgerPage=yield this.accountingService.getAdminAgentLedgerByAdmin(t,e).toPromise(),this.loading=!1}catch(n){console.log(n)}})}addBalace(){return Object(i.a)(this,void 0,void 0,function*(){if(confirm("Are you sure to add balance "+this.amount+" to "+this.user.name+" Account "))try{yield this.accountingService.addAdminAgentBalance(this.user.id,this.amount).toPromise(),this.message="Amount added successfully",this.amount=0,this.getAgentLedger(this.user.id)}catch(t){console.log(t)}})}clear(){this.message="",this.user=null}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(c.a),b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-agent-balance"]],decls:8,vars:3,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container"],[1,"row"],["class","col-md-8",4,"ngIf"],["class","col-md-4",4,"ngIf"],[1,"col-md-8"],[1,"text-center"],[1,"table","border"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn-sm","btn-warning",3,"click"],[1,"fa","fa-pencil-square-o"],["colspan","4"],[3,"page","getPage"],["colspan","5"],[3,"page","getPage",4,"ngIf"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-sm","btn-info",3,"click"],[1,"text-right"],[1,"col-md-4"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"d-flex","justify-content-center","my-5"],["class","form-inline",4,"ngIf"],["role","alert",1,"alert","alert-success"],[1,"form-inline"],[1,"form-group","mb-2"],[1,"form-group","mx-sm-3","mb-2"],["type","number","id","amount","name","amount",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","class","btn btn-primary mb-2",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary","mb-2",3,"click"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Add agent balance"),b.Nb(),b.Nb(),b.Ob(3,"div",2),b.Ob(4,"div",3),b.wc(5,u,17,2,"div",4),b.wc(6,p,25,4,"div",4),b.wc(7,x,6,2,"div",5),b.Nb(),b.Nb()),2&t&&(b.xb(5),b.hc("ngIf",!e.user),b.xb(1),b.hc("ngIf",e.user),b.xb(1),b.hc("ngIf",e.user))},directives:[a.n,a.m,s.a,r.v,r.l,r.m,r.p,r.b,r.k,r.n],pipes:[a.e,a.c],styles:[""]}),t})();var A=n("tyNb");function P(t,e){1&t&&(b.Ob(0,"small",12),b.yc(1," Explanation required "),b.Nb())}function w(t,e){1&t&&(b.Ob(0,"small",12),b.yc(1," Debit required "),b.Nb())}function k(t,e){if(1&t&&(b.Ob(0,"div",3),b.Ob(1,"label",13),b.yc(2,"Debit"),b.Nb(),b.Kb(3,"input",14),b.wc(4,w,2,0,"small",6),b.Nb()),2&t){const t=b.ac();b.xb(4),b.hc("ngIf",t.form.controls.debit.errors&&t.form.controls.debit.touched)}}function S(t,e){1&t&&(b.Ob(0,"small",12),b.yc(1," Credit required "),b.Nb())}function I(t,e){if(1&t&&(b.Ob(0,"div",3),b.Ob(1,"label",15),b.yc(2,"Credit"),b.Nb(),b.Kb(3,"input",16),b.wc(4,S,2,0,"small",6),b.Nb()),2&t){const t=b.ac();b.xb(4),b.hc("ngIf",t.form.controls.credit.errors&&t.form.controls.credit.touched)}}function C(t,e){1&t&&(b.Ob(0,"a",17),b.yc(1," Add income "),b.Nb())}function L(t,e){1&t&&(b.Ob(0,"a",18),b.yc(1," Add expense "),b.Nb())}const F=function(t){return{disabled:t}};let z=(()=>{class t{constructor(t){this.builder=t,this.value=new b.n,this.createForm()}ngOnChanges(t){t.expenseForm&&this.form.patchValue(1==t.expenseForm.currentValue?{debit:0}:{credit:0})}createForm(){this.form=this.builder.group({explanation:["",r.t.required],debit:["",r.t.required],credit:["",r.t.required]})}submit(){this.form.valid&&(this.value.emit(this.form.value),this.form.reset())}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(r.c))},t.\u0275cmp=b.Db({type:t,selectors:[["admin-income-expense"]],inputs:{expenseForm:"expenseForm"},outputs:{value:"value"},features:[b.vb],decls:16,vars:10,consts:[[1,"container"],[1,"text-center"],[1,"border","p-3",3,"formGroup","ngSubmit"],[1,"form-group"],["for","explanation"],["id","explanation","formControlName","explanation",1,"form-control"],["class","text-danger",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"d-flex","justify-content-between","mb-3"],["class","btn btn-success","routerLink","/dashboard/admin/accountings/add-income",4,"ngIf"],["class","btn btn-success","routerLink","/dashboard/admin/accountings/add-expense",4,"ngIf"],["type","submit",1,"btn","btn-primary","mx-1",3,"ngClass"],[1,"text-danger"],["for","debit"],["type","number","id","debit","formControlName","debit",1,"form-control"],["for","credit"],["type","number","id","credit","formControlName","credit",1,"form-control"],["routerLink","/dashboard/admin/accountings/add-income",1,"btn","btn-success"],["routerLink","/dashboard/admin/accountings/add-expense",1,"btn","btn-success"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"h3",1),b.yc(2),b.Nb(),b.Ob(3,"form",2),b.Yb("ngSubmit",function(){return e.submit()}),b.Ob(4,"div",3),b.Ob(5,"label",4),b.yc(6,"Explanation"),b.Nb(),b.Kb(7,"input",5),b.wc(8,P,2,0,"small",6),b.Nb(),b.wc(9,k,5,1,"div",7),b.wc(10,I,5,1,"div",7),b.Ob(11,"div",8),b.wc(12,C,2,0,"a",9),b.wc(13,L,2,0,"a",10),b.Ob(14,"button",11),b.yc(15," Submit "),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(2),b.Ac("",e.expenseForm?"Expense":"Income"," Form"),b.xb(1),b.hc("formGroup",e.form),b.xb(5),b.hc("ngIf",e.form.controls.explanation.errors&&e.form.controls.explanation.touched),b.xb(1),b.hc("ngIf",!e.expenseForm),b.xb(1),b.hc("ngIf",e.expenseForm),b.xb(2),b.hc("ngIf",e.expenseForm),b.xb(1),b.hc("ngIf",!e.expenseForm),b.xb(1),b.hc("ngClass",b.lc(8,F,e.form.invalid)))},directives:[r.v,r.l,r.e,r.b,r.k,r.d,a.n,a.l,r.p,A.d],styles:[""]}),t})();function D(t,e){if(1&t&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.Nb(),b.Ob(3,"td"),b.yc(4),b.Nb(),b.Ob(5,"td"),b.yc(6),b.Nb(),b.Ob(7,"td"),b.yc(8),b.Nb(),b.Ob(9,"td",1),b.yc(10),b.bc(11,"currency"),b.Nb(),b.Nb()),2&t){const t=e.$implicit;b.xb(2),b.zc(t.date),b.xb(2),b.zc(t.explanation),b.xb(2),b.zc(t.debit),b.xb(2),b.zc(t.credit),b.xb(2),b.Ac(" ",b.ec(11,5,t.balance,"BDT ","symbol","4.2-2")," ")}}function q(t,e){if(1&t&&(b.Ob(0,"tbody"),b.wc(1,D,12,10,"tr",5),b.Nb()),2&t){const t=b.ac();b.xb(1),b.hc("ngForOf",t.adminCashbookPage.content)}}function Y(t,e){if(1&t){const t=b.Pb();b.Ob(0,"pagination",6),b.Yb("getPage",function(e){return b.qc(t),b.ac().getAdminCashbook(e)}),b.Nb()}if(2&t){const t=b.ac();b.hc("page",t.adminCashbookPage)}}let j=(()=>{class t{constructor(){this.page=new b.n}getAdminCashbook(t=0){this.page.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Db({type:t,selectors:[["admin-cashbook-table"]],inputs:{adminCashbookPage:"adminCashbookPage"},outputs:{page:"page"},decls:18,vars:2,consts:[[1,"table","border"],[1,"text-right"],[4,"ngIf"],["colspan","5"],[3,"page","getPage",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"page","getPage"]],template:function(t,e){1&t&&(b.Ob(0,"table",0),b.Ob(1,"thead"),b.Ob(2,"tr"),b.Ob(3,"th"),b.yc(4,"Date"),b.Nb(),b.Ob(5,"th"),b.yc(6,"Explanation"),b.Nb(),b.Ob(7,"th"),b.yc(8,"Debit"),b.Nb(),b.Ob(9,"th"),b.yc(10,"Credit"),b.Nb(),b.Ob(11,"th",1),b.yc(12,"Balance"),b.Nb(),b.Nb(),b.Nb(),b.wc(13,q,2,1,"tbody",2),b.Ob(14,"tfoot"),b.Ob(15,"tr"),b.Ob(16,"td",3),b.wc(17,Y,1,1,"pagination",4),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(13),b.hc("ngIf",e.adminCashbookPage),b.xb(4),b.hc("ngIf",null!=e.adminCashbookPage))},directives:[a.n,a.m,s.a],pipes:[a.c],styles:[""]}),t})(),B=(()=>{class t{constructor(t){this.accountingService=t,this.expenseForm=!1}ngOnInit(){this.getAdminCashbook()}getAdminCashbook(t=0){return Object(i.a)(this,void 0,void 0,function*(){try{this.adminCashbookPage=yield this.accountingService.getAdminCashbook(t).toPromise()}catch(e){console.log(e)}})}onSubmit({explanation:t,debit:e}){return Object(i.a)(this,void 0,void 0,function*(){try{yield this.accountingService.addAdminIncome(e,t).toPromise(),this.getAdminCashbook()}catch(n){console.log(n)}})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-add-income"]],decls:9,vars:2,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row"],[1,"col-md-4"],[3,"expenseForm","value"],[1,"col-md-8"],[3,"adminCashbookPage","page"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Add income"),b.Nb(),b.Nb(),b.Ob(3,"div",0),b.Ob(4,"div",2),b.Ob(5,"div",3),b.Ob(6,"admin-income-expense",4),b.Yb("value",function(t){return e.onSubmit(t)}),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"admin-cashbook-table",6),b.Yb("page",function(t){return e.getAdminCashbook(t)}),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(6),b.hc("expenseForm",e.expenseForm),b.xb(2),b.hc("adminCashbookPage",e.adminCashbookPage))},directives:[z,j],styles:[""]}),t})(),M=(()=>{class t{constructor(t){this.accountingService=t,this.expenseForm=!0}ngOnInit(){this.getAdminCashbook()}getAdminCashbook(t=0){return Object(i.a)(this,void 0,void 0,function*(){try{this.adminCashbookPage=yield this.accountingService.getAdminCashbook(t).toPromise()}catch(e){console.log(e)}})}onSubmit({explanation:t,credit:e}){return Object(i.a)(this,void 0,void 0,function*(){try{this.accountingService.addAdminExpense(e,t).toPromise(),this.getAdminCashbook()}catch(n){console.log(n)}})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-add-expense"]],decls:9,vars:2,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row"],[1,"col-md-4"],[3,"expenseForm","value"],[1,"col-md-8"],[3,"adminCashbookPage","page"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Add expense"),b.Nb(),b.Nb(),b.Ob(3,"div",0),b.Ob(4,"div",2),b.Ob(5,"div",3),b.Ob(6,"admin-income-expense",4),b.Yb("value",function(t){return e.onSubmit(t)}),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"admin-cashbook-table",6),b.Yb("page",function(t){return e.getAdminCashbook(t)}),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(6),b.hc("expenseForm",e.expenseForm),b.xb(2),b.hc("adminCashbookPage",e.adminCashbookPage))},directives:[z,j],styles:[""]}),t})(),E=(()=>{class t{constructor(t){this.accountingService=t}ngOnInit(){this.getAdminCashbook()}getAdminCashbook(t=0){return Object(i.a)(this,void 0,void 0,function*(){try{this.adminCashbookPage=yield this.accountingService.getAdminCashbook(t).toPromise()}catch(e){console.log(e)}})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-admin-cashbook"]],decls:8,vars:1,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[3,"adminCashbookPage","page"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Admin cashbook"),b.Nb(),b.Nb(),b.Ob(3,"div",0),b.Ob(4,"div",2),b.Kb(5,"div",3),b.Ob(6,"div",4),b.Ob(7,"admin-cashbook-table",5),b.Yb("page",function(t){return e.getAdminCashbook(t)}),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(7),b.hc("adminCashbookPage",e.adminCashbookPage))},directives:[j],styles:[""]}),t})();var J=n("3whx");function $(t,e){if(1&t){const t=b.Pb();b.Ob(0,"a",3),b.Yb("click",function(){b.qc(t);const n=e.$implicit;return b.ac().onSelectAdmin(n.id)}),b.Kb(1,"i",4),b.yc(2),b.Nb()}if(2&t){const t=e.$implicit;b.xb(2),b.Bc(" ",t.name," [",t.phoneNumber,"] ")}}n("zdEN");let K=(()=>{class t{constructor(t){this.userService=t,this.admin=new b.n}ngOnInit(){this.getShipAdminList()}getShipAdminList(t=0){return Object(i.a)(this,void 0,void 0,function*(){yield this.userService.getAllShipAdminList(t).subscribe(t=>{this.userPage=t})})}onSelectAdmin(t){const e=this.userPage.content.find(e=>e.id==t);this.admin.emit(e)}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(c.a))},t.\u0275cmp=b.Db({type:t,selectors:[["ship-admin-list"]],outputs:{admin:"admin"},decls:7,vars:1,consts:[[1,"list-group"],[1,"list-group-item"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"fa","fa-user"]],template:function(t,e){1&t&&(b.Ob(0,"ul",0),b.Ob(1,"li",1),b.Ob(2,"h5"),b.yc(3,"Ship Admin List"),b.Nb(),b.Ob(4,"small"),b.yc(5,"Choose a admin from below list"),b.Nb(),b.Nb(),b.wc(6,$,3,2,"a",2),b.Nb()),2&t&&(b.xb(6),b.hc("ngForOf",null==e.userPage?null:e.userPage.content))},directives:[a.m],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();function T(t,e){if(1&t&&(b.Ob(0,"span"),b.yc(1),b.Nb()),2&t){const t=e.$implicit;b.xb(1),b.Ac(" ",t.name," ")}}function U(t,e){if(1&t&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.Nb(),b.Ob(3,"td"),b.yc(4),b.Nb(),b.Ob(5,"td"),b.wc(6,T,2,1,"span",9),b.Nb(),b.Nb()),2&t){const t=e.$implicit,n=b.ac(2);b.xb(2),b.zc(t.shipNumber),b.xb(2),b.zc(t.name),b.xb(2),b.hc("ngForOf",null==n.user?null:n.user.roles)}}function G(t,e){if(1&t&&(b.Ob(0,"div",7),b.Ob(1,"h4"),b.yc(2),b.Nb(),b.Ob(3,"table",8),b.Ob(4,"thead"),b.Ob(5,"tr"),b.Ob(6,"th"),b.yc(7," Ship No. "),b.Nb(),b.Ob(8,"th"),b.yc(9," Name "),b.Nb(),b.Ob(10,"th"),b.yc(11,"Role"),b.Nb(),b.Nb(),b.Nb(),b.Ob(12,"tbody"),b.wc(13,U,7,3,"tr",9),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.ac();b.xb(2),b.Ac("",t.user.name," Ship list"),b.xb(11),b.hc("ngForOf",t.shipList)}}function R(t,e){if(1&t&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.Nb(),b.Ob(3,"td"),b.yc(4),b.Nb(),b.Ob(5,"td"),b.yc(6),b.Nb(),b.Ob(7,"td"),b.yc(8),b.Nb(),b.Ob(9,"td",11),b.yc(10),b.bc(11,"currency"),b.Nb(),b.Nb()),2&t){const t=e.$implicit;b.xb(2),b.zc(t.date),b.xb(2),b.zc(t.explanation),b.xb(2),b.zc(t.debit),b.xb(2),b.zc(t.credit),b.xb(2),b.Ac(" ",b.ec(11,5,t.balance,"BDT ","symbol","4.2-2")," ")}}function V(t,e){if(1&t){const t=b.Pb();b.Ob(0,"pagination",14),b.Yb("getPage",function(e){b.qc(t);const n=b.ac(2);return n.getShipAdminLedgerPage(null==n.user?null:n.user.id,e)}),b.Nb()}if(2&t){const t=b.ac(2);b.hc("page",t.shipAdminLedgerPage)}}function X(t,e){if(1&t&&(b.Ob(0,"div",10),b.Ob(1,"h4"),b.yc(2),b.Nb(),b.Ob(3,"table",8),b.Ob(4,"thead"),b.Ob(5,"tr"),b.Ob(6,"th"),b.yc(7,"Date"),b.Nb(),b.Ob(8,"th"),b.yc(9,"Explanation"),b.Nb(),b.Ob(10,"th"),b.yc(11,"Debit"),b.Nb(),b.Ob(12,"th"),b.yc(13,"Credit"),b.Nb(),b.Ob(14,"th",11),b.yc(15,"Balance"),b.Nb(),b.Nb(),b.Nb(),b.Ob(16,"tbody"),b.wc(17,R,12,10,"tr",9),b.Nb(),b.Ob(18,"tfoot"),b.Ob(19,"tr"),b.Ob(20,"td",12),b.wc(21,V,1,1,"pagination",13),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.ac();b.xb(2),b.Ac("",null==t.user?null:t.user.name," Ledger"),b.xb(15),b.hc("ngForOf",t.shipAdminLedgerPage.content),b.xb(4),b.hc("ngIf",null!=t.shipAdminLedgerPage)}}function H(t,e){if(1&t&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.yc(2),b.Nb(),b.Ob(3,"td"),b.yc(4),b.Nb(),b.Ob(5,"td"),b.yc(6),b.Nb(),b.Ob(7,"td"),b.yc(8),b.Nb(),b.Ob(9,"td",11),b.yc(10),b.bc(11,"currency"),b.Nb(),b.Nb()),2&t){const t=e.$implicit;b.xb(2),b.zc(t.date),b.xb(2),b.zc(t.explanation),b.xb(2),b.zc(t.debit),b.xb(2),b.zc(t.credit),b.xb(2),b.Ac(" ",b.ec(11,5,t.balance,"BDT ","symbol","4.2-2")," ")}}function W(t,e){if(1&t){const t=b.Pb();b.Ob(0,"pagination",15),b.Yb("getPage",function(e){b.qc(t);const n=b.ac(2);return n.getShipAdminLedgerPage(null==n.user?null:n.user.id,e)}),b.Nb()}if(2&t){const t=b.ac(2);b.hc("page",t.shipAdminLedgerPage)}}function _(t,e){if(1&t&&(b.Ob(0,"div",9),b.Ob(1,"h4"),b.yc(2),b.Nb(),b.Ob(3,"table",10),b.Ob(4,"thead"),b.Ob(5,"tr"),b.Ob(6,"th"),b.yc(7,"Date"),b.Nb(),b.Ob(8,"th"),b.yc(9,"Explanation"),b.Nb(),b.Ob(10,"th"),b.yc(11,"Debit"),b.Nb(),b.Ob(12,"th"),b.yc(13,"Credit"),b.Nb(),b.Ob(14,"th",11),b.yc(15,"Balance"),b.Nb(),b.Nb(),b.Nb(),b.Ob(16,"tbody"),b.wc(17,H,12,10,"tr",12),b.Nb(),b.Ob(18,"tfoot"),b.Ob(19,"tr"),b.Ob(20,"td",13),b.wc(21,W,1,1,"pagination",14),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.ac();b.xb(2),b.Ac("",null==t.user?null:t.user.name," Ledger"),b.xb(15),b.hc("ngForOf",t.shipAdminLedgerPage.content),b.xb(4),b.hc("ngIf",null!=t.shipAdminLedgerPage)}}function Q(t,e){if(1&t){const t=b.Pb();b.Ob(0,"button",21),b.Yb("click",function(){return b.qc(t),b.ac(2).addBalace()}),b.yc(1," Add "),b.Nb()}}function Z(t,e){if(1&t){const t=b.Pb();b.Ob(0,"form",16),b.Ob(1,"div",17),b.Ob(2,"label"),b.yc(3," Amount "),b.Nb(),b.Nb(),b.Ob(4,"div",18),b.Ob(5,"input",19),b.Yb("ngModelChange",function(e){return b.qc(t),b.ac().amount=e}),b.Nb(),b.Nb(),b.wc(6,Q,2,0,"button",20),b.Nb()}if(2&t){const t=b.ac();b.xb(5),b.hc("ngModel",t.amount),b.xb(1),b.hc("ngIf",t.amount>0)}}const tt=[{path:"cashbook",component:E},{path:"ship-admin-ledger",component:(()=>{class t{constructor(t,e){this.userService=t,this.accountingService=e,this.shipList=[]}ngOnInit(){}onSelectAdmin(t){this.user=t,this.getAdminShipList(t.id),this.getShipAdminLedgerPage(t.id)}getAdminShipList(t){return Object(i.a)(this,void 0,void 0,function*(){this.shipList=[];try{this.shipList=yield this.userService.getAdminShipListByUserId(t).toPromise()}catch(e){console.log(e)}})}getShipAdminLedgerPage(t,e=0){return Object(i.a)(this,void 0,void 0,function*(){try{this.shipAdminLedgerPage=yield this.accountingService.getShipAdminLedger(t,e).toPromise()}catch(n){console.log(n)}})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(c.a),b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-ship-admin-ledger"]],decls:9,vars:2,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row","m-0"],[1,"col-md-3","p-0"],[3,"admin"],["class","col-md-3",4,"ngIf"],["class","col-md-6",4,"ngIf"],[1,"col-md-3"],[1,"table","border"],[4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"text-right"],["colspan","5"],[3,"page","getPage",4,"ngIf"],[3,"page","getPage"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Ship Admin Ledger"),b.Nb(),b.Nb(),b.Ob(3,"div",0),b.Ob(4,"div",2),b.Ob(5,"div",3),b.Ob(6,"ship-admin-list",4),b.Yb("admin",function(t){return e.onSelectAdmin(t)}),b.Nb(),b.Nb(),b.wc(7,G,14,2,"div",5),b.wc(8,X,22,3,"div",6),b.Nb(),b.Nb()),2&t&&(b.xb(7),b.hc("ngIf",e.shipList.length>0),b.xb(1),b.hc("ngIf",e.shipAdminLedgerPage))},directives:[K,a.n,a.m,s.a],pipes:[a.c],styles:[""]}),t})()},{path:"add-income",component:B},{path:"add-expense",component:M},{path:"pay-ship-admin",component:(()=>{class t{constructor(t){this.accountingService=t}ngOnInit(){}onSelectAdmin(t){this.user=t,this.getShipAdminLedgerPage(t.id)}getShipAdminLedgerPage(t,e=0){return Object(i.a)(this,void 0,void 0,function*(){try{this.shipAdminLedgerPage=yield this.accountingService.getShipAdminLedger(t,e).toPromise()}catch(n){console.log(n)}})}addBalace(){return Object(i.a)(this,void 0,void 0,function*(){if(confirm("Are you sure to add balance "+this.amount+" to "+this.user.name+" Account "))try{yield this.accountingService.payToShipAdmin(this.user.id,this.amount).toPromise(),this.amount=0,this.getShipAdminLedgerPage(this.user.id)}catch(t){console.log(t)}})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(o.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-pay-ship-admin"]],decls:11,vars:2,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"row","m-0"],[1,"col-md-3","p-0"],[3,"admin"],["class","col-md-6",4,"ngIf"],[1,"col-md-3"],[1,"d-flex","justify-content-center","my-5"],["class","form-inline",4,"ngIf"],[1,"col-md-6"],[1,"table","border"],[1,"text-right"],[4,"ngFor","ngForOf"],["colspan","5"],[3,"page","getPage",4,"ngIf"],[3,"page","getPage"],[1,"form-inline"],[1,"form-group","mb-2"],[1,"form-group","mx-sm-3","mb-2"],["type","number","id","amount","name","amount",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","class","btn btn-primary mb-2",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary","mb-2",3,"click"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"span",1),b.yc(2,"Pay to ship"),b.Nb(),b.Nb(),b.Ob(3,"div",0),b.Ob(4,"div",2),b.Ob(5,"div",3),b.Ob(6,"ship-admin-list",4),b.Yb("admin",function(t){return e.onSelectAdmin(t)}),b.Nb(),b.Nb(),b.wc(7,_,22,3,"div",5),b.Ob(8,"div",6),b.Ob(9,"div",7),b.wc(10,Z,7,2,"form",8),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.xb(7),b.hc("ngIf",e.shipAdminLedgerPage),b.xb(3),b.hc("ngIf",e.user))},directives:[K,a.n,a.m,s.a,r.v,r.l,r.m,r.p,r.b,r.k,r.n],pipes:[a.c],styles:[""]}),t})()},{path:"agent-balance",component:v}];let et=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[J.a,A.e.forChild(tt)]]}),t})()}}]);