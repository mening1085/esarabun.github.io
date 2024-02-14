import{C as U}from"./index-8994827d.js";import{T as H}from"./index-31d1a8ca.js";import{M as Q}from"./index-1b218db3.js";import{C as Z}from"./index-263882d1.js";import{R as A}from"./index-3069c0b6.js";import{B as q}from"./index-441935dc.js";import{N as J}from"./Nested-Draggable-da3fb649.js";import{_ as P,a as W,u as X}from"./index-e058a960.js";import{d as $}from"./dayjs.min-72c81edc.js";import{u as ee,w as le,a as ae}from"./xlsx-92a51129.js";import{k as oe,aA as v,al as te,be as ne,o as c,x as i,bj as w,m as Y,n as B,aF as h,as as s,p as a,F as g,aD as C,aT as j,w as S,aw as de,at as ie}from"./preload-helper-9e0646ca.js";import"./ck-white-7280cd79.js";import"./index-72ee420c.js";import"./iconify-4e42c13d.js";import"./vue-cleave.min-9e1201c2.js";import"./transition-39b574f4.js";import"./dom-891ac6c3.js";import"./hidden-11a9ab9d.js";import"./focus-management-e6c5d1fd.js";import"./micro-task-89dcd6af.js";import"./open-closed-486d85f0.js";import"./use-outside-click-a758fdce.js";import"./vuedraggable.umd-5ad09969.js";const se={components:{Checkbox:U,Modal:Q,Textinput:H,Card:Z,Radio:A,Button:q,NestedDraggable:J},watch:{fieldModel(u){u&&(this.fieldColumn=u.map(o=>({name:o.value,field:o.field})))},groupModel(u){u&&this.groupColumn[0]&&(this.groupColumn[0].children=u.map(o=>({name:o.value,field:o.field})))}},setup(){const u=oe(()=>m.value.map(e=>e.children&&e.children.length>0?{name:e.children.map(t=>t.name).join("/"),field:e.children.map(t=>t.field)}:{name:e.name,field:[e.field]})),o=X(),F=v([]),l=v([]),y=v([]),T=v(!1),x=v(!1),m=v([{name:"เลขรับ",field:"initial_number_to"},{id:"HKLgzQ4OYC_1700757587430",name:"กลุ่ม (แสดง 2 บรรทัด)",children:[{name:"เลขที่หนังสือ",field:"document_number",id:"HKLgzQ4OYC_1700757587430"},{name:"เรื่อง",field:"subject",id:"HKLgzQ4OYC_1700757587430"}]},{name:"วันที่ลงในหนังสือ",field:"document_date"},{name:"จาก",field:"from_data"},{name:"ถึง",field:"to_data"},{id:"mTKiRMYmZO_1700757626347",name:"กลุ่ม (แสดง 2 บรรทัด)",children:[{name:"วันที่เวลารับ",field:"date_pickup",id:"mTKiRMYmZO_1700757626347"},{name:"ผู้รับ",field:"recipient",id:"mTKiRMYmZO_1700757626347"}]}]),f=v([]),V=v([]),N=v(""),D=v([{field:"book_type",value:"ประเภทหนังสือ",label:"ประเภทหนังสือ"},{field:"document_type",value:"ประเภทเอกสาร",label:"ประเภทเอกสาร"},{field:"year",value:"ปี",label:"ปี"},{field:"document_number",value:"เลขที่หนังสือ",label:"เลขที่หนังสือ"},{field:"initial_number_from",value:"เลขส่ง",label:"เลขส่ง"},{field:"initial_number_to",value:"เลขรับ",label:"เลขรับ"},{field:"document_date",value:"วันที่ลงในหนังสือ",label:"วันที่ลงในหนังสือ"},{field:"from_data",value:"จาก",label:"จาก"},{field:"to_data",value:"ถึง",label:"ถึง"},{field:"subject",value:"เรื่อง",label:"เรื่อง"},{field:"attn",value:"เรียน",label:"เรียน"},{field:"objective",value:"วัตถุประสงค์",label:"วัตถุประสงค์"},{field:"document_format",value:"รูปแบบหนังสือ",label:"รูปแบบหนังสือ"},{field:"urgency_level",value:"ชั้นความเร็ว",label:"ชั้นความเร็ว"},{field:"secrecy_level",value:"ชั้นความลับ",label:"ชั้นความลับ"},{field:"document_attachments",value:"เอกสารแนบ",label:"เอกสารแนบ"},{field:"ref_document",value:"หนังสืออ้างอิงถึง",label:"หนังสืออ้างอิงถึง"},{field:"follow_up_date",value:"ติดตามหนังสือ",label:"ติดตามหนังสือ"},{field:"ref_user",value:"ผู้ปฏิบัติราชการแทน",label:"ผู้ปฏิบัติราชการแทน"},{field:"date_pickup",value:"วันที่เวลารับ",label:"วันที่เวลารับ"},{field:"date_send",value:"วันที่เวลาส่ง",label:"วันที่เวลาส่ง"},{field:"recipient",value:"ผู้รับ",label:"ผู้รับ"},{field:"sender",value:"ผู้ส่ง",label:"ผู้ส่ง"}]);te(async()=>{let e={ids:o.currentRoute.value.query.id.split(",").map(r=>parseInt(r))};console.log("payload",e);const{data:t,status:d}=await W("sarabunStore","getData",{payload:e});d==200&&(console.log("data",t),f.value=t.result)});const E=()=>{const e=[];f.value.forEach(r=>{u.value.forEach(b=>{console.log(b.field),e.push({[b.name]:n(r,b.field)})})}),console.log(e);var t=document.getElementById("tblToExcl"),d=ee.table_to_book(t,{sheet:"sheet1"});le(d,{bookType:"xlsx",bookSST:!0,type:"base64"}),ae(d,"report.xlsx")},n=(e,t)=>{let d="";return t.forEach(r=>{d+=e[r]}),d},_=()=>{l.value=[],F.value=[],y.value=[],V.value=[]},p=()=>{T.value=!1,x.value=!1,_()},O=()=>{x.value=!0},k=e=>{},I=()=>{T.value=!0,l.value.push({name:"กลุ่ม (แสดง 2 บรรทัด)",children:[]})},L=()=>{if(y.value.length!==0)y.value.forEach(e=>{m.value.push(e)});else if(l.value.length!==0){const e=R();m.value.push({id:e,name:"กลุ่ม (แสดง 2 บรรทัด)",children:l.value[0].children.map(t=>({...t,id:e}))})}p()},R=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let d=0;d<10;d++){const r=Math.floor(Math.random()*e.length);t+=e.charAt(r)}return t+=`_${Date.now()}`,t},K=e=>{let t=!1;const d=m.value.findIndex(r=>{if(e.id!==void 0&&e.id===r.id&&e.name!=="กลุ่ม (แสดง 2 บรรทัด)"){const b=r.children.findIndex(G=>(t=!0,e.name===G.name));return b!==-1&&r.children.splice(b,1),!0}else if(e.id===void 0&&e.name===r.name||e.name==="กลุ่ม (แสดง 2 บรรทัด)"&&e.id!==void 0&&e.id===r.id)return!0;return!1});!t&&d!==-1&&m.value.splice(d,1)},z=e=>e?$(e).locale("th").add(543,"year").format("DD/MMM/YYYY"):"-";return ne(m,(e,t)=>{e&&e.forEach(d=>{if(d.children){const r=R();d.id=r,d.children.forEach(b=>{b.id=r})}})}),{viewNumberType:N,advancedTable:f,resultColumn:m,modalField:x,fieldList:D,removeFieldItem:K,addField:O,addGroup:I,addResultColumn:L,clearColumnValue:_,closeModal:p,modalGroup:T,fieldModel:V,fieldColumn:y,groupColumn:l,groupModel:F,resultColumns:u,generateToken:R,convertDateTime:z,getField:k,genExcel:E}}},M=u=>(de("data-v-e76f1a05"),u=u(),ie(),u),re={class:"space-y-8"},ce={class:"flex px-20"},ue=M(()=>a("div",{class:"basis-1/4 text-start"},"การแสดงตัวเลข",-1)),me={class:"basis-3/4"},fe={class:"flex gap-10 justify-strat"},_e=M(()=>a("div",{class:"px-20 pb-7"},"ตัวอย่างการแสดงผล Column ข้อมูล",-1)),ve={class:"overflow-scroll pb-6 mt-4 sendOut-table"},pe={class:"w-full min-w-[600px]",id:"tblToExcl"},be={key:0},he={key:1},xe={class:"flex gap-3"},ge={class:"draggable-frame"},Ce={class:"flex flex-col gap-3"},ye=M(()=>a("hr",{class:"mt-5 border"},null,-1)),ke={class:"flex justify-center"},we={class:"flex gap-3"},Me={class:"flex-1 max-w-[45%]"},Te={class:"flex flex-col gap-3"},Ve={class:"column-viewer"},Ne=M(()=>a("hr",{class:"my-3"},null,-1)),De={class:"flex gap-3 justify-center w-[100%]"},Ee={class:"flex gap-3"},Fe={class:"flex-1 max-w-[45%]"},Oe={class:"flex flex-col gap-3"},Ie={class:"column-viewer"},Re=M(()=>a("hr",{class:"my-3"},null,-1)),je={class:"flex gap-3 justify-center w-[100%]"};function Ye(u,o,F,l,y,T){const x=h("Radio"),m=h("NestedDraggable"),f=h("Button"),V=h("Card"),N=h("Textinput"),D=h("Checkbox"),E=h("Modal");return s(),c("div",null,[i(V,{title:"ส่งออกรายงาน",className:"border-secondary-500 border-1",bodyClass:"p-10 pb-5",noborder:""},{default:w(()=>[a("div",re,[a("div",ce,[ue,a("div",me,[a("div",fe,[i(x,{modelValue:l.viewNumberType,"onUpdate:modelValue":o[0]||(o[0]=n=>l.viewNumberType=n),label:"เลขไทย",value:"เลขไทย"},null,8,["modelValue"]),i(x,{modelValue:l.viewNumberType,"onUpdate:modelValue":o[1]||(o[1]=n=>l.viewNumberType=n),label:"เลขอารบิค",value:"เลขอารบิค"},null,8,["modelValue"])])])]),_e,a("div",ve,[a("table",pe,[a("tr",null,[(s(!0),c(g,null,C(l.resultColumns,(n,_)=>(s(),c("th",{key:_},j(n.name),1))),128))]),(s(!0),c(g,null,C(l.advancedTable,(n,_)=>(s(),c("tr",{key:_},[(s(!0),c(g,null,C(l.resultColumns,(p,O)=>(s(),c("td",{key:O},[(s(!0),c(g,null,C(p.field,(k,I)=>(s(),c("div",{key:I},[k=="document_date"?(s(),c("div",be,j(l.convertDateTime(n[k])),1)):(s(),c("div",he,j(n[k]),1))]))),128))]))),128))]))),128))])]),a("div",null,[a("div",xe,[a("div",ge,[i(m,{list:l.resultColumn,nested:"",onOnDel:l.removeFieldItem},null,8,["list","onOnDel"])]),a("div",Ce,[i(f,{icon:"mdi:add",text:"ฟิลด์ข้อมูล",btnClass:"btn-primary",onOnClick:l.addField},null,8,["onOnClick"]),i(f,{icon:"mdi:add",text:"กลุ่ม",btnClass:"btn-primary",onOnClick:l.addGroup},null,8,["onOnClick"])])])]),ye,a("div",ke,[i(f,{text:"ส่งออกรายงาน",icon:"fa-solid:file-pdf",onClick:l.genExcel},null,8,["onClick"])])])]),_:1}),l.modalField?(s(),Y(E,{key:0,title:"เพิ่มฟิลด์ข้อมูล",centered:"","size-class":"w-[70%]","active-modal":l.modalField,"onEvent:closeModal":o[3]||(o[3]=n=>l.closeModal())},{footer:w(()=>[a("div",De,[i(f,{text:"นำไปใช้",class:"w-[120px]",onClick:l.addResultColumn},null,8,["onClick"]),i(f,{text:"ยกเลิก","btn-class":"w-[120px] btn-outline-dark",onClick:l.closeModal},null,8,["onClick"])])]),default:w(()=>[a("div",null,[a("div",we,[a("div",Me,[i(N,{placeholder:"ค้นหา",class:"mb-5"}),a("div",Te,[(s(!0),c(g,null,C(l.fieldList,(n,_)=>(s(),c("div",{key:_},[i(D,{label:n.label,class:"mb-5",modelValue:l.fieldModel,"onUpdate:modelValue":o[2]||(o[2]=p=>l.fieldModel=p),activeClass:"ring-primary-500 bg-primary-500",value:n},null,8,["label","modelValue","value"])]))),128))])]),a("div",Ve,[S(" เรียงลำดับคอลัมน์ใหม่ "),Ne,i(m,{list:l.fieldColumn,nested:""},null,8,["list"])])])])]),_:1},8,["active-modal"])):B("",!0),l.modalGroup?(s(),Y(E,{key:1,title:"เพิ่มกลุ่มข้อมูล",centered:"","size-class":"w-[70%]","active-modal":l.modalGroup,"onEvent:closeModal":o[5]||(o[5]=n=>l.closeModal())},{footer:w(()=>[a("div",je,[i(f,{text:"นำไปใช้",class:"w-[120px]",onClick:l.addResultColumn},null,8,["onClick"]),i(f,{text:"ยกเลิก","btn-class":"w-[120px] btn-outline-dark",onClick:l.closeModal},null,8,["onClick"])])]),default:w(()=>[a("div",null,[a("div",Ee,[a("div",Fe,[i(N,{placeholder:"ค้นหา",class:"mb-5"}),a("div",Oe,[(s(!0),c(g,null,C(l.fieldList,(n,_)=>(s(),c("div",{key:_},[i(D,{label:n.label,class:"mb-5",modelValue:l.groupModel,"onUpdate:modelValue":o[4]||(o[4]=p=>l.groupModel=p),activeClass:"ring-primary-500 bg-primary-500",value:n},null,8,["label","modelValue","value"])]))),128))])]),a("div",Ie,[S(" เรียงลำดับคอลัมน์ใหม่ "),Re,i(m,{list:l.groupColumn,nested:""},null,8,["list"])])])])]),_:1},8,["active-modal"])):B("",!0)])}const dl=P(se,[["render",Ye],["__scopeId","data-v-e76f1a05"]]);export{dl as default};
