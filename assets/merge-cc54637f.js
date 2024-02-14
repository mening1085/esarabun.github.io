import{aA as _,k as B,be as x,aF as r,as as o,o as i,m as V,bj as u,p as t,x as c,F as g,aD as k,ac as E,aT as p,bl as L,b6 as P,n as z}from"./preload-helper-f37a9bec.js";import{M as S}from"./index-b704274e.js";import{B as U}from"./index-c2d6eb9c.js";import{T as $}from"./index-3e8503e7.js";import{I as G}from"./index-8d30ace7.js";import{R as j}from"./index-e163c14d.js";import J from"./checkbox-803151c8.js";import{_ as D}from"./index-f91482a0.js";import{l as F,a as N,n as R,r as A,u as q}from"./tabs-cf3e0d3b.js";const K={name:"ModalOrganizeIn",components:{Checkbox:J,Modal:S,Button:U,Icon:G,TabGroup:F,TabList:N,Tab:R,TabPanels:A,TabPanel:q,Radio:j,TextInput:$},props:["tabIndex","title","isOpen","items","modalId"],setup(l,{emit:n}){const T=_(l.title||""),s=_(l.isOpen||!1),w=_([{title:"บุคคล"}]),M=_(0),h=_(l.tabIndex),y=_([]),m=B(()=>l.items.filter(a=>a.selected));x(()=>l.modalId,a=>{M.value=a||""}),x(()=>l.tabIndex,a=>{h.value=a||""}),x(()=>l.title,a=>{T.value=a||""}),x(()=>l.isOpen,a=>{s.value=a||!1}),x(()=>l.items,a=>{y.value=a}),x(()=>m.value,a=>{b.value=!1});const b=_(!1);return{title:T,isOpen:s,buttons:w,selectedItem:M,user_list:y,selectedTab:h,userItem:m,valid:b,changeTab:a=>{h.value=a},onSubmitModal:async()=>{m.value?n("event:submit",m.value):b.value=!0},closeModal:()=>{n("event:close")}}}},Q={class:"min-h-[200px]"},W={class:"flex"},X={class:"basis-2/3 border-r"},Y=t("div",{class:"basis-1/3"},[t("div",{class:"text-center border-b",style:{"margin-top":"6px"}}," บุคคล ที่เลือก ")],-1),Z={class:"flex"},ee={class:"basis-2/3 border-r py-3"},te={class:"border rounded-lg mr-3 p-2 mt-4"},se={class:"gap-5 h-[400px] px-3 overflow-y-auto"},ne={class:"flex items-center gap-2 mb-1"},oe=["onUpdate:modelValue"],le={class:"shirnk"},ae={class:"shirnk"},ie={class:"font-bold"},de={class:"text-sm text-gray-500"},ce={key:0,class:"basis-1/3 py-3"},re={class:"pl-3"},_e={class:"flex items-center gap-2 border bg-gray-50 p-2 my-3 rounded"},ue={class:"shrink"},me={class:"shrink"},be={class:"text-md ell-1"},ve={class:"text-sm ell-1 text-gray-500"},fe={key:0,class:"text-sm text-red-500"},xe={class:"text-center my-4 flex justify-center w-full"};function pe(l,n,T,s,w,M){const h=r("Tab"),y=r("TabList"),m=r("Icon"),b=r("TabPanel"),I=r("TabPanels"),C=r("TabGroup"),O=r("Button"),a=r("Modal");return o(),i("div",null,[s.isOpen?(o(),V(a,{key:0,title:s.title,label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:"",ref:"modalDialog",activeModal:s.isOpen,"onEvent:closeModal":n[2]||(n[2]=d=>s.closeModal())},{footer:u(()=>[t("div",xe,[c(O,{text:"ยืนยัน",btnClass:"btn-primary w-32 mx-2",onOnClick:n[0]||(n[0]=d=>s.onSubmitModal())}),c(O,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",onOnClick:n[1]||(n[1]=d=>s.closeModal())})])]),default:u(()=>[t("div",Q,[c(C,{selectedIndex:s.selectedTab,onChange:s.changeTab},{default:u(()=>[t("div",W,[t("div",X,[c(y,{class:"flex border-b"},{default:u(()=>[(o(!0),i(g,null,k(s.buttons,(d,e)=>(o(),V(h,{as:"template",key:e,class:"px-3"},{default:u(({selected:v})=>[t("button",{class:E([[v?"text-primary-500 before:w-full border-b-2 pb-1 border-primary-500":"text-slate-500 before:w-0 dark:text-slate-300"],"w-[150px]"])},p(d.title),3)]),_:2},1024))),128))]),_:1})]),Y]),c(I,null,{default:u(()=>[c(b,null,{default:u(()=>[t("div",Z,[t("div",ee,[t("div",te,[t("div",se,[(o(!0),i(g,null,k(s.user_list,(d,e)=>{var v;return o(),i("div",{key:e},[t("div",ne,[L(t("input",{type:"checkbox","onUpdate:modelValue":f=>d.selected=f},null,8,oe),[[P,d.selected]]),t("div",le,[c(m,{icon:"mdi:user-circle",class:"text-2xl text-gray-500"})]),t("div",ae,[t("div",ie,p(d.full_name),1),t("div",de,p((v=d.organization)==null?void 0:v.organization_name),1)])])])}),128))])])]),s.userItem.length>0?(o(),i("div",ce,[(o(!0),i(g,null,k(s.userItem,d=>{var e;return o(),i("div",re,[t("div",_e,[t("div",ue,[c(m,{icon:"mdi:user-circle",class:"text-3xl text-gray-500"})]),t("div",me,[t("div",be,p(d==null?void 0:d.full_name),1),t("div",ve,p((e=d==null?void 0:d.organization)==null?void 0:e.organization_name),1)])])])}),256))])):z("",!0)]),s.valid?(o(),i("div",fe," กรุณาเลือกบุคคล ")):z("",!0)]),_:1})]),_:1})]),_:1},8,["selectedIndex","onChange"])])]),_:1},8,["title","activeModal"])):z("",!0)])}const ot=D(K,[["render",pe]]),he={name:"ModalOrganizeMerge",components:{Modal:S,Button:U,Icon:G,TabGroup:F,TabList:N,Tab:R,TabPanels:A,TabPanel:q,Radio:j,TextInput:$},props:["title","isOpen","itemsIn","itemsOut","modalId"],setup(l,{emit:n}){const T=_(l.title||""),s=_(l.isOpen||!1),w=_([]),M=_([]),h=_(""),y=_(null),m=_(null);_("");const b=B(()=>{const e=l.itemsIn.filter(f=>f.selected),v=l.itemsOut.filter(f=>f.selected);return[...e,...v]}),I=_([{title:"หน่วยงานภายใน"},{title:"หน่วยงานภายนอก"}]);x(()=>l.modalId,e=>{m.value=e||""}),x(()=>l.title,e=>{T.value=e||""}),x(()=>l.itemsIn,e=>{w.value=e}),x(()=>l.itemsOut,e=>{M.value=e}),x(()=>l.isOpen,e=>{s.value=e||!1});const C=()=>{},O=()=>{m.value=null};return{title:T,isOpen:s,tabs:I,selected:y,selectedItem:m,selectedList:b,search:h,listIn:w,listOut:M,onSubmitModal:async()=>{b.value.forEach(e=>{e.name&&(e.type="out"),e.organization_name&&(e.type="in")}),n("event:submit",b.value)},closeModal:()=>{O(),n("event:close")},onSearch:C}}},ye={class:"min-h-[200px]"},ge={class:"flex"},ke={class:"basis-2/3 border-r"},Te=t("div",{class:"basis-1/3"},[t("div",{class:"text-center border-b",style:{"margin-top":"6px"}}," หน่วยงาน/บุคคล ที่เลือก ")],-1),Me={class:"flex"},Ie={class:"basis-2/3 border-r py-3 pr-4"},Oe={class:"flex items-center gap-2 mb-1"},we=["onUpdate:modelValue"],Ce={class:"shirnk"},ze={class:"shirnk"},Ve={class:"font-bold"},Le={class:"basis-1/3 py-3"},Pe={key:0,class:"pl-3"},Be={class:"flex justify-between items-center border bg-gray-100 p-2 my-3 rounded"},Ee={class:"text-sm ell-1"},Se={class:"flex"},Ue={class:"basis-2/3 border-r py-3 pr-4"},$e={class:"flex items-center gap-2 mb-1"},Ge=["onUpdate:modelValue"],je={class:"shirnk"},De={class:"shirnk"},Fe={class:"font-bold"},Ne={class:"text-sm text-gray-500"},Re={class:"basis-1/3 py-3"},Ae={key:0,class:"pl-3"},qe={class:"flex justify-between items-center border bg-gray-100 p-2 my-3 rounded"},He={class:"text-sm ell-1"},Je={class:"text-center my-4 flex justify-center w-full"};function Ke(l,n,T,s,w,M){const h=r("Tab"),y=r("TabList"),m=r("TextInput"),b=r("Icon"),I=r("TabPanel"),C=r("TabPanels"),O=r("TabGroup"),a=r("Button"),d=r("Modal");return o(),i("div",null,[s.isOpen?(o(),V(d,{key:0,title:s.title,label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:"",ref:"modalDialog",activeModal:s.isOpen,"onEvent:closeModal":n[6]||(n[6]=e=>s.closeModal())},{footer:u(()=>[t("div",Je,[c(a,{text:"ยืนยัน",btnClass:"btn-primary w-32 mx-2",onOnClick:n[4]||(n[4]=e=>s.onSubmitModal())}),c(a,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",onOnClick:n[5]||(n[5]=e=>s.closeModal())})])]),default:u(()=>[t("div",ye,[c(O,null,{default:u(()=>[t("div",ge,[t("div",ke,[c(y,{class:"flex border-b"},{default:u(()=>[(o(!0),i(g,null,k(s.tabs,(e,v)=>(o(),V(h,{as:"template",key:v,class:"px-3"},{default:u(({selected:f})=>[t("button",{class:E([[f?"text-primary-500 before:w-full border-b-2 pb-1 border-primary-500":"text-slate-500 before:w-0 dark:text-slate-300"],"w-[150px]"])},p(e.title),3)]),_:2},1024))),128))]),_:1})]),Te]),c(C,null,{default:u(()=>[c(I,null,{default:u(()=>[t("div",Me,[t("div",Ie,[c(m,{type:"text",classInput:"border border-gray-300 w-full mt-3",keyupEnter:"",modelValue:s.search,"onUpdate:modelValue":n[0]||(n[0]=e=>s.search=e),placeholder:"พิมพ์ชื่อพนักงานแล้วกดปุ่ม Enter","onEvent:enter":n[1]||(n[1]=e=>s.onSearch())},null,8,["modelValue"]),(o(!0),i(g,null,k(s.listIn,(e,v)=>(o(),i("div",{class:"text-slate-600 dark:text-slate-400 text-sm font-normal my-2",key:v},[t("div",Oe,[L(t("input",{type:"checkbox","onUpdate:modelValue":f=>e.selected=f},null,8,we),[[P,e.selected]]),t("div",Ce,[c(b,{icon:"mdi:user-circle",class:"text-2xl text-gray-500"})]),t("div",ze,[t("div",Ve,p(e.organization_name),1)])])]))),128))]),t("div",Le,[s.selectedList.length>0?(o(),i("div",Pe,[(o(!0),i(g,null,k(s.selectedList,e=>(o(),i("div",Be,[t("div",Ee,p(e.organization_name??e.name),1)]))),256))])):z("",!0)])])]),_:1}),c(I,null,{default:u(()=>[t("div",Se,[t("div",Ue,[c(m,{type:"text",classInput:"border border-gray-300 w-full mt-3",keyupEnter:"",modelValue:s.search,"onUpdate:modelValue":n[2]||(n[2]=e=>s.search=e),placeholder:"พิมพ์ชื่อพนักงานแล้วกดปุ่ม Enter","onEvent:enter":n[3]||(n[3]=e=>s.onSearch())},null,8,["modelValue"]),(o(!0),i(g,null,k(s.listOut,(e,v)=>{var f;return o(),i("div",{class:"text-slate-600 dark:text-slate-400 text-sm font-normal my-2",key:v},[t("div",$e,[L(t("input",{type:"checkbox","onUpdate:modelValue":H=>e.selected=H},null,8,Ge),[[P,e.selected]]),t("div",je,[c(b,{icon:"mdi:user-circle",class:"text-2xl text-gray-500"})]),t("div",De,[t("div",Fe,p(e.name),1),t("div",Ne,p((f=e.organization)==null?void 0:f.organization_name),1)])])])}),128))]),t("div",Re,[s.selectedList.length>0?(o(),i("div",Ae,[(o(!0),i(g,null,k(s.selectedList,e=>(o(),i("div",qe,[t("div",He,p(e.organization_name??e.name),1)]))),256))])):z("",!0)])])]),_:1})]),_:1})]),_:1})])]),_:1},8,["title","activeModal"])):z("",!0)])}const lt=D(he,[["render",Ke]]);export{lt as M,ot as a};