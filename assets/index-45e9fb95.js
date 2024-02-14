import{M as ne}from"./Modal-b54f1b5f.js";import{R as le}from"./index-e163c14d.js";import{u as re,a as T}from"./vee-validate.esm-bf91438b.js";import{c as N,a as S}from"./array-6ac4c54d.js";import{aA as c,k as D,be as j,aF as n,as as i,o as v,m as C,bj as m,p as t,x as s,F as R,aD as A,aT as G,n as B,ac as H,bo as ie}from"./preload-helper-f37a9bec.js";import{B as de}from"./index-c2d6eb9c.js";import{T as ce}from"./TextValid-d1c607fc.js";import{T as ue}from"./index-78f015fc.js";import{T as me}from"./index-3e8503e7.js";import{P as pe}from"./index-e68945de.js";import{B as _e,_ as ve,g as be,c as b,t as xe}from"./index-f91482a0.js";import{I as ge}from"./index-8d30ace7.js";import{l as fe,a as ye,n as he,r as Te,u as Se}from"./tabs-cf3e0d3b.js";const Ce={components:{Modal:ne,Radio:le,Button:de,TextValid:ce,Textarea:ue,Textinput:me,PinInput:pe,TabGroup:fe,TabList:ye,Tab:he,TabPanels:Te,TabPanel:Se,VueSignaturePad:_e,Icon:ge},props:{isOpen:{type:Boolean,default:!1}},emits:["event:close","event:submit"],setup(J,{emit:l}){const P=c(xe),e=c(!1),I=c(!1),x=c(null),k=c(["เพื่อโปรดพิจารณา","เพื่อโปรดอนุมัติ","เพื่อโปรดทราบ","เห็นควรมอบ","เพื่อโปรดอนุเคราะห์"]),g=c([{title:"ใบรับรองอิเล็กทรอนิกส์"},{title:"วาดลายมือชื่อ"}]),d=c(0),f=c(0),M=c(""),F=N({orderType:S().required("กรุณาเลือกคำสั่งการ/คำเสนอ"),orderDetail:S().required("กรุณาเลือกคำสั่งการ/คำเสนอ")}),V=N({position:S().required("กรุณาใส่ตำแหน่ง"),signature:S().required("กรุณาใส่ลายเซ็น"),pincode:S().required("กรุณากรอกรหัส PIN Code ของใบอนุญาติอิเล็กทรอนิกส์")}),p=D(()=>{switch(console.log("modalStep.value",d.value),d.value){case 0:return F;case 1:return V;default:return}}),{handleSubmit:z,resetForm:L}=re({validationSchema:p}),{value:y,errorMessage:O}=T("orderType"),{value:u,errorMessage:U}=T("orderDetail"),{value:h,errorMessage:E}=T("position"),{value:a,errorMessage:_}=T("signature"),{value:w,errorMessage:q}=T("pincode"),K=D(()=>be().isMobile),Q=D(()=>{var o,r;return h.value=(r=(o=b().userInfo)==null?void 0:o.organization)==null?void 0:r.organization_name,b().userInfo}),W=D(()=>{var o;return(o=b().userInfo)==null?void 0:o.signature_path});j(()=>q.value,o=>{M.value=o}),j(()=>f.value,o=>{var r;o==0&&(a.value=(r=b().userInfo)==null?void 0:r.signature_path)},{immediate:!0});const X=()=>{x.value.undoSignature()},Y=()=>{I.value=!0,setTimeout(()=>{const{isEmpty:o,data:r}=x.value.saveSignature();a.value=r,I.value=!1},1e3)},Z=()=>{a.value="",x.value.clearSignature()},$=o=>{var r;f.value=o,a.value="",o==0&&(a.value=(r=b().userInfo)==null?void 0:r.signature_path),console.log("tabtab",o)},ee=o=>{u.value=(u.value??"")+o+" "},te=()=>{d.value--},ae=o=>{console.log("updatePin",o),w.value=o},oe=z(async o=>{let r=2;if(d.value===r-1){d.value=r-1;const se={pincode:w.value,order_detail:u.value,order_type:y.value,signature:a.value};l("event:submit",se)}else d.value++});return{imageUrl:P,textAuto:k,modalStep:d,userInfo:Q,tabMenu:g,selected:f,signaturePad:x,saveSignature:I,clearPin:e,orderType:y,orderTypeError:O,orderDetail:u,orderDetailError:U,position:h,positionError:E,signature:a,signatureError:_,pincode:w,pincodeError:q,pinError:M,isMobile:K,submitModal:oe,addoOderDetail:ee,prev:te,updatePin:ae,signaturePathImage:W,changeTab:$,save:Y,undo:X,remove:Z,onClose:()=>{var o;y.value="",u.value="",a.value=(o=b().userInfo)==null?void 0:o.signature_path,w.value="",e.value=!0,d.value=0,l("event:close")}}}},Pe={key:0},Ie={class:"mb-3"},ke=t("div",{class:"text-gray-500 text-[16px]"},"คำสั่งการ/คำเสนอ",-1),Me={class:"mb-3"},Ve=t("div",{class:"text-gray-500 text-[16px]"},"คำสั่งการ/คำเสนอ",-1),Ee=t("div",{class:"text-gray-500 text-[16px]"}," รูปแบบคำสั่งการ/คำเสนอ/การปฏิบัติ ",-1),we={class:"flex flex-wrap gap-2 mt-2"},De=["onClick"],Be={key:1},Fe=t("div",{class:"text-gray-500 text-[16px]"},"ตำแหน่ง",-1),ze={class:"mt-6"},Oe=t("div",{class:"text-gray-500 text-[16px] mb-2"},"ลงนามคำสั่งการ",-1),Ue={class:"flex items-center gap-3"},Le=["src"],qe=t("div",{class:"text-gray-500 text-[12px]"}," วาดลายมือชื่อ (ภาษาไทย) ",-1),Ne={class:"text-slate-600 text-sm font-normal"},je={class:"border-2"},Re={class:"container p-2 space-y-2"},Ae={class:"flex justify-between items-center gap-3"},Ge=t("div",{class:"md:text-[12px] text-[12px]"}," วาดลายมือชื่อ ",-1),He={class:"flex gap-2"},Je={class:"p-2"},Ke={class:"text-[16px] basis-1/4"},Qe={class:"mt-3"},We=t("div",{class:"text-gray-500 text-[16px]"},"รหัส PIN Code",-1),Xe={class:""},Ye=t("hr",{class:"my-5"},null,-1);function Ze(J,l,P,e,I,x){const k=n("Radio"),g=n("TextValid"),d=n("Textarea"),f=n("Textinput"),M=n("Tab"),F=n("TabList"),V=n("TabPanel"),p=n("Icon"),z=n("VueSignaturePad"),L=n("TabPanels"),y=n("TabGroup"),O=n("PinInput"),u=n("Button"),U=n("Modal");return i(),v("div",null,[P.isOpen?(i(),C(U,{key:0,title:"บันทึกคำสั่งการ/คำเสนอ/การปฏิบัติ",activeModal:P.isOpen,"onEvent:closeModal":e.onClose,label:"",labelClass:"btn-outline-dark",sizeClass:"w-full",centered:""},{default:m(()=>{var h,E;return[t("form",{onSubmit:l[4]||(l[4]=ie((...a)=>e.submitModal&&e.submitModal(...a),["prevent"])),class:"-m-3 modal__submit-order"},[e.modalStep==0?(i(),v("div",Pe,[t("div",Ie,[ke,s(k,{label:"รับเพื่อทราบ",modelValue:e.orderType,"onUpdate:modelValue":l[0]||(l[0]=a=>e.orderType=a),value:"รับเพื่อทราบ",labelClass:"text-[16px]"},null,8,["modelValue"]),s(k,{label:"รับเพื่อดำเนินการ",modelValue:e.orderType,"onUpdate:modelValue":l[1]||(l[1]=a=>e.orderType=a),value:"รับเพื่อดำเนินการ",labelClass:"text-[16px]"},null,8,["modelValue"]),s(g,{valid:e.orderTypeError},null,8,["valid"])]),t("div",Me,[Ve,s(d,{modelValue:e.orderDetail,"onUpdate:modelValue":l[2]||(l[2]=a=>e.orderDetail=a),error:e.orderDetailError,classInput:"border border-gray-400 text_area_bg",placeholder:""},null,8,["modelValue","error"])]),t("div",null,[Ee,t("div",we,[(i(!0),v(R,null,A(e.textAuto,a=>(i(),v("button",{type:"button",key:a,class:"text-[12px] border rounded-xl border-blue-400 bg-blue-50 px-2 py-1",onClick:_=>e.addoOderDetail(a)},G(a),9,De))),128))])])])):B("",!0),e.modalStep==1?(i(),v("div",Be,[Fe,s(f,{modelValue:(E=(h=e.userInfo)==null?void 0:h.organization)==null?void 0:E.organization_name,classInput:"border border-gray-400",disabled:""},null,8,["modelValue"]),t("div",ze,[Oe,s(y,{selectedIndex:e.selected,onChange:e.changeTab},{default:m(()=>[s(F,{class:"flex"},{default:m(()=>[(i(!0),v(R,null,A(e.tabMenu,(a,_)=>(i(),C(M,{as:"template",disabled:!e.signaturePathImage&&_==0,key:_,class:"basis-1/2"},{default:m(()=>[t("button",{class:H([[e.selected==_?"text-primary-500 before:w-full border-b-2 border-primary-500":"text-slate-500 before:w-0 dark:text-slate-300 border-b-2 border-gray-200"],"text-sm font-medium mb-2 capitalize bg-gray-200 py-2"])},G(a.title),3)]),_:2},1032,["disabled"]))),128))]),_:1}),s(L,null,{default:m(()=>[s(V,null,{default:m(()=>[t("div",Ue,[t("img",{src:e.imageUrl+e.signaturePathImage,class:"h-[80px] w-[150px] object-cover border"},null,8,Le),qe])]),_:1}),s(V,null,{default:m(()=>[t("div",Ne,[t("div",je,[t("div",Re,[t("div",Ae,[Ge,t("div",He,[e.saveSignature?(i(),C(p,{key:0,icon:"eos-icons:bubble-loading",class:"text-green-500 text-2xl animate-spin"})):(i(),C(p,{key:1,icon:"material-symbols:save",class:"text-green-500 text-2xl",onClick:e.save},null,8,["onClick"])),s(p,{icon:"dashicons:undo",class:"text-gray-500 text-2xl border-l pl-2",onClick:e.undo},null,8,["onClick"]),s(p,{icon:"material-symbols:delete",class:"text-red-500 text-2xl",onClick:e.remove},null,8,["onClick"])])]),t("div",Je,[s(z,{id:"signature",ref:"signaturePad"},null,512)])])])])]),_:1})]),_:1})]),_:1},8,["selectedIndex","onChange"]),t("div",Ke,[s(g,{valid:e.signatureError},null,8,["valid"])])]),t("div",Qe,[We,s(O,{classInput:"border border-gray-400",placeholder:"กรอกรหัส Pin Code","onUpdate:modelValue":e.updatePin,clearForm:e.clearPin},null,8,["onUpdate:modelValue","clearForm"]),t("div",Xe,[s(g,{valid:e.pinError},null,8,["valid"])])])])):B("",!0),Ye,t("div",{class:H(e.modalStep>0?"flex justify-between":" text-right")},[e.modalStep!==0?(i(),C(u,{key:0,onClick:l[3]||(l[3]=a=>e.prev()),text:"ย้อนกลับ",btnClass:"btn-outline-dark"})):B("",!0),s(u,{type:"submit",text:e.modalStep!==1?"ถัดไป":"บันทึก",btnClass:"btn-primary"},null,8,["text"])],2)],32)]}),_:1},8,["activeModal","onEvent:closeModal"])):B("",!0)])}const _t=ve(Ce,[["render",Ze]]);export{_t as O};