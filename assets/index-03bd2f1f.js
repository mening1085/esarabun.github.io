import{C as x}from"./index-cb5a08aa.js";import{I as f}from"./index-8d30ace7.js";import{_ as b,p as h,c as l}from"./index-f91482a0.js";import{o as t,F as c,aD as p,aF as d,as as e,p as s,aT as i,m as y,bj as v,x as m}from"./preload-helper-f37a9bec.js";import"./iconify-2baafea4.js";const g={name:"LockScreenMobile",components:{Card:x,Icon:f},data(){return{urlMeeting:h,items:[{system:"ระบบสารบรรณอิเล็กทรอนิกส์",externalLink:!1,menus:[{title:"รอสั่งการ",link:"/app/issue/order"},{title:"รอลงนาม",link:"/app/issue/signed"},{title:"หนังสือเวียน",link:"/app/central/rotate-book"}]},{system:"ระบบประชุมอิเล็กทรอนิกส์",externalLink:!0,menus:[{title:"รออนุมัติ",link:`/app/pending-list?token=${l().token}`},{title:"รอตอบรับคำเชิญ",link:`/app/invitation-list?token=${l().token}`}]}]}}},L={class:"text-[16px] px-3 pt-3 pb-2 text-black-500"},w={class:"flex items-center"},B={class:"text-[20px]"},C=["href"],I={class:"flex items-center"},$={class:"text-[20px]"};function F(M,S,D,N,r,V){const a=d("Icon"),k=d("router-link");return e(),t("div",null,[(e(!0),t(c,null,p(r.items,(n,_)=>(e(),t("div",{class:"mb-4 border rounded-md shadow shadow-gray-400 pb-3",key:_},[s("div",L,i(n.system),1),(e(!0),t(c,null,p(n.menus,(o,u)=>(e(),t("div",{class:"flex pl-6 border-b py-2 text-black-500",key:u},[n.externalLink?(e(),t("a",{key:1,href:r.urlMeeting+o.link},[s("div",I,[m(a,{icon:"material-symbols:circle-outline",class:"mr-2 text-[10px]"}),s("div",$,i(o.title),1)])],8,C)):(e(),y(k,{key:0,class:"w-full",to:o.link},{default:v(()=>[s("div",w,[m(a,{icon:"material-symbols:circle-outline",class:"mr-2 text-[10px]"}),s("div",B,i(o.title),1)])]),_:2},1032,["to"]))]))),128))]))),128))])}const A=b(g,[["render",F]]);export{A as default};