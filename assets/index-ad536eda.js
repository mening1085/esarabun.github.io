import{C as g}from"./index-263882d1.js";import{I as d}from"./index-2f433009.js";import{_ as p}from"./index-e058a960.js";import{o as n,x as s,bj as o,aF as c,as as r,p as m,F as u,aD as f,m as _}from"./preload-helper-9e0646ca.js";const b="/assets/image-1-7cb9ebd9.png",h="/assets/image-2-d5c69ef8.png",x="/assets/image-3-e1ab9ff8.png",v="/assets/thumb-1-99dacc0e.png",I="/assets/thumb-2-dfb96599.png",k="/assets/thumb-3-3dc5faa9.png",C="/assets/thumb-4-dff1bf1d.png",w="/assets/thumb-5-0472f40b.png",B="/assets/thumb-6-6fca5971.png",F={components:{Card:g,Image:d},data(){return{image1:b,image2:h,image3:x,images:[{src:v},{src:I},{src:k},{src:C},{src:w},{src:B}]}}},S={class:"space-y-5"},y=m("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Small image with fluid",-1),L=m("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Large image with fluid-grow:",-1),N={class:"grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"};function R(V,j,D,E,e,q){const a=c("Image"),t=c("Card");return r(),n("div",S,[s(t,{title:"Images"},{default:o(()=>[s(a,{src:e.image1,alt:"image one",imageClass:"rounded-md"},null,8,["src"])]),_:1}),s(t,{title:"Responsive images"},{default:o(()=>[y,s(a,{src:e.image2,alt:"Small image with fluid:",imageClass:"rounded-md mb-6"},null,8,["src"]),L,s(a,{src:e.image3,alt:"Small image with fluid-grow:",imageClass:"rounded-md w-full "},null,8,["src"])]),_:1}),s(t,{title:"Responsive images"},{default:o(()=>[m("div",N,[(r(!0),n(u,null,f(e.images,(i,l)=>(r(),_(a,{src:i.src,alt:"thumb-1",imageClass:"rounded-md border-4 border-slate-300",key:l},null,8,["src"]))),128))])]),_:1})])}const J=p(F,[["render",R]]);export{J as default};