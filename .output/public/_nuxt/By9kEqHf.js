import{u as j,q as H}from"./B-GY23he.js";import{_ as W,o as y,g as C,w as f,a as u,b as a,d as ye,t as k,m as I,i as O,h as T,v as te,x as F,y as oe,z as be,A as M,B as we,C as xe,D as ne,r as A,k as P,E as Y,q as L,G as Ce,H as X,I as ae,J as Ve,K as Pe,L as Te,l as se,F as S,M as N,N as Ie,O as Ee,P as Se,c as B,Q as R,p as ke,e as Ae}from"./C_V3QOGJ.js";import{C as le,V as Be,a as ie}from"./D1DXdQ9i.js";import{c as $,a as D,b as E,u as Re,d as Le,e as $e,m as De,f as Fe,M as Me,g as Xe}from"./DF58bc2X.js";import{V as je}from"./S6mNapcC.js";import{V as p}from"./C52CURbo.js";import{V as re}from"./CINA2u-a.js";import{V as He,a as K}from"./CFqgnv7v.js";import{S as U}from"./Dy7CESTe.js";import{V as Ue}from"./CmFbPU8L.js";import{m as Ye}from"./WO1tszi_.js";import{m as Ne,u as pe}from"./aJsuEaGc.js";import{u as We}from"./CWRG14cZ.js";import"./CdnC7oAK.js";import"./B_wa_0oN.js";/* empty css        */import"./BhZtn-n7.js";const ce=""+new URL("default.DRLkXU9V.png",import.meta.url).href,Oe={style:{height:"55%"},class:"position-relative"},ze={class:"position-absolute top-0 left-0 w-100 mt-3"},Ge={class:"d-flex flex-row justify-space-between"},qe={class:"feature-title mb-2"},Je=["href"],Ke={__name:"FeaturedCard",props:{content:{type:Object}},setup(e){const n=t=>t.split("/")[1];return(t,o)=>(y(),C(re,{variant:"flat",width:"290",height:"285"},{default:f(()=>[u("div",Oe,[a($,{src:ce,cover:""}),u("div",ze,[a(le,{"is-center":!0,category:e.content.category,page:n(e.content._path)},null,8,["category","page"])])]),a(je,{height:"45%",class:"d-flex flex-column pa-3",color:"transparent"},{default:f(()=>[u("div",Ge,[a(Be,{variant:"text",size:"x-small",density:"comfortable"},{default:f(()=>[a(p,{icon:"fa-regular fa-calendar",size:"x-small",color:"baseVariant",start:""}),ye(" "+k(e.content.dates.published),1)]),_:1}),a(D,null,{default:f(({isHovering:l,props:i})=>[e.content.github?(y(),C(E,I({key:0},i,{class:"mybutton",icon:"fa-brands fa-github-alt",variant:l?"tonal":"flat",color:l?"primary":"baseColor",size:"x-small",density:"comfortable",href:e.content.github,target:"_blank"}),null,16,["variant","color","href"])):O("",!0)]),_:1})]),u("div",qe,[u("a",{href:e.content._path},k(e.content.title),9,Je)]),a(ie,{tags:e.content.tags},null,8,["tags"])]),_:1})]),_:1}))}},Qe=W(Ke,[["__scopeId","data-v-4582f02b"]]),x={FEATURED_PER_PAGE:3,MAX_FEATURED:6,NUM_LATEST:6,DESCRIPTION_MAX_CHAR:60},Ze={class:"d-flex flex-row justify-space-between"},et={class:"latest-title mb-2"},tt=["href"],ot={class:"text-caption"},nt={__name:"LatestCard",props:{content:{type:Object,required:!0}},setup(e){const n=t=>t.split("/")[1];return(t,o)=>(y(),C(re,{key:e.content._path,width:"49%","min-height":"120",variant:"flat",color:"transparent"},{default:f(()=>[a(He,{"no-gutters":"",style:{height:"100%"}},{default:f(()=>[a(K,{cols:"3",class:"position-relative"},{default:f(()=>[a($,{src:ce,cover:"",height:"100%",rounded:""})]),_:1}),a(K,{class:"d-flex flex-column pa-3"},{default:f(()=>[u("div",Ze,[a(le,{category:e.content.category,page:n(e.content._path),size:"x-small",date:e.content.dates.published},null,8,["category","page","date"]),a(D,null,{default:f(({isHovering:l,props:i})=>[e.content.github?(y(),C(E,I({key:0},i,{class:"mybutton",icon:"fa-brands fa-github-alt",variant:l?"tonal":"flat",color:l?"primary":"baseColor",size:"x-small",density:"comfortable",href:e.content.github,target:"_blank"}),null,16,["variant","color","href"])):O("",!0)]),_:1})]),u("div",et,[u("a",{href:e.content._path},k(e.content.title),9,tt)]),u("div",ot,k(e.content.description.substring(0,T(x).DESCRIPTION_MAX_CHAR))+k(e.content.description.length>T(x).DESCRIPTION_MAX_CHAR?"...":""),1),a(ie,{tags:e.content.tags},null,8,["tags"])]),_:1})]),_:1})]),_:1}))}},Q=W(nt,[["__scopeId","data-v-cc593acd"]]),at=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:l}=e,i=.5,s=16;e.offsetX=t-n,e.offsetY=l-o,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&l<o-s&&e.up(e),e.down&&l>o+s&&e.down(e))};function st(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function lt(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),at(n)}function it(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>st(t,n),touchend:t=>lt(t,n),touchmove:t=>it(t,n)}}function ct(e,n){var h;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,l=(t==null?void 0:t.options)??{passive:!0},i=(h=n.instance)==null?void 0:h.$.uid;if(!o||!i)return;const s=rt(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[i]=s,te(s).forEach(d=>{o.addEventListener(d,s[d],l)})}function ut(e,n){var i,s;const t=(i=n.value)!=null&&i.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const l=t._touchHandlers[o];te(l).forEach(h=>{t.removeEventListener(h,l[h])}),delete t._touchHandlers[o]}const ue={mounted:ct,unmounted:ut},de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),he=F({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...oe(),...Ye(),...be()},"VWindow"),Z=M()({name:"VWindow",directives:{Touch:ue},props:he(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=we(e),{isRtl:l}=xe(),{t:i}=ne(),s=Re(e,fe),h=A(),d=P(()=>l.value?!e.reverse:e.reverse),v=Y(!1),w=P(()=>{const _=e.direction==="vertical"?"y":"x",V=(d.value?!v.value:v.value)?"-reverse":"";return`v-window-${_}${V}-transition`}),m=Y(0),g=A(void 0),r=P(()=>s.items.value.findIndex(_=>s.selected.value.includes(_.id)));L(r,(_,b)=>{const V=s.items.value.length,J=V-1;V<=2?v.value=_<b:_===J&&b===0?v.value=!0:_===0&&b===J?v.value=!1:v.value=_<b}),Ce(de,{transition:w,isReversed:v,transitionCount:m,transitionHeight:g,rootRef:h});const c=P(()=>e.continuous||r.value!==0),z=P(()=>e.continuous||r.value!==s.items.value.length-1);function G(){c.value&&s.prev()}function q(){z.value&&s.next()}const ge=P(()=>{const _=[],b={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:s.prev,"aria-label":i("$vuetify.carousel.prev")};_.push(c.value?t.prev?t.prev({props:b}):a(E,b,null):a("div",null,null));const V={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:s.next,"aria-label":i("$vuetify.carousel.next")};return _.push(z.value?t.next?t.next({props:V}):a(E,V,null):a("div",null,null)),_}),_e=P(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?G():q()},right:()=>{d.value?q():G()},start:b=>{let{originalEvent:V}=b;V.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>ae(a(e.tag,{ref:h,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var _,b;return[a("div",{class:"v-window__container",style:{height:g.value}},[(_=t.default)==null?void 0:_.call(t,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[ge.value])]),(b=t.additional)==null?void 0:b.call(t,{group:s})]}}),[[Ve("touch"),_e.value]])),{group:s}}}),dt=F({color:String,cycle:Boolean,delimiterIcon:{type:Pe,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...he({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),ft=M()({name:"VCarousel",props:dt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Te(e,"modelValue"),{t:l}=ne(),i=A();let s=-1;L(o,d),L(()=>e.interval,d),L(()=>e.cycle,v=>{v?d():window.clearTimeout(s)}),se(h);function h(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function d(){window.clearTimeout(s),window.requestAnimationFrame(h)}return X(()=>{const v=Z.filterProps(e);return a(Z,I({ref:i},v,{modelValue:o.value,"onUpdate:modelValue":w=>o.value=w,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:N(e.height)},e.style]}),{default:t.default,additional:w=>{let{group:m}=w;return a(S,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&a(Le,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((g,r)=>{const c={id:`carousel-item-${g.id}`,"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",r+1,m.items.value.length),class:["v-carousel__controls__item",m.isSelected(g.id)&&"v-btn--active"],onClick:()=>m.select(g.id,!0)};return t.item?t.item({props:c,item:g}):a(E,I(g,c),null)})]})]),e.progress&&a($e,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(o.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),ve=F({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...oe(),...De(),...Ne()},"VWindowItem"),ee=M()({name:"VWindowItem",directives:{Touch:ue},props:ve(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=Ie(de),l=Fe(e,fe),{isBooted:i}=We();if(!o||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=Y(!1),h=P(()=>i.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function v(){var c;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=N((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function w(){d()}function m(c){s.value&&Se(()=>{!h.value||!s.value||!o||(o.transitionHeight.value=N(c.clientHeight))})}const g=P(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return h.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:v,onAfterEnter:d,onEnterCancelled:w,onBeforeLeave:v,onAfterLeave:d,onLeaveCancelled:w,onEnter:m}:!1}),{hasContent:r}=pe(e,l.isSelected);return X(()=>a(Me,{transition:g.value,disabled:!i.value},{default:()=>{var c;return[ae(a("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[r.value&&((c=t.default)==null?void 0:c.call(t))]),[[Ee,l.isSelected.value]])]}})),{groupItem:l}}}),ht=F({...Xe(),...ve()},"VCarouselItem"),vt=M()({name:"VCarouselItem",inheritAttrs:!1,props:ht(),setup(e,n){let{slots:t,attrs:o}=n;X(()=>{const l=$.filterProps(e),i=ee.filterProps(e);return a(ee,I({class:["v-carousel-item",e.class]},i),{default:()=>[a($,I(o,l),t)]})})}}),me=e=>(ke("data-v-84349c6f"),e=e(),Ae(),e),mt={class:"mb-10"},gt={class:"d-flex flex-row justify-space-between ga-5"},_t={class:"mb-10"},yt={class:"d-flex justify-space-between flex-wrap ga-2 mt-4 mb-2"},bt={style:{height:"30px"},class:"d-flex flex-row-reverse"},wt=me(()=>u("span",null,"See more projects",-1)),xt={class:"mb-10"},Ct={class:"d-flex justify-space-between flex-wrap ga-2 mt-4 mb-2"},Vt={style:{height:"30px"},class:"d-flex flex-row-reverse"},Pt=me(()=>u("span",null,"See more posts",-1)),Tt={__name:"index",setup(e){const n=A(1),t=A(x.FEATURED_PER_PAGE),{data:o,refresh:l}=j("featuredList",()=>H("/").where({isFeatured:!0,status:"published"}).limit(x.MAX_FEATURED).sort({"dates.published":-1}).find()),i=(m,g)=>(m-1)*t.value+g,s=m=>{var r;const g=i(m,0);return(r=o.value)==null?void 0:r.slice(g,g+t.value)},{data:h,refresh:d}=j("latestProjectList",()=>H("/project").where({status:"published"}).limit(x.NUM_LATEST).sort({"dates.published":-1}).find()),{data:v,refresh:w}=j("latestBlogList",()=>H("/blog").where({status:"published"}).limit(x.NUM_LATEST).sort({"dates.published":-1}).find());return se(async()=>{o.value||await l(),n.value=Math.ceil(o.value.length/x.FEATURED_PER_PAGE),h.value||await d(),v.value||await w()}),(m,g)=>(y(),C(Ue,{class:"main-container w-66"},{default:f(()=>[u("div",mt,[a(U,{tooltip:`${T(x).MAX_FEATURED} latest featured articles`,title:"Features",icon:"fa-solid fa-map-pin"},null,8,["tooltip"]),T(o)?(y(),C(ft,{key:0,class:"my-4",height:"290",width:"100%","show-arrows":"hover",cycle:"","hide-delimiters":""},{default:f(()=>[(y(!0),B(S,null,R(n.value,r=>(y(),C(vt,{key:r},{default:f(()=>[u("div",gt,[(y(!0),B(S,null,R(s(r),c=>(y(),C(Qe,{key:c._path,content:c},null,8,["content"]))),128))])]),_:2},1024))),128))]),_:1})):O("",!0)]),u("div",_t,[a(U,{tooltip:`${T(x).NUM_LATEST} latest projects`,title:"Latest Projects",icon:"fa-solid fa-code"},null,8,["tooltip"]),u("div",yt,[(y(!0),B(S,null,R(T(h),r=>(y(),C(Q,{key:r._path,content:r},null,8,["content"]))),128))]),u("div",bt,[a(D,null,{default:f(({isHovering:r,props:c})=>[a(E,I(c,{variant:r?"tonal":"flat",color:r?"primary":"baseColor",class:"mybutton",density:"comfortable",to:"/projects",width:"210"}),{append:f(()=>[a(p,{icon:"fa-solid fa-arrow-right-long"})]),default:f(()=>[wt]),_:2},1040,["variant","color"])]),_:1})])]),u("div",xt,[a(U,{tooltip:`${T(x).NUM_LATEST} latest blog posts`,title:"Latest Blog Posts",icon:"fa-solid fa-quote-left"},null,8,["tooltip"]),u("div",Ct,[(y(!0),B(S,null,R(T(v),r=>(y(),C(Q,{key:r._path,content:r},null,8,["content"]))),128))]),u("div",Vt,[a(D,null,{default:f(({isHovering:r,props:c})=>[a(E,I(c,{variant:r?"tonal":"flat",color:r?"primary":"baseColor",class:"mybutton",density:"comfortable",to:"/blogs",width:"210"}),{append:f(()=>[a(p,{icon:"fa-solid fa-arrow-right-long"})]),default:f(()=>[Pt]),_:2},1040,["variant","color"])]),_:1})])])]),_:1}))}},Nt=W(Tt,[["__scopeId","data-v-84349c6f"]]);export{Nt as default};
