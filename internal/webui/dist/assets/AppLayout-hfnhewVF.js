import{$n as e,$t as t,A as n,At as r,Cn as i,Dn as a,Et as o,Fn as s,Hn as c,In as l,Kt as u,Lt as d,Nn as f,Nt as p,O as m,Qt as h,St as g,Tn as _,Tt as v,Un as y,Vn as b,Xt as x,Yt as S,Zt as C,_n as w,ar as T,b as E,bn as D,bt as O,d as k,dt as A,en as j,ft as M,g as N,gn as P,hn as F,i as I,jn as ee,jt as L,k as te,kt as ne,ln as R,mn as z,or as re,pn as B,qt as V,r as ie,rr as H,sr as U,v as ae,vn as oe,vt as se,w as ce,xn as W,xt as G,yn as K,zn as le}from"./client-afectMo_.js";import{r as ue,t as q}from"./create-CCsFn2Ba.js";import{t as de}from"./misc-DDs3MKLt.js";import{r as J}from"./light-6OxpLMiD.js";import{a as Y,i as fe,n as pe,r as X,t as me}from"./text-Cz55FHMX.js";import{n as he,r as ge,t as _e}from"./Dropdown-YaPmP76S.js";import{n as ve}from"./Tag-DpDq28ad.js";import{t as ye}from"./Alert-R0LpFyKY.js";import{t as be}from"./Icon-cgotgpJ7.js";import{t as xe}from"./composables-BseRa11W.js";import{P as Z,S as Se,c as Ce,i as we,n as Te,r as Ee,t as De,x as Oe}from"./index-BdYRkzJ9.js";import{t as ke}from"./CloudDownloadOutline-BZnPzBrL.js";var Ae=W({name:`ChevronDownFilled`,render(){return i(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},i(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`}))}}),je=r&&`loading`in document.createElement(`img`);function Me(e={}){let{root:t=null}=e;return{hash:`${e.rootMargin||`0px 0px 0px 0px`}-${Array.isArray(e.threshold)?e.threshold.join(`,`):e.threshold??`0`}`,options:Object.assign(Object.assign({},e),{root:(typeof t==`string`?document.querySelector(t):t)||document.documentElement})}}var Ne=new WeakMap,Pe=new WeakMap,Fe=new WeakMap,Ie=(e,t,n)=>{if(!e)return()=>{};let r=Me(t),{root:i}=r.options,a,o=Ne.get(i);o?a=o:(a=new Map,Ne.set(i,a));let s,c;a.has(r.hash)?(c=a.get(r.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=Pe.get(e.target),n=Fe.get(e.target);t&&t(),n&&(n.value=!0)}})},r.options),s.observe(e),c=[s,new Set([e])],a.set(r.hash,c));let l=!1,u=()=>{l||(Pe.delete(e),Fe.delete(e),l=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(r.hash),a.size||Ne.delete(i))};return Pe.set(e,u),Fe.set(e,n),u},Le=L(`n-avatar-group`),Re=V(`avatar`,`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[t(u(`&`,`--n-merged-color: var(--n-color-modal);`)),j(u(`&`,`--n-merged-color: var(--n-color-popover);`)),u(`img`,`
 width: 100%;
 height: 100%;
 `),S(`text`,`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),V(`icon`,`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),S(`text`,`line-height: 1.25`)]),ze=W({name:`Avatar`,props:Object.assign(Object.assign({},n.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i}=M(t),a=e(!1),o=null,s=e(null),l=e(null),u=()=>{let{value:e}=s;if(e&&(o===null||o!==e.innerHTML)){o=e.innerHTML;let{value:t}=l;if(t){let{offsetWidth:n,offsetHeight:r}=t,{offsetWidth:i,offsetHeight:a}=e,o=.9,s=Math.min(n/i*o,r/a*o,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${s})`}}},d=_(Le,null),p=B(()=>{let{size:e}=t;if(e)return e;let{size:n}=d||{};return n||`medium`}),m=n(`Avatar`,`-avatar`,Re,Oe,t,r),g=_(ve,null),y=B(()=>{if(d)return!0;let{round:e,circle:n}=t;return e!==void 0||n!==void 0?e||n:g?g.roundRef.value:!1}),x=B(()=>d?!0:t.bordered||!1),S=B(()=>{let e=p.value,n=y.value,r=x.value,{color:i}=t,{self:{borderRadius:a,fontSize:o,color:s,border:c,colorModal:l,colorPopover:u},common:{cubicBezierEaseInOut:d}}=m.value,f;return f=typeof e==`number`?`${e}px`:m.value.self[h(`height`,e)],{"--n-font-size":o,"--n-border":r?c:`none`,"--n-border-radius":n?`50%`:a,"--n-color":i||s,"--n-color-modal":i||l,"--n-color-popover":i||u,"--n-bezier":d,"--n-merged-size":`var(--n-avatar-size-override, ${f})`}}),C=i?A(`avatar`,B(()=>{let e=p.value,n=y.value,r=x.value,{color:i}=t,a=``;return e&&(typeof e==`number`?a+=`a${e}`:a+=e[0]),n&&(a+=`b`),r&&(a+=`c`),i&&(a+=v(i)),a}),S,t):void 0,w=e(!t.lazy);f(()=>{if(t.lazy&&t.intersectionObserverOptions){let e,n=c(()=>{e?.(),e=void 0,t.lazy&&(e=Ie(l.value,t.intersectionObserverOptions,w))});ee(()=>{n(),e?.()})}}),b(()=>t.src||t.imgProps?.src,()=>{a.value=!1});let T=e(!t.lazy);return{textRef:s,selfRef:l,mergedRoundRef:y,mergedClsPrefix:r,fitTextTransform:u,cssVars:i?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender,hasLoadError:a,shouldStartLoading:w,loaded:T,mergedOnError:e=>{if(!w.value)return;a.value=!0;let{onError:n,imgProps:{onError:r}={}}=t;n?.(e),r?.(e)},mergedOnLoad:e=>{let{onLoad:n,imgProps:{onLoad:r}={}}=t;n?.(e),r?.(e),T.value=!0}}},render(){var e;let{$slots:t,src:n,mergedClsPrefix:r,lazy:a,onRender:s,loaded:c,hasLoadError:l,imgProps:u={}}=this;s?.();let d,f=!c&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(e=this.$slots).placeholder?.call(e));return d=this.hasLoadError?this.renderFallback?this.renderFallback():se(t.fallback,()=>[i(`img`,{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):O(t.default,e=>{if(e)return i(o,{onResize:this.fitTextTransform},{default:()=>i(`span`,{ref:`textRef`,class:`${r}-avatar__text`},e)});if(n||u.src){let e=this.src||u.src;return i(`img`,Object.assign(Object.assign({},u),{loading:je&&!this.intersectionObserverOptions&&a?`lazy`:`eager`,src:a&&this.intersectionObserverOptions?this.shouldStartLoading?e:void 0:e,"data-image-src":e,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||``,{objectFit:this.objectFit},f?{height:`0`,width:`0`,visibility:`hidden`,position:`absolute`}:``]}))}}),i(`span`,{ref:`selfRef`,class:[`${r}-avatar`,this.themeClass],style:this.cssVars},d,a&&f)}});function Be(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:d(r,s),siderToggleBarColorHover:d(r,c),__invertScrollbar:`true`}}var Ve=te({name:`Layout`,common:E,peers:{Scrollbar:ae},self:Be}),He=L(`n-layout-sider`),Ue={type:String,default:`static`},We=V(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ge={embedded:Boolean,position:Ue,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},Ke=L(`n-layout`);function qe(t){return W({name:t?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},n.props),Ge),setup(t){let r=e(null),i=e(null),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=M(t),s=n(`Layout`,`-layout`,We,Ve,t,a);function c(e,n){if(t.nativeScrollbar){let{value:t}=r;t&&(n===void 0?t.scrollTo(e):t.scrollTo(e,n))}else{let{value:t}=i;t&&t.scrollTo(e,n)}}l(Ke,t);let u=0,d=0,f=e=>{var n;let r=e.target;u=r.scrollLeft,d=r.scrollTop,(n=t.onScroll)==null||n.call(t,e)};ne(()=>{if(t.nativeScrollbar){let e=r.value;e&&(e.scrollTop=d,e.scrollLeft=u)}});let p={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},m={scrollTo:c},h=B(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=s.value;return{"--n-bezier":e,"--n-color":t.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),g=o?A(`layout`,B(()=>t.embedded?`e`:``),h,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:p,mergedTheme:s,handleNativeElScroll:f,cssVars:o?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender},m)},render(){var e;let{mergedClsPrefix:n,hasSider:r}=this;(e=this.onRender)==null||e.call(this);let a=r?this.hasSiderStyle:void 0;return i(`div`,{class:[this.themeClass,t&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?i(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):i(N,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var Je=qe(!1),Ye=qe(!0),Xe=V(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[x(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),x(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ze={position:Ue,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qe=W({name:`LayoutHeader`,props:Object.assign(Object.assign({},n.props),Ze),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r}=M(e),i=n(`Layout`,`-layout-header`,Xe,Ve,e,t),a=B(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=i.value,r={"--n-bezier":t};return e.inverted?(r[`--n-color`]=n.headerColorInverted,r[`--n-text-color`]=n.textColorInverted,r[`--n-border-color`]=n.headerBorderColorInverted):(r[`--n-color`]=n.headerColor,r[`--n-text-color`]=n.textColor,r[`--n-border-color`]=n.headerBorderColor),r}),o=r?A(`layout-header`,B(()=>e.inverted?`a`:`b`),a,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),i(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),$e=V(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[x(`bordered`,[S(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),S(`left-placement`,[x(`bordered`,[S(`border`,`
 right: 0;
 `)])]),x(`right-placement`,`
 justify-content: flex-start;
 `,[x(`bordered`,[S(`border`,`
 left: 0;
 `)]),x(`collapsed`,[V(`layout-toggle-button`,[V(`base-icon`,`
 transform: rotate(180deg);
 `)]),V(`layout-toggle-bar`,[u(`&:hover`,[S(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),S(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),V(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[V(`base-icon`,`
 transform: rotate(0);
 `)]),V(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[u(`&:hover`,[S(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),S(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),x(`collapsed`,[V(`layout-toggle-bar`,[u(`&:hover`,[S(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),S(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),V(`layout-toggle-button`,[V(`base-icon`,`
 transform: rotate(0);
 `)])]),V(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[V(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),V(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[S(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),S(`bottom`,`
 position: absolute;
 top: 34px;
 `),u(`&:hover`,[S(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),S(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),S(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),u(`&:hover`,[S(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),S(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),V(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),x(`show-content`,[V(`layout-sider-scroll-container`,{opacity:1})]),x(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),et=W({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return i(`div`,{onClick:this.onClick,class:`${e}-layout-toggle-bar`},i(`div`,{class:`${e}-layout-toggle-bar__top`}),i(`div`,{class:`${e}-layout-toggle-bar__bottom`}))}}),tt=W({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-layout-toggle-button`,onClick:this.onClick},i(m,{clsPrefix:e},{default:()=>i(ge,null)}))}}),nt={position:Ue,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},rt=W({name:`LayoutSider`,props:Object.assign(Object.assign({},n.props),nt),setup(t){let r=_(Ke),i=e(null),a=e(null),o=e(t.defaultCollapsed),s=Y(H(t,`collapsed`),o),c=B(()=>X(s.value?t.collapsedWidth:t.width)),u=B(()=>t.collapseMode===`transform`?{minWidth:X(t.width)}:{}),d=B(()=>r?r.siderPlacement:`left`);function f(e,n){if(t.nativeScrollbar){let{value:t}=i;t&&(n===void 0?t.scrollTo(e):t.scrollTo(e,n))}else{let{value:t}=a;t&&t.scrollTo(e,n)}}function p(){let{"onUpdate:collapsed":e,onUpdateCollapsed:n,onExpand:r,onCollapse:i}=t,{value:a}=s;n&&g(n,!a),e&&g(e,!a),o.value=!a,a?r&&g(r):i&&g(i)}let m=0,h=0,v=e=>{var n;let r=e.target;m=r.scrollLeft,h=r.scrollTop,(n=t.onScroll)==null||n.call(t,e)};ne(()=>{if(t.nativeScrollbar){let e=i.value;e&&(e.scrollTop=h,e.scrollLeft=m)}}),l(He,{collapsedRef:s,collapseModeRef:H(t,`collapseMode`)});let{mergedClsPrefixRef:y,inlineThemeDisabled:b}=M(t),x=n(`Layout`,`-layout-sider`,$e,Ve,t,y);function S(e){var n,r;e.propertyName===`max-width`&&(s.value?(n=t.onAfterLeave)==null||n.call(t):(r=t.onAfterEnter)==null||r.call(t))}let C={scrollTo:f},w=B(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=x.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":e,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return t.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),T=b?A(`layout-sider`,B(()=>t.inverted?`a`:`b`),w,t):void 0;return Object.assign({scrollableElRef:i,scrollbarInstRef:a,mergedClsPrefix:y,mergedTheme:x,styleMaxWidth:c,mergedCollapsed:s,scrollContainerStyle:u,siderPlacement:d,handleNativeElScroll:v,handleTransitionend:S,handleTriggerClick:p,inlineThemeDisabled:b,cssVars:w,themeClass:T?.themeClass,onRender:T?.onRender},C)},render(){var e;let{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)==null||e.call(this),i(`aside`,{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:X(this.width)}]},this.nativeScrollbar?i(`div`,{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:`auto`},this.contentStyle],ref:`scrollableElRef`},this.$slots):i(N,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),this.$slots),r?i(r===`bar`?et:tt,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?i(`div`,{class:`${t}-layout-sider__border`}):null)}}),Q=L(`n-menu`),it=L(`n-submenu`),at=L(`n-menu-item-group`),ot=[u(`&::before`,`background-color: var(--n-item-color-hover);`),S(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),S(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[u(`a`,`
 color: var(--n-item-text-color-hover);
 `),S(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],st=[S(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[u(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),S(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],ct=u([V(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[x(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[V(`submenu`,`margin: 0;`),V(`menu-item`,`margin: 0;`),V(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[u(`&::before`,`display: none;`),x(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),V(`menu-item-content`,[x(`selected`,[S(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[u(`a`,`color: var(--n-item-text-color-active-horizontal);`),S(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),x(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[u(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),S(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),S(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),C(`disabled`,[C(`selected, child-active`,[u(`&:focus-within`,st)]),x(`selected`,[$(null,[S(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[u(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),S(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),x(`child-active`,[$(null,[S(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[u(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),S(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),$(`border-bottom: 2px solid var(--n-border-color-horizontal);`,st)]),V(`menu-item-content-header`,[u(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),C(`responsive`,[V(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x(`collapsed`,[V(`menu-item-content`,[x(`selected`,[u(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),V(`menu-item-content-header`,`opacity: 0;`),S(`arrow`,`opacity: 0;`),S(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),V(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),V(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[u(`> *`,`z-index: 1;`),u(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),x(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),x(`collapsed`,[S(`arrow`,`transform: rotate(0);`)]),x(`selected`,[u(`&::before`,`background-color: var(--n-item-color-active);`),S(`arrow`,`color: var(--n-arrow-color-active);`),S(`icon`,`color: var(--n-item-icon-color-active);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[u(`a`,`color: var(--n-item-text-color-active);`),S(`extra`,`color: var(--n-item-text-color-active);`)])]),x(`child-active`,[V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[u(`a`,`
 color: var(--n-item-text-color-child-active);
 `),S(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),S(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),S(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),C(`disabled`,[C(`selected, child-active`,[u(`&:focus-within`,ot)]),x(`selected`,[$(null,[S(`arrow`,`color: var(--n-arrow-color-active-hover);`),S(`icon`,`color: var(--n-item-icon-color-active-hover);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[u(`a`,`color: var(--n-item-text-color-active-hover);`),S(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),x(`child-active`,[$(null,[S(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),S(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[u(`a`,`color: var(--n-item-text-color-child-active-hover);`),S(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),x(`selected`,[$(null,[u(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),$(null,ot)]),S(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),S(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),V(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[u(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[u(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),V(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[V(`menu-item-content`,`
 height: var(--n-item-height);
 `),V(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[Se({duration:`.2s`})])]),V(`menu-item-group`,[V(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),V(`menu-tooltip`,[u(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),V(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function $(e,t){return[x(`hover`,e,t),u(`&:hover`,e,t)]}var lt=W({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=_(Q);return{menuProps:t,style:B(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:B(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:a,expandIcon:o}}=this,s=n?n(t.rawNode):Z(this.icon);return i(`div`,{onClick:e=>{var t;(t=this.onClick)==null||t.call(this,e)},role:`none`,class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&i(`div`,{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:`none`},[s]),i(`div`,{class:`${e}-menu-item-content-header`,role:`none`},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):Z(this.title),this.extra||a?i(`span`,{class:`${e}-menu-item-content-header__extra`},` `,a?a(t.rawNode):Z(this.extra)):null),this.showArrow?i(m,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>o?o(t.rawNode):i(Ae,null)}):null)}}),ut=8;function dt(e){let t=_(Q),{props:n,mergedCollapsedRef:r}=t,i=_(it,null),a=_(at,null),o=B(()=>n.mode===`horizontal`),s=B(()=>o.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),c=B(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:s,activeIconSize:B(()=>!o.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:c,paddingLeft:B(()=>{if(o.value)return;let{collapsedWidth:t,indent:s,rootIndent:l}=n,{root:u,isGroup:d}=e,f=l===void 0?s:l;return u?r.value?t/2-c.value/2:f:a&&typeof a.paddingLeftRef.value==`number`?s/2+a.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value==`number`?(d?s/2:s)+i.paddingLeftRef.value:0}),iconMarginRight:B(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:s}=c,{root:l}=e;return o.value||!l||!r.value?ut:(a===void 0?i:a)+s+ut-(t+s)/2}),NMenu:t,NSubmenu:i,NMenuOptionGroup:a}}var ft={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},pt=W({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=_(Q);return()=>t.value?null:i(`div`,{class:`${e.value}-menu-divider`})}}),mt=Object.assign(Object.assign({},ft),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ht=G(mt),gt=W({name:`MenuOption`,props:mt,setup(e){let t=dt(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=B(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:p(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:p(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:a}}=this,o=a?.(n.rawNode);return i(`div`,Object.assign({},o,{role:`menuitem`,class:[`${e}-menu-item`,o?.class]}),i(he,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>r?r(n.rawNode):Z(this.title),trigger:()=>i(lt,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),_t=Object.assign(Object.assign({},ft),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vt=G(_t),yt=W({name:`MenuOptionGroup`,props:_t,setup(e){let t=dt(e),{NSubmenu:n}=t,r=B(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);l(at,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});let{mergedClsPrefixRef:a,props:o}=_(Q);return function(){let{value:n}=a,r=t.paddingLeft.value,{nodeProps:s}=o,c=s?.(e.tmNode.rawNode);return i(`div`,{class:`${n}-menu-item-group`,role:`group`},i(`div`,Object.assign({},c,{class:[`${n}-menu-item-group-title`,c?.class],style:[c?.style||``,r===void 0?``:`padding-left: ${r}px;`]}),Z(e.title),e.extra?i(R,null,` `,Z(e.extra)):null),i(`div`,null,e.tmNodes.map(e=>St(e,o))))}}});function bt(e){return e.type===`divider`||e.type===`render`}function xt(e){return e.type===`divider`}function St(e,t){let{rawNode:n}=e,{show:r}=n;if(r===!1)return null;if(bt(n))return xt(n)?i(pt,Object.assign({key:e.key},n.props)):null;let{labelField:a}=t,{key:o,level:s,isGroup:c}=e,l=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:o,internalKey:o,level:s,root:s===0,isGroup:c});return e.children?e.isGroup?i(yt,J(l,vt,{tmNode:e,tmNodes:e.children,key:o})):i(Tt,J(l,wt,{key:o,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):i(gt,J(l,ht,{key:o,tmNode:e}))}var Ct=Object.assign(Object.assign({},ft),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),wt=G(Ct),Tt=W({name:`Submenu`,props:Ct,setup(t){let n=dt(t),{NMenu:r,NSubmenu:i}=n,{props:a,mergedCollapsedRef:o,mergedThemeRef:s}=r,c=B(()=>{let{disabled:e}=t;return i?.mergedDisabledRef.value||a.disabled?!0:e}),u=e(!1);l(it,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:c}),l(at,null);function d(){let{onClick:e}=t;e&&e()}function f(){c.value||(o.value||r.toggleExpand(t.internalKey),d())}function m(e){u.value=e}return{menuProps:a,mergedTheme:s,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:u,paddingLeft:n.paddingLeft,mergedDisabled:c,mergedValue:r.mergedValueRef,childActive:p(()=>t.virtualChildActive??r.activePathRef.value.includes(t.internalKey)),collapsed:B(()=>a.mode===`horizontal`?!1:o.value?!0:!r.mergedExpandedKeysRef.value.includes(t.internalKey)),dropdownEnabled:B(()=>!c.value&&(a.mode===`horizontal`||o.value)),handlePopoverShowChange:m,handleClick:f}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:a,activeIconSize:o,title:s,childActive:c,icon:l,handleClick:u,menuProps:{nodeProps:d},dropdownShow:f,iconMarginRight:p,tmNode:m,mergedClsPrefix:h,isEllipsisPlaceholder:g,extra:_}=this,v=d?.(m.rawNode);return i(`div`,Object.assign({},v,{class:[`${h}-menu-item`,v?.class],role:`menuitem`}),i(lt,{tmNode:m,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:p,maxIconSize:a,activeIconSize:o,title:s,extra:_,showArrow:!e,childActive:c,clsPrefix:h,icon:l,hover:f,onClick:u,isEllipsisPlaceholder:g}))},a=()=>i(ce,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:i(`div`,{class:`${e}-submenu-children`,role:`menu`},t.map(e=>St(e,this.menuProps)))}});return this.root?i(_e,Object.assign({size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>i(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:a())}):i(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),a())}}),Et=W({name:`Menu`,inheritAttrs:!1,props:Object.assign(Object.assign({},n.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=M(t),o=n(`Menu`,`-menu`,ct,Ce,t,r),s=_(He,null),u=B(()=>{let{collapsed:e}=t;if(e!==void 0)return e;if(s){let{collapseModeRef:e,collapsedRef:t}=s;if(e.value===`width`)return t.value??!1}return!1}),d=B(()=>{let{keyField:e,childrenField:n,disabledField:r}=t;return q(t.items||t.options,{getIgnored(e){return bt(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(t){return t[e]??t.name}})}),f=B(()=>new Set(d.value.treeNodes.map(e=>e.key))),{watchProps:p}=t,m=e(null);p?.includes(`defaultValue`)?c(()=>{m.value=t.defaultValue}):m.value=t.defaultValue;let h=Y(H(t,`value`),m),v=e([]),y=()=>{v.value=t.defaultExpandAll?d.value.getNonLeafKeys():t.defaultExpandedNames||t.defaultExpandedKeys||d.value.getPath(h.value,{includeSelf:!1}).keyPath};p?.includes(`defaultExpandedKeys`)?c(y):y();let b=fe(t,[`expandedNames`,`expandedKeys`]),x=Y(b,v),S=B(()=>d.value.treeNodes),C=B(()=>d.value.getPath(h.value).keyPath);l(Q,{props:t,mergedCollapsedRef:u,mergedThemeRef:o,mergedValueRef:h,mergedExpandedKeysRef:x,activePathRef:C,mergedClsPrefixRef:r,isHorizontalRef:B(()=>t.mode===`horizontal`),invertedRef:H(t,`inverted`),doSelect:w,toggleExpand:E});function w(e,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=t;i&&g(i,e,n),r&&g(r,e,n),a&&g(a,e,n),m.value=e}function T(e){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=t;n&&g(n,e),r&&g(r,e),i&&g(i,e),a&&g(a,e),v.value=e}function E(e){let n=Array.from(x.value),r=n.findIndex(t=>t===e);if(~r)n.splice(r,1);else{if(t.accordion&&f.value.has(e)){let e=n.findIndex(e=>f.value.has(e));e>-1&&n.splice(e,1)}n.push(e)}T(n)}let D=e=>{let n=d.value.getPath(e??h.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(x.value),i=new Set([...r,...n]);t.accordion&&f.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),T(Array.from(i))},O=B(()=>{let{inverted:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{borderRadius:i,borderColorHorizontal:a,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":a,"--n-border-radius":i,"--n-item-height":c};return e?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),k=a?A(`menu`,B(()=>t.inverted?`a`:`b`),O,t):void 0,j=de(),N=e(null),P=e(null),F=!0,I=()=>{var e;F?F=!1:(e=N.value)==null||e.sync({showAllItemsBeforeCalculate:!0})};function ee(){return document.getElementById(j)}let L=e(-1);function te(e){L.value=t.options.length-e}function ne(e){e||(L.value=-1)}let R=B(()=>{let e=L.value;return{children:e===-1?[]:t.options.slice(e)}}),z=B(()=>{let{childrenField:e,disabledField:n,keyField:r}=t;return q([R.value],{getIgnored(e){return bt(e)},getChildren(t){return t[e]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),re=B(()=>q([{}]).treeNodes[0]);function V(){if(L.value===-1)return i(Tt,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:re.value,domId:j,isEllipsisPlaceholder:!0});let e=z.value.treeNodes[0],t=C.value;return i(Tt,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:!!e.children?.some(e=>t.includes(e.key)),tmNode:e,domId:j,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:b,uncontrolledExpanededKeys:v,mergedExpandedKeys:x,uncontrolledValue:m,mergedValue:h,activePath:C,tmNodes:S,mergedTheme:o,mergedCollapsed:u,cssVars:a?void 0:O,themeClass:k?.themeClass,overflowRef:N,counterRef:P,updateCounter:()=>{},onResize:I,onUpdateOverflow:ne,onUpdateCount:te,renderCounter:V,getCounter:ee,onRender:k?.onRender,showOption:D,deriveResponsiveState:I}},render(){let{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;r?.();let s=()=>this.tmNodes.map(e=>St(e,this.$props)),c=t===`horizontal`&&this.responsive,l=()=>i(`div`,a(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,n,`${e}-menu--${t}`,c&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),c?i(ue,{ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:this.renderCounter}):s());return c?i(o,{onResize:this.onResize},{default:l}):l()}}),Dt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ot=W({name:`ArchiveOutline`,render:function(e,t){return s(),w(`svg`,Dt,t[0]||=[z(`path`,{d:`M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`rect`,{x:`48`,y:`64`,width:`416`,height:`80`,rx:`28`,ry:`28`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M320 304l-64 64l-64-64`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 345.89V224`},null,-1)])}}),kt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},At=W({name:`CodeSlashOutline`,render:function(e,t){return s(),w(`svg`,kt,t[0]||=[z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M160 368L32 256l128-112`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M352 368l128-112l-128-112`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M304 96l-96 320`},null,-1)])}}),jt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Mt=W({name:`CubeOutline`,render:function(e,t){return s(),w(`svg`,jt,t[0]||=[z(`path`,{d:`M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M69 153.99l187 110l187-110`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 463.99v-200`},null,-1)])}}),Nt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Pt=W({name:`DocumentTextOutline`,render:function(e,t){return s(),w(`svg`,Nt,t[0]||=[z(`path`,{d:`M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{d:`M256 56v120a32 32 0 0 0 32 32h120`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 288h160`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 368h160`},null,-1)])}}),Ft={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},It=W({name:`GitNetworkOutline`,render:function(e,t){return s(),w(`svg`,Ft,t[0]||=[oe(`<circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="256" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"></path><circle cx="384" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M128 144c0 74.67 68.92 112 128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M384 144c0 74.67-68.92 112-128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>`,6)])}}),Lt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Rt=W({name:`GridOutline`,render:function(e,t){return s(),w(`svg`,Lt,t[0]||=[z(`rect`,{x:`48`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`rect`,{x:`288`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`rect`,{x:`48`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`rect`,{x:`288`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),zt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Bt=W({name:`LogOutOutline`,render:function(e,t){return s(),w(`svg`,zt,t[0]||=[z(`path`,{d:`M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 336l80-80l-80-80`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 256h256`},null,-1)])}}),Vt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ht=W({name:`ReaderOutline`,render:function(e,t){return s(),w(`svg`,Vt,t[0]||=[z(`rect`,{x:`96`,y:`48`,width:`320`,height:`416`,rx:`48`,ry:`48`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 128h160`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 208h160`},null,-1),z(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 288h80`},null,-1)])}}),Ut={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Wt=W({name:`SettingsOutline`,render:function(e,t){return s(),w(`svg`,Ut,t[0]||=[z(`path`,{d:`M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Gt={key:0,class:`brand-copy`},Kt={class:`account`},qt={class:`account-copy`},Jt={class:`update-banner-body`},Yt=W({__name:`AppLayout`,setup(t){let n=Ee(),r=we(),a=De(),o=pe(),c=xe(),l=e(window.innerWidth<900);function u(e,t,n){return{label:()=>i(Te,{to:{name:t}},{default:()=>e}),key:t,icon:()=>i(be,null,{default:()=>i(n)})}}let d=[u(`运行概览`,`dashboard`,Rt),u(`代理编排`,`orchestration`,It),u(`配置管理`,`config`,Pt),u(`配置能力`,`schema`,At),u(`dae 版本`,`versions`,Mt),u(`运行日志`,`logs`,Ht),u(`配置备份`,`backups`,Ot),u(`安全设置`,`settings`,Wt)],p=B(()=>String(n.name||`dashboard`)),m=B(()=>String(n.meta.title||`kdae-panel`));async function h(){try{await a.logout(),await r.replace({name:`login`})}catch(e){o.error(e instanceof Error?e.message:`退出登录失败`)}}function g(){a.clearSession(),r.replace({name:`login`}),o.warning(`登录会话已过期，请重新登录`)}function _(){window.innerWidth<900&&(l.value=!0)}let v=e(null),b=e(!1),x=e(!1),S=B(()=>v.value?.status?.updatable===!0);async function C(){try{v.value=await ie(`/api/v1/panel/update`)}catch{v.value=null}}function E(){let e=v.value?.check.latest;c.warning({title:`升级面板到 ${e}`,content:`面板会下载发布包、比对 sha256，用新版本自证能在本机运行，然后替换 ${v.value?.status?.binaryPath} 并重启自身。重启期间面板会短暂无法访问（通常几秒），dae 与代理流量不受影响。上一版会保留一份副本，万一新版本起不来可以手工换回。`,positiveText:`下载并升级`,negativeText:`取消`,onPositiveClick:()=>O(e)})}async function O(e){x.value=!0;try{await I(`/api/v1/panel/update`,e?{version:e}:{}),o.info(`已开始升级，面板重启后页面会自动刷新`),A(e)}catch(e){x.value=!1,o.error(e instanceof Error?e.message:`启动升级失败`)}}async function A(e){let t=Date.now()+12e4;for(;Date.now()<t;){await new Promise(e=>window.setTimeout(e,2e3));try{let t=await ie(`/api/v1/health`);if(!e||t.version===e){window.location.reload();return}}catch{}}x.value=!1,o.warning(`等待面板重启超时，请手动刷新页面确认升级结果`)}return f(()=>{window.addEventListener(`kdae-panel:auth-expired`,g),window.addEventListener(`resize`,_),C()}),ee(()=>{window.removeEventListener(`kdae-panel:auth-expired`,g),window.removeEventListener(`resize`,_)}),(e,t)=>{let n=le(`RouterView`);return s(),F(T(Je),{"has-sider":``,class:`app-shell`},{default:y(()=>[D(T(rt),{bordered:``,"collapse-mode":`width`,"collapsed-width":64,width:236,collapsed:l.value,"show-trigger":`bar`,onCollapse:t[0]||=e=>l.value=!0,onExpand:t[1]||=e=>l.value=!1},{default:y(()=>[z(`div`,{class:re([`brand`,{compact:l.value}])},[t[4]||=z(`div`,{class:`brand-mark`},`K`,-1),l.value?P(``,!0):(s(),w(`div`,Gt,[...t[3]||=[z(`strong`,null,`kdae-panel`,-1),z(`span`,null,`零侵入管理面板`,-1)]]))],2),D(T(Et),{value:p.value,collapsed:l.value,"collapsed-width":64,"collapsed-icon-size":22,options:d},null,8,[`value`,`collapsed`])]),_:1},8,[`collapsed`]),D(T(Je),null,{default:y(()=>[D(T(Qe),{bordered:``,class:`app-header`},{default:y(()=>[z(`div`,null,[D(T(me),{depth:`3`,class:`eyebrow`},{default:y(()=>[...t[5]||=[K(`KDAE CONTROL PLANE`,-1)]]),_:1}),z(`h1`,null,U(m.value),1)]),z(`div`,Kt,[D(T(ze),{round:``,size:`small`},{default:y(()=>[K(U(T(a).user?.username?.slice(0,1).toUpperCase()),1)]),_:1}),z(`div`,qt,[z(`strong`,null,U(T(a).user?.username),1),t[6]||=z(`span`,null,`管理员`,-1)]),D(T(k),{quaternary:``,circle:``,title:`退出登录`,onClick:h},{icon:y(()=>[D(T(be),null,{default:y(()=>[D(T(Bt))]),_:1})]),_:1})])]),_:1}),D(T(Ye),{class:`app-content`,"content-style":`padding: 28px;`},{default:y(()=>[v.value?.check.updateAvailable&&!b.value?(s(),F(T(ye),{key:0,type:`info`,closable:!x.value,class:`update-banner`,onClose:t[2]||=e=>b.value=!0},{default:y(()=>[z(`div`,Jt,[z(`span`,null,[t[7]||=K(` 面板有新版本 `,-1),z(`strong`,null,U(v.value.check.latest),1),K(`（当前 `+U(v.value.check.current)+`）。 `,1),S.value?(s(),w(R,{key:0},[K(`升级会替换面板二进制并重启自身，配置与账号数据都会保留。`)],64)):(s(),w(R,{key:1},[K(`在服务器上重新执行一键部署命令即可升级，配置与账号数据都会保留。`)],64)),t[8]||=z(`a`,{href:`https://github.com/tuoro/kdae-panel/releases/latest`,target:`_blank`,rel:`noopener`},`查看发布说明`,-1)]),S.value?(s(),F(T(k),{key:0,size:`small`,type:`primary`,loading:x.value,disabled:x.value,onClick:E},{icon:y(()=>[D(T(be),null,{default:y(()=>[D(T(ke))]),_:1})]),default:y(()=>[K(` `+U(x.value?`升级中…`:`立即升级`),1)]),_:1},8,[`loading`,`disabled`])):P(``,!0)])]),_:1},8,[`closable`])):P(``,!0),D(n)]),_:1})]),_:1})]),_:1})}}});export{Yt as default};