import{f as M,r as W,at as zt,au as Rt,g as c,av as Re,aw as Tt,ax as ae,ay as Pt,k as B,i as d,az as Wt,j as C,l as Me,u as se,aA as Bt,n as j,aB as Lt,U as N,p as De,aC as ve,aD as At,T as Et,v as jt,x as Fe,aE as It,t as Nt,F as he,aF as Ot,C as Mt,aG as Dt,aH as Ft,L as U,K as Ht,aI as Ut,aJ as ie,M as Vt,w as le,af as de,E as Gt,N as G,aK as Xt,aL as Yt,aM as Te,aN as Pe,O as te,aO as Kt,aP as qt,aQ as Jt,aR as Zt,aS as Qt,W as en,aT as tn,Y as q,Z as ce,a3 as v,a8 as z,ab as L,_ as S,aq as fe,ad as A,an as K,ao as ne,al as We,a9 as Be,aa as me,a7 as Le,ah as nn,a0 as ge,aU as an,ac as sn,aV as rn,aW as on}from"./index-81dc7ae4.js";import{a as ln}from"./index-44d7b31f.js";const dn=Re(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Re("&::-webkit-scrollbar",{width:0,height:0})]),cn=M({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=W(null);function n(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const s=zt();return dn.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rt,ssr:s}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...r){var b;(b=e.value)===null||b===void 0||b.scrollTo(...r)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var fn=/\s/;function un(e){for(var n=e.length;n--&&fn.test(e.charAt(n)););return n}var bn=/^\s+/;function pn(e){return e&&e.slice(0,un(e)+1).replace(bn,"")}var Ae=0/0,vn=/^[-+]0x[0-9a-f]+$/i,hn=/^0b[01]+$/i,mn=/^0o[0-7]+$/i,gn=parseInt;function Ee(e){if(typeof e=="number")return e;if(Tt(e))return Ae;if(ae(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ae(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=pn(e);var s=hn.test(e);return s||mn.test(e)?gn(e.slice(2),s?2:8):vn.test(e)?Ae:+e}var xn=function(){return Pt.Date.now()};const ue=xn;var yn="Expected a function",wn=Math.max,Cn=Math.min;function _n(e,n,s){var i,r,b,o,l,f,h=0,R=!1,x=!1,y=!0;if(typeof e!="function")throw new TypeError(yn);n=Ee(n)||0,ae(s)&&(R=!!s.leading,x="maxWait"in s,b=x?wn(Ee(s.maxWait)||0,n):b,y="trailing"in s?!!s.trailing:y);function $(k){var I=i,F=r;return i=r=void 0,h=k,o=e.apply(F,I),o}function T(k){return h=k,l=setTimeout(m,n),R?$(k):o}function _(k){var I=k-f,F=k-h,V=n-I;return x?Cn(V,b-F):V}function w(k){var I=k-f,F=k-h;return f===void 0||I>=n||I<0||x&&F>=b}function m(){var k=ue();if(w(k))return g(k);l=setTimeout(m,_(k))}function g(k){return l=void 0,y&&i?$(k):(i=r=void 0,o)}function P(){l!==void 0&&clearTimeout(l),h=0,i=f=r=l=void 0}function D(){return l===void 0?o:g(ue())}function J(){var k=ue(),I=w(k);if(i=arguments,r=this,f=k,I){if(l===void 0)return T(f);if(x)return clearTimeout(l),l=setTimeout(m,n),$(f)}return l===void 0&&(l=setTimeout(m,n)),o}return J.cancel=P,J.flush=D,J}var $n="Expected a function";function be(e,n,s){var i=!0,r=!0;if(typeof e!="function")throw new TypeError($n);return ae(s)&&(i="leading"in s?!!s.leading:i,r="trailing"in s?!!s.trailing:r),_n(e,n,{leading:i,maxWait:n,trailing:r})}const kn=M({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Sn=B([B("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d("spin-container",{position:"relative"},[d("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Wt()])]),d("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[C("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),d("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[C("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),zn={small:20,medium:18,large:16},Rn=Object.assign(Object.assign({},se.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Tn=M({name:"Spin",props:Rn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=Me(e),i=se("Spin","-spin",Sn,Bt,e,n),r=j(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:l},self:f}=i.value,{opacitySpinning:h,color:R,textColor:x}=f,y=typeof o=="number"?Lt(o):f[N("size",o)];return{"--n-bezier":l,"--n-opacity-spinning":h,"--n-size":y,"--n-color":R,"--n-text-color":x}}),b=s?De("spin",j(()=>{const{size:o}=e;return typeof o=="number"?String(o):o[0]}),r,e):void 0;return{mergedClsPrefix:n,compitableShow:ve(e,["spinning","show"]),mergedStrokeWidth:j(()=>{const{strokeWidth:o}=e;if(o!==void 0)return o;const{size:l}=e;return zn[typeof l=="number"?"medium":l]}),cssVars:s?void 0:r,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e,n;const{$slots:s,mergedClsPrefix:i,description:r}=this,b=s.icon&&this.rotate,o=(r||s.description)&&c("div",{class:`${i}-spin-description`},r||((e=s.description)===null||e===void 0?void 0:e.call(s))),l=s.icon?c("div",{class:[`${i}-spin-body`,this.themeClass]},c("div",{class:[`${i}-spin`,b&&`${i}-spin--rotate`],style:s.default?"":this.cssVars},s.icon()),o):c("div",{class:[`${i}-spin-body`,this.themeClass]},c(At,{clsPrefix:i,style:s.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),o);return(n=this.onRender)===null||n===void 0||n.call(this),s.default?c("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},c("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},s),c(Et,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}}),ye=jt("n-tabs"),He={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},je=M({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:He,setup(e){const n=Fe(ye,null);return n||It("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Pn=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ft(He,["displayDirective"])),xe=M({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Pn,setup(e){const{mergedClsPrefixRef:n,valueRef:s,typeRef:i,closableRef:r,tabStyleRef:b,tabChangeIdRef:o,onBeforeLeaveRef:l,triggerRef:f,handleAdd:h,activateTab:R,handleClose:x}=Fe(ye);return{trigger:f,mergedClosable:j(()=>{if(e.internalAddable)return!1;const{closable:y}=e;return y===void 0?r.value:y}),style:b,clsPrefix:n,value:s,type:i,handleClose(y){y.stopPropagation(),!e.disabled&&x(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){h();return}const{name:y}=e,$=++o.id;if(y!==s.value){const{value:T}=l;T?Promise.resolve(T(e.name,s.value)).then(_=>{_&&o.id===$&&R(y)}):R(y)}}}},render(){const{internalAddable:e,clsPrefix:n,name:s,disabled:i,label:r,tab:b,value:o,mergedClosable:l,style:f,trigger:h,$slots:{default:R}}=this,x=r??b;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:s,"data-name":s,"data-disabled":i?!0:void 0},Nt({class:[`${n}-tabs-tab`,o===s&&`${n}-tabs-tab--active`,i&&`${n}-tabs-tab--disabled`,l&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:h==="click"?this.activateTab:void 0,onMouseenter:h==="hover"?this.activateTab:void 0,style:e?void 0:f},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(he,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(Ot,{clsPrefix:n},{default:()=>c(kn,null)})):R?R():typeof x=="object"?x:Mt(x??s)),l&&this.type==="card"?c(Dt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Wn=d("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("segment-type",[d("tabs-rail",[B("&.transition-disabled","color: red;",[d("tabs-tab",`
 transition: none;
 `)])])]),C("left, right",`
 flex-direction: row;
 `,[d("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),d("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),C("right",`
 flex-direction: row-reverse;
 `,[d("tabs-bar",`
 left: 0;
 `)]),C("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[d("tabs-bar",`
 top: 0;
 `)]),d("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[d("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[d("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[d("tabs-nav",{width:"100%"},[d("tabs-wrapper",{width:"100%"},[d("tabs-tab",{marginRight:0})])])]),d("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[U("prefix, suffix",`
 display: flex;
 align-items: center;
 `),U("prefix","padding-right: 16px;"),U("suffix","padding-left: 16px;")]),d("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[B("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[B("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),d("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[B("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),B("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),B("&::before",`
 left: 0;
 `),B("&::after",`
 right: 0;
 `)]),d("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),d("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),d("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),d("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),U("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("label",`
 display: flex;
 align-items: center;
 `)]),d("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[B("&.transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),d("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),d("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[B("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),B("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),B("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),B("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),B("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),d("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[d("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),d("tabs-nav",[C("line-type",[U("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[U("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[U("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Ht("disabled",[B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),d("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),C("left, right",[d("tabs-wrapper",`
 flex-direction: column;
 `,[d("tabs-tab-wrapper",`
 flex-direction: column;
 `,[d("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),d("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),C("left",[d("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),C("right",[d("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),C("bottom",[d("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),Bn=Object.assign(Object.assign({},se.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ln=M({name:"Tabs",props:Bn,setup(e,{slots:n}){var s,i,r,b;const{mergedClsPrefixRef:o,inlineThemeDisabled:l}=Me(e),f=se("Tabs","-tabs",Wn,Ut,e,o),h=W(null),R=W(null),x=W(null),y=W(null),$=W(null),T=W(!0),_=W(!0),w=ve(e,["labelSize","size"]),m=ve(e,["activeName","value"]),g=W((i=(s=m.value)!==null&&s!==void 0?s:e.defaultValue)!==null&&i!==void 0?i:n.default?(b=(r=ie(n.default())[0])===null||r===void 0?void 0:r.props)===null||b===void 0?void 0:b.name:null),P=Vt(m,g),D={id:0},J=j(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});le(P,()=>{D.id=0,V(),we()});function k(){var t;const{value:a}=P;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function I(t){if(e.type==="card")return;const{value:a}=R;if(a&&t){const u=`${o.value}-tabs-bar--disabled`,{barWidth:p,placement:O}=e;if(t.dataset.disabled==="true"?a.classList.add(u):a.classList.remove(u),["top","bottom"].includes(O)){if(F(["top","maxHeight","height"]),typeof p=="number"&&t.offsetWidth>=p){const E=Math.floor((t.offsetWidth-p)/2)+t.offsetLeft;a.style.left=`${E}px`,a.style.maxWidth=`${p}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(F(["left","maxWidth","width"]),typeof p=="number"&&t.offsetHeight>=p){const E=Math.floor((t.offsetHeight-p)/2)+t.offsetTop;a.style.top=`${E}px`,a.style.maxHeight=`${p}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function F(t){const{value:a}=R;if(a)for(const u of t)a.style[u]=""}function V(){if(e.type==="card")return;const t=k();t&&I(t)}function we(t){var a;const u=(a=$.value)===null||a===void 0?void 0:a.$el;if(!u)return;const p=k();if(!p)return;const{scrollLeft:O,offsetWidth:E}=u,{offsetLeft:Y,offsetWidth:ee}=p;O>Y?u.scrollTo({top:0,left:Y,behavior:"smooth"}):Y+ee>O+E&&u.scrollTo({top:0,left:Y+ee-E,behavior:"smooth"})}const Z=W(null);let re=0,H=null;function Ue(t){const a=Z.value;if(a){re=t.getBoundingClientRect().height;const u=`${re}px`,p=()=>{a.style.height=u,a.style.maxHeight=u};H?(p(),H(),H=null):H=p}}function Ve(t){const a=Z.value;if(a){const u=t.getBoundingClientRect().height,p=()=>{document.body.offsetHeight,a.style.maxHeight=`${u}px`,a.style.height=`${Math.max(re,u)}px`};H?(H(),H=null,p()):H=p}}function Ge(){const t=Z.value;t&&(t.style.maxHeight="",t.style.height="")}const Ce={value:[]},_e=W("next");function Xe(t){const a=P.value;let u="next";for(const p of Ce.value){if(p===a)break;if(p===t){u="prev";break}}_e.value=u,Ye(t)}function Ye(t){const{onActiveNameChange:a,onUpdateValue:u,"onUpdate:value":p}=e;a&&te(a,t),u&&te(u,t),p&&te(p,t),g.value=t}function Ke(t){const{onClose:a}=e;a&&te(a,t)}function $e(){const{value:t}=R;if(!t)return;const a="transition-disabled";t.classList.add(a),V(),t.classList.remove(a)}let ke=0;function qe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ke===t.contentRect.width)return;ke=t.contentRect.width;const{type:u}=e;(u==="line"||u==="bar")&&$e(),u!=="segment"&&oe((a=$.value)===null||a===void 0?void 0:a.$el)}const Je=be(qe,64);le([()=>e.justifyContent,()=>e.size],()=>{de(()=>{const{type:t}=e;(t==="line"||t==="bar")&&$e()})});const Q=W(!1);function Ze(t){var a;const{target:u,contentRect:{width:p}}=t,O=u.parentElement.offsetWidth;if(!Q.value)O<p&&(Q.value=!0);else{const{value:E}=y;if(!E)return;O-p>E.$el.offsetWidth&&(Q.value=!1)}oe((a=$.value)===null||a===void 0?void 0:a.$el)}const Qe=be(Ze,64);function et(){const{onAdd:t}=e;t&&t(),de(()=>{const a=k(),{value:u}=$;!a||!u||u.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function oe(t){if(!t)return;const{scrollLeft:a,scrollWidth:u,offsetWidth:p}=t;T.value=a<=0,_.value=a+p>=u}const tt=be(t=>{oe(t.target)},64);Gt(ye,{triggerRef:G(e,"trigger"),tabStyleRef:G(e,"tabStyle"),paneClassRef:G(e,"paneClass"),paneStyleRef:G(e,"paneStyle"),mergedClsPrefixRef:o,typeRef:G(e,"type"),closableRef:G(e,"closable"),valueRef:P,tabChangeIdRef:D,onBeforeLeaveRef:G(e,"onBeforeLeave"),activateTab:Xe,handleClose:Ke,handleAdd:et}),Xt(()=>{V(),we()}),Yt(()=>{const{value:t}=x;if(!t||["left","right"].includes(e.placement))return;const{value:a}=o,u=`${a}-tabs-nav-scroll-wrapper--shadow-before`,p=`${a}-tabs-nav-scroll-wrapper--shadow-after`;T.value?t.classList.remove(u):t.classList.add(u),_.value?t.classList.remove(p):t.classList.add(p)});const Se=W(null);le(P,()=>{if(e.type==="segment"){const t=Se.value;t&&de(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const nt={syncBarPosition:()=>{V()}},ze=j(()=>{const{value:t}=w,{type:a}=e,u={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],p=`${t}${u}`,{self:{barColor:O,closeIconColor:E,closeIconColorHover:Y,closeIconColorPressed:ee,tabColor:at,tabBorderColor:st,paneTextColor:rt,tabFontWeight:ot,tabBorderRadius:it,tabFontWeightActive:lt,colorSegment:dt,fontWeightStrong:ct,tabColorSegment:ft,closeSize:ut,closeIconSize:bt,closeColorHover:pt,closeColorPressed:vt,closeBorderRadius:ht,[N("panePadding",t)]:mt,[N("tabPadding",p)]:gt,[N("tabPaddingVertical",p)]:xt,[N("tabGap",p)]:yt,[N("tabTextColor",a)]:wt,[N("tabTextColorActive",a)]:Ct,[N("tabTextColorHover",a)]:_t,[N("tabTextColorDisabled",a)]:$t,[N("tabFontSize",t)]:kt},common:{cubicBezierEaseInOut:St}}=f.value;return{"--n-bezier":St,"--n-color-segment":dt,"--n-bar-color":O,"--n-tab-font-size":kt,"--n-tab-text-color":wt,"--n-tab-text-color-active":Ct,"--n-tab-text-color-disabled":$t,"--n-tab-text-color-hover":_t,"--n-pane-text-color":rt,"--n-tab-border-color":st,"--n-tab-border-radius":it,"--n-close-size":ut,"--n-close-icon-size":bt,"--n-close-color-hover":pt,"--n-close-color-pressed":vt,"--n-close-border-radius":ht,"--n-close-icon-color":E,"--n-close-icon-color-hover":Y,"--n-close-icon-color-pressed":ee,"--n-tab-color":at,"--n-tab-font-weight":ot,"--n-tab-font-weight-active":lt,"--n-tab-padding":gt,"--n-tab-padding-vertical":xt,"--n-tab-gap":yt,"--n-pane-padding":mt,"--n-font-weight-strong":ct,"--n-tab-color-segment":ft}}),X=l?De("tabs",j(()=>`${w.value[0]}${e.type[0]}`),ze,e):void 0;return Object.assign({mergedClsPrefix:o,mergedValue:P,renderedNames:new Set,tabsRailElRef:Se,tabsPaneWrapperRef:Z,tabsElRef:h,barElRef:R,addTabInstRef:y,xScrollInstRef:$,scrollWrapperElRef:x,addTabFixed:Q,tabWrapperStyle:J,handleNavResize:Je,mergedSize:w,handleScroll:tt,handleTabsResize:Qe,cssVars:l?void 0:ze,themeClass:X==null?void 0:X.themeClass,animationDirection:_e,renderNameListRef:Ce,onAnimationBeforeLeave:Ue,onAnimationEnter:Ve,onAnimationAfterEnter:Ge,onRender:X==null?void 0:X.onRender},nt)},render(){const{mergedClsPrefix:e,type:n,placement:s,addTabFixed:i,addable:r,mergedSize:b,renderNameListRef:o,onRender:l,$slots:{default:f,prefix:h,suffix:R}}=this;l==null||l();const x=f?ie(f()).filter(g=>g.type.__TAB_PANE__===!0):[],y=f?ie(f()).filter(g=>g.type.__TAB__===!0):[],$=!y.length,T=n==="card",_=n==="segment",w=!T&&!_&&this.justifyContent;o.value=[];const m=()=>{const g=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},w?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),$?x.map((P,D)=>(o.value.push(P.props.name),pe(c(xe,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:D!==0&&(!w||w==="center"||w==="start"||w==="end")}),P.children?{default:P.children.tab}:void 0)))):y.map((P,D)=>(o.value.push(P.props.name),pe(D!==0&&!w?Oe(P):P))),!i&&r&&T?Ne(r,($?x.length:y.length)!==0):null,w?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T&&r?c(Pe,{onResize:this.handleTabsResize},{default:()=>g}):g,T?c("div",{class:`${e}-tabs-pad`}):null,T?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${b}-size`,w&&`${e}-tabs--flex`,`${e}-tabs--${s}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${s}`,`${e}-tabs-nav`]},Te(h,g=>g&&c("div",{class:`${e}-tabs-nav__prefix`},g)),_?c("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},$?x.map((g,P)=>(o.value.push(g.props.name),c(xe,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:P!==0}),g.children?{default:g.children.tab}:void 0))):y.map((g,P)=>(o.value.push(g.props.name),P===0?g:Oe(g)))):c(Pe,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(s)?c(cn,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:m}):c("div",{class:`${e}-tabs-nav-y-scroll`},m()))}),i&&r&&T?Ne(r,!0):null,Te(R,g=>g&&c("div",{class:`${e}-tabs-nav__suffix`},g))),$&&(this.animated?c("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Ie(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ie(x,this.mergedValue,this.renderedNames)))}});function Ie(e,n,s,i,r,b,o){const l=[];return e.forEach(f=>{const{name:h,displayDirective:R,"display-directive":x}=f.props,y=T=>R===T||x===T,$=n===h;if(f.key!==void 0&&(f.key=h),$||y("show")||y("show:lazy")&&s.has(h)){s.has(h)||s.add(h);const T=!y("if");l.push(T?Kt(f,[[qt,$]]):f)}}),o?c(Jt,{name:`${o}-transition`,onBeforeLeave:i,onEnter:r,onAfterEnter:b},{default:()=>l}):l}function Ne(e,n){return c(xe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Oe(e){const n=Zt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function pe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const An={class:"p-4 space-y-5 min-h-[200px]"},En={class:"space-y-6"},jn={class:"flex items-center space-x-4"},In={class:"flex-shrink-0 w-[100px]"},Nn={class:"flex-1"},On={class:"flex items-center space-x-4"},Mn={class:"flex-shrink-0 w-[100px]"},Dn={class:"w-[200px]"},Fn={class:"flex items-center space-x-4"},Hn={class:"flex-shrink-0 w-[100px]"},Un={class:"flex-1"},Vn={class:"flex items-center space-x-4"},Gn={class:"flex-shrink-0 w-[100px]"},Xn={class:"flex items-center space-x-4"},Yn={class:"flex-shrink-0 w-[100px]"},Kn={class:"flex items-center space-x-4"},qn=["onClick"],Jn={class:"text-xl"},Zn={class:"flex items-center space-x-4"},Qn={class:"flex-shrink-0 w-[100px]"},ea={class:"flex items-center space-x-4"},ta=["onClick"],na={class:"text-sm"},aa=M({__name:"General",emits:["update"],setup(e,{emit:n}){const s=Qt(),i=en(),r=tn(),b=j(()=>s.theme),o=j(()=>i.userInfo),l=W(o.value.avatar??""),f=W(o.value.name??""),h=W(o.value.description??""),R=j({get(){return s.language},set(_){s.setLanguage(_)}}),x=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],y=[{label:"中文",key:"zh-CN",value:"zh-CN"},{label:"English",key:"en-US",value:"en-US"}];function $(_){i.updateUserInfo(_),r.success(Le("common.success"))}function T(){i.resetUserInfo(),r.success(Le("common.success")),n("update")}return(_,w)=>(q(),ce("div",An,[v("div",En,[v("div",jn,[v("span",In,z(_.$t("setting.avatarLink")),1),v("div",Nn,[L(S(fe),{value:l.value,"onUpdate:value":w[0]||(w[0]=m=>l.value=m),placeholder:""},null,8,["value"])]),L(S(ne),{size:"tiny",text:"",type:"primary",onClick:w[1]||(w[1]=m=>$({avatar:l.value}))},{default:A(()=>[K(z(_.$t("common.save")),1)]),_:1})]),v("div",On,[v("span",Mn,z(_.$t("setting.name")),1),v("div",Dn,[L(S(fe),{value:f.value,"onUpdate:value":w[2]||(w[2]=m=>f.value=m),placeholder:""},null,8,["value"])]),L(S(ne),{size:"tiny",text:"",type:"primary",onClick:w[3]||(w[3]=m=>$({name:f.value}))},{default:A(()=>[K(z(_.$t("common.save")),1)]),_:1})]),v("div",Fn,[v("span",Hn,z(_.$t("setting.description")),1),v("div",Un,[L(S(fe),{value:h.value,"onUpdate:value":w[4]||(w[4]=m=>h.value=m),placeholder:""},null,8,["value"])]),L(S(ne),{size:"tiny",text:"",type:"primary",onClick:w[5]||(w[5]=m=>$({description:h.value}))},{default:A(()=>[K(z(_.$t("common.save")),1)]),_:1})]),v("div",Vn,[v("span",Gn,z(_.$t("setting.resetUserInfo")),1),L(S(ne),{text:"",type:"primary",onClick:T},{default:A(()=>[K(z(_.$t("common.reset")),1)]),_:1})]),v("div",Xn,[v("span",Yn,z(_.$t("setting.theme")),1),v("div",Kn,[(q(),ce(he,null,We(x,m=>v("a",{key:m.key,class:Be(["flex items-center justify-center h-8 px-4 border rounded-md cursor-pointer dark:border-neutral-700",m.key===S(b)&&["bg-[#4ca85e]","border-[#4ca85e]","text-white"]]),onClick:g=>S(s).setTheme(m.key)},[v("span",Jn,[L(S(me),{icon:m.icon},null,8,["icon"])])],10,qn)),64))])]),v("div",Zn,[v("span",Qn,z(_.$t("setting.language")),1),v("div",ea,[(q(),ce(he,null,We(y,m=>v("a",{key:m.key,class:Be(["flex items-center justify-center h-8 px-4 border rounded-md cursor-pointer dark:border-neutral-700",m.key===S(R)&&["bg-[#4ca85e]","border-[#4ca85e]","text-white"]]),onClick:g=>S(s).setLanguage(m.key)},[v("span",na,z(m.label),1)],10,ta)),64))])])])]))}}),sa="chatgpt-web",ra="2.9.1",oa="ChatGPT Web",ia="ChenZhaoYu <chenzhaoyu1994@gmail.com>",la=["chatgpt-web","chatgpt","chatbot","vue"],da={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},ca={"@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",marked:"^4.2.12","naive-ui":"^2.34.3",pinia:"^2.0.32",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},fa={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/marked":"^4.0.8","@types/node":"^18.14.4","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.1.3",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.1.4","vue-tsc":"^1.2.0"},ua={name:sa,version:ra,private:!1,description:oa,author:ia,keywords:la,scripts:da,dependencies:ca,devDependencies:fa,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},ba={class:"p-4 space-y-4"},pa={class:"text-xl font-bold"},va=v("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[v("p",null,[K(" 此项目开源于 "),v("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," Github "),K(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),v("p",null," 如果你觉得此项目对你有帮助，请在 Github 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),ha=M({__name:"About",setup(e){const n=W(!1),s=W();async function i(){try{n.value=!0;const{data:r}=await ln();s.value=r}finally{n.value=!1}}return nn(()=>{i()}),(r,b)=>(q(),ge(S(Tn),{show:n.value},{default:A(()=>{var o,l,f,h;return[v("div",ba,[v("h2",pa," Version - "+z(S(ua).version),1),va,v("p",null,z(r.$t("setting.api"))+"："+z(((o=s.value)==null?void 0:o.apiModel)??"-"),1),v("p",null,z(r.$t("setting.reverseProxy"))+"："+z(((l=s.value)==null?void 0:l.reverseProxy)??"-"),1),v("p",null,z(r.$t("setting.timeout"))+"："+z(((f=s.value)==null?void 0:f.timeoutMs)??"-"),1),v("p",null,z(r.$t("setting.socks"))+"："+z(((h=s.value)==null?void 0:h.socksProxy)??"-"),1)])]}),_:1},8,["show"]))}}),ma={class:"ml-2"},ga={class:"min-h-[100px]"},xa={class:"ml-2"},Ca=M({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:n}){const s=e,i=W("General"),r=W(!1),b=j({get(){return s.visible},set(l){n("update:visible",l)}});function o(){r.value=!0,setTimeout(()=>{r.value=!1},0)}return(l,f)=>(q(),ge(S(on),{show:S(b),"onUpdate:show":f[1]||(f[1]=h=>rn(b)?b.value=h:null),"auto-focus":!1},{default:A(()=>[L(S(an),{role:"dialog","aria-modal":"true",bordered:!1,style:{width:"100%","max-width":"640px"}},{default:A(()=>[L(S(Ln),{value:i.value,"onUpdate:value":f[0]||(f[0]=h=>i.value=h),type:"line",animated:""},{default:A(()=>[L(S(je),{name:"General",tab:"General"},{tab:A(()=>[L(S(me),{class:"text-lg",icon:"ri:file-user-line"}),v("span",ma,z(l.$t("setting.general")),1)]),default:A(()=>[v("div",ga,[r.value?sn("",!0):(q(),ge(aa,{key:0,onUpdate:o}))])]),_:1}),L(S(je),{name:"Config",tab:"Config"},{tab:A(()=>[L(S(me),{class:"text-lg",icon:"ri:list-settings-line"}),v("span",xa,z(l.$t("setting.config")),1)]),default:A(()=>[L(ha)]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["show"]))}});export{Ca as default};
