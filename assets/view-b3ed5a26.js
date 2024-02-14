import{C as R}from"./index-cb5a08aa.js";import{I as S}from"./index-8d30ace7.js";import{B as E}from"./index-c2d6eb9c.js";import{E as F}from"./index-360221be.js";import{D as A}from"./index-976a2577.js";import{C as O,B as H,A as I,a as P,b as V,R as Y}from"./RouteDetail-d06baee9.js";import{B as j}from"./BookDraftRef-086a5656.js";import{M as N}from"./index-b704274e.js";import{_ as z,t as f,g as T,a as _}from"./index-f91482a0.js";import{d as q}from"./dayjs.min-472eb357.js";import{o as v,x as a,bj as h,m as l,n as r,aF as i,as as n,p as m,aT as p}from"./preload-helper-f37a9bec.js";import"./iconify-2baafea4.js";import"./dom-b10fc197.js";import"./focus-management-94a631f4.js";import"./open-closed-75edfb8a.js";import"./use-resolve-button-type-d7bee841.js";import"./use-outside-click-156e41c1.js";import"./index-f32159fc.js";import"./transition-be7c09bc.js";import"./hidden-800255f5.js";import"./micro-task-89dcd6af.js";const G={name:"ReceiveView",components:{Card:R,Icon:S,Button:E,Expansion:F,Dropdown:A,CoverSheet:O,BookDetail:H,AttachedFile:I,BookReference:P,Activity:V,RouteDetail:Y,BookDraftRef:j,Modal:N},data(){return{isOpen:!1,pdfPath:"",urlSarabun:f,item:null,isSuccess:!1,isError:!1,isSigned:!1,pinError:""}},created(){this.fetchData()},computed:{isMobile(){return T().isMobile}},methods:{async pdfHistory(){const{data:t,status:o}=await _("documentStore","PDFHistory",{payload:this.$route.params.id});o==200&&(console.log("data pdf",t.result),this.pdfPath=t.result,this.isOpen=!0)},async fetchData(){console.log("fetchData");const{data:t,status:o}=await _("suggestionStore","showHistory",{payload:this.$route.params.id});o===200&&(this.item=await t.result)},convertDate(t){return t?q(t).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},downloadFileDocument(t){console.log(t)},downloadFile(t){const o=f+t;window.open(o,"_blank")}}},J={key:0,class:"flex items-center gap-3"},K=m("div",null,"กลับไปหน้ารายการ",-1),L={class:"md:text-2xl text-[16px] font-medium my-6"},Q=["src"];function U(t,o,W,X,e,s){const y=i("Icon"),k=i("CoverSheet"),D=i("BookDetail"),b=i("BookDraftRef"),B=i("AttachedFile"),x=i("BookReference"),C=i("Activity"),M=i("RouteDetail"),w=i("Card"),g=i("Modal");return n(),v("div",null,[a(w,null,{default:h(()=>{var c,d,u;return[s.isMobile?r("",!0):(n(),v("div",J,[m("div",{onClick:o[0]||(o[0]=Z=>t.$router.back()),class:"flex items-center text-primary-600 cursor-pointer"},[a(y,{icon:"mdi:chevron-left",class:"text-xl"}),K])])),m("div",L," วันที่ "+p(s.convertDate((c=e.item)==null?void 0:c.document_date))+" "+p((d=e.item)==null?void 0:d.subject)+" พ.ศ. "+p((u=e.item)==null?void 0:u.year),1),a(k,{item:e.item},null,8,["item"]),a(D,{item:e.item},null,8,["item"]),a(b,{item:e.item},null,8,["item"]),s.isMobile?r("",!0):(n(),l(B,{key:1,item:e.item},null,8,["item"])),s.isMobile?r("",!0):(n(),l(x,{key:2,item:e.item},null,8,["item"])),s.isMobile?r("",!0):(n(),l(C,{key:3,item:e.item,"onEvent:onClick":s.pdfHistory},null,8,["item","onEvent:onClick"])),s.isMobile?r("",!0):(n(),l(M,{key:4,item:e.item},null,8,["item"]))]}),_:1}),e.isOpen?(n(),l(g,{key:0,title:"ดูรายละเอียดเอกสาร",labelClass:"btn-outline-dark",sizeClass:"w-3/4",label:"",centered:"",activeModal:e.isOpen,"onEvent:closeModal":o[1]||(o[1]=c=>e.isOpen=!1)},{default:h(()=>[m("div",null,[m("iframe",{class:"w-full h-[1000px] mt-4",src:"data:application/pdf;base64, "+e.pdfPath,frameborder:"0"},null,8,Q)])]),_:1},8,["activeModal"])):r("",!0)])}const De=z(G,[["render",U]]);export{De as default};