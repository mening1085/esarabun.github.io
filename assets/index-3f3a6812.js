import{M as _}from"./Modal-19eb68c4.js";import{T as x}from"./index-31d1a8ca.js";import{B as h}from"./index-441935dc.js";import{_ as v,c as y,a as E}from"./index-e058a960.js";import{aF as n,as as i,o as m,m as k,bj as p,p as t,x as d,aT as u,n as f}from"./preload-helper-9e0646ca.js";const C={components:{Modal:_,Textinput:x,Button:h},props:{title:{type:String,default:""},modalId:{type:[String,Number,Array],default:""},isOpen:{type:Boolean,default:!0}},data(){return{password:"",passwordError:"",userInfo:y().userInfo,isSuccess:!1}},watch:{password(o){this.passwordError=""}},emits:["event:close","event:delete"],methods:{async onAcceptSwitch(){if(this.password=="")this.passwordError="กรุณากรอกรหัสผ่าน";else{const o=await E("generalStore","confirmPassword",{payload:{password:this.password}});o.status==200?this.onDelete():(console.log(o),this.passwordError=o.data.message)}},onDelete(){this.clearForm(),this.$emit("event:delete",this.modalId)},closeModal(){this.clearForm(),this.$emit("event:close")},clearForm(){this.password="",this.passwordError=""}}},M={class:"py-6"},g={class:"flex flex-wrap items-center py-2 mb-3"},B=t("div",{class:"sm:basis-1/4 basis-full pr-5 flex sm:justify-end justify-start mb-1 sm:mb-0"}," ชื่อผู้ใช้งาน ",-1),S={class:"sm:basis-3/4 basis-full"},I={class:"flex flex-wrap py-2 mb-3"},j=t("div",{class:"sm:basis-1/4 basis-full pr-5 pt-1 flex sm:justify-end justify-start mb-1 sm:mb-0"}," รหัสผ่าน ",-1),V={class:"sm:basis-3/4 basis-full"},D={key:0,class:"mt-2 text-danger-500 block text-sm"},F={class:"text-center mt-4 flex justify-center w-full"};function O(o,s,a,T,e,l){const w=n("Textinput"),c=n("Button"),b=n("Modal");return i(),m("div",null,[a.isOpen?(i(),k(b,{key:0,title:a.title,labelClass:"btn-outline-dark",label:"",ref:"modalDialog",centered:"",activeModal:a.isOpen,"onEvent:closeModal":s[3]||(s[3]=r=>l.closeModal())},{footer:p(()=>[t("div",F,[d(c,{text:"ยืนยัน",btnClass:"btn-primary w-32 mx-2",onOnClick:s[1]||(s[1]=r=>l.onAcceptSwitch())}),d(c,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",onOnClick:s[2]||(s[2]=r=>l.closeModal())})])]),default:p(()=>[t("div",M,[t("div",g,[B,t("div",S,u(e.userInfo.full_name)+" ",1)]),t("div",I,[j,t("div",V,[d(w,{classInput:`border border-gray-400 ${e.passwordError!=0&&e.passwordError?"border-red-500":""}`,type:"password",modelValue:e.password,"onUpdate:modelValue":s[0]||(s[0]=r=>e.password=r)},null,8,["classInput","modelValue"]),e.passwordError!=0&&e.passwordError?(i(),m("span",D,u(e.passwordError),1)):f("",!0)])])])]),_:1},8,["title","activeModal"])):f("",!0)])}const z=v(C,[["render",O]]);export{z as C};