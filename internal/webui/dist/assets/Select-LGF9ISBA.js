import{$n as e,$t as t,A as n,Bt as r,Cn as i,D as a,Dn as o,Dt as s,Et as c,Ft as l,Hn as u,Ht as d,In as f,Kt as p,Mn as m,Mt as h,N as g,Nn as _,Nt as v,O as y,On as b,Ot as x,Qt as S,S as C,St as w,T,Tn as E,Ut as D,Vn as O,Wn as k,Wt as A,Xt as j,Yt as M,Zt as N,an as P,bt as F,dt as ee,en as te,ft as I,g as L,ht as R,jn as ne,jt as z,kn as re,ln as B,pn as V,qt as H,rn as U,rr as W,ut as G,vt as K,xn as q}from"./client-afectMo_.js";import{t as J}from"./next-frame-once-qdYFoq8G.js";import{i as ie,n as ae,r as Y,t as oe}from"./create-CCsFn2Ba.js";import{t as X}from"./misc-DDs3MKLt.js";import{l as Z}from"./light-6OxpLMiD.js";import{a as se,c as ce,d as le,i as ue,l as de,o as fe,s as pe,t as me,u as he}from"./Popover-DedF1XDw.js";import{a as ge,i as _e}from"./text-Cz55FHMX.js";import{a as ve,f as ye,l as be,r as xe,s as Se,t as Ce}from"./light-DT4Rf2Aa.js";import{t as we}from"./use-locale-Bu-wwOWl.js";import{n as Te}from"./Input-Bvnfq8eI.js";import{t as Q}from"./Tag-Cdsncble.js";import{P as $,T as Ee}from"./index-hSdU0K0M.js";function De(e){return e&-e}var Oe=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=De(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=De(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},ke;function Ae(){return typeof document>`u`?!1:(ke===void 0&&(ke=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),ke)}var je;function Me(){return typeof document>`u`?1:(je===void 0&&(je=`chrome`in window?window.devicePixelRatio:1),je)}var Ne=`VVirtualListXScroll`;function Pe({columnsRef:t,renderColRef:n,renderItemWithColsRef:r}){let i=e(0),a=e(0),o=V(()=>{let e=t.value;if(e.length===0)return null;let n=new Oe(e.length,0);return e.forEach((e,t)=>{n.add(t,e.width)}),n});return f(Ne,{startIndexRef:v(()=>{let e=o.value;return e===null?0:Math.max(e.getBound(a.value)-1,0)}),endIndexRef:v(()=>{let e=o.value;return e===null?0:Math.min(e.getBound(a.value+i.value)+1,t.value.length-1)}),columnsRef:t,renderColRef:n,renderItemWithColsRef:r,getLeft:e=>{let t=o.value;return t===null?0:t.sum(e)}}),{listWidthRef:i,scrollLeftRef:a}}var Fe=q({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=E(Ne);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Ie=se(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[se(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[se(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Le=q({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(t){let n=x();Ie.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:fe,ssr:n}),_(()=>{let{defaultScrollIndex:e,defaultScrollKey:n}=t;e==null?n!=null&&S({key:n}):S({index:e})});let i=!1,a=!1;re(()=>{if(i=!1,!a){a=!0;return}S({top:g.value,left:c.value})}),m(()=>{i=!0,a||=!0});let o=v(()=>{if(t.renderCol==null&&t.renderItemWithCols==null||t.columns.length===0)return;let e=0;return t.columns.forEach(t=>{e+=t.width}),e}),s=V(()=>{let e=new Map,{keyField:n}=t;return t.items.forEach((t,r)=>{e.set(t[n],r)}),e}),{scrollLeftRef:c,listWidthRef:l}=Pe({columnsRef:W(t,`columns`),renderColRef:W(t,`renderCol`),renderItemWithColsRef:W(t,`renderItemWithCols`)}),u=e(null),d=e(void 0),f=new Map,p=V(()=>{let{items:e,itemSize:n,keyField:r}=t,i=new Oe(e.length,n);return e.forEach((e,t)=>{let n=e[r],a=f.get(n);a!==void 0&&i.add(t,a)}),i}),h=e(0),g=e(0),y=v(()=>Math.max(p.value.getBound(g.value-r(t.paddingTop))-1,0)),b=V(()=>{let{value:e}=d;if(e===void 0)return[];let{items:n,itemSize:r}=t,i=y.value,a=Math.min(i+Math.ceil(e/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),S=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:a,position:o,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)E(n,r,c);else if(i!==void 0)T(i,c,l);else if(a!==void 0){let e=s.value.get(a);e!==void 0&&T(e,c,l)}else o===`bottom`?E(0,2**53-1,c):o===`top`&&E(0,0,c)},C,w=null;function T(e,n,i){let{value:a}=p,o=a.sum(e)+r(t.paddingTop);if(!i)u.value.scrollTo({left:0,top:o,behavior:n});else{C=e,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{C=void 0,w=null},16);let{scrollTop:t,offsetHeight:r}=u.value;if(o>t){let i=a.get(e);o+i<=t+r||u.value.scrollTo({left:0,top:o+i-r,behavior:n})}else u.value.scrollTo({left:0,top:o,behavior:n})}}function E(e,t,n){u.value.scrollTo({left:e,top:t,behavior:n})}function O(e,n){if(i||t.ignoreItemResize||F(n.target))return;let{value:r}=p,a=s.value.get(e),o=r.get(a),c=n.borderBoxSize?.[0]?.blockSize??n.contentRect.height;if(c===o)return;c-t.itemSize===0?f.delete(e):f.set(e,c-t.itemSize);let l=c-o;if(l===0)return;r.add(a,l);let d=u.value;if(d!=null){if(C===void 0){let e=r.sum(a);d.scrollTop>e&&d.scrollBy(0,l)}else(a<C||a===C&&c+r.sum(a)>d.scrollTop+d.offsetHeight)&&d.scrollBy(0,l);P()}h.value++}let k=!Ae(),A=!1;function j(e){var n;(n=t.onScroll)==null||n.call(t,e),(!k||!A)&&P()}function M(e){var n;if((n=t.onWheel)==null||n.call(t,e),k){let t=u.value;if(t!=null){if(e.deltaX===0&&(t.scrollTop===0&&e.deltaY<=0||t.scrollTop+t.offsetHeight>=t.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),t.scrollTop+=e.deltaY/Me(),t.scrollLeft+=e.deltaX/Me(),P(),A=!0,J(()=>{A=!1})}}}function N(e){if(i||F(e.target))return;if(t.renderCol==null&&t.renderItemWithCols==null){if(e.contentRect.height===d.value)return}else if(e.contentRect.height===d.value&&e.contentRect.width===l.value)return;d.value=e.contentRect.height,l.value=e.contentRect.width;let{onResize:n}=t;n!==void 0&&n(e)}function P(){let{value:e}=u;e!=null&&(g.value=e.scrollTop,c.value=e.scrollLeft)}function F(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:d,listStyle:{overflow:`auto`},keyToIndex:s,itemsStyle:V(()=>{let{itemResizable:e}=t,n=D(p.value.sum());return h.value,[t.itemsStyle,{boxSizing:`content-box`,width:D(o.value),height:e?``:n,minHeight:e?n:``,paddingTop:D(t.paddingTop),paddingBottom:D(t.paddingBottom)}]}),visibleItemsStyle:V(()=>(h.value,{transform:`translateY(${D(p.value.sum(y.value))})`})),viewportItems:b,listElRef:u,itemsElRef:e(null),scrollTo:S,handleListResize:N,handleListScroll:j,handleListWheel:M,handleItemResize:O}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return i(c,{onResize:this.handleListResize},{default:()=>{var a;return i(`div`,o(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(a=this.$slots).empty?.call(a):i(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[i(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:a}=this;return this.viewportItems.map(o=>{let s=o[t],l=n.get(s),u=r==null?void 0:i(Fe,{index:l,item:o}),d=a==null?void 0:i(Fe,{index:l,item:o}),f=this.$slots.default({item:o,renderedCols:u,renderedItemWithCols:d,index:l})[0];return e?i(c,{key:s,onResize:e=>this.handleItemResize(s,e)},{default:()=>f}):(f.key=s,f)})}})])])}})}});function Re(e,t){t&&(_(()=>{let{value:n}=e;n&&s.registerHandler(n,t)}),O(e,(e,t)=>{t&&s.unregisterHandler(t)},{deep:!1}),ne(()=>{let{value:t}=e;t&&s.unregisterHandler(t)}))}function ze(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Be(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ve=q({name:`Checkmark`,render(){return i(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},i(`g`,{fill:`none`},i(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),He=q({name:`Empty`,render(){return i(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},i(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),i(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Ue=q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),We=H(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[M(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[p(`+`,[M(`description`,`
 margin-top: 8px;
 `)])]),M(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),M(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ge=q({name:`Empty`,props:Object.assign(Object.assign({},n.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:a}=I(e),o=n(`Empty`,`-empty`,We,be,e,t),{localeRef:s}=we(`Empty`),c=V(()=>e.description??a?.value?.Empty?.description),l=V(()=>a?.value?.Empty?.renderIcon||(()=>i(He,null))),u=V(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[S(`iconSize`,t)]:r,[S(`fontSize`,t)]:i,textColor:a,iconColor:s,extraTextColor:c}}=o.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":a,"--n-icon-color":s,"--n-extra-text-color":c}}),d=r?ee(`empty`,V(()=>{let t=``,{size:n}=e;return t+=n[0],t}),u,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:V(()=>c.value||s.value.description),cssVars:r?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),i(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():i(y,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?i(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Ke=q({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=E(le);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:a}}=this,o=r?.(a),s=t?t(a,!1):$(a[this.labelField],a,!1),c=i(`div`,Object.assign({},o,{class:[`${e}-base-select-group-header`,o?.class]}),s);return a.render?a.render({node:c,option:a}):n?n({node:c,option:a,selected:!1}):c}});function qe(e,t){return i(U,{name:`fade-in-scale-up-transition`},{default:()=>e?i(y,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>i(Ve)}):null})}var Je=q({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=E(le),p=v(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function m(t){let{tmNode:n}=e;n.disabled||d(t,n)}function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:v(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:v(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:g,handleMouseEnter:h,handleClick:m}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:a,showCheckmark:o,nodeProps:s,renderOption:c,renderLabel:l,handleClick:u,handleMouseEnter:d,handleMouseMove:f}=this,p=qe(n,e),m=l?[l(t,n),o&&p]:[$(t[this.labelField],t,n),o&&p],h=s?.(t),g=i(`div`,Object.assign({},h,{class:[`${e}-base-select-option`,t.class,h?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:o}],style:[h?.style||``,t.style||``],onClick:Be([u,h?.onClick]),onMouseenter:Be([d,h?.onMouseenter]),onMousemove:Be([f,h?.onMousemove])}),i(`div`,{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:g,option:t,selected:n}):c?c({node:g,option:t,selected:n}):g}}),Ye=H(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[H(`scrollbar`,`
 max-height: var(--n-height);
 `),H(`virtual-list`,`
 max-height: var(--n-height);
 `),H(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),H(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),H(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),M(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),M(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),M(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),H(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[j(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),p(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),p(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),j(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j(`pending`,[p(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),j(`selected`,`
 color: var(--n-option-text-color-active);
 `,[p(`&::before`,`
 background-color: var(--n-option-color-active);
 `),j(`pending`,[p(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),j(`disabled`,`
 cursor: not-allowed;
 `,[N(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),j(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),M(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ee({enterScale:`0.5`})])])]),Xe=q({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},n.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(t){let{mergedClsPrefixRef:i,mergedRtlRef:a,mergedComponentPropsRef:o}=I(t),s=g(`InternalSelectMenu`,a,i),c=n(`InternalSelectMenu`,`-internal-select-menu`,Ye,Se,t,W(t,`clsPrefix`)),l=e(null),u=e(null),p=e(null),m=V(()=>t.treeMate.getFlattenedNodes()),h=V(()=>ae(m.value)),v=e(null);function y(){let{treeMate:e}=t,n=null,{value:r}=t;r===null?n=e.getFirstAvailableNode():(n=t.multiple?e.getNode((r||[])[(r||[]).length-1]):e.getNode(r),(!n||n.disabled)&&(n=e.getFirstAvailableNode())),H(n||null)}function x(){let{value:e}=v;e&&!t.treeMate.getNode(e.key)&&(v.value=null)}let C;O(()=>t.show,e=>{e?C=O(()=>t.treeMate,()=>{t.resetMenuOnOptionsChange?(t.autoPending?y():x(),b(U)):x()},{immediate:!0}):C?.()},{immediate:!0}),ne(()=>{C?.()});let w=V(()=>r(c.value.self[S(`optionHeight`,t.size)])),T=V(()=>d(c.value.self[S(`padding`,t.size)])),E=V(()=>t.multiple&&Array.isArray(t.value)?new Set(t.value):new Set),D=V(()=>{let e=m.value;return e&&e.length===0}),k=V(()=>o?.value?.Select?.renderEmpty);function A(e){let{onToggle:n}=t;n&&n(e)}function j(e){let{onScroll:n}=t;n&&n(e)}function M(e){var t;(t=p.value)==null||t.sync(),j(e)}function N(){var e;(e=p.value)==null||e.sync()}function P(){let{value:e}=v;return e||null}function F(e,t){t.disabled||H(t,!1)}function te(e,t){t.disabled||A(t)}function L(e){var n;ie(e,`action`)||(n=t.onKeyup)==null||n.call(t,e)}function R(e){var n;ie(e,`action`)||(n=t.onKeydown)==null||n.call(t,e)}function z(e){var n;(n=t.onMousedown)==null||n.call(t,e),!t.focusable&&e.preventDefault()}function re(){let{value:e}=v;e&&H(e.getNext({loop:!0}),!0)}function B(){let{value:e}=v;e&&H(e.getPrev({loop:!0}),!0)}function H(e,t=!1){v.value=e,t&&U()}function U(){var e,n;let r=v.value;if(!r)return;let i=h.value(r.key);i!==null&&(t.virtualScroll?(e=u.value)==null||e.scrollTo({index:i}):(n=p.value)==null||n.scrollTo({index:i,elSize:w.value}))}function G(e){var n;l.value?.contains(e.target)&&((n=t.onFocus)==null||n.call(t,e))}function K(e){var n;l.value?.contains(e.relatedTarget)||(n=t.onBlur)==null||n.call(t,e)}f(le,{handleOptionMouseEnter:F,handleOptionClick:te,valueSetRef:E,pendingTmNodeRef:v,nodePropsRef:W(t,`nodeProps`),showCheckmarkRef:W(t,`showCheckmark`),multipleRef:W(t,`multiple`),valueRef:W(t,`value`),renderLabelRef:W(t,`renderLabel`),renderOptionRef:W(t,`renderOption`),labelFieldRef:W(t,`labelField`),valueFieldRef:W(t,`valueField`)}),f(he,l),_(()=>{let{value:e}=p;e&&e.sync()});let q=V(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:s,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:f,optionTextColorActive:p,optionOpacityDisabled:m,optionCheckColor:h,actionTextColor:g,optionColorPending:_,optionColorActive:v,loadingColor:y,loadingSize:b,optionColorActivePending:x,[S(`optionFontSize`,e)]:C,[S(`optionHeight`,e)]:w,[S(`optionPadding`,e)]:T}}=c.value;return{"--n-height":r,"--n-action-divider-color":s,"--n-action-text-color":g,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":C,"--n-group-header-text-color":o,"--n-option-check-color":h,"--n-option-color-pending":_,"--n-option-color-active":v,"--n-option-color-active-pending":x,"--n-option-height":w,"--n-option-opacity-disabled":m,"--n-option-text-color":u,"--n-option-text-color-active":p,"--n-option-text-color-disabled":f,"--n-option-text-color-pressed":l,"--n-option-padding":T,"--n-option-padding-left":d(T,`left`),"--n-option-padding-right":d(T,`right`),"--n-loading-color":y,"--n-loading-size":b}}),{inlineThemeDisabled:J}=t,Y=J?ee(`internal-select-menu`,V(()=>t.size[0]),q,t):void 0,oe={selfRef:l,next:re,prev:B,getPendingTmNode:P};return Re(l,t.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:i,rtlEnabled:s,virtualListRef:u,scrollbarRef:p,itemSize:w,padding:T,flattenedNodes:m,empty:D,mergedRenderEmpty:k,virtualListContainer(){let{value:e}=u;return e?.listElRef},virtualListContent(){let{value:e}=u;return e?.itemsElRef},doScroll:j,handleFocusin:G,handleFocusout:K,handleKeyUp:L,handleKeyDown:R,handleMouseDown:z,handleVirtualListResize:N,handleVirtualListScroll:M,cssVars:J?void 0:q,themeClass:Y?.themeClass,onRender:Y?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:a,onRender:o}=this;return o?.(),i(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,a,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},F(e.header,e=>e&&i(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?i(`div`,{class:`${n}-base-select-menu__loading`},i(C,{clsPrefix:n,strokeWidth:20})):this.empty?i(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},K(e.empty,()=>[this.mergedRenderEmpty?.call(this)||i(Ge,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):i(L,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?i(Le,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?i(Ke,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:i(Je,{clsPrefix:n,key:e.key,tmNode:e})}):i(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?i(Ke,{key:e.key,clsPrefix:n,tmNode:e}):i(Je,{clsPrefix:n,key:e.key,tmNode:e})))}),F(e.action,e=>e&&[i(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),i(Ue,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ze=p([H(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[H(`base-loading`,`
 color: var(--n-loading-color);
 `),H(`base-selection-tags`,`min-height: var(--n-height);`),M(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),H(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),H(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),H(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[M(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),H(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),H(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[H(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M(`render-label`,`
 color: var(--n-text-color);
 `)]),N(`disabled`,[p(`&:hover`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j(`focus`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j(`active`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),H(`base-selection-label`,`background-color: var(--n-color-active);`),H(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),j(`disabled`,`cursor: not-allowed;`,[M(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),H(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[H(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),H(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),H(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),H(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>j(`${e}-status`,[M(`state-border`,`border: var(--n-border-${e});`),N(`disabled`,[p(`&:hover`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j(`active`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),H(`base-selection-label`,`background-color: var(--n-color-active-${e});`),H(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),j(`focus`,[M(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),H(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),H(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[p(`&:last-child`,`padding-right: 0;`),H(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[M(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Qe=q({name:`InternalSelection`,props:Object.assign(Object.assign({},n.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(t){let{mergedClsPrefixRef:r,mergedRtlRef:i}=I(t),a=g(`InternalSelection`,i,r),o=e(null),s=e(null),c=e(null),l=e(null),f=e(null),p=e(null),m=e(null),h=e(null),v=e(null),y=e(null),x=e(!1),C=e(!1),w=e(!1),T=n(`InternalSelection`,`-internal-selection`,Ze,ve,t,W(t,`clsPrefix`)),E=V(()=>t.clearable&&!t.disabled&&(w.value||t.active)),D=V(()=>t.selectedOption?t.renderTag?t.renderTag({option:t.selectedOption,handleClose:()=>{}}):t.renderLabel?t.renderLabel(t.selectedOption,!0):$(t.selectedOption[t.labelField],t.selectedOption,!0):t.placeholder),k=V(()=>{let e=t.selectedOption;if(e)return e[t.labelField]}),A=V(()=>t.multiple?!!(Array.isArray(t.selectedOptions)&&t.selectedOptions.length):t.selectedOption!==null);function j(){var e;let{value:n}=o;if(n){let{value:r}=s;r&&(r.style.width=`${n.offsetWidth}px`,t.maxTagCount!==`responsive`&&((e=v.value)==null||e.sync({showAllItemsBeforeCalculate:!1})))}}function M(){let{value:e}=y;e&&(e.style.display=`none`)}function N(){let{value:e}=y;e&&(e.style.display=`inline-block`)}O(W(t,`active`),e=>{e||M()}),O(W(t,`pattern`),()=>{t.multiple&&b(j)});function P(e){let{onFocus:n}=t;n&&n(e)}function F(e){let{onBlur:n}=t;n&&n(e)}function te(e){let{onDeleteOption:n}=t;n&&n(e)}function L(e){let{onClear:n}=t;n&&n(e)}function R(e){let{onPatternInput:n}=t;n&&n(e)}function ne(e){(!e.relatedTarget||!c.value?.contains(e.relatedTarget))&&P(e)}function z(e){c.value?.contains(e.relatedTarget)||F(e)}function re(e){L(e)}function B(){w.value=!0}function H(){w.value=!1}function U(e){!t.active||!t.filterable||e.target!==s.value&&e.preventDefault()}function G(e){te(e)}let K=e(!1);function q(e){if(e.key===`Backspace`&&!K.value&&!t.pattern.length){let{selectedOptions:e}=t;e?.length&&G(e[e.length-1])}}let J=null;function ie(e){let{value:n}=o;n&&(n.textContent=e.target.value,j()),t.ignoreComposition&&K.value?J=e:R(e)}function ae(){K.value=!0}function Y(){K.value=!1,t.ignoreComposition&&R(J),J=null}function oe(e){var n;C.value=!0,(n=t.onPatternFocus)==null||n.call(t,e)}function X(e){var n;C.value=!1,(n=t.onPatternBlur)==null||n.call(t,e)}function Z(){var e,n;if(t.filterable)C.value=!1,(e=p.value)==null||e.blur(),(n=s.value)==null||n.blur();else if(t.multiple){let{value:e}=l;e?.blur()}else{let{value:e}=f;e?.blur()}}function se(){var e,n,r;t.filterable?(C.value=!1,(e=p.value)==null||e.focus()):t.multiple?(n=l.value)==null||n.focus():(r=f.value)==null||r.focus()}function ce(){let{value:e}=s;e&&(N(),e.focus())}function le(){let{value:e}=s;e&&e.blur()}function ue(e){let{value:t}=m;t&&t.setTextContent(`+${e}`)}function de(){let{value:e}=h;return e}function fe(){return s.value}let pe=null;function me(){pe!==null&&window.clearTimeout(pe)}function he(){t.active||(me(),pe=window.setTimeout(()=>{A.value&&(x.value=!0)},100))}function ge(){me()}function _e(e){e||(me(),x.value=!1)}O(A,e=>{e||(x.value=!1)}),_(()=>{u(()=>{let e=p.value;e&&(t.disabled?e.removeAttribute(`tabindex`):e.tabIndex=C.value?-1:0)})}),Re(c,t.onResize);let{inlineThemeDisabled:ye}=t,be=V(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:f,textColorDisabled:p,placeholderColorDisabled:m,colorActive:h,boxShadowFocus:g,boxShadowActive:_,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:C,arrowColor:w,arrowColorDisabled:E,loadingColor:D,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:j,borderWarning:M,borderFocusWarning:N,borderHoverWarning:P,borderActiveWarning:F,colorActiveError:ee,boxShadowFocusError:te,boxShadowActiveError:I,boxShadowHoverError:L,borderError:R,borderFocusError:ne,borderHoverError:z,borderActiveError:re,clearColor:B,clearColorHover:V,clearColorPressed:H,clearSize:U,arrowSize:W,[S(`height`,e)]:G,[S(`fontSize`,e)]:K}}=T.value,q=d(c),J=d(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":C,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":_,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":h,"--n-color-disabled":f,"--n-font-size":K,"--n-height":G,"--n-padding-single-top":q.top,"--n-padding-multiple-top":J.top,"--n-padding-single-right":q.right,"--n-padding-multiple-right":J.right,"--n-padding-single-left":q.left,"--n-padding-multiple-left":J.left,"--n-padding-single-bottom":q.bottom,"--n-padding-multiple-bottom":J.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":m,"--n-text-color":s,"--n-text-color-disabled":p,"--n-arrow-color":w,"--n-arrow-color-disabled":E,"--n-loading-color":D,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":j,"--n-border-warning":M,"--n-border-focus-warning":N,"--n-border-hover-warning":P,"--n-border-active-warning":F,"--n-color-active-error":ee,"--n-box-shadow-focus-error":te,"--n-box-shadow-active-error":I,"--n-box-shadow-hover-error":L,"--n-border-error":R,"--n-border-focus-error":ne,"--n-border-hover-error":z,"--n-border-active-error":re,"--n-clear-size":U,"--n-clear-color":B,"--n-clear-color-hover":V,"--n-clear-color-pressed":H,"--n-arrow-size":W,"--n-font-weight":r}}),xe=ye?ee(`internal-selection`,V(()=>t.size[0]),be,t):void 0;return{mergedTheme:T,mergedClearable:E,mergedClsPrefix:r,rtlEnabled:a,patternInputFocused:C,filterablePlaceholder:D,label:k,selected:A,showTagsPanel:x,isComposing:K,counterRef:m,counterWrapperRef:h,patternInputMirrorRef:o,patternInputRef:s,selfRef:c,multipleElRef:l,singleElRef:f,patternInputWrapperRef:p,overflowRef:v,inputTagElRef:y,handleMouseDown:U,handleFocusin:ne,handleClear:re,handleMouseEnter:B,handleMouseLeave:H,handleDeleteOption:G,handlePatternKeyDown:q,handlePatternInputInput:ie,handlePatternInputBlur:X,handlePatternInputFocus:oe,handleMouseEnterCounter:he,handleMouseLeaveCounter:ge,handleFocusout:z,handleCompositionEnd:Y,handleCompositionStart:ae,onPopoverUpdateShow:_e,focus:se,focusInput:ce,blur:Z,blurInput:le,updateCounter:ue,getCounter:de,getTail:fe,renderLabel:t.renderLabel,cssVars:ye?void 0:be,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:a,maxTagCount:o,bordered:s,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:f}=this;u?.();let p=o===`responsive`,m=typeof o==`number`,h=p||m,g=i(R,null,{default:()=>i(Te,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(t){let{labelField:e}=this,t=t=>i(`div`,{class:`${c}-base-selection-tag-wrapper`,key:t.value},d?d({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):i(Q,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(t,!0):$(t[e],t,!0)})),s=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),u=a?i(`div`,{class:`${c}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},i(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i(`span`,{ref:`patternInputMirrorRef`,class:`${c}-base-selection-input-tag__mirror`},this.pattern)):null,v=p?()=>i(`div`,{class:`${c}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},i(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,y;if(m){let e=this.selectedOptions.length-o;e>0&&(y=i(`div`,{class:`${c}-base-selection-tag-wrapper`,key:`__counter__`},i(Q,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let b=p?a?i(Y,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:v,tail:()=>u}):i(Y,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:v}):m&&y?s().concat(y):s(),x=h?()=>i(`div`,{class:`${c}-base-selection-popover`},p?s():this.selectedOptions.map(t)):void 0,S=h?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},l):null,C=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`},i(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):null,w=a?i(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-tags`},b,p?null:u,g):i(`div`,{ref:`multipleElRef`,class:`${c}-base-selection-tags`,tabindex:r?void 0:0},b,g);_=i(B,null,h?i(me,Object.assign({},S,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>w,default:x}):w,C)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;_=i(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-label`,title:this.patternInputFocused?void 0:ze(this.label)},i(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?i(`div`,{class:`${c}-base-selection-label__render-label ${c}-base-selection-overlay`,key:`input`},i(`div`,{class:`${c}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):$(this.label,this.selectedOption,!0))):null,t?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},i(`div`,{class:`${c}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=i(`div`,{ref:`singleElRef`,class:`${c}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?i(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},i(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):i(`div`,{class:`${c}-base-selection-input`,title:ze(this.label),key:`input`},i(`div`,{class:`${c}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):$(this.label,this.selectedOption,!0))),g);return i(`div`,{ref:`selfRef`,class:[`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,s?i(`div`,{class:`${c}-base-selection__border`}):null,s?i(`div`,{class:`${c}-base-selection__state-border`}):null)}});function $e(e){return e.type===`group`}function et(e){return e.type===`ignored`}function tt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function nt(e,t){return{getIsGroup:$e,getIgnored:et,getKey(t){return $e(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function rt(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if($e(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(et(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function it(e,t,n){let r=new Map;return e.forEach(e=>{$e(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var at=z(`n-checkbox-group`),ot=q({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(t){let{mergedClsPrefixRef:n}=I(t),r=G(t),{mergedSizeRef:i,mergedDisabledRef:a}=r,o=e(t.defaultValue),s=ge(V(()=>t.value),o),c=V(()=>s.value?.length||0),l=V(()=>Array.isArray(s.value)?new Set(s.value):new Set);function u(e,n){let{nTriggerFormInput:i,nTriggerFormChange:a}=r,{onChange:c,"onUpdate:value":l,onUpdateValue:u}=t;if(Array.isArray(s.value)){let t=Array.from(s.value),r=t.findIndex(e=>e===n);e?~r||(t.push(n),u&&w(u,t,{actionType:`check`,value:n}),l&&w(l,t,{actionType:`check`,value:n}),i(),a(),o.value=t,c&&w(c,t)):~r&&(t.splice(r,1),u&&w(u,t,{actionType:`uncheck`,value:n}),l&&w(l,t,{actionType:`uncheck`,value:n}),c&&w(c,t),o.value=t,i(),a())}else e?(u&&w(u,[n],{actionType:`check`,value:n}),l&&w(l,[n],{actionType:`check`,value:n}),c&&w(c,[n]),o.value=[n],i(),a()):(u&&w(u,[],{actionType:`uncheck`,value:n}),l&&w(l,[],{actionType:`uncheck`,value:n}),c&&w(c,[]),o.value=[],i(),a())}return f(at,{checkedCountRef:c,maxRef:W(t,`max`),minRef:W(t,`min`),valueSetRef:l,disabledRef:a,mergedSizeRef:i,toggleCheckbox:u}),{mergedClsPrefix:n}},render(){return i(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}}),st=()=>i(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},i(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})),ct=()=>i(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},i(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),lt=p([H(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[j(`show-label`,`line-height: var(--n-label-line-height);`),p(`&:hover`,[H(`checkbox-box`,[M(`border`,`border: var(--n-border-checked);`)])]),p(`&:focus:not(:active)`,[H(`checkbox-box`,[M(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),j(`inside-table`,[H(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),j(`checked`,[H(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[H(`checkbox-icon`,[p(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),j(`indeterminate`,[H(`checkbox-box`,[H(`checkbox-icon`,[p(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),p(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),j(`checked, indeterminate`,[p(`&:focus:not(:active)`,[H(`checkbox-box`,[M(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),H(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[M(`border`,{border:`var(--n-border-checked)`})])]),j(`disabled`,{cursor:`not-allowed`},[j(`checked`,[H(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[M(`border`,{border:`var(--n-border-disabled-checked)`}),H(`checkbox-icon`,[p(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),H(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[M(`border`,`
 border: var(--n-border-disabled);
 `),H(`checkbox-icon`,[p(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),M(`label`,`
 color: var(--n-text-color-disabled);
 `)]),H(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),H(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[M(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),H(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[p(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),T({left:`1px`,top:`1px`})])]),M(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[p(`&:empty`,{display:`none`})])]),t(H(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),te(H(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),ut=q({name:`Checkbox`,props:Object.assign(Object.assign({},n.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(t){let r=E(at,null),i=e(null),{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedRtlRef:s,mergedComponentPropsRef:c}=I(t),l=e(t.defaultChecked),u=ge(W(t,`checked`),l),d=v(()=>{if(r){let e=r.valueSetRef.value;return e&&t.value!==void 0?e.has(t.value):!1}else return u.value===t.checkedValue}),f=G(t,{mergedSize(e){let{size:n}=t;if(n!==void 0)return n;if(r){let{value:e}=r.mergedSizeRef;if(e!==void 0)return e}if(e){let{mergedSize:t}=e;if(t!==void 0)return t.value}return c?.value?.Checkbox?.size||`medium`},mergedDisabled(e){let{disabled:n}=t;if(n!==void 0)return n;if(r){if(r.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:t}=r;if(e!==void 0&&t.value>=e&&!d.value)return!0;let{minRef:{value:n}}=r;if(n!==void 0&&t.value<=n&&d.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:m}=f,h=n(`Checkbox`,`-checkbox`,lt,xe,t,a);function _(e){if(r&&t.value!==void 0)r.toggleCheckbox(!d.value,t.value);else{let{onChange:n,"onUpdate:checked":r,onUpdateChecked:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=f,s=d.value?t.uncheckedValue:t.checkedValue;r&&w(r,s,e),i&&w(i,s,e),n&&w(n,s,e),a(),o(),l.value=s}}function y(e){p.value||_(e)}function b(e){if(!p.value)switch(e.key){case` `:case`Enter`:_(e)}}function x(e){switch(e.key){case` `:e.preventDefault()}}let C={focus:()=>{var e;(e=i.value)==null||e.focus()},blur:()=>{var e;(e=i.value)==null||e.blur()}},T=g(`Checkbox`,s,a),D=V(()=>{let{value:e}=m,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:p,borderChecked:g,boxShadowFocus:_,textColor:v,textColorDisabled:y,checkMarkColorDisabledChecked:b,colorDisabledChecked:x,borderDisabledChecked:C,labelPadding:w,labelLineHeight:T,labelFontWeight:E,[S(`fontSize`,e)]:D,[S(`size`,e)]:O}}=h.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":g,"--n-border-focus":f,"--n-border-disabled":p,"--n-border-disabled-checked":C,"--n-box-shadow-focus":_,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":x,"--n-text-color":v,"--n-text-color-disabled":y,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":b,"--n-font-size":D,"--n-label-padding":w}}),O=o?ee(`checkbox`,V(()=>m.value[0]),D,t):void 0;return Object.assign(f,C,{rtlEnabled:T,selfRef:i,mergedClsPrefix:a,mergedDisabled:p,renderedChecked:d,mergedTheme:h,labelId:X(),handleClick:y,handleKeyUp:b,handleKeyDown:x,cssVars:o?void 0:D,themeClass:O?.themeClass,onRender:O?.onRender})},render(){var e;let{$slots:t,renderedChecked:n,mergedDisabled:r,indeterminate:o,privateInsideTable:s,cssVars:c,labelId:u,label:d,mergedClsPrefix:f,focusable:p,handleKeyUp:m,handleKeyDown:h,handleClick:g}=this;(e=this.onRender)==null||e.call(this);let _=F(t.default,e=>d||e?i(`span`,{class:`${f}-checkbox__label`,id:u},d||e):null);return i(`div`,{ref:`selfRef`,class:[`${f}-checkbox`,this.themeClass,this.rtlEnabled&&`${f}-checkbox--rtl`,n&&`${f}-checkbox--checked`,r&&`${f}-checkbox--disabled`,o&&`${f}-checkbox--indeterminate`,s&&`${f}-checkbox--inside-table`,_&&`${f}-checkbox--show-label`],tabindex:r||!p?void 0:0,role:`checkbox`,"aria-checked":o?`mixed`:n,"aria-labelledby":u,style:c,onKeyup:m,onKeydown:h,onClick:g,onMousedown:()=>{l(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},i(`div`,{class:`${f}-checkbox-box-wrapper`},`\xA0`,i(`div`,{class:`${f}-checkbox-box`},i(a,null,{default:()=>this.indeterminate?i(`div`,{key:`indeterminate`,class:`${f}-checkbox-icon`},ct()):i(`div`,{key:`check`,class:`${f}-checkbox-icon`},st())}),i(`div`,{class:`${f}-checkbox-box__border`}))),_)}}),dt=p([H(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),H(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ee({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),ft=q({name:`Select`,props:Object.assign(Object.assign({},n.props),{to:de.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(t){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s}=I(t),c=n(`Select`,`-select`,dt,Ce,t,r),l=e(t.defaultValue),u=ge(W(t,`value`),l),d=e(!1),f=e(``),p=_e(t,[`items`,`options`]),m=e([]),g=e([]),_=V(()=>g.value.concat(m.value).concat(p.value)),v=V(()=>{let{filter:e}=t;if(e)return e;let{labelField:n,valueField:r}=t;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return tt(e,i);let a=t[r];return typeof a==`string`?tt(e,a):typeof a==`number`&&tt(e,String(a))}}),y=V(()=>{if(t.remote)return p.value;{let{value:e}=_,{value:n}=f;return!n.length||!t.filterable?e:rt(e,v.value,n,t.childrenField)}}),b=V(()=>{let{valueField:e,childrenField:n}=t,r=nt(e,n);return oe(y.value,r)}),x=V(()=>it(_.value,t.valueField,t.childrenField)),S=e(!1),C=ge(W(t,`show`),S),T=e(null),E=e(null),D=e(null),{localeRef:k}=we(`Select`),j=V(()=>t.placeholder??k.value.placeholder),M=[],N=e(new Map),P=V(()=>{let{fallbackOption:e}=t;if(e===void 0){let{labelField:e,valueField:n}=t;return t=>({[e]:String(t),[n]:t})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function F(e){let n=t.remote,{value:r}=N,{value:i}=x,{value:a}=P,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let te=V(()=>{if(t.multiple){let{value:e}=u;return Array.isArray(e)?F(e):[]}return null}),L=V(()=>{let{value:e}=u;return!t.multiple&&!Array.isArray(e)?e===null?null:F([e])[0]||null:null}),R=G(t,{mergedSize:e=>{let{size:n}=t;if(n)return n;let{mergedSize:r}=e||{};return r?.value?r.value:s?.value?.Select?.size||`medium`}}),{mergedSizeRef:ne,mergedDisabledRef:z,mergedStatusRef:re}=R;function B(e,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=t,{nTriggerFormChange:o,nTriggerFormInput:s}=R;r&&w(r,e,n),a&&w(a,e,n),i&&w(i,e,n),l.value=e,o(),s()}function H(e){let{onBlur:n}=t,{nTriggerFormBlur:r}=R;n&&w(n,e),r()}function U(){let{onClear:e}=t;e&&w(e)}function K(e){let{onFocus:n,showOnFocus:r}=t,{nTriggerFormFocus:i}=R;n&&w(n,e),i(),r&&X()}function q(e){let{onSearch:n}=t;n&&w(n,e)}function J(e){let{onScroll:n}=t;n&&w(n,e)}function ae(){var e;let{remote:n,multiple:r}=t;if(n){let{value:n}=N;if(r){let{valueField:r}=t;(e=te.value)==null||e.forEach(e=>{n.set(e[r],e)})}else{let e=L.value;e&&n.set(e[t.valueField],e)}}}function Y(e){let{onUpdateShow:n,"onUpdate:show":r}=t;n&&w(n,e),r&&w(r,e),S.value=e}function X(){z.value||(Y(!0),S.value=!0,t.filterable&&Me())}function Z(){Y(!1)}function se(){f.value=``,g.value=M}let ce=e(!1);function le(){t.filterable&&(ce.value=!0)}function ue(){t.filterable&&(ce.value=!1,C.value||se())}function fe(){z.value||(C.value?t.filterable?Me():Z():X())}function pe(e){(D.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,H(e),Z())}function me(e){K(e),d.value=!0}function he(){d.value=!0}function ve(e){T.value?.$el.contains(e.relatedTarget)||(d.value=!1,H(e),Z())}function be(){var e;(e=T.value)==null||e.focus(),Z()}function xe(e){C.value&&(T.value?.$el.contains(A(e))||Z())}function Se(e){if(!Array.isArray(e))return[];if(P.value)return Array.from(e);{let{remote:n}=t,{value:r}=x;if(n){let{value:t}=N;return e.filter(e=>r.has(e)||t.has(e))}else return e.filter(e=>r.has(e))}}function Te(e){Q(e.rawNode)}function Q(e){if(z.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=t;if(n&&!r){let{value:e}=g,t=e[0]||null;if(t){let e=m.value;e.length?e.push(t):m.value=[t],g.value=M}}if(r&&N.value.set(e[a],e),t.multiple){let t=Se(u.value),o=t.findIndex(t=>t===e[a]);if(~o){if(t.splice(o,1),n&&!r){let t=$(e[a]);~t&&(m.value.splice(t,1),i&&(f.value=``))}}else t.push(e[a]),i&&(f.value=``);B(t,F(t))}else{if(n&&!r){let t=$(e[a]);~t?m.value=[m.value[t]]:m.value=M}je(),Z(),B(e[a],e)}}function $(e){return m.value.findIndex(n=>n[t.valueField]===e)}function Ee(e){C.value||X();let{value:n}=e.target;f.value=n;let{tag:r,remote:i}=t;if(q(n),r&&!i){if(!n){g.value=M;return}let{onCreate:e}=t,r=e?e(n):{[t.labelField]:n,[t.valueField]:n},{valueField:i,labelField:a}=t;p.value.some(e=>e[i]===r[i]||e[a]===r[a])||m.value.some(e=>e[i]===r[i]||e[a]===r[a])?g.value=M:g.value=[r]}}function De(e){e.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=t;!n&&t.filterable&&Z(),r&&!i&&a&&(m.value=M),U(),n?B([],[]):B(null,null)}function Oe(e){!ie(e,`action`)&&!ie(e,`empty`)&&!ie(e,`header`)&&e.preventDefault()}function ke(e){J(e)}function Ae(e){var n,r,i;if(!t.keyboard){e.preventDefault();return}switch(e.key){case` `:if(t.filterable)break;e.preventDefault();case`Enter`:if(!T.value?.isComposing){if(C.value){let e=D.value?.getPendingTmNode();e?Te(e):t.filterable||(Z(),je())}else if(X(),t.tag&&ce.value){let e=g.value[0];if(e){let n=e[t.valueField],{value:r}=u;t.multiple&&Array.isArray(r)&&r.includes(n)||Q(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),t.loading)return;C.value&&((n=D.value)==null||n.prev());break;case`ArrowDown`:if(e.preventDefault(),t.loading)return;C.value?(r=D.value)==null||r.next():X();break;case`Escape`:C.value&&(ye(e),Z()),(i=T.value)==null||i.focus();break}}function je(){var e;(e=T.value)==null||e.focus()}function Me(){var e;(e=T.value)==null||e.focusInput()}function Ne(){var e;C.value&&((e=E.value)==null||e.syncPosition())}ae(),O(W(t,`options`),ae);let Pe={focus:()=>{var e;(e=T.value)==null||e.focus()},focusInput:()=>{var e;(e=T.value)==null||e.focusInput()},blur:()=>{var e;(e=T.value)==null||e.blur()},blurInput:()=>{var e;(e=T.value)==null||e.blurInput()}},Fe=V(()=>{let{self:{menuBoxShadow:e}}=c.value;return{"--n-menu-box-shadow":e}}),Ie=o?ee(`select`,void 0,Fe,t):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:re,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:b,isMounted:h(),triggerRef:T,menuRef:D,pattern:f,uncontrolledShow:S,mergedShow:C,adjustedTo:de(t),uncontrolledValue:l,mergedValue:u,followerRef:E,localizedPlaceholder:j,selectedOption:L,selectedOptions:te,mergedSize:ne,mergedDisabled:z,focused:d,activeWithoutMenuOpen:ce,inlineThemeDisabled:o,onTriggerInputFocus:le,onTriggerInputBlur:ue,handleTriggerOrMenuResize:Ne,handleMenuFocus:he,handleMenuBlur:ve,handleMenuTabOut:be,handleTriggerClick:fe,handleToggle:Te,handleDeleteOption:Q,handlePatternInput:Ee,handleClear:De,handleTriggerBlur:pe,handleTriggerFocus:me,handleKeydown:Ae,handleMenuAfterLeave:se,handleMenuClickOutside:xe,handleMenuScroll:ke,handleMenuKeydown:Ae,handleMenuMousedown:Oe,mergedTheme:c,cssVars:o?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return i(`div`,{class:`${this.mergedClsPrefix}-select`},i(ce,null,{default:()=>[i(pe,null,{default:()=>i(Qe,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),i(ue,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===de.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>i(U,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),k(i(Xe,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[P,this.mergedShow],[Z,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Z,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Xe as a,Le as c,nt as i,ut as n,Ge as o,ot as r,Be as s,ft as t};