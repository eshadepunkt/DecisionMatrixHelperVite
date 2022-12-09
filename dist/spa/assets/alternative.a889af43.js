import{c as b,h as L,e as _,g as C,a as D,v as T}from"./use-router-link.0c6ea2e7.js";import{c,h as f,r as y,H as N,G as S,g as A,P as K,f as P,o as Q,O as x}from"./index.cceb1773.js";import{u as V,a as W}from"./use-dark.2bb03a40.js";var Y=b({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const i=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:i.value},L(t.default))}}),Z=b({name:"QItem",props:{...V,..._,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:i}){const{proxy:{$q:n}}=A(),u=W(e,n),{hasLink:h,linkAttrs:q,linkClass:k,linkTag:E,navigateOnClick:j}=C(),d=y(null),m=y(null),p=c(()=>e.clickable===!0||h.value===!0||e.tag==="label"),l=c(()=>e.disable!==!0&&p.value===!0),B=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(h.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(l.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=c(()=>{if(e.insetLevel===void 0)return null;const s=n.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function I(s){l.value===!0&&(m.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===d.value?m.value.focus():document.activeElement===m.value&&d.value.focus()),j(s))}function R(s){if(l.value===!0&&N(s,13)===!0){S(s),s.qKeyEvent=!0;const g=new MouseEvent("click",s);g.qKeyEvent=!0,d.value.dispatchEvent(g)}i("keyup",s)}function U(){const s=D(t.default,[]);return l.value===!0&&s.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:m})),s}return()=>{const s={ref:d,class:B.value,style:w.value,role:"listitem",onClick:I,onKeyup:R};return l.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,q.value)):p.value===!0&&(s["aria-disabled"]="true"),f(E.value,s,U())}}});function ee(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),K.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function te(e,t,i){return i<=t?t:Math.min(i,Math.max(t,e))}function ie(e,t,i){if(i<=t)return t;const n=i-t+1;let u=t+(e-t)%n;return u<t&&(u=n+u),u===0?0:u}function ne(){let e;const t=A();function i(){clearTimeout(e)}return P(i),Q(i),{removeTimeout:i,registerTimeout(n,u){clearTimeout(e),T(t)===!1&&(e=setTimeout(n,u))}}}var o=(e=>(e[e["very important"]=3]="very important",e[e.important=2]="important",e[e["less important"]=1]="less important",e[e.unimportant=0]="unimportant",e[e.undefined=-1]="undefined",e))(o||{});let v;const $=new Uint8Array(16);function M(){if(!v&&(v=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v($)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function O(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}const z=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var F={randomUUID:z};function r(e,t,i){if(F.randomUUID&&!t&&!e)return F.randomUUID();e=e||{};const n=e.random||(e.rng||M)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let u=0;u<16;++u)t[i+u]=n[u];return t}return O(n)}const H=x("features",{state:()=>({features:[{id:r(),name:"Feature1",description:"Feature description",status:o.undefined,isExclusive:!0},{id:r(),name:"Feature2",description:"Feature description",status:o.undefined,isExclusive:!0},{id:r(),name:"Feature3",description:"Feature description",status:o.undefined,isExclusive:!0}],currentFeature:{id:r(),name:"FeatureName",description:"Feature description",status:o.undefined,isExclusive:!0}}),getters:{},actions:{addFeature(e){e.name!=""&&(this.features.find(t=>t.id===e.id)||(this.currentFeature.id===e.id&&(this.currentFeature={id:r(),name:"FeatureName",description:"Feature description",status:o.undefined,isExclusive:!0}),this.features.push(e)))},updateFeature(e){console.log("updating: ",e.id),this.features=this.features.map(t=>t.id===e.id?e:t)},getFeatureById(e){var t;return this.currentFeature.id===e?this.currentFeature:(t=this.features)==null?void 0:t.filter(i=>i.id===e)[0]},getFeatureByName(e){var t;return(t=this.features)==null?void 0:t.filter(i=>i.name===e)[0]},deleteFeature(e){this.features.includes(e)&&(this.features=this.features.filter(t=>t.id!==e.id))},deleteAllFeatures(){this.features.splice(0,this.features.length),console.log("deleted")}}});H();const se=x("Alternatives",{state:()=>({alternatives:[{id:r(),name:"Alternative1",description:"Lorem ipsum dolor",assessments:[{id:r(),feature:{name:"Feature5",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification1"},{id:r(),feature:{name:"Feature4",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification2"}]},{id:r(),name:"Alternative2",description:"Lorem ipsum dolor",assessments:[{id:r(),feature:{name:"Feature5",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification1"},{id:r(),feature:{name:"Feature4",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification2"}]},{id:r(),name:"Alternative3",description:"Lorem ipsum dolor",assessments:[{id:r(),feature:{name:"Feature1",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification1"},{id:r(),feature:{name:"Feature4",description:"Feature description",status:o.undefined,isExclusive:!0},score:0,justification:"justification2"}]}],currentAlternative:{id:r(),name:"AlternativenName",description:"Lorem ipsum dolor",assessments:[],score:0}}),getters:{},actions:{addAlternative(e){this.alternatives.find(t=>t.id===e.id)||this.alternatives.push(e)},updateAlternative(e){console.log("updating: ",e.id),this.alternatives=this.alternatives.map(t=>t.id===e.id?e:t)},updateAlternativeWithFeature(e){this.alternatives.forEach(t=>{if(t.assessments.filter(n=>n.feature.id===e.id).length===0){const n={id:r(),feature:e,justification:"justification "+(t.assessments.length+1),score:0};return t.assessments.push(n)}})},getAlternativeByName(e){var t;return(t=this.alternatives)==null?void 0:t.filter(i=>i.name===e)[0]},getAlternativeById(e){var t;return this.currentAlternative.id===e?this.currentAlternative:(t=this.alternatives)==null?void 0:t.filter(i=>i.id===e)[0]},deleteAlternative(e){this.alternatives.includes(e)&&(this.alternatives=this.alternatives.filter(t=>t.id!==e.id))},deleteAssessmentWithFeature(e){this.alternatives.forEach(t=>{const i=t.assessments.filter(n=>n.feature.id!=e.id);i.length>0&&(t.assessments=i)})},deleteAllAlternatives(){this.alternatives.splice(0,this.alternatives.length)}}});export{Z as Q,o as S,H as a,te as b,se as c,Y as d,ee as e,ie as n,ne as u,r as v};
