import{$n as e,A as t,Cn as n,Dn as r,Ht as i,It as a,Kt as o,Lt as s,N as c,O as l,Qt as u,Xt as d,Yt as f,b as p,bt as m,dt as h,ft as g,pn as _,qt as v,vt as y,w as b,xn as x}from"./client-afectMo_.js";import{t as S}from"./Close-DrrgZfq4.js";import{C,D as w,E as T,O as E,S as D,k as O}from"./index-B4F85U1r.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:o,actionColor:c,textColor1:l,textColor2:u,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},C),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${o}`,color:c,titleTextColor:l,iconColor:u,contentTextColor:u,closeBorderRadius:n,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderInfo:`1px solid ${s(i,a(g,{alpha:.25}))}`,colorInfo:s(i,a(g,{alpha:.08})),titleTextColorInfo:l,iconColorInfo:g,contentTextColorInfo:u,closeColorHoverInfo:d,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${s(i,a(_,{alpha:.25}))}`,colorSuccess:s(i,a(_,{alpha:.08})),titleTextColorSuccess:l,iconColorSuccess:_,contentTextColorSuccess:u,closeColorHoverSuccess:d,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${s(i,a(v,{alpha:.33}))}`,colorWarning:s(i,a(v,{alpha:.08})),titleTextColorWarning:l,iconColorWarning:v,contentTextColorWarning:u,closeColorHoverWarning:d,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:h,borderError:`1px solid ${s(i,a(y,{alpha:.25}))}`,colorError:s(i,a(y,{alpha:.08})),titleTextColorError:l,iconColorError:y,contentTextColorError:u,closeColorHoverError:d,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:h})}var A={name:`Alert`,common:p,self:k},j=v(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[f(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),d(`closable`,[v(`alert-body`,[f(`title`,`
 padding-right: 24px;
 `)])]),f(`icon`,{color:`var(--n-icon-color)`}),v(`alert-body`,{padding:`var(--n-padding)`},[f(`title`,{color:`var(--n-title-text-color)`}),f(`content`,{color:`var(--n-content-text-color)`})]),D({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),f(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),f(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),d(`show-icon`,[v(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),d(`right-adjust`,[v(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),v(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[f(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[o(`& +`,[f(`content`,{marginTop:`9px`})])]),f(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),f(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=x({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},t.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:a,inlineThemeDisabled:o,mergedRtlRef:s}=g(n),l=t(`Alert`,`-alert`,j,A,n,r),d=c(`Alert`,s,r),f=_(()=>{let{common:{cubicBezierEaseInOut:e},self:t}=l.value,{fontSize:r,borderRadius:a,titleFontWeight:o,lineHeight:s,iconSize:c,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=t,{type:y}=n,{left:b,right:x}=i(d);return{"--n-bezier":e,"--n-color":t[u(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":t[u(`closeColorHover`,y)],"--n-close-color-pressed":t[u(`closeColorPressed`,y)],"--n-close-icon-color":t[u(`closeIconColor`,y)],"--n-close-icon-color-hover":t[u(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":t[u(`closeIconColorPressed`,y)],"--n-icon-color":t[u(`iconColor`,y)],"--n-border":t[u(`border`,y)],"--n-title-text-color":t[u(`titleTextColor`,y)],"--n-content-text-color":t[u(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":a,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":c,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=o?h(`alert`,_(()=>n.type[0]),f,n):void 0,m=e(!0),v=()=>{let{onAfterLeave:e,onAfterHide:t}=n;e&&e(),t&&t()};return{rtlEnabled:d,mergedClsPrefix:r,mergedBordered:a,visible:m,handleCloseClick:()=>{Promise.resolve(n.onClose?.call(n)).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:l,cssVars:o?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(b,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?n(`div`,Object.assign({},r(this.$attrs,i)),this.closable&&n(S,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&n(`div`,{class:`${e}-alert__border`}),this.showIcon&&n(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},y(t.icon,()=>[n(l,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return n(w,null);case`info`:return n(E,null);case`warning`:return n(T,null);case`error`:return n(O,null);default:return null}}})])),n(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},m(t.header,t=>{let r=t||this.title;return r?n(`div`,{class:`${e}-alert-body__title`},r):null}),t.default&&n(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};