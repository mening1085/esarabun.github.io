import{C as S}from"./index-cb5a08aa.js";import{I as L}from"./index-8d30ace7.js";import{B}from"./index-c2d6eb9c.js";import{V as D,C as W}from"./VueSelect-403231fd.js";import{M as F}from"./Modal-b54f1b5f.js";import{M}from"./index-8e7d66d6.js";import{R as V}from"./index-e163c14d.js";import{D as E}from"./index-43a31f90.js";import{D as U}from"./index-976a2577.js";import{M as A}from"./index-28033082.js";import{_ as X,a as g,b as j,t as y}from"./index-f91482a0.js";import{c as N}from"./appex-chart-e4d84b07.js";import O from"./colors-b4acbf58.js";import{I as G}from"./index-2198f2cf.js";import{T as H}from"./index-3e8503e7.js";import{C as Y}from"./index-325a54cb.js";import{E as _}from"./exceljs.min-7d2227ea.js";import{r as v,w as T}from"./xlsx-92a51129.js";import{o as k,x as m,bj as u,aF as b,as as w,p,F as z,aD as P,m as J,aT as I}from"./preload-helper-f37a9bec.js";import"./iconify-2baafea4.js";import"./transition-be7c09bc.js";import"./dom-b10fc197.js";import"./hidden-800255f5.js";import"./focus-management-94a631f4.js";import"./micro-task-89dcd6af.js";import"./open-closed-75edfb8a.js";import"./use-outside-click-156e41c1.js";import"./index-b704274e.js";import"./index-f2da45ff.js";import"./use-resolve-button-type-d7bee841.js";import"./vue-cleave.min-df5c8cc9.js";import"./ck-white-3501111f.js";const q={computed:{columnChart(){return N}},components:{Checkbox:Y,Textinput:H,InputGroup:G,ModalGraph:A,Dropdown:U,DatePickerRange:E,Radio:V,Icon:L,Button:B,Card:S,VueSelect:D,vSelect:W,Modal:F,ModalSuccess:M},data(){return{exportLists:[{id:1,label:"Microsoft Word",icon:"ant-design:file-word-filled"},{id:2,label:"Microsoft Excel",icon:"ant-design:file-excel-filled"},{id:3,label:"PDF",icon:"ant-design:file-pdf-filled"},{id:4,label:"RTF",icon:"grommet-icons:document-rtf"},{id:5,label:"HTML",icon:"bxs:file-html"}],filter:{bookType:1,month:new Date().getMonth()+1,year:"",agency:null},bookTypeList:[{id:1,title:"ทั้งหมด"},{id:2,title:"หนังสือภายนอก"},{id:3,title:"หนังสือภายใน"}],MonthList:[{id:0,title:"ทั้งหมด"},{id:1,title:"เดือน มกราคม"},{id:2,title:"เดือน กุมภาพันธ์"},{id:3,title:"เดือน มีนาคม"},{id:4,title:"เดือน เมษายน"},{id:5,title:"เดือน พฤษภาคม"},{id:6,title:"เดือน มิถุนายน"},{id:7,title:"เดือน กรกฎาคม"},{id:8,title:"เดือน สิงหาคม"},{id:9,title:"เดือน กันยายน"},{id:10,title:"เดือน ตุลาคม"},{id:11,title:"เดือน พฤศจิกายน"},{id:12,title:"เดือน ธันวาคม"}],yearItem:[],agencyItem:[],item:{},dataTable:[],dataGraph:[],viewColumnName:[],columns:[{label:"เดือน",field:"month",width:"20%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนหนังสือรับ",field:"book_rev",width:"20%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนออกเลขรับ",field:"book_rev_number",width:"20%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนสร้างหนังสือส่ง",field:"book_send",width:"20%",tdClass:"text_left",thClass:"text_left"},{label:"จำนวนออกเลขรับ",field:"book_send_number",width:"20%",tdClass:"text_left",thClass:"text_left"}]}},watch:{},async created(){await this.getData(),this.filter.year=new Date().getFullYear()},methods:{onFilter(){},async getData(){var n,s,t,a,d,l,r;const o=await g("reportFixStore","statisticsCreate",{payload:this.filter}),e=await g("reportDashboardStore","getCommonData");this.generateYearItems(),this.dataGraph=[],(n=e==null?void 0:e.data.result)!=null&&n.dropdown&&(this.agencyItem=(s=e==null?void 0:e.data.result)==null?void 0:s.dropdown),(t=o.data)!=null&&t.result&&(this.dataTable=(d=(a=o.data)==null?void 0:a.result)==null?void 0:d.dataTable,this.dataGraph.push(this.generateGraph((r=(l=o.data)==null?void 0:l.result)==null?void 0:r.dataGraph)))},generateYearItems(){const o=new Date().getFullYear(),e=[];for(let n=0;n<10;n++){const s={title:o-n+543,value:o-n};e.push(s)}this.yearItems=e},generateGraph(o){const e=o.id,n=o.name,s=o.chartType;let t;t=o.data;const a={chart:{id:"custom_chart_0",type:o.chartType,toolbar:{show:!1}},dataLabels:{enabled:o.showLabel},stroke:{curve:"straight"},markers:{size:o.markers?4:0,colors:"#fff",strokeColors:O.primary,strokeWidth:2,shape:"circle",radius:2,hover:{sizeOffset:1}},labels:o.dataLabel,legend:{formatter:function(d,l){let r=0;l.w.globals.series.forEach(f=>{r+=f.reduce((h,x)=>h+x,0)});let c=parseFloat(l.w.globals.series[l.seriesIndex].reduce((f,h)=>f+h,0)/r*100).toFixed(2)+"%";return d+c}},xaxis:{labels:{rotate:300}},yaxis:[{min:0,tickAmount:10}],plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"40px",offsetY:15,formatter:function(d){return d}},total:{show:!0,label:"",color:"#373d3f",formatter:function(d){return d.globals.series.reduce((l,r)=>l+r,0)}}}}}},noData:{text:"No data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{fontSize:"40px"}}};return{id:e,name:n,series:t,options:a,chartType:s}},async handleExport(o){const e=this.dataTable.map(t=>({month:t.name,book_rev:t.book_rev,book_rev_number:t.book_rev_number,book_send:t.book_send,book_send_number:t.book_send_number})),n=await this.saveToArchive("custom_chart_0");let s=["เดือน","จำนวนหนังสือรับ","จำนวนออกเลขรับ","จำนวนสร้างหนังสือส่ง","จำนวนออกเลขรับ"];o.id==1?this.exportToWord(e,n.imgURI,s):o.id==2?this.exportToExcel(e,n.imgURI,s):o.id==3?this.exportToPdf(e,n.imgURI,s):o.id==4?this.exportToRtf(e,"",s):o.id==5&&this.exportToHtml(e,"",s)},async saveToArchive(o){return await window.ApexCharts.getChartByID(o).dataURI()},async sendToServer(o,e,n){try{const s=new FormData;s.append("excelFile",o,"downloaded-file.xlsx"),e&&s.append("base64Image",e);const t=await j.post(y+"/fix/convert-to-"+n,s);n==="pdf"?window.open(`${y}/public/tempFile/${t.data.result.data.fileName}.${n}`,"_blank"):window.open(`${y}/public/tempFile/${t.data.result.data.fileName}.${n}`,"_parent","download")}catch(s){console.error("Error sending file to server:",s)}},async exportToExcel(o,e,n){const s=new _.Workbook,t=s.addWorksheet("Sheet1");if(e){const a=s.addImage({base64:e,extension:"png"});t.addImage(a,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(e?25:1).values=n;for(const a of o)t.addRow([a.month,a.book_rev,a.book_rev_number,a.book_send,a.book_send_number]);this.adjustColumnWidth(t),this.setTextCenter(t),s.xlsx.writeBuffer().then(a=>{const d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l="exported_data.xlsx",r=document.createElement("a");r.href=URL.createObjectURL(d),r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r)})},async exportToWord(o,e,n){const s=new _.Workbook,t=s.addWorksheet("Sheet1");if(e){const l=s.addImage({base64:e,extension:"png"});t.addImage(l,{tl:{col:0,row:0},ext:{width:1600,height:380}})}t.getRow(e?20:1).values=n;for(const l of o)t.addRow([l.month,l.book_rev,l.book_rev_number,l.book_send,l.book_send_number]);this.adjustColumnWidth(t),this.setTextCenter(t);const a=await s.xlsx.writeBuffer(),d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(d,e,"docx")},async exportToPdf(o,e,n){const s=new _.Workbook,t=s.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const r=s.addImage({base64:e,extension:"png"});t.addImage(r,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?25:1).values=n;for(const r of o)t.addRow([r.month,r.book_rev,r.book_rev_number,r.book_send,r.book_send_number]);const a=this.adjustColumnWidth(t);this.setTextCenter(t,!0,a);const d=await s.xlsx.writeBuffer(),l=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});await this.sendToServer(l,e,"pdf")},async convertXLSXToRTF(o){const e=new ArrayBuffer(o.length);new Uint8Array(e).set(o);const s=v(e);return T(s,{sheet:0,bookType:"rtf",type:"buffer"})},async convertXLSXToHTML(o){console.log("convertXLSXToHTML");const e=new ArrayBuffer(o.length);new Uint8Array(e).set(o);const s=v(e),t={sheet:0,bookType:"html",type:"buffer"};return console.log("convertXLSXToHTML end"),T(s,t)},async exportToRtf(o,e,n){const s=new _.Workbook,t=s.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const c=s.addImage({base64:e,extension:"png"});t.addImage(c,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?12:1).values=n;for(const c of o)t.addRow([c.month,c.book_rev,c.book_rev_number,c.book_send,c.book_send_number]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const a=await s.xlsx.writeBuffer();let d=await this.convertXLSXToRTF(a);const l=new Blob([d],{type:"application/rtf"}),r=document.createElement("a");r.href=window.URL.createObjectURL(l),r.download="rtf_report.rtf",r.click()},async exportToHtml(o,e,n){const s=new _.Workbook,t=s.addWorksheet("Sheet1");if(t.pageSetup={orientation:"landscape"},e){const c=s.addImage({base64:e,extension:"png"});t.addImage(c,{tl:{col:0,row:0},ext:{width:600,height:300}})}t.getRow(e?12:1).values=n;for(const c of o)t.addRow([c.month,c.book_rev,c.book_rev_number,c.book_send,c.book_send_number]);this.adjustColumnWidth(t),this.setTextCenter(t,!0);const a=await s.xlsx.writeBuffer();let d=await this.convertXLSXToHTML(a);const l=new Blob([d],{type:"application/html"}),r=document.createElement("a");r.href=window.URL.createObjectURL(l),r.download="html_report.html",r.click()},adjustColumnWidth(o){let e=[];return o.columns.forEach(n=>{const s=n.values.map(a=>a.toString().length),t=Math.max(...s.filter(a=>typeof a=="number"));e.push(t),n.width=t<20?t*.7:20}),Math.max(...e.filter(n=>typeof n=="number"))},setTextCenter(o,e=!1,n=20){const a=o.lastRow.number;for(let d=0;d<=a;d++){const l=o.getRow(d);l.height=n/20*12,l.eachCell({includeEmpty:!0},r=>{e&&(r.font={size:10}),r.alignment={wrapText:!0},r.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}}}},K={class:"report-management"},Q=p("div",{class:"md:flex justify-between p-6 md:space-y-0 space-y-3 items-center border-b-2"},[p("div",null,[p("span",null,"สถิติการสร้างหนังสือ, ออกเลข")])],-1),Z={class:"flex flex-row-between p-6"},$={class:"flex basis-1/5"},ee={class:"flex gap-3"},te={class:"flex items-center"},oe=p("span",{class:"px-2"},"Export",-1),se={class:"flex basis-4/5 gap-3"},ne={class:"basis-full"},re={class:"basis-full"},ae={class:"basis-full"},le={class:"basis-full"},ie={class:"my-5 px-6"},de=p("div",{class:"text-center"},[p("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),ce={key:0},pe={key:1};function me(o,e,n,s,t,a){const d=b("Icon"),l=b("Button"),r=b("Dropdown"),c=b("vSelect"),f=b("VueSelect"),h=b("apexchart"),x=b("Card"),C=b("vue-good-table");return w(),k("div",K,[m(x,{noborder:"",bodyClass:"two-side-card"},{default:u(()=>[Q,p("div",Z,[p("div",$,[p("div",ee,[m(r,{classMenuItems:"left-0  w-[220px] top-[110%]",items:t.exportLists,onOnClickItem:a.handleExport},{default:u(()=>[m(l,{btnClass:"btn-primary text-slate-50",div:"",iconClass:"text-lg"},{default:u(()=>[p("div",te,[m(d,{icon:"ic:baseline-cloud-download",class:"handle text-[20px]"}),oe])]),_:1})]),_:1},8,["items","onOnClickItem"])])]),p("div",se,[p("div",ne,[m(f,{classInput:"input_color"},{default:u(()=>[m(c,{modelValue:t.filter.bookType,"onUpdate:modelValue":e[0]||(e[0]=i=>t.filter.bookType=i),label:"title",class:"input_color border rounded",reduce:i=>i.id,options:t.bookTypeList,"onOption:selected":e[1]||(e[1]=i=>a.getData())},null,8,["modelValue","reduce","options"])]),_:1})]),p("div",re,[m(f,{classInput:"input_color"},{default:u(()=>[m(c,{modelValue:t.filter.month,"onUpdate:modelValue":e[2]||(e[2]=i=>t.filter.month=i),label:"title",class:"input_color border rounded",reduce:i=>i.id,options:t.MonthList,"onOption:selected":e[3]||(e[3]=i=>a.getData())},null,8,["modelValue","reduce","options"])]),_:1})]),p("div",ae,[m(f,{classInput:"input_color"},{default:u(()=>[m(c,{modelValue:t.filter.year,"onUpdate:modelValue":e[4]||(e[4]=i=>t.filter.year=i),label:"title",class:"input_color border rounded",reduce:i=>i.value,options:o.yearItems,"onOption:selected":e[5]||(e[5]=i=>a.getData())},null,8,["modelValue","reduce","options"])]),_:1})]),p("div",le,[m(f,{classInput:"input_color"},{default:u(()=>[m(c,{modelValue:t.filter.agency,"onUpdate:modelValue":e[6]||(e[6]=i=>t.filter.agency=i),placeholder:"หน่วยงานทั้งหมด",label:"organization_name",class:"input_color border rounded",reduce:i=>i.id,options:t.agencyItem,"onOption:selected":e[7]||(e[7]=i=>a.getData())},null,8,["modelValue","reduce","options"])]),_:1})])])]),p("div",ie,[m(x,null,{default:u(()=>[(w(!0),k(z,null,P(t.dataGraph,(i,R)=>(w(),J(h,{key:R,type:i.chartType,height:"360",width:"100%",options:i.options,series:i.series},null,8,["type","options","series"]))),128))]),_:1})]),m(C,{columns:t.columns,styleClass:" vgt-table bordered mb-6",rows:t.dataTable,"pagination-options":{enabled:!1},"sort-options":{enabled:!1}},{emptystate:u(()=>[de]),"table-row":u(i=>[i.column.field=="month"?(w(),k("div",ce,I(i.row.name),1)):(w(),k("div",pe,I(i.row[i.column.field]),1))]),_:1},8,["columns","rows"])]),_:1})])}const Ye=X(q,[["render",me]]);export{Ye as default};