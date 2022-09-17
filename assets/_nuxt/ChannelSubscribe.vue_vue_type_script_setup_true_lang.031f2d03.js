import K from"./InputText.09b20890.js";import H from"./InputDropbox.37ee1597.js";import W from"./InputNumber.2f1781d4.js";import Q from"./InputCalander.80ca58fa.js";import{u as X}from"./useToastMessage.5bad6c4f.js";import{a as Y,I as Z,f as ee,J as te,v as d,z as se,o as a,h as i,i as o,j as n,s as u,m as D,c as k,u as v,a4 as I,w as m,K as le,r as P,M as U,t as p}from"./entry.c95b333b.js";import{_ as ae}from"./ReceivedMessage.vue_vue_type_script_setup_true_lang.6eb00d4e.js";const oe={class:"grid-nogutter grid col-12 p-0"},ne={class:"flex align-items-end col-12 md:12 align-content-between mb-1 pt-0 border-bottom-1 border-light-grey"},de={class:"flex flex-grow-1 align-items-end p-0"},ie={class:"align-items-end grid p-fluid col-11 pb-0 mb-1"},re={class:"col-12 md:col-2 pt-0"},ue={key:0,class:"col-12 md:col-2"},ce={key:2,class:"col-12 md:col-2 pt-0"},me={key:3,class:"col-12 md:col-2 pt-0"},ve={key:4,class:"col-12 md:col-2 pt-0"},pe={class:"col-12 md:col-2 pt-0"},be={class:"col-12 md:col-2 pt-0"},_e={class:"mb-3"},ge={class:"flex justify-content-end",style:{"min-width":"10rem"}},ye={key:0,class:"col-12 md:12 pt-1"},he={key:0,class:"white-space-nowrap overflow-hidden text-overflow-ellipsis",style:{width:"13em"}},fe={key:1},we=o("code",{class:"text-grey font-italic"},"N/A",-1),Se=[we],ke={key:0,class:"white-space-nowrap overflow-hidden text-overflow-ellipsis",style:{width:"30em"}},xe={class:"text-overflow-ellipsis"},Ve={key:1},Ce=o("code",{class:"text-grey font-italic"},"No Body",-1),Me=[Ce],$e=Y({__name:"ChannelSubscribe",props:{channel:{type:String,default:()=>""},type:{type:String,default:()=>""}},setup(h){const g=h;Z(()=>{r.value=[],M.value=null,l.value&&T()});const q=ee(),{ApiBaseHost:$}=te();let r=d([]),f=se({});const l=d(!1),c=d(!1),w=d(""),S=d(""),F=X(),b=d("none"),x=d(1),V=d(new Date),C=d(5),L=d([{label:"No Replay",value:"none"},{label:"First Message",value:"first"},{label:"Last Message",value:"last"},{label:"Sequence Number",value:"sequence"},{label:"Since Time",value:"time"},{label:"Time Delta",value:"delta"}]),R=()=>{let t=`channel=${g.channel}`;if(g.type==="events")t+="&subscribe_type=events";else switch(t+="&subscribe_type=events_store",S.value===""?t+=`&client_id=${Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}`:t+=`&client_id=${S.value}`,b.value){case"none":t+="&events_store_type_data=1";break;case"first":t+="&events_store_type_data=2";break;case"last":t+="&events_store_type_data=3";break;case"sequence":t+=`&events_store_type_data=4&events_store_type_value=${x.value}`;break;case"time":t+=`&events_store_type_data=5&events_store_type_value=${V.value.toISOString()}`;break;case"delta":t+=`&events_store_type_data=6&events_store_type_value=${C.value}`;break}return w.value!==""&&(t+=`&group=${w.value}`),`ws://${$.value}/api/subscribe/pubsub?${t}`},B=()=>{f=le(R(),{autoClose:!1,immediate:!1,onConnected:()=>{l.value=!0,c.value=!1,r.value=[]},onDisconnected:()=>{l.value=!1,c.value=!1},onError:(t,s)=>{l.value=!1,c.value=!1,F.showError("Error occurred while subscribing to channel "+g.type+":"+g.channel)},onMessage:(t,s)=>{l.value=!0,c.value=!1;const y=JSON.parse(s.data);y.index=r.value.length+1,r.value.push(y)}}),c.value=!0,f.open()},T=()=>{c.value=!1,f&&f.close()},E=()=>{r.value=[]},M=d(),O=t=>{j(t.index)},j=t=>{q.open(ae,{props:{header:g.type==="events"?"View PubSub Events Message":"View PubSub Events-Store Message",style:{width:"65vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{message:r.value[t]}})};return(t,s)=>{const y=K,z=H,N=W,A=Q,G=P("Tag"),_=P("Column"),J=P("DataTable");return a(),i("div",oe,[o("div",ne,[o("div",de,[o("div",ie,[o("div",re,[n(y,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=e=>w.value=e),label:"Set Group Name",disabled:l.value,placeholder:"No Group"},null,8,["modelValue","disabled"])]),h.type!=="events"?(a(),i("div",ue,[n(y,{modelValue:S.value,"onUpdate:modelValue":s[1]||(s[1]=e=>S.value=e),label:"Set Client Id",disabled:l.value,placeholder:"Random Client id"},null,8,["modelValue","disabled"])])):u("",!0),h.type!=="events"?(a(),i("div",{key:1,class:D(["col-12 md:col-2 pt-0",l.value?"div-disabled":""])},[n(z,{label:"Replay From",modelValue:b.value,"onUpdate:modelValue":s[2]||(s[2]=e=>b.value=e),options:L.value},null,8,["modelValue","options"])],2)):u("",!0),b.value==="sequence"?(a(),i("div",ce,[n(N,{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=e=>x.value=e),label:"Set Message Sequence",disabled:l.value,min:1},null,8,["modelValue","disabled"])])):u("",!0),b.value==="time"?(a(),i("div",me,[n(A,{modelValue:V.value,"onUpdate:modelValue":s[4]||(s[4]=e=>V.value=e),label:"Time Since",disabled:l.value},null,8,["modelValue","disabled"])])):u("",!0),b.value==="delta"?(a(),i("div",ve,[n(N,{modelValue:C.value,"onUpdate:modelValue":s[5]||(s[5]=e=>C.value=e),label:"Set Delta Seconds",disabled:l.value,min:5},null,8,["modelValue","disabled"])])):u("",!0),o("div",pe,[l.value?u("",!0):(a(),k(v(I),{key:0,label:"Subscribe",class:"button-grey",icon:"pi pi-angle-double-down",onClick:B,disabled:c.value},null,8,["disabled"])),l.value?(a(),k(v(I),{key:1,label:"Unsubscribe",class:"button-grey",icon:"pi pi-angle-double-up",onClick:T,disabled:c.value},null,8,["disabled"])):u("",!0)]),o("div",be,[l.value?(a(),k(v(I),{key:0,label:"Clear",class:"button-grey",icon:"pi pi-trash",onClick:E,disabled:v(r).length===0},null,8,["disabled"])):u("",!0)])])]),o("div",_e,[o("div",ge,[n(G,{class:D(["text-sm border-round-xl font-italic font-light mr-1",l.value?"bg-success":"bg-error"])},{default:m(()=>[U(p(l.value?"Subscribed":"Unsubscribed"),1)]),_:1},8,["class"])])])]),v(r).length>0?(a(),i("div",ye,[n(J,{value:v(r),paginator:v(r).length>25,rows:25,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[25,50,100],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Messages",responsiveLayout:"scroll",class:"p-datatable-sm",dataKey:"messageId",onRowSelect:O,selection:M.value,"onUpdate:selection":s[6]||(s[6]=e=>M.value=e),selectionMode:"single"},{default:m(()=>[n(_,{header:"#",headerStyle:"width: 1rem"},{body:m(({index:e})=>[U(p(e+1),1)]),_:1}),h.type!=="events"?(a(),k(_,{key:0,header:"Sequence",field:"sequence",sortable:"",headerStyle:"width:4em"},{body:m(({data:e})=>[o("div",null,p(e.sequence),1)]),_:1})):u("",!0),n(_,{header:"Timestamp",sortable:"",headerStyle:"width:8em"},{body:m(({data:e})=>[o("div",null,p(e.timestamp),1)]),_:1}),n(_,{header:"Message Id",field:"messageId",sortable:"",headerStyle:"width:15em"},{body:m(({data:e})=>[o("div",null,p(e.messageId),1)]),_:1}),n(_,{header:"Metadata",field:"metadata",headerStyle:"width:13em"},{body:m(({data:e})=>[e.metadata?(a(),i("div",he,[o("code",null,p(e.metadata),1)])):(a(),i("div",fe,Se))]),_:1}),n(_,{header:"Body",field:"body",headerStyle:"width:30em"},{body:m(({data:e})=>[e.body?(a(),i("div",ke,[o("code",xe,p(e.body),1)])):(a(),i("div",Ve,Me))]),_:1})]),_:1},8,["value","paginator","selection"])])):u("",!0)])}}});export{$e as _};