import{_ as r,a as s}from"./index-e058a960.js";import{A as n}from"./attachment-4017d814.js";import{o as i,x as c,aF as m,as as p}from"./preload-helper-9e0646ca.js";import"./index-72ee420c.js";import"./iconify-4e42c13d.js";import"./index-441935dc.js";import"./dayjs.min-72c81edc.js";const d={name:"itemOrder",components:{Attachment:n},data(){return{item:null}},created(){this.fetchData()},methods:{async fetchData(){const{data:t,status:e}=await s("orderStore",this.$route.query.doc_pickup_type=="หนังสือส่ง"?"showSend":"showReceive",{payload:this.$route.params.id});e===200&&(this.item=await t.result)}}};function u(t,e,h,l,a,_){const o=m("Attachment",!0);return p(),i("div",null,[c(o,{item:a.item},null,8,["item"])])}const v=r(d,[["render",u]]);export{v as default};
