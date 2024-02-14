import{D as b,S as v}from"./index-090a8953.js";import{I as y}from"./index-72ee420c.js";import{P as w}from"./index-bb139ada.js";import{H as k}from"./data-e5788c46.js";import{u as C,a as I,b as P,c as M}from"./user-4-99fc6f59.js";import{_ as A}from"./index-e058a960.js";import{aF as c,as as n,o as a,x as l,bj as o,p as e,aT as m,n as r,F as D,aD as z,m as T,ac as B,w as L}from"./preload-helper-9e0646ca.js";const N={components:{Pagination:w,Dropdown:b,Icon:y,MenuItem:v},data(){return{shapeLine4:k,current:1,perpage:4,pageRange:5,searchTerm:"",actions:[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],teamtable:[{customer:{name:"Arlene McCoy",image:C,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:I,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:P,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:M,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null}],columns:[{label:"assignee",field:"customer"},{label:"Amount",field:"status"},{label:"time",field:"time"},{label:"chart",field:"chart"},{label:"Action",field:"action"}]}}},R={class:"-mx-6 -mb-6"},U=e("div",{class:"text-center"},[e("div",{class:"text-gray-400"},"ไม่พบข้อมูล")],-1),V={key:0,class:"flex items-center min-w-[150px]"},j={class:"w-8 h-8 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},F=["src","alt"],S={class:"text-sm text-slate-600 dark:text-slate-300 capitalize"},q={key:1},E={key:2,class:"block min-w-[140px] text-left"},H={class:"inline-block text-center mx-auto py-1"},O={key:0,class:"flex items-center space-x-3 rtl:space-x-reverse"},G=e("span",{class:"h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"},null,-1),J=e("span",null,"In progress",-1),K=[G,J],Q={key:1,class:"flex items-center space-x-3 rtl:space-x-reverse"},W=e("span",{class:"h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"},null,-1),X=e("span",null,"Complete",-1),Y=[W,X],Z={key:3,class:"block min-w-[100px] text-left"},$={key:4,class:"ltr:text-right rtl:text-left"},ee={class:"text-xl"},se={class:"text-base"},te={class:"py-4 px-3 justify-center hidden"};function ne(ae,u,oe,re,t,ce){const d=c("apexchart"),p=c("Icon"),g=c("MenuItem"),h=c("Dropdown"),_=c("Pagination"),f=c("vue-good-table");return n(),a("div",R,[l(f,{columns:t.columns,styleClass:" vgt-table   lesspadding v-middle table-head  rounded-md ",rows:t.teamtable,"pagination-options":{enabled:!0,perPage:t.perpage},"sort-options":{enabled:!1}},{emptystate:o(()=>[U]),"table-row":o(s=>[s.column.field=="customer"?(n(),a("span",V,[e("span",j,[e("img",{src:s.row.customer.image,alt:s.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,F)]),e("span",S,m(s.row.customer.name),1)])):r("",!0),s.column.field=="chart"?(n(),a("span",q,[l(d,{type:"area",height:"48",width:"100%",options:t.shapeLine4.chartOptions,series:t.shapeLine4.series},null,8,["options","series"])])):r("",!0),s.column.field=="status"?(n(),a("span",E,[e("span",H,[s.row.status==="progress"?(n(),a("span",O,K)):r("",!0),s.row.status==="complete"?(n(),a("span",Q,Y)):r("",!0)])])):r("",!0),s.column.field=="time"?(n(),a("span",Z,m(s.row.time),1)):r("",!0),s.column.field=="action"?(n(),a("div",$,[l(h,{classMenuItems:" w-[140px]"},{menus:o(()=>[(n(!0),a(D,null,z(t.actions,(i,x)=>(n(),T(g,{key:x},{default:o(()=>[e("div",{class:B(`
                
                  ${i.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `)},[e("span",se,[l(p,{icon:i.icon},null,8,["icon"])]),e("span",null,m(i.name),1)],2)]),_:2},1024))),128))]),default:o(()=>[e("span",ee,[l(p,{icon:"heroicons-outline:dots-vertical"})])]),_:1})])):r("",!0)]),"pagination-bottom":o(s=>[e("div",te,[l(_,{total:50,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:u[0]||(u[0]=i=>t.current=i),pageChanged:s.pageChanged,perPageChanged:s.perPageChanged},{default:o(()=>[L(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])])}const he=A(N,[["render",ne]]),_e="/assets/sk-0c70b6db.svg",fe="/assets/path-2e3cae54.svg",xe="/assets/file-1-917a27f9.svg",be="/assets/pdf-1-e1f65b81.svg",ve="/assets/zip-1-b1b64e02.svg",ye="/assets/pdf-2-915d15e7.svg",we="/assets/scr-1-aa658374.svg";export{he as T,be as a,ye as b,we as c,xe as f,fe as p,_e as s,ve as z};
