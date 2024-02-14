import{C as _}from"./index-263882d1.js";import{F as V}from"./index-6c8c0d73.js";import"./vue-tailwind-datepicker-01625c39.js";import{w as D}from"./entry.58a71fc4-f71ced3c.js";import{aA as g,as as u,o as i,x as e,a$ as k,bj as t,aF as d,p as b}from"./preload-helper-9e0646ca.js";import{_ as F}from"./index-e058a960.js";const P={__name:"DatePicker",setup(s){const l=g("");return(p,m)=>(u(),i("div",null,[e(k(D),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=o=>l.value=o),"input-classes":"form-control"},null,8,["modelValue"])]))}},x={components:{Card:_,FromGroup:V,DateRangePicker:P},data(){return{dateDefault:null,dateNtim:null,timePicker:null,multiDate:null,rangeDate:null}}},C={class:"grid grid-cols-1 gap-5"},v={class:"space-y-5"};function y(s,l,p,m,o,T){const r=d("flat-pickr"),n=d("FromGroup"),c=d("DateRangePicker"),f=d("Card");return u(),i("div",C,[e(f,{title:"Basic Select"},{default:t(()=>[b("div",v,[e(n,{label:"Default Functionality",name:"d1"},{default:t(()=>[e(r,{modelValue:o.dateDefault,"onUpdate:modelValue":l[0]||(l[0]=a=>o.dateDefault=a),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1}),e(n,{label:"Date & TIme",name:"d2"},{default:t(()=>[e(r,{modelValue:o.dateNtim,"onUpdate:modelValue":l[1]||(l[1]=a=>o.dateNtim=a),class:"form-control",placeholder:"Date & Time",id:"d2",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])]),_:1}),e(n,{label:"Time picker",name:"d3"},{default:t(()=>[e(r,{class:"form-control",id:"d3",placeholder:"Time picker",modelValue:o.timePicker,"onUpdate:modelValue":l[2]||(l[2]=a=>o.timePicker=a),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])]),_:1}),e(n,{label:"Multiple Dates",name:"d4"},{default:t(()=>[e(r,{class:"form-control",id:"d4",placeholder:"Multiple Dates",modelValue:o.multiDate,"onUpdate:modelValue":l[3]||(l[3]=a=>o.multiDate=a),config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1}),e(n,{label:"Range",name:"d5"},{default:t(()=>[e(r,{class:"form-control",id:"d5",placeholder:"Multiple Dates",modelValue:o.rangeDate,"onUpdate:modelValue":l[4]||(l[4]=a=>o.rangeDate=a),config:{mode:"range"}},null,8,["modelValue"])]),_:1}),e(n,{label:"Date Range Picker",name:"d5"},{default:t(()=>[e(c)]),_:1})])]),_:1})])}const G=F(x,[["render",y]]);export{G as default};