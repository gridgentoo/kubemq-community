import b from"./StatStripCard.aa01b881.js";import f from"./Channels.832c970b.js";import{a as v,f as g,b as y,o,h as n,i as e,u as t,j as i,t as S,r as d,p as k,k as w,l as C}from"./entry.61f443fa.js";import q from"./SendMessage.822c367c.js";import"./StatStripCardBox.64d68255.js";import"./InputText.2ab10032.js";import"./AddChannel.d6ea4339.js";import"./index.esm.bd0dd375.js";import"./request.b3446890.js";import"./useToastMessage.af91aa57.js";import"./CodeEditor.341c139e.js";import"./InputNumber.05cf9b73.js";import"./queues_request.36fdf4e2.js";const B=a=>(k("data-v-aaac45a9"),a=a(),w(),a),I={class:"flex flex-column container"},V={class:"flex justify-content-between"},D={class:"flex flex-column header-row"},M=B(()=>e("div",{class:"flex align-items-center mb-1"},[e("span",{class:"material-symbols-outlined mr-1 text-4xl"},"calendar_view_week"),e("span",{class:"text-4xl"},"Queues")],-1)),Q={key:0},j={key:1,class:"flex"},L={key:0,class:"material-symbols-outlined text-queue mr-1 text-lg"},A={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},N={class:"ml-1"},R={class:"flex justify-content-end align-items-center"},E={class:"stats-row"},U={class:"flex-grow-1 channels-parent"},z={class:"bg-white border-round-2xl border-1 border-queue"},F=v({__name:"index",setup(a){const r=g(),{queuesData:s,isStreamReady:l}=y(),_=()=>{r.open(q,{props:{header:"Send Queue Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:""}})};return(G,c)=>{const u=d("Skeleton"),m=d("Button"),p=b,h=f;return o(),n("div",I,[e("div",V,[e("div",D,[M,t(l)?(o(),n("div",j,[t(s).isActive?(o(),n("span",L,"radio_button_checked")):(o(),n("span",A,"radio_button_unchecked")),e("span",N,"Last Activity: "+S(t(s).lastSeen),1)])):(o(),n("div",Q,[i(u,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),e("div",R,[e("div",null,[i(m,{label:"Send Message",class:"button-queue bg-white button-hero",icon:"pi pi-send",onClick:_,disabled:!t(l),style:{"min-width":"12rem"}},null,8,["disabled"])])])]),e("div",E,[i(p,{items:t(s).stats.Items,"background-color":"bg-queue","border-color":"border-queue"},null,8,["items"])]),e("div",U,[e("div",z,[i(h,{modelValue:t(s).channelsList,"onUpdate:modelValue":c[0]||(c[0]=x=>t(s).channelsList=x)},null,8,["modelValue"])])])])}}});const se=C(F,[["__scopeId","data-v-aaac45a9"]]);export{se as default};