(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{gIaX:function(t,n,o){"use strict";o.r(n),o.d(n,"ROUTES",function(){return m}),o.d(n,"ShipsModule",function(){return O});var a=o("fXoL"),e=o("mrSG"),c=o("u6mN"),r=o("tyNb"),i=o("1kSV"),s=o("ofXK");function l(t,n){if(1&t){const t=a.Pb();a.Ob(0,"li",11),a.Ob(1,"a",12),a.Yb("click",function(){return a.qc(t),a.ac().toggleCollapse()}),a.yc(2,"Dashboard"),a.Nb(),a.Nb()}}function b(t,n){if(1&t){const t=a.Pb();a.Ob(0,"li",11),a.Ob(1,"a",13),a.Yb("click",function(){return a.qc(t),a.ac().toggleCollapse()}),a.yc(2,"REGISTER"),a.Nb(),a.Nb()}}function g(t,n){if(1&t){const t=a.Pb();a.Ob(0,"li",11),a.Ob(1,"a",14),a.Yb("click",function(){return a.qc(t),a.ac().toggleCollapse()}),a.yc(2,"LOGIN"),a.Nb(),a.Nb()}}function u(t,n){if(1&t){const t=a.Pb();a.Ob(0,"li",11),a.Ob(1,"a",15),a.Yb("click",function(){return a.qc(t),a.ac().logout()}),a.yc(2,"LOGOUT"),a.Nb(),a.Nb()}}let f=(()=>{class t{constructor(t,n){this.auth=t,this.router=n,this.show=!1}ngOnInit(){return Object(e.a)(this,void 0,void 0,function*(){})}toggleCollapse(){this.show=!this.show}logout(){this.auth.clear()}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(c.a),a.Jb(r.b))},t.\u0275cmp=a.Db({type:t,selectors:[["navbar"]],decls:13,vars:6,consts:[[1,"navbar","navbar-expand-md","navbar-dark","fixed-top","dark-primary-color"],[1,"container-fluid"],["target","_blank","href","https://www.hotelswave.com",1,"navbar-brand",3,"click"],["src","assets/images/logo.png",1,"logo"],["type","button","data-toggle","collapse","data-target","#navbarCollapse","aria-controls","navbarCollapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["id","navbarCollapse",1,"collapse","navbar-collapse","show"],[1,"navbar-nav","mr-auto"],[1,"nav","navbar-nav","navbar-right"],["class","nav-item",4,"ngIf"],["class","nav-item ",4,"ngIf"],[1,"nav-item"],["routerLink","/dashboard","routerLinkActive","active",1,"nav-link",3,"click"],["routerLink","/register",1,"nav-link",3,"click"],["routerLink","/login",1,"nav-link",3,"click"],["routerLink","",1,"nav-link",3,"click"]],template:function(t,n){1&t&&(a.Ob(0,"nav",0),a.Ob(1,"div",1),a.Ob(2,"a",2),a.Yb("click",function(){return n.toggleCollapse()}),a.Kb(3,"img",3),a.Nb(),a.Ob(4,"button",4),a.Yb("click",function(){return n.toggleCollapse()}),a.Kb(5,"span",5),a.Nb(),a.Ob(6,"div",6),a.Kb(7,"ul",7),a.Ob(8,"ul",8),a.wc(9,l,3,0,"li",9),a.wc(10,b,3,0,"li",10),a.wc(11,g,3,0,"li",10),a.wc(12,u,3,0,"li",9),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.xb(6),a.Bb("show",n.show),a.xb(3),a.hc("ngIf",n.auth.isAuthenticated()),a.xb(1),a.hc("ngIf",!n.auth.isAuthenticated()),a.xb(1),a.hc("ngIf",!n.auth.isAuthenticated()),a.xb(1),a.hc("ngIf",n.auth.isAuthenticated()))},directives:[i.f,s.n,r.d,r.c],styles:[".dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer}.logo[_ngcontent-%COMP%]{height:75px}.dropdown-item[_ngcontent-%COMP%]{color:#00796b!important}.navbar[_ngcontent-%COMP%]{background:#1b2445;font-weight:700;border-bottom:3px solid #f7a719;box-shadow:0 2px 5px rgba(0,0,0,.16),0 2px 10px rgba(0,0,0,.12)}.navbar[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.btn-sm[_ngcontent-%COMP%]{background:#f7a719;color:#fafafa}.nav-link[_ngcontent-%COMP%]:hover{color:#00796b!important;background:#fff}"]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["footer"]],decls:10,vars:0,consts:[["id","footer",1,"footer-section"],["target","_blank","href","//www.unololtd.com"],["target","_blank","href","https://www.hotelswave.com"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"p"),a.yc(2," Powered by "),a.Ob(3,"a",1),a.yc(4,"UNOLO Technology Limited"),a.Nb(),a.Kb(5,"br"),a.yc(6," Copyright \xa9 2016 - 2017 "),a.Ob(7,"a",2),a.yc(8,"Hotelswave.com"),a.Nb(),a.yc(9," All rights reserved. "),a.Nb(),a.Nb())},styles:[".footer-section[_ngcontent-%COMP%]{background:#efefef;padding:10px;color:#000;text-align:center}.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-weight:600}"]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-ships"]],decls:3,vars:0,template:function(t,n){1&t&&(a.Kb(0,"navbar"),a.Kb(1,"router-outlet"),a.Kb(2,"footer"))},directives:[f,r.f,d],styles:[""]}),t})(),v=(()=>{class t{constructor(){this.images=[1,2,3,4,5,6].map(t=>`assets/images/carousal/carousel-${t}.jpeg`)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-index"]],decls:16,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-4","p-2"],["src","assets/images/carousal/carousel-1.jpeg",1,"img-fluid"],["src","assets/images/carousal/carousel-2.jpeg",1,"img-fluid"],["src","assets/images/carousal/carousel-3.jpeg",1,"img-fluid"],["src","assets/images/carousal/carousel-4.jpeg",1,"img-fluid"],["src","assets/images/carousal/carousel-5.jpeg",1,"img-fluid"],["src","assets/images/carousal/carousel-6.jpeg",1,"img-fluid"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Kb(3,"img",3),a.Nb(),a.Ob(4,"div",2),a.Kb(5,"img",4),a.Nb(),a.Ob(6,"div",2),a.Kb(7,"img",5),a.Nb(),a.Ob(8,"div",2),a.Kb(9,"img",6),a.Nb(),a.Ob(10,"div",2),a.Kb(11,"img",7),a.Nb(),a.Ob(12,"div",2),a.Kb(13,"img",8),a.Nb(),a.Nb(),a.Nb(),a.Ob(14,"div",0),a.Kb(15,"div",1),a.Nb())},styles:["[_nghost-%COMP%]{background:#efefef;display:block;padding-top:101px}"]}),t})();var h=o("KZX/");const m=[{path:"",component:p,children:[{path:"",component:v}]}];let O=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[h.a,r.e.forChild(m)]]}),t})()}}]);