import{C as B}from"./index-263882d1.js";import{I as D}from"./index-72ee420c.js";import{B as M}from"./index-441935dc.js";import{V as F,C as W}from"./VueSelect-4c8519b3.js";import{M as O}from"./Modal-19eb68c4.js";import{M as E}from"./index-7dc8252b.js";import{R as N}from"./index-3069c0b6.js";import{D as z}from"./index-e3f12ad9.js";import{D as U}from"./index-090a8953.js";import{M as X}from"./index-ffc068ae.js";import{_ as A,a as v,b as V,t as _}from"./index-e058a960.js";import{c as j}from"./appex-chart-e4d84b07.js";import G from"./colors-b45e2c1c.js";import{I as P}from"./index-a60d9262.js";import{T as H}from"./index-31d1a8ca.js";import{C as Y}from"./index-8994827d.js";import{c as J}from"./global-funcs-ef1510cf.js";import{E as h}from"./exceljs.min-46343030.js";import{r as T,w as C}from"./xlsx-92a51129.js";import{C as q}from"./index-2d8ae848.js";import{o as g,x as f,bj as u,aF as m,as as w,p,F as K,aD as Q,m as Z,aT as I}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";import"./transition-39b574f4.js";import"./dom-891ac6c3.js";import"./hidden-11a9ab9d.js";import"./focus-management-e6c5d1fd.js";import"./micro-task-89dcd6af.js";import"./open-closed-486d85f0.js";import"./use-outside-click-a758fdce.js";import"./index-1b218db3.js";import"./index-6c8c0d73.js";import"./use-resolve-button-type-38f1f99a.js";import"./vue-cleave.min-9e1201c2.js";import"./ck-white-7280cd79.js";const $={computed:{columnChart(){return j}},components:{CFlatPickr:q,Checkbox:Y,Textinput:H,InputGroup:P,ModalGraph:X,Dropdown:U,DatePickerRange:z,Radio:N,Icon:D,Button:M,Card:B,VueSelect:F,vSelect:W,Modal:O,ModalSuccess:E},data(){return{exportLists:[{id:1,label:"Microsoft Word",icon:"ant-design:file-word-filled"},{id:2,label:"Microsoft Excel",icon:"ant-design:file-excel-filled"},{id:3,label:"PDF",icon:"ant-design:file-pdf-filled"},{id:4,label:"RTF",icon:"grommet-icons:document-rtf"},{id:5,label:"HTML",icon:"bxs:file-html"}],filter:{bookType:1,date_start:"",date_end:"",agency:null},datepicker:"",bookTypeList:[{id:1,title:"ทั้งหมด"},{id:2,title:"หนังสือภายนอก"},{id:3,title:"หนังสือภายใน"}],agencyItem:[],item:{},dataTable:[],dataGraph:[],viewColumnName:[],dateMulti:[],columns:[{label:"หน่วยงาน",field:"organization_id",width:"70%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนค้างรับ",field:"rev",width:"10%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนค้างส่ง",field:"send",width:"10%",tdClass:"text_left",thClass:"text_left"}]}},watch:{datepicker:{handler:function(o,e){},deep:!0},dateMulti:{handler:function(o){typeof o=="object"&&this.getData()},deep:!0}},async created(){await this.getData()},methods:{onFilter(){},async getData(){var n,a,t,r,d,s,i;this.dateMulti.length>0&&(this.filter.date_start=this.dateMulti[0],this.filter.date_end=this.dateMulti[1]);const o=await v("reportFixStore","summaryOutstanding",{payload:this.filter}),e=await v("reportDashboardStore","getCommonData");this.dataGraph=[],(n=e==null?void 0:e.data.result)!=null&&n.dropdown&&(this.agencyItem=(a=e==null?void 0:e.data.result)==null?void 0:a.dropdown),(t=o.data)!=null&&t.result&&(this.dataTable=(d=(r=o.data)==null?void 0:r.result)==null?void 0:d.dataTable,this.dataGraph.push(this.generateGraph((i=(s=o.data)==null?void 0:s.result)==null?void 0:i.dataGraph,this.agencyItem)))},generateGraph(o,e){o.dataLabel=J(e,o.dataLabel);const n=o.id,a=o.name,t=o.chartType;let r;r=o.data;const d={chart:{id:"custom_chart_0",type:o.chartType,toolbar:{show:!1}},dataLabels:{enabled:o.showLabel},stroke:{curve:"straight"},markers:{size:o.markers?4:0,colors:"#fff",strokeColors:G.primary,strokeWidth:2,shape:"circle",radius:2,hover:{sizeOffset:1}},labels:o.dataLabel,legend:{itemMargin:{vertical:5},width:200,offsetX:10,offsetY:60,formatter:function(s,i){let c=parseFloat(i.w.globals.series[i.seriesIndex]/i.w.globals.series.reduce((x,b)=>x+b,0)*100).toFixed(2)+"%";return s+" "+c}},xaxis:{labels:{rotate:300}},yaxis:[{min:0,tickAmount:10}],plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"40px",offsetY:15,formatter:function(s){return s}},total:{show:!0,label:"",color:"#373d3f",formatter:function(s){return s.globals.series.reduce((i,c)=>i+c,0)}}}}}},noData:{text:"No data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{fontSize:"40px"}}};return{id:n,name:a,series:r,options:d,chartType:t}},findOrganizationName(o){const e=this.agencyItem.find(n=>n.id===parseInt(o));return e?e.organization_name:"ไม่ทราบ"},async handleExport(o){const e=this.dataTable.map(t=>({name:this.findOrganizationName(t.organization_id),rev:t.rev,send:t.send})),n=await this.saveToArchive("custom_chart_0");let a=["หน่วยงาน","จำนวนค้างรับ","จำนวนค้างส่ง"];console.log("item",o),o.id==1?this.exportToWord(e,n.imgURI,a):o.id==2?this.exportToExcel(e,n.imgURI,a):o.id==3?this.exportToPdf(e,n.imgURI,a):o.id==4?this.exportToRtf(e,"",a):o.id==5&&this.exportToHtml(e,"",a)},async saveToArchive(o){return await window.ApexCharts.getChartByID(o).dataURI()},async sendToServer(o,e,n){try{const a=new FormData;a.append("excelFile",o,"downloaded-file.xlsx"),e&&a.append("base64Image",e);const t=await V.post(_+"/fix/convert-to-"+n,a);n==="pdf"?window.open(`${_}/public/tempFile/${t.data.result.data.fileName}.${n}`,"_blank"):window.open(`${_}/public/tempFile/${t.data.result.data.fileName}.${n}`,"_parent","download")}catch(a){console.error("Error sending file to server:",a)}},async exportToExcel(o,e,n){const a=new h.Workbook,t=a.addWorksheet("Sheet1");if(e){const r=a.addImage({base64:e,extension:"png"});t.addImage(r,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(e?12:1).values=n;for(const r of o)t.addRow([r.name,r.rev,r.send]);this.adjustColumnWidth(t),this.setTextCenter(t),a.xlsx.writeBuffer().then(r=>{const d=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),s="exported_data.xlsx",i=document.createElement("a");i.href=URL.createObjectURL(d),i.download=s,document.body.appendChild(i),i.click(),document.body.removeChild(i)})},async exportToWord(o,e,n){const a=new h.Workbook,t=a.addWorksheet("Sheet1");if(e){const s=a.addImage({base64:e,extension:"png"});t.addImage(s,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(e?12:1).values=n;for(const s of o)t.addRow([s.name,s.rev,s.send]);this.adjustColumnWidth(t),this.setTextCenter(t);const r=await a.xlsx.writeBuffer(),d=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(d,e,"docx")},async exportToPdf(o,e,n){const a=new h.Workbook,t=a.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const s=a.addImage({base64:e,extension:"png"});t.addImage(s,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?12:1).values=n;for(const s of o)t.addRow([s.name,s.rev,s.send]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const r=await a.xlsx.writeBuffer(),d=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(d,null,"pdf")},async convertXLSXToRTF(o){const e=new ArrayBuffer(o.length);new Uint8Array(e).set(o);const a=T(e);return C(a,{sheet:0,bookType:"rtf",type:"buffer"})},async convertXLSXToHTML(o){console.log("convertXLSXToHTML");const e=new ArrayBuffer(o.length);new Uint8Array(e).set(o);const a=T(e),t={sheet:0,bookType:"html",type:"buffer"};return console.log("convertXLSXToHTML end"),C(a,t)},async exportToRtf(o,e,n){const a=new h.Workbook,t=a.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const c=a.addImage({base64:e,extension:"png"});t.addImage(c,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?12:1).values=n;for(const c of o)t.addRow([c.name,c.rev,c.send]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const r=await a.xlsx.writeBuffer();let d=await this.convertXLSXToRTF(r);const s=new Blob([d],{type:"application/rtf"}),i=document.createElement("a");i.href=window.URL.createObjectURL(s),i.download="rtf_report.rtf",i.click()},async exportToHtml(o,e,n){const a=new h.Workbook,t=a.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const c=a.addImage({base64:e,extension:"png"});t.addImage(c,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?12:1).values=n;for(const c of o)t.addRow([c.name,c.rev,c.send]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const r=await a.xlsx.writeBuffer();let d=await this.convertXLSXToHTML(r);const s=new Blob([d],{type:"application/html"}),i=document.createElement("a");i.href=window.URL.createObjectURL(s),i.download="html_report.html",i.click()},adjustColumnWidth(o){o.columns.forEach(e=>{const n=e.values.map(t=>t.toString().length),a=Math.max(...n.filter(t=>typeof t=="number"));e.width=a*.7})},setTextCenter(o,e=!1){const t=o.lastRow.number;for(let r=0;r<=t;r++){const d=o.getRow(r);d.height=30,d.eachCell({includeEmpty:!0},s=>{e&&(s.font={size:10}),s.alignment={wrapText:!0},s.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}}}},ee={class:"report-management"},te=p("div",{class:"md:flex justify-between p-6 md:space-y-0 space-y-3 items-center border-b-2"},[p("div",null,[p("span",null,"สถิติจํานวนเรื่อง ค้างรับ, ค้างส่ง")])],-1),oe={class:"flex flex-row-between p-6"},ae={class:"flex basis-1/5"},se={class:"flex gap-3"},ne={class:"flex items-center"},re=p("span",{class:"px-2"},"Export",-1),ie={class:"flex basis-4/5 gap-3"},le={class:"basis-full"},de={class:"basis-full"},ce={class:"basis-full"},pe={class:"my-5 px-6"},fe=p("div",{class:"text-center"},[p("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),me={key:0},ue={key:1};function he(o,e,n,a,t,r){const d=m("Icon"),s=m("Button"),i=m("Dropdown"),c=m("CFlatPickr"),x=m("DatePickerRange"),b=m("vSelect"),y=m("VueSelect"),R=m("apexchart"),k=m("Card"),S=m("vue-good-table");return w(),g("div",ee,[f(k,{noborder:"",bodyClass:"two-side-card"},{default:u(()=>[te,p("div",oe,[p("div",ae,[p("div",se,[f(i,{classMenuItems:"left-0  w-[220px] top-[110%]",items:t.exportLists,onOnClickItem:r.handleExport},{default:u(()=>[f(s,{btnClass:"btn-primary text-slate-50",div:"",iconClass:"text-lg"},{default:u(()=>[p("div",ne,[f(d,{icon:"ic:baseline-cloud-download",class:"handle text-[20px]"}),re])]),_:1})]),_:1},8,["items","onOnClickItem"])])]),p("div",ie,[p("div",le,[f(x,null,{default:u(()=>[f(c,{onOnChange:e[0]||(e[0]=l=>t.dateMulti=l),config:{mode:"range"}})]),_:1})]),p("div",de,[f(y,{classInput:"input_color"},{default:u(()=>[f(b,{modelValue:t.filter.bookType,"onUpdate:modelValue":e[1]||(e[1]=l=>t.filter.bookType=l),label:"title",class:"input_color border rounded",reduce:l=>l.id,options:t.bookTypeList,"onOption:selected":e[2]||(e[2]=l=>r.getData())},null,8,["modelValue","reduce","options"])]),_:1})]),p("div",ce,[f(y,{classInput:"input_color"},{default:u(()=>[f(b,{modelValue:t.filter.agency,"onUpdate:modelValue":e[3]||(e[3]=l=>t.filter.agency=l),placeholder:"หน่วยงานทั้งหมด",label:"organization_name",class:"input_color border rounded",reduce:l=>l.id,options:t.agencyItem,"onOption:selected":e[4]||(e[4]=l=>r.getData())},null,8,["modelValue","reduce","options"])]),_:1})])])]),p("div",pe,[f(k,null,{default:u(()=>[(w(!0),g(K,null,Q(t.dataGraph,(l,L)=>(w(),Z(R,{key:L,type:l.chartType,height:"360",width:"100%",options:l.options,series:l.series},null,8,["type","options","series"]))),128))]),_:1})]),f(S,{columns:t.columns,styleClass:" vgt-table bordered mb-6",rows:t.dataTable,"pagination-options":{enabled:!1},"sort-options":{enabled:!1}},{emptystate:u(()=>[fe]),"table-row":u(l=>[l.column.field=="organization_id"?(w(),g("div",me,I(r.findOrganizationName(l.row[l.column.field])),1)):(w(),g("div",ue,I(l.row[l.column.field]),1))]),_:1},8,["columns","rows"])]),_:1})])}const Ke=A($,[["render",he]]);export{Ke as default};
