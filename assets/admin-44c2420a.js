import{I as m}from"./index-72ee420c.js";import{D as p}from"./index-e3f12ad9.js";import{C as x}from"./index-263882d1.js";import"./vue-tailwind-datepicker-01625c39.js";import{F as h}from"./index-6c8c0d73.js";import{_ as f,a as g}from"./index-e058a960.js";import{C as y}from"./index-2d8ae848.js";import{w as C}from"./entry.58a71fc4-f71ced3c.js";import{o as b,x as e,bj as r,aF as l,as as v,p as t,aT as i}from"./preload-helper-9e0646ca.js";import"./iconify-4e42c13d.js";const k={components:{CFlatPickr:y,Icon:m,DatePickerRange:p,Card:x,VueTailwindDatePicker:C,FromGroup:h},data(){return{date:[],start_date:"",end_date:"",countList:[]}},watch:{date:{handler:function(s){typeof s=="object"&&(this.start_date=s[0],this.end_date=s[1],this.getCount())}}},async created(){this.getCount()},methods:{async getCount(){const{data:s,status:o}=await g("homePageStore","getCount",{payload:{start_date:this.start_date,end_date:this.end_date}});o==200&&(console.log("data",s),this.countList=s.result)},clearDate(s){this.date=[]}}},w=t("div",null,[t("span",null,"ภาพรวมระบบสารบรรณ")],-1),I={class:"justify-between pb-6 md:space-y-0 space-y-3 items-center w-1/5 ml-auto"},D={class:"flex flex-wrap sm:flex-nowrap gap-3 basis-3/5"},F={class:"basis-full"},L={class:"flex items-center border bg-gray-50 rounded-md pr-2 border-gray-400"},P={class:"basis-full"},S={class:"shrink w-[20px]"},V={class:"grid grid-cols-4 gap-6"},z={class:"setItemtoCenter"},j={class:"text-2xl text-gray-900"},B=t("div",{class:"text-base text-gray-900"},"รอรับ",-1),N={class:"setItemtoCenter"},T={class:"text-2xl text-gray-900"},E=t("div",{class:"text-base text-gray-900"},"จำนวนรับหนังสือ",-1),G={class:"setItemtoCenter"},O={class:"text-2xl text-gray-900"},R=t("div",{class:"text-base text-gray-900"},"จำนวนส่งหนังสือ",-1),U={class:"setItemtoCenter"},q={class:"text-2xl text-gray-900"},A=t("div",{class:"text-base text-gray-900"},"เรื่องเกินกำหนด",-1);function H(s,o,J,K,a,_){const u=l("CFlatPickr"),n=l("Icon"),d=l("Card");return v(),b("div",null,[e(d,null,{default:r(()=>[w,t("div",I,[t("div",D,[t("div",F,[t("div",L,[t("div",P,[e(u,{placeholder:"",config:{mode:"range"},modelValue:a.date,"onUpdate:modelValue":o[0]||(o[0]=c=>a.date=c),onOnChange:o[1]||(o[1]=c=>a.date=c),class:"form-control border-0 focus:ring-0",clearable:!0,onClearDate:o[2]||(o[2]=c=>_.clearDate(c))},null,8,["modelValue"])]),t("div",S,[e(n,{class:"text-2xl",icon:"ant-design:calendar-outlined"})])])])])]),t("div",V,[e(d,{"card-text-class":"h-[unset]",bodyClass:"box1 h-[150px] rounded setItemtoCenter"},{default:r(()=>[t("div",z,[e(n,{style:{fontSize:"40px"},class:"text-gray-900",icon:"ic:round-mail"})]),t("div",j,i(a.countList.document_count),1),B]),_:1}),e(d,{"card-text-class":"h-[unset]",bodyClass:"box-2 h-[150px] rounded setItemtoCenter"},{default:r(()=>[t("div",N,[e(n,{style:{fontSize:"40px"},class:"text-gray-900",icon:"mdi:book-plus-outline"})]),t("span",T,i(a.countList.document_receive_count),1),E]),_:1}),e(d,{"card-text-class":"h-[unset]",bodyClass:"box3 h-[150px] rounded setItemtoCenter"},{default:r(()=>[t("div",G,[e(n,{style:{fontSize:"40px"},class:"text-gray-900",icon:"mdi:book-arrow-up-outline"})]),t("span",O,i(a.countList.document_send_count),1),R]),_:1}),e(d,{"card-text-class":"h-[unset]",bodyClass:"box4 h-[150px] rounded setItemtoCenter"},{default:r(()=>[t("div",U,[e(n,{style:{fontSize:"40px"},class:"text-gray-900",icon:"mdi:book-clock-outline"})]),t("span",q,i(a.countList.document_over_count),1),A]),_:1})])]),_:1})])}const ot=f(k,[["render",H]]);export{ot as default};