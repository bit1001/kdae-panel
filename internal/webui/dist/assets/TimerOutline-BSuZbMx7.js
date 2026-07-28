import{$n as e,A as t,Bt as n,Cn as r,D as i,Fn as a,It as o,Kt as s,Qt as c,S as l,St as u,T as d,Ut as f,Xt as p,Yt as m,Zt as h,_n as g,_t as _,b as v,bt as y,dt as b,ft as x,mn as S,pn as C,qt as w,rr as T,ut as E,xn as D}from"./client-afectMo_.js";import{a as O}from"./text-Cz55FHMX.js";import{a as k}from"./index-hSdU0K0M.js";function A(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},k),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${o(t,{alpha:.2})}`})}var j={name:`Switch`,common:v,self:A},M=w(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[m(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),m(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),m(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),w(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[d({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),m(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),m(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),m(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s(`&:focus`,[m(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),p(`round`,[m(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[m(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),h(`disabled`,[h(`icon`,[p(`rubber-band`,[p(`pressed`,[m(`rail`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),m(`rail`,[s(`&:active`,[m(`button`,`max-width: var(--n-button-width-pressed);`)])]),p(`active`,[p(`pressed`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),m(`rail`,[s(`&:active`,[m(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),p(`active`,[m(`rail`,[m(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),m(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[m(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[d()]),m(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),p(`active`,[m(`rail`,`background-color: var(--n-rail-color-active);`)]),p(`loading`,[m(`rail`,`
 cursor: wait;
 `)]),p(`disabled`,[m(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=Object.assign(Object.assign({},t.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),P,F=D({name:`Switch`,props:N,slots:Object,setup(r){P===void 0&&(P=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=x(r),s=t(`Switch`,`-switch`,M,j,r,i),l=E(r,{mergedSize(e){return r.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:r.size}}),{mergedSizeRef:d,mergedDisabledRef:p}=l,m=e(r.defaultValue),h=O(T(r,`value`),m),g=C(()=>h.value===r.checkedValue),_=e(!1),v=e(!1),y=C(()=>{let{railStyle:e}=r;if(e)return e({focused:v.value,checked:g.value})});function S(e){let{"onUpdate:value":t,onChange:n,onUpdateValue:i}=r,{nTriggerFormInput:a,nTriggerFormChange:o}=l;t&&u(t,e),i&&u(i,e),n&&u(n,e),m.value=e,a(),o()}function w(){let{nTriggerFormFocus:e}=l;e()}function D(){let{nTriggerFormBlur:e}=l;e()}function k(){r.loading||p.value||(h.value===r.checkedValue?S(r.uncheckedValue):S(r.checkedValue))}function A(){v.value=!0,w()}function N(){v.value=!1,D(),_.value=!1}function F(e){r.loading||p.value||e.key===` `&&(h.value===r.checkedValue?S(r.uncheckedValue):S(r.checkedValue),_.value=!1)}function I(e){r.loading||p.value||e.key===` `&&(e.preventDefault(),_.value=!0)}let L=C(()=>{let{value:e}=d,{self:{opacityDisabled:t,railColor:r,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:l,loadingColor:u,textColor:p,iconColor:m,[c(`buttonHeight`,e)]:h,[c(`buttonWidth`,e)]:g,[c(`buttonWidthPressed`,e)]:_,[c(`railHeight`,e)]:v,[c(`railWidth`,e)]:y,[c(`railBorderRadius`,e)]:b,[c(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=s.value,C,w,T;return P?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=f((n(v)-n(h))/2),w=f(Math.max(n(v),n(h))),T=n(v)>n(h)?y:f(n(y)+n(h)-n(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":l,"--n-loading-color":u,"--n-text-color":p,"--n-icon-color":m}}),R=a?b(`switch`,C(()=>d.value[0]),L,r):void 0;return{handleClick:k,handleBlur:N,handleFocus:A,handleKeyup:F,handleKeydown:I,mergedRailStyle:y,pressed:_,mergedClsPrefix:i,mergedValue:h,checked:g,mergedDisabled:p,cssVars:a?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:a,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":p}=s,m=!(_(d)&&_(f)&&_(p));return r(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},y(c,t=>y(u,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},y(d,t=>y(f,n=>y(p,a=>r(i,null,{default:()=>this.loading?r(l,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?r(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(a||t)?r(`div`,{class:`${e}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||t):null})))),y(c,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),y(u,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}}),I={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},L=D({name:`TimerOutline`,render:function(e,t){return a(),g(`svg`,I,t[0]||=[S(`path`,{d:`M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194c106.2.2 192-85.83 192-192c0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),S(`path`,{d:`M233.38 278.63l-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26a33.21 33.21 0 0 1-8.07-7.94z`,fill:`currentColor`},null,-1)])}});export{F as n,L as t};