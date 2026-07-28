import{$n as e,A as t,C as n,Cn as r,Hn as i,Kt as a,Qt as o,S as s,Ut as c,Xt as l,dt as u,ft as d,pn as f,qt as p,rn as m,x as h,xn as g}from"./client-afectMo_.js";import{i as _}from"./text-Cz55FHMX.js";import{o as v}from"./index-DP8dMaev.js";var y=a([a(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),p(`spin-container`,`
 position: relative;
 `,[p(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[h()])]),p(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),p(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[l(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),p(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),p(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[l(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=g({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},t.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),n),slots:Object,setup(n){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=d(n),s=t(`Spin`,`-spin`,y,v,n,r),l=f(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:r}=s.value,{opacitySpinning:i,color:a,textColor:l}=r;return{"--n-bezier":t,"--n-opacity-spinning":i,"--n-size":typeof e==`number`?c(e):r[o(`size`,e)],"--n-color":a,"--n-text-color":l}}),p=a?u(`spin`,f(()=>{let{size:e}=n;return typeof e==`number`?String(e):e[0]}),l,n):void 0,m=_(n,[`spinning`,`show`]),h=e(!1);return i(e=>{let t;if(m.value){let{delay:r}=n;if(r){t=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(t)});return}}h.value=m.value}),{mergedClsPrefix:r,active:h,mergedStrokeWidth:f(()=>{let{strokeWidth:e}=n;if(e!==void 0)return e;let{size:t}=n;return b[typeof t==`number`?`medium`:t]}),cssVars:a?void 0:l,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:i}=this,a=t.icon&&this.rotate,o=(i||t.description)&&r(`div`,{class:`${n}-spin-description`},i||t.description?.call(t)),c=t.icon?r(`div`,{class:[`${n}-spin-body`,this.themeClass]},r(`div`,{class:[`${n}-spin`,a&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),o):r(`div`,{class:[`${n}-spin-body`,this.themeClass]},r(s,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),o);return(e=this.onRender)==null||e.call(this),t.default?r(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},r(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),r(m,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{x as t};