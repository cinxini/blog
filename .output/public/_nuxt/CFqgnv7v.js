/* empty css        */import{bp as i,bn as u,x as b,y as C,A as S,k,au as N}from"./C_V3QOGJ.js";import{m as j}from"./WO1tszi_.js";const V=i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}),v=i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}),L=i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}),y={col:Object.keys(V),offset:Object.keys(v),order:Object.keys(L)};function G(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],I=b({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...C(),...j()},"VCol"),J=S()({name:"VCol",props:I(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=G(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return N(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const R=[...f,"baseline","stretch"],h=t=>R.includes(t),w=d("align",()=>({type:String,default:null,validator:h})),T=[...f,...$],P=t=>T.includes(t),A=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...$,"stretch"],E=t=>U.includes(t),O=d("alignContent",()=>({type:String,default:null,validator:E})),m={align:Object.keys(w),justify:Object.keys(A),alignContent:Object.keys(O)},B={align:"align",justify:"justify",alignContent:"align-content"};function M(t,a,e){let s=B[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const x=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...A,alignContent:{type:String,default:null,validator:E},...O,...C(),...j()},"VRow"),W=S()({name:"VRow",props:x(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=t[r],c=M(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return N(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{W as V,J as a};
