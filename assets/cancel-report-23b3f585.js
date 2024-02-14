import{C as O}from"./index-263882d1.js";import{I as V}from"./index-72ee420c.js";import{B as U}from"./index-441935dc.js";import{V as L,C as Y}from"./VueSelect-4c8519b3.js";import{D as G}from"./index-090a8953.js";import{I as J}from"./index-a60d9262.js";import{P as q}from"./index-bb139ada.js";import{_ as H,a as S,b as K,t as T}from"./index-e058a960.js";import{A as Q}from"./AdvancedSearch-891403e6.js";import{d as X,a as M}from"./global-funcs-ef1510cf.js";import{d as Z}from"./dayjs.min-72c81edc.js";import{E as I}from"./exceljs.min-46343030.js";import{D as $}from"./index-e3f12ad9.js";import{C as ee}from"./index-8994827d.js";import{T as te}from"./index-31d1a8ca.js";import{A as oe}from"./AdvancedSearchStatus-9cb2c24d.js";import{o as _,x as p,bj as v,aF as f,as as h,p as d,aT as u,w as k}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./vue-cleave.min-9e1201c2.js";import"./index-7e9b1d19.js";import"./select-option-b2a02578.js";import"./index-2d8ae848.js";import"./index-6c8c0d73.js";import"./ck-white-7280cd79.js";const ne={computed:{},components:{AdvancdSearchStatus:oe,Textinput:te,Checkbox:ee,DatePickerRange:$,Pagination:q,InputGroup:J,VueSelect:L,Dropdown:G,vSelect:Y,Button:U,Card:O,Icon:V,AdvancedSearch:Q},data(){return{isShowModalAS:!1,exportLists:[{id:1,label:"Microsoft Word",icon:"ant-design:file-word-filled"},{id:2,label:"Microsoft Excel",icon:"ant-design:file-excel-filled"},{id:3,label:"PDF",icon:"ant-design:file-pdf-filled"}],filter:{keyword:""},activityList:[],columns:[{label:"เลขรับ/ส่ง",field:"id",width:"60px",tdClass:"text_left",thClass:"text_left"},{label:"เลขที่หนังสือ/เรื่อง",field:"document_number",width:"200px",tdClass:"text_left",thClass:"text_left"},{label:"จาก",field:"from_id",width:"150px",tdClass:"text_left",thClass:"text_left"},{label:"ถึง",field:"to_id",width:"150px",tdClass:"text_left",thClass:"text_left"},{label:"สถานะ",field:"status",width:"60px",tdClass:"text_left",thClass:"text_left"},{label:"สาเหตุการยกเลิก/ผู้ยกเลิก",field:"cancel",width:"100px",tdClass:"text_left",thClass:"text_left"}],paginate:{total:50,current_page:1,perpage:10,pageRange:5},advancedTable:[],common:[]}},watch:{},async created(){await this.getData(1)},methods:{findUser:X,async onDelete(e){},async onFilter(e){e.document_type=e.document_type?JSON.parse(e.document_type):[],e.book_type=e.book_type?JSON.parse(e.book_type):[],this.getData(1,e)},displayInitialNumber(e){let o="";return e&&(e.doc_pickup_type==="หนังสือรับ"?(o+=this.convertThaiNo(e.initial_number_from??"-"),o+=" / "+(e.parent_document?this.convertThaiNo(e.parent_document.initial_number_from):"-")):o+="- / "+this.convertThaiNo(e.initial_number_from)),o},async getData(e,o=[]){var n,c,a,r,y,g,b,w,x,s,m,C;let l={page:e,...this.filter,filter:o};const i=await S("reportFixStore","cancelReport",{payload:l}),t=await S("reportDashboardStore","getCommonData");(c=(n=i.data)==null?void 0:n.result)!=null&&c.data&&(this.advancedTable=M(t.data.result.user_list,t.data.result.inside_organization,t.data.result.outside_organization,(r=(a=i.data)==null?void 0:a.result)==null?void 0:r.data),this.common={user_list:t.data.result.user_list,inside_organization:t.data.result.inside_organization,outside_organization:t.data.result.outside_organization},this.paginate.total=((g=(y=i.data)==null?void 0:y.result)==null?void 0:g.total_page)*((w=(b=i.data)==null?void 0:b.result)==null?void 0:w.per_page),this.paginate.current_page=(s=(x=i.data)==null?void 0:x.result)==null?void 0:s.current_page,this.paginate.perpage=(C=(m=i.data)==null?void 0:m.result)==null?void 0:C.per_page)},async handleExport(e){var c,a;let o={page:1,payload:this.filter};const l=await S("reportFixStore","cancelReport",{payload:o}),t=M(this.common.user_list,this.common.inside_organization,this.common.outside_organization,(a=(c=l.data)==null?void 0:c.result)==null?void 0:a.data).map(r=>{var g,b,w,x,s,m;const y=this.findUser(this.common.user_list,(g=r==null?void 0:r.cancel_document_history[0])==null?void 0:g.cancel_by);return{initial_number_from:this.convertThaiNo(r==null?void 0:r.initial_number_from)+"/"+this.convertThaiNo((b=r==null?void 0:r.parent_document)==null?void 0:b.initial_number_from),document_number:this.convertThaiNo(r.document_number)+" / "+r.subject,from_id:((w=r.from_user)==null?void 0:w.organization_name)??((x=r.from_user)==null?void 0:x.name)??"-",to_id:((s=r.to_user)==null?void 0:s.full_name)??"-",status:r.status,cancel:((m=r==null?void 0:r.cancel_document_history[0])==null?void 0:m.cancel_reason)+" ยกเลิกโดย : "+y.full_name}});let n=["เลขรับ/ส่ง","เลขที่หนังสือ/เรื่อง","จาก","ถึง","สถานะ","สาเหตุการยกเลิก/ผู้ยกเลิก"];e.id==1?this.exportToWord(t,null,n):e.id==2?this.exportToExcel(t,null,n):e.id==3&&this.exportToPdf(t,null,n)},async saveToArchive(e){return await window.ApexCharts.getChartByID(e).dataURI()},async sendToServer(e,o,l){try{const i=new FormData;i.append("excelFile",e,"downloaded-file.xlsx"),o&&i.append("base64Image",o);const t=await K.post(T+"/fix/convert-to-"+l,i);l==="pdf"?window.open(`${T}/public/tempFile/${t.data.result.data.fileName}.${l}`,"_blank"):window.open(`${T}/public/tempFile/${t.data.result.data.fileName}.${l}`,"_parent","download")}catch(i){console.error("Error sending file to server:",i)}},async exportToExcel(e,o,l){const i=new I.Workbook,t=i.addWorksheet("Sheet1");if(o){const n=i.addImage({base64:o,extension:"png"});t.addImage(n,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(o?20:1).values=l;for(const n of e)t.addRow([n.initial_number_from,n.document_number,n.from_id,n.to_id,n.status,n.cancel]);this.adjustColumnWidth(t),this.setTextCenter(t),i.xlsx.writeBuffer().then(n=>{const c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),a="exported_data.xlsx",r=document.createElement("a");r.href=URL.createObjectURL(c),r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r)})},async exportToWord(e,o,l){const i=new I.Workbook,t=i.addWorksheet("Sheet1");if(o){const a=i.addImage({base64:o,extension:"png"});t.addImage(a,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(o?20:1).values=l;for(const a of e)t.addRow([a.initial_number_from,a.document_number,a.from_id,a.to_id,a.status,a.cancel]);this.adjustColumnWidth(t),this.setTextCenter(t);const n=await i.xlsx.writeBuffer(),c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(c,o,"docx")},async exportToPdf(e,o,l){const i=new I.Workbook,t=i.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},o){const a=i.addImage({base64:o,extension:"png"});t.addImage(a,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(o?18:1).values=l;for(const a of e)t.addRow([a.initial_number_from,a.document_number,a.from_id,a.to_id,a.status,a.cancel]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const n=await i.xlsx.writeBuffer(),c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(c,null,"pdf")},adjustColumnWidth(e){e.columns.forEach(o=>{const l=o.values.map(t=>t.toString().length),i=Math.max(...l.filter(t=>typeof t=="number"));o.width=i*.7})},setTextCenter(e,o=!1){const t=e.lastRow.number;for(let n=0;n<=t;n++){const c=e.getRow(n);c.height=30,c.eachCell({includeEmpty:!0},a=>{o&&(a.font={size:10}),a.alignment={wrapText:!0},a.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}},convertDate(e,o="DD/MM/YYYY"){return e==null?"-":Z(e).locale("th").add(543,"year").format(o)},convertThaiNo(e){return e?(e=e.replace(/1/g,"๑"),e=e.replace(/2/g,"๒"),e=e.replace(/3/g,"๓"),e=e.replace(/4/g,"๔"),e=e.replace(/5/g,"๕"),e=e.replace(/6/g,"๖"),e=e.replace(/7/g,"๗"),e=e.replace(/8/g,"๘"),e=e.replace(/9/g,"๙"),e=e.replace(/0/g,"๐"),e):""}}},ae={class:"report-management"},se={class:"p-6"},ie={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},re={class:"flex flex-wrap sm:flex-nowrap gap-3 basis-full"},le={class:"flex basis-2/5"},ce={class:"flex gap-3"},de={class:"flex items-center"},me=d("span",{class:"px-2"},"Export",-1),pe={class:"flex gap-5 basis-3/5 justify-end"},ue=d("div",{class:"text-center"},[d("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),_e={key:0},fe={key:1},he=d("br",null,null,-1),ge={key:2},be={key:3},we={key:4,class:"text-red-500"},xe={key:5},ye=d("br",null,null,-1),ve={key:6},Ce={class:"py-4 px-3"};function ke(e,o,l,i,t,n){const c=f("Icon"),a=f("Button"),r=f("Dropdown"),y=f("InputGroup"),g=f("AdvancdSearchStatus"),b=f("Pagination"),w=f("vue-good-table"),x=f("Card");return h(),_("div",ae,[p(x,{noborder:"",bodyClass:"p-0"},{default:v(()=>[d("div",se,[d("div",ie,[d("div",re,[d("div",le,[d("div",ce,[p(r,{classMenuItems:"left-0  w-[220px] top-[110%]",items:t.exportLists,onOnClickItem:n.handleExport},{default:v(()=>[p(a,{btnClass:"btn-primary text-slate-50",div:"",iconClass:"text-lg"},{default:v(()=>[d("div",de,[p(c,{icon:"ic:baseline-cloud-download",class:"handle text-[20px]"}),me])]),_:1})]),_:1},8,["items","onOnClickItem"])])]),d("div",pe,[p(y,{modelValue:t.filter.keyword,"onUpdate:modelValue":o[0]||(o[0]=s=>t.filter.keyword=s),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:"",inputEnter:!0,"onEvent:inputEnter":o[1]||(o[1]=s=>n.getData(1))},null,8,["modelValue"]),p(a,{icon:"mdi:filter",text:"ค้นหาขั้นสูง",btnClass:"btn-primary rounded-md",onClick:o[2]||(o[2]=s=>t.isShowModalAS=!t.isShowModalAS)})])])])]),p(g,{isOpen:t.isShowModalAS,"onEvent:close":o[3]||(o[3]=s=>t.isShowModalAS=!1),"onEvent:submit":n.onFilter},null,8,["isOpen","onEvent:submit"]),p(w,{columns:t.columns,styleClass:" vgt-table bordered lesspadding2",rows:t.advancedTable,"pagination-options":{enabled:!0,perPage:t.paginate.perpage},"sort-options":{enabled:!1}},{emptystate:v(()=>[ue]),"table-row":v(s=>{var m,C,R,D,N,E,A,B,P,W,z,j,F;return[s.column.field=="id"?(h(),_("span",_e,u(n.displayInitialNumber(s.row)),1)):s.column.field=="document_number"?(h(),_("span",fe,[k(u((m=s.row)!=null&&m.document_number?n.convertThaiNo((C=s.row)==null?void 0:C.document_number):"-")+" ",1),he,k(" "+u(((R=s.row)==null?void 0:R.subject)??"-"),1)])):s.column.field=="from_id"?(h(),_("span",ge,u(((N=(D=s.row)==null?void 0:D.from_user)==null?void 0:N.organization_name)??((A=(E=s.row)==null?void 0:E.from_user)==null?void 0:A.name)??"-"),1)):s.column.field=="to_id"?(h(),_("span",be,u(((P=(B=s.row)==null?void 0:B.to_user)==null?void 0:P.full_name)??"-"),1)):s.column.field=="status"?(h(),_("span",we,u((W=s.row)==null?void 0:W.status),1)):s.column.field=="cancel"?(h(),_("span",xe,[k(u(((z=s.row)==null?void 0:z.cancel_document_history[0].cancel_reason)??"-")+" ",1),ye,k(" ยกเลิกโดย: "+u(((F=n.findUser(t.common.user_list,(j=s.row)==null?void 0:j.cancel_document_history[0].cancel_by))==null?void 0:F.full_name)??"-"),1)])):(h(),_("span",ve,u(s.row[s.column.field]),1))]}),"pagination-bottom":v(s=>[d("div",Ce,[p(b,{total:t.paginate.total,current:t.paginate.current_page,"per-page":t.paginate.perpage,pageRange:t.paginate.pageRange,onPageChanged:o[4]||(o[4]=m=>n.getData(m)),pageChanged:s.pageChanged,perPageChanged:s.perPageChanged,textAfterInput:"ไปที่หน้า",enableSearch:"",enableInput:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])]),_:1})])}const et=H(ne,[["render",ke]]);export{et as default};
