import{C as d}from"./index-263882d1.js";import{S as h}from"./index-a15147cf.js";import{_ as f}from"./index-e058a960.js";import{o as n,p as s,x as l,bj as i,aF as p,as as c,F as u,aD as v,m as b}from"./preload-helper-9e0646ca.js";import"./index-72ee420c.js";import"./iconify-4e42c13d.js";const x={components:{Card:d,Switch:h},data(){return{colors:[{label:"primary",value:"bg-primary-500",active:!0,prevIcon:"heroicons-outline:volume-up",nextIcon:"heroicons-outline:volume-off"},{label:"secondary",value:"bg-slate-900 dark:bg-slate-900  bg-opacity-50",active:!1,prevIcon:"heroicons-outline:check",nextIcon:"heroicons-outline:x"},{label:"success",value:"bg-success-500",active:!0,prevIcon:"heroicons-outline:sun",nextIcon:"heroicons-outline:moon"},{label:"danger",value:"bg-danger-500",active:!1,prevIcon:"heroicons-outline:lock-closed",nextIcon:"heroicons-outline:lock-open"},{label:"warning",value:"bg-warning-500",active:!0,prevIcon:"heroicons-outline:check",nextIcon:"heroicons-outline:ban"},{label:"info",value:"bg-info-500",active:!1,prevIcon:"heroicons-outline:phone-incoming",nextIcon:"heroicons-outline:phone-missed-call"}]}}},_={class:"grid grid-cols-1 gap-5"},m={class:"flex space-x-rb flex-wrap"},g={class:"flex space-x-rb flex-wrap"},I={class:"flex space-x-rb flex-wrap"},w={class:"flex space-x-rb flex-wrap"};function C(k,S,y,B,r,A){const a=p("Switch"),t=p("Card");return c(),n("div",null,[s("div",_,[l(t,{title:"Switches"},{default:i(()=>[s("div",m,[l(a,{label:"Active Switch",active:"",class:"mb-5"}),l(a,{label:"Inactive Switch",class:"mb-5"}),l(a,{label:"Disabled Active Switch",disabled:"",active:"",class:"mb-5"}),l(a,{label:"Disabled Active Switch",disabled:"",class:"mb-5"})])]),_:1}),l(t,{title:"Theme Colors"},{default:i(()=>[s("div",g,[(c(!0),n(u,null,v(r.colors,(e,o)=>(c(),b(a,{key:o,label:e.label,activeClass:e.value,active:"",class:"mb-5"},null,8,["label","activeClass"]))),128))])]),_:1}),l(t,{title:"Switch with Badge"},{default:i(()=>[s("div",I,[(c(!0),n(u,null,v(r.colors,(e,o)=>(c(),b(a,{key:o,label:e.label,activeClass:e.value,class:"mb-5",badge:"",active:e.active},null,8,["label","activeClass","active"]))),128))])]),_:1}),l(t,{title:"Switch with Icon"},{default:i(()=>[s("div",w,[(c(!0),n(u,null,v(r.colors,(e,o)=>(c(),b(a,{key:o,label:e.label,activeClass:e.value,class:"mb-5",badge:"",icon:"",prevIcon:e.prevIcon,nextIcon:e.nextIcon,active:e.active},null,8,["label","activeClass","prevIcon","nextIcon","active"]))),128))])]),_:1})])])}const L=f(x,[["render",C]]);export{L as default};