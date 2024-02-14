import{u as I,o as x,P as W,V,w as z,t as j,R as E,a as m}from"./dom-891ac6c3.js";import{x as Q,a as g}from"./index-090a8953.js";import{c as G,l as F,p as J}from"./open-closed-486d85f0.js";import{b as X}from"./use-resolve-button-type-38f1f99a.js";import{h as Y,F as Z,O as _}from"./focus-management-e6c5d1fd.js";import{y as $}from"./use-outside-click-a758fdce.js";import{f as ee,a as te}from"./hidden-11a9ab9d.js";import{aA as R,k as O,A,aW as L,au as ae,W as M,F as le,al as C,aq as oe,be as ie,bf as ne,ab as T,$ as ue}from"./preload-helper-9e0646ca.js";function N(t={},i=null,l=[]){for(let[f,e]of Object.entries(t))q(l,U(i,f),e);return l}function U(t,i){return t?t+"["+i+"]":i}function q(t,i,l){if(Array.isArray(l))for(let[f,e]of l.entries())q(t,U(i,f.toString()),e);else l instanceof Date?t.push([i,l.toISOString()]):typeof l=="boolean"?t.push([i,l?"1":"0"]):typeof l=="string"?t.push([i,l]):typeof l=="number"?t.push([i,`${l}`]):l==null?t.push([i,""]):N(l,i,t)}function re(t,i,l){let f=R(l==null?void 0:l.value),e=O(()=>t.value!==void 0);return[O(()=>e.value?t.value:f.value),function(s){return e.value||(f.value=s),i==null?void 0:i(s)}]}function se(t,i){return t===i}var ve=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ve||{}),pe=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(pe||{}),de=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(de||{});function ce(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let H=Symbol("ListboxContext");function B(t){let i=ue(H,null);if(i===null){let l=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,B),l}return i}let he=A({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>se},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:i,attrs:l,emit:f}){let e=R(1),s=R(null),v=R(null),S=R(null),p=R([]),y=R(""),a=R(null),o=R(1);function w(n=u=>u){let u=a.value!==null?p.value[a.value]:null,r=_(n(p.value.slice()),h=>x(h.dataRef.domRef)),c=u?r.indexOf(u):null;return c===-1&&(c=null),{options:r,activeOptionIndex:c}}let P=O(()=>t.multiple?1:0),[k,d]=re(O(()=>t.modelValue),n=>f("update:modelValue",n),O(()=>t.defaultValue)),b={listboxState:e,value:k,mode:P,compare(n,u){if(typeof t.by=="string"){let r=t.by;return(n==null?void 0:n[r])===(u==null?void 0:u[r])}return t.by(n,u)},orientation:O(()=>t.horizontal?"horizontal":"vertical"),labelRef:s,buttonRef:v,optionsRef:S,disabled:O(()=>t.disabled),options:p,searchQuery:y,activeOptionIndex:a,activationTrigger:o,closeListbox(){t.disabled||e.value!==1&&(e.value=1,a.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(n,u,r){if(t.disabled||e.value===1)return;let c=w(),h=Q(n===g.Specific?{focus:g.Specific,id:u}:{focus:n},{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:D=>D.id,resolveDisabled:D=>D.dataRef.disabled});y.value="",a.value=h,o.value=r??1,p.value=c.options},search(n){if(t.disabled||e.value===1)return;let u=y.value!==""?0:1;y.value+=n.toLowerCase();let r=(a.value!==null?p.value.slice(a.value+u).concat(p.value.slice(0,a.value+u)):p.value).find(h=>h.dataRef.textValue.startsWith(y.value)&&!h.dataRef.disabled),c=r?p.value.indexOf(r):-1;c===-1||c===a.value||(a.value=c,o.value=1)},clearSearch(){t.disabled||e.value!==1&&y.value!==""&&(y.value="")},registerOption(n,u){let r=w(c=>[...c,{id:n,dataRef:u}]);p.value=r.options,a.value=r.activeOptionIndex},unregisterOption(n){let u=w(r=>{let c=r.findIndex(h=>h.id===n);return c!==-1&&r.splice(c,1),r});p.value=u.options,a.value=u.activeOptionIndex,o.value=1},select(n){t.disabled||d(I(P.value,{[0]:()=>n,[1]:()=>{let u=L(b.value.value).slice(),r=L(n),c=u.findIndex(h=>b.compare(r,L(h)));return c===-1?u.push(r):u.splice(c,1),u}}))}};return $([v,S],(n,u)=>{var r;b.closeListbox(),Y(u,Z.Loose)||(n.preventDefault(),(r=x(v))==null||r.focus())},O(()=>e.value===0)),ae(H,b),G(O(()=>I(e.value,{[0]:F.Open,[1]:F.Closed}))),()=>{let{name:n,modelValue:u,disabled:r,...c}=t,h={open:e.value===0,disabled:r,value:k.value};return M(le,[...n!=null&&k.value!=null?N({[n]:k.value}).map(([D,K])=>M(ee,W({features:te.Hidden,key:D,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:D,value:K}))):[],V({ourProps:{},theirProps:{...l,...z(c,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:h,slots:i,attrs:l,name:"Listbox"})])}}});A({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:i,slots:l}){let f=B("ListboxLabel"),e=`headlessui-listbox-label-${j()}`;function s(){var v;(v=x(f.buttonRef))==null||v.focus({preventScroll:!0})}return()=>{let v={open:f.listboxState.value===0,disabled:f.disabled.value},S={id:e,ref:f.labelRef,onClick:s};return V({ourProps:S,theirProps:t,slot:v,attrs:i,slots:l,name:"ListboxLabel"})}}});let Re=A({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:i,slots:l,expose:f}){let e=B("ListboxButton"),s=`headlessui-listbox-button-${j()}`;f({el:e.buttonRef,$el:e.buttonRef});function v(a){switch(a.key){case m.Space:case m.Enter:case m.ArrowDown:a.preventDefault(),e.openListbox(),T(()=>{var o;(o=x(e.optionsRef))==null||o.focus({preventScroll:!0}),e.value.value||e.goToOption(g.First)});break;case m.ArrowUp:a.preventDefault(),e.openListbox(),T(()=>{var o;(o=x(e.optionsRef))==null||o.focus({preventScroll:!0}),e.value.value||e.goToOption(g.Last)});break}}function S(a){switch(a.key){case m.Space:a.preventDefault();break}}function p(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),T(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),ce(()=>{var o;return(o=x(e.optionsRef))==null?void 0:o.focus({preventScroll:!0})})))}let y=X(O(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var a,o;let w={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},P={ref:e.buttonRef,id:s,type:y.value,"aria-haspopup":!0,"aria-controls":(a=x(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(o=x(e.labelRef))==null?void 0:o.id,s].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:v,onKeyup:S,onClick:p};return V({ourProps:P,theirProps:t,slot:w,attrs:i,slots:l,name:"ListboxButton"})}}}),Le=A({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:i,slots:l,expose:f}){let e=B("ListboxOptions"),s=`headlessui-listbox-options-${j()}`,v=R(null);f({el:e.optionsRef,$el:e.optionsRef});function S(a){switch(v.value&&clearTimeout(v.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let o=e.options.value[e.activeOptionIndex.value];e.select(o.dataRef.value)}e.mode.value===0&&(e.closeListbox(),T(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})}));break;case I(e.orientation.value,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(g.Next);case I(e.orientation.value,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(g.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(g.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(g.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),T(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),v.value=setTimeout(()=>e.clearSearch(),350));break}}let p=J(),y=O(()=>p!==null?p.value===F.Open:e.listboxState.value===0);return()=>{var a,o,w,P;let k={open:e.listboxState.value===0},d={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(P=(o=x(e.labelRef))==null?void 0:o.id)!=null?P:(w=x(e.buttonRef))==null?void 0:w.id,"aria-orientation":e.orientation.value,id:s,onKeydown:S,role:"listbox",tabIndex:0,ref:e.optionsRef};return V({ourProps:d,theirProps:t,slot:k,attrs:i,slots:l,features:E.RenderStrategy|E.Static,visible:y.value,name:"ListboxOptions"})}}}),we=A({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:i,attrs:l,expose:f}){let e=B("ListboxOption"),s=`headlessui-listbox-option-${j()}`,v=R(null);f({el:v,$el:v});let S=O(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===s:!1),p=O(()=>I(e.mode.value,{[0]:()=>e.compare(L(e.value.value),L(t.value)),[1]:()=>L(e.value.value).some(d=>e.compare(L(d),L(t.value)))})),y=O(()=>I(e.mode.value,{[1]:()=>{var d;let b=L(e.value.value);return((d=e.options.value.find(n=>b.some(u=>e.compare(L(u),L(n.dataRef.value)))))==null?void 0:d.id)===s},[0]:()=>p.value})),a=O(()=>({disabled:t.disabled,value:t.value,textValue:"",domRef:v}));C(()=>{var d,b;let n=(b=(d=x(v))==null?void 0:d.textContent)==null?void 0:b.toLowerCase().trim();n!==void 0&&(a.value.textValue=n)}),C(()=>e.registerOption(s,a)),oe(()=>e.unregisterOption(s)),C(()=>{ie([e.listboxState,p],()=>{e.listboxState.value===0&&(!p.value||I(e.mode.value,{[1]:()=>{y.value&&e.goToOption(g.Specific,s)},[0]:()=>{e.goToOption(g.Specific,s)}}))},{immediate:!0})}),ne(()=>{e.listboxState.value===0&&(!S.value||e.activationTrigger.value!==0&&T(()=>{var d,b;return(b=(d=x(v))==null?void 0:d.scrollIntoView)==null?void 0:b.call(d,{block:"nearest"})}))});function o(d){if(t.disabled)return d.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),T(()=>{var b;return(b=x(e.buttonRef))==null?void 0:b.focus({preventScroll:!0})}))}function w(){if(t.disabled)return e.goToOption(g.Nothing);e.goToOption(g.Specific,s)}function P(){t.disabled||S.value||e.goToOption(g.Specific,s,0)}function k(){t.disabled||!S.value||e.goToOption(g.Nothing)}return()=>{let{disabled:d}=t,b={active:S.value,selected:p.value,disabled:d},n={id:s,ref:v,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:o,onFocus:w,onPointermove:P,onMousemove:P,onPointerleave:k,onMouseleave:k};return V({ourProps:n,theirProps:z(t,["value","disabled"]),slot:b,attrs:l,slots:i,name:"ListboxOption"})}}});export{we as A,Re as I,he as M,Le as V,re as d,N as e};
