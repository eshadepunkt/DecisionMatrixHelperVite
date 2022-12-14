import{c as F,h as C,u as D,f as T,a as L,v as S}from"./QBtn.96c9a9d2.js";import{c,h as f,r as y,H as N,M as j,g as A,P as V,f as K,o as P,O as q}from"./index.66f3c6f6.js";import{u as Q,a as M}from"./use-dark.3ffb60dd.js";var Y=F({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const i=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:i.value},C(t.default))}}),Z=F({name:"QItem",props:{...Q,...D,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:i}){const{proxy:{$q:n}}=A(),r=M(e,n),{hasLink:h,linkAttrs:k,linkClass:x,linkTag:B,navigateOnClick:E}=T(),d=y(null),m=y(null),g=c(()=>e.clickable===!0||h.value===!0||e.tag==="label"),o=c(()=>e.disable!==!0&&g.value===!0),w=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(h.value===!0&&e.active===null?x.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=c(()=>{if(e.insetLevel===void 0)return null;const s=n.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function R(s){o.value===!0&&(m.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===d.value?m.value.focus():document.activeElement===m.value&&d.value.focus()),E(s))}function U(s){if(o.value===!0&&N(s,13)===!0){j(s),s.qKeyEvent=!0;const p=new MouseEvent("click",s);p.qKeyEvent=!0,d.value.dispatchEvent(p)}i("keyup",s)}function _(){const s=L(t.default,[]);return o.value===!0&&s.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:m})),s}return()=>{const s={ref:d,class:w.value,style:I.value,role:"listitem",onClick:R,onKeyup:U};return o.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,k.value)):g.value===!0&&(s["aria-disabled"]="true"),f(B.value,s,_())}}});function ee(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),V.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function te(e,t,i){return i<=t?t:Math.min(i,Math.max(t,e))}function ie(e,t,i){if(i<=t)return t;const n=i-t+1;let r=t+(e-t)%n;return r<t&&(r=n+r),r===0?0:r}function ne(){let e;const t=A();function i(){clearTimeout(e)}return K(i),P(i),{removeTimeout:i,registerTimeout(n,r){clearTimeout(e),S(t)===!1&&(e=setTimeout(n,r))}}}let v;const O=new Uint8Array(16);function W(){if(!v&&(v=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(O)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function $(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}const z=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var b={randomUUID:z};function u(e,t,i){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const n=e.random||(e.rng||W)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let r=0;r<16;++r)t[i+r]=n[r];return t}return $(n)}var l=(e=>(e[e["very important"]=4]="very important",e[e.important=3]="important",e[e["less important"]=2]="less important",e[e.unimportant=1]="unimportant",e[e.undefined=0]="undefined",e))(l||{});const H=q("features",{state:()=>({features:[{id:u(),name:"Feature1",description:"Feature description",status:l.undefined,isExclusive:!0},{id:u(),name:"Feature2",description:"Feature description",status:l.undefined,isExclusive:!0},{id:u(),name:"Feature3",description:"Feature description",status:l.undefined,isExclusive:!0}],currentFeature:{id:u(),name:"FeatureName",description:"Feature description",status:l.undefined,isExclusive:!0}}),getters:{},actions:{addFeature(e){e.name!=""&&(this.features.find(t=>t.id===e.id)||(this.currentFeature.id===e.id&&(this.currentFeature={id:u(),name:"FeatureName",description:"Feature description",status:l.undefined,isExclusive:!0}),this.features.push(e)))},updateFeature(e){console.log("updating: ",e.id),this.features=this.features.map(t=>t.id===e.id?e:t)},getFeatureById(e){var t;return this.currentFeature.id===e?this.currentFeature:(t=this.features)==null?void 0:t.filter(i=>i.id===e)[0]},getFeatureByName(e){var t;return(t=this.features)==null?void 0:t.filter(i=>i.name===e)[0]},deleteFeature(e){this.features.includes(e)&&(this.features=this.features.filter(t=>t.id!==e.id))},deleteAllFeatures(){this.features.splice(0,this.features.length),console.log("deleted")}}});H();const se=q("Alternatives",{state:()=>({alternatives:[],isAssessed:!1}),getters:{alternativeNames:e=>e.alternatives.map(t=>t.name),assessmentByAlternative:e=>t=>{const i=e.alternatives.find(n=>n.id===t.id);return i?i.assessments:[]}},actions:{addAlternative(e){this.alternatives.find(t=>t.id===e.id)||this.alternatives.push(e)},updateAlternative(e){console.log("updating: ",e.id),this.alternatives=this.alternatives.map(t=>t.id===e.id?e:t)},assessAllFeaturesOfAlternative(e){e.score=e.assessments.reduce((i,n)=>i+n.score*n.feature.status,0),e.score<0&&(e.score=0)},updateAlternativeWithFeature(e){this.alternatives.forEach(t=>{if(t.assessments.filter(n=>n.feature.id===e.id).length===0){const n={id:u(),feature:e,justification:"justification "+(t.assessments.length+1),score:0};return t.assessments.push(n)}})},getAlternativeByName(e){var t;return(t=this.alternatives)==null?void 0:t.filter(i=>i.name===e)[0]},getAlternativeById(e){var t;return(t=this.alternatives)==null?void 0:t.filter(i=>i.id===e)[0]},deleteAlternative(e){this.alternatives.includes(e)&&(this.alternatives=this.alternatives.filter(t=>t.id!==e.id))},deleteAssessmentWithFeature(e){this.alternatives.forEach(t=>{const i=t.assessments.filter(n=>n.feature.id!=e.id);i.length>0&&(t.assessments=i)})},deleteAllAlternatives(){this.alternatives.splice(0,this.alternatives.length)}}});export{Z as Q,l as S,H as a,te as b,se as c,Y as d,ee as e,ie as n,ne as u,u as v};
