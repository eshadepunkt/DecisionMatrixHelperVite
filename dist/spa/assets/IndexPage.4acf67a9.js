import{Q as c}from"./use-router-link.0c6ea2e7.js";import{Q as d,a as p,b as o}from"./QPage.ed8d2010.js";import{Q as r}from"./QBtn.12c138fb.js";import{Q as m}from"./QSpace.d2f34c7f.js";import{Q as v,a as f}from"./QSlideTransition.22a1fcfe.js";import{v as _,r as a,y as n,z as x,A as i,F as s,W as b,X as g,Y as y,B as t,D as l,k as Q,C as h,Z as k}from"./index.cceb1773.js";import"./use-dark.2bb03a40.js";const w={class:"q-pa-md row items-start q-gutter-md justify-evenly fixed-center"},S={class:"text-h6"},q={class:"text-subtitle2"},T=_({__name:"IndexPage",setup(C){const u=[{title:"Wizard",subtitle:"guided decision making",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"wizard",icon:"auto_fix_normal",expanded:a(!1)},{title:"Alternatives",subtitle:"edit all alternatives",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"alternatives",icon:"build",expanded:a(!1)},{title:"Features",subtitle:"edit all features",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"features",icon:"checklist",expanded:a(!1)},{title:"Decision Matrix",subtitle:"show your decisions",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"features",icon:"functions",expanded:a(!1)}];return(V,B)=>(n(),x(d,null,{default:i(()=>[s("div",w,[(n(),b(y,null,g(u,e=>t(p,{style:{width:"220px"},key:e.route},{default:i(()=>[t(o,{avatar:"",class:"q-ml-lg q-mt-lg",horizontal:""},{default:i(()=>[t(c,{size:"md",name:e.icon,color:"secondary"},null,8,["name"])]),_:2},1024),t(o,null,{default:i(()=>[s("div",S,l(e.title),1),s("div",q,l(e.subtitle),1)]),_:2},1024),t(v,null,{default:i(()=>[t(r,{flat:"",color:"primary",label:"go to: "+e.title,to:e.route,"no-caps":""},null,8,["label","to"]),t(m),t(r,{color:"grey",round:"",flat:"",dense:"",icon:e.expanded.value?"keyboard_arrow_up":"keyboard_arrow_down",onClick:P=>e.expanded.value=!e.expanded.value},null,8,["icon","onClick"])]),_:2},1024),t(f,null,{default:i(()=>[Q(s("div",null,[t(o,{class:"text-overline text-caption text-grey"},{default:i(()=>[h(l(e.description),1)]),_:2},1024)],512),[[k,e.expanded.value]])]),_:2},1024)]),_:2},1024)),64))])]),_:1}))}});export{T as default};
