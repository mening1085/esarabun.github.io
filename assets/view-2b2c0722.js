import{C as A}from"./index-263882d1.js";import{I as z}from"./index-72ee420c.js";import{B as j}from"./index-441935dc.js";import{E as V}from"./index-1c6333b5.js";import{D as I}from"./index-090a8953.js";import{C as N,B as Y,A as H,a as q,b as G,R as J}from"./RouteDetail-b3469ae3.js";import{T as K}from"./ThreeForm-c76850ac.js";import{M as Q}from"./index-7dc8252b.js";import{M as U}from"./index-482d31d8.js";import{M as W}from"./index-1b218db3.js";import{A as X}from"./AttachedFileStamp-b7cdd757.js";import{_ as Z,t as E,g as $,a as h,C as ee}from"./index-e058a960.js";import{d as te}from"./dayjs.min-72c81edc.js";import{M as se}from"./index-2a7f4259.js";import{o as b,x as n,bj as _,m as u,n as a,aF as r,as as l,p as i,aT as k,w as oe}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./index-cc7a2b4b.js";import"./TextValid-100be459.js";import"./VueSelect-4c8519b3.js";import"./index-31d1a8ca.js";import"./vue-cleave.min-9e1201c2.js";import"./index-86a58ede.js";import"./Modal-19eb68c4.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";import"./index-8994827d.js";import"./ck-white-7280cd79.js";import"./tabs-aa384b53.js";import"./index-96a9bfa7.js";import"./vue3-tree-vue.esm-b89ac387.js";import"./index-3069c0b6.js";import"./index-2d8ae848.js";import"./index-ce9a51c5.js";import"./index-3e810d59.js";import"./vee-validate.esm-0c282d04.js";import"./array-e684e252.js";const ie={name:"ReceiveView",components:{Card:A,Icon:z,Button:j,Expansion:V,Dropdown:I,CoverSheet:N,BookDetail:Y,AttachedFile:H,BookReference:q,Activity:G,RouteDetail:J,ThreeForm:K,AttachedFileStamp:X,ModalSuccess:Q,ModalError:se,ModalOrder:U,Modal:W},data(){return{isOpen:!1,pdfPath:"",checkPermission:!1,urlSarabun:E,item:null,userList:[],organizeList:[],customList:[],isSuccess:!1,isError:!1,isOrder:!1,pinError:""}},computed:{isMobile(){return $().isMobile}},created(){this.fetchData()},methods:{async pdfHistory(){const{data:s,status:t}=await h("documentStore","PDFHistory",{payload:this.$route.params.id});t==200&&(console.log("data pdf",s.result),this.pdfPath=s.result,this.isOpen=!0)},async handleOrder(){this.isOrder=!0},async orderSubmit(s){var c;s.id=this.$route.params.id;const t=await h("orderStore","store",{payload:s});console.log("data",t),t.status===200?(this.isOrder=!1,setTimeout(()=>{this.isSuccess=!0,ee().clearSignature()},10)):t.status===403&&(this.pinError=(c=t.data)==null?void 0:c.message)},closeModal(){this.isSuccess=!1,this.isOrder=!1,this.isShowModalReturn=!1},async fetchData(){var c,y,e,o,v,d,f;console.log("fetchData");const{data:s,status:t}=await h("orderStore","showReceive",{payload:this.$route.params.id});if(t===200){this.item=s.result,this.checkPermission=s.result.permission.sign;const p=await h("orderStore","getMaster");p.status==200&&(console.log("res",(c=p.data)==null?void 0:c.message),this.organizeList=(e=(y=p.data)==null?void 0:y.message)==null?void 0:e.organization_list,this.userList=(v=(o=p.data)==null?void 0:o.message)==null?void 0:v.user_list,this.customList=(f=(d=p.data)==null?void 0:d.message)==null?void 0:f.custom_groups)}},refresh(){this.isSuccess=!1,location.reload()},convertDate(s){return s?te(s).locale("th").add(543,"year").format("DD/MM/YYYY"):"-"},async handleReceiveBook(){console.log("handleReceiveBook");const{data:s,status:t}=await h("documentStore","acceptDocument",{payload:this.$route.params.id});t===200&&(this.isSuccess=!0,this.fetchData())},async submit(s){console.log("payload",s);const{data:t,status:c}=await h("orderStore","senTo",{payload:s});c==200&&this.$router.push("/app/receive-list/receive-book")},onPrinter(){console.log("onPrinter")},downloadFileDocument(s){console.log(s)},downloadFile(s){const t=E+s;window.open(t,"_blank")}}},re={key:0,class:"flex items-center gap-3"},ne=i("div",null,"กลับไปหน้ารายการ",-1),le={key:1,class:"pt-4"},ae={class:"text-2xl font-medium my-6"},ce={key:8},me={class:"h-[250px] flex items-center justify-center"},ue={class:"text-center flex flex-row flex-wrap justify-center"},de={class:"basis-full flex justify-center mb-5"},pe=i("div",null,[i("h4",{class:"text-lg text-slate-900"},[oe(" ลงนามคำสั่งการ "),i("span",{class:"text-green-500"},"สำเร็จ")])],-1),fe=i("hr",null,null,-1),he={class:"flex justify-center mt-4"},ve=["src"];function _e(s,t,c,y,e,o){const v=r("Icon"),d=r("Button"),f=r("Card"),p=r("CoverSheet"),D=r("BookDetail"),O=r("AttachedFileStamp"),B=r("AttachedFile"),L=r("BookReference"),F=r("Activity"),T=r("RouteDetail"),P=r("ThreeForm"),R=r("ModalOrder"),x=r("Modal");return l(),b("div",null,[n(f,null,{default:_(()=>{var m,g,M,C,S,w;return[i("div",null,[o.isMobile?a("",!0):(l(),b("div",re,[i("div",{onClick:t[0]||(t[0]=be=>s.$router.back()),class:"flex items-center text-primary-600 cursor-pointer"},[n(v,{icon:"mdi:chevron-left",class:"text-xl"}),ne])])),((m=e.item)==null?void 0:m.status)=="รอสั่งการ"&&e.checkPermission?(l(),b("div",le,[n(f,{bodyClass:(o.isMobile?"bg-white border-0":"bg-gray-100")+" h-[95px] flex items-center space-y-10 py-6"},{default:_(()=>[i("div",null,[n(d,{onClick:o.handleOrder,text:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ"},null,8,["onClick"])])]),_:1},8,["bodyClass"])])):a("",!0),i("div",ae," วันที่ "+k(o.convertDate((g=e.item)==null?void 0:g.document_date))+" "+k((M=e.item)==null?void 0:M.subject)+" พ.ศ. "+k((C=e.item)==null?void 0:C.year),1),o.isMobile?a("",!0):(l(),u(p,{key:2,activeTab:e.checkPermission,item:e.item},null,8,["activeTab","item"])),n(D,{activeTab:e.checkPermission&&o.isMobile,item:e.item},null,8,["activeTab","item"]),n(O,{item:e.item},null,8,["item"]),o.isMobile?a("",!0):(l(),u(B,{key:3,item:e.item},null,8,["item"])),o.isMobile?a("",!0):(l(),u(L,{key:4,item:e.item},null,8,["item"])),o.isMobile?a("",!0):(l(),u(F,{key:5,item:e.item,"onEvent:onClick":o.pdfHistory},null,8,["item","onEvent:onClick"])),o.isMobile?a("",!0):(l(),u(T,{key:6,item:e.item},null,8,["item"])),!e.checkPermission&&!o.isMobile?(l(),u(P,{key:7,activeTab:((S=s.$route.query)==null?void 0:S.type)=="order",organizeList:e.organizeList,userList:e.userList,customList:e.customList,item:e.item,"onEvent:submit":o.submit},null,8,["activeTab","organizeList","userList","customList","item","onEvent:submit"])):a("",!0),((w=e.item)==null?void 0:w.status)=="รอสั่งการ"&&e.checkPermission?(l(),b("div",ce,[n(f,{bodyClass:(o.isMobile?"bg-white border-0":"bg-gray-100")+" h-[95px] flex items-center space-y-10 py-6"},{default:_(()=>[i("div",null,[n(d,{onClick:o.handleOrder,text:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ"},null,8,["onClick"])])]),_:1},8,["bodyClass"])])):a("",!0)])]}),_:1}),n(R,{item:e.item,title:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ",isOpen:e.isOrder,pinError:e.pinError,"onEvent:closeModal":t[1]||(t[1]=m=>e.isOrder=!1),"onEvent:submit":o.orderSubmit,"onEvent:pincode":t[2]||(t[2]=m=>e.pinError="")},null,8,["item","isOpen","pinError","onEvent:submit"]),e.isSuccess?(l(),u(x,{key:0,title:"",activeModal:e.isSuccess,"onEvent:closeModal":t[5]||(t[5]=m=>e.isSuccess=!1),label:"",labelClass:"btn-outline-dark",sizeClass:"w-full max-w-[700px]",centered:""},{default:_(()=>[i("div",null,[i("div",me,[i("div",ue,[i("div",de,[n(v,{icon:"icon-park-solid:protect",class:"text-6xl text-green-500"})]),pe])]),fe,i("div",he,[n(d,{text:"ปิด",btnClass:"btn-primary w-32 mx-2",onClick:t[3]||(t[3]=m=>o.refresh())}),n(d,{text:"ไปหน้ารายการ",btnClass:"btn-outline-dark w-32 mx-2",onClick:t[4]||(t[4]=m=>s.$router.push("/app/issue/order"))})])])]),_:1},8,["activeModal"])):a("",!0),e.isOpen?(l(),u(x,{key:1,title:"ดูรายละเอียดเอกสาร",labelClass:"btn-outline-dark",sizeClass:"w-3/4",label:"",centered:"",activeModal:e.isOpen,"onEvent:closeModal":t[6]||(t[6]=m=>e.isOpen=!1)},{default:_(()=>[i("div",null,[i("iframe",{class:"w-full h-[1000px] mt-4",src:"data:application/pdf;base64, "+e.pdfPath,frameborder:"0"},null,8,ve)])]),_:1},8,["activeModal"])):a("",!0)])}const lt=Z(ie,[["render",_e]]);export{lt as default};
