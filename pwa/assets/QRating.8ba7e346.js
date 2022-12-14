import{c as R,n as k,o as w,b as Q,e as z}from"./QBtn.96c9a9d2.js";import{h as D,q as P,s as j}from"./QSeparator.70098087.js";import{r as K,c as d,a4 as N,h as y,M as g,g as E}from"./index.66f3c6f6.js";import{b as U}from"./alternative.43773149.js";var W=R({name:"QRating",props:{...k,...D,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:L,emit:I}){const{proxy:{$q:v}}=E(),$=w(e),H=P(e),x=j(H),o=K(0);let u={};const f=d(()=>e.readonly!==!0&&e.disable!==!0),C=d(()=>`q-rating row inline items-center q-rating--${f.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),V=d(()=>{const a=Array.isArray(e.icon)===!0?e.icon.length:0,n=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,t=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,c=Array.isArray(e.color)===!0?e.color.length:0,i=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,l=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:a,icon:a>0?e.icon[a-1]:e.icon,selIconLen:n,selIcon:n>0?e.iconSelected[n-1]:e.iconSelected,halfIconLen:t,halfIcon:t>0?e.iconHalf[n-1]:e.iconHalf,colorLen:c,color:c>0?e.color[c-1]:e.color,selColorLen:i,selColor:i>0?e.colorSelected[i-1]:e.colorSelected,halfColorLen:l,halfColor:l>0?e.colorHalf[l-1]:e.colorHalf}}),q=d(()=>{if(typeof e.iconAriaLabel=="string"){const a=e.iconAriaLabel.length>0?`${e.iconAriaLabel} `:"";return n=>`${a}${n}`}if(Array.isArray(e.iconAriaLabel)===!0){const a=e.iconAriaLabel.length;if(a>0)return n=>e.iconAriaLabel[Math.min(n,a)-1]}return(a,n)=>`${n} ${a}`}),M=d(()=>{const a=[],n=V.value,t=Math.ceil(e.modelValue),c=f.value===!0?0:null,i=e.iconHalf===void 0||t===e.modelValue?-1:t;for(let l=1;l<=e.max;l++){const r=o.value===0&&e.modelValue>=l||o.value>0&&o.value>=l,s=i===l&&o.value<l,m=o.value>0&&(s===!0?t:e.modelValue)>=l&&o.value<l,b=s===!0?l<=n.halfColorLen?e.colorHalf[l-1]:n.halfColor:n.selColor!==void 0&&r===!0?l<=n.selColorLen?e.colorSelected[l-1]:n.selColor:l<=n.colorLen?e.color[l-1]:n.color,F=(s===!0?l<=n.halfIconLen?e.iconHalf[l-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?l<=n.selIconLen?e.iconSelected[l-1]:n.selIcon:l<=n.iconLen?e.icon[l-1]:n.icon)||v.iconSet.rating.icon;a.push({name:(s===!0?l<=n.halfIconLen?e.iconHalf[l-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?l<=n.selIconLen?e.iconSelected[l-1]:n.selIcon:l<=n.iconLen?e.icon[l-1]:n.icon)||v.iconSet.rating.icon,attrs:{tabindex:c,role:"radio","aria-checked":e.modelValue===l?"true":"false","aria-label":q.value(l,F)},iconClass:"q-rating__icon"+(r===!0||s===!0?" q-rating__icon--active":"")+(m===!0?" q-rating__icon--exselected":"")+(o.value===l?" q-rating__icon--hovered":"")+(b!==void 0?` text-${b}`:"")})}return a}),_=d(()=>{const a={role:"radiogroup"};return e.disable===!0&&(a["aria-disabled"]="true"),e.readonly===!0&&(a["aria-readonly"]="true"),a});function h(a){if(f.value===!0){const n=U(parseInt(a,10),1,parseInt(e.max,10)),t=e.noReset!==!0&&e.modelValue===n?0:n;t!==e.modelValue&&I("update:modelValue",t),o.value=0}}function A(a){f.value===!0&&(o.value=a)}function B(a,n){switch(a.keyCode){case 13:case 32:return h(n),g(a);case 37:case 40:return u[`rt${n-1}`]&&u[`rt${n-1}`].$el.focus(),g(a);case 39:case 38:return u[`rt${n+1}`]&&u[`rt${n+1}`].$el.focus(),g(a)}}function S(){o.value=0}return N(()=>{u={}}),()=>{const a=[];return M.value.forEach(({iconClass:n,name:t,attrs:c},i)=>{const l=i+1;a.push(y("div",{key:l,ref:r=>{u[`rt${l}`]=r},class:"q-rating__icon-container flex flex-center",...c,onClick(){h(l)},onMouseover(){A(l)},onMouseout:S,onFocus(){A(l)},onBlur:S,onKeyup(r){B(r,l)}},Q(L[`tip-${l}`],[y(z,{class:n,name:t})])))}),e.name!==void 0&&e.disable!==!0&&x(a,"push"),y("div",{class:C.value,style:$.value,..._.value},a)}}});export{W as Q};
