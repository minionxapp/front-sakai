import{s as ee,a as se}from"./index-CsoTg65Q.js";import{s as oe}from"./index-CwOXMrvK.js";import{a as ne,s as te}from"./index-CH10GLm3.js";import{s as ae,a as le,b as re}from"./index-8i4r_lkt.js";import{a as ie}from"./index-CEw_tE3c.js";import{s as ce}from"./index-b2JWK6NW.js";import{s as ue}from"./index-BLcsYzw6.js";import{B as me,R as de,s as ge,q as pe,e as fe,o as u,k as x,u as d,w as _,j as r,m as h,x as q,h as p,n as be,l as ve,p as y,I as ye,T as $e,z as V,t as A,J as he,K as we,A as m,D as ke,L as I,v as n,F as xe,M as ze,N as Pe}from"./index-BH_KByX2.js";import"./index-z3CEPeVG.js";var Se=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`,Ce={root:function(s){var l=s.props;return["p-message p-component p-message-"+l.severity,{"p-message-outlined":l.variant==="outlined","p-message-simple":l.variant==="simple","p-message-sm":l.size==="small","p-message-lg":l.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},qe=me.extend({name:"message",style:Se,classes:Ce}),Ie={name:"BaseMessage",extends:ge,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:qe,provide:function(){return{$pcMessage:this,$parentInstance:this}}},U={name:"Message",extends:Ie,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.life&&setTimeout(function(){s.visible=!1,s.$emit("life-end")},this.life)},methods:{close:function(s){this.visible=!1,this.$emit("close",s)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:de},components:{TimesIcon:ae}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},z(e)}function N(e,s){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),l.push.apply(l,i)}return l}function L(e){for(var s=1;s<arguments.length;s++){var l=arguments[s]!=null?arguments[s]:{};s%2?N(Object(l),!0).forEach(function(i){De(e,i,l[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):N(Object(l)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(l,i))})}return e}function De(e,s,l){return(s=Te(s))in e?Object.defineProperty(e,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[s]=l,e}function Te(e){var s=Oe(e,"string");return z(s)=="symbol"?s:s+""}function Oe(e,s){if(z(e)!="object"||!e)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var i=l.call(e,s);if(z(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var Ve=["aria-label"];function je(e,s,l,i,f,b){var D=pe("TimesIcon"),g=fe("ripple");return u(),x($e,h({name:"p-message",appear:""},e.ptmi("transition")),{default:d(function(){return[_(r("div",h({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?q(e.$slots,"container",{key:0,closeCallback:b.close}):(u(),p("div",h({key:1,class:e.cx("content")},e.ptm("content")),[q(e.$slots,"icon",{class:be(e.cx("icon"))},function(){return[(u(),x(ve(e.icon?"span":null),h({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(u(),p("div",h({key:0,class:e.cx("text")},e.ptm("text")),[q(e.$slots,"default")],16)):y("",!0),e.closable?_((u(),p("button",h({key:1,class:e.cx("closeButton"),"aria-label":b.closeAriaLabel,type:"button",onClick:s[0]||(s[0]=function(k){return b.close(k)})},L(L({},e.closeButtonProps),e.ptm("closeButton"))),[q(e.$slots,"closeicon",{},function(){return[e.closeIcon?(u(),p("i",h({key:0,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16)):(u(),x(D,h({key:1,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Ve)),[[g]]):y("",!0)],16))],16),[[ye,f.visible]])]}),_:3},16)}U.render=je;const Me={__name:"AlertMessage",props:{message:{type:String}},setup(e){const s=e;return(l,i)=>(u(),x(he(U),{severity:"error"},{default:d(()=>[V(A(s.message),1)]),_:1}))}},Be={class:"card"},_e={class:"flex flex-wrap gap-2 items-center justify-between"},Ne=["src","alt"],Le={class:"flex flex-col gap-6"},Ae=["src","alt"],Ue={key:0,class:"text-red-500"},Fe={key:0,class:"text-red-500"},Re={key:0,class:"text-red-500"},Ee={key:0,class:"text-red-500"},Qe={class:"flex justify-content-end gap-2"},Ke={class:"flex items-center gap-4"},Je={key:0},ts={__name:"TestCoba",setup(e){const s=we(),l=m(),i=m(),f=m(!1),b=m(!1),D=m(!1),g=m({}),k=m(),$=m(!1),T=m({global:{value:null,matchMode:Pe.CONTAINS}}),j=m(!1),M=m(""),P=m(!1),t=m({});ke(async()=>{S()});const S=async()=>{try{const{data:c}=await I.get("/question");i.value=c.data}catch(c){console.log(c)}};function F(){t.value={},t.value._id=1,g.value={},$.value=!1,f.value=!0}function R(c){P.value=!0,console.log(c+"  "+P.value),t.value={...c},f.value=!0}function E(c){g.value=c,b.value=!0}const Q=async()=>{await I.delete("/question/"+g.value._id),b.value=!1,S(),g.value={},s.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})};function K(){alert("testt"),D.value=!0}function Ye(){}const J=async()=>{try{if(P.value==!0){const c=await I.put("/question/"+t.value._id,{title:t.value.title,question:t.value.question,category:t.value.category});console.log(c),P.value=!1,c&&(f.value=!1,S(),s.add({severity:"success",summary:"Successful",detail:"Update Berhasil",life:8e3}))}else await I.post("/question",{title:t.value.title,question:t.value.question,category:t.value.category})&&(f.value=!1,S(),s.add({severity:"success",summary:"Successful",detail:"Insert Berhasil",life:8e3}));t.value={}}catch(c){console.log(c),M.value=!0,j.value=c.response.data.message}};return(c,o)=>{const Y=ue,v=ce,G=ee,H=le,C=ie,W=re,w=te,X=ne,Z=oe,B=se;return u(),p(xe,null,[n(Y),r("div",null,[r("div",Be,[n(G,{class:"mb-6"},{start:d(()=>[n(v,{label:"New",icon:"pi pi-plus",severity:"secondary",class:"mr-2",onClick:F}),n(v,{label:"Delete",icon:"pi pi-trash",severity:"secondary",onClick:K,disabled:!k.value||!k.value.length},null,8,["disabled"])]),end:d(()=>[n(v,{label:"Export",icon:"pi pi-upload",severity:"secondary",onClick:o[0]||(o[0]=a=>void 0)})]),_:1}),n(X,{ref_key:"dt",ref:l,selection:k.value,"onUpdate:selection":o[2]||(o[2]=a=>k.value=a),value:i.value,dataKey:"id",paginator:!0,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],filters:T.value,currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:d(()=>[r("div",_e,[o[12]||(o[12]=r("h4",{class:"m-0"},"Manage Products",-1)),n(W,null,{default:d(()=>[n(H,null,{default:d(()=>o[11]||(o[11]=[r("i",{class:"pi pi-search"},null,-1)])),_:1}),n(C,{modelValue:T.value.global.value,"onUpdate:modelValue":o[1]||(o[1]=a=>T.value.global.value=a),placeholder:"Search..."},null,8,["modelValue"])]),_:1})])]),default:d(()=>[n(w,{selectionMode:"multiple",style:{width:"3rem"},exportable:!1}),n(w,{field:"_id",header:"Code",sortable:"",style:{"min-width":"12rem"}}),n(w,{field:"title",header:"Title",sortable:"",style:{"min-width":"16rem"}}),n(w,{field:"question",header:"Question",sortable:"",style:{"min-width":"16rem"}}),n(w,{field:"category",header:"Category",sortable:"",style:{"min-width":"16rem"}}),n(w,{header:"Image"},{body:d(a=>[r("img",{src:`https://primefaces.org/cdn/primevue/images/product/${a.data.image}`,alt:a.data.image,class:"rounded",style:{width:"64px"}},null,8,Ne)]),_:1}),n(w,{exportable:!1,style:{"min-width":"12rem"}},{body:d(a=>[n(v,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:O=>R(a.data)},null,8,["onClick"]),n(v,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:O=>E(a.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","filters"])]),n(B,{visible:f.value,"onUpdate:visible":o[8]||(o[8]=a=>f.value=a),style:{width:"450px"},header:"Item Details",modal:!0},{default:d(()=>[r("div",Le,[g.value.image?(u(),p("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${g.value.image}`,alt:g.value.image,class:"block m-auto pb-4"},null,8,Ae)):y("",!0),r("form",{onSubmit:ze(J,["prevent"])},[M.value?(u(),x(Me,{key:0,message:j.value},null,8,["message"])):y("",!0),r("div",null,[o[13]||(o[13]=r("label",{for:"id",class:"block font-bold mb-3"},"ID",-1)),n(C,{id:"id",modelValue:t.value._id,"onUpdate:modelValue":o[3]||(o[3]=a=>t.value._id=a),modelModifiers:{trim:!0},required:"false",invalid:$.value&&!t.value._id,fluid:"",readonly:"true"},null,8,["modelValue","invalid"]),$.value&&!t.value.id?(u(),p("small",Ue,"ID is required.")):y("",!0)]),r("div",null,[o[14]||(o[14]=r("label",{for:"title",class:"block font-bold mb-3"},"Title",-1)),n(C,{rows:"5",id:"title",modelValue:t.value.title,"onUpdate:modelValue":o[4]||(o[4]=a=>t.value.title=a),modelModifiers:{trim:!0},required:"false",fluid:""},null,8,["modelValue"]),$.value&&!t.value.title?(u(),p("small",Fe,"Title is required.")):y("",!0)]),r("div",null,[o[15]||(o[15]=r("label",{for:"question",class:"block font-bold mb-3"},"Question",-1)),n(Z,{id:"question",modelValue:t.value.question,"onUpdate:modelValue":o[5]||(o[5]=a=>t.value.question=a),modelModifiers:{trim:!0},required:"false",invalid:$.value&&!t.value.question,fluid:""},null,8,["modelValue","invalid"]),$.value&&!t.value.question?(u(),p("small",Re,"Title is required.")):y("",!0)]),r("div",null,[o[16]||(o[16]=r("label",{for:"category",class:"block font-bold mb-3"},"Category",-1)),n(C,{id:"category",modelValue:t.value.category,"onUpdate:modelValue":o[6]||(o[6]=a=>t.value.category=a),modelModifiers:{trim:!0},required:"false",invalid:$.value&&!t.value.category,fluid:""},null,8,["modelValue","invalid"]),$.value&&!t.value.category?(u(),p("small",Ee,"Title is required.")):y("",!0)]),o[17]||(o[17]=r("div",{class:"flex align-items-center gap-3 mb-5"},null,-1)),r("div",Qe,[n(v,{type:"button",label:"Cancel",severity:"secondary",onClick:o[7]||(o[7]=a=>c.$emit("close"))}),n(v,{type:"submit",label:"Submit"})])],32)])]),_:1},8,["visible"]),n(B,{visible:b.value,"onUpdate:visible":o[10]||(o[10]=a=>b.value=a),style:{width:"450px"},header:"Confirm",modal:!0},{footer:d(a=>[n(v,{label:"No",icon:"pi pi-times",text:"",onClick:o[9]||(o[9]=O=>b.value=!1)}),n(v,{label:"Yes",icon:"pi pi-check",onClick:O=>Q(a.data)},null,8,["onClick"])]),default:d(()=>[r("div",Ke,[o[20]||(o[20]=r("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1)),g.value?(u(),p("span",Je,[o[18]||(o[18]=V("Are you sure you want to delete ")),r("b",null,A(g.value.name),1),o[19]||(o[19]=V("?"))])):y("",!0)])]),_:1},8,["visible"])])],64)}}};export{ts as default};
