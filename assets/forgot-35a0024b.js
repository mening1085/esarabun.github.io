import{T as i}from"./index-31d1a8ca.js";import{u as m,a as c}from"./vee-validate.esm-0c282d04.js";import{c as p,a as u}from"./array-e684e252.js";import{aF as d,as as b,o as f,x,bo as _,p as r}from"./preload-helper-9e0646ca.js";import{_ as h}from"./index-e058a960.js";const g={components:{Textinput:i},data(){return{checkbox:!1}},setup(){const a=p({email:u().required("กรุณากรอกอีเมล").email("กรุณากรอกอีเมลให้ถูกต้อง")}),{handleSubmit:o}=m({validationSchema:a}),{value:n,errorMessage:e}=c("email"),s=o(()=>{});return{email:n,emailError:e,onSubmit:s}}},w=r("div",{class:"text-center"},[r("button",{type:"submit",class:"btn btn-primary w-5/12 text-center mr-7 mt-7"}," รีเซ็ตรหัสผ่าน "),r("button",{onclick:"window.location.href='/'",type:"button",style:{"background-color":"white",color:"rgb(142,142,150)","border-color":"rgb(142,142,150)"},class:"btn btn-light w-5/12 text-center border"}," ยกเลิก ")],-1);function y(a,o,n,e,s,S){const l=d("Textinput");return b(),f("form",{onSubmit:o[1]||(o[1]=_((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"space-y-4"},[x(l,{label:"อีเมล",type:"email",placeholder:"",name:"emil",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=t=>e.email=t),error:e.emailError,classInput:"h-[48px]"},null,8,["modelValue","error"]),w],32)}const B=h(g,[["render",y]]);export{B as F};