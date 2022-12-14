var $=Object.defineProperty;var j=(l,a,m)=>a in l?$(l,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):l[a]=m;var r=(l,a,m)=>(j(l,typeof a!="symbol"?a+"":a,m),m);import N from"./InputText.a5d51f5e.js";import D from"./CodeEditor.a3b038a7.js";import{G as F,u as G}from"./request.fce72d22.js";import{u as L}from"./useToastMessage.47adc00c.js";import{a as O,s as E,L as W,v as z,f as I,h as s,i as n,u as o,A as M,q as H,w as C,M as J,O as K,r as h,o as w,p as Q,j as X,E as Y,k as Z}from"./entry.7307fc4c.js";import{u as ee,r as q}from"./index.esm.ec6caf95.js";import{b as se,a as B}from"./stream.cbe555aa.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./composables.0bc75d07.js";class te{constructor(){r(this,"messageId");r(this,"channel");r(this,"clientId");r(this,"metadata");r(this,"body");r(this,"tags");r(this,"isEvents");this.messageId="",this.channel="",this.clientId="",this.metadata="",this.body="",this.tags="",this.isEvents=!1}}class oe extends F{constructor(a){super("send_pubsub_message",a)}}const R=l=>(Q("data-v-543d94d8"),l=l(),X(),l),le={class:"grid-nogutter grid col-12 mt-2"},ae={key:0,class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},ne={class:"col-12 md:col-3 pt-0"},de={class:"col-12 md:col-3 pt-0"},ie={class:"flex"},ue={class:"mr-2"},ce=R(()=>s("label",{class:"ml-1",for:"events"},"Events",-1)),re={class:"ml-2"},me=R(()=>s("label",{class:"ml-1",for:"events_store"},"Events Store",-1)),pe={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},ve={class:"col-12 md:col-12 pt-0"},be={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1 mt-2"},_e={class:"col-12 md:col-12 pt-0"},he={class:"flex align-items-end grid p-fluid border-top-1 border-light-grey col-12 pb-0 mb-1"},ge={class:"col-12 md:col-4 pt-0"},fe={class:"col-12 md:col-4 pt-0"},Se={class:"col-12 md:col-4 pt-0"},Ve={class:"flex align-items-end grid justify-content-end p-fluid col-12 pb-0 mb-1 mt-2"},ye={class:"mr-2"},xe={class:"ml-2"},Ee=O({__name:"SendMessage",setup(l){const a=se("system-connection"),m=b=>{b==="disconnected"&&S()};a.on(m);const d=B("send-pub-sub-required-Data",{channel:"",body:""}),u=B("send-pub-sub-radio-button","events"),g=E(!1),c=K("dialogRef");let i=W(new te);z(()=>{g.value=c.value.data.isChannelSource,c.value.options.props.header="Send a PubSub Message",g.value&&(d.value.channel=c.value.data.channel,u.value=c.value.data.isEvents?"events":"events_store",c.value.data.isEvents?c.value.options.props.header="Publish Events message to: "+d.value.channel:c.value.options.props.header="Publish Events-Store message to: "+d.value.channel)});let p=null;const k=G(),f=L(),v=E(!1),V=ee({body:{required:q},channel:{required:q}},d.value),A=b=>{b&&(v.value=!0,Y(()=>{v.value=!0}),i.isEvents=u.value==="events",i.channel=d.value.channel,i.body=d.value.body,p=new oe(i),k.sendRequest(p).then(e=>{f.showSuccess("Message published successfully")}).catch(e=>{e.isCanceled?f.showWarn("Request Canceled"):f.showError("Error publishing PubSub message",e.message)}).finally(()=>{v.value=!1,S()}))},S=()=>{p!==null&&p.abort(),c.value.close()};return(b,e)=>{const _=N,y=h("RadioButton"),P=D,U=h("AccordionTab"),T=h("Accordion"),x=h("Button");return w(),I("form",{onSubmit:e[8]||(e[8]=J(t=>A(!o(V).$invalid),["prevent"]))},[s("div",le,[g.value?H("",!0):(w(),I("div",ae,[s("div",ne,[n(_,{label:"Channel*",modelValue:o(d).channel,"onUpdate:modelValue":e[0]||(e[0]=t=>o(d).channel=t),placeholder:"Channel name"},null,8,["modelValue"])]),s("div",de,[s("div",ie,[s("div",ue,[n(y,{inputId:"events",name:"pubsub",value:"events",modelValue:o(u),"onUpdate:modelValue":e[1]||(e[1]=t=>M(u)?u.value=t:null)},null,8,["modelValue"]),ce]),s("div",re,[n(y,{inputId:"events_store",name:"pubsub",value:"events_store",modelValue:o(u),"onUpdate:modelValue":e[2]||(e[2]=t=>M(u)?u.value=t:null)},null,8,["modelValue"]),me])])])])),s("div",pe,[s("div",ve,[n(P,{label:"Body*",modelValue:o(d).body,"onUpdate:modelValue":e[3]||(e[3]=t=>o(d).body=t),height:"300px"},null,8,["modelValue"])])]),s("div",be,[s("div",_e,[n(T,null,{default:C(()=>[n(U,{header:"Message Attributes"},{default:C(()=>[s("div",he,[s("div",ge,[n(_,{label:"Message Id",modelValue:o(i).messageId,"onUpdate:modelValue":e[4]||(e[4]=t=>o(i).messageId=t),placeholder:"Message Id"},null,8,["modelValue"])]),s("div",fe,[n(_,{label:"Metadata",modelValue:o(i).metadata,"onUpdate:modelValue":e[5]||(e[5]=t=>o(i).metadata=t),placeholder:"metadata string..."},null,8,["modelValue"])]),s("div",Se,[n(_,{label:"Tags",modelValue:o(i).tags,"onUpdate:modelValue":e[6]||(e[6]=t=>o(i).tags=t),placeholder:"key=value,key2=value2"},null,8,["modelValue"])])])]),_:1})]),_:1})])]),s("div",Ve,[s("div",ye,[n(x,{label:"Cancel",class:"button-grey",icon:"pi pi-times",onClick:e[7]||(e[7]=t=>S()),style:{width:"10rem"}})]),s("div",xe,[n(x,{label:"Send",type:"submit",disabled:o(V).$invalid,class:"button-grey",loading:v.value,icon:"pi pi-send",style:{width:"10rem"}},null,8,["disabled","loading"])])])])],32)}}}),Te=Z(Ee,[["__scopeId","data-v-543d94d8"]]);export{Te as default};