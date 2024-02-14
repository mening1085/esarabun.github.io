import{I as h}from"./index-72ee420c.js";import{B as v}from"./index-441935dc.js";import{E as g}from"./index-1c6333b5.js";import{d as _}from"./dayjs.min-72c81edc.js";import{_ as f,g as y,t as C}from"./index-e058a960.js";import{aF as c,as as o,m as k,bj as B,p as e,o as r,aD as M,x as n,aT as l,F as I}from"./preload-helper-9e0646ca.js";const w={name:"AttachedFile",props:{item:{type:Object,default:()=>{}},activeTab:{type:Boolean,default:!1}},components:{Icon:h,Button:v,Expansion:g},computed:{isMobile(){return y().isMobile}},data(){return{urlSarabun:C}},methods:{convertDate(s){return s?_(s).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},convertDateTime(s){return s?_(s).locale("th").add(543,"year").format("DD MMM YYYY HH:mm"):"-"}}},D={class:"list list-odd p-4"},T={class:"flex flex-wrap md:flex-nowrap gap-5 py-3 px-3 md:px-0"},Y=e("div",{class:"basis-full md:basis-1/4 text-start md:text-end font-bold"}," เอกสารแนบ ",-1),A={class:"basis-full md:basis-3/4 pr-3"},S={class:"basis-full md:basis-3/4 border rounded bg-gray-50 px-3 py-2"},E={class:"flex justify-between items-center"},F={class:"shrink w-[20px]"},j={class:"basis-full pl-4"},H={class:"text-md ell-1"},N={class:"text-sm text-gray-400 flex items-center mt-1"},V={class:"basis-1/4"},z={class:"basis-3/4"},K={class:"basis-full md:basis-1/4 flex gap-3"},L=["href"],O=["onClick"],q=["href"];function G(s,J,d,P,b,a){const p=c("Icon"),i=c("Button"),x=c("Expansion");return o(),k(x,{title:"เอกสารแนบประทับเลขรับ",activeItem:d.activeTab,parentClass:"space-y-5 mb-6 "+(a.isMobile?"-mx-6":""),tabBgColorActive:a.isMobile?"bg-gray-100":"bg-blue-700",tabTxtColorActive:a.isMobile?"text-black":"text-white",tabBgColorInactive:a.isMobile?"bg-gray-100":"bg-gray-300",tabTxtColorInactive:(a.isMobile,"text-black")},{default:B(()=>{var m;return[e("div",D,[e("div",T,[Y,e("div",A,[(o(!0),r(I,null,M((m=d.item)==null?void 0:m.document_stamps,(t,u)=>(o(),r("div",{class:"flex flex-wrap items-center gap-3 mb-3",key:u},[e("div",S,[e("div",E,[e("div",F,[n(p,{icon:"ant-design:file-pdf-filled",class:"text-red-500 text-2xl"})]),e("div",j,[e("div",H,l(t==null?void 0:t.file_name),1),e("div",N,[e("div",V,l(t==null?void 0:t.file_size)+" KB",1),e("div",z," วันที่นำเข้า : "+l(a.convertDate(t==null?void 0:t.created_at)),1)])])])]),e("div",K,[a.isMobile?(o(),r("div",{key:1,onClick:Q=>s.$router.push("/app/issue/order/attachment-preview?link="+(t==null?void 0:t.file_path))},[n(i,{text:"แสดงตัวอย่าง",btnClass:"btn-primary basis-1/2"})],8,O)):(o(),r("a",{key:0,href:b.urlSarabun+t.file_path,target:"_blank"},[n(i,{text:"แสดงตัวอย่าง",btnClass:"btn-primary basis-1/2"})],8,L)),e("a",{href:b.urlSarabun+t.file_path,target:"_blank",download:""},[n(i,{text:"ดาวน์โหลด",btnClass:"btn-primary  basis-1/2"})],8,q)])]))),128))])])])]}),_:1},8,["activeItem","parentClass","tabBgColorActive","tabTxtColorActive","tabBgColorInactive","tabTxtColorInactive"])}const tt=f(w,[["render",G]]);export{tt as A};
