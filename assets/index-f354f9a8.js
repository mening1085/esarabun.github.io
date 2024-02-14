import{D as F}from"./index-e3f12ad9.js";import{C as z}from"./index-263882d1.js";import{T as R}from"./index-9078ba5b.js";import{D as B,S as U}from"./index-090a8953.js";import{I as A}from"./index-72ee420c.js";import{B as Y}from"./index-441935dc.js";import{I as E}from"./index-a60d9262.js";import{P as N}from"./index-bb139ada.js";import{V as G,C as q}from"./VueSelect-4c8519b3.js";import{S as J}from"./index-a15147cf.js";import{M as K}from"./Modal-19eb68c4.js";import{T as Q}from"./index-31d1a8ca.js";import{F as W}from"./index-6c8c0d73.js";import"./vue-tailwind-datepicker-01625c39.js";import{_ as X,a as M}from"./index-e058a960.js";import{A as Z}from"./index-2bf9679a.js";import{d as $}from"./dayjs.min-72c81edc.js";import{C as ee}from"./index-2d8ae848.js";import{w as te}from"./entry.58a71fc4-f71ced3c.js";import{o as d,x as a,bj as c,m as se,n as m,aF as u,as as r,p as t,aT as n}from"./preload-helper-9e0646ca.js";import"./dom-891ac6c3.js";import"./focus-management-e6c5d1fd.js";import"./open-closed-486d85f0.js";import"./use-resolve-button-type-38f1f99a.js";import"./use-outside-click-a758fdce.js";import"./iconify-4e42c13d.js";import"./vue-cleave.min-9e1201c2.js";import"./index-7e9b1d19.js";import"./transition-39b574f4.js";import"./hidden-11a9ab9d.js";import"./micro-task-89dcd6af.js";const oe={name:"user-list",components:{CFlatPickr:ee,DatePickerRange:F,VueTailwindDatePicker:te,FromGroup:W,Tooltip:R,Pagination:N,InputGroup:E,Dropdown:B,Icon:A,Button:Y,Card:z,MenuItem:U,VueSelect:G,vSelect:q,Switch:J,Modal:K,Textinput:Q,Avatar:Z},data(){return{newData:{},oldData:{},formHistory:{menu:"",URL:"",OS:"",date:"",ativity:"",osType:"",osDetail:""},modalId:null,isShowDialog:!1,password:"",passwordError:0,paginate:{total:50,current:1,perpage:10,pageRange:5},userList:[],action_type_list:[{id:2,title:"สร้าง"},{id:3,title:"แก้ไข"},{id:4,title:"ลบ"},{id:5,title:"อัปเดตสถานะเปิด/ปิด การแสดงผล"},{id:6,title:"คัดลอกายการ"}],filter:{range_date:"",start_date:"",end_date:""},action_type:"",users:[],actions:[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],columnsForHistory:[{label:"ฟิลด์ข้อมูล",field:"fildData",tdClass:"text_left",thClass:"text_left"},{label:"ข้อมูลเก่า",field:"oldData",tdClass:"text_left",thClass:"text_left"},{label:"ข้อมูลที่เเก้ไข",field:"editData",width:"40%",tdClass:"text_left",thClass:"text_left"}],columns:[{label:"วันที่",field:"created_at",width:"",tdClass:"text_left",thClass:"text_left"},{label:"ผู้ใช้งาน",field:"name",width:"25%",tdClass:"text_left",thClass:"text_left"},{label:"กิจกรรม",field:"activity",width:"12%",tdClass:"text_left",thClass:"text_left"},{label:"เมนู",field:"menu",width:"12%",tdClass:"text_left",thClass:"text_left"},{label:"รายละเอียด",field:"detail",width:"12%"}],userLog:[],advancedTable:[]}},watch:{filter:{handler:function(l,e){typeof l.range_date=="object"&&(this.filter.start_date=l.range_date[0],this.filter.end_date=l.range_date[1],this.getData(1))},deep:!0},action_type:{handler(){this.action_type||this.getData(1)}},users:{handler(){this.users!=[]&&this.getData(1)}}},created(){this.getData(1)},methods:{async getData(l){var h,o,i,p,_,g,y;const{data:e,status:b}=await M("userHistoryStore","get",{payload:{system_type:"e-sarabun",page:l,user_id:(h=JSON.parse(localStorage.getItem("AuthStore")))==null?void 0:h.userInfo.id,...this.filter,users:this.users,action_type:this.action_type}});b==200&&(this.advancedTable=(o=e==null?void 0:e.result)==null?void 0:o.data,this.paginate.total=((i=e==null?void 0:e.result)==null?void 0:i.total_page)*((p=e==null?void 0:e.result)==null?void 0:p.per_page),this.paginate.current=(_=e==null?void 0:e.result)==null?void 0:_.current_page,this.paginate.perpage=(g=e==null?void 0:e.result)==null?void 0:g.per_page,this.userList=(y=e==null?void 0:e.result)==null?void 0:y.user_list)},changeIconOs(l){return console.log("os",l),l=="desktop"?"mdi:laptop":l=="mobile"?"mdi:cellphone":" mdi:google-chrome"},onClose(){this.isShowDialog=!1,this.userLog=[]},async showHistory(l){var h,o,i,p,_,g,y,w,x,C,D,S;const{data:e,status:b}=await M("userHistoryStore","show",{payload:l});console.log(b),console.log(e),this.formHistory.activity=(h=e.result)==null?void 0:h.action_type,this.formHistory.menu=(i=(o=e.result)==null?void 0:o.sub_menu)==null?void 0:i.name,this.formHistory.date=(p=e.result)==null?void 0:p.created_at,this.formHistory.osType=(_=e.result)==null?void 0:_.device_type,this.formHistory.osDetail=((g=e.result)==null?void 0:g.timezone)+" - "+((y=e.result)==null?void 0:y.ip),this.formHistory.OS=((w=e.result)==null?void 0:w.platform)+" - "+((x=e.result)==null?void 0:x.browser),this.formHistory.URL=(C=e.result)==null?void 0:C.referer_url,this.isShowDialog=!0,this.newData=(D=e.result)==null?void 0:D.new_data,this.oldData=(S=e.result)==null?void 0:S.old_data,Object.keys(this.newData).forEach(f=>{this.oldData.hasOwnProperty(f)&&this.newData[f]!==this.oldData[f]&&this.userLog.push({field:f,newDataValue:this.newData[f],oldDataValue:this.oldData[f]})}),this.userLog=this.userLog.filter(f=>f.field!=="updated_at"),console.log(this.userLog)},formatDate(l){if(l){const e=new Date(l),b=e.getDate().toString().padStart(2,"0"),h=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getFullYear(),i=e.getHours().toString().padStart(2,"0"),p=e.getMinutes().toString().padStart(2,"0");return`${b}/${h}/${o} ${i}:${p}`}else return null},async changePage(l){this.paginate.current=l,await this.getData(l)},convertDateTime(l){return l?$(l).locale("th").add(543,"year").format("DD/MM/YYYY HH:mm"):"-"}}},le={class:"user-history"},ae={class:"justify-between pb-6 md:space-y-0 space-y-3 items-center w-10/12 ml-auto"},ie={class:"flex flex-wrap sm:flex-nowrap gap-3 basis-3/5"},ne={class:"basis-full"},re={class:"flex items-center border-2 border-gray-200 rounded-md pr-2"},de={class:"basis-full"},ce={class:"shrink w-[20px]"},me={class:"basis-full"},ue={class:"basis-full"},_e={class:"md:flex items-center md:space-x-6 rtl:space-x-reverse"},fe={class:"flex-none"},pe={class:"h-8 w-8 md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full"},he={class:"ell-1"},ge={class:"ell-1"},ye={class:"ell-1"},be=t("div",{class:"text-center"},[t("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),ve={key:0},we={key:1},xe={key:2},De=["onClick"],Ce={key:3},Se={key:4},ke={class:"md:flex items-center md:space-x-6 rtl:space-x-reverse"},He={class:"flex-none"},Ve={class:"h-8 w-8 md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full"},Pe={class:"text-slate-900 dark:text-slate-200"},je={key:5},Te={key:6},Ie={class:"py-4 px-3"},Le={class:"flex flex-wrap items-center bg-gray-100 py-2"},Me=t("div",{style:{"font-weight":"600"},class:"sm:basis-1/3 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0"}," เมนู ",-1),Oe={class:"sm:basis-2/3 flex"},Fe={class:"pr-2"},ze={class:"pr-2"},Re={class:"flex flex-wrap items-center py-2"},Be=t("div",{class:"sm:basis-1/3 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0",style:{"font-weight":"600"}}," URL ",-1),Ue={class:"sm:basis-2/3 basis-full",style:{color:"blue"}},Ae={class:"flex flex-wrap bg-gray-100 py-2"},Ye=t("div",{class:"sm:basis-1/3 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0",style:{"font-weight":"600"}}," ระบบปฏิบัติการ ",-1),Ee={class:"pr-2 py-1"},Ne={class:"sm:basis-1/3 basis-full"},Ge={style:{"font-size":"12px",color:"gray"}},qe={class:"flex flex-wrap items-center py-2"},Je=t("div",{class:"sm:basis-1/3 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0",style:{"font-weight":"600"}}," วันเวลา ",-1),Ke={class:"sm:basis-1/3 basis-full"},Qe={class:"flex flex-wrap items-center bg-gray-100 py-2"},We=t("div",{class:"sm:basis-1/3 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0",style:{"font-weight":"600"}}," กิจกรรม ",-1),Xe={class:"sm:basis-1/3 basis-full"},Ze=t("div",{class:"text-center"},[t("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),$e={key:0},et={key:1},tt={key:2},st={class:"text-center mt-4 flex justify-center w-full"};function ot(l,e,b,h,o,i){const p=u("CFlatPickr"),_=u("Icon"),g=u("vSelect"),y=u("VueSelect"),w=u("Avatar"),x=u("Tooltip"),C=u("Pagination"),D=u("vue-good-table"),S=u("Card"),f=u("Button"),O=u("Modal");return r(),d("div",le,[a(S,{noborder:""},{default:c(()=>[t("div",ae,[t("div",ie,[t("div",ne,[t("div",re,[t("div",de,[a(p,{placeholder:"",modelValue:o.filter.range_date,"onUpdate:modelValue":e[0]||(e[0]=s=>o.filter.range_date=s),onOnChange:e[1]||(e[1]=s=>o.filter.range_date=s),config:{mode:"range"},class:"form-control border-0 focus:ring-0"},null,8,["modelValue"])]),t("div",ce,[a(_,{class:"text-2xl",icon:"ant-design:calendar-outlined"})])])]),t("div",me,[a(y,null,{default:c(()=>[a(g,{placeholder:"เลือกกิจกรรม",modelValue:o.action_type,"onUpdate:modelValue":e[2]||(e[2]=s=>o.action_type=s),label:"title",class:"input_color border rounded",reduce:s=>s.title,options:o.action_type_list,"onOption:selected":e[3]||(e[3]=s=>i.getData(1))},null,8,["modelValue","reduce","options"])]),_:1})]),t("div",ue,[a(y,null,{default:c(()=>[a(g,{options:o.userList,label:"full_name",class:"input_color border rounded",placeholder:"เลือกผู้ใช้งาน",multiple:"",reduce:s=>s.id,modelValue:o.users,"onUpdate:modelValue":e[4]||(e[4]=s=>o.users=s),"onOption:selected":e[5]||(e[5]=s=>i.getData(1))},{option:c(({full_name:s,profile_image:v,email:k})=>[t("div",null,[t("div",_e,[t("div",fe,[t("div",pe,[a(w,{image:v},null,8,["image"])])]),t("div",he,[t("div",ge,n(s),1),t("div",ye,n(k),1)])])])]),_:1},8,["options","reduce","modelValue"])]),_:1})])])]),a(D,{columns:o.columns,styleClass:" vgt-table bordered centered",rows:o.advancedTable,"pagination-options":{enabled:!0,perPage:o.paginate.perpage},"sort-options":{enabled:!1}},{emptystate:c(()=>[be]),"table-row":c(s=>{var v,k,H,V,P,j,T,I,L;return[s.column.field=="created_at"?(r(),d("span",ve,n(s.row.created_at?i.convertDateTime(s.row.created_at)+" น.":"-"),1)):m("",!0),s.column.field=="role_name"?(r(),d("span",we,[a(x,{title:s.row.role_name,content:s.row.role_name,placement:"bottom",arrow:"",theme:"light",btnClass:"truncate w-[200px] p-0 text-left"},null,8,["title","content"])])):m("",!0),s.column.field=="detail"?(r(),d("span",xe,[t("p",{class:"cursor - pointer",style:{color:"blue"},onClick:lt=>i.showHistory(s.row.id)}," แสดงเพิ่มเติม ",8,De)])):m("",!0),s.column.field=="organize_name"?(r(),d("span",Ce,[a(x,{title:s.row.organize_name,content:s.row.organize_name,placement:"bottom",arrow:"",theme:"light",btnClass:"truncate w-[200px] p-0 text-left"},null,8,["title","content"])])):m("",!0),s.column.field=="name"?(r(),d("span",Se,[t("div",ke,[t("div",He,[t("div",Ve,[a(w,{image:(k=(v=s.row)==null?void 0:v.user)==null?void 0:k.profile_image},null,8,["image"])])]),t("div",null,[t("div",Pe,n((V=(H=s.row)==null?void 0:H.user)==null?void 0:V.full_name),1),t("div",null,n((j=(P=s.row)==null?void 0:P.user)==null?void 0:j.email),1)])])])):m("",!0),s.column.field=="menu"?(r(),d("span",je,n((I=(T=s.row)==null?void 0:T.sub_menu)==null?void 0:I.name),1)):m("",!0),s.column.field=="activity"?(r(),d("span",Te,n((L=s.row)==null?void 0:L.action_type),1)):m("",!0)]}),"pagination-bottom":c(s=>[t("div",Ie,[a(C,{total:o.paginate.total,current:o.paginate.current,"per-page":o.paginate.perpage,pageRange:o.paginate.pageRange,onPageChanged:e[6]||(e[6]=v=>i.changePage(v)),pageChanged:s.pageChanged,perPageChanged:s.perPageChanged,textAfterInput:"ไปที่หน้า",enableSearch:"",enableInput:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])]),_:1}),o.isShowDialog?(r(),se(O,{key:0,title:"แสดงประวัติกิจกรรมเพิ่มเติม",label:"",labelClass:"btn-outline-dark",sizeClass:"max-w-[900px]",ref:"modalDialog",centered:"",activeModal:o.isShowDialog,"onEvent:closeModal":e[8]||(e[8]=s=>i.onClose())},{footer:c(()=>[t("div",st,[a(f,{text:"ปิด",btnClass:"btn-outline-dark w-32 mx-2",onClick:e[7]||(e[7]=s=>i.onClose())})])]),default:c(()=>[t("div",Le,[Me,t("div",Oe,[t("div",Fe,[a(_,{style:{"font-size":"25px",color:"blue"},icon:"mdi:home"})]),t("div",ze,[a(_,{style:{"font-size":"20px"},icon:"heroicons:chevron-right"})]),t("div",null,n(o.formHistory.menu),1)])]),t("div",Re,[Be,t("div",Ue,n(o.formHistory.URL),1)]),t("div",Ae,[Ye,t("div",Ee,[a(_,{style:{"font-size":"20px"},icon:i.changeIconOs(o.formHistory.osType)},null,8,["icon"])]),t("div",Ne,[t("div",null,n(o.formHistory.OS),1),t("div",Ge,n(o.formHistory.osDetail),1)])]),t("div",qe,[Je,t("div",Ke,n(i.formatDate(o.formHistory.date)),1)]),t("div",Qe,[We,t("div",Xe,n(o.formHistory.activity),1)]),t("div",null,[a(D,{columns:o.columnsForHistory,styleClass:" vgt-table bordered centered",rows:o.userLog,"sort-options":{enabled:!1}},{emptystate:c(()=>[Ze]),"table-row":c(s=>[s.column.field=="fildData"?(r(),d("span",$e,n(s.row.field),1)):m("",!0),s.column.field=="oldData"?(r(),d("span",et,n(s.row.oldDataValue),1)):m("",!0),s.column.field=="editData"?(r(),d("span",tt,n(s.row.newDataValue),1)):m("",!0)]),_:1},8,["columns","rows"])])]),_:1},8,["activeModal"])):m("",!0)])}const Ft=X(oe,[["render",ot]]);export{Ft as default};
