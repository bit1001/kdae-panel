import{$n as e,A as t,Cn as n,Ht as r,In as i,It as a,Kt as o,N as s,Qt as c,St as l,Tt as u,Xt as d,Yt as f,Zt as p,b as m,bt as h,dt as g,ft as _,jt as v,pn as y,qt as b,rr as x,xn as S}from"./client-afectMo_.js";import{t as C}from"./Close-DrrgZfq4.js";import{w}from"./index-B4F85U1r.js";function T(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:o,successColor:s,warningColor:c,errorColor:l,baseColor:u,borderColor:d,opacityDisabled:f,tagColor:p,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,borderRadiusSmall:_,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:T,heightMedium:E,closeColorHover:D,closeColorPressed:O,buttonColor2Hover:k,buttonColor2Pressed:A,fontWeightStrong:j}=e;return Object.assign(Object.assign({},w),{closeBorderRadius:_,heightTiny:S,heightSmall:C,heightMedium:T,heightLarge:E,borderRadius:_,opacityDisabled:f,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:u,colorCheckable:`#0000`,colorHoverCheckable:k,colorPressedCheckable:A,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${d}`,textColor:t,color:p,colorBordered:`rgb(250, 250, 252)`,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,closeColorHover:D,closeColorPressed:O,borderPrimary:`1px solid ${a(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:a(i,{alpha:.12}),colorBorderedPrimary:a(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:a(i,{alpha:.12}),closeColorPressedPrimary:a(i,{alpha:.18}),borderInfo:`1px solid ${a(o,{alpha:.3})}`,textColorInfo:o,colorInfo:a(o,{alpha:.12}),colorBorderedInfo:a(o,{alpha:.1}),closeIconColorInfo:o,closeIconColorHoverInfo:o,closeIconColorPressedInfo:o,closeColorHoverInfo:a(o,{alpha:.12}),closeColorPressedInfo:a(o,{alpha:.18}),borderSuccess:`1px solid ${a(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:a(s,{alpha:.12}),colorBorderedSuccess:a(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:a(s,{alpha:.12}),closeColorPressedSuccess:a(s,{alpha:.18}),borderWarning:`1px solid ${a(c,{alpha:.35})}`,textColorWarning:c,colorWarning:a(c,{alpha:.15}),colorBorderedWarning:a(c,{alpha:.12}),closeIconColorWarning:c,closeIconColorHoverWarning:c,closeIconColorPressedWarning:c,closeColorHoverWarning:a(c,{alpha:.12}),closeColorPressedWarning:a(c,{alpha:.18}),borderError:`1px solid ${a(l,{alpha:.23})}`,textColorError:l,colorError:a(l,{alpha:.1}),colorBorderedError:a(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:a(l,{alpha:.12}),closeColorPressedError:a(l,{alpha:.18})})}var E={name:`Tag`,common:m,self:T},D={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},O=b(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[d(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),f(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),f(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),f(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),f(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),d(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[f(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),f(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),d(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),d(`icon, avatar`,[d(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),d(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),d(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[p(`disabled`,[o(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[p(`checked`,`color: var(--n-text-color-hover-checkable);`)]),o(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[p(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),d(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[p(`disabled`,[o(`&:hover`,`background-color: var(--n-color-checked-hover);`),o(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),k=Object.assign(Object.assign(Object.assign({},t.props),D),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),A=v(`n-tag`),j=S({name:`Tag`,props:k,slots:Object,setup(n){let a=e(null),{mergedBorderedRef:o,mergedClsPrefixRef:d,inlineThemeDisabled:f,mergedRtlRef:p,mergedComponentPropsRef:m}=_(n),h=y(()=>n.size||m?.value?.Tag?.size||`medium`),v=t(`Tag`,`-tag`,O,E,n,d);i(A,{roundRef:x(n,`round`)});function b(){if(!n.disabled&&n.checkable){let{checked:e,onCheckedChange:t,onUpdateChecked:r,"onUpdate:checked":i}=n;r&&r(!e),i&&i(!e),t&&t(!e)}}function S(e){if(n.triggerClickOnClose||e.stopPropagation(),!n.disabled){let{onClose:t}=n;t&&l(t,e)}}let C={setTextContent(e){let{value:t}=a;t&&(t.textContent=e)}},w=s(`Tag`,p,d),T=y(()=>{let{type:e,color:{color:t,textColor:i}={}}=n,a=h.value,{common:{cubicBezierEaseInOut:s},self:{padding:l,closeMargin:u,borderRadius:d,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[c(`colorBordered`,e)]:D,[c(`closeSize`,a)]:O,[c(`closeIconSize`,a)]:k,[c(`fontSize`,a)]:A,[c(`height`,a)]:j,[c(`color`,e)]:M,[c(`textColor`,e)]:N,[c(`border`,e)]:P,[c(`closeIconColor`,e)]:F,[c(`closeIconColorHover`,e)]:I,[c(`closeIconColorPressed`,e)]:L,[c(`closeColorHover`,e)]:R,[c(`closeColorPressed`,e)]:z}}=v.value,B=r(u);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":s,"--n-border-radius":d,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":t||(o.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":f,"--n-padding":l,"--n-text-color":i||N,"--n-text-color-checkable":p,"--n-text-color-checked":_,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":g}}),D=f?g(`tag`,y(()=>{let e=``,{type:t,color:{color:r,textColor:i}={}}=n;return e+=t[0],e+=h.value[0],r&&(e+=`a${u(r)}`),i&&(e+=`b${u(i)}`),o.value&&(e+=`c`),e}),T,n):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:w,mergedClsPrefix:d,contentRef:a,mergedBordered:o,handleClick:b,handleCloseClick:S,cssVars:f?void 0:T,themeClass:D?.themeClass,onRender:D?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:r,closable:i,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let l=h(c.avatar,e=>e&&n(`div`,{class:`${t}-tag__avatar`},e)),u=h(c.icon,e=>e&&n(`div`,{class:`${t}-tag__icon`},e));return n(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:o,[`${t}-tag--avatar`]:l,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||l,n(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&i?n(C,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?n(`div`,{class:`${t}-tag__border`,style:{borderColor:a}}):null)}});export{A as n,j as t};