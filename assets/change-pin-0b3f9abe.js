import{I as g}from"./index-8d30ace7.js";import{_ as y,a as h,d as b,e as w}from"./index-f91482a0.js";import{M as k}from"./Modal-b54f1b5f.js";import{B as M}from"./index-c2d6eb9c.js";import{o,p as e,n as l,F as u,aD as m,x as d,aT as _,m as j,bj as P,aF as p,as as t,w as C}from"./preload-helper-f37a9bec.js";import"./iconify-2baafea4.js";import"./transition-be7c09bc.js";import"./dom-b10fc197.js";import"./hidden-800255f5.js";import"./focus-management-94a631f4.js";import"./micro-task-89dcd6af.js";import"./open-closed-75edfb8a.js";import"./use-outside-click-156e41c1.js";const I={components:{Icon:g,Modal:k,Button:M},data(){return{showModal:!1,errorMessage:"",pins:[{active:!1},{active:!1},{active:!1},{active:!1},{active:!1},{active:!1}],step:1,pin:"",form:{pin:"",confirmPin:""}}},watch:{pin:{handler(){this.pin.length===6&&(this.step===1?(this.form.pin=this.pin,this.pin="",this.step=2,this.errorMessage=""):(this.form.confirmPin=this.pin,console.log("form",this.form),this.form.pin===this.form.confirmPin?this.changePin():(this.pin="",this.form.pin="",this.form.confirmPin="",this.step=1,this.errorMessage="รหัส PIN ไม่ตรงกัน")))}}},methods:{async getMenuRole(){await h("generalStore","getMenu",{payload:{system_type:"e-sarabun"}})},async changePin(){const{status:r}=await h("authStore","savePin",{payload:{pin_code:this.form.pin}});r==200?this.showModal=!0:this.errorMessage="เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"},addPin(r){this.pin.length<6&&(this.pin+=r.toString(),this.pins[this.pin.length-1].active=!0)},removePin(){this.pin.length>0&&(this.pin=this.pin.slice(0,-1),this.pins[this.pin.length].active=!1)},logout(){localStorage.removeItem("activeUser"),localStorage.removeItem("AuthStore"),localStorage.removeItem("GeneralStore"),this.$router.push("/")}}},S={class:"relative pin"},B=e("img",{class:"absolute top-[-55px] left-0 w-full h-full object-contain",src:b,alt:"",style:{"margin-left":"auto","margin-right":"auto"}},null,-1),N={class:"relative z-[1] h-screen flex flex-col items-center justify-between"},A=e("div",null,[e("img",{class:"content-center w-[230px] py-8",src:w,alt:"",style:{"margin-left":"auto","margin-right":"auto"}})],-1),F={class:"w-full"},V={key:0,class:"text-center"},E={key:1,class:"text-center"},z={class:"flex justify-center mt-6"},D={class:"flex justify-between w-[200px]"},O=["onClick"],T={key:0,class:"w-[20px] h-[20px] rounded-full bg-white"},G={class:"bg-white rounded-t-xl w-full mt-10"},L={class:"flex justify-center flex-wrap p-12 text-black-500"},R=["onClick"],U=e("div",{class:"basis-1/3 flex items-center justify-center"},[e("div",{class:"flex items-center rounded-full justify-center w-[70px] h-[70px] text-2xl"})],-1),q={class:"basis-1/3 flex items-center justify-center"},H={class:"basis-1/3 flex items-center justify-center gap-3"},J={class:"text-center text-red-500 h-[20px]"},K={key:0},Q={class:"h-36 flex items-center justify-center"},W={class:"text-center flex flex-row flex-wrap justify-center"},X={class:"basis-full flex justify-center mb-5"},Y=e("h4",{class:"text-lg text-slate-900"},[C(" ตั้งรหัส PIN Application "),e("span",{class:"text-green-500"},"สำเร็จ")],-1),Z={class:"flex justify-center"};function $(r,a,ee,te,s,n){const f=p("Icon"),x=p("Button"),v=p("Modal");return t(),o("div",S,[B,e("div",N,[A,e("div",F,[s.step==1?(t(),o("div",V,"ตั้งรหัส PIN Application")):l("",!0),s.step==2?(t(),o("div",E," ยืนยันรหัส PIN Application ")):l("",!0),e("div",z,[e("div",D,[(t(!0),o(u,null,m(s.pins,(i,c)=>(t(),o("div",{key:c,class:"flex justify-center items-center w-[20px] h-[20px] border border-solid border-gray-300 rounded-full",onClick:se=>i.active=!i.active},[s.pin.length>c?(t(),o("div",T)):l("",!0)],8,O))),128))])]),e("div",G,[e("div",L,[(t(),o(u,null,m(9,i=>e("div",{key:i,class:"basis-1/3 flex items-center justify-center mb-4"},[e("button",{onClick:c=>n.addPin(i),class:"flex items-center rounded-full justify-center w-[70px] h-[70px] text-2xl border border-solid border-gray-300"},_(i),9,R)])),64)),U,e("div",q,[e("button",{onClick:a[0]||(a[0]=i=>n.addPin(0)),class:"flex items-center rounded-full justify-center w-[70px] h-[70px] text-2xl border border-solid border-gray-300"}," 0 ")]),e("div",H,[e("button",{onClick:a[1]||(a[1]=i=>n.removePin()),class:"flex items-center justify-center w-[70px] h-[70px]"},[d(f,{class:"text-4xl text-gray-500",icon:"cil:delete"})])])]),e("div",J,[s.errorMessage?(t(),o("p",K,_(s.errorMessage),1)):l("",!0)])])])]),s.showModal?(t(),j(v,{key:0,title:"",activeModal:s.showModal,"onEvent:closeModal":n.logout,label:"",labelClass:"btn-outline-dark",sizeClass:"w-full",centered:""},{default:P(()=>[e("div",Q,[e("div",W,[e("div",X,[d(f,{icon:"icon-park-solid:protect",class:"text-5xl text-green-500"})]),Y])]),e("div",Z,[e("div",null,[d(x,{text:"ไปล็อกอิน",btnClass:"btn-primary w-32 font-medium mx-2",onOnClick:n.logout},null,8,["onOnClick"])])])]),_:1},8,["activeModal","onEvent:closeModal"])):l("",!0)])}const _e=y(I,[["render",$]]);export{_e as default};