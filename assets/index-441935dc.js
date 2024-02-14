import{I as _}from"./index-72ee420c.js";import{_ as h}from"./index-e058a960.js";import{aF as y,as as e,o as n,aa as k,ac as s,x as d,n as i,aT as r,F as a,w as u,aE as m,m as w,bj as C,p as o}from"./preload-helper-9e0646ca.js";const x={components:{Icon:_},name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"button"},isDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},btnClass:{type:String,default:"bg-primary-500 text-white"},icon:{type:String,default:""},iconPosition:{type:String,default:"left"},iconClass:{type:String,default:"text-[20px]"},loadingClass:{type:String,default:""},link:{type:String,default:""},div:{type:Boolean,default:!1}}},v=["type","disabled"],b={key:0,class:"flex items-center"},L={key:1},B=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),S=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),P=[B,S],z={key:2},V={key:0,class:"flex items-center"},D={key:1},j=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),I=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),N=[j,I],A={key:2},F={key:0,class:"flex items-center"},H={key:1},M=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),E=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),T=[M,E],q={key:2};function G(l,f,t,J,K,O){const c=y("Icon"),g=y("router-link");return e(),n(a,null,[!t.link&&!t.div?(e(),n("button",k({key:0,type:t.type,disabled:t.isDisabled,class:["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `]},l.$attrs,{onClick:f[0]||(f[0]=Q=>l.$emit("onClick"))}),[!t.isLoading&&!l.$slots.default?(e(),n("span",b,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):i("",!0),t.text?(e(),n("span",L,r(t.text),1)):i("",!0)])):i("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},P,2)),u(" Loading ... ")],64)):i("",!0),l.$slots.default&&!t.isLoading?(e(),n("div",z,[m(l.$slots,"default")])):i("",!0)],16,v)):i("",!0),t.link&&!t.div?(e(),w(g,{key:1,to:t.link,class:s(["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `])},{default:C(()=>[!t.isLoading&&!l.$slots.default?(e(),n("span",V,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):i("",!0),t.text?(e(),n("span",D,r(t.text),1)):i("",!0)])):i("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin -ml-1 mr-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},N,2)),u(" Loading ... ")],64)):i("",!0),l.$slots.default&&!t.isLoading?(e(),n("div",A,[m(l.$slots,"default")])):i("",!0)]),_:3},8,["to","class"])):i("",!0),t.div&&!t.link?(e(),n("div",{key:2,class:s(["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `])},[!t.isLoading&&!l.$slots.default?(e(),n("span",F,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):i("",!0),t.text?(e(),n("span",H,r(t.text),1)):i("",!0)])):i("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin -ml-1 mr-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},T,2)),u(" Loading ... ")],64)):i("",!0),l.$slots.default&&!t.isLoading?(e(),n("div",q,[m(l.$slots,"default")])):i("",!0)],2)):i("",!0)],64)}const X=h(x,[["render",G]]);export{X as B};
