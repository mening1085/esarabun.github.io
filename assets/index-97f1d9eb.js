import{C as se}from"./index-8994827d.js";import{_ as le}from"./index-e058a960.js";import{aF as ie,as as i,o as d,p as r,aT as ue,m as b,n,F as j,aD as ee}from"./preload-helper-9e0646ca.js";const ae={name:"TableRow",components:{Checkbox:se},props:{sub:{type:Object,required:!0},showColumns:{type:Array,default:[]},isView:{type:Boolean,default:!1}},data(){return{secret:!1,inside:!1,outside:!1,index:!1,store:!1,update:!1,destroy:!1,exporter:!1,sign:!1,approve:!1}},emits:["onChecked"],created(){var o,l,e,U,u,a,t,m,c,_,V,k,h,y,C,g,w,f,v,x;this.sub.sarabun_role_permissions&&this.sub.sarabun_role_permissions.length>0&&(this.secret=(l=(o=this.sub)==null?void 0:o.sarabun_role_permissions[0])==null?void 0:l.secret,this.inside=(U=(e=this.sub)==null?void 0:e.sarabun_role_permissions[0])==null?void 0:U.inside,this.outside=(a=(u=this.sub)==null?void 0:u.sarabun_role_permissions[0])==null?void 0:a.outside,this.index=(m=(t=this.sub)==null?void 0:t.sarabun_role_permissions[0])==null?void 0:m.index,this.store=(_=(c=this.sub)==null?void 0:c.sarabun_role_permissions[0])==null?void 0:_.store,this.update=(k=(V=this.sub)==null?void 0:V.sarabun_role_permissions[0])==null?void 0:k.update,this.destroy=(y=(h=this.sub)==null?void 0:h.sarabun_role_permissions[0])==null?void 0:y.destroy,this.exporter=(g=(C=this.sub)==null?void 0:C.sarabun_role_permissions[0])==null?void 0:g.export,this.sign=(f=(w=this.sub)==null?void 0:w.sarabun_role_permissions[0])==null?void 0:f.sign,this.approve=(x=(v=this.sub)==null?void 0:v.sarabun_role_permissions[0])==null?void 0:x.approve)},methods:{checkColumn(o){return this.showColumns.includes(o)},onChecked(o,l,e){this.$emit("onChecked",o,l,e)}}},de={class:"pl-8"},te={class:"pl-6"},ne={key:0},be={class:"flex justify-center"},oe={key:0},re={key:1},me={class:"flex justify-center"},ce={key:0},_e={key:2},Ve={class:"flex justify-center"},ke={key:0},he={key:3},ye={class:"flex justify-center"},Ce={key:0},ge={key:4},we={class:"flex justify-center"},fe={key:0},ve={key:5},xe={class:"flex justify-center"},Ue={key:0},je={key:6},Te={class:"flex justify-center"},Be={key:0},Re={key:7},Oe={class:"flex justify-center"},Se={key:0},Ee={key:8},Fe={class:"flex justify-center"},qe={key:0},Ae={key:9},De={class:"flex justify-center"},Ne={key:0};function Le(o,l,e,U,u,a){var m,c,_,V,k,h,y,C,g,w,f,v,x,T,B,R,O,S,E,F,q,A,D,N,L,z,G,H,I,J,K,M,P,Q,W,X,Y,Z,p,$;const t=ie("Checkbox");return i(),d("tr",de,[r("td",null,[r("div",te,ue(e.sub.name),1)]),a.checkColumn("secret")?(i(),d("td",ne,[r("div",be,[e.sub.secret?(i(),d("div",oe,[(m=e.sub)!=null&&m.sarabun_role_permissions&&((c=e.sub)==null?void 0:c.sarabun_role_permissions.length)>0&&((V=(_=e.sub)==null?void 0:_.sarabun_role_permissions[0])!=null&&V.secret)?(i(),b(t,{key:0,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",disabled:e.isView,modelValue:u.secret,"onUpdate:modelValue":l[0]||(l[0]=s=>{u.secret=s,a.onChecked(e.sub,"secret",s)})},null,8,["activeClass","disabled","modelValue"])):(i(),b(t,{key:1,label:"",disabled:e.isView,activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.secret,"onUpdate:modelValue":l[1]||(l[1]=s=>{u.secret=s,a.onChecked(e.sub,"secret",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("inside")?(i(),d("td",re,[r("div",me,[e.sub.inside?(i(),d("div",ce,[(k=e.sub)!=null&&k.sarabun_role_permissions&&((h=e.sub)==null?void 0:h.sarabun_role_permissions.length)>0&&((C=(y=e.sub)==null?void 0:y.sarabun_role_permissions[0])!=null&&C.inside)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.inside,"onUpdate:modelValue":l[2]||(l[2]=s=>{u.inside=s,a.onChecked(e.sub,"inside",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.inside,"onUpdate:modelValue":l[3]||(l[3]=s=>{u.inside=s,a.onChecked(e.sub,"inside",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("outside")?(i(),d("td",_e,[r("div",Ve,[e.sub.outside?(i(),d("div",ke,[(g=e.sub)!=null&&g.sarabun_role_permissions&&((w=e.sub)==null?void 0:w.sarabun_role_permissions.length)>0&&((v=(f=e.sub)==null?void 0:f.sarabun_role_permissions[0])!=null&&v.outside)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.outside,"onUpdate:modelValue":l[4]||(l[4]=s=>{u.outside=s,a.onChecked(e.sub,"outside",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.outside,"onUpdate:modelValue":l[5]||(l[5]=s=>{u.outside=s,a.onChecked(e.sub,"outside",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("index")?(i(),d("td",he,[r("div",ye,[e.sub.index?(i(),d("div",Ce,[(x=e.sub)!=null&&x.sarabun_role_permissions&&((T=e.sub)==null?void 0:T.sarabun_role_permissions.length)>0&&((R=(B=e.sub)==null?void 0:B.sarabun_role_permissions[0])!=null&&R.index)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.index,"onUpdate:modelValue":l[6]||(l[6]=s=>{u.index=s,a.onChecked(e.sub,"index",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.index,"onUpdate:modelValue":l[7]||(l[7]=s=>{u.index=s,a.onChecked(e.sub,"index",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("store")?(i(),d("td",ge,[r("div",we,[e.sub.store?(i(),d("div",fe,[(O=e.sub)!=null&&O.sarabun_role_permissions&&((S=e.sub)==null?void 0:S.sarabun_role_permissions.length)>0&&((F=(E=e.sub)==null?void 0:E.sarabun_role_permissions[0])!=null&&F.store)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.store,"onUpdate:modelValue":l[8]||(l[8]=s=>{u.store=s,a.onChecked(e.sub,"store",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.store,"onUpdate:modelValue":l[9]||(l[9]=s=>{u.store=s,a.onChecked(e.sub,"store",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("update")?(i(),d("td",ve,[r("div",xe,[e.sub.update?(i(),d("div",Ue,[(q=e.sub)!=null&&q.sarabun_role_permissions&&((A=e.sub)==null?void 0:A.sarabun_role_permissions.length)>0&&((N=(D=e.sub)==null?void 0:D.sarabun_role_permissions[0])!=null&&N.update)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.update,"onUpdate:modelValue":l[10]||(l[10]=s=>{u.update=s,a.onChecked(e.sub,"update",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.update,"onUpdate:modelValue":l[11]||(l[11]=s=>{u.update=s,a.onChecked(e.sub,"update",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("destroy")?(i(),d("td",je,[r("div",Te,[e.sub.destroy?(i(),d("div",Be,[(L=e.sub)!=null&&L.sarabun_role_permissions&&((z=e.sub)==null?void 0:z.sarabun_role_permissions.length)>0&&((H=(G=e.sub)==null?void 0:G.sarabun_role_permissions[0])!=null&&H.destroy)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.destroy,"onUpdate:modelValue":l[12]||(l[12]=s=>{u.destroy=s,a.onChecked(e.sub,"destroy",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.destroy,"onUpdate:modelValue":l[13]||(l[13]=s=>{u.destroy=s,a.onChecked(e.sub,"destroy",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("export")?(i(),d("td",Re,[r("div",Oe,[e.sub.export?(i(),d("div",Se,[(I=e.sub)!=null&&I.sarabun_role_permissions&&((J=e.sub)==null?void 0:J.sarabun_role_permissions.length)>0&&((M=(K=e.sub)==null?void 0:K.sarabun_role_permissions[0])!=null&&M.export)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.exporter,"onUpdate:modelValue":l[14]||(l[14]=s=>{u.exporter=s,a.onChecked(e.sub,"export",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.exporter,"onUpdate:modelValue":l[15]||(l[15]=s=>{u.exporter=s,a.onChecked(e.sub,"export",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("sign")?(i(),d("td",Ee,[r("div",Fe,[e.sub.sign?(i(),d("div",qe,[(P=e.sub)!=null&&P.sarabun_role_permissions&&((Q=e.sub)==null?void 0:Q.sarabun_role_permissions.length)>0&&((X=(W=e.sub)==null?void 0:W.sarabun_role_permissions[0])!=null&&X.sign)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.sign,"onUpdate:modelValue":l[16]||(l[16]=s=>{u.sign=s,a.onChecked(e.sub,"sign",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.sign,"onUpdate:modelValue":l[17]||(l[17]=s=>{u.sign=s,a.onChecked(e.sub,"sign",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0),a.checkColumn("approve")?(i(),d("td",Ae,[r("div",De,[e.sub.approve?(i(),d("div",Ne,[(Y=e.sub)!=null&&Y.sarabun_role_permissions&&((Z=e.sub)==null?void 0:Z.sarabun_role_permissions.length)>0&&(($=(p=e.sub)==null?void 0:p.sarabun_role_permissions[0])!=null&&$.approve)?(i(),b(t,{key:0,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",checked:"",modelValue:u.approve,"onUpdate:modelValue":l[18]||(l[18]=s=>{u.approve=s,a.onChecked(e.sub,"approve",s)})},null,8,["disabled","activeClass","modelValue"])):(i(),b(t,{key:1,disabled:e.isView,label:"",activeClass:e.isView?"bg-gray-600":"bg-blue-600",modelValue:u.approve,"onUpdate:modelValue":l[19]||(l[19]=s=>{u.approve=s,a.onChecked(e.sub,"approve",s)})},null,8,["disabled","activeClass","modelValue"]))])):n("",!0)])])):n("",!0)])}const ze=le(ae,[["render",Le]]),Ge={name:"TableRow",components:{Checkbox:se,TableSubRow:ze},props:{item:{type:Object,required:!0},showColumns:{type:Array,default:[]},isView:{type:Boolean,default:!1}},data(){return{secret:!1,inside:!1,outside:!1,index:!1,store:!1,update:!1,destroy:!1,exporter:!1,sign:!1,approve:!1}},emits:["checked"],methods:{checkColumn(o,l){return this.showColumns.includes(o)},onChecked(o,l,e){console.log("onChecked parent",o,l,e),this.$emit("checked",o,l,e)}}},He={key:0};function Ie(o,l,e,U,u,a){const t=ie("TableSubRow");return i(),d(j,null,[e.item.sub_menu&&e.item.sub_menu.length>0?(i(),d("tr",He,[r("td",null,ue(e.item.name),1),(i(!0),d(j,null,ee(e.showColumns,m=>(i(),d("td",{key:m}))),128))])):n("",!0),e.item.sub_menu.length>0?(i(!0),d(j,{key:1},ee(e.item.sub_menu,(m,c)=>(i(),b(t,{key:c,sub:m,showColumns:e.showColumns,isView:e.isView,onOnChecked:a.onChecked},null,8,["sub","showColumns","isView","onOnChecked"]))),128)):n("",!0)],64)}const Pe=le(Ge,[["render",Ie]]);export{Pe as E};
