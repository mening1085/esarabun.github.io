import{T as m}from"./index-31d1a8ca.js";import{aA as i,aF as c,as as l,o as d,x as u,bo as f,p as b}from"./preload-helper-9e0646ca.js";import{u as w,a as x}from"./vee-validate.esm-0c282d04.js";import{c as _,a as h}from"./array-e684e252.js";import{_ as g}from"./index-e058a960.js";const S={components:{Textinput:m},data(){return{checkbox:!1}},setup(){const r=i(!1),e=_({password:h().required("กรุณากรอกรหัสผ่าน")}),{handleSubmit:a}=w({validationSchema:e}),{value:o,errorMessage:t}=x("password"),n=a(()=>{r.value=!0});return{password:o,passwordError:t,isShowDialog:r,onSubmit:n}}},k=b("button",{type:"submit",class:"btn btn-primary block w-4/12 text-center",style:{"margin-left":"auto","margin-right":"auto","margin-top":"50px","margin-bottom":"-70px"}}," เข้าสู่ระบบ ",-1);function v(r,e,a,o,t,n){const p=c("Textinput");return l(),d("form",{onSubmit:e[1]||(e[1]=f((...s)=>o.onSubmit&&o.onSubmit(...s),["prevent"])),class:"space-y-4"},[u(p,{label:"รหัสผ่าน",type:"password",placeholder:"",name:"password",modelValue:o.password,"onUpdate:modelValue":e[0]||(e[0]=s=>o.password=s),error:o.passwordError,hasicon:"",classInput:"h-[48px]"},null,8,["modelValue","error"]),k],32)}const F=g(S,[["render",v]]);export{F as L};
