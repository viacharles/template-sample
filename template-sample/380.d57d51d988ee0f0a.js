"use strict";(self.webpackChunktemplate_sample=self.webpackChunktemplate_sample||[]).push([[380],{4380:(Oe,x,s)=>{s.r(x),s.d(x,{HomeModule:()=>be});var I=s(6180),h=s(1368),_=s(2308),P=s(3616),C=s(9336),b=s(3992),L=s(4548),E=s(3152),M=s(7744),n=s(4496),F=s(3168),T=s(4048),D=s(8240),R=s(2544),H=s(5560),G=s(423),N=s(6512),B=s(7048),V=s(6230);const z=["tHead"],j=["tAnim1"],W=["tAnim2"],Q=["tAnim3"],Y=["tAnim4"],X=["tAnim5"],U=["tAnim6"],$=["tAnim7"],q=["tAnim8"],K=["tAnim9"];function Z(t,r){if(1&t){const e=n.KQA();n.I0R(0,"li",8)(1,"button",9),n.qCj("click",function(){n.usT(e);const a=n.GaO();return n.CGJ(a.callSso())}),n.wR5(2,"em",10),n.OEk(3),n.wVc(4,"translate"),n.C$Y()()}2&t&&(n.yG2(3),n.oRS("",n.kDX(4,1,"nav.login")," "))}function J(t,r){1&t&&(n.I0R(0,"li",11)(1,"a",12),n.OEk(2),n.wVc(3,"translate"),n.C$Y()()),2&t&&(n.yG2(2),n.oRS(" ",n.kDX(3,1,"nav.projects-list-overview"),""))}const ee=[{path:"",component:(()=>{class t extends E.Q{get isLoggedIn$(){return this.authService.isLoggedIn$}constructor(e,i,a,o,c,d,p,g,f,u){super(),this.$window=e,this.$overlay=i,this.$layout=a,this.renderer=o,this.router=c,this.authService=d,this.$user=p,this.translate=g,this.storage=f,this.http=u,this.stats={project_count_est:140,tenant_count_est:10,user_count_est:30},this.isLogin=!1,this.isHeadVirtual=!0,this.headStyleChangePosition=650,this.fadeInClass="fadeIn",this.storage.get("lang").subscribe(y=>{this.selectedLang=y||"zh"})}ngOnInit(){this.$window.mainScroll$.pipe((0,P.a)(this.onDestroy$)).subscribe(e=>{this.setAnimation(e.target.scrollTop)}),this.authService.isLoggedIn$.subscribe(e=>{this.isLogin=!!e}),this.storage.get("session").subscribe(e=>{try{if(e){const i=`${e}`,o=JSON.parse(atob(i.split(".")[1])).exp;Math.round(Date.now()/1e3)>o&&this.authService.doLogout()}}catch{}},()=>{})}clickGo(){this.isLogin?this.router.navigateByUrl(`${M.Qx.Table}`):this.callSso()}callSso(){(0,C.y)({userData:this.http.get("assets/mock-data/user-data.json")}).pipe((0,b.U)(1)).subscribe(({userData:e})=>{(0,C.y)([this.storage.set("userData",e),this.storage.set("tenantData",e.tenantRespDtos[0]),this.storage.set("token","token"),this.storage.set("session","session"),this.storage.set("settingInfo",{chatEnable:"true",isSamlTest:"true",mockSamlLogoutPath:"http://34.80.186.63:8080/simplesaml/module.php/core/authenticate.php",samlLogoutPath:"https://tw3.cath"})]).pipe((0,b.U)(1)).subscribe(()=>{this.router.navigateByUrl(`${M.Qx.Table}`)})})}setAnimation(e){e>=this.headStyleChangePosition&&!0===this.isHeadVirtual?(this.renderer.removeClass(this.tHead?.nativeElement,"virtual"),this.renderer.addClass(this.tHead?.nativeElement,"entity"),this.isHeadVirtual=!1):e<this.headStyleChangePosition&&!1===this.isHeadVirtual&&(this.renderer.removeClass(this.tHead?.nativeElement,"entity"),this.renderer.addClass(this.tHead?.nativeElement,"virtual"),this.isHeadVirtual=!0),this.setFadeInAnim(e,279,this.fadeInClass,this.tAnim1?.nativeElement),this.setFadeInAnim(e,315,this.fadeInClass,this.tAnim2?.nativeElement),this.setFadeInAnim(e,540,this.fadeInClass,this.tAnim3?.nativeElement),this.setFadeInAnim(e,575,this.fadeInClass,this.tAnim4?.nativeElement),this.setFadeInAnim(e,575,"popIn",this.tAnim5?.nativeElement,500),this.setFadeInAnim(e,1145,this.fadeInClass,this.tAnim6?.nativeElement),this.setFadeInAnim(e,1145,"popIn",this.tAnim7?.nativeElement,500),this.setFadeInAnim(e,1525,this.fadeInClass,this.tAnim8?.nativeElement),this.setFadeInAnim(e,1525,this.fadeInClass,this.tAnim9?.nativeElement,500)}setFadeInAnim(e,i,a,o,c=0){e>i&&!o?.classList.contains(a)&&(0,L.k)(c).pipe((0,b.U)(1)).subscribe(()=>this.renderer.addClass(o,a))}static#e=this.\u0275fac=function(i){return new(i||t)(n.GI1(F.s),n.GI1(T.Y),n.GI1(D.O),n.GI1(n.q87),n.GI1(_.E5),n.GI1(R.A),n.GI1(H.u),n.GI1(G.q),n.GI1(N.yA),n.GI1(B.KK))};static#t=this.\u0275cmp=n.In1({type:t,selectors:[["app-home"]],viewQuery:function(i,a){if(1&i&&(n.CC$(z,5),n.CC$(j,5),n.CC$(W,5),n.CC$(Q,5),n.CC$(Y,5),n.CC$(X,5),n.CC$(U,5),n.CC$($,5),n.CC$(q,5),n.CC$(K,5)),2&i){let o;n.wto(o=n.Gqi())&&(a.tHead=o.first),n.wto(o=n.Gqi())&&(a.tAnim1=o.first),n.wto(o=n.Gqi())&&(a.tAnim2=o.first),n.wto(o=n.Gqi())&&(a.tAnim3=o.first),n.wto(o=n.Gqi())&&(a.tAnim4=o.first),n.wto(o=n.Gqi())&&(a.tAnim5=o.first),n.wto(o=n.Gqi())&&(a.tAnim6=o.first),n.wto(o=n.Gqi())&&(a.tAnim7=o.first),n.wto(o=n.Gqi())&&(a.tAnim8=o.first),n.wto(o=n.Gqi())&&(a.tAnim9=o.first)}},features:[n.eg9],decls:11,vars:6,consts:[[1,"w-100"],[1,"head","virtual"],["tHead",""],[1,"head-nav"],[1,"d-flex","align-items-center"],["class","login",4,"ngIf"],["class","text-green-middle mr-2",4,"ngIf"],[1,"icon-triangle","fs-xsm"],[1,"login"],[1,"btn-round","bg-green-middle","text-white","fs-xsm","d-flex","align-items-center","text-nowrap","mr-2",3,"click"],[1,"icon-user-solid","fs-xsm","mr-2_5"],[1,"text-green-middle","mr-2"],["routerLink","/data-table",1,"btn-projects","btn-round-line","border-green-middle","text-green-middle","fs-xsm"]],template:function(i,a){1&i&&(n.I0R(0,"section",0)(1,"div",1,2)(3,"div",3)(4,"ul",4),n.yuY(5,Z,5,3,"li",5),n.wVc(6,"async"),n.yuY(7,J,4,3,"li",6),n.wVc(8,"async"),n.I0R(9,"li",4),n.wR5(10,"em",7),n.C$Y()()()()()),2&i&&(n.yG2(5),n.E7m("ngIf",!n.kDX(6,2,a.isLoggedIn$)),n.yG2(2),n.E7m("ngIf",n.kDX(8,4,a.isLoggedIn$)))},dependencies:[h.u_,_.ER,h.a,V.sD],styles:["@keyframes _ngcontent-%COMP%_subExpand{0%{height:0;transform:translateY(-60%);opacity:0}60%{height:50%;transform:translateY(-30%);opacity:0;position:relative}to{height:auto;transform:translateY(0);opacity:1;z-index:0;position:relative}}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fade-up-in{0%{margin-top:10px;opacity:0}to{margin-top:0;opacity:1}}@keyframes _ngcontent-%COMP%_fade-up-out{0%{margin-top:0;opacity:1}to{margin-top:-20px;opacity:0}}@keyframes _ngcontent-%COMP%_spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_floatPopIn{0%{margin-top:0;opacity:0}30%{margin-top:-20px;opacity:.5}to{margin-top:0;opacity:1}}@keyframes _ngcontent-%COMP%_popIn{0%{margin-top:0;opacity:0}40%{margin-top:-20px;opacity:.3}90%{margin-top:0;opacity:.4}to{margin-top:0;opacity:1}}[_nghost-%COMP%]{display:flex;margin:auto;width:100%;background-color:#fff}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(.82)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   pre[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{font-size:clamp(10px,2vw,17px);margin-bottom:0}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(16px,4vw,36px);font-weight:400;color:var(--primary-color);white-space:nowrap}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}@media print{img[_ngcontent-%COMP%]{max-height:100px}}h2.title[_ngcontent-%COMP%]{color:var(--green-middle, #44b787);font-size:42px;font-weight:700;line-height:60px;letter-spacing:2.5px}h3.subtitle[_ngcontent-%COMP%]{color:var(--green-middle, #44b787);font-size:21px;font-style:normal;font-weight:500;line-height:35px;letter-spacing:1.4px}h4.subtitle[_ngcontent-%COMP%]{color:var(--green-middle, #44b787);font-size:25px;font-style:normal;font-weight:700;line-height:35px;letter-spacing:1px}p.content[_ngcontent-%COMP%]{color:var(--grey-black, #000);font-size:13px;font-weight:400;line-height:24px;letter-spacing:1.2px}@media print{section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:2em}}.head[_ngcontent-%COMP%]{transition:.5s;position:fixed;z-index:2;top:0;left:0;display:flex;justify-content:space-between;align-items:center;width:100%;padding:.9rem 4% 1rem}.head.entity[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 5px 5px #0000000d}.head.virtual[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#ffffffe6,#ffffffe6 30%,#fff0)}.head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:37px}.head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:not(.dropdown-menu){display:flex;flex-wrap:wrap;margin:0;gap:.5em;justify-content:flex-end}.head[_ngcontent-%COMP%]   .lang-select[_ngcontent-%COMP%]{display:none;position:relative}.head[_ngcontent-%COMP%]   ul.dropdown-menu[_ngcontent-%COMP%]{display:block;position:absolute}.head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-decoration:none;list-style:none}.head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type{display:flex;flex-direction:row;align-items:center}.head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   em[_ngcontent-%COMP%]{margin-left:4px;margin-bottom:3px}.head-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin-right:8px;letter-spacing:1.4px}.head-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8;color:#44b787}.head-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 22px;border:none}.head-nav[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{padding:0;margin:0;background-color:unset}.head-nav[_ngcontent-%COMP%]     .mat-select-arrow{border:none}.head-nav[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{display:none}.head-nav[_ngcontent-%COMP%]   .btn-projects[_ngcontent-%COMP%]{background-color:#ffffff80}.cover[_ngcontent-%COMP%]{overflow:hidden;height:753px}.cover__text[_ngcontent-%COMP%]{position:absolute;z-index:1;top:200px;left:calc(4% + 60px);display:flex;flex-direction:column;justify-content:space-between;width:474px;height:435px}.cover__text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;width:-moz-fit-content;width:fit-content}.cover__img[_ngcontent-%COMP%]{position:absolute;top:11px;left:calc(458px - 3%);width:70%;height:670px}.cover__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;opacity:0}.cover__img__1[_ngcontent-%COMP%]{top:495px;right:456px;animation:_ngcontent-%COMP%_fade-up-in 1.5s ease-out 1.5s forwards}.cover__img__2[_ngcontent-%COMP%]{top:427px;right:73px;animation:_ngcontent-%COMP%_floatPopIn 2s ease-in-out .3s forwards}.cover__img__3[_ngcontent-%COMP%]{top:342px;right:-57px;animation:_ngcontent-%COMP%_fade-up-in 1.5s ease-out 1.5s forwards}.cover__img__4[_ngcontent-%COMP%]{top:503px;right:71px;animation:_ngcontent-%COMP%_fade-up-in 1.5s ease-out 1.5s forwards}.cover__img__5[_ngcontent-%COMP%]{top:85px;right:305px;animation:_ngcontent-%COMP%_floatPopIn 2s ease-in-out .3s forwards}.cover__img__6[_ngcontent-%COMP%]{top:188px;right:101px;animation:_ngcontent-%COMP%_floatPopIn 1.5s ease-in-out 1.3s forwards}.cover__img__7[_ngcontent-%COMP%]{top:37px;right:-17px;animation:_ngcontent-%COMP%_floatPopIn 1.5s ease-in-out 1.3s forwards}.cover__img__8[_ngcontent-%COMP%]{top:-24px;right:328px;animation:_ngcontent-%COMP%_fade-up-in 2.5s ease-out 1.5s forwards}.cover__img__9[_ngcontent-%COMP%]{top:596px;right:190px;animation:_ngcontent-%COMP%_fade-in .8s ease-in 2.3s forwards}.cover__img__10[_ngcontent-%COMP%]{top:441px;right:482px;animation:_ngcontent-%COMP%_fade-in .8s ease-in 1.8s forwards}.cover__img__11[_ngcontent-%COMP%]{top:216px;right:219px;animation:_ngcontent-%COMP%_fade-in .8s ease-in 1.8s forwards}.cover[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]{margin-bottom:0}.cover[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{height:485px}.cover[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.cover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;border-color:#eeeff2;font-weight:700}.section__1[_ngcontent-%COMP%]{padding:1.1875rem 3.4375rem 1.1875rem 2.5375rem;border-radius:1.25rem;background-color:#fafafa}.section__1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:380px}.section__2[_ngcontent-%COMP%]{position:relative;width:85%;height:376px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{margin-top:1.25rem}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   ul[_ngcontent-%COMP%]{margin-left:1.5rem;list-style:disc;width:360px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:.5rem;width:180px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type{margin-left:-70px;min-width:500px;width:500px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1);margin-left:-30px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .img__text-1[_ngcontent-%COMP%]{top:51px;left:80px;font-size:13px;line-height:18px;letter-spacing:2px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .img__text-2[_ngcontent-%COMP%]{top:41px;right:143px;font-size:13px;line-height:18px;letter-spacing:2px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .img__text-3[_ngcontent-%COMP%]{top:147px;right:250px;font-size:13px;line-height:18px;letter-spacing:2px}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type   .img__text-4[_ngcontent-%COMP%]{top:134px;right:57px;font-size:13px;line-height:18px;letter-spacing:2px}.section__3[_ngcontent-%COMP%]{width:85%;align-items:center}.section__3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:1.5rem;list-style:disc;width:360px}.section__4[_ngcontent-%COMP%]{position:relative;height:600px;width:100%}.section__4[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%)}.section__4[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-image:url(bg.c8747f622cd9e1eb.png)}.section__4[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1.875rem}.section__4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:3.125rem;border:none}.section__4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.section__4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.fadeIn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in 1s ease-out forwards}.popIn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_popIn 1s ease-out forwards}@keyframes _ngcontent-%COMP%_popIn{0%{margin-top:0;opacity:0}50%{margin-top:-30px;opacity:.5}to{margin-top:0;opacity:1}}@media screen and (max-width: 860px){.section__1[_ngcontent-%COMP%], .section__2[_ngcontent-%COMP%]{flex-direction:column}.section__2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{margin-top:10rem}.section__3[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-top:8rem}}"]})}return t})(),data:{title:"Cloud Ready - Home"}}];let te=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({imports:[_.qQ.forChild(ee),_.qQ]})}return t})();var ie=s(144),O=s(4156),m=s(3576);let w=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({imports:[m.KE,h.MD,m.AN,m.oD]})}return t})(),ne=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=n.wxM({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ae=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({providers:[ne]})}return t})(),ce=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({imports:[h.MD,m.AN,ae,m.AN]})}return t})();var de=s(108);s(9684);const ge={provide:new n.UbH("mat-select-scroll-strategy"),deps:[O.mc],useFactory:function he(t){return()=>t.scrollStrategies.reposition()}};let ye=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({providers:[ge],imports:[h.MD,O.Y1,w,m.AN,de.uU,ce,w,m.AN]})}return t})();var k=s(1700);let be=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.a4G({type:t});static#i=this.\u0275inj=n.s3X({imports:[h.MD,te,ie.F,ye,k.M,I.k,k.M]})}return t})()}}]);