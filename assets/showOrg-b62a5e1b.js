import{E as f}from"./index-1c6333b5.js";import{B as g}from"./index-441935dc.js";import{I as h}from"./index-72ee420c.js";import{T as y}from"./TextValid-100be459.js";import{C as b,V as v}from"./VueSelect-4c8519b3.js";import{T as w}from"./index-31d1a8ca.js";import{M as C}from"./index-86a58ede.js";import{M as T}from"./index-96a9bfa7.js";import{_ as I,g as V}from"./index-e058a960.js";import{C as M}from"./index-8994827d.js";import{C as k}from"./index-2d8ae848.js";import{al as B,aF as a,as as n,o as r,x as l,bj as E,p as t,F as O,aD as S,aT as z}from"./preload-helper-9e0646ca.js";const A={name:"SendToOrg",props:{item:{type:Object,default:()=>{}},userList:{type:Array,default:()=>[]},organizeList:{type:Array,default:()=>[]},customList:{type:Array,default:()=>[]},activeTab:{type:Boolean,default:!1}},components:{CFlatPickr:k,Checkbox:M,ModalDrive:T,ModalOrganizeAll:C,Expansion:f,Button:g,Icon:h,vSelect:b,VueSelect:v,TextValid:y,Textinput:w},computed:{isMobile(){return V().isMobile}},emits:["event:submit"],setup(c,i){const e=o=>{if(o=="users")return"mingcute:user-4-fill";if(o=="organizations")return"grommet-icons:tree"};return B(async()=>{}),{checkIcon:e}}},F={class:"px-4"},L={class:"overflow-scroll pb-6 mt-4 table_organize"},D={class:"w-full min-w-[600px]"},j=t("tr",null,[t("th",{class:"w-[50px] text-start"},"ประเภท"),t("th",{class:"w-[150px] text-start"},"ชื่อหน่วยงาน/บุคคล"),t("th",{class:"w-[150px] text-start px-2"},"อีเมล")],-1),N={class:"w-[50px]"},U={class:"w-[150px]"},P={class:"w-[150px] px-2"};function R(c,i,e,o,q,p){const m=a("Icon"),u=a("Textinput"),_=a("Expansion");return n(),r("div",null,[l(_,{parentClass:"space-y-5 mb-6 "+(p.isMobile?"-mx-6":""),title:"ส่งหนังสือต่อให้หน่วยงาน",activeItem:e.activeTab},{default:E(()=>[t("div",F,[t("div",L,[t("table",D,[j,(n(!0),r(O,null,S(e.item.document_send_to,(s,d)=>(n(),r("tr",{key:d},[t("td",N,[l(m,{class:"text-2xl text-blue-500",icon:o.checkIcon(s.to_type)},null,8,["icon"])]),t("td",U,z(s.to_name),1),t("td",P,[t("div",null,[l(u,{classInput:"bg-gray-100 border-gray-200 w-full",modelValue:s.to_email,"onUpdate:modelValue":x=>s.to_email=x,isReadonly:""},null,8,["modelValue","onUpdate:modelValue"])])])]))),128))])])])]),_:1},8,["parentClass","activeItem"])])}const ot=I(A,[["render",R]]);export{ot as s};
