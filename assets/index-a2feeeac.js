import{C as k}from"./index-263882d1.js";import{P as w,B as N}from"./index-a392cd30.js";import{B as E}from"./index-441935dc.js";import{I as V}from"./index-72ee420c.js";import{aF as v,as as t,o as a,p as i,F as c,aD as d,ac as f,aT as S,x as e,bo as x,bj as o,m as h}from"./preload-helper-9e0646ca.js";import{_ as C}from"./index-e058a960.js";import"./iconify-4e42c13d.js";const D={components:{Button:E,Icon:V},data(){return{steps:[{id:1},{id:2},{id:3}],stepNumber:0}},methods:{next(){let m=this.steps.length;this.stepNumber===m-1?this.stepNumber=m-1:this.stepNumber++},prev(){this.stepNumber--}}},P={class:"mx-auto flex z-[5] items-center relative justify-center"},$={key:0},z={key:1,class:"text-3xl"},F=i("div",{class:"text-sm mt-[10px] leading-[16px] font-medium capitalize text-slate-500-500 text-center"},null,-1),j={class:"flex justify-between mt-10"};function I(m,b,y,B,u,_){const l=v("Icon"),n=v("Button");return t(),a("div",null,[i("div",P,[(t(!0),a(c,null,d(u.steps,(s,p)=>(t(),a("div",{class:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none",key:p},[i("div",{class:f([`   ${u.stepNumber>=p?"bg-blue-500 text-white ring-primary-500 ring-offset-2":"bg-white ring-primary-500 ring-opacity-70  text-primary-500 text-opacity-70"}`,"icon-box h-12 w-12 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 text-lg font-medium"])},[u.stepNumber<=p?(t(),a("span",$,S(p+1),1)):(t(),a("span",z,[e(l,{icon:"bx:check-double"})]))],2),i("div",{class:f(["absolute top-1/2 h-[2px] w-full",u.stepNumber>=p?"bg-primary-500":"bg-[#E0EAFF]"])},null,2),F]))),128))]),i("div",j,[e(n,{onClick:b[0]||(b[0]=x(s=>_.prev(),["prevent"])),text:"prev",isDisabled:this.stepNumber===0},null,8,["isDisabled"]),e(n,{onClick:b[1]||(b[1]=x(s=>_.next(),["prevent"])),text:"next",isDisabled:this.stepNumber===this.steps.length-1},null,8,["isDisabled"])])])}const L=C(D,[["render",I]]),H={components:{ProgressBar:w,Card:k,Bar:N,Step:L},data(){return{progressDefault:[{value:50},{value:70},{value:80},{value:90},{value:100}],progressBackground:[{value:50,barColor:"bg-primary-500"},{value:70,barColor:"bg-success-500"},{value:80,barColor:"bg-info-500"},{value:90,barColor:"bg-warning-500"},{value:100,barColor:"bg-danger-500"}],progressHeight:[{value:50,title:"Progress sm",barColor:"bg-primary-500",height:"h-1"},{value:70,title:"Progress md",barColor:"bg-success-500",height:"h-[6px]"},{value:80,title:"Progress lg",barColor:"bg-warning-500",height:"h-[10px]"},{value:100,title:"Progress xl",barColor:"bg-danger-500",height:"h-4"}]}}},A={class:"grid xl:grid-cols-2 grid-cols-1 gap-5"},M={class:"grid grid-cols-1 gap-10"},T={class:"grid grid-cols-1 gap-10"},q={class:"grid grid-cols-1 gap-10"},G={class:"grid grid-cols-1 gap-10"},J={class:"grid grid-cols-1 gap-10"},K={class:"grid grid-cols-1 gap-10"},O={class:"grid grid-cols-1 gap-10"};function Q(m,b,y,B,u,_){const l=v("ProgressBar"),n=v("Card"),s=v("Bar"),p=v("Step");return t(),a("div",A,[e(n,{title:"Default Examples"},{default:o(()=>[i("div",M,[(t(!0),a(c,null,d(u.progressDefault,(r,g)=>(t(),h(l,{value:r.value,key:g},null,8,["value"]))),128))])]),_:1}),e(n,{title:"Background Examples"},{default:o(()=>[i("div",T,[(t(!0),a(c,null,d(u.progressBackground,(r,g)=>(t(),h(l,{value:r.value,barColor:r.barColor,key:g},null,8,["value","barColor"]))),128))])]),_:1}),e(n,{title:"Height Examples"},{default:o(()=>[i("div",q,[(t(!0),a(c,null,d(u.progressHeight,(r,g)=>(t(),h(l,{value:r.value,barColor:r.barColor,key:g,height:r.height,title:r.title},null,8,["value","barColor","height","title"]))),128))])]),_:1}),e(n,{title:"Striped Examples"},{default:o(()=>[i("div",G,[(t(!0),a(c,null,d(u.progressBackground,(r,g)=>(t(),h(l,{value:r.value,barColor:r.barColor,key:g,striped:"",height:"h-3"},null,8,["value","barColor"]))),128))])]),_:1}),e(n,{title:"Label Examples"},{default:o(()=>[i("div",J,[(t(!0),a(c,null,d(u.progressBackground,(r,g)=>(t(),h(l,{value:r.value,barColor:r.barColor,key:g,showValue:"",height:"h-3"},null,8,["value","barColor"]))),128)),e(l,{height:"h-3"},{default:o(()=>[e(s,{value:20,barColor:"bg-red-500",showValue:""}),e(s,{value:40,barColor:"bg-blue-500",showValue:""})]),_:1})])]),_:1}),e(n,{title:"Multiple Bar Examples"},{default:o(()=>[i("div",K,[e(l,{height:"h-3"},{default:o(()=>[e(s,{value:10,barColor:"bg-primary-500"}),e(s,{value:20,barColor:"bg-success-500"}),e(s,{value:20,barColor:"bg-danger-500"})]),_:1}),e(l,{height:"h-3"},{default:o(()=>[e(s,{value:12,barColor:"bg-primary-500",showValue:""}),e(s,{value:25,barColor:"bg-success-500",showValue:""}),e(s,{value:25,barColor:"bg-danger-500",showValue:""})]),_:1}),e(l,{height:"h-3"},{default:o(()=>[e(s,{value:15,barColor:"bg-primary-500",striped:""}),e(s,{value:30,barColor:"bg-success-500",striped:""}),e(s,{value:30,barColor:"bg-danger-500",striped:""})]),_:1}),e(l,{height:"h-3"},{default:o(()=>[e(s,{value:18,barColor:"bg-primary-500",showValue:"",striped:""}),e(s,{value:33,barColor:"bg-success-500",showValue:"",striped:""}),e(s,{value:33,barColor:"bg-danger-500",showValue:"",striped:""})]),_:1})])]),_:1}),e(n,{title:"Striped Animation Examples"},{default:o(()=>[i("div",O,[(t(!0),a(c,null,d(u.progressBackground,(r,g)=>(t(),h(l,{value:r.value,barColor:r.barColor,key:g,striped:"",height:"h-3",animate:""},null,8,["value","barColor"]))),128))])]),_:1}),e(n,{title:"Step Progress Bar Examples"},{default:o(()=>[e(p)]),_:1})])}const re=C(H,[["render",Q]]);export{re as default};
