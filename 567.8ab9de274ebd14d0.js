"use strict";(self.webpackChunknoghericpets=self.webpackChunknoghericpets||[]).push([[567],{3567:(q,p,r)=>{r.r(p),r.d(p,{HomeModule:()=>U});var a=r(6895),l=r(6773),t=r(8256);const g=function(){return["/"]};let d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:10,vars:2,consts:[[1,"content-footer","flex","justify-content-center","align-items-center","flex-direction-column","gap-20"],[1,"logo","flex","align-items-center","gap-10"],["href","https://nogheric.com/"],["src","../../../../assets/Nogheric_logo_dark.png","alt",""],[1,"terms-and-conditions"],[3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"footer")(1,"div",0)(2,"div",1)(3,"span"),t._uU(4,"Powered by"),t.qZA(),t.TgZ(5,"a",2),t._UZ(6,"img",3),t.qZA()(),t.TgZ(7,"div",4)(8,"a",5),t._uU(9,"T\xe9rminos y condiciones"),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("routerLink",t.DdM(1,g)))},dependencies:[l.yS],styles:['@charset "UTF-8";footer[_ngcontent-%COMP%]{width:100%}.content-footer[_ngcontent-%COMP%]{margin-top:25px;background-color:var(--color-blue1);height:180px}.content-footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-orange1);font-weight:700}.content-footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px}.content-footer[_ngcontent-%COMP%]   .terms-and-conditions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-grey4)}']}),n})(),h=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"content-home"],[1,"footer"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet")(2,"app-footer",1),t.qZA())},dependencies:[l.lC,d],styles:[".content-home[_ngcontent-%COMP%]{height:100%}.footer[_ngcontent-%COMP%]{bottom:0;width:100%}"]}),n})();var m=r(2340),f=r(529);let u=(()=>{class n{constructor(e){this._http=e,this.baseUrl=m.N.baseUrl+"/rest/v1/"}getPets(){return this._http.get(`${this.baseUrl}Pet?select=*`)}getPetById(e){return this._http.get(`${this.baseUrl}Pet?petTypeId=in.(${e})&select=*`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _=["AllquRef"],C=["MichiRef"],O=["AllquMichiRef"];let P=(()=>{class n{constructor(e,i,c){this._renderer=e,this._PetsS=i,this._cd=c,this.AllquRef={},this.MichiRef={},this.AllquMichiRef={},this.petsO=new t.vpe,this.spinnerO=new t.vpe}ngOnInit(){}ngAfterViewInit(){this.selectOptionAll(),this._cd.detectChanges()}selectOptionDog(){this.spinnerO.emit(!0),this.petsO.emit([]),this._PetsS.getPetById(1).subscribe(e=>{this.petsO.emit(e),this.spinnerO.emit(!1)}),this._renderer.addClass(this.AllquRef.nativeElement,"select"),this._renderer.removeClass(this.MichiRef.nativeElement,"select"),this._renderer.removeClass(this.AllquMichiRef.nativeElement,"select")}selectOptionCat(){this.spinnerO.emit(!0),this.petsO.emit([]),this._PetsS.getPetById(2).subscribe(e=>{this.petsO.emit(e),this.spinnerO.emit(!1)}),this._renderer.removeClass(this.AllquRef.nativeElement,"select"),this._renderer.addClass(this.MichiRef.nativeElement,"select"),this._renderer.removeClass(this.AllquMichiRef.nativeElement,"select")}selectOptionAll(){this.spinnerO.emit(!0),this.petsO.emit([]),this._PetsS.getPets().subscribe(e=>{this.petsO.emit(e),this.spinnerO.emit(!1)}),this._renderer.removeClass(this.AllquRef.nativeElement,"select"),this._renderer.removeClass(this.MichiRef.nativeElement,"select"),this._renderer.addClass(this.AllquMichiRef.nativeElement,"select")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(u),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],viewQuery:function(e,i){if(1&e&&(t.Gf(_,5),t.Gf(C,5),t.Gf(O,5)),2&e){let c;t.iGM(c=t.CRH())&&(i.AllquRef=c.first),t.iGM(c=t.CRH())&&(i.MichiRef=c.first),t.iGM(c=t.CRH())&&(i.AllquMichiRef=c.first)}},outputs:{petsO:"petsO",spinnerO:"spinnerO"},decls:20,vars:0,consts:[[1,"content-header","flex","justify-content-center","align-items-center","flex-direction-column"],["src","../../../../assets/logo_pets.png","alt","NOGHERIC PETS"],[1,"content-filter","flex","gap-10","flex-direction-row"],[1,"btn","a","flex","justify-content-center","align-items-center","gap-10",3,"click"],["AllquRef",""],[1,"icon-allqu"],[1,"label"],[1,"btn","b","flex","justify-content-center","align-items-center","gap-10",3,"click"],["MichiRef",""],[1,"icon-michi"],[1,"btn","c","flex","justify-content-center","align-items-center","gap-10","select",3,"click"],["AllquMichiRef",""]],template:function(e,i){1&e&&(t.TgZ(0,"header")(1,"div",0),t._UZ(2,"img",1),t.TgZ(3,"div",2)(4,"button",3,4),t.NdJ("click",function(){return i.selectOptionDog()}),t._UZ(6,"span",5),t.TgZ(7,"span",6),t._uU(8,"Allqu"),t.qZA()(),t.TgZ(9,"button",7,8),t.NdJ("click",function(){return i.selectOptionCat()}),t._UZ(11,"span",9),t.TgZ(12,"span",6),t._uU(13,"Michi"),t.qZA()(),t.TgZ(14,"button",10,11),t.NdJ("click",function(){return i.selectOptionAll()}),t._UZ(16,"span",9),t.TgZ(17,"span",6),t._uU(18,"&"),t.qZA(),t._UZ(19,"span",5),t.qZA()()()())},styles:['@charset "UTF-8";.content-header[_ngcontent-%COMP%]{margin-bottom:30px}.content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;margin:15px}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]{width:100%}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;cursor:pointer;padding:6px 5px;font-size:16px;border-radius:10px;border:1px solid var(--color-grey1)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1).select{transition:.2s ease-out;background-color:var(--color-blue1);border:1px solid var(--color-blue1)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1).select   svg[_ngcontent-%COMP%], .content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1).select   .label[_ngcontent-%COMP%]{color:#fff}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1).select   .icon-allqu[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Allqu-White.616863f88ad7f912.svg)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2).select{transition:.2s ease-out;background-color:var(--color-orange1);border:1px solid var(--color-orange1)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2).select   svg[_ngcontent-%COMP%], .content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2).select   .label[_ngcontent-%COMP%]{color:#fff}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2).select   .icon-michi[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Michi-White.7bd15d1f4daa7665.svg)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(3).select{transition:.2s ease-out;background-color:var(--color-blue1);border:1px solid var(--color-blue1)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(3).select   svg[_ngcontent-%COMP%], .content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(3).select   .label[_ngcontent-%COMP%]{color:#fff}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(3).select   .icon-allqu[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Allqu-White.616863f88ad7f912.svg)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(3).select   .icon-michi[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Michi-White.7bd15d1f4daa7665.svg)}.content-header[_ngcontent-%COMP%]   .content-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--color-grey1)}.icon-allqu[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Allqu.b6a66bc67812788a.svg)}.icon-michi[_ngcontent-%COMP%]{width:20px;height:25px;color:#fff;background-size:cover;background-image:url(Michi.f9b878b9eaa3e5b9.svg)}@media (min-width: 768px){.content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}}']}),n})();const M=function(n,o){return{dog:n,cat:o}};function x(n,o){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"div",5),t._uU(5),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA(),t.TgZ(8,"div",7)(9,"div"),t._UZ(10,"i",8),t._uU(11),t.qZA(),t.TgZ(12,"div"),t._UZ(13,"i",9),t._uU(14),t.qZA(),t.TgZ(15,"div"),t._UZ(16,"i",10),t._uU(17),t.qZA()()()()),2&n){const e=o.$implicit,i=t.oxw();t.Q6J("ngClass",t.WLB(8,M,1===e.petTypeId,2===e.petTypeId)),t.xp6(2),t.s9C("src",i.prueba(e),t.LSH),t.xp6(3),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.description," "),t.xp6(4),t.hij(" ",e.cellphone," "),t.xp6(3),t.hij(" ",e.email," "),t.xp6(3),t.AsE(" ",e.address,", ",e.department," ")}}let v=(()=>{class n{constructor(e){this._cd=e,this.pets=[]}ngOnInit(){}ngOnChanges(e){}ngAfterViewInit(){}ngAfterViewChecked(){}prueba(e){return""!=e.imageUrl&&null!=e.imageUrl||1!=e.petTypeId?""!=e.imageUrl&&null!=e.imageUrl||2!=e.petTypeId?e.imageUrl:"../../../../assets/pet_cat.png":"../../../../assets/pet_dog.png"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-pet"]],inputs:{pets:"pets"},features:[t.TTD],decls:1,vars:1,consts:[["class","content-card align-items-center",3,"ngClass",4,"ngFor","ngForOf"],[1,"content-card","align-items-center",3,"ngClass"],[1,"image-pet","flex","gap-10","align-items-center"],[3,"src"],[1,"flex","flex-direction-column","card-information"],[1,"name-pet"],[1,"description-pet"],[1,"info-contact","flex","flex-direction-column"],[1,"bi","bi-phone"],[1,"bi","bi-envelope"],[1,"bi","bi-pin-map"]],template:function(e,i){1&e&&t.YNc(0,x,18,11,"div",0),2&e&&t.Q6J("ngForOf",i.pets)},dependencies:[a.mk,a.sg],styles:['@charset "UTF-8";.content-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:0 auto}.content-card[_ngcontent-%COMP%]   .image-pet[_ngcontent-%COMP%]{border-radius:20px;z-index:10;width:155px;height:150px}.content-card[_ngcontent-%COMP%]   .image-pet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px;bottom:0;width:100%;height:100%;object-fit:cover;padding:5px}.content-card[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]{width:100%;left:-150px;height:137px;margin:10px 0;padding:10px 10px 10px 164px;border-radius:20px;background-color:var(--color-background-card)}.content-card[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .name-pet[_ngcontent-%COMP%]{font-weight:800;font-size:16px;line-height:22px}.content-card[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]{font-size:11px}.content-card[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .description-pet[_ngcontent-%COMP%]{width:235px;height:48px;font-size:12px;line-height:12px;font-weight:400;color:var(--color-grey1);overflow-wrap:break-word}.content-card[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .info-site[_ngcontent-%COMP%]{font-size:11px;font-weight:700}.content-card.dog[_ngcontent-%COMP%]   .image-pet[_ngcontent-%COMP%]{background-color:var(--color-blue1)}.content-card.dog[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .name-pet[_ngcontent-%COMP%], .content-card.dog[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]{color:var(--color-orange1)}.content-card.cat[_ngcontent-%COMP%]   .image-pet[_ngcontent-%COMP%]{background-color:var(--color-orange1)}.content-card.cat[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .name-pet[_ngcontent-%COMP%], .content-card.cat[_ngcontent-%COMP%]   .card-information[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]{color:var(--color-blue1)}']}),n})();var b=r(2925);function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.nextPage())}),t._UZ(1,"i",2),t.qZA()}}let w=(()=>{class n{constructor(){this.dataI=[],this.dataO=new t.vpe,this.dataTemp=[],this.maxItems=12,this.currentPage=2,this.totalPages=0,this.viewButtonPlus=!1}ngOnInit(){}ngOnChanges(e){this.dataI.length>=1&&(this.totalPages=Math.ceil(this.dataI.length/this.maxItems),this.viewButtonPlus=!(this.dataI.length<=this.maxItems),this.currentPage=2,this.pagination())}pagination(){if(this.dataTemp=[],this.dataO.emit(this.dataTemp),this.dataI.length<=this.maxItems)for(let e=0;e<this.dataI.length;e++)this.dataTemp.push(this.dataI[e]),this.maxItems-1==e&&this.dataO.emit(this.dataTemp);else for(let e=0;e<this.maxItems;e++)this.dataTemp.push(this.dataI[e]),this.maxItems-1==e&&this.dataO.emit(this.dataTemp)}nextPage(){for(let e=(this.currentPage-1)*this.maxItems;e<this.currentPage*this.maxItems;e++)null!=this.dataI[e]&&this.dataTemp.push(this.dataI[e]);this.currentPage!=this.totalPages+1&&(this.dataO.emit(this.dataTemp),this.currentPage+=1,this.currentPage==this.totalPages+1&&(this.viewButtonPlus=!1))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pagination"]],inputs:{dataI:"dataI"},outputs:{dataO:"dataO"},features:[t.TTD],decls:1,vars:1,consts:[["class","btn-pagination flex align-items-center justify-content-center",3,"click",4,"ngIf"],[1,"btn-pagination","flex","align-items-center","justify-content-center",3,"click"],[1,"bi","bi-plus-lg"]],template:function(e,i){1&e&&t.YNc(0,T,2,0,"div",0),2&e&&t.Q6J("ngIf",i.viewButtonPlus)},dependencies:[a.O5],styles:[".btn-pagination[_ngcontent-%COMP%]{background-color:var(--color-orange1);border:none;border-radius:15px;color:#fff;padding:10px;width:100%;cursor:pointer;margin:20px 0}"]}),n})();function y(n,o){if(1&n&&t._UZ(0,"app-card-pet",5),2&n){const e=t.oxw();t.Q6J("pets",e.petsFinal)}}function Z(n,o){1&n&&t._UZ(0,"app-spinner",6)}const A=[{path:"",component:h,children:[{path:"",component:(()=>{class n{constructor(e){this._cd=e,this.pets=[],this.spinner=!1,this.petsFinal=[]}ngOnInit(){}ngAfterViewInit(){}ngAfterViewChecked(){this._cd.detectChanges()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pets"]],decls:6,vars:3,consts:[[1,"content-pets","gap-10","flex-direction-column","align-items-center"],[3,"petsO","spinnerO"],["class","app-card-content flex-direction-column gap-20 app-card-pet",3,"pets",4,"ngIf"],[1,"content-pagination","flex","flex-direction-row","justify-content-center","gap-20",3,"dataI","dataO"],["class","flex flex-direction-column align-items-center",4,"ngIf"],[1,"app-card-content","flex-direction-column","gap-20","app-card-pet",3,"pets"],[1,"flex","flex-direction-column","align-items-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("petsO",function(s){return i.pets=s})("spinnerO",function(s){return i.spinner=s}),t.qZA(),t.TgZ(2,"div"),t.YNc(3,y,1,1,"app-card-pet",2),t.qZA(),t.TgZ(4,"app-pagination",3),t.NdJ("dataO",function(s){return i.petsFinal=s}),t.qZA(),t.YNc(5,Z,1,0,"app-spinner",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",!i.spinner),t.xp6(1),t.Q6J("dataI",i.pets),t.xp6(1),t.Q6J("ngIf",i.spinner))},dependencies:[a.O5,P,v,b.O,w],styles:['@charset "UTF-8";.content-pets[_ngcontent-%COMP%]{margin:auto;width:100%;min-height:100%;padding:0 8px}.app-card-pet[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr)}@media (min-width: 576px){.content-pets[_ngcontent-%COMP%]{width:70%}.app-card-pet[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr)}}@media (min-width: 768px){.content-pets[_ngcontent-%COMP%]{width:50%}.app-card-pet[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr)}}@media (min-width: 992px){.content-pets[_ngcontent-%COMP%]{width:70%}.app-card-pet[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}}@media (min-width: 1200px){.content-pets[_ngcontent-%COMP%]{width:70%}.app-card-pet[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}}']}),n})()}]},{path:"**",redirectTo:"",pathMatch:"prefix"}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]}),n})();var k=r(4466);let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,I,k.m]}),n})()}}]);