import{B as u}from"./index-441935dc.js";import{C as h}from"./index-263882d1.js";import{F as x}from"./index-6c8c0d73.js";import{T as f}from"./index-ce9a51c5.js";import{T as g}from"./index-31d1a8ca.js";import{_ as y}from"./repeater-9e06ef16.js";import{C as b}from"./index-2d8ae848.js";import{_ as v}from"./index-e058a960.js";import{o as C,x as e,bj as n,aF as o,as as A,p as t}from"./preload-helper-9e0646ca.js";import"./index-72ee420c.js";import"./iconify-4e42c13d.js";import"./vue-cleave.min-9e1201c2.js";import"./vee-validate.esm-0c282d04.js";const k={components:{CFlatPickr:b,Button:u,Card:h,Textinput:g,FromGroup:x,Textarea:f,Repeater:y}},w=t("h4",{class:"text-slate-900 dark:text-white text-xl mb-4"},"#89572935Kh",-1),F={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},T={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},B=t("div",{class:"lg:col-span-2 col-span-1 text-slate-900 dark:text-slate-300 text-base font-medium"}," Recipient info-500 ",-1),N={class:"lg:col-span-2 col-span-1"},P={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},V=t("div",{class:"lg:col-span-2 col-span-1 text-slate-900 text-base dark:text-slate-300 font-medium"}," Owner info-500 ",-1),$={class:"lg:col-span-2 col-span-1"},R={class:"lg:col-span-2 col-span-1"},D={class:"my-6"},E={class:"ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse"};function G(l,s,O,j,I,K){const i=o("CFlatPickr"),c=o("FromGroup"),a=o("Textinput"),r=o("Textarea"),p=o("Repeater"),m=o("Button"),_=o("Card");return A(),C("div",null,[e(_,{title:"Create new invoice"},{default:n(()=>[w,t("div",F,[t("div",T,[B,e(c,{label:"Issued date",name:"d1"},{default:n(()=>[e(i,{modelValue:l.dateDefault,"onUpdate:modelValue":s[0]||(s[0]=d=>l.dateDefault=d),onOnChange:s[1]||(s[1]=d=>l.dateDefault=d),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1}),e(a,{label:"Name",type:"text",placeholder:"Add your name"}),e(a,{label:"Phone",type:"text",placeholder:"Add your phone"}),e(a,{label:"Email",type:"email",placeholder:"Add your email"}),t("div",N,[e(r,{label:"Address",type:"email",placeholder:"address",rows:"2"})])]),t("div",P,[V,e(a,{label:"Name",type:"text",placeholder:"Add your name"}),e(a,{label:"Phone",type:"text",placeholder:"Add your phone"}),t("div",$,[e(a,{label:"Email",type:"email",placeholder:"Add your email"})]),t("div",R,[e(r,{label:"Address",type:"email",placeholder:"address",rows:"2"})])])]),t("div",D,[e(p)]),e(r,{label:"Additional note",type:"text",rows:"2",placeholder:"Note",class:"lg:w-1/2"}),t("div",E,[e(m,{text:"Save",btnClass:"btn-dark"})])]),_:1})])}const ee=v(k,[["render",G]]);export{ee as default};