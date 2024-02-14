import{C as A}from"./index-263882d1.js";import{I as F}from"./index-72ee420c.js";import{B as j}from"./index-441935dc.js";import{E as O}from"./index-1c6333b5.js";import{D as P}from"./index-090a8953.js";import{C as V,B as I,A as N,a as T,b as Y,R as H}from"./RouteDetail-b3469ae3.js";import{_ as z,t as b,a as p,g as G,G as q}from"./index-e058a960.js";import{M as J}from"./index-7dc8252b.js";import{M as K}from"./index-7107aa24.js";import{M as L}from"./index-1b218db3.js";import{d as Q}from"./dayjs.min-72c81edc.js";import{M as U}from"./index-2a7f4259.js";import{T as W}from"./ThreeForm-c76850ac.js";import{o as g,x as i,bj as d,m,n as c,aF as n,as as a,p as s,aT as v,w as X}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./index-cc7a2b4b.js";import"./Modal-19eb68c4.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";import"./index-31d1a8ca.js";import"./vue-cleave.min-9e1201c2.js";import"./index-ce9a51c5.js";import"./index-3e810d59.js";import"./vee-validate.esm-0c282d04.js";import"./TextValid-100be459.js";import"./array-e684e252.js";import"./tabs-aa384b53.js";import"./VueSelect-4c8519b3.js";import"./index-86a58ede.js";import"./index-8994827d.js";import"./ck-white-7280cd79.js";import"./index-96a9bfa7.js";import"./vue3-tree-vue.esm-b89ac387.js";import"./index-3069c0b6.js";import"./index-2d8ae848.js";const Z={name:"ReceiveView",components:{Card:A,Icon:F,Button:j,Expansion:O,Dropdown:P,CoverSheet:V,BookDetail:I,AttachedFile:N,BookReference:T,Activity:Y,RouteDetail:H,ModalSuccess:J,ModalError:U,ModalAcknow:K,Modal:L,ThreeForm:W,BookDraftRefม},data(){return{isOpen:!1,pdfPath:"",urlSarabun:b,item:null,isSuccess:!1,isError:!1,isSigned:!1,pinError:""}},created(){this.fetchData();const{data:o,status:e}=p("acknowStore","read",{payload:this.$route.params.id});e==200&&console.log(o.message)},computed:{isMobile(){return G().isMobile}},methods:{async pdfHistory(){const{data:o,status:e}=await p("documentStore","PDFHistory",{payload:this.$route.params.id});e==200&&(console.log("data pdf",o.result),this.pdfPath=o.result,this.isOpen=!0)},async handleSigned(){this.isSigned=!0},async signedSubmit(o){var f;const e=await p("acknowStore","store",{payload:o});console.log("data",e),e.status===200?(this.isSuccess=!0,this.isSigned=!1,q().clearSignature):e.status===403&&(this.pinError=(f=e.data)==null?void 0:f.message)},closeModal(){this.isSuccess=!1,this.isSigned=!1,this.isShowModalReturn=!1},async fetchData(){console.log("fetchData");const{data:o,status:e}=await p("acknowStore","show",{payload:this.$route.params.id});e===200&&(this.item=await o.result,console.log("item",this.item))},convertDate(o){return o?Q(o).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},async handleReceiveBook(){console.log("handleReceiveBook");const{data:o,status:e}=await p("documentStore","acceptDocument",{payload:this.$route.params.id});e===200&&(this.isSuccess=!0,this.fetchData())},onPrinter(){console.log("onPrinter")},downloadFileDocument(o){console.log(o)},downloadFile(o){const e=b+o;window.open(e,"_blank")}}},$={key:0,class:"flex items-center gap-3"},ee=s("div",null,"กลับไปหน้ารายการ",-1),te={class:"pt-4"},oe={class:"md:text-2xl text-[16px] font-medium my-6"},se={class:"h-[250px] flex items-center justify-center"},ie={class:"text-center flex flex-row flex-wrap justify-center"},ne={class:"basis-full flex justify-center mb-5"},le=s("div",null,[s("h4",{class:"text-lg text-slate-900"},[X(" บันทึกคำสั่งการ/คำเสนอ/การปฎิบัติ "),s("span",{class:"text-green-500"},"สำเร็จ")])],-1),re=s("hr",null,null,-1),ae={class:"flex justify-center mt-4"},ce=["src"];function me(o,e,f,pe,t,l){const h=n("Icon"),u=n("Button"),_=n("Card"),S=n("CoverSheet"),w=n("BookDetail"),M=n("AttachedFile"),C=n("BookDraftRef"),D=n("BookReference"),B=n("Activity"),E=n("RouteDetail"),R=n("ModalAcknow"),k=n("Modal");return a(),g("div",null,[i(_,null,{default:d(()=>{var r,y,x;return[l.isMobile?c("",!0):(a(),g("div",$,[s("div",{onClick:e[0]||(e[0]=de=>o.$router.back()),class:"flex items-center text-primary-600 cursor-pointer"},[i(h,{icon:"mdi:chevron-left",class:"text-xl"}),ee])])),s("div",te,[i(_,{bodyClass:"bg-gray-100 h-[95px] flex items-center space-y-10 py-6"},{default:d(()=>[s("div",null,[i(u,{onClick:l.handleSigned,text:"บันทึกคำสั่งการ/คำเสนอ/การปฎิบัติ"},null,8,["onClick"])])]),_:1})]),s("div",oe," วันที่ "+v(l.convertDate((r=t.item)==null?void 0:r.document_date))+" "+v((y=t.item)==null?void 0:y.subject)+" พ.ศ. "+v((x=t.item)==null?void 0:x.year),1),i(S,{item:t.item},null,8,["item"]),i(w,{item:t.item},null,8,["item"]),l.isMobile?c("",!0):(a(),m(M,{key:1,item:t.item},null,8,["item"])),i(C,{item:t.item},null,8,["item"]),l.isMobile?c("",!0):(a(),m(D,{key:2,item:t.item},null,8,["item"])),l.isMobile?c("",!0):(a(),m(B,{key:3,item:t.item,"onEvent:onClick":l.pdfHistory},null,8,["item","onEvent:onClick"])),l.isMobile?c("",!0):(a(),m(E,{key:4,item:t.item},null,8,["item"])),s("div",null,[i(_,{bodyClass:"bg-gray-100 h-[95px] flex items-center space-y-10 py-6"},{default:d(()=>[s("div",null,[i(u,{onClick:l.handleSigned,text:"บันทึกคำสั่งการ/คำเสนอ/การปฎิบัติ"},null,8,["onClick"])])]),_:1})])]}),_:1}),i(R,{item:t.item,title:"บันทึกคำสั่งการ/คำเสนอ/การปฎิบัติ",isOpen:t.isSigned,pinError:t.pinError,"onEvent:closeModal":e[1]||(e[1]=r=>t.isSigned=!1),"onEvent:submit":l.signedSubmit,"onEvent:pincode":e[2]||(e[2]=r=>t.pinError="")},null,8,["item","isOpen","pinError","onEvent:submit"]),t.isSuccess?(a(),m(k,{key:0,title:"",activeModal:t.isSuccess,"onEvent:closeModal":e[5]||(e[5]=r=>t.isSuccess=!1),label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:""},{default:d(()=>[s("div",se,[s("div",ie,[s("div",ne,[i(h,{icon:"icon-park-solid:protect",class:"text-6xl text-green-500"})]),le])]),re,s("div",ae,[i(u,{text:"ปิด",btnClass:"btn-primary w-32 mx-2",onClick:e[3]||(e[3]=r=>t.isSuccess=!1)}),i(u,{text:"ไปหน้ารายการ",btnClass:"btn-outline-dark w-32 mx-2",onClick:e[4]||(e[4]=r=>o.$router.push("/app/issue/acknowledge"))})])]),_:1},8,["activeModal"])):c("",!0),t.isOpen?(a(),m(k,{key:1,title:"ดูรายละเอียดเอกสาร",labelClass:"btn-outline-dark",sizeClass:"w-3/4",label:"",centered:"",activeModal:t.isOpen,"onEvent:closeModal":e[6]||(e[6]=r=>t.isOpen=!1)},{default:d(()=>[s("div",null,[s("iframe",{class:"w-full h-[1000px] mt-4",src:"data:application/pdf;base64, "+t.pdfPath,frameborder:"0"},null,8,ce)])]),_:1},8,["activeModal"])):c("",!0)])}const et=z(Z,[["render",me]]);export{et as default};
