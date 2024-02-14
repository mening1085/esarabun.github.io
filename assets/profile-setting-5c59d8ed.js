import{C as ue}from"./index-cb5a08aa.js";import{T as _e}from"./index-3e8503e7.js";import{I as fe}from"./index-8d30ace7.js";import{aA as d,al as xe,k as pe,o as n,p as e,x as o,bj as c,m as F,n as y,aF as f,as as i,aT as j,w as ae,bo as ve,F as E,aD as D}from"./preload-helper-f37a9bec.js";import{_ as ge,c as he,a as te,u as be}from"./index-f91482a0.js";import"./appex-chart-e4d84b07.js";import{B as ye}from"./index-c2d6eb9c.js";import{M as ke}from"./Modal-b54f1b5f.js";import{c as Ie,a as R}from"./array-6ac4c54d.js";import{u as we,a as P}from"./vee-validate.esm-bf91438b.js";import{p as ze,a as Se,b as je,c as Ce,d as Ae,e as Me,f as Ve,g as Ne,h as Ee,A as De}from"./index-6ecf5774.js";import{N as Re}from"./index-f32159fc.js";import{T as Pe}from"./index-b52aeb81.js";import"./vue-cleave.min-df5c8cc9.js";import"./iconify-2baafea4.js";import"./transition-be7c09bc.js";import"./dom-b10fc197.js";import"./hidden-800255f5.js";import"./focus-management-94a631f4.js";import"./micro-task-89dcd6af.js";import"./open-closed-75edfb8a.js";import"./use-outside-click-156e41c1.js";const Te=[{name:"profile-1",image:ze},{name:"profile-2",image:Se},{name:"profile-3",image:je},{name:"profile-4",image:Ce},{name:"profile-5",image:Ae},{name:"profile-6",image:Me},{name:"profile-7",image:Ve},{name:"profile-8",image:Ne},{name:"profile-9",image:Ee}];const Le={components:{Card:ue,Textinput:_e,Button:ye,Modal:ke,Icon:fe,Avatar:De,NavigationPath:Re,Tooltip:Pe},setup(){const U=be(),s=he().userInfo,C=d(!1),t=d(!1),k=d(""),I=d("");d("");const w=d(""),m=d(""),b=d([]),x=d([]),p=d([]),v=d([]),A=Ie({fullname:R().nullable().required("กรุณาระบุว่าอยู่ภายใต้หน่วยงานใด"),position:R().required("กรุณาระบุชื่อหน่วยงาน"),email:R().required("กรุณาระบุอักษรย่อหน่วยงาน"),mobile_phone:R().required("กรุณาระบุรหัสหน่วยงาน")}),{handleSubmit:M}=we({validationSchema:A});xe(async()=>{var _,V,z,N,S,q,O,J,G,H,K,Q,W,X,Y;const{data:l,status:u}=await te("usersStore","edit",{payload:s.id});u===200&&(a.value=(_=l.result)==null?void 0:_.data.full_name,r.value=(V=l.result)==null?void 0:V.data.position,L.value=(z=l.result)==null?void 0:z.data.email,B.value=(N=l.result)==null?void 0:N.data.mobile_phone,I.value=(q=(S=l.result)==null?void 0:S.data)!=null&&q.profile_image?(J=(O=l.result)==null?void 0:O.data)==null?void 0:J.profile_image:"profile-1",m.value=(G=l.result)==null?void 0:G.datnama.organization_id,b.value=(H=l.result)==null?void 0:H.organizations_list,x.value=(K=l.result)==null?void 0:K.sarabun_role_list,p.value=(Q=l.result)==null?void 0:Q.user_list,w.value=(W=l.result)==null?void 0:W.data.sarabun_role_id,v.value=(Y=(X=l.result)==null?void 0:X.data)==null?void 0:Y.user_sarabun_roles.map(h=>{var Z,$,ee;return{item_id:h.sarabun_role_id,name:(Z=h==null?void 0:h.sarabun_role)==null?void 0:Z.name,organization_id:(ee=($=h==null?void 0:h.sarabun_role)==null?void 0:$.organization)==null?void 0:ee.id}}))});const{value:a,errorMessage:g}=P("fullname"),{value:r,errorMessage:T}=P("position"),{value:L,errorMessage:se}=P("email"),{value:B,errorMessage:oe}=P("mobile_phone"),le=M(async()=>{let l=s.id,u={fullname:a.value,position:r.value,email:L.value,mobile_phone:B.value,profile_image:I.value};console.log("submit profile setting",u);const _=await te("usersStore","updateUserProfile",{payload:{id:l,data:u}});console.log("RES NAJA",_),_.status===200&&(C.value=!0)}),ie=()=>{t.value=!0},re=()=>{C.value=!1,U.push("/app/profile")},ne=()=>{t.value=!1},de=()=>{t.value=!1,I.value=k.value,k.value=""},ce=l=>{k.value=l.name},me=pe(()=>{console.log("userRole",v.value);const l=v.value.reduce((u,_)=>{const V=_.organization_id,z=u.findIndex(N=>{var S;return((S=N[0])==null?void 0:S.organization_id)===V});return z!==-1?u[z].push(_):u.push([_]),u},[]);return console.log("userRoleDisplay",l),l});return{userRole:v,userRoleDisplay:me,avatars:Te,email:L,fullname:a,userInfo:s,position:r,sarabun_role_id:w,emailError:se,isShowDialog:C,mobile_phone:B,profileImage:I,organizeList:b,fullNameError:g,positionError:T,imageSelected:k,organizationId:m,mobilePhoneError:oe,sarabunRolesList:x,isShowDialogAvatar:t,onSubmit:le,onAccept:re,EditAvatar:ie,onAcceptImgae:de,onRejectImage:ne,onSelectedImage:ce,userList:p}}},Be={class:"space-y-4"},Fe={class:"grid grid-cols-12 gap-6"},Ue={class:"lg:col-span-12 col-span-12"},qe={class:"profiel-wrap lg:flex justify-between items-center"},Oe={class:"profile-box flex-none md:text-start text-center"},Je={class:"md:flex items-center md:space-x-6 rtl:space-x-reverse"},Ge={class:"md:h-[156px] md:w-[156px] h-[110px] w-[110px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100"},He={class:"flex-1"},Ke={class:"text-3xl font-medium text-slate-900 dark:text-slate-200 mb-[10px]"},Qe={class:"text-sm font-medium text-slate-900 dark:text-slate-200"},We={class:"text-slate-600 dark:text-slate-400"},Xe={class:"profile-info-500 md:flex md:text-start text-center flex max-w-[516px] md:space-y-0 space-y-4"},Ye={class:"grid grid-cols-12 gap-6"},Ze={class:"lg:col-span-12 col-span-12"},$e={class:"list space-y-8"},et={class:"flex"},tt={class:"flex-1 w-50 flex gap-5 items-center justify-end"},at=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200"}," ชื่อ-นามสกุล : ",-1),st={class:"flex-1 w-50 flex gap-5 items-center justify-end"},ot=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200"}," ตำแหน่ง : ",-1),lt={class:"flex"},it={class:"flex-1 w-50 flex gap-5 items-center justify-end"},rt=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200"}," อีเมล : ",-1),nt={class:"flex-1 w-50 flex gap-5 items-center justify-end"},dt=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200"}," เบอร์โทรศัพท์ : ",-1),ct={class:"flex"},mt={class:"flex-1 flex gap-5 items-center justify-start"},ut=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," หน่วยงาน : ",-1),_t={class:"text-slate-600 dark:text-slate-400 mb-1"},ft={class:"ell-11 truncate text-left"},xt={class:"flex"},pt={class:"flex-1 flex gap-5 justify-start"},vt=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," เจ้าหน้าที่ปฏิบัติราชการแทน ",-1),gt={class:"text-slate-600 dark:text-slate-400 mb-1"},ht={class:"space-y-2"},bt={class:"h-[40px] w-[40px] md:ml-0 md:mr-3 ml-auto mr-auto md:mb-0 mb-4"},yt={class:"flex-1"},kt={class:"text-slate-600 dark:text-slate-400 mb-1"},It={class:"text-base text-slate-500 dark:text-slate-300"},wt={class:"text-center mt-10 flex justify-center"},zt={class:"h-36 flex items-center justify-center"},St={class:"text-center flex flex-row flex-wrap justify-center"},jt={class:"basis-full flex justify-center mb-5"},Ct=e("h4",{class:"text-lg text-slate-900"},[ae(" บันทึกการแก้ไขข้อมูลโปรไฟล์ "),e("span",{class:"text-green-500"},"สำเร็จ")],-1),At={class:"flex justify-center w-full"},Mt={class:"grid grid-cols-3 gap-4 px-8"},Vt=["src","onClick"],Nt={key:0,class:"image-selected"},Et={class:"text-center flex justify-center w-full mt-3"},Dt={class:"grid grid-cols-12 gap-6"},Rt={class:"lg:col-span-12 col-span-12"},Pt={class:"list space-y-8"},Tt={class:"flex"},Lt={class:"flex-1 flex gap-5 justify-start"},Bt=e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบสารบรรณอิเล็กทรอนิกส์ : ",-1),Ft={class:"text-slate-600 dark:text-slate-400 mb-1"},Ut={class:"space-y-2"},qt={key:0},Ot={class:"ell-11 truncate text-left"},Jt={key:0},Gt=e("div",{class:"flex"},[e("div",{class:"flex-1 flex gap-5 items-center justify-start"},[e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบบริหารเอกสารอิเล็กทรอนิกส์ : "),e("div",{class:"text-slate-600 dark:text-slate-400 mb-1"}," บุคลากร ")])],-1),Ht=e("div",{class:"flex"},[e("div",{class:"flex-1 flex gap-5 items-center justify-start"},[e("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบประชุมอิเล็กทรอนิกส์ : "),e("div",{class:"text-slate-600 dark:text-slate-400 mb-1"}," บุคลากร ")])],-1);function Kt(U,s,C,t,k,I){const w=f("Avatar"),m=f("Button"),b=f("Card"),x=f("Textinput"),p=f("NavigationPath"),v=f("Tooltip"),A=f("Icon"),M=f("Modal");return i(),n("div",Be,[e("div",Fe,[e("div",Ue,[o(b,null,{default:c(()=>[e("div",qe,[e("div",Oe,[e("div",Je,[e("div",Ge,[o(w,{image:t.profileImage},null,8,["image"])]),e("div",He,[e("div",Ke,j(t.userInfo.full_name),1),e("div",Qe,[ae(" ตำแหน่ง : "),e("span",We,j(t.userInfo.position),1)])])])]),e("div",Xe,[e("div",null,[o(m,{text:"เปลี่ยนรูปอวตาร",btnClass:"btn-primary ",onOnClick:s[0]||(s[0]=a=>t.EditAvatar())})])])])]),_:1})])]),e("div",Ye,[e("div",Ze,[o(b,{title:"ข้อมูลทั่วไป"},{default:c(()=>[e("form",{onSubmit:s[5]||(s[5]=ve((...a)=>t.onSubmit&&t.onSubmit(...a),["prevent"])),class:"px-0 sm:px-12"},[e("div",$e,[e("div",et,[e("div",tt,[at,o(x,{classInput:"border border-gray-400 w-[275px]",modelValue:t.fullname,error:t.fullNameError,"onUpdate:modelValue":s[1]||(s[1]=a=>t.fullname=a)},null,8,["modelValue","error"])]),e("div",st,[ot,o(x,{classInput:"border border-gray-400 w-[275px]",modelValue:t.position,error:t.positionError,"onUpdate:modelValue":s[2]||(s[2]=a=>t.position=a)},null,8,["modelValue","error"])])]),e("div",lt,[e("div",it,[rt,o(x,{classInput:"border border-gray-400 w-[275px]",modelValue:t.email,error:t.emailError,"onUpdate:modelValue":s[3]||(s[3]=a=>t.email=a)},null,8,["modelValue","error"])]),e("div",nt,[dt,o(x,{classInput:"border border-gray-400 w-[275px]",modelValue:t.mobile_phone,error:t.mobilePhoneError,"onUpdate:modelValue":s[4]||(s[4]=a=>t.mobile_phone=a)},null,8,["modelValue","error"])])]),e("div",ct,[e("div",mt,[ut,e("div",_t,[t.organizationId?(i(),F(v,{key:0,placement:"top",arrow:"",theme:"light"},{base:c(()=>[e("div",ft,[o(p,{arrayItems:t.organizeList,targetId:t.organizationId,keyId:"item_id",targetName:"organization_name",typePath:"organization"},null,8,["arrayItems","targetId"])])]),default:c(()=>[o(p,{arrayItems:t.organizeList,targetId:t.organizationId,keyId:"item_id",targetName:"organization_name",typePath:"organization"},null,8,["arrayItems","targetId"])]),_:1})):y("",!0)])])]),e("div",xt,[e("div",pt,[vt,e("div",gt,[e("div",ht,[(i(!0),n(E,null,D(t.userList,(a,g)=>(i(),n("div",{class:"flex",key:g},[e("div",bt,[o(w,{image:a.profile_image},null,8,["image"])]),e("div",yt,[e("div",kt,j(a.full_name),1),e("div",It,j(a.email),1)])]))),128))])])])])]),e("div",wt,[o(m,{type:"submit",text:"บันทึก",btnClass:"btn-primary w-32 font-medium mx-2"}),o(m,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",link:"/app/profile"})])],32)]),_:1})])]),t.isShowDialog?(i(),F(M,{key:0,title:"บันทึกการแก้ไขข้อมูลโปรไฟล์",label:"",labelClass:"btn-outline-dark",ref:"modalDialog",centered:"",activeModal:t.isShowDialog,"onEvent:closeModal":s[7]||(s[7]=a=>t.onAccept())},{footer:c(()=>[e("div",At,[o(m,{text:"ปิด",btnClass:"btn-primary w-36",onClick:s[6]||(s[6]=a=>t.onAccept())})])]),default:c(()=>[e("div",zt,[e("div",St,[e("div",jt,[o(A,{icon:"icon-park-solid:protect",class:"text-5xl text-green-500"})]),Ct])])]),_:1},8,["activeModal"])):y("",!0),t.isShowDialogAvatar?(i(),F(M,{key:1,title:"เปลี่ยนรูปโปรไฟล์",label:"",labelClass:"btn-outline-dark",ref:"modalDialog",centered:"",activeModal:t.isShowDialogAvatar,"onEvent:closeModal":s[10]||(s[10]=a=>t.onRejectImage())},{footer:c(()=>[e("div",Et,[o(m,{text:"ยืนยัน",type:"submit",btnClass:"btn-primary w-32 font-medium mx-2",onOnClick:s[8]||(s[8]=a=>t.onAcceptImgae())}),o(m,{text:"ยกเลิก",btnClass:"btn-outline-dark w-32 mx-2",onOnClick:s[9]||(s[9]=a=>t.onRejectImage())})])]),default:c(()=>[e("div",Mt,[(i(!0),n(E,null,D(t.avatars,(a,g)=>(i(),n("div",{class:"relative w-full h-[145px]",key:g},[e("img",{src:a.image,alt:"",class:"w-full h-full object-cover rounded-full absolute top-0 right-0",onClick:r=>t.onSelectedImage(a)},null,8,Vt),t.imageSelected==a.name?(i(),n("div",Nt,[o(A,{icon:"ph:check-bold",class:"text-7xl text-green-600"})])):y("",!0)]))),128))])]),_:1},8,["activeModal"])):y("",!0),e("div",Dt,[e("div",Rt,[o(b,{title:"ข้อมูลบทบาท"},{default:c(()=>[e("div",Pt,[e("div",Tt,[e("div",Lt,[Bt,e("div",Ft,[e("div",Ut,[(i(!0),n(E,null,D(t.userRoleDisplay,(a,g)=>(i(),n("div",{class:"flex-1",key:g},[o(v,{placement:"top",arrow:"",theme:"light"},{base:c(()=>{var r;return[a.length>0?(i(),n("div",qt,[e("div",Ot,[o(p,{arrayItems:t.sarabunRolesList,targetId:(r=a[0])==null?void 0:r.organization_id,keyId:"item_id",targetName:"organization_name",typePath:"role"},null,8,["arrayItems","targetId"])])])):y("",!0)]}),default:c(()=>{var r;return[a.length>0?(i(),n("div",Jt,[o(p,{arrayItems:t.sarabunRolesList,targetId:(r=a[0])==null?void 0:r.organization_id,keyId:"item_id",targetName:"organization_name",typePath:"role"},null,8,["arrayItems","targetId"])])):y("",!0)]}),_:2},1024),(i(!0),n(E,null,D(a,(r,T)=>(i(),n("div",{key:T,class:"capitalize text-slate-500 text-sm dark:text-slate-400 pl-3"},j("• "+r.name),1))),128))]))),128))])])])]),Gt,Ht])]),_:1})])])])}const pa=ge(Le,[["render",Kt]]);export{pa as default};