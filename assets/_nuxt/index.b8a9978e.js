import x from"./StatStripCard.aa01b881.js";import{_ as f}from"./Channels.vue_vue_type_script_setup_true_lang.0e96fbe0.js";import{a as v,b as g,f as y,o,h as n,i as e,u as s,j as i,t as S,r,p as k,k as w,l as C}from"./entry.61f443fa.js";import P from"./SendMessage.5a23f10b.js";import"./StatStripCardBox.64d68255.js";import"./InputText.2ab10032.js";import"./AddChannel.d6ea4339.js";import"./index.esm.bd0dd375.js";import"./request.b3446890.js";import"./useToastMessage.af91aa57.js";import"./CodeEditor.341c139e.js";const B=a=>(k("data-v-77365e98"),a=a(),w(),a),I={class:"flex flex-column container"},V={class:"flex justify-content-between"},D={class:"flex flex-column header-row"},M=B(()=>e("div",{class:"flex align-items-center mb-1"},[e("span",{class:"material-symbols-outlined mr-1 text-4xl"},"hub"),e("span",{class:"text-4xl"},"PubSub")],-1)),j={key:0},L={key:1,class:"flex"},A={key:0,class:"material-symbols-outlined text-pubsub mr-1 text-lg"},E={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},N={class:"ml-1"},R={class:"flex justify-content-end align-items-center"},U={class:"stats-row"},$={class:"flex-grow-1 channels-parent"},q={class:"bg-white border-round-2xl border-1 border-pubsub"},z=v({__name:"index",setup(a){const{pubsubData:t,isStreamReady:l}=g(),d=y(),_=()=>{d.open(P,{props:{header:"Publish Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:"",isEvents:!0}})};return(F,c)=>{const u=r("Skeleton"),p=r("Button"),m=x,b=f;return o(),n("div",I,[e("div",V,[e("div",D,[M,s(l)?(o(),n("div",L,[s(t).isActive?(o(),n("span",A,"radio_button_checked")):(o(),n("span",E,"radio_button_unchecked")),e("span",N,"Last Activity: "+S(s(t).lastSeen),1)])):(o(),n("div",j,[i(u,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),e("div",R,[e("div",null,[i(p,{label:"Publish Message",class:"button-pubsub bg-white button-hero",icon:"pi pi-send",onClick:_,disabled:!s(l),style:{"min-width":"12rem"}},null,8,["disabled"])])])]),e("div",U,[i(m,{items:s(t).stats.Items,"background-color":"bg-pubsub","border-color":"border-pubsub"},null,8,["items"])]),e("div",$,[e("div",q,[i(b,{modelValue:s(t).channelsList,"onUpdate:modelValue":c[0]||(c[0]=h=>s(t).channelsList=h)},null,8,["modelValue"])])])])}}});const ee=C(z,[["__scopeId","data-v-77365e98"]]);export{ee as default};