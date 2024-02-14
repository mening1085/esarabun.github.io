import{D as T,S as B}from"./index-090a8953.js";import{B as P}from"./index-441935dc.js";import{C as D}from"./index-263882d1.js";import{I as V}from"./index-72ee420c.js";import{I as R}from"./index-a60d9262.js";import{P as $}from"./index-bb139ada.js";import{a as A}from"./basic-tablle-data-60d547bc.js";import{w as F,_ as x}from"./index-e058a960.js";import{aF as s,as as a,o as l,x as n,bj as r,p as t,ac as _,aT as d,n as u,F as G,aD as M,m as N,w as O}from"./preload-helper-9e0646ca.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./iconify-4e42c13d.js";import"./vue-cleave.min-9e1201c2.js";import"./index-7e9b1d19.js";import"./user-4-99fc6f59.js";import"./user-6-ccd18a32.js";const j={mixins:[F],components:{Pagination:$,InputGroup:R,Dropdown:T,Icon:V,Card:D,MenuItem:B,Button:P},data(){return{advancedTable:A,current:1,perpage:10,pageRange:5,searchTerm:"",actions:[{name:"send",icon:"ph:paper-plane-right",doit:()=>{this.$router.push("/app/invoice-add")}},{name:"view",icon:"heroicons-outline:eye",doit:()=>{this.$router.push("/app/invoice-preview")}},{name:"edit",icon:"heroicons:pencil-square",doit:()=>{this.$router.push("/app/invoice-edit")}},{name:"delete",icon:"heroicons-outline:trash",doit:()=>{}}],options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],columns:[{label:"Id",field:"id"},{label:"Order",field:"order"},{label:"Customer",field:"customer"},{label:"Date",field:"date"},{label:"Quantity",field:"quantity"},{label:"Amount",field:"amount"},{label:"Status",field:"status"},{label:"Action",field:"action"}]}}},q={class:"md:flex pb-6 items-center"},z=t("h6",{class:"flex-1 md:mb-0 mb-3"},"Invoice",-1),Q={class:"-mx-6"},E=t("div",{class:"text-center"},[t("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),L={key:0,class:"flex items-center"},U={class:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},H=["src","alt"],J={class:"text-sm text-slate-600 dark:text-slate-300 capitalize font-medium"},K={key:1,class:"font-medium"},W={key:2,class:"text-slate-500 dark:text-slate-400"},X={key:3,class:"block w-full"},Y={key:4},Z={class:"text-xl"},ee=["onClick"],te={class:"text-base"},oe={class:"py-4 px-3"};function ne(b,i,h,f,o,v){const m=s("InputGroup"),p=s("Button"),g=s("Icon"),w=s("MenuItem"),y=s("Dropdown"),C=s("Pagination"),k=s("vue-good-table"),I=s("Card");return a(),l("div",null,[n(I,{noborder:""},{default:r(()=>[t("div",q,[z,t("div",{class:_(["md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse",b.window.width<768?"space-x-rb":""])},[n(m,{modelValue:o.searchTerm,"onUpdate:modelValue":i[0]||(i[0]=e=>o.searchTerm=e),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"]),n(p,{icon:"heroicons-outline:calendar",text:"Select date",btnClass:" btn-outline-secondary dark:border-slate-700  text-slate-600 btn-sm font-normal dark:text-slate-300 ",iconClass:"text-lg"}),n(p,{icon:"heroicons-outline:filter",text:"Filter",btnClass:" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm ",iconClass:"text-lg"}),n(p,{icon:"heroicons-outline:plus-sm",text:"Add Record",btnClass:" btn-dark font-normal btn-sm ",iconClass:"text-lg",link:"invoice-add"})],2)]),t("div",Q,[n(k,{columns:o.columns,styleClass:" vgt-table  centered ",rows:o.advancedTable,"sort-options":{enabled:!1},"pagination-options":{enabled:!0,perPage:o.perpage},"search-options":{enabled:!0,externalQuery:o.searchTerm},"select-options":{enabled:!0,selectOnCheckboxOnly:!0,selectioninfoClass:"table-input-checkbox",selectionText:"rows selected",clearSelectionText:"clear",disableSelectinfo:!0,selectAllByGroup:!0}},{emptystate:r(()=>[E]),"table-row":r(e=>[e.column.field=="customer"?(a(),l("span",L,[t("span",U,[t("img",{src:e.row.customer.image,alt:e.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,H)]),t("span",J,d(e.row.customer.name),1)])):u("",!0),e.column.field=="order"?(a(),l("span",K,d("#"+e.row.order),1)):u("",!0),e.column.field=="date"?(a(),l("span",W,d(e.row.date),1)):u("",!0),e.column.field=="status"?(a(),l("span",X,[t("span",{class:_(["inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25",`${e.row.status==="paid"?"text-success-500 bg-success-500":""} 
            ${e.row.status==="due"?"text-warning-500 bg-warning-500":""}
            ${e.row.status==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `])},d(e.row.status),3)])):u("",!0),e.column.field=="action"?(a(),l("span",Y,[n(y,{classMenuItems:" w-[140px]"},{menus:r(()=>[(a(!0),l(G,null,M(o.actions,(c,S)=>(a(),N(w,{key:S},{default:r(()=>[t("div",{onClick:c.doit,class:_(`
                
                  ${c.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `)},[t("span",te,[n(g,{icon:c.icon},null,8,["icon"])]),t("span",null,d(c.name),1)],10,ee)]),_:2},1024))),128))]),default:r(()=>[t("span",Z,[n(g,{icon:"heroicons-outline:dots-vertical"})])]),_:1})])):u("",!0)]),"pagination-bottom":r(e=>[t("div",oe,[n(C,{total:50,current:o.current,"per-page":o.perpage,pageRange:o.pageRange,onPageChanged:i[1]||(i[1]=c=>o.current=c),pageChanged:e.pageChanged,perPageChanged:e.perPageChanged,enableSearch:"",enableSelect:"",options:o.options},{default:r(()=>[O(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged","options"])])]),_:1},8,["columns","rows","pagination-options","search-options"])])]),_:1})])}const se=x(j,[["render",ne]]),ae={components:{Invoice:se}};function re(b,i,h,f,o,v){const m=s("Invoice");return a(),l("div",null,[n(m)])}const Se=x(ae,[["render",re]]);export{Se as default};