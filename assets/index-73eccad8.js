import{M as L}from"./index-b704274e.js";import{B as R}from"./index-c2d6eb9c.js";import{T as j}from"./index-3e8503e7.js";import{I as D}from"./index-8d30ace7.js";import{R as F}from"./index-e163c14d.js";import{_ as G}from"./index-f91482a0.js";import{l as N,a as U,n as A,r as q,u as H}from"./tabs-cf3e0d3b.js";import{aA as r,be as v,aF as d,as as _,o as p,m as C,bj as b,p as n,x as u,F as V,aD as h,ac as J,aT as B,n as E}from"./preload-helper-f37a9bec.js";const K={name:"ModalOrganizeIn",components:{Modal:L,Button:R,Icon:D,TabGroup:N,TabList:U,Tab:A,TabPanels:q,TabPanel:H,Radio:F,TextInput:j},props:["title","isOpen","items","modalId"],setup(o,{emit:t}){const T=r(o.title||""),l=r(o.isOpen||!1),i=r(o.items||[]),x=r(""),m=r(o.items||[]),f=r(null),s=r(null),M=r(""),g=r([{title:"หน่วยงานภายใน"}]);v(()=>o.modalId,e=>{s.value=e||""}),v(()=>o.title,e=>{T.value=e||""}),v(()=>o.items,e=>{m.value=e||""}),v(()=>m.value,e=>{i.value=e||"",m.value=e||""}),v(()=>o.isOpen,e=>{l.value=e||!1}),v(()=>x.value,e=>{e==""&&(i.value=m.value)}),v(()=>f.value,e=>{e&&(M.value="",s.value=i.value.find(c=>c.id==e))});const I=()=>{i.value=m.value;const e=i.value.filter(c=>c.organization_name.includes(x.value));i.value=e},k=()=>{f.value=null,s.value=null};return{title:T,isOpen:l,items:i,tabs:g,selected:f,selectedItem:s,search:x,onSubmitModal:async()=>{var e;t("event:submit",{id:s.value.id,name:s.value.organization_name,lv1_name:((e=s.value)==null?void 0:e.level1_name)??null})},closeModal:()=>{console.log("closeModal"),k(),t("event:close")},onSearch:I}}},Q={class:"min-h-[200px]"},W={class:"flex"},X={class:"basis-2/3 border-r"},Y=n("div",{class:"basis-1/3"},[n("div",{class:"text-center border-b",style:{"margin-top":"6px"}}," หน่วยงาน/บุคคล ที่เลือก ")],-1),Z={class:"flex"},$={class:"basis-2/3 border-r py-3 pr-4"},ee={class:"basis-1/3 py-3"},le={key:0,class:"pl-3"},ae={class:"flex justify-between items-center border bg-gray-100 p-2 my-3 rounded"},te={class:"text-sm ell-1"},ne={class:"text-center my-4 flex justify-center w-full"};function oe(o,t,T,l,i,x){const m=d("Tab"),f=d("TabList"),s=d("TextInput"),M=d("Radio"),g=d("TabPanel"),I=d("TabPanels"),k=d("TabGroup"),O=d("Button"),w=d("Modal");return _(),p("div",null,[l.isOpen?(_(),C(w,{key:0,title:l.title,label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:"",ref:"modalDialog",activeModal:l.isOpen,"onEvent:closeModal":t[5]||(t[5]=e=>l.closeModal())},{footer:b(()=>[n("div",ne,[u(O,{text:"ยืนยัน",btnClass:"btn-primary w-32 mx-2",onOnClick:t[3]||(t[3]=e=>l.onSubmitModal())}),u(O,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",onOnClick:t[4]||(t[4]=e=>l.closeModal())})])]),default:b(()=>[n("div",Q,[u(k,null,{default:b(()=>[n("div",W,[n("div",X,[u(f,{class:"flex border-b"},{default:b(()=>[(_(!0),p(V,null,h(l.tabs,(e,c)=>(_(),C(m,{as:"template",key:c,class:"px-3"},{default:b(({selected:y})=>[n("button",{class:J([[y?"text-primary-500 before:w-full border-b-2 pb-1 border-primary-500":"text-slate-500 before:w-0 dark:text-slate-300"],"w-[150px]"])},B(e.title),3)]),_:2},1024))),128))]),_:1})]),Y]),u(I,null,{default:b(()=>[u(g,null,{default:b(()=>{var e,c,y,z;return[n("div",Z,[n("div",$,[u(s,{type:"text",classInput:"border border-gray-300 w-full mt-3",keyupEnter:"",modelValue:l.search,"onUpdate:modelValue":t[0]||(t[0]=a=>l.search=a),placeholder:"พิมพ์ชื่อพนักงานแล้วกดปุ่ม Enter","onEvent:enter":t[1]||(t[1]=a=>l.onSearch())},null,8,["modelValue"]),(_(!0),p(V,null,h(l.items,(a,P)=>(_(),p("div",{class:"text-slate-600 dark:text-slate-400 text-sm font-normal my-2",key:P},[u(M,{label:(a==null?void 0:a.level1_name)==null?a==null?void 0:a.organization_name:(a==null?void 0:a.organization_name)+" ("+(a==null?void 0:a.level1_name)+")",modelValue:l.selected,"onUpdate:modelValue":t[2]||(t[2]=S=>l.selected=S),value:a.id},null,8,["label","modelValue","value"])]))),128))]),n("div",ee,[l.selectedItem?(_(),p("div",le,[n("div",ae,[n("div",te,B(((e=l.selectedItem)==null?void 0:e.level1_name)==null?(c=l.selectedItem)==null?void 0:c.organization_name:((y=l.selectedItem)==null?void 0:y.organization_name)+" ("+((z=l.selectedItem)==null?void 0:z.level1_name)+")"),1)])])):E("",!0)])])]}),_:1})]),_:1})]),_:1})])]),_:1},8,["title","activeModal"])):E("",!0)])}const _e=G(K,[["render",oe]]);export{_e as M};