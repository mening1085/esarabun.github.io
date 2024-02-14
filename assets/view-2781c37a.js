import{C as j}from"./index-263882d1.js";import{I as A}from"./index-72ee420c.js";import{B as V}from"./index-441935dc.js";import{E as I}from"./index-1c6333b5.js";import{D as N}from"./index-090a8953.js";import{C as Y,B as H,A as q,a as G,b as J,R as K}from"./RouteDetail-b3469ae3.js";import{M as Q}from"./index-7dc8252b.js";import{M as U}from"./index-482d31d8.js";import{M as W}from"./index-1b218db3.js";import{T as X}from"./ThreeForm-c76850ac.js";import{B as Z}from"./BookDraftRef-746d0155.js";import{_ as $,t as w,g as ee,a as f,C as te}from"./index-e058a960.js";import{d as se}from"./dayjs.min-72c81edc.js";import{M as oe}from"./index-2a7f4259.js";import{O as ie}from"./index-38c86086.js";import{o as b,x as a,bj as h,m,n as l,aF as r,as as n,p as i,aT as _,w as re}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./index-cc7a2b4b.js";import"./Modal-19eb68c4.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";import"./index-31d1a8ca.js";import"./vue-cleave.min-9e1201c2.js";import"./index-ce9a51c5.js";import"./index-3e810d59.js";import"./vee-validate.esm-0c282d04.js";import"./TextValid-100be459.js";import"./array-e684e252.js";import"./index-3069c0b6.js";import"./tabs-aa384b53.js";import"./VueSelect-4c8519b3.js";import"./index-86a58ede.js";import"./index-8994827d.js";import"./ck-white-7280cd79.js";import"./index-96a9bfa7.js";import"./vue3-tree-vue.esm-b89ac387.js";import"./index-2d8ae848.js";const ne={name:"ReceiveView",components:{ThreeForm:X,Card:j,Icon:A,Button:V,Expansion:I,Dropdown:N,CoverSheet:Y,BookDetail:H,AttachedFile:q,BookReference:G,Activity:J,RouteDetail:K,BookDraftRef:Z,ModalSuccess:Q,ModalError:oe,ModalOrder:U,Modal:W,OrderMobile:ie},data(){return{isOpen:!1,pdfPath:"",checkPermission:!1,userList:[],organizeList:[],customList:[],urlSarabun:w,item:null,isSuccess:!1,isError:!1,errorMessage:"",isOrder:!1,pinError:""}},computed:{isMobile(){return ee().isMobile}},created(){this.fetchData()},methods:{async pdfHistory(){const{data:o,status:t}=await f("documentStore","PDFHistory",{payload:this.$route.params.id});t==200&&(console.log("data pdf",o.result),this.pdfPath=o.result,this.isOpen=!0)},async handleOrder(){this.isOrder=!0},async orderSubmit(o){var d;o.id=+this.$route.params.id;const t=await f("orderStore","store",{payload:o});console.log("data",t),t.status===200?(this.isOrder=!1,setTimeout(()=>{this.isSuccess=!0,te().clearSignature()},10)):(this.isError=!0,this.errorMessage=(d=t.data)==null?void 0:d.message)},closeModal(){this.isSuccess=!1,this.isOrder=!1,this.isShowModalReturn=!1},async fetchData(){var d,y,e,s,v,p;console.log("fetchData");const{data:o,status:t}=await f("orderStore","showSend",{payload:this.$route.params.id});if(t===200){this.item=await o.result,this.checkPermission=o.result.permission.sign;const u=await f("orderStore","getMaster");u.status==200&&(console.log("res",u),this.organizeList=(y=(d=u.data)==null?void 0:d.message)==null?void 0:y.organization_list,this.userList=(s=(e=u.data)==null?void 0:e.message)==null?void 0:s.user_list,this.customList=(p=(v=u.data)==null?void 0:v.message)==null?void 0:p.custom_groups)}},convertDate(o){return o?se(o).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},refresh(){this.isSuccess=!1,location.reload()},async handleReceiveBook(){console.log("handleReceiveBook");const{data:o,status:t}=await f("documentStore","acceptDocument",{payload:this.$route.params.id});t===200&&(this.isSuccess=!0,this.fetchData())},async submit(o){console.log("payload",o);const{data:t,status:d}=await f("orderStore","senTo",{payload:o});d==200&&this.$router.push("/app/issue/sent-book")},onReturn(){console.log("onReturn")},onPrinter(){console.log("onPrinter")},downloadFileDocument(o){console.log(o)},downloadFile(o){const t=w+o;window.open(t,"_blank")}}},le={class:"-m-[14px] md:m-0"},ae={key:0,class:"flex items-center gap-3"},ce=i("div",null,"กลับไปหน้ารายการ",-1),me={key:1,class:"pt-4"},ue={class:"text-2xl font-medium my-6"},de={key:8},pe={class:"h-[250px] flex items-center justify-center"},fe={class:"text-center flex flex-row flex-wrap justify-center"},he={class:"basis-full flex justify-center mb-5"},ve=i("div",null,[i("h4",{class:"text-lg text-slate-900"},[re(" ลงนามคำสั่งการ "),i("span",{class:"text-green-500"},"สำเร็จ")])],-1),be=i("hr",null,null,-1),_e={class:"flex justify-center mt-4"},ye=["src"],ke={class:"text-lg text-slate-900"};function Me(o,t,d,y,e,s){const v=r("Icon"),p=r("Button"),u=r("Card"),E=r("CoverSheet"),O=r("BookDetail"),S=r("BookDraftRef"),D=r("AttachedFile"),B=r("BookReference"),R=r("Activity"),L=r("RouteDetail"),P=r("ThreeForm"),T=r("OrderMobile"),F=r("ModalOrder"),k=r("Modal"),z=r("ModalError");return n(),b("div",le,[a(u,null,{default:h(()=>{var c,M,x,g,C;return[s.isMobile?l("",!0):(n(),b("div",ae,[i("div",{onClick:t[0]||(t[0]=xe=>o.$router.back()),class:"flex items-center text-primary-600 cursor-pointer"},[a(v,{icon:"mdi:chevron-left",class:"text-xl"}),ce])])),((c=e.item)==null?void 0:c.status)=="รอสั่งการ"&&e.checkPermission?(n(),b("div",me,[a(u,{bodyClass:(s.isMobile?"bg-white border-0":"bg-gray-100")+" h-[95px] flex items-center space-y-10 py-6"},{default:h(()=>[i("div",null,[a(p,{onClick:s.handleOrder,text:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ"},null,8,["onClick"])])]),_:1},8,["bodyClass"])])):l("",!0),i("div",ue," วันที่ "+_(s.convertDate((M=e.item)==null?void 0:M.document_date))+" "+_((x=e.item)==null?void 0:x.subject)+" พ.ศ. "+_((g=e.item)==null?void 0:g.year),1),s.isMobile?l("",!0):(n(),m(E,{key:2,activeTab:e.checkPermission,item:e.item},null,8,["activeTab","item"])),a(O,{activeTab:e.checkPermission&&s.isMobile,item:e.item},null,8,["activeTab","item"]),a(S,{item:e.item},null,8,["item"]),s.isMobile?l("",!0):(n(),m(D,{key:3,item:e.item},null,8,["item"])),s.isMobile?l("",!0):(n(),m(B,{key:4,item:e.item},null,8,["item"])),s.isMobile?l("",!0):(n(),m(R,{key:5,item:e.item,"onEvent:onClick":s.pdfHistory},null,8,["item","onEvent:onClick"])),s.isMobile?l("",!0):(n(),m(L,{key:6,item:e.item},null,8,["item"])),!e.checkPermission&&!s.isMobile?(n(),m(P,{key:7,activeTab:!!e.checkPermission,organizeList:e.organizeList,userList:e.userList,customList:e.customList,item:e.item,"onEvent:submit":s.submit},null,8,["activeTab","organizeList","userList","customList","item","onEvent:submit"])):l("",!0),((C=e.item)==null?void 0:C.status)=="รอสั่งการ"&&e.checkPermission?(n(),b("div",de,[a(u,{bodyClass:(s.isMobile?"bg-white border-0":"bg-gray-100")+" h-[95px] flex items-center space-y-10 py-6"},{default:h(()=>[i("div",null,[a(p,{onClick:s.handleOrder,text:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ"},null,8,["onClick"])])]),_:1},8,["bodyClass"])])):l("",!0)]}),_:1}),s.isMobile?(n(),m(T,{key:0,isOpen:e.isOrder,"onEvent:submit":s.orderSubmit,"onEvent:close":t[1]||(t[1]=c=>e.isOrder=!1)},null,8,["isOpen","onEvent:submit"])):l("",!0),s.isMobile?l("",!0):(n(),m(F,{key:1,item:e.item,title:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ",isOpen:e.isOrder,pinError:e.pinError,"onEvent:closeModal":t[2]||(t[2]=c=>e.isOrder=!1),"onEvent:submit":s.orderSubmit,"onEvent:pincode":t[3]||(t[3]=c=>e.pinError="")},null,8,["item","isOpen","pinError","onEvent:submit"])),e.isSuccess?(n(),m(k,{key:2,title:"",activeModal:e.isSuccess,"onEvent:closeModal":t[6]||(t[6]=c=>e.isSuccess=!1),label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:""},{default:h(()=>[i("div",null,[i("div",pe,[i("div",fe,[i("div",he,[a(v,{icon:"icon-park-solid:protect",class:"text-6xl text-green-500"})]),ve])]),be,i("div",_e,[a(p,{text:"ปิด",btnClass:"btn-primary w-32 mx-2",onClick:t[4]||(t[4]=c=>s.refresh())}),a(p,{text:"ไปหน้ารายการ",btnClass:"btn-outline-dark w-32 mx-2",onClick:t[5]||(t[5]=c=>o.$router.push("/app/issue/order"))})])])]),_:1},8,["activeModal"])):l("",!0),e.isOpen?(n(),m(k,{key:3,title:"ดูรายละเอียดเอกสาร",labelClass:"btn-outline-dark",sizeClass:"w-3/4",label:"",centered:"",activeModal:e.isOpen,"onEvent:closeModal":t[7]||(t[7]=c=>e.isOpen=!1)},{default:h(()=>[i("div",null,[i("iframe",{class:"w-full h-[1000px] mt-4",src:"data:application/pdf;base64, "+e.pdfPath,frameborder:"0"},null,8,ye)])]),_:1},8,["activeModal"])):l("",!0),a(z,{title:"",isOpen:e.isError,"onEvent:closeModal":t[8]||(t[8]=c=>e.isError=!1)},{default:h(()=>[i("div",ke,_(e.errorMessage),1)]),_:1},8,["isOpen"])])}const dt=$(ne,[["render",Me]]);export{dt as default};
