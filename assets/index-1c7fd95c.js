import{C as Z}from"./index-263882d1.js";import{D as q}from"./index-090a8953.js";import{T as $}from"./index-31d1a8ca.js";import{I as ee}from"./index-a60d9262.js";import{C as le}from"./index-8994827d.js";import{S as te}from"./index-7e9b1d19.js";import{I as oe}from"./index-72ee420c.js";import{B as ne}from"./index-441935dc.js";import{_ as ae,c as se,a as J,u as re}from"./index-e058a960.js";import{M as ie}from"./Modal-19eb68c4.js";import{V as de,C as ce}from"./VueSelect-4c8519b3.js";import{P as ue}from"./index-bb139ada.js";import{d as me,b as pe,a as fe,s as _e,c as be,e as ve}from"./select-option-b2a02578.js";import{M as ge}from"./index-96a9bfa7.js";import{M as ye}from"./index-7dc8252b.js";import{M as xe}from"./index-2a7f4259.js";import{C as ke}from"./index-2d8ae848.js";import{aA as i,ay as X,al as Ve,be as Ce,o as v,p as o,x as n,bj as m,aF as c,as as u,F as z,aD as H,m as C,aT as h,w as K,n as Y}from"./preload-helper-9e0646ca.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./vue-cleave.min-9e1201c2.js";import"./ck-white-7280cd79.js";import"./iconify-4e42c13d.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";import"./vue3-tree-vue.esm-b89ac387.js";import"./index-3069c0b6.js";import"./tabs-aa384b53.js";import"./index-1b218db3.js";const he={components:{CFlatPickr:ke,Card:Z,Textinput:$,Button:ne,Modal:ie,Icon:oe,InputGroup:ee,Checkbox:le,Select:te,Pagination:ue,Dropdown:q,VueSelect:de,vSelect:ce,ModalDrive:ge,ModalSuccess:ye,ModalError:xe},setup(){const w=i([]),t=i([]),E=i(!1),e=i(""),x=i(!1),k=i(""),V=i(!1),_=i([]),f=X({total:1,current_page:1,perpage:10,pageRange:5}),F=i([{label:"เรื่อง/จาก",field:"subject"},{label:"เลขที่หนังสือ",field:"document_number",tdClass:"text-center",thClass:"text-center"},{label:"เลขรับ/ส่ง",field:"initial_number_from",tdClass:"text-center",thClass:"text-center"},{label:"ถึง",field:"to",tdClass:"text-center",thClass:"text-center"}]),g=i([]),y=i([{key:"document_number",label:"เลขที่หนังสือ"},{key:"from_type",label:"จาก"},{key:"to_type",label:"ถึง"},{key:"attn",label:"เรียน"},{key:"subject",label:"เรื่อง"},{key:"detail",label:"รายละเอียด"},{key:"attachment",label:"ไฟล์แนบ"},{key:"signed_by",label:"ผู้ลงนาม/สั่งการ"},{key:"returned_reason",label:"คำสั่งการ/คำเสนอ"},{key:"action_detail",label:"การปฏิบัติ"}]),S=i(me),O=i(pe),I=i(fe),R=i(_e),j=i(be),B=i(ve),N=i([{label:"ข้อมูลเก่าไปใหม่",value:"asc"},{label:"ข้อมูลใหม่ไปเก่า",value:"desc"}]),A=i([]),b=X({keyword:"",fields:[],year:"",document_type:[],book_type:[],document_number:"",initial_number_from:"",document_date:"",from_type:"",to_type:"",document_format:"",urgency_level:"",secrecy_level:"",status:"",sort:"desc"}),l=re(),p=se().userInfo;Ve(async()=>{console.log("profile-setting",p),r(1)});const r=async a=>{var s,T,L,Q,W;console.log("filter",b);const{data:d,status:G}=await J("generalStore","search",{payload:{page:a,...b,fields:JSON.stringify(b.fields),document_type:JSON.stringify(b.document_type),book_type:JSON.stringify(b.book_type)}});G==200&&(g.value=(s=d.result)==null?void 0:s.data,f.total=((T=d==null?void 0:d.result)==null?void 0:T.total_page)*((L=d==null?void 0:d.result)==null?void 0:L.per_page),f.current=(Q=d.result)==null?void 0:Q.current_page,f.perPage=(W=d.result)==null?void 0:W.per_page)},D=async a=>{f.current=a,await r(a)},M=async()=>{if(t.value.length==0){x.value=!0,k.value="กรุณาเลือกเอกสาร";return}const{data:a,status:d}=await J("driveStore","get");d==200&&(console.log("DriveData",a.result),_.value=a.result,V.value=!0)},P=async a=>{if(!a){x.value=!0,k.value="กรุณาเลือกแฟ้ม";return}let d=t.value.map(s=>(console.log("testtest",s),{srb_document_id:s.id?s.id:null,document_type:"หนังสืออื่นๆ",name:s==null?void 0:s.subject,description:s==null?void 0:s.detail,file_path:s==null?void 0:s.book_pdf_path,visibility:"published",folder_level:a.document_level=="document_folder"?"folder":"subfolder",document_folder_id:a.document_level==="document_folder"?a.item_id:null,document_subfolder_id:a.document_level==="document_sub_folder"?a.item_id:null}));console.log("payload",d),console.log("payload length",d.length);for(const s of d)if(s.file_path==null){console.log("no filePath"),V.value=!1,x.value=!0,k.value="ไฟล์ที่เลือกไม่มีใบปะหน้า";return}const G=async s=>{const{data:T,status:L}=await J("driveStore","store",{payload:s});L==200?(V.value=!1,console.log("data",T),E.value=!0,e.value="จัดเก็บเข้าแฟ้ม"):(x.value=!0,k.value="เกิดข้อผิดพลาด")};for(const s of d)console.log("item eiei",s),G(s)},U=a=>{t.value=a.selectedRows,w.value=t.value.map(d=>d.id),console.log("Selected IDs:",t.value),console.log("IDs:",w.value)};return Ce(()=>l.currentRoute.value.query,a=>{console.log("query",a),a!=null&&a.keyword&&(b.keyword=a.keyword,r(1))},{immediate:!0}),{sendOutIDS:w,userInfo:p,advancedTable:g,columns:F,fields:y,documentTypeOptions:S,bookTypeOptions:O,bookFormatOptions:I,speedLevelOptions:R,secretLevelOptions:j,statusOptions:B,filter:b,paginate:f,selected:A,sortOptions:N,isOpenDrive:V,driveList:_,isSuccess:E,successMessage:e,modalItem:t,isError:x,errorMessage:k,getData:r,changePage:D,openDriveModal:M,handleSubmitDriver:P,handleSelectedRowsChange:U}}},we={class:"flex gap-3"},Se={class:"basis-1/4"},Oe={class:"space-y-4"},Ie={class:"mb-3"},De=o("div",{class:"mb-1 text-sm"},"คำค้นหาจากแหล่งข้อมูล",-1),Me={class:""},Pe={class:"flex flex-wrap"},Ue=o("div",{class:"text-sm font-medium mb-1"},"ปี",-1),Te=o("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200"}," ประเภทเอกสาร ",-1),Le=o("div",{class:"text-sm font-medium mb-1"},"ประเภทหนังสือ",-1),Ee=o("div",{class:"text-sm font-medium mb-1"},"เลขที่หนังสือ",-1),Fe=o("div",{class:"text-sm font-medium mb-1"},"เลขรับหนังสือ",-1),Re=o("div",{class:"text-sm font-medium mb-1"},"วันที่หนังสือ",-1),je=o("div",{class:"text-sm font-medium mb-1"},"จาก",-1),Be=o("div",{class:"text-sm font-medium mb-1"},"ถึง",-1),Ne=o("div",{class:"text-sm font-medium mb-1"},"รูปแบบหนังสือ",-1),Ae=o("div",{class:"text-sm font-medium mb-1"},"ชั้นความเร็ว",-1),Ge=o("div",{class:"text-sm font-medium mb-1"},"ชั้นความลับ",-1),Je=o("div",{class:"text-sm font-medium mb-1"},"สถานะของหนังสือ",-1),ze={class:"text-center flex justify-center w-full mt-12"},He={class:"basis-3/4"},Ke={class:"-mx-6"},Qe={class:"mb-6"},We={class:"flex items-center justify-between px-4"},Xe={class:"self-center flex"},Ye={class:"flex gap-3 items-center"},Ze={class:"w-full"},qe=o("span",null,"เรียงลำดับ",-1),$e=o("div",{class:"text-center"},[o("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),el={key:0,class:"text-left"},ll={class:"w-[450px]"},tl={class:"text-[16px]"},ol={class:"text-[14px] text-gray-500"},nl={key:1,class:"text-left"},al={class:"py-4 px-3"},sl={class:"text-lg text-slate-900"},rl=o("span",{class:"text-green-500"},"สำเร็จ",-1),il={class:"text-lg text-slate-900"};function dl(w,t,E,e,x,k){const V=c("InputGroup"),_=c("Checkbox"),f=c("Textinput"),F=c("CFlatPickr"),g=c("vSelect"),y=c("VueSelect"),S=c("Button"),O=c("Card"),I=c("Icon"),R=c("Dropdown"),j=c("Pagination"),B=c("vue-good-table"),N=c("ModalDrive"),A=c("ModalSuccess"),b=c("ModalError");return u(),v("div",we,[o("div",Se,[n(O,null,{default:m(()=>[o("div",Oe,[o("div",null,[o("div",Ie,[De,n(V,{modelValue:e.filter.keyword,"onUpdate:modelValue":t[0]||(t[0]=l=>e.filter.keyword=l),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])]),o("div",Me,[o("div",Pe,[(u(!0),v(z,null,H(e.fields,(l,p)=>(u(),v("div",{class:"basis-1/2",key:p},[e.filter.fields.includes(l.key)?(u(),C(_,{key:0,checked:"",label:l.label,activeClass:"ring-primary-500 bg-primary-500",value:l.key,modelValue:e.filter.fields,"onUpdate:modelValue":t[1]||(t[1]=r=>e.filter.fields=r)},null,8,["label","value","modelValue"])):(u(),C(_,{key:1,label:l.label,activeClass:"ring-primary-500 bg-primary-500",value:l.key,modelValue:e.filter.fields,"onUpdate:modelValue":t[2]||(t[2]=r=>e.filter.fields=r)},null,8,["label","value","modelValue"]))]))),128))])])]),o("div",null,[Ue,n(f,{modelValue:e.filter.year,"onUpdate:modelValue":t[3]||(t[3]=l=>e.filter.year=l),classInput:"border-2 border-gray-300 "},null,8,["modelValue"])]),o("div",null,[Te,o("div",null,[(u(!0),v(z,null,H(e.documentTypeOptions,(l,p)=>(u(),v("div",{key:p},[e.filter.document_type.includes(l.label)?(u(),C(_,{key:0,checked:"",label:l.label,activeClass:"ring-primary-500 bg-primary-500",value:l.label,modelValue:e.filter.document_type,"onUpdate:modelValue":t[4]||(t[4]=r=>e.filter.document_type=r)},null,8,["label","value","modelValue"])):(u(),C(_,{key:1,label:l.label,activeClass:"ring-primary-500 bg-primary-500",value:l.label,modelValue:e.filter.document_type,"onUpdate:modelValue":t[5]||(t[5]=r=>e.filter.document_type=r)},null,8,["label","value","modelValue"]))]))),128))])]),o("div",null,[Le,o("div",null,[(u(!0),v(z,null,H(e.bookTypeOptions,(l,p)=>(u(),v("div",{key:p},[e.filter.book_type.includes(l.value)?(u(),C(_,{key:0,checked:"",label:l.value,activeClass:"ring-primary-500 bg-primary-500",value:l.value,modelValue:e.filter.book_type,"onUpdate:modelValue":t[6]||(t[6]=r=>e.filter.book_type=r)},null,8,["label","value","modelValue"])):(u(),C(_,{key:1,label:l.value,activeClass:"ring-primary-500 bg-primary-500",value:l.value,modelValue:e.filter.book_type,"onUpdate:modelValue":t[7]||(t[7]=r=>e.filter.book_type=r)},null,8,["label","value","modelValue"]))]))),128))])]),o("div",null,[Ee,n(f,{modelValue:e.filter.document_number,"onUpdate:modelValue":t[8]||(t[8]=l=>e.filter.document_number=l),classInput:"border-2 border-gray-300 "},null,8,["modelValue"])]),o("div",null,[Fe,n(f,{modelValue:e.filter.initial_number_from,"onUpdate:modelValue":t[9]||(t[9]=l=>e.filter.initial_number_from=l),classInput:"border-2 border-gray-300 "},null,8,["modelValue"])]),o("div",null,[Re,n(F,{modelValue:e.filter.document_date,"onUpdate:modelValue":t[10]||(t[10]=l=>e.filter.document_date=l),onOnChange:t[11]||(t[11]=l=>e.filter.document_date=l),class:"form-control",id:"d1",placeholder:""},null,8,["modelValue"])]),o("div",null,[je,n(f,{modelValue:e.filter.from_type,"onUpdate:modelValue":t[12]||(t[12]=l=>e.filter.from_type=l),classInput:"border-2 border-gray-300 "},null,8,["modelValue"])]),o("div",null,[Be,n(f,{modelValue:e.filter.to_type,"onUpdate:modelValue":t[13]||(t[13]=l=>e.filter.to_type=l),classInput:"border-2 border-gray-300 "},null,8,["modelValue"])]),o("div",null,[Ne,n(y,{classInput:"input_color"},{default:m(()=>[n(g,{modelValue:e.filter.document_format,"onUpdate:modelValue":t[14]||(t[14]=l=>e.filter.document_format=l),label:"label",class:"input_color border rounded bg-white",reduce:l=>l.label,options:e.bookFormatOptions},null,8,["modelValue","reduce","options"])]),_:1})]),o("div",null,[Ae,n(y,{classInput:"input_color"},{default:m(()=>[n(g,{modelValue:e.filter.urgency_level,"onUpdate:modelValue":t[15]||(t[15]=l=>e.filter.urgency_level=l),label:"label",class:"input_color border rounded",reduce:l=>l.label,options:e.speedLevelOptions},null,8,["modelValue","reduce","options"])]),_:1})]),o("div",null,[Ge,n(y,{classInput:"input_color"},{default:m(()=>[n(g,{modelValue:e.filter.secrecy_level,"onUpdate:modelValue":t[16]||(t[16]=l=>e.filter.secrecy_level=l),label:"label",class:"input_color border rounded bg-white",reduce:l=>l.label,options:e.secretLevelOptions},null,8,["modelValue","reduce","options"])]),_:1})]),o("div",null,[Je,n(y,{classInput:"input_color"},{default:m(()=>[n(g,{modelValue:e.filter.status,"onUpdate:modelValue":t[17]||(t[17]=l=>e.filter.status=l),label:"label",placeholder:"สถานะทั้งหมด",class:"input_color border rounded",reduce:l=>l.label,options:e.statusOptions},null,8,["modelValue","reduce","options"])]),_:1})])]),o("div",ze,[n(S,{text:"ค้นหา",onClick:t[18]||(t[18]=l=>e.getData(1)),btnClass:"btn-primary w-32 font-medium mx-2"}),n(S,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2"})])]),_:1})]),o("div",He,[n(O,null,{default:m(()=>[o("div",null,[o("div",Ke,[o("div",Qe,[o("div",We,[o("div",Xe,[o("div",null,"ผลการค้นหา "+h(e.advancedTable.length)+" รายการ",1)]),o("div",Ye,[n(R,{classMenuItems:"left-0  w-[220px] top-[110%] "},{menus:m(()=>[o("ul",Ze,[o("li",null,[o("div",{class:"p-2 flex items-center hover:bg-gray-50 cursor-pointer",onClick:t[19]||(t[19]=l=>w.$router.push("/app/advanced-search/sendout/?id="+e.sendOutIDS.join(",")))},[n(I,{icon:"fa-solid:file-pdf",class:"text-xl mr-2 text-red-500"}),K(" ส่งออกรายงาน ")])]),o("li",null,[o("div",{class:"p-2 flex items-center hover:bg-gray-50 cursor-pointer",onClick:t[20]||(t[20]=(...l)=>e.openDriveModal&&e.openDriveModal(...l))},[n(I,{icon:"icon-park-outline:folder-one",class:"text-xl mr-2"}),K(" จัดเก็บเข้าแฟ้ม ")])])])]),default:m(()=>[n(S,{text:"หนังสือ ("+e.modalItem.length+")",btnClass:"btn-primary h-[40px] flex items-center",icon:"heroicons-outline:chevron-down",iconPosition:"right",div:"",iconClass:"text-lg"},null,8,["text"])]),_:1}),qe,n(y,{classInput:"input_color"},{default:m(()=>[n(g,{modelValue:e.filter.sort,"onUpdate:modelValue":t[21]||(t[21]=l=>e.filter.sort=l),label:"label",placeholder:"สถานะทั้งหมด",class:"input_color border rounded w-[200px]",reduce:l=>l.value,options:e.sortOptions,"onOption:selected":t[22]||(t[22]=l=>e.getData(1)),clearable:!1},null,8,["modelValue","reduce","options"])]),_:1})])])]),n(B,{columns:e.columns,rows:e.advancedTable,onSelectedRowsChange:e.handleSelectedRowsChange,styleClass:"vgt-table bordered","pagination-options":{enabled:!0,perPage:e.paginate.perpage},"select-options":{enabled:!0,selectOnCheckboxOnly:!0,selectioninfoClass:"custom-class",selectionText:"rows selected",clearSelectionText:"clear",disableSelectinfo:!0,selectAllByGroup:!0},"sort-options":{enabled:!1},"filter-options":{enabled:!1}},{emptystate:m(()=>[$e]),"table-row":m(l=>{var p,r,D,M,P,U,a;return[l.column.field=="subject"?(u(),v("span",el,[o("div",ll,[o("div",tl,h(l.row.subject),1),o("div",ol,h(((p=l.row)==null?void 0:p.book_type)=="inside"?(D=(r=l.row)==null?void 0:r.from_data)==null?void 0:D.organization_name:(P=(M=l.row)==null?void 0:M.from_data)==null?void 0:P.name),1)])])):Y("",!0),l.column.field=="to"?(u(),v("span",nl,h((a=(U=l.row)==null?void 0:U.to_data)==null?void 0:a.full_name),1)):Y("",!0)]}),"pagination-bottom":m(l=>[o("div",al,[n(j,{total:e.paginate.total,current:e.paginate.current,"per-page":e.paginate.perpage,pageRange:e.paginate.pageRange,onPageChanged:t[23]||(t[23]=p=>e.changePage(p)),pageChanged:l.pageChanged,perPageChanged:l.perPageChanged,textAfterInput:"ไปที่หน้า",enableSearch:"",enableInput:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","onSelectedRowsChange","pagination-options"])])])]),_:1})]),n(N,{ref:"ModalDrive",title:"จัดเก็บเข้าแฟ้ม",isOpen:e.isOpenDrive,driveList:e.driveList,"onEvent:close":t[24]||(t[24]=l=>e.isOpenDrive=!1),"onEvent:accept":t[25]||(t[25]=l=>e.handleSubmitDriver(l))},null,8,["isOpen","driveList"]),n(A,{title:"",isOpen:e.isSuccess,"onEvent:closeModal":t[26]||(t[26]=l=>e.isSuccess=!1)},{default:m(()=>[o("h4",sl,[K(h(e.successMessage)+" ",1),rl])]),_:1},8,["isOpen"]),n(b,{title:"",isOpen:e.isError,"onEvent:closeModal":t[27]||(t[27]=l=>e.isError=!1)},{default:m(()=>[o("h4",il,h(e.errorMessage),1)]),_:1},8,["isOpen"])])}const Jl=ae(he,[["render",dl]]);export{Jl as default};