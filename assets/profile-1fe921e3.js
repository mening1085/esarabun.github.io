import{C as L}from"./index-cb5a08aa.js";import{I as C}from"./index-8d30ace7.js";import{a as P,d as R}from"./appex-chart-e4d84b07.js";import{B}from"./index-c2d6eb9c.js";import{_ as A,w as T,c as z,a as D}from"./index-f91482a0.js";import{T as M}from"./index-b52aeb81.js";import{N as F}from"./index-f32159fc.js";import{A as S}from"./index-6ecf5774.js";import{o as l,p as t,x as o,bj as d,n as m,aF as x,as as i,aT as f,w as V,m as E,F as I,aD as k}from"./preload-helper-f37a9bec.js";import"./iconify-2baafea4.js";const U={mixins:[T],components:{Card:L,Icon:C,Button:B,Tooltip:M,NavigationPath:F,Avatar:S},data(){return{basicArea:P,basicAreaDark:R,organizeList:[],roleList:[],userRole:[],userInfo:z().userInfo?z().userInfo:{}}},computed:{isMobile(){return this.window.width<768},userRoleDisplay(){const p=this.userRole.reduce((s,u)=>{const y=u.organization_id,e=s.findIndex(n=>{var c;return((c=n[0])==null?void 0:c.organization_id)===y});return e!==-1?s[e].push(u):s.push([u]),s},[]);return console.log("result",p),p}},created(){this.getUserProfile()},methods:{async getUserProfile(){var u;let s=(u=(await D("usersStore","edit",{payload:this.userInfo.id})).data)==null?void 0:u.result;s&&(this.userInfo.full_name=s.data.full_name,this.userInfo.position=s.data.position,this.userInfo.email=s.data.email,this.userInfo.mobile_phone=s.data.mobile_phone,this.userInfo.organizationId=s.data.organization_id,this.userInfo.profile_image=s.data.profile_image,this.userInfo.userList=s.data.user_represent_permissions||[],this.organizeList=s.organizations_list||[],this.roleList=s.sarabun_role_list||[],(s==null?void 0:s.data.user_sarabun_roles).forEach(e=>{this.userRole.push(e)}),this.userRole=this.userRole.map(e=>{var n,c,h;return{item_id:e.sarabun_role_id,name:(n=e==null?void 0:e.sarabun_role)==null?void 0:n.name,organization_id:(h=(c=e==null?void 0:e.sarabun_role)==null?void 0:c.organization)==null?void 0:h.id}}))},logout(){this.$router.push("/"),localStorage.clear()}}},q={class:"space-y-4"},G={class:"grid grid-cols-12 gap-6"},H={class:"lg:col-span-12 col-span-12"},J={class:"flex justify-between items-center gap-[16px] max-md:flex-col"},K={class:"profile-box flex-none md:text-start text-center"},O={class:"md:flex items-center md:space-x-6 rtl:space-x-reverse"},Q={class:"md:h-[156px] md:w-[156px] h-[110px] w-[110px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100"},W={class:"flex-1"},X={class:"text-3xl font-medium text-slate-900 dark:text-slate-200 mb-[10px]"},Y={class:"text-sm font-medium text-slate-900 dark:text-slate-200"},Z={class:"text-slate-600 dark:text-slate-400"},$={key:0,class:"profile-info-500 md:flex md:text-start text-center flex justify-center max-w-[516px] md:space-y-0 space-y-4"},tt={key:0,class:"grid grid-cols-12 gap-6"},et={class:"lg:col-span-12 col-span-12"},st={class:"flex flex-col gap-3"},at={class:"text-sm text-slate-900"},ot=t("div",null,"เปลี่ยนรหัส PIN Application",-1),it=t("hr",null,null,-1),lt={key:1,class:"grid grid-cols-12 gap-6"},nt={class:"lg:col-span-12 col-span-12"},rt={class:"list space-y-8"},dt={class:"flex"},ct={class:"flex-1 flex gap-5 items-center justify-start"},_t=t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," อีเมล : ",-1),ut={class:"text-slate-600 dark:text-slate-400 mb-1"},mt={class:"flex"},xt={class:"flex-1 flex gap-5 items-center justify-start"},ft=t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," เบอร์โทรศัพท์ : ",-1),pt={class:"text-slate-600 dark:text-slate-400 mb-1"},ht={class:"flex"},gt={class:"flex-1 flex gap-5 items-center justify-start"},vt=t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," หน่วยงาน : ",-1),yt={class:"text-slate-600 dark:text-slate-400 mb-1"},It={class:"text-left pl-3"},kt={class:"flex"},bt={class:"flex-1 flex gap-5 justify-start"},zt=t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," เจ้าหน้าที่ปฏิบัติราชการแทน ",-1),wt={class:"space-y-3"},Nt={class:"h-[40px] w-[40px]"},jt={class:"flex-1"},Lt={class:"text-slate-600"},Ct={class:"text-base text-slate-500 dark:text-slate-300"},Pt={key:2,class:"grid grid-cols-12 gap-6"},Rt={class:"lg:col-span-12 col-span-12"},Bt={class:"list space-y-8"},At={class:"flex"},Tt={class:"flex-1 flex gap-5 justify-start"},Dt=t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบสารบรรณอิเล็กทรอนิกส์ : ",-1),Mt={class:"text-slate-600 dark:text-slate-400 mb-1"},Ft={class:"space-y-2"},St={key:0},Vt={class:"ell-11 truncate text-left"},Et={key:0},Ut=t("div",{class:"flex"},[t("div",{class:"flex-1 flex gap-5 items-center justify-start"},[t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบบริหารเอกสารอิเล็กทรอนิกส์ : "),t("div",{class:"text-slate-600 dark:text-slate-400 mb-1"}," บุคลากร ")])],-1),qt=t("div",{class:"flex"},[t("div",{class:"flex-1 flex gap-5 items-center justify-start"},[t("div",{class:"text-sm font-medium text-slate-900 dark:text-slate-200 layout-flex text-end"}," ระบบประชุมอิเล็กทรอนิกส์ : "),t("div",{class:"text-slate-600 dark:text-slate-400 mb-1"}," บุคลากร ")])],-1);function Gt(p,s,u,y,e,n){const c=x("Avatar"),h=x("Button"),w=x("router-link"),g=x("Card"),N=x("Icon"),v=x("NavigationPath"),b=x("Tooltip");return i(),l("div",q,[t("div",G,[t("div",H,[o(g,null,{default:d(()=>{var a,_;return[t("div",J,[t("div",K,[t("div",O,[t("div",Q,[o(c,{image:(a=e.userInfo)!=null&&a.profile_image?(_=e.userInfo)==null?void 0:_.profile_image:"profile-1"},null,8,["image"])]),t("div",W,[t("div",X,f(e.userInfo.full_name),1),t("div",Y,[V(" ตำแหน่ง : "),t("span",Z,f(e.userInfo.position),1)])])])]),n.isMobile?m("",!0):(i(),l("div",$,[t("div",null,[o(w,{to:"profile/edit"},{default:d(()=>[o(h,{icon:"ph:note-pencil-bold",text:"แก้ไขข้อมูล",btnClass:"btn-primary "})]),_:1})])]))])]}),_:1})])]),n.isMobile?(i(),l("div",tt,[t("div",et,[o(g,{"body-class":"p-4"},{default:d(()=>[t("div",st,[t("div",at,[t("div",{class:"flex justify-between items-center mb-3",onClick:s[0]||(s[0]=a=>p.$router.push("/app/profile/pin"))},[ot,o(N,{icon:"heroicons-outline:chevron-right"})]),it]),t("div",{class:"text-sm text-slate-900 text-center",style:{color:"#f05252"},onClick:s[1]||(s[1]=(...a)=>n.logout&&n.logout(...a))}," ออกจากระบบ ")])]),_:1})])])):m("",!0),n.isMobile?m("",!0):(i(),l("div",lt,[t("div",nt,[o(g,{title:"ข้อมูลทั่วไป"},{default:d(()=>{var a;return[t("div",rt,[t("div",dt,[t("div",ct,[_t,t("div",ut,f(e.userInfo.email),1)])]),t("div",mt,[t("div",xt,[ft,t("div",pt,f(e.userInfo.mobile_phone),1)])]),t("div",ht,[t("div",gt,[vt,t("div",yt,[e.userInfo.organizationId?(i(),E(b,{key:0,placement:"top",arrow:"",theme:"light"},{base:d(()=>[t("div",It,[o(v,{arrayItems:e.organizeList,targetId:e.userInfo.organizationId,keyId:"item_id",targetName:"organization_name",typePath:"organization"},null,8,["arrayItems","targetId"])])]),default:d(()=>[o(v,{arrayItems:e.organizeList,targetId:e.userInfo.organizationId,keyId:"item_id",targetName:"organization_name",typePath:"organization"},null,8,["arrayItems","targetId"])]),_:1})):m("",!0)])])]),t("div",kt,[t("div",bt,[zt,t("div",wt,[(i(!0),l(I,null,k((a=e.userInfo)==null?void 0:a.userList,(_,r)=>(i(),l("div",{class:"flex items-center gap-2",key:r},[t("div",Nt,[o(c,{image:_.represent_user.profile_image},null,8,["image"])]),t("div",jt,[t("div",Lt,f(_.represent_user.full_name),1),t("div",Ct,f(_.represent_user.email),1)])]))),128))])])])])]}),_:1})])])),n.isMobile?m("",!0):(i(),l("div",Pt,[t("div",Rt,[o(g,{title:"ข้อมูลบทบาท"},{default:d(()=>[t("div",Bt,[t("div",At,[t("div",Tt,[Dt,t("div",Mt,[t("div",Ft,[(i(!0),l(I,null,k(n.userRoleDisplay,(a,_)=>(i(),l("div",{class:"flex-1",key:_},[o(b,{placement:"top",arrow:"",theme:"light"},{base:d(()=>{var r;return[a.length>0?(i(),l("div",St,[t("div",Vt,[o(v,{arrayItems:e.roleList,targetId:(r=a[0])==null?void 0:r.organization_id,keyId:"item_id",targetName:"organization_name",typePath:"role"},null,8,["arrayItems","targetId"])])])):m("",!0)]}),default:d(()=>{var r;return[a.length>0?(i(),l("div",Et,[o(v,{arrayItems:e.roleList,targetId:(r=a[0])==null?void 0:r.organization_id,keyId:"item_id",targetName:"organization_name",typePath:"role"},null,8,["arrayItems","targetId"])])):m("",!0)]}),_:2},1024),(i(!0),l(I,null,k(a,(r,j)=>(i(),l("div",{key:j,class:"capitalize text-slate-500 text-sm dark:text-slate-400 pl-3"},f("• "+r.name),1))),128))]))),128))])])])]),Ut,qt])]),_:1})])]))])}const te=A(U,[["render",Gt]]);export{te as default};