(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2866)}])},2866:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return tF}});var n=r(5893),a=r(7294),i=r.t(a,2),o=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=Math.abs,l=String.fromCharCode,c=Object.assign;function u(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function p(e,t){return 0|e.charCodeAt(t)}function d(e,t,r){return e.slice(t,r)}function m(e){return e.length}function h(e,t){return t.push(e),e}var g=1,y=1,b=0,x=0,v=0,k="";function w(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:g,column:y,length:o,return:""}}function $(e,t){return c(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function A(){return v=x<b?p(k,x++):0,y++,10===v&&(y=1,g++),v}function O(){return p(k,x)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return g=y=1,b=m(k=e),x=0,[]}function C(e){var t,r;return(t=x-1,r=function e(t){for(;A();)switch(v){case t:return x;case 34:case 39:34!==t&&39!==t&&e(v);break;case 40:41===t&&e(t);break;case 92:A()}return x}(91===e?e+2:40===e?e+1:e),d(k,t,r)).trim()}var E="-ms-",j="-moz-",_="-webkit-",P="comm",M="rule",R="decl",I="@keyframes";function B(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function K(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case R:return e.return=e.return||e.value;case P:return"";case I:return e.return=e.value+"{"+B(e.children,n)+"}";case M:e.value=e.props.join(",")}return m(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function z(e,t,r,n,a,i,o,l,c,f,p){for(var m=a-1,h=0===a?i:[""],g=h.length,y=0,b=0,x=0;y<n;++y)for(var v=0,k=d(e,m+1,m=s(b=o[y])),$=e;v<g;++v)($=(b>0?h[v]+" "+k:u(k,/&\f/g,h[v])).trim())&&(c[x++]=$);return w(e,t,r,0===a?M:l,c,f,p)}function N(e,t,r,n){return w(e,t,r,R,d(e,0,n),d(e,n+1,-1),n)}var L=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!S(a);)A();return d(k,e,x)},W=function(e,t){var r=-1,n=44;do switch(S(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=L(x-1,t,r);break;case 2:e[r]+=C(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=l(n)}while(n=A());return e},G=function(e,t){var r;return r=W(T(e),t),k="",r},F=new WeakMap,H=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||F.get(r))&&!n){F.set(e,!0);for(var a=[],i=G(t,a),o=r.props,s=0,l=0;s<i.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}},X=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},Y=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case R:e.return=function e(t,r){switch(45^p(t,0)?(((r<<2^p(t,0))<<2^p(t,1))<<2^p(t,2))<<2^p(t,3):0){case 5103:return _+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return _+t+j+t+E+t+t;case 6828:case 4268:return _+t+E+t+t;case 6165:return _+t+E+"flex-"+t+t;case 5187:return _+t+u(t,/(\w+).+(:[^]+)/,_+"box-$1$2"+E+"flex-$1$2")+t;case 5443:return _+t+E+"flex-item-"+u(t,/flex-|-self/,"")+t;case 4675:return _+t+E+"flex-line-pack"+u(t,/align-content|flex-|-self/,"")+t;case 5548:return _+t+E+u(t,"shrink","negative")+t;case 5292:return _+t+E+u(t,"basis","preferred-size")+t;case 6060:return _+"box-"+u(t,"-grow","")+_+t+E+u(t,"grow","positive")+t;case 4554:return _+u(t,/([^-])(transform)/g,"$1"+_+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+E+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_+t+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,_+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(t)-1-r>6)switch(p(t,r+1)){case 109:if(45!==p(t,r+4))break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+j+(108==p(t,r+3)?"$3":"$2-$3"))+t;case 115:return~f(t,"stretch")?e(u(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==p(t,r+1))break;case 6444:switch(p(t,m(t)-3-(~f(t,"!important")&&10))){case 107:return u(t,":",":"+_)+t;case 101:return u(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+_+(45===p(t,14)?"inline-":"")+"box$3$1"+_+"$2$3$1"+E+"$2box$3")+t}break;case 5936:switch(p(t,r+11)){case 114:return _+t+E+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return _+t+E+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return _+t+E+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return _+t+E+t+t}return t}(e.value,e.length);break;case I:return B([$(e,{value:u(e.value,"@","@"+_)})],n);case M:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return B([$(e,{props:[u(t,/:(read-\w+)/,":"+j+"$1")]})],n);case"::placeholder":return B([$(e,{props:[u(t,/:(plac\w+)/,":"+_+"input-$1")]}),$(e,{props:[u(t,/:(plac\w+)/,":"+j+"$1")]}),$(e,{props:[u(t,/:(plac\w+)/,E+"input-$1")]})],n)}return""}).join("")}}];i.useInsertionEffect&&i.useInsertionEffect||a.useLayoutEffect,a.createContext("undefined"!=typeof HTMLElement?function(e){var t,r,n,a,i,s=e.key;if("css"===s){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var b=e.stylisPlugins||Y,$={},E=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)$[t[r]]=!0;E.push(e)});var j=(r=(t=[H,X].concat(b,[K,(n=function(e){i.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,a,i){for(var o="",s=0;s<r;s++)o+=t[s](e,n,a,i)||"";return o}),_=function(e){var t,r;return B((r=function e(t,r,n,a,i,o,s,c,b){for(var $,T=0,E=0,j=s,_=0,M=0,R=0,I=1,B=1,K=1,L=0,W="",G=i,F=o,H=a,X=W;B;)switch(R=L,L=A()){case 40:if(108!=R&&58==p(X,j-1)){-1!=f(X+=u(C(L),"&","&\f"),"&\f")&&(K=-1);break}case 34:case 39:case 91:X+=C(L);break;case 9:case 10:case 13:case 32:X+=function(e){for(;v=O();)if(v<33)A();else break;return S(e)>2||S(v)>3?"":" "}(R);break;case 92:X+=function(e,t){for(var r;--t&&A()&&!(v<48)&&!(v>102)&&(!(v>57)||!(v<65))&&(!(v>70)||!(v<97)););return r=x+(t<6&&32==O()&&32==A()),d(k,e,r)}(x-1,7);continue;case 47:switch(O()){case 42:case 47:h(w($=function(e,t){for(;A();)if(e+v===57)break;else if(e+v===84&&47===O())break;return"/*"+d(k,t,x-1)+"*"+l(47===e?e:A())}(A(),x),r,n,P,l(v),d($,2,-2),0),b);break;default:X+="/"}break;case 123*I:c[T++]=m(X)*K;case 125*I:case 59:case 0:switch(L){case 0:case 125:B=0;case 59+E:-1==K&&(X=u(X,/\f/g,"")),M>0&&m(X)-j&&h(M>32?N(X+";",a,n,j-1):N(u(X," ","")+";",a,n,j-2),b);break;case 59:X+=";";default:if(h(H=z(X,r,n,T,E,i,c,W,G=[],F=[],j),o),123===L){if(0===E)e(X,r,H,H,G,o,j,c,F);else switch(99===_&&110===p(X,3)?100:_){case 100:case 108:case 109:case 115:e(t,H,H,a&&h(z(t,H,H,0,0,i,c,W,i,G=[],j),F),i,F,j,c,a?G:F);break;default:e(X,H,H,H,[""],F,0,c,F)}}}T=E=M=0,I=K=1,W=X="",j=s;break;case 58:j=1+m(X),M=R;default:if(I<1){if(123==L)--I;else if(125==L&&0==I++&&125==(v=x>0?p(k,--x):0,y--,10===v&&(y=1,g--),v))continue}switch(X+=l(L),L*I){case 38:K=E>0?1:(X+="\f",-1);break;case 44:c[T++]=(m(X)-1)*K,K=1;break;case 64:45===O()&&(X+=C(A())),_=O(),E=j=m(W=X+=function(e){for(;!S(O());)A();return d(k,e,x)}(x)),L++;break;case 45:45===R&&2==m(X)&&(I=0)}}return o}("",null,null,null,[""],t=T(t=e),0,[0],t),k="",r),j)},M={key:s,sheet:new o({key:s,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:$,registered:{},insert:function(e,t,r,n){i=r,_(e?e+"{"+t.styles+"}":t.styles),n&&(M.inserted[t.name]=!0)}};return M.sheet.hydrate(E),M}({key:"css"}):null).Provider;var U=a.createContext({}),D=function(e=null){let t=a.useContext(U);return t&&0!==Object.keys(t).length?t:e};function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let V="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,J=i.useSyncExternalStore;function Q(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}let Z=a.createContext(null);function ee(){return a.useContext(Z)}var et="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",er=function(e){let{children:t,theme:r}=e,i=ee(),o=a.useMemo(()=>{let e=null===i?r:"function"==typeof r?r(i):q({},i,r);return null!=e&&(e[et]=null!==i),e},[r,i]);return(0,n.jsx)(Z.Provider,{value:o,children:t})};let en={};function ea(e,t,r,n=!1){return a.useMemo(()=>{let a=e&&t[e]||t;if("function"==typeof r){let i=r(a),o=e?q({},t,{[e]:i}):i;return n?()=>o:o}return e?q({},t,{[e]:r}):q({},t,r)},[e,t,r,n])}var ei=function(e){let{children:t,theme:r,themeId:a}=e,i=D(en),o=ee()||en,s=ea(a,i,r),l=ea(a,o,r,!0);return(0,n.jsx)(er,{theme:l,children:(0,n.jsx)(U.Provider,{value:s,children:t})})},eo="$$material";let es=["theme"];function el(e){let{theme:t}=e,r=Q(e,es),a=t[eo];return(0,n.jsx)(ei,q({},r,{themeId:a?eo:void 0,theme:a||t}))}function ec(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function eu(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ef(e,t,r={clone:!0}){let n=r.clone?q({},e):e;return eu(e)&&eu(t)&&Object.keys(t).forEach(a=>{"__proto__"!==a&&(eu(t[a])&&a in e&&eu(e[a])?n[a]=ef(e[a],t[a],r):r.clone?n[a]=eu(t[a])?function e(t){if(!eu(t))return t;let r={};return Object.keys(t).forEach(n=>{r[n]=e(t[n])}),r}(t[a]):t[a]:n[a]=t[a])}),n}r(3596);let ep=["values","unit","step"],ed=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>q({},e,{[t.key]:t.val}),{})};var em={borderRadius:4};let eh={xs:0,sm:600,md:900,lg:1200,xl:1536},eg={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${eh[e]}px)`};function ey(e,t,r){let n=e.theme||{};if(Array.isArray(t)){let e=n.breakpoints||eg;return t.reduce((n,a,i)=>(n[e.up(e.keys[i])]=r(t[i]),n),{})}if("object"==typeof t){let e=n.breakpoints||eg;return Object.keys(t).reduce((n,a)=>(-1!==Object.keys(e.values||eh).indexOf(a)?n[e.up(a)]=r(t[a],a):n[a]=t[a],n),{})}return r(t)}function eb(e){if("string"!=typeof e)throw Error(ec(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ex(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){let r=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=r)return r}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function ev(e,t,r,n=r){let a;return a="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:ex(e,r)||n,t&&(a=t(a,n,e)),a}var ek=function(e){let{prop:t,cssProperty:r=e.prop,themeKey:n,transform:a}=e,i=e=>{if(null==e[t])return null;let i=e[t],o=ex(e.theme,n)||{};return ey(e,i,e=>{let n=ev(o,a,e);return(e===n&&"string"==typeof e&&(n=ev(o,a,`${t}${"default"===e?"":eb(e)}`,e)),!1===r)?n:{[r]:n}})};return i.propTypes={},i.filterProps=[t],i},ew=function(e,t){return t?ef(e,t,{clone:!1}):e};let e$={m:"margin",p:"padding"},eA={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},eO={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},eS=function(e){let t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}(e=>{if(e.length>2){if(!eO[e])return[e];e=eO[e]}let[t,r]=e.split(""),n=e$[t],a=eA[r]||"";return Array.isArray(a)?a.map(e=>n+e):[n+a]}),eT=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],eC=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],eE=[...eT,...eC];function ej(e,t,r,n){var a;let i=null!=(a=ex(e,t,!1))?a:r;return"number"==typeof i?e=>"string"==typeof e?e:i*e:Array.isArray(i)?e=>"string"==typeof e?e:i[e]:"function"==typeof i?i:()=>void 0}function e_(e){return ej(e,"spacing",8,"spacing")}function eP(e,t){if("string"==typeof t||null==t)return t;let r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}function eM(e,t){let r=e_(e.theme);return Object.keys(e).map(n=>(function(e,t,r,n){var a;if(-1===t.indexOf(r))return null;let i=(a=eS(r),e=>a.reduce((t,r)=>(t[r]=eP(n,e),t),{})),o=e[r];return ey(e,o,i)})(e,t,n,r)).reduce(ew,{})}function eR(e){return eM(e,eT)}function eI(e){return eM(e,eC)}function eB(e){return eM(e,eE)}eR.propTypes={},eR.filterProps=eT,eI.propTypes={},eI.filterProps=eC,eB.propTypes={},eB.filterProps=eE;var eK=function(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(r=>{e[r]=t}),e),{}),r=e=>Object.keys(e).reduce((r,n)=>t[n]?ew(r,t[n](e)):r,{});return r.propTypes={},r.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),r};function ez(e){return"number"!=typeof e?e:`${e}px solid`}function eN(e,t){return ek({prop:e,themeKey:"borders",transform:t})}let eL=eN("border",ez),eW=eN("borderTop",ez),eG=eN("borderRight",ez),eF=eN("borderBottom",ez),eH=eN("borderLeft",ez),eX=eN("borderColor"),eY=eN("borderTopColor"),eU=eN("borderRightColor"),eD=eN("borderBottomColor"),eq=eN("borderLeftColor"),eV=eN("outline",ez),eJ=eN("outlineColor"),eQ=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){let t=ej(e.theme,"shape.borderRadius",4,"borderRadius");return ey(e,e.borderRadius,e=>({borderRadius:eP(t,e)}))}return null};eQ.propTypes={},eQ.filterProps=["borderRadius"],eK(eL,eW,eG,eF,eH,eX,eY,eU,eD,eq,eQ,eV,eJ);let eZ=e=>{if(void 0!==e.gap&&null!==e.gap){let t=ej(e.theme,"spacing",8,"gap");return ey(e,e.gap,e=>({gap:eP(t,e)}))}return null};eZ.propTypes={},eZ.filterProps=["gap"];let e0=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){let t=ej(e.theme,"spacing",8,"columnGap");return ey(e,e.columnGap,e=>({columnGap:eP(t,e)}))}return null};e0.propTypes={},e0.filterProps=["columnGap"];let e1=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){let t=ej(e.theme,"spacing",8,"rowGap");return ey(e,e.rowGap,e=>({rowGap:eP(t,e)}))}return null};e1.propTypes={},e1.filterProps=["rowGap"];let e5=ek({prop:"gridColumn"}),e2=ek({prop:"gridRow"}),e4=ek({prop:"gridAutoFlow"}),e3=ek({prop:"gridAutoColumns"}),e6=ek({prop:"gridAutoRows"}),e8=ek({prop:"gridTemplateColumns"});function e9(e,t){return"grey"===t?t:e}function e7(e){return e<=1&&0!==e?`${100*e}%`:e}eK(eZ,e0,e1,e5,e2,e4,e3,e6,e8,ek({prop:"gridTemplateRows"}),ek({prop:"gridTemplateAreas"}),ek({prop:"gridArea"})),eK(ek({prop:"color",themeKey:"palette",transform:e9}),ek({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:e9}),ek({prop:"backgroundColor",themeKey:"palette",transform:e9}));let te=ek({prop:"width",transform:e7}),tt=e=>void 0!==e.maxWidth&&null!==e.maxWidth?ey(e,e.maxWidth,t=>{var r,n;let a=(null==(r=e.theme)||null==(r=r.breakpoints)||null==(r=r.values)?void 0:r[t])||eh[t];return a?(null==(n=e.theme)||null==(n=n.breakpoints)?void 0:n.unit)!=="px"?{maxWidth:`${a}${e.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:e7(t)}}):null;tt.filterProps=["maxWidth"];let tr=ek({prop:"minWidth",transform:e7}),tn=ek({prop:"height",transform:e7}),ta=ek({prop:"maxHeight",transform:e7}),ti=ek({prop:"minHeight",transform:e7});ek({prop:"size",cssProperty:"width",transform:e7}),ek({prop:"size",cssProperty:"height",transform:e7}),eK(te,tt,tr,tn,ta,ti,ek({prop:"boxSizing"}));var to={border:{themeKey:"borders",transform:ez},borderTop:{themeKey:"borders",transform:ez},borderRight:{themeKey:"borders",transform:ez},borderBottom:{themeKey:"borders",transform:ez},borderLeft:{themeKey:"borders",transform:ez},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ez},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:eQ},color:{themeKey:"palette",transform:e9},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:e9},backgroundColor:{themeKey:"palette",transform:e9},p:{style:eI},pt:{style:eI},pr:{style:eI},pb:{style:eI},pl:{style:eI},px:{style:eI},py:{style:eI},padding:{style:eI},paddingTop:{style:eI},paddingRight:{style:eI},paddingBottom:{style:eI},paddingLeft:{style:eI},paddingX:{style:eI},paddingY:{style:eI},paddingInline:{style:eI},paddingInlineStart:{style:eI},paddingInlineEnd:{style:eI},paddingBlock:{style:eI},paddingBlockStart:{style:eI},paddingBlockEnd:{style:eI},m:{style:eR},mt:{style:eR},mr:{style:eR},mb:{style:eR},ml:{style:eR},mx:{style:eR},my:{style:eR},margin:{style:eR},marginTop:{style:eR},marginRight:{style:eR},marginBottom:{style:eR},marginLeft:{style:eR},marginX:{style:eR},marginY:{style:eR},marginInline:{style:eR},marginInlineStart:{style:eR},marginInlineEnd:{style:eR},marginBlock:{style:eR},marginBlockStart:{style:eR},marginBlockEnd:{style:eR},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:eZ},rowGap:{style:e1},columnGap:{style:e0},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:e7},maxWidth:{style:tt},minWidth:{transform:e7},height:{transform:e7},maxHeight:{transform:e7},minHeight:{transform:e7},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};let ts=function(){function e(e,t,r,n){let a={[e]:t,theme:r},i=n[e];if(!i)return{[e]:t};let{cssProperty:o=e,themeKey:s,transform:l,style:c}=i;if(null==t)return null;if("typography"===s&&"inherit"===t)return{[e]:t};let u=ex(r,s)||{};return c?c(a):ey(a,t,t=>{let r=ev(u,l,t);return(t===r&&"string"==typeof t&&(r=ev(u,l,`${e}${"default"===t?"":eb(t)}`,t)),!1===o)?r:{[o]:r}})}return function t(r){var n;let{sx:a,theme:i={}}=r||{};if(!a)return null;let o=null!=(n=i.unstable_sxConfig)?n:to;function s(r){var n;let a=r;if("function"==typeof r)a=r(i);else if("object"!=typeof r)return r;if(!a)return null;let s=function(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce((t,r)=>(t[e.up(r)]={},t),{}))||{}}(i.breakpoints),l=Object.keys(s),c=s;return Object.keys(a).forEach(r=>{var n;let s="function"==typeof(n=a[r])?n(i):n;if(null!=s){if("object"==typeof s){if(o[r])c=ew(c,e(r,s,i,o));else{let e=ey({theme:i},s,e=>({[r]:e}));(function(...e){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),r=new Set(t);return e.every(e=>r.size===Object.keys(e).length)})(e,s)?c[r]=t({sx:s,theme:i}):c=ew(c,e)}}else c=ew(c,e(r,s,i,o))}}),n=c,l.reduce((e,t)=>{let r=e[t];return r&&0!==Object.keys(r).length||delete e[t],e},n)}return Array.isArray(a)?a.map(s):s(a)}}();function tl(e,t){return this.vars&&"function"==typeof this.getColorSchemeSelector?{[this.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:this.palette.mode===e?t:{}}ts.filterProps=["sx"];let tc=["breakpoints","palette","spacing","shape"];var tu=function(e={},...t){let{breakpoints:r={},palette:n={},spacing:a,shape:i={}}=e,o=Q(e,tc),s=function(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,a=Q(e,ep),i=ed(t),o=Object.keys(i);function s(e){let n="number"==typeof t[e]?t[e]:e;return`@media (min-width:${n}${r})`}function l(e){let a="number"==typeof t[e]?t[e]:e;return`@media (max-width:${a-n/100}${r})`}function c(e,a){let i=o.indexOf(a);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==i&&"number"==typeof t[o[i]]?t[o[i]]:a)-n/100}${r})`}return q({keys:o,values:i,up:s,down:l,between:c,only:function(e){return o.indexOf(e)+1<o.length?c(e,o[o.indexOf(e)+1]):s(e)},not:function(e){let t=o.indexOf(e);return 0===t?s(o[1]):t===o.length-1?l(o[t]):c(e,o[o.indexOf(e)+1]).replace("@media","@media not all and")},unit:r},a)}(r),l=function(e=8){if(e.mui)return e;let t=e_({spacing:e}),r=(...e)=>(0===e.length?[1]:e).map(e=>{let r=t(e);return"number"==typeof r?`${r}px`:r}).join(" ");return r.mui=!0,r}(a),c=ef({breakpoints:s,direction:"ltr",components:{},palette:q({mode:"light"},n),spacing:l,shape:q({},em,i)},o);return c.applyStyles=tl,(c=t.reduce((e,t)=>ef(e,t),c)).unstable_sxConfig=q({},to,null==o?void 0:o.unstable_sxConfig),c.unstable_sx=function(e){return ts({sx:e,theme:this})},c};function tf(e,t=0,r=1){return function(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}(e,t,r)}function tp(e){let t;if(e.type)return e;if("#"===e.charAt(0))return tp(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let r=e.indexOf("("),n=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw Error(ec(9,e));let a=e.substring(r+1,e.length-1);if("color"===n){if(t=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error(ec(10,t))}else a=a.split(",");return{type:n,values:a=a.map(e=>parseFloat(e)),colorSpace:t}}function td(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function tm(e){let t="hsl"===(e=tp(e)).type||"hsla"===e.type?tp(function(e){let{values:t}=e=tp(e),r=t[0],n=t[1]/100,a=t[2]/100,i=n*Math.min(a,1-a),o=(e,t=(e+r/30)%12)=>a-i*Math.max(Math.min(t-3,9-t,1),-1),s="rgb",l=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(s+="a",l.push(t[3])),td({type:s,values:l})}(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}var th={black:"#000",white:"#fff"},tg={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ty={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},tb={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},tx={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},tv={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},tk={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},tw={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let t$=["mode","contrastThreshold","tonalOffset"],tA={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:th.white,default:th.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},tO={text:{primary:th.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:th.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function tS(e,t,r,n){let a=n.light||n,i=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=function(e,t){if(e=tp(e),t=tf(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return td(e)}(e.main,a):"dark"===t&&(e.dark=function(e,t){if(e=tp(e),t=tf(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return td(e)}(e.main,i)))}let tT=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],tC={textTransform:"uppercase"},tE='"Roboto", "Helvetica", "Arial", sans-serif';function tj(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let t_=["none",tj(0,2,1,-1,0,1,1,0,0,1,3,0),tj(0,3,1,-2,0,2,2,0,0,1,5,0),tj(0,3,3,-2,0,3,4,0,0,1,8,0),tj(0,2,4,-1,0,4,5,0,0,1,10,0),tj(0,3,5,-1,0,5,8,0,0,1,14,0),tj(0,3,5,-1,0,6,10,0,0,1,18,0),tj(0,4,5,-2,0,7,10,1,0,2,16,1),tj(0,5,5,-3,0,8,10,1,0,3,14,2),tj(0,5,6,-3,0,9,12,1,0,3,16,2),tj(0,6,6,-3,0,10,14,1,0,4,18,3),tj(0,6,7,-4,0,11,15,1,0,4,20,3),tj(0,7,8,-4,0,12,17,2,0,5,22,4),tj(0,7,8,-4,0,13,19,2,0,5,24,4),tj(0,7,9,-4,0,14,21,2,0,5,26,4),tj(0,8,9,-5,0,15,22,2,0,6,28,5),tj(0,8,10,-5,0,16,24,2,0,6,30,5),tj(0,8,11,-5,0,17,26,2,0,6,32,5),tj(0,9,11,-5,0,18,28,2,0,7,34,6),tj(0,9,12,-6,0,19,29,2,0,7,36,6),tj(0,10,13,-6,0,20,31,3,0,8,38,7),tj(0,10,13,-6,0,21,33,3,0,8,40,7),tj(0,10,14,-6,0,22,35,3,0,8,42,7),tj(0,11,14,-7,0,23,36,3,0,9,44,8),tj(0,11,15,-7,0,24,38,3,0,9,46,8)],tP=["duration","easing","delay"],tM={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},tR={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function tI(e){return`${Math.round(e)}ms`}function tB(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}var tK={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let tz=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];var tN=function(e={},...t){var r;let{mixins:n={},palette:a={},transitions:i={},typography:o={}}=e,s=Q(e,tz);if(e.vars)throw Error(ec(18));let l=function(e){let{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,a=Q(e,t$),i=e.primary||function(e="light"){return"dark"===e?{main:tv[200],light:tv[50],dark:tv[400]}:{main:tv[700],light:tv[400],dark:tv[800]}}(t),o=e.secondary||function(e="light"){return"dark"===e?{main:ty[200],light:ty[50],dark:ty[400]}:{main:ty[500],light:ty[300],dark:ty[700]}}(t),s=e.error||function(e="light"){return"dark"===e?{main:tb[500],light:tb[300],dark:tb[700]}:{main:tb[700],light:tb[400],dark:tb[800]}}(t),l=e.info||function(e="light"){return"dark"===e?{main:tk[400],light:tk[300],dark:tk[700]}:{main:tk[700],light:tk[500],dark:tk[900]}}(t),c=e.success||function(e="light"){return"dark"===e?{main:tw[400],light:tw[300],dark:tw[700]}:{main:tw[800],light:tw[500],dark:tw[900]}}(t),u=e.warning||function(e="light"){return"dark"===e?{main:tx[400],light:tx[300],dark:tx[700]}:{main:"#ed6c02",light:tx[500],dark:tx[900]}}(t);function f(e){return function(e,t){let r=tm(e),n=tm(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}(e,tO.text.primary)>=r?tO.text.primary:tA.text.primary}let p=({color:e,name:t,mainShade:r=500,lightShade:a=300,darkShade:i=700})=>{if(!(e=q({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw Error(ec(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw Error(ec(12,t?` (${t})`:"",JSON.stringify(e.main)));return tS(e,"light",a,n),tS(e,"dark",i,n),e.contrastText||(e.contrastText=f(e.main)),e};return ef(q({common:q({},th),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:s,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:c,name:"success"}),grey:tg,contrastThreshold:r,getContrastText:f,augmentColor:p,tonalOffset:n},{dark:tO,light:tA}[t]),a)}(a),c=tu(e),u=ef(c,{mixins:(r=c.breakpoints,q({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},n)),palette:l,shadows:t_.slice(),typography:function(e,t){let r="function"==typeof t?t(e):t,{fontFamily:n=tE,fontSize:a=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:f}=r,p=Q(r,tT),d=a/14,m=f||(e=>`${e/c*d}rem`),h=(e,t,r,a,i)=>q({fontFamily:n,fontWeight:e,fontSize:m(t),lineHeight:r},n===tE?{letterSpacing:`${Math.round(a/t*1e5)/1e5}em`}:{},i,u),g={h1:h(i,96,1.167,-1.5),h2:h(i,60,1.2,-.5),h3:h(o,48,1.167,0),h4:h(o,34,1.235,.25),h5:h(o,24,1.334,0),h6:h(s,20,1.6,.15),subtitle1:h(o,16,1.75,.15),subtitle2:h(s,14,1.57,.1),body1:h(o,16,1.5,.15),body2:h(o,14,1.43,.15),button:h(s,14,1.75,.4,tC),caption:h(o,12,1.66,.4),overline:h(o,12,2.66,1,tC),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ef(q({htmlFontSize:c,pxToRem:m,fontFamily:n,fontSize:a,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:l},g),p,{clone:!1})}(l,o),transitions:function(e){let t=q({},tM,e.easing),r=q({},tR,e.duration);return q({getAutoHeightDuration:tB,create:(e=["all"],n={})=>{let{duration:a=r.standard,easing:i=t.easeInOut,delay:o=0}=n;return Q(n,tP),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof a?a:tI(a)} ${i} ${"string"==typeof o?o:tI(o)}`).join(",")}},e,{easing:t,duration:r})}(i),zIndex:q({},tK)});return u=ef(u,s),(u=t.reduce((e,t)=>ef(e,t),u)).unstable_sxConfig=q({},to,null==s?void 0:s.unstable_sxConfig),u.unstable_sx=function(e){return ts({sx:e,theme:this})},u};let tL=e=>tN({palette:{mode:e,..."light"===e?{primary:{main:"#1877f2",contrastText:"#ffffff"},secondary:{main:"#eb0014",contrastText:"#ffffff"},error:{main:"#fa3c3c",contrastText:"#ffffff"},success:{main:"#42b72a",contrastText:"#ffffff"},background:{default:"#f0f2f5"},text:{primary:"#1c1e21",disabled:"#dddddd"},gradient:{main:"linear-gradient(to right, #1877f2, #0059b2)"}}:{primary:{main:"#007fff",contrastText:"#fafafa"},secondary:{main:"#eb0014",contrastText:"#fafafa"},error:{main:"#fa3c3c",contrastText:"#fafafa"},success:{main:"#42b72a",contrastText:"#fafafa"},background:{default:"#0d1117",paper:"#161b22"},text:{primary:"#fafafa",disabled:"rgba(250, 250, 250, 0.5)"},gradient:{main:"#66b2ff"}}},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},components:{MuiButton:{styleOverrides:{root:{borderRadius:Number.MAX_VALUE},sizeSmall:{padding:"4px 10px"},sizeMedium:{padding:"6px 16px"},sizeLarge:{padding:"8px 22px"}}},MuiDialog:{defaultProps:{style:{backdropFilter:"blur(2px)"}},styleOverrides:{paper:{borderRadius:"16px"}}},MuiFormHelperText:{defaultProps:{style:{lineHeight:1.2}}}}});var tW=r(1985),tG=r.n(tW);function tF(e){let{Component:t,pageProps:r}=e,i=function(e,t={}){let r=D(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:o=n?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:l=!1}=function(e){let{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?function e(t,r){let n=q({},r);return Object.keys(t).forEach(a=>{if(a.toString().match(/^(components|slots)$/))n[a]=q({},t[a],n[a]);else if(a.toString().match(/^(componentsProps|slotProps)$/)){let i=t[a]||{},o=r[a];n[a]={},o&&Object.keys(o)?i&&Object.keys(i)?(n[a]=q({},o),Object.keys(i).forEach(t=>{n[a][t]=e(i[t],o[t])})):n[a]=o:n[a]=i}else void 0===n[a]&&(n[a]=t[a])}),n}(t.components[r].defaultProps,n):n}({name:"MuiUseMediaQuery",props:t,theme:r}),c="function"==typeof e?e(r):e;return(void 0!==J?function(e,t,r,n,i){let o=a.useCallback(()=>t,[t]),s=a.useMemo(()=>{if(i&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return o},[o,e,n,i,r]),[l,c]=a.useMemo(()=>{if(null===r)return[o,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[o,r,e]);return J(c,l,s)}:function(e,t,r,n,i){let[o,s]=a.useState(()=>i&&r?r(e).matches:n?n(e).matches:t);return V(()=>{let t=!0;if(!r)return;let n=r(e),a=()=>{t&&s(n.matches)};return a(),n.addListener(a),()=>{t=!1,n.removeListener(a)}},[e,r]),o})(c=c.replace(/^@media( ?)/m,""),i,o,s,l)}("(prefers-color-scheme: dark)"),[o,s]=a.useState(i?"dark":"light");a.useEffect(()=>{s(i?"dark":"light")},[i]);let l=a.useMemo(()=>tL(o),[o]);return(0,n.jsx)(el,{theme:l,children:(0,n.jsx)("div",{className:tG().className,children:(0,n.jsx)(t,{...r})})})}},3596:function(){},1985:function(e){e.exports={style:{fontFamily:"'__Prompt_9c9c29', '__Prompt_Fallback_9c9c29'",fontStyle:"normal"},className:"__className_9c9c29"}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);