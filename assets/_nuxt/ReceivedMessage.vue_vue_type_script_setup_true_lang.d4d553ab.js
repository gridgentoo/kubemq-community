var u=Object.defineProperty;var r=(s,e,a)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var t=(s,e,a)=>(r(s,typeof e!="symbol"?e+"":e,a),a);import{_}from"./Field.vue_vue_type_script_setup_true_lang.8447d9ba.js";import{_ as v}from"./DataField.vue_vue_type_script_setup_true_lang.e7665b77.js";import{m as p}from"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";import{a as h,s as g,v as f,o as m,f as n,h as d,i as l,q as b,P as y}from"./entry.53b34a98.js";class M{constructor(){t(this,"messageId");t(this,"metadata");t(this,"body");t(this,"timestamp");t(this,"sequence");t(this,"tags");this.messageId="",this.metadata="",this.body="",this.timestamp=0,this.sequence=0,this.tags={}}}const q={class:"border-round-2xl pt-0 pl-1 pr-1 pb-3"},k={key:0,class:"grid formgrid p-fluid mt-3"},I={class:"col-12 md:col-3 p-1"},B={class:"col-12 md:col-3 p-1"},D={key:0,class:"col-12 md:col-3 p-1"},F={key:1,class:"col-12 md:col-3 p-1"},N={class:"col-12 md:col-6 p-1"},Y={class:"col-12 md:col-6 p-1"},x={class:"col-12 md:col-12 p-1"},T=h({__name:"ReceivedMessage",setup(s){const e=g(new M);f(()=>{const o=y("dialogRef");e.value=o.value.data.message});const a=o=>o===0?"N/A":p(o).format("YYYY-MM-DD HH:mm:ss");return(o,R)=>{const c=_,i=v;return m(),n("div",q,[e.value.messageId!==""?(m(),n("div",k,[d("div",I,[l(c,{label:"Message Id",value:e.value.messageId},null,8,["value"])]),d("div",B,[l(c,{label:"Timestamp",value:a(e.value.timestamp)},null,8,["value"])]),e.value.sequence?(m(),n("div",D,[l(c,{label:"Message Sequence",value:e.value.sequence},null,8,["value"])])):(m(),n("div",F)),d("div",N,[l(c,{label:"Metadata",value:e.value.metadata},null,8,["value"])]),d("div",Y,[l(c,{label:"Tags",value:e.value.tags},null,8,["value"])]),d("div",x,[l(i,{label:"Body",value:e.value.body,style:{height:"35vh"}},null,8,["value"])])])):b("",!0)])}}});export{T as _};