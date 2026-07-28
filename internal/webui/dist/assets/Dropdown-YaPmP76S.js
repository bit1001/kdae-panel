import{$n as e,A as t,An as n,Cn as r,Dn as i,Ft as a,In as o,Kt as s,Nt as c,Pt as l,Qn as u,Qt as d,St as f,Tn as p,Vn as m,Xt as h,Yt as g,Zn as _,Zt as v,_ as y,dt as b,ft as x,jn as S,jt as C,ln as w,pn as T,qt as E,rn as D,rr as O,wt as k,xn as A}from"./client-afectMo_.js";import{i as j,t as M}from"./create-CCsFn2Ba.js";import{f as N,g as P,p as F,r as I}from"./light-6OxpLMiD.js";import{t as L}from"./utils-clEkF5-m.js";import{c as R,i as z,n as B,r as V,s as ee,t as H}from"./Popover-DedF1XDw.js";import{a as te}from"./text-Cz55FHMX.js";import{t as ne}from"./Icon-cgotgpJ7.js";import{P as U,T as re,_ as ie,g as ae}from"./index-BdYRkzJ9.js";function oe(e={},t){let r=_({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:o}=e,s=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}o!==void 0&&Object.keys(o).forEach(t=>{if(t!==e.key)return;let n=o[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},d=()=>{(t===void 0||t.value)&&(a(`keydown`,document,s),a(`keyup`,document,c)),t!==void 0&&m(t,e=>{e?(a(`keydown`,document,s),a(`keyup`,document,c)):(l(`keydown`,document,s),l(`keyup`,document,c))})};return L()?(n(d),S(()=>{(t===void 0||t.value)&&(l(`keydown`,document,s),l(`keyup`,document,c))})):d(),u(r)}function se(t,n,r){if(!n)return t;let i=e(t.value),a=null;return m(t,e=>{a!==null&&window.clearTimeout(a),e===!0?r&&!r.value?i.value=!0:a=window.setTimeout(()=>{i.value=!0},n):i.value=!1}),i}function W(e){return t=>{t?e.value=t.$el:e.value=null}}var G=A({name:`ChevronRight`,render(){return r(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},r(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),ce=A({name:`Tooltip`,props:Object.assign(Object.assign({},B),t.props),slots:Object,__popover__:!0,setup(n){let{mergedClsPrefixRef:r}=x(n),i=t(`Tooltip`,`-tooltip`,void 0,ae,n,r),a=e(null);return Object.assign(Object.assign({},{syncPosition(){a.value.syncPosition()},setShow(e){a.value.setShow(e)}}),{popoverRef:a,mergedTheme:i,popoverThemeOverrides:T(()=>i.value.self)})},render(){let{mergedTheme:e,internalExtraClass:t}=this;return r(H,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),K=C(`n-dropdown-menu`),q=C(`n-dropdown`),J=C(`n-dropdown-option`),Y=A({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return r(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),le=A({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=p(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=p(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=r(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),r(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},r(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},U(s.icon)),r(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):U(s.title??s[this.labelField])),r(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ue(e){return e.type===`group`}function Z(e){return e.type===`divider`}function de(e){return e.type===`render`}var Q=A({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(t){let n=p(q),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:s,activeKeyPathRef:l,animatedRef:u,mergedShowRef:d,renderLabelRef:f,renderIconRef:m,labelFieldRef:h,childrenFieldRef:g,renderOptionRef:_,nodePropsRef:v,menuPropsRef:y}=n,b=p(J,null),x=p(K),S=p(N),C=T(()=>t.tmNode.rawNode),w=T(()=>{let{value:e}=g;return X(t.tmNode.rawNode,e)}),E=T(()=>{let{disabled:e}=t.tmNode;return e}),D=se(T(()=>{if(!w.value)return!1;let{key:e,disabled:n}=t.tmNode;if(n)return!1;let{value:o}=r,{value:c}=i,{value:l}=a,{value:u}=s;return o===null?c===null?l!==null&&u.includes(e):u.includes(e)&&u[u.length-1]!==e:u.includes(e)}),300,T(()=>i.value===null&&!u.value)),O=T(()=>!!b?.enteringSubmenuRef.value),k=e(!1);o(J,{enteringSubmenuRef:k});function A(){k.value=!0}function M(){k.value=!1}function P(){let{parentKey:e,tmNode:n}=t;n.disabled||d.value&&(a.value=e,i.value=null,r.value=n.key)}function F(){let{tmNode:e}=t;e.disabled||d.value&&r.value!==e.key&&P()}function I(e){if(t.tmNode.disabled||!d.value)return;let{relatedTarget:n}=e;n&&!j({target:n},`dropdownOption`)&&!j({target:n},`scrollbarRail`)&&(r.value=null)}function L(){let{value:e}=w,{tmNode:r}=t;d.value&&!e&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:f,renderIcon:m,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:y,popoverBody:S,animated:u,mergedShowSubmenu:T(()=>D.value&&!O.value),rawNode:C,hasSubmenu:w,pending:c(()=>{let{value:e}=s,{key:n}=t.tmNode;return e.includes(n)}),childActive:c(()=>{let{value:e}=l,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r!==-1&&r<e.length-1}),active:c(()=>{let{value:e}=l,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r!==-1&&r===e.length-1}),mergedDisabled:E,renderOption:_,nodeProps:v,handleClick:L,handleMouseMove:F,handleMouseEnter:P,handleMouseLeave:I,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:p}=this,m=null;if(n){let e=this.menuProps?.call(this,t,t.children);m=r($,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(t),_=r(`div`,Object.assign({class:[`${a}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),r(`div`,i(h,f),[r(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[l?l(t):U(t.icon)]),r(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(t):U(t[this.labelField]??t.title)),r(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?r(ne,null,{default:()=>r(G,null)}):null)]),this.hasSubmenu?r(R,null,{default:()=>[r(ee,null,{default:()=>r(`div`,{class:`${a}-dropdown-offset-container`},r(z,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>r(`div`,{class:`${a}-dropdown-menu-wrapper`},e?r(D,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:_,option:t}):_}}),fe=A({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:i}=e;return r(w,null,r(le,{clsPrefix:n,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Z(i)?r(Y,{clsPrefix:n,key:e.key}):e.isGroup?(k(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):r(Q,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),pe=A({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return r(`div`,t,[e?.()])}}),$=A({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(t){let{renderIconRef:n,childrenFieldRef:r}=p(q);o(K,{showIconRef:T(()=>{let e=n.value;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>e?e(t):t.icon);let{rawNode:n}=t;return e?e(n):n.icon})}),hasSubmenuRef:T(()=>{let{value:e}=r;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>X(t,e));let{rawNode:n}=t;return X(n,e)})})});let i=e(null);return o(F,null),o(P,null),o(N,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:de(a)?r(pe,{tmNode:i,key:i.key}):Z(a)?r(Y,{clsPrefix:t,key:i.key}):ue(a)?r(fe,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key}):r(Q,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:n})});return r(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?r(y,{contentClass:`${t}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?V({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),me=E(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[re(),E(`dropdown-option`,`
 position: relative;
 `,[s(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[s(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),E(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[s(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),v(`disabled`,[h(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),s(`&::before`,`background-color: var(--n-option-color-hover);`)]),h(`active`,`
 color: var(--n-option-text-color-active);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),s(`&::before`,`background-color: var(--n-option-color-active);`)]),h(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[g(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),h(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),h(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[g(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[h(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),g(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[h(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),E(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),g(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),g(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[h(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),E(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),E(`dropdown-menu`,`pointer-events: all;`)]),E(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),E(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),E(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),s(`>`,[E(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),v(`scrollable`,`
 padding: var(--n-padding);
 `),h(`scrollable`,[g(`content`,`
 padding: var(--n-padding);
 `)])]),he={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},ge=Object.keys(B),_e=A({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},B),he),t.props),setup(n){let r=e(!1),i=te(O(n,`show`),r),a=T(()=>{let{keyField:e,childrenField:t}=n;return M(n.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[t]}})}),s=T(()=>a.value.treeNodes),l=e(null),u=e(null),p=e(null),h=T(()=>l.value??u.value??p.value??null),g=T(()=>a.value.getPath(h.value).keyPath),_=T(()=>a.value.getPath(n.value).keyPath),v=c(()=>n.keyboard&&i.value);oe({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:L},Escape:j}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:S,mergedComponentPropsRef:C}=x(n),w=T(()=>n.size||C?.value?.Dropdown?.size||`medium`),E=t(`Dropdown`,`-dropdown`,me,ie,n,y);o(q,{labelFieldRef:O(n,`labelField`),childrenFieldRef:O(n,`childrenField`),renderLabelRef:O(n,`renderLabel`),renderIconRef:O(n,`renderIcon`),hoverKeyRef:l,keyboardKeyRef:u,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:g,activeKeyPathRef:_,animatedRef:O(n,`animated`),mergedShowRef:i,nodePropsRef:O(n,`nodeProps`),renderOptionRef:O(n,`renderOption`),menuPropsRef:O(n,`menuProps`),doSelect:D,doUpdateShow:k}),m(i,e=>{!n.animated&&!e&&A()});function D(e,t){let{onSelect:r}=n;r&&f(r,e,t)}function k(e){let{"onUpdate:show":t,onUpdateShow:i}=n;t&&f(t,e),i&&f(i,e),r.value=e}function A(){l.value=null,u.value=null,p.value=null}function j(){k(!1)}function N(){z(`left`)}function P(){z(`right`)}function F(){z(`up`)}function I(){z(`down`)}function L(){let e=R();e?.isLeaf&&i.value&&(D(e.key,e.rawNode),k(!1))}function R(){let{value:e}=a,{value:t}=h;return!e||t===null?null:e.getNode(t)??null}function z(e){let{value:t}=h,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=R();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(l.value=null,u.value=r)}let B=T(()=>{let{inverted:e}=n,t=w.value,{common:{cubicBezierEaseInOut:r},self:i}=E.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[d(`optionIconSuffixWidth`,t)]:l,[d(`optionSuffixWidth`,t)]:u,[d(`optionIconPrefixWidth`,t)]:f,[d(`optionPrefixWidth`,t)]:p,[d(`fontSize`,t)]:m,[d(`optionHeight`,t)]:h,[d(`optionIconSize`,t)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":a,"--n-border-radius":s,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":g,"--n-divider-color":o,"--n-option-opacity-disabled":c};return e?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),V=S?b(`dropdown`,T(()=>`${w.value[0]}${n.inverted?`i`:``}`),B,n):void 0;return{mergedClsPrefix:y,mergedTheme:E,mergedSize:w,tmNodes:s,mergedShow:i,handleAfterLeave:()=>{n.animated&&A()},doUpdateShow:k,cssVars:S?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,n,a,o)=>{var s;let{mergedClsPrefix:c,menuProps:l}=this;(s=this.onRender)==null||s.call(this);let u=l?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:W(t),class:[e,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:o};return r($,i(this.$attrs,d,u))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return r(H,Object.assign({},I(this.$props,ge),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{W as i,ce as n,G as r,_e as t};