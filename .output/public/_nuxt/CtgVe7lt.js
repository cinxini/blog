import{D as A,V as N,_ as B}from"./Cuc9Zfu7.js";import{u as D,r as c,f as P,k as $,l as R,q as k,g as q,w as G,o as u,a as g,d as y,t as w,b as _,c as m,h as x,i as L}from"./C_V3QOGJ.js";import{q as f,u as O}from"./B-GY23he.js";import{_ as b}from"./BzyWSZ_1.js";import{c as V}from"./cve-lzbr.js";import{V as F}from"./CmFbPU8L.js";import"./D1DXdQ9i.js";import"./C52CURbo.js";import"./WO1tszi_.js";import"./DF58bc2X.js";import"./B_wa_0oN.js";import"./CFqgnv7v.js";/* empty css        */import"./CINA2u-a.js";import"./CdnC7oAK.js";const M={class:"text-center text-h5"},U={class:"text-primary"},j={key:0,class:"d-flex flex-row justify-center ma-16"},W={key:1},z={key:0,class:"text-center"},H={key:1,class:"text-center"},I={class:"text-primary"},J={key:2},me={__name:"[...slug]",async setup(K){let t,v;const{path:E,params:S}=D(),e=c("all"),a=c(S.slug),s=c(null),h=c(!1),o=c(1),p=async(n,r)=>{h.value=!0;let d=null;try{d=await f(`/${e.value==="all"?"":e.value}`).where({tags:{$contains:n}}).sort({"dates.published":-1}).skip((r-1)*V.POSTS_PER_PAGE).limit(V.POSTS_PER_PAGE).find()}catch(i){console.log("Error:",i)}finally{h.value=!1}return d};s.value=([t,v]=P(()=>f(`/${e.value==="all"?"":e.value}`).where({tags:{$contains:a.value}}).count()),t=await t,v(),t);const{data:l}=([t,v]=P(()=>O(`tag-${E}`,()=>p(a.value,o.value))),t=await t,v(),t),C=$(()=>s.value===0?1:Math.ceil(s.value/V.POSTS_PER_PAGE));R(async()=>{s.value||(s.value=await f(`/${e.value==="all"?"":e.value}`).where({tags:{$contains:a.value}}).count()),l.value||(l.value=await p(a.value,o.value))}),k(e,async n=>{o.value=1,l.value=await p(a.value,o.value),s.value=await f(`/${n==="all"?"":n}`).where({tags:{$contains:a.value}}).count()}),k(o,async n=>{l.value=await p(a.value,n)});const T=$(()=>!!(l.value&&l.value.length>0));return(n,r)=>{const d=B;return u(),q(F,{class:"main-container w-66"},{default:G(()=>[g("p",M,[y(" Posted in tag "),g("span",U,w(a.value[0]),1)]),_(b,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,["modelValue"]),h.value?(u(),m("div",j,[_(A)])):(u(),m("div",W,[s.value>0?(u(),m("p",z,"Found "+w(s.value)+" posts.",1)):(u(),m("p",H,[y("No posts with tag "),g("span",I,w(a.value[0]),1),y(".")])),x(T)?(u(),m("div",J,[_(d,{articles:x(l)},null,8,["articles"]),_(N,{length:x(C),modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=i=>o.value=i),"next-icon":"fa-solid fa-caret-right","prev-icon":"fa-solid fa-caret-left",rounded:"lg",color:"grey","active-color":"primary"},null,8,["length","modelValue"])])):L("",!0)]))]),_:1})}}};export{me as default};
