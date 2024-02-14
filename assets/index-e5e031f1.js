import{C as O}from"./index-263882d1.js";import{S as V}from"./index-7e9b1d19.js";import{_ as a}from"./index-e058a960.js";import{aF as o,as as p,o as r,x as e,p as i,aT as $,bj as c}from"./preload-helper-9e0646ca.js";import{V as b,C as h}from"./VueSelect-4c8519b3.js";import{I as L}from"./index-72ee420c.js";import"./iconify-4e42c13d.js";const C={components:{Select:V},data(){return{selected:null,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}}},B={class:"space-y-3"},I={class:"text-base"},z=i("span",{class:"text-slate-500 dark:text-slate-300 inline-block mr-3"},"Selected value:",-1),P={class:"text-slate-900 dark:text-slate-300 font-semibold"};function M(u,s,_,d,t,m){const l=o("Select");return p(),r("div",B,[e(l,{label:"Label",options:t.options,modelValue:t.selected,"onUpdate:modelValue":s[0]||(s[0]=n=>t.selected=n)},null,8,["options","modelValue"]),i("div",I,[z,i("span",P,$(t.selected),1)])])}const y=a(C,[["render",M]]),D={components:{VueSelect:b,vSelect:h},data(){return{selected2:[],books:[{title:"Database",icon:"heroicons-outline:database"},{title:"Server",icon:"heroicons-outline:server"},{title:"Finger Print",icon:"heroicons-outline:finger-print"}]}}};function F(u,s,_,d,t,m){const l=o("vSelect"),n=o("VueSelect");return p(),r("div",null,[e(n,{label:"Label"},{default:c(()=>[e(l,{modelValue:t.selected2,"onUpdate:modelValue":s[0]||(s[0]=S=>t.selected2=S),multiple:"",placeholder:"Choose up to 2 options",label:"title",options:t.books,selectable:()=>t.selected2.length<2},null,8,["modelValue","options","selectable"])]),_:1})])}const U=a(D,[["render",F]]),w={components:{VueSelect:b},data(){return{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}}};function N(u,s,_,d,t,m){const l=o("VueSelect");return p(),r("div",null,[e(l,{options:t.options,label:"Label",multiple:""},null,8,["options"])])}const T=a(w,[["render",N]]),j={components:{VueSelect:b,vSelect:h},data(){return{}}};function A(u,s,_,d,t,m){const l=o("vSelect"),n=o("VueSelect");return p(),r("div",null,[e(n,{label:"Label"},{default:c(()=>[e(l,{multiple:"",taggable:"","push-tags":"",placeholder:"Add Options",label:"title"})]),_:1})])}const E=a(j,[["render",A]]),q={components:{VueSelect:b,vSelect:h,Icon:L},data(){return{books:[{title:"Database",icon:"heroicons-outline:database"},{title:"Server",icon:"heroicons-outline:server"},{title:"Finger Print",icon:"heroicons-outline:finger-print"}]}}},G={class:"flex items-center"},H={class:"inline-block mr-2"};function J(u,s,_,d,t,m){const l=o("Icon"),n=o("vSelect"),S=o("VueSelect");return p(),r("div",null,[e(S,{label:"Label"},{default:c(()=>[e(n,{options:t.books,label:"title",multiple:""},{option:c(({title:f,icon:v})=>[i("span",G,[i("span",H,[e(l,{icon:v},null,8,["icon"])]),i("span",null,$(f),1)])]),_:1},8,["options"])]),_:1})])}const K=a(q,[["render",J]]),Q={components:{Select:V},data(){return{selected:null,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}}},R={class:"space-y-3"},W={class:"text-base"},X=i("span",{class:"text-slate-500 dark:text-slate-300 inline-block mr-3"},"Selected value:",-1),Y={class:"text-slate-900 dark:text-slate-300 font-semibold"};function Z(u,s,_,d,t,m){const l=o("Select");return p(),r("div",R,[e(l,{label:"Label",options:t.options,modelValue:t.selected,"onUpdate:modelValue":s[0]||(s[0]=n=>t.selected=n),size:"5"},null,8,["options","modelValue"]),i("div",W,[X,i("span",Y,$(t.selected),1)])])}const ee=a(Q,[["render",Z]]),te={components:{VueSelect:b},data(){return{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}}};function oe(u,s,_,d,t,m){const l=o("VueSelect");return p(),r("div",null,[e(l,{options:t.options,label:"Label"},null,8,["options"])])}const ne=a(te,[["render",oe]]),le={components:{Card:O,Basic:y,Size:ee,Vue_Select:ne,MultipuleSelect:T,SelctIcon:K,Push:E,Limited:U}},se={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},ce={class:"xl:col-span-2"};function ie(u,s,_,d,t,m){const l=o("Basic"),n=o("Card"),S=o("Size"),f=o("Vue_Select"),v=o("MultipuleSelect"),x=o("SelctIcon"),g=o("Push"),k=o("Limited");return p(),r("div",se,[e(n,{title:"Basic Select"},{default:c(()=>[e(l)]),_:1}),e(n,{title:"Size  Select"},{default:c(()=>[e(S)]),_:1}),e(n,{title:"Vue-Select Basic"},{default:c(()=>[e(f)]),_:1}),e(n,{title:"Vue-Select  Multipule"},{default:c(()=>[e(v)]),_:1}),e(n,{title:"Vue-Select with Icon"},{default:c(()=>[e(x)]),_:1}),e(n,{title:"vue-select pushTags"},{default:c(()=>[e(g)]),_:1}),i("div",ce,[e(n,{title:"Limited Selections"},{default:c(()=>[e(k)]),_:1})])])}const Se=a(le,[["render",ie]]);export{Se as default};
