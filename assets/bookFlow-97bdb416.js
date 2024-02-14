import{I as N}from"./index-72ee420c.js";import{d as O}from"./dayjs.min-72c81edc.js";import{_ as B}from"./index-e058a960.js";import{aF as j,as as o,o as s,p as t,m as M,w as H,aT as l,F as T,aD as V,x as w,n as c}from"./preload-helper-9e0646ca.js";const R={name:"itemOrder",components:{Icon:N},props:{item:{type:Object,default:()=>{}}},data(){return{isOpen:!1}},methods:{convertDate(n){return O(n).locale("th").add(543,"year").format("DD/MM/YYYY")},convertDateTime(n){return O(n).locale("th").add(543,"year").format("DD MMM YYYY HH:mm")},getRoleName(n){let r=[];return console.log(n),n.forEach((e,F)=>{var i;r.push((i=e.sarabun_roles)==null?void 0:i.name)}),r.join("/")}}},L={class:"font-medium text-[16px] text-black-500 flex items-center"},S={class:"text-[10px] text-gray-500"},q={key:0,class:"pl-6"},z={class:"text-[10px]"};function A(n,r,e,F,i,D){var Y,a,_,m,x,u,h,v,y,f,b,k,g;const d=j("Icon");return o(),s("div",null,[t("div",null,[t("div",{class:"flex justify-between",onClick:r[0]||(r[0]=p=>i.isOpen=!i.isOpen)},[t("div",L,[((a=(Y=e.item)==null?void 0:Y.document_flow_order)==null?void 0:a.document_flow_order_action.length)<=0?(o(),M(d,{key:0,icon:"carbon:dot-mark",class:"text-[14px] text-gray-500 mr-1"})):(o(),M(d,{key:1,icon:i.isOpen?"mdi-light:minus-box":"mdi-light:plus-box",class:"text-[22px] text-gray-500 mr-1"},null,8,["icon"])),H(" "+l((x=(m=(_=e.item)==null?void 0:_.document_flow_order)==null?void 0:m.sub_menu)==null?void 0:x.name)+" - "+l(((h=(u=e.item)==null?void 0:u.document_flow_order)==null?void 0:h.document_flow_order_roles.length)>0?D.getRoleName((y=(v=e.item)==null?void 0:v.document_flow_order)==null?void 0:y.document_flow_order_roles):""),1)]),t("div",S,l((f=e.item)!=null&&f.completed_at?D.convertDateTime((b=e.item)==null?void 0:b.completed_at):""),1)]),i.isOpen?(o(),s("div",q,[(o(!0),s(T,null,V((g=(k=e.item)==null?void 0:k.document_flow_order)==null?void 0:g.document_flow_order_action,(p,I)=>(o(),s("div",{class:"flex items-center text-gray-400 pl-3",key:I},[w(d,{icon:"carbon:dot-mark",class:"text-[14px] mr-1"}),t("div",z,l(p.action_name),1)]))),128))])):c("",!0)])])}const G=B(R,[["render",A]]),J={name:"itemOrder",components:{Icon:N,bookFlowItem:G},props:{item:{type:Object,default:()=>{}}},methods:{convertDate(n){return O(n).locale("th").add(543,"year").format("DD/MM/YYYY")}}},K={key:0},P={class:"flex gap-3 mb-2"},Q={class:"shrink-0 flex self-center gap-1"},U={class:"flex space-x-1"},W={class:"shrink"},X={key:0},Z={key:1},$={key:2},ee={class:"space-y-1"},te={key:0,class:"bg-yellow-500 text-center rounded text-white px-1 text-[10px]"},oe={key:1,class:"bg-orange-500 text-center rounded text-white px-1 py-1"},se={key:2,class:"bg-red-500 text-center rounded text-white px-1 py-1"},ne={key:3,class:"bg-white border-2 border-blue-700 text-center rounded text-black px-1 text-[10px]"},ce={key:4,class:"bg-white border-2 border-red-500 text-center rounded text-black px-1 text-[10px]"},ie={key:5,class:"bg-white border-2 border-yellow-500 text-center rounded text-black px-1 text-[10px]"},de={class:"flex-1 text-[10px]"},le={class:"flex items-center mb-1"},re=t("div",{class:"shrink w-[60px] text-gray-500"},"เลขที่หนังสือ",-1),ae={class:""},_e={class:"flex items-center mb-1"},me=t("div",{class:"shrink w-[60px] text-gray-500"},"ลงวันที่",-1),xe={class:"flex-1"},ue={class:"flex"},he=t("div",{class:"shrink w-[60px] text-gray-500"},"เรื่อง",-1),ve={class:"flex-1"},ye=t("div",{class:"bg-gray-200 px-1 py-2 -mx-3 text-[10px]"}," รายละเอียดเส้นทางการรับส่งหนังสือ ",-1),fe={class:"list list-odd -mx-3"},be=t("div",null,null,-1),ke={key:1,class:"basis-3/4 border rounded bg-gray-50 px-3 py-2 text-center text-gray-400 text-[12px]"};function ge(n,r,e,F,i,D){var a,_,m,x,u,h,v,y,f,b,k,g,p,I;const d=j("Icon"),Y=j("bookFlowItem");return o(),s("div",null,[e.item?(o(),s("div",K,[t("div",P,[t("div",Q,[t("div",U,[t("div",W,[((a=e.item)==null?void 0:a.document_type)=="เอกสารทั่วไป (ส่งฉบับจริง)"?(o(),s("div",X,[w(d,{icon:"emojione-monotone:letter-p",class:"handle text-[20px] text-yellow-500"})])):c("",!0),((_=e.item)==null?void 0:_.document_type)=="เอกสารอิเล็กทรอนิกส์"?(o(),s("div",Z,[w(d,{icon:"emojione-monotone:letter-e",class:"handle text-[20px] text-blue-700"})])):c("",!0),((m=e.item)==null?void 0:m.document_type)=="หนังสือรับจากอีเมล"?(o(),s("div",$,[w(d,{icon:"mdi:email",class:"handle text-[20px] text-orange-500"})])):c("",!0)]),t("div",ee,[((x=e.item)==null?void 0:x.urgency_level)=="ด่วน"?(o(),s("div",te," ด่วน ")):c("",!0),((u=e.item)==null?void 0:u.urgency_level)=="ด่วนมาก"?(o(),s("div",oe," ด่วนมาก ")):c("",!0),((h=e.item)==null?void 0:h.urgency_level)=="ด่วนที่สุด"?(o(),s("div",se," ด่วนที่สุด ")):c("",!0),((v=e.item)==null?void 0:v.secrecy_level)=="ลับ"?(o(),s("div",ne," ลับ ")):c("",!0),((y=e.item)==null?void 0:y.secrecy_level)=="ลับมาก"?(o(),s("div",ce," ลับมาก ")):c("",!0),((f=e.item)==null?void 0:f.secrecy_level)=="ลับที่สุด"?(o(),s("div",ie," ลับที่สุด ")):c("",!0)])])]),t("div",de,[t("div",le,[re,t("div",ae,l((b=e.item)==null?void 0:b.document_number),1)]),t("div",_e,[me,t("div",xe,l((k=e.item)!=null&&k.document_date?"วันที่ "+D.convertDate((g=e.item)==null?void 0:g.document_date):"-"),1)]),t("div",ue,[he,t("div",ve,[t("div",null,l((p=e.item)==null?void 0:p.subject),1)])])])]),ye,t("div",fe,[be,(o(!0),s(T,null,V((I=e.item)==null?void 0:I.document_flow_history,(C,E)=>(o(),s("div",{class:"p-3",key:E},[w(Y,{item:C},null,8,["item"])]))),128))])])):(o(),s("div",ke," ไม่มีข้อมูล "))])}const Ie=B(J,[["render",ge]]);export{Ie as B};