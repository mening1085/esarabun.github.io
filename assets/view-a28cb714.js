import{C as R}from"./index-263882d1.js";import{I as A}from"./index-72ee420c.js";import{E as j}from"./index-1c6333b5.js";import{D as O}from"./index-090a8953.js";import{C as P,B as L,A as V,a as N,b as Y,R as H}from"./RouteDetail-b3469ae3.js";import{M as T}from"./index-2a7f4259.js";import{_ as q,t as G,a as m}from"./index-e058a960.js";import{d as J}from"./dayjs.min-72c81edc.js";import{B as K}from"./index-441935dc.js";import{M as Q}from"./Modal-19eb68c4.js";import{F as U}from"./FirstForm-197d8ee7.js";import{A as W}from"./AttachedFileStamp-b7cdd757.js";import{o as b,x as i,bj as d,m as _,n as p,aF as r,as as a,p as s,aT as f,w as X}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./index-1b218db3.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";import"./index-cc7a2b4b.js";import"./TextValid-100be459.js";import"./VueSelect-4c8519b3.js";import"./index-31d1a8ca.js";import"./vue-cleave.min-9e1201c2.js";import"./index-8994827d.js";import"./ck-white-7280cd79.js";import"./index-3069c0b6.js";import"./tabs-aa384b53.js";import"./index-96a9bfa7.js";import"./vue3-tree-vue.esm-b89ac387.js";const Z={name:"SendBackView",components:{Card:R,Icon:A,Expansion:j,Dropdown:O,CoverSheet:P,BookDetail:L,AttachedFile:V,BookReference:N,Activity:Y,RouteDetail:H,FirstForm:U,AttachedFileStamp:W,ModalError:T,Button:K,Modal:Q},data(){return{isOpen:!1,pdfPath:"",checkedItemRadio:{},checkedID:"",return_type:"",organizeList:[],urlSarabun:G,item:null,isError:!1,examineError:!1,errorMessage:"",isSuccess:!1}},created(){this.fetchData()},methods:{async pdfHistory(){const{data:t,status:o}=await m("documentStore","PDFHistory",{payload:this.$route.params.id});o==200&&(console.log("data pdf",t.result),this.pdfPath=t.result,this.isOpen=!0)},async fetchData(){var l,h;const{data:t,status:o}=await m("sendBackStore","showReceive",{payload:this.$route.params.id});if(o===200){this.item=t.result,this.return_type=t.result.return_type,this.checkedID=t.result.receive_organization_id?t.result.receive_organization_id:"",this.checkedItemRadio=t.result.receive_organization_data?t.result.receive_organization_data:{};const e=await m("orderStore","getMaster");e.status==200&&(console.log("res",e),this.organizeList=(h=(l=e.data)==null?void 0:l.message)==null?void 0:h.organization_list)}else this.isError=!0,this.errorMessage="ไม่พบข้อมูล"},async onCancel(){console.log("onCancel");const{data:t,status:o}=await m("sendBackStore","delete",{payload:this.$route.params.id});o===200?this.isSuccess=!0:(this.isError=!0,this.errorMessage=t.message)},convertDate(t){return t?J(t).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},onPrinter(){console.log("onPrinter")},async submit(t){console.log("payload",t.id);const{data:o,status:l}=await m("sendBackStore","updateOrg",{payload:{id:t.id,data:t}});l==200&&this.$router.push("/app/issue/sent-back")}}},$={class:"flex justify-between items-center"},ee={class:"basis-1/2"},te={class:"flex items-center gap-3"},oe={class:"shrink w-[145px]"},se=s("div",null,"กลับไปหน้ารายการ",-1),ie={key:0,class:"flex items-center border-x gap-3 border-gray-300 px-4"},re={class:"text-2xl font-medium my-6"},ne={class:"text-lg text-slate-900"},ae={class:"h-[250px] flex items-center justify-center"},le={class:"text-center flex flex-row flex-wrap justify-center"},ce={class:"basis-full flex justify-center mb-5"},me=s("div",null,[s("h4",{class:"text-lg text-slate-900"},[X(" ยกเลิกหนังสือ "),s("span",{class:"text-green-500"},"สำเร็จ")])],-1),de=s("hr",null,null,-1),pe={class:"flex justify-center mt-4"},ue=["src"];function _e(t,o,l,h,e,c){const v=r("Icon"),u=r("Button"),g=r("router-link"),C=r("CoverSheet"),w=r("BookDetail"),M=r("AttachedFileStamp"),D=r("AttachedFile"),B=r("BookReference"),E=r("Activity"),S=r("RouteDetail"),F=r("FirstForm"),I=r("Card"),z=r("ModalError"),k=r("Modal");return a(),b("div",null,[i(I,null,{default:d(()=>{var n,x,y;return[s("div",$,[s("div",ee,[s("div",te,[s("div",oe,[s("div",{onClick:o[0]||(o[0]=fe=>t.$router.back()),class:"flex items-center text-primary-600 cursor-pointer"},[i(v,{icon:"mdi:chevron-left",class:"text-xl"}),se])]),e.item?(a(),b("div",ie,[i(g,{to:"/app/issue/sent-back/receive/edit/"+t.$route.params.id},{default:d(()=>[e.return_type=="document-flow"?(a(),_(u,{key:0,text:"แก้ไข",btnClass:"btn-primary h-[40px] flex items-center"})):p("",!0)]),_:1},8,["to"]),i(u,{onClick:c.onCancel,text:"ยกเลิกหนังสือ",btnClass:"btn-danger h-[40px] flex items-center"},null,8,["onClick"])])):p("",!0),i(v,{onClick:c.onPrinter,icon:"mdi:printer",class:"text-3xl cursor-pointer"},null,8,["onClick"])])])]),s("div",re," วันที่ "+f(c.convertDate((n=e.item)==null?void 0:n.document_date))+" "+f((x=e.item)==null?void 0:x.subject)+" พ.ศ. "+f((y=e.item)==null?void 0:y.year),1),i(C,{item:e.item},null,8,["item"]),i(w,{item:e.item},null,8,["item"]),i(M,{item:e.item},null,8,["item"]),i(D,{item:e.item},null,8,["item"]),i(B,{item:e.item},null,8,["item"]),i(E,{item:e.item,"onEvent:onClick":c.pdfHistory},null,8,["item","onEvent:onClick"]),i(S,{item:e.item},null,8,["item"]),e.return_type=="organization"?(a(),_(F,{key:0,organizeList:e.organizeList,checkedID:e.checkedID,checkedItemRadio:e.checkedItemRadio,"onEvent:submit":c.submit},null,8,["organizeList","checkedID","checkedItemRadio","onEvent:submit"])):p("",!0)]}),_:1}),i(z,{title:"",isOpen:e.isError,"onEvent:closeModal":o[1]||(o[1]=n=>e.isError=!1)},{default:d(()=>[s("div",ne,f(e.errorMessage),1)]),_:1},8,["isOpen"]),e.isSuccess?(a(),_(k,{key:0,title:"",activeModal:e.isSuccess,"onEvent:closeModal":o[4]||(o[4]=n=>t.$router.back()),label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:""},{default:d(()=>[s("div",ae,[s("div",le,[s("div",ce,[i(v,{icon:"icon-park-solid:protect",class:"text-6xl text-green-500"})]),me])]),de,s("div",pe,[i(u,{text:"ปิด",btnClass:"btn-primary w-32 mx-2",onClick:o[2]||(o[2]=n=>e.isSuccess=!1)}),i(u,{text:"ไปหน้ารายการ",btnClass:"btn-outline-dark w-32 mx-2",onClick:o[3]||(o[3]=n=>t.$router.back())})])]),_:1},8,["activeModal"])):p("",!0),e.isOpen?(a(),_(k,{key:1,title:"ดูรายละเอียดเอกสาร",labelClass:"btn-outline-dark",sizeClass:"w-3/4",label:"",centered:"",activeModal:e.isOpen,"onEvent:closeModal":o[5]||(o[5]=n=>e.isOpen=!1)},{default:d(()=>[s("div",null,[s("iframe",{class:"w-full h-[1000px] mt-4",src:"data:application/pdf;base64, "+e.pdfPath,frameborder:"0"},null,8,ue)])]),_:1},8,["activeModal"])):p("",!0)])}const We=q(Z,[["render",_e]]);export{We as default};
