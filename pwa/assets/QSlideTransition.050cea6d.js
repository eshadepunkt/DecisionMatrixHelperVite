import{o as b,h as v,T as w}from"./index.66f3c6f6.js";import{c as E}from"./QBtn.96c9a9d2.js";var x=E({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(s,{slots:p,emit:g}){let r=!1,a,u,d,f,i,m;function l(){a&&a(),a=null,r=!1,clearTimeout(d),clearTimeout(f),u!==void 0&&u.removeEventListener("transitionend",i),i=null}function h(t,e,n){t.style.overflowY="hidden",e!==void 0&&(t.style.height=`${e}px`),t.style.transition=`height ${s.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,a=n}function c(t,e){t.style.overflowY=null,t.style.height=null,t.style.transition=null,l(),e!==m&&g(e)}function T(t,e){let n=0;u=t,r===!0?(l(),n=t.offsetHeight===t.scrollHeight?0:void 0):m="hide",h(t,n,e),d=setTimeout(()=>{t.style.height=`${t.scrollHeight}px`,i=o=>{(Object(o)!==o||o.target===t)&&c(t,"show")},t.addEventListener("transitionend",i),f=setTimeout(i,s.duration*1.1)},100)}function y(t,e){let n;u=t,r===!0?l():(m="show",n=t.scrollHeight),h(t,n,e),d=setTimeout(()=>{t.style.height=0,i=o=>{(Object(o)!==o||o.target===t)&&c(t,"hide")},t.addEventListener("transitionend",i),f=setTimeout(i,s.duration*1.1)},100)}return b(()=>{r===!0&&l()}),()=>v(w,{css:!1,appear:s.appear,onEnter:T,onLeave:y},p.default)}});export{x as Q};
