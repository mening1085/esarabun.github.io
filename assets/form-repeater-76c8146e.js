import{u as h,b as f}from"./vee-validate.esm-0c282d04.js";import{B as c}from"./index-441935dc.js";import{C as _}from"./index-263882d1.js";import{T as l}from"./index-31d1a8ca.js";import{I as x}from"./index-72ee420c.js";import{o as r,x as s,bj as g,a$ as e,as as i,p as t,F as k,aD as v}from"./preload-helper-9e0646ca.js";import"./index-e058a960.js";import"./vue-cleave.min-9e1201c2.js";import"./iconify-4e42c13d.js";const y={class:"border-b px-4 border-slate-100 dark:border-slate-700 pt-4 pb-3 flex justify-between items-center"},C=t("h6",{class:"card-title mb-0"},"Repeating Forms",-1),F={class:"p-6"},w={class:"flex justify-between items-end space-x-5"},N={class:"flex-none relative"},$=["onClick"],B={class:"ltr:text-right rtl:text-left"},z={__name:"form-repeater",setup(j){const{handleSubmit:u}=h({initialValues:{links:["https://github.com/logaretm"]}}),{remove:p,push:b,fields:m}=f("links"),d=u(()=>{});return(S,a)=>(i(),r("div",null,[s(e(_),{bodyClass:"p-0"},{default:g(()=>[t("header",y,[C,t("div",null,[s(e(c),{text:"Add new",icon:"heroicons-outline:plus",btnClass:"btn-dark",onClick:a[0]||(a[0]=n=>e(b)(""))})])]),t("div",F,[t("form",{onSubmit:a[1]||(a[1]=(...n)=>e(d)&&e(d)(...n)),novalidate:""},[(i(!0),r(k,null,v(e(m),(n,o)=>(i(),r("div",{key:n.key,class:"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"},[s(e(l),{label:"First Name",type:"text",name:`name[${o}]`,placeholder:"First Name"},null,8,["name"]),s(e(l),{label:"last Name",type:"text",name:`name[${o}]`,placeholder:"Last Name"},null,8,["name"]),t("div",w,[s(e(l),{label:"Phone",type:"text",name:`name[${o}]`,placeholder:"Phone",class:"flex-1"},null,8,["name"]),t("div",N,[t("button",{type:"button",class:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",onClick:D=>e(p)(o)},[s(e(x),{icon:"heroicons-outline:trash"})],8,$)])])]))),128)),t("div",B,[s(e(c),{text:"Submit",btnClass:"btn-dark",isDisabled:e(m).length===0},null,8,["isDisabled"])])],32)])]),_:1})]))}};export{z as default};
