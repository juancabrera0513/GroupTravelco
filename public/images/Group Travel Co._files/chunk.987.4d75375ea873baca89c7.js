/*! For license information please see chunk.987.4d75375ea873baca89c7.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[987],{140:(e,t,n)=>{"use strict"
function r(e,t){return t=t||{},new Promise(function(n,r){var i=new XMLHttpRequest,o=[],s=[],a={},u=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return s},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}}
for(var c in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),s.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),n(u())},i.onerror=r,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(c,t.headers[c])
i.send(t.body||null)})}n.r(t),n.d(t,{default:()=>r})},283:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),n(624).__exportStar(n(8540),t)},485:(e,t,n)=>{var r="function"==typeof Map&&Map.prototype,i=Object.getOwnPropertyDescriptor&&r?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=r&&i&&"function"==typeof i.get?i.get:null,s=r&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,u=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,c=a&&u&&"function"==typeof u.get?u.get:null,l=a&&Set.prototype.forEach,f="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,h="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,d="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,g=Object.prototype.toString,y=Function.prototype.toString,m=String.prototype.match,v=String.prototype.slice,b=String.prototype.replace,w=String.prototype.toUpperCase,_=String.prototype.toLowerCase,S=RegExp.prototype.test,A=Array.prototype.concat,E=Array.prototype.join,C=Array.prototype.slice,O=Math.floor,I="function"==typeof BigInt?BigInt.prototype.valueOf:null,P=Object.getOwnPropertySymbols,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,k="function"==typeof Symbol&&"object"==typeof Symbol.iterator,x="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,M=Object.prototype.propertyIsEnumerable,U=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null)
function R(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||S.call(/e/,t))return t
var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
if("number"==typeof e){var r=e<0?-O(-e):O(e)
if(r!==e){var i=String(r),o=v.call(t,i.length+1)
return b.call(i,n,"$&_")+"."+b.call(b.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return b.call(t,n,"$&_")}var D=n(6973),j=D.custom,N=W(j)?j:null,L={__proto__:null,double:'"',single:"'"},F={__proto__:null,double:/(["\\])/g,single:/(['\\])/g}
function B(e,t,n){var r=n.quoteStyle||t,i=L[r]
return i+e+i}function H(e){return b.call(String(e),/"/g,"&quot;")}function q(e){return!x||!("object"==typeof e&&(x in e||void 0!==e[x]))}function V(e){return"[object Array]"===Y(e)&&q(e)}function K(e){return"[object RegExp]"===Y(e)&&q(e)}function W(e){if(k)return e&&"object"==typeof e&&e instanceof Symbol
if("symbol"==typeof e)return!0
if(!e||"object"!=typeof e||!T)return!1
try{return T.call(e),!0}catch(e){}return!1}e.exports=function e(t,n,r,i){var a=n||{}
if(G(a,"quoteStyle")&&!G(L,a.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"')
if(G(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`')
var u=!G(a,"customInspect")||a.customInspect
if("boolean"!=typeof u&&"symbol"!==u)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`")
if(G(a,"indent")&&null!==a.indent&&"\t"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`')
if(G(a,"numericSeparator")&&"boolean"!=typeof a.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`')
var g=a.numericSeparator
if(void 0===t)return"undefined"
if(null===t)return"null"
if("boolean"==typeof t)return t?"true":"false"
if("string"==typeof t)return Q(t,a)
if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0"
var w=String(t)
return g?R(t,w):w}if("bigint"==typeof t){var S=String(t)+"n"
return g?R(t,S):S}var O=void 0===a.depth?5:a.depth
if(void 0===r&&(r=0),r>=O&&O>0&&"object"==typeof t)return V(t)?"[Array]":"[Object]"
var P,j=function(e,t){var n
if("\t"===e.indent)n="\t"
else{if(!("number"==typeof e.indent&&e.indent>0))return null
n=E.call(Array(e.indent+1)," ")}return{base:n,prev:E.call(Array(t+1),n)}}(a,r)
if(void 0===i)i=[]
else if($(i,t)>=0)return"[Circular]"
function F(t,n,o){if(n&&(i=C.call(i)).push(n),o){var s={depth:a.depth}
return G(a,"quoteStyle")&&(s.quoteStyle=a.quoteStyle),e(t,s,r+1,i)}return e(t,a,r+1,i)}if("function"==typeof t&&!K(t)){var z=function(e){if(e.name)return e.name
var t=m.call(y.call(e),/^function\s*([\w$]+)/)
return t?t[1]:null}(t),J=ne(t,F)
return"[Function"+(z?": "+z:" (anonymous)")+"]"+(J.length>0?" { "+E.call(J,", ")+" }":"")}if(W(t)){var re=k?b.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):T.call(t)
return"object"!=typeof t||k?re:Z(re)}if((P=t)&&"object"==typeof P&&("undefined"!=typeof HTMLElement&&P instanceof HTMLElement||"string"==typeof P.nodeName&&"function"==typeof P.getAttribute)){for(var ie="<"+_.call(String(t.nodeName)),oe=t.attributes||[],se=0;se<oe.length;se++)ie+=" "+oe[se].name+"="+B(H(oe[se].value),"double",a)
return ie+=">",t.childNodes&&t.childNodes.length&&(ie+="..."),ie+"</"+_.call(String(t.nodeName))+">"}if(V(t)){if(0===t.length)return"[]"
var ae=ne(t,F)
return j&&!function(e){for(var t=0;t<e.length;t++)if($(e[t],"\n")>=0)return!1
return!0}(ae)?"["+te(ae,j)+"]":"[ "+E.call(ae,", ")+" ]"}if(function(e){return"[object Error]"===Y(e)&&q(e)}(t)){var ue=ne(t,F)
return"cause"in Error.prototype||!("cause"in t)||M.call(t,"cause")?0===ue.length?"["+String(t)+"]":"{ ["+String(t)+"] "+E.call(ue,", ")+" }":"{ ["+String(t)+"] "+E.call(A.call("[cause]: "+F(t.cause),ue),", ")+" }"}if("object"==typeof t&&u){if(N&&"function"==typeof t[N]&&D)return D(t,{depth:O-r})
if("symbol"!==u&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!o||!e||"object"!=typeof e)return!1
try{o.call(e)
try{c.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var ce=[]
return s&&s.call(t,function(e,n){ce.push(F(n,t,!0)+" => "+F(e,t))}),ee("Map",o.call(t),ce,j)}if(function(e){if(!c||!e||"object"!=typeof e)return!1
try{c.call(e)
try{o.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var le=[]
return l&&l.call(t,function(e){le.push(F(e,t))}),ee("Set",c.call(t),le,j)}if(function(e){if(!f||!e||"object"!=typeof e)return!1
try{f.call(e,f)
try{h.call(e,h)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return X("WeakMap")
if(function(e){if(!h||!e||"object"!=typeof e)return!1
try{h.call(e,h)
try{f.call(e,f)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return X("WeakSet")
if(function(e){if(!d||!e||"object"!=typeof e)return!1
try{return d.call(e),!0}catch(e){}return!1}(t))return X("WeakRef")
if(function(e){return"[object Number]"===Y(e)&&q(e)}(t))return Z(F(Number(t)))
if(function(e){if(!e||"object"!=typeof e||!I)return!1
try{return I.call(e),!0}catch(e){}return!1}(t))return Z(F(I.call(t)))
if(function(e){return"[object Boolean]"===Y(e)&&q(e)}(t))return Z(p.call(t))
if(function(e){return"[object String]"===Y(e)&&q(e)}(t))return Z(F(String(t)))
if("undefined"!=typeof window&&t===window)return"{ [object Window] }"
if("undefined"!=typeof globalThis&&t===globalThis||"undefined"!=typeof global&&t===global)return"{ [object globalThis] }"
if(!function(e){return"[object Date]"===Y(e)&&q(e)}(t)&&!K(t)){var fe=ne(t,F),he=U?U(t)===Object.prototype:t instanceof Object||t.constructor===Object,de=t instanceof Object?"":"null prototype",pe=!he&&x&&Object(t)===t&&x in t?v.call(Y(t),8,-1):de?"Object":"",ge=(he||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(pe||de?"["+E.call(A.call([],pe||[],de||[]),": ")+"] ":"")
return 0===fe.length?ge+"{}":j?ge+"{"+te(fe,j)+"}":ge+"{ "+E.call(fe,", ")+" }"}return String(t)}
var z=Object.prototype.hasOwnProperty||function(e){return e in this}
function G(e,t){return z.call(e,t)}function Y(e){return g.call(e)}function $(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}function Q(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"")
return Q(v.call(e,0,t.maxStringLength),t)+r}var i=F[t.quoteStyle||"single"]
return i.lastIndex=0,B(b.call(b.call(e,i,"\\$1"),/[\x00-\x1f]/g,J),"single",t)}function J(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t]
return n?"\\"+n:"\\x"+(t<16?"0":"")+w.call(t.toString(16))}function Z(e){return"Object("+e+")"}function X(e){return e+" { ? }"}function ee(e,t,n,r){return e+" ("+t+") {"+(r?te(n,r):E.call(n,", "))+"}"}function te(e,t){if(0===e.length)return""
var n="\n"+t.prev+t.base
return n+E.call(e,","+n)+"\n"+t.prev}function ne(e,t){var n=V(e),r=[]
if(n){r.length=e.length
for(var i=0;i<e.length;i++)r[i]=G(e,i)?t(e[i],e):""}var o,s="function"==typeof P?P(e):[]
if(k){o={}
for(var a=0;a<s.length;a++)o["$"+s[a]]=s[a]}for(var u in e)G(e,u)&&(n&&String(Number(u))===u&&u<e.length||k&&o["$"+u]instanceof Symbol||(S.call(/[^\w$]/,u)?r.push(t(u,e)+": "+t(e[u],e)):r.push(u+": "+t(e[u],e))))
if("function"==typeof P)for(var c=0;c<s.length;c++)M.call(e,s[c])&&r.push("["+t(s[c])+"]: "+t(e[s[c]],e))
return r}},624:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{__assign:()=>o,__asyncDelegator:()=>w,__asyncGenerator:()=>b,__asyncValues:()=>_,__await:()=>v,__awaiter:()=>l,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>O,__createBinding:()=>h,__decorate:()=>a,__exportStar:()=>d,__extends:()=>i,__generator:()=>f,__importDefault:()=>E,__importStar:()=>A,__makeTemplateObject:()=>S,__metadata:()=>c,__param:()=>u,__read:()=>g,__rest:()=>s,__spread:()=>y,__spreadArrays:()=>m,__values:()=>p})
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s)
return o>3&&s&&Object.defineProperty(t,n,s),s}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})}function f(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]))
return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s]
return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r
function s(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){o.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{(n=i[e](t)).value instanceof v?Promise.resolve(n.value.v).then(u,c):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function u(e){a("next",e)}function c(e){a("throw",e)}function l(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function w(e){var t,n
return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,i){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,i,(t=e[n](t)).done,t.value)})}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function A(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}function O(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance")
return t.set(e,n),n}},631:function(e,t,n){var r
e.exports=(r=r||function(e){var t
if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&"undefined"!=typeof global&&global.crypto&&(t=global.crypto),!t)try{t=n(5156)}catch(e){}var r=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function e(){}return function(t){var n
return e.prototype=t,n=new e,e.prototype=null,n}}(),o={},s=o.lib={},a=s.Base={extend:function(e){var t=i(this)
return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend()
return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])
e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=s.WordArray=a.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||l).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes
if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=n[o>>>2]>>>24-o%4*8&255
t[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var a=0;a<i;a+=4)t[r+a>>>2]=n[a>>>2]
return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes
t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=a.clone.call(this)
return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(r())
return new u.init(t,e)}}),c=o.enc={},l=c.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4
return new u.init(n,t/2)}},f=c.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8
return new u.init(n,t)}},h=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(f.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return f.parse(unescape(encodeURIComponent(e)))}},d=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=h.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,r=this._data,i=r.words,o=r.sigBytes,s=this.blockSize,a=o/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,l=e.min(4*c,o)
if(c){for(var f=0;f<c;f+=s)this._doProcessBlock(i,f)
n=i.splice(0,c),r.sigBytes-=l}return new u.init(n,l)},clone:function(){var e=a.clone.call(this)
return e._data=this._data.clone(),e},_minBufferSize:0}),p=(s.Hasher=d.extend({cfg:a.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}}),o.algo={})
return o}(Math),r)},665:(e,t,n)=>{"use strict"
var r=n(4983),i=n(7946),o=n(485),s=n(4869),a=r("%Map%",!0),u=i("Map.prototype.get",!0),c=i("Map.prototype.set",!0),l=i("Map.prototype.has",!0),f=i("Map.prototype.delete",!0),h=i("Map.prototype.size",!0)
e.exports=!!a&&function(){var e,t={assert:function(e){if(!t.has(e))throw new s("Side channel does not contain "+o(e))},delete:function(t){if(e){var n=f(e,t)
return 0===h(e)&&(e=void 0),n}return!1},get:function(t){if(e)return u(e,t)},has:function(t){return!!e&&l(e,t)},set:function(t,n){e||(e=new a),c(e,t,n)}}
return t}},686:e=>{"use strict"
e.exports=Math.pow},695:(e,t,n)=>{"use strict"
var r
n.r(t),n.d(t,{default:()=>i})
const i=function(){function e(){this.pool=[],this.flush()}return e.prototype.flush=function(){var e=this
r=window.requestAnimationFrame(function(){var t=e.pool
e.reset(),t.forEach(function(e){e[Object.keys(e)[0]]()}),e.flush()})},e.prototype.add=function(e,t){var n
return this.pool.push(((n={})[e]=t,n)),t},e.prototype.remove=function(e){this.pool=this.pool.filter(function(t){return!t[e]})},e.prototype.reset=function(){this.pool=[]},e.prototype.stop=function(){window.cancelAnimationFrame(r)},e}()},705:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0
var r=n(4317),i=n(7657),o=n(9315),s=n(2932),a=function(){function e(e){e?(this.operation=function(e){return new Promise(function(t,n){var r=(0,s.locateWindow)().msCrypto.subtle.importKey("raw",u(e),i.SHA_256_HMAC_ALGO,!1,["sign"])
r.oncomplete=function(){r.result&&t(r.result),n(new Error("ImportKey completed without importing key."))},r.onerror=function(){n(new Error("ImportKey failed to import key."))}})}(e).then(function(e){return(0,s.locateWindow)().msCrypto.subtle.sign(i.SHA_256_HMAC_ALGO,e)}),this.operation.catch(function(){})):this.operation=Promise.resolve((0,s.locateWindow)().msCrypto.subtle.digest("SHA-256"))}return e.prototype.update=function(e){var t=this;(0,r.isEmptyData)(e)||(this.operation=this.operation.then(function(n){return n.onerror=function(){t.operation=Promise.reject(new Error("Error encountered updating hash"))},n.process(u(e)),n}),this.operation.catch(function(){}))},e.prototype.digest=function(){return this.operation.then(function(e){return new Promise(function(t,n){e.onerror=function(){n(new Error("Error encountered finalizing hash"))},e.oncomplete=function(){e.result&&t(new Uint8Array(e.result)),n(new Error("Error encountered finalizing hash"))},e.finish()})})},e}()
function u(e){return"string"==typeof e?(0,o.fromUtf8)(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}t.Sha256=a},939:e=>{"use strict"
e.exports=URIError},1091:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyData=void 0,t.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}},1196:e=>{"use strict"
e.exports=Math.min},1249:e=>{"use strict"
e.exports="undefined"!=typeof Reflect&&Reflect&&Reflect.apply},1266:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})},1365:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{__assign:()=>o,__asyncDelegator:()=>w,__asyncGenerator:()=>b,__asyncValues:()=>_,__await:()=>v,__awaiter:()=>l,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>O,__createBinding:()=>h,__decorate:()=>a,__exportStar:()=>d,__extends:()=>i,__generator:()=>f,__importDefault:()=>E,__importStar:()=>A,__makeTemplateObject:()=>S,__metadata:()=>c,__param:()=>u,__read:()=>g,__rest:()=>s,__spread:()=>y,__spreadArrays:()=>m,__values:()=>p})
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s)
return o>3&&s&&Object.defineProperty(t,n,s),s}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})}function f(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]))
return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s]
return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r
function s(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){o.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{(n=i[e](t)).value instanceof v?Promise.resolve(n.value.v).then(u,c):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function u(e){a("next",e)}function c(e){a("throw",e)}function l(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function w(e){var t,n
return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,i){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,i,(t=e[n](t)).done,t.value)})}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function A(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}function O(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance")
return t.set(e,n),n}},1431:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>a})
class r{constructor(){this.registry=new WeakMap}elementExists(e){return this.registry.has(e)}getElement(e){return this.registry.get(e)}addElement(e,t){e&&this.registry.set(e,t||{})}removeElement(e){this.registry.delete(e)}destroyRegistry(){this.registry=new WeakMap}}const i=()=>{}
var o
!function(e){e.enter="enter",e.exit="exit"}(o||(o={}))
class s{constructor(){this.registry=new r}addCallback(e,t,n){let r
r=e===o.enter?{[o.enter]:n}:{[o.exit]:n},this.registry.addElement(t,Object.assign({},this.registry.getElement(t),r))}removeElementNotification(e){this.registry.removeElement(e)}elementNotificationExists(e){return Boolean(this.registry.elementExists(e))}dispatchCallback(e,t,n){if(e===o.enter){const{enter:e=i}=this.registry.getElement(t)
e(n)}else{const e=this.registry.getElement(t)
e&&e.exit&&e.exit(n)}}}const a=class extends s{constructor(){super(),this.elementRegistry=new r}observe(e,t={}){e&&(this.elementRegistry.addElement(e,Object.assign({},t)),this.setupObserver(e,Object.assign({},t)))}unobserve(e,t){const n=this.findMatchingRootEntry(t)
n?this.clearRootEntry(e,n):(this.removeElement(e),this.clearDefaultRoot(e))}addEnterCallback(e,t){this.addCallback(o.enter,e,t)}addExitCallback(e,t){this.addCallback(o.exit,e,t)}dispatchEnterCallback(e,t){this.dispatchCallback(o.enter,e,t)}dispatchExitCallback(e,t){this.dispatchCallback(o.exit,e,t)}destroy(){this.elementRegistry.destroyRegistry()}removeElement(e){this.removeElementNotification(e),this.elementRegistry.removeElement(e)}elementExists(e){return Boolean(this.elementNotificationExists(e)||this.elementRegistry.elementExists(e))}setupOnIntersection(e){return t=>this.onIntersection(e,t)}setupObserver(e,t){const{root:n=window}=t,r=this.findRootFromRegistry(n)
let i
if(r&&(i=this.determineMatchingElements(t,r)),i){const{elements:t,intersectionObserver:n}=i
t.push(e),n&&n.observe(e)}else{const i={elements:[e],intersectionObserver:this.newObserver(e,t),options:t},o=this.stringifyOptions(t)
r?r[o]=i:this.elementRegistry.elementExists(n)||this.elementRegistry.addElement(n,{[o]:i})}}newObserver(e,t){const{root:n,rootMargin:r,threshold:i}=t,o=new IntersectionObserver(this.setupOnIntersection(t).bind(this),{root:n,rootMargin:r,threshold:i})
return o.observe(e),o}onIntersection(e,t){t.forEach(t=>{const{isIntersecting:n,intersectionRatio:r}=t
let i=e.threshold||0
Array.isArray(i)&&(i=i[i.length-1])
const o=this.findMatchingRootEntry(e)
n||r>i?o&&o.elements.some(e=>!(!e||e!==t.target||(this.dispatchEnterCallback(e,t),0))):o&&o.elements.some(e=>!(!e||e!==t.target||(this.dispatchExitCallback(e,t),0)))})}findRootFromRegistry(e){if(this.elementRegistry)return this.elementRegistry.getElement(e)}findMatchingRootEntry(e){const{root:t=window}=e,n=this.findRootFromRegistry(t)
if(n)return n[this.stringifyOptions(e)]}determineMatchingElements(e,t){const n=Object.keys(t).filter(n=>{const{options:r}=t[n]
return this.areOptionsSame(e,r)})[0]
return t[n]}areOptionsSame(e,t){if(e===t)return!0
const n=Object.prototype.toString.call(e),r=Object.prototype.toString.call(t)
if(n!==r)return!1
if("[object Object]"!==n&&"[object Object]"!==r)return e===t
if(e&&t&&"object"==typeof e&&"object"==typeof t)for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&!1===this.areOptionsSame(e[i],t[i]))return!1
return!0}stringifyOptions(e){const{root:t}=e
return JSON.stringify(e,(e,n)=>{if("root"===e&&t){const e=Array.prototype.slice.call(t.classList).reduce((e,t)=>e+t,"")
return`${t.id}-${e}`}return n})}clearRootEntry(e,t){const{intersectionObserver:n}=t
n.unobserve(e),t.elements&&(t.elements=t.elements.filter(t=>t!==e)),this.removeElement(e),this.clearDefaultRoot(e)}clearDefaultRoot(e){const t=this.elementRegistry.getElement(window)
t&&t.elements&&(t.elements=t.elements.filter(t=>t!==e))}}},1538:e=>{"use strict"
e.exports=Math.max},1565:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{Alert:()=>$,Button:()=>ee,Carousel:()=>Te,Collapse:()=>ze,Dropdown:()=>mt,Modal:()=>qt,Popover:()=>wn,ScrollSpy:()=>Rn,Tab:()=>Yn,Toast:()=>ur,Tooltip:()=>fn})
var r=n(3797)
function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var a,u,c="transitionend",l=function(e){do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e))
return e},f=function(e){var t=e.getAttribute("data-target")
if(!t||"#"===t){var n=e.getAttribute("href")
t=n&&"#"!==n?n.trim():null}return t},h=function(e){var t=f(e)
return t&&document.querySelector(t)?t:null},d=function(e){var t=f(e)
return t?document.querySelector(t):null},p=function(e){if(!e)return 0
var t=window.getComputedStyle(e),n=t.transitionDuration,r=t.transitionDelay,i=parseFloat(n),o=parseFloat(r)
return i||o?(n=n.split(",")[0],r=r.split(",")[0],1e3*(parseFloat(n)+parseFloat(r))):0},g=function(e){e.dispatchEvent(new Event(c))},y=function(e){return(e[0]||e).nodeType},m=function(e,t){var n=!1,r=t+5
e.addEventListener(c,function t(){n=!0,e.removeEventListener(c,t)}),setTimeout(function(){n||g(e)},r)},v=function(e,t,n){Object.keys(n).forEach(function(r){var i,o=n[r],s=t[r],a=s&&y(s)?"element":null==(i=s)?""+i:{}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase()
if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')})},b=function(e){if(!e)return!1
if(e.style&&e.parentNode&&e.parentNode.style){var t=getComputedStyle(e),n=getComputedStyle(e.parentNode)
return"none"!==t.display&&"none"!==n.display&&"hidden"!==t.visibility}return!1},w=function e(t){if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){var n=t.getRootNode()
return n instanceof ShadowRoot?n:null}return t instanceof ShadowRoot?t:t.parentNode?e(t.parentNode):null},_=function(){return function(){}},S=function(e){return e.offsetHeight},A=function(){var e=window.jQuery
return e&&!document.body.hasAttribute("data-no-jquery")?e:null},E=function(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},C=(a={},u=1,{set:function(e,t,n){void 0===e.bsKey&&(e.bsKey={key:t,id:u},u++),a[e.bsKey.id]=n},get:function(e,t){if(!e||void 0===e.bsKey)return null
var n=e.bsKey
return n.key===t?a[n.id]:null},delete:function(e,t){if(void 0!==e.bsKey){var n=e.bsKey
n.key===t&&(delete a[n.id],delete e.bsKey)}}}),O=function(e,t,n){C.set(e,t,n)},I=function(e,t){return C.get(e,t)},P=function(e,t){C.delete(e,t)},T=/[^.]*(?=\..*)\.|.*/,k=/\..*/,x=/::\d+$/,M={},U=1,R={mouseenter:"mouseover",mouseleave:"mouseout"},D=["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]
function j(e,t){return t&&t+"::"+U++||e.uidEvent||U++}function N(e){var t=j(e)
return e.uidEvent=t,M[t]=M[t]||{},M[t]}function L(e,t,n){void 0===n&&(n=null)
for(var r=Object.keys(e),i=0,o=r.length;i<o;i++){var s=e[r[i]]
if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function F(e,t,n){var r="string"==typeof t,i=r?n:t,o=e.replace(k,""),s=R[o]
return s&&(o=s),D.indexOf(o)>-1||(o=e),[r,i,o]}function B(e,t,n,r,i){if("string"==typeof t&&e){n||(n=r,r=null)
var o=F(t,n,r),s=o[0],a=o[1],u=o[2],c=N(e),l=c[u]||(c[u]={}),f=L(l,a,s?n:null)
if(f)f.oneOff=f.oneOff&&i
else{var h=j(a,t.replace(T,"")),d=s?function(e,t,n){return function r(i){for(var o=e.querySelectorAll(t),s=i.target;s&&s!==this;s=s.parentNode)for(var a=o.length;a--;)if(o[a]===s)return i.delegateTarget=s,r.oneOff&&q.off(e,i.type,n),n.apply(s,[i])
return null}}(e,n,r):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&q.off(e,r.type,t),t.apply(e,[r])}}(e,n)
d.delegationSelector=s?n:null,d.originalHandler=a,d.oneOff=i,d.uidEvent=h,l[h]=d,e.addEventListener(u,d,s)}}}function H(e,t,n,r,i){var o=L(t[n],r,i)
o&&(e.removeEventListener(n,o,Boolean(i)),delete t[n][o.uidEvent])}var q={on:function(e,t,n,r){B(e,t,n,r,!1)},one:function(e,t,n,r){B(e,t,n,r,!0)},off:function(e,t,n,r){if("string"==typeof t&&e){var i=F(t,n,r),o=i[0],s=i[1],a=i[2],u=a!==t,c=N(e),l="."===t.charAt(0)
if(void 0===s){l&&Object.keys(c).forEach(function(n){!function(e,t,n,r){var i=t[n]||{}
Object.keys(i).forEach(function(o){if(o.indexOf(r)>-1){var s=i[o]
H(e,t,n,s.originalHandler,s.delegationSelector)}})}(e,c,n,t.slice(1))})
var f=c[a]||{}
Object.keys(f).forEach(function(n){var r=n.replace(x,"")
if(!u||t.indexOf(r)>-1){var i=f[n]
H(e,c,a,i.originalHandler,i.delegationSelector)}})}else{if(!c||!c[a])return
H(e,c,a,s,o?n:null)}}},trigger:function(e,t,n){if("string"!=typeof t||!e)return null
var r,i=A(),o=t.replace(k,""),s=t!==o,a=D.indexOf(o)>-1,u=!0,c=!0,l=!1,f=null
return s&&i&&(r=i.Event(t,n),i(e).trigger(r),u=!r.isPropagationStopped(),c=!r.isImmediatePropagationStopped(),l=r.isDefaultPrevented()),a?(f=document.createEvent("HTMLEvents")).initEvent(o,u,!0):f=new CustomEvent(t,{bubbles:u,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(function(e){Object.defineProperty(f,e,{get:function(){return n[e]}})}),l&&f.preventDefault(),c&&e.dispatchEvent(f),f.defaultPrevented&&void 0!==r&&r.preventDefault(),f}},V="alert",K="bs.alert",W="."+K,z="close"+W,G="closed"+W,Y="click"+W+".data-api",$=function(){function e(e){this._element=e,this._element&&O(e,K,this)}var t=e.prototype
return t.close=function(e){var t=e?this._getRootElement(e):this._element,n=this._triggerCloseEvent(t)
null===n||n.defaultPrevented||this._removeElement(t)},t.dispose=function(){P(this._element,K),this._element=null},t._getRootElement=function(e){return d(e)||e.closest(".alert")},t._triggerCloseEvent=function(e){return q.trigger(e,z)},t._removeElement=function(e){var t=this
if(e.classList.remove("show"),e.classList.contains("fade")){var n=p(e)
q.one(e,c,function(){return t._destroyElement(e)}),m(e,n)}else this._destroyElement(e)},t._destroyElement=function(e){e.parentNode&&e.parentNode.removeChild(e),q.trigger(e,G)},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,K)
n||(n=new e(this)),"close"===t&&n[t](this)})},e.handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},e.getInstance=function(e){return I(e,K)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}}]),e}()
q.on(document,Y,'[data-dismiss="alert"]',$.handleDismiss(new $)),E(function(){var e=A()
if(e){var t=e.fn[V]
e.fn[V]=$.jQueryInterface,e.fn[V].Constructor=$,e.fn[V].noConflict=function(){return e.fn[V]=t,$.jQueryInterface}}})
var Q="button",J="bs.button",Z='[data-toggle="button"]',X="click."+J+".data-api",ee=function(){function e(e){this._element=e,O(e,J,this)}var t=e.prototype
return t.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},t.dispose=function(){P(this._element,J),this._element=null},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,J)
n||(n=new e(this)),"toggle"===t&&n[t]()})},e.getInstance=function(e){return I(e,J)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}}]),e}()
function te(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function ne(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}q.on(document,X,Z,function(e){e.preventDefault()
var t=e.target.closest(Z),n=I(t,J)
n||(n=new ee(t)),n.toggle()}),E(function(){var e=A()
if(e){var t=e.fn[Q]
e.fn[Q]=ee.jQueryInterface,e.fn[Q].Constructor=ee,e.fn[Q].noConflict=function(){return e.fn[Q]=t,ee.jQueryInterface}}})
var re={setDataAttribute:function(e,t,n){e.setAttribute("data-"+ne(t),n)},removeDataAttribute:function(e,t){e.removeAttribute("data-"+ne(t))},getDataAttributes:function(e){if(!e)return{}
var t=s({},e.dataset)
return Object.keys(t).forEach(function(e){t[e]=te(t[e])}),t},getDataAttribute:function(e,t){return te(e.getAttribute("data-"+ne(t)))},offset:function(e){var t=e.getBoundingClientRect()
return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position:function(e){return{top:e.offsetTop,left:e.offsetLeft}}},ie={matches:function(e,t){return e.matches(t)},find:function(e,t){var n
return void 0===t&&(t=document.documentElement),(n=[]).concat.apply(n,Element.prototype.querySelectorAll.call(t,e))},findOne:function(e,t){return void 0===t&&(t=document.documentElement),Element.prototype.querySelector.call(t,e)},children:function(e,t){var n
return(n=[]).concat.apply(n,e.children).filter(function(e){return e.matches(t)})},parents:function(e,t){for(var n=[],r=e.parentNode;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)this.matches(r,t)&&n.push(r),r=r.parentNode
return n},prev:function(e,t){for(var n=e.previousElementSibling;n;){if(n.matches(t))return[n]
n=n.previousElementSibling}return[]},next:function(e,t){for(var n=e.nextElementSibling;n;){if(this.matches(n,t))return[n]
n=n.nextElementSibling}return[]}},oe="carousel",se="bs.carousel",ae="."+se,ue=".data-api",ce={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},le={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},fe="next",he="prev",de="slide"+ae,pe="slid"+ae,ge="keydown"+ae,ye="mouseenter"+ae,me="mouseleave"+ae,ve="touchstart"+ae,be="touchmove"+ae,we="touchend"+ae,_e="pointerdown"+ae,Se="pointerup"+ae,Ae="dragstart"+ae,Ee="load"+ae+ue,Ce="click"+ae+ue,Oe="active",Ie=".active.carousel-item",Pe={TOUCH:"touch",PEN:"pen"},Te=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=ie.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners(),O(e,se,this)}var t=e.prototype
return t.next=function(){this._isSliding||this._slide(fe)},t.nextWhenVisible=function(){!document.hidden&&b(this._element)&&this.next()},t.prev=function(){this._isSliding||this._slide(he)},t.pause=function(e){e||(this._isPaused=!0),ie.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(g(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(e){var t=this
this._activeElement=ie.findOne(Ie,this._element)
var n=this._getItemIndex(this._activeElement)
if(!(e>this._items.length-1||e<0))if(this._isSliding)q.one(this._element,pe,function(){return t.to(e)})
else{if(n===e)return this.pause(),void this.cycle()
var r=e>n?fe:he
this._slide(r,this._items[e])}},t.dispose=function(){q.off(this._element,ae),P(this._element,se),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(e){return e=s({},ce,e),v(oe,e,le),e},t._handleSwipe=function(){var e=Math.abs(this.touchDeltaX)
if(!(e<=40)){var t=e/this.touchDeltaX
this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},t._addEventListeners=function(){var e=this
this._config.keyboard&&q.on(this._element,ge,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(q.on(this._element,ye,function(t){return e.pause(t)}),q.on(this._element,me,function(t){return e.cycle(t)})),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this,t=function(t){e._pointerEvent&&Pe[t.pointerType.toUpperCase()]?e.touchStartX=t.clientX:e._pointerEvent||(e.touchStartX=t.touches[0].clientX)},n=function(t){e._pointerEvent&&Pe[t.pointerType.toUpperCase()]&&(e.touchDeltaX=t.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))}
ie.find(".carousel-item img",this._element).forEach(function(e){q.on(e,Ae,function(e){return e.preventDefault()})}),this._pointerEvent?(q.on(this._element,_e,function(e){return t(e)}),q.on(this._element,Se,function(e){return n(e)}),this._element.classList.add("pointer-event")):(q.on(this._element,ve,function(e){return t(e)}),q.on(this._element,be,function(t){return function(t){t.touches&&t.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.touches[0].clientX-e.touchStartX}(t)}),q.on(this._element,we,function(e){return n(e)}))},t._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),this.prev()
break
case"ArrowRight":e.preventDefault(),this.next()}},t._getItemIndex=function(e){return this._items=e&&e.parentNode?ie.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)},t._getItemByDirection=function(e,t){var n=e===fe,r=e===he,i=this._getItemIndex(t),o=this._items.length-1
if((r&&0===i||n&&i===o)&&!this._config.wrap)return t
var s=(i+(e===he?-1:1))%this._items.length
return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),r=this._getItemIndex(ie.findOne(Ie,this._element))
return q.trigger(this._element,de,{relatedTarget:e,direction:t,from:r,to:n})},t._setActiveIndicatorElement=function(e){if(this._indicatorsElement){for(var t=ie.find(".active",this._indicatorsElement),n=0;n<t.length;n++)t[n].classList.remove(Oe)
var r=this._indicatorsElement.children[this._getItemIndex(e)]
r&&r.classList.add(Oe)}},t._updateInterval=function(){var e=this._activeElement||ie.findOne(Ie,this._element)
if(e){var t=parseInt(e.getAttribute("data-interval"),10)
t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},t._slide=function(e,t){var n,r,i,o=this,s=ie.findOne(Ie,this._element),a=this._getItemIndex(s),u=t||s&&this._getItemByDirection(e,s),l=this._getItemIndex(u),f=Boolean(this._interval)
if(e===fe?(n="carousel-item-left",r="carousel-item-next",i="left"):(n="carousel-item-right",r="carousel-item-prev",i="right"),u&&u.classList.contains(Oe))this._isSliding=!1
else if(!this._triggerSlideEvent(u,i).defaultPrevented&&s&&u){if(this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(u),this._activeElement=u,this._element.classList.contains("slide")){u.classList.add(r),S(u),s.classList.add(n),u.classList.add(n)
var h=p(s)
q.one(s,c,function(){u.classList.remove(n,r),u.classList.add(Oe),s.classList.remove(Oe,r,n),o._isSliding=!1,setTimeout(function(){q.trigger(o._element,pe,{relatedTarget:u,direction:i,from:a,to:l})},0)}),m(s,h)}else s.classList.remove(Oe),u.classList.add(Oe),this._isSliding=!1,q.trigger(this._element,pe,{relatedTarget:u,direction:i,from:a,to:l})
f&&this.cycle()}},e.carouselInterface=function(t,n){var r=I(t,se),i=s({},ce,re.getDataAttributes(t))
"object"==typeof n&&(i=s({},i,n))
var o="string"==typeof n?n:i.slide
if(r||(r=new e(t,i)),"number"==typeof n)r.to(n)
else if("string"==typeof o){if(void 0===r[o])throw new TypeError('No method named "'+o+'"')
r[o]()}else i.interval&&i.ride&&(r.pause(),r.cycle())},e.jQueryInterface=function(t){return this.each(function(){e.carouselInterface(this,t)})},e.dataApiClickHandler=function(t){var n=d(this)
if(n&&n.classList.contains("carousel")){var r=s({},re.getDataAttributes(n),re.getDataAttributes(this)),i=this.getAttribute("data-slide-to")
i&&(r.interval=!1),e.carouselInterface(n,r),i&&I(n,se).to(i),t.preventDefault()}},e.getInstance=function(e){return I(e,se)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return ce}}]),e}()
q.on(document,Ce,"[data-slide], [data-slide-to]",Te.dataApiClickHandler),q.on(window,Ee,function(){for(var e=ie.find('[data-ride="carousel"]'),t=0,n=e.length;t<n;t++)Te.carouselInterface(e[t],I(e[t],se))}),E(function(){var e=A()
if(e){var t=e.fn[oe]
e.fn[oe]=Te.jQueryInterface,e.fn[oe].Constructor=Te,e.fn[oe].noConflict=function(){return e.fn[oe]=t,Te.jQueryInterface}}})
var ke="collapse",xe="bs.collapse",Me="."+xe,Ue={toggle:!0,parent:""},Re={toggle:"boolean",parent:"(string|element)"},De="show"+Me,je="shown"+Me,Ne="hide"+Me,Le="hidden"+Me,Fe="click"+Me+".data-api",Be="show",He="collapse",qe="collapsing",Ve="collapsed",Ke="width",We='[data-toggle="collapse"]',ze=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=ie.find(We+'[href="#'+e.id+'"],'+We+'[data-target="#'+e.id+'"]')
for(var n=ie.find(We),r=0,i=n.length;r<i;r++){var o=n[r],s=h(o),a=ie.find(s).filter(function(t){return t===e})
null!==s&&a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle(),O(e,xe,this)}var t=e.prototype
return t.toggle=function(){this._element.classList.contains(Be)?this.hide():this.show()},t.show=function(){var t=this
if(!this._isTransitioning&&!this._element.classList.contains(Be)){var n,r
this._parent&&0===(n=ie.find(".show, .collapsing",this._parent).filter(function(e){return"string"==typeof t._config.parent?e.getAttribute("data-parent")===t._config.parent:e.classList.contains(He)})).length&&(n=null)
var i=ie.findOne(this._selector)
if(n){var o=n.filter(function(e){return i!==e})
if((r=o[0]?I(o[0],xe):null)&&r._isTransitioning)return}if(!q.trigger(this._element,De).defaultPrevented){n&&n.forEach(function(t){i!==t&&e.collapseInterface(t,"hide"),r||O(t,xe,null)})
var s=this._getDimension()
this._element.classList.remove(He),this._element.classList.add(qe),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(function(e){e.classList.remove(Ve),e.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0)
var a="scroll"+(s[0].toUpperCase()+s.slice(1)),u=p(this._element)
q.one(this._element,c,function(){t._element.classList.remove(qe),t._element.classList.add(He,Be),t._element.style[s]="",t.setTransitioning(!1),q.trigger(t._element,je)}),m(this._element,u),this._element.style[s]=this._element[a]+"px"}}},t.hide=function(){var e=this
if(!this._isTransitioning&&this._element.classList.contains(Be)&&!q.trigger(this._element,Ne).defaultPrevented){var t=this._getDimension()
this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",S(this._element),this._element.classList.add(qe),this._element.classList.remove(He,Be)
var n=this._triggerArray.length
if(n>0)for(var r=0;r<n;r++){var i=this._triggerArray[r],o=d(i)
o&&!o.classList.contains(Be)&&(i.classList.add(Ve),i.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]=""
var s=p(this._element)
q.one(this._element,c,function(){e.setTransitioning(!1),e._element.classList.remove(qe),e._element.classList.add(He),q.trigger(e._element,Le)}),m(this._element,s)}},t.setTransitioning=function(e){this._isTransitioning=e},t.dispose=function(){P(this._element,xe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(e){return(e=s({},Ue,e)).toggle=Boolean(e.toggle),v(ke,e,Re),e},t._getDimension=function(){return this._element.classList.contains(Ke)?Ke:"height"},t._getParent=function(){var e=this,t=this._config.parent
y(t)?void 0===t.jquery&&void 0===t[0]||(t=t[0]):t=ie.findOne(t)
var n=We+'[data-parent="'+t+'"]'
return ie.find(n,t).forEach(function(t){var n=d(t)
e._addAriaAndCollapsedClass(n,[t])}),t},t._addAriaAndCollapsedClass=function(e,t){if(e&&t.length){var n=e.classList.contains(Be)
t.forEach(function(e){n?e.classList.remove(Ve):e.classList.add(Ve),e.setAttribute("aria-expanded",n)})}},e.collapseInterface=function(t,n){var r=I(t,xe),i=s({},Ue,re.getDataAttributes(t),"object"==typeof n&&n?n:{})
if(!r&&i.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(i.toggle=!1),r||(r=new e(t,i)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"')
r[n]()}},e.jQueryInterface=function(t){return this.each(function(){e.collapseInterface(this,t)})},e.getInstance=function(e){return I(e,xe)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return Ue}}]),e}()
q.on(document,Fe,We,function(e){"A"===e.target.tagName&&e.preventDefault()
var t=re.getDataAttributes(this),n=h(this)
ie.find(n).forEach(function(e){var n,r=I(e,xe)
r?(null===r._parent&&"string"==typeof t.parent&&(r._config.parent=t.parent,r._parent=r._getParent()),n="toggle"):n=t,ze.collapseInterface(e,n)})}),E(function(){var e=A()
if(e){var t=e.fn[ke]
e.fn[ke]=ze.jQueryInterface,e.fn[ke].Constructor=ze,e.fn[ke].noConflict=function(){return e.fn[ke]=t,ze.jQueryInterface}}})
var Ge="dropdown",Ye="bs.dropdown",$e="."+Ye,Qe=".data-api",Je="Escape",Ze="Space",Xe="ArrowUp",et="ArrowDown",tt=new RegExp(Xe+"|"+et+"|"+Je),nt="hide"+$e,rt="hidden"+$e,it="show"+$e,ot="shown"+$e,st="click"+$e,at="click"+$e+Qe,ut="keydown"+$e+Qe,ct="keyup"+$e+Qe,lt="disabled",ft="show",ht="dropdown-menu-right",dt='[data-toggle="dropdown"]',pt=".dropdown-menu",gt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},yt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},mt=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners(),O(e,Ye,this)}var t=e.prototype
return t.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains(lt)){var t=this._element.classList.contains(ft)
e.clearMenus(),t||this.show()}},t.show=function(){if(!(this._element.disabled||this._element.classList.contains(lt)||this._menu.classList.contains(ft))){var t=e.getParentFromElement(this._element),n={relatedTarget:this._element}
if(!q.trigger(this._element,it,n).defaultPrevented){if(!this._inNavbar){if(void 0===r.A)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)")
var i=this._element
"parent"===this._config.reference?i=t:y(this._config.reference)&&(i=this._config.reference,void 0!==this._config.reference.jquery&&(i=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t.classList.add("position-static"),this._popper=new r.A(i,this._menu,this._getPopperConfig())}var o
"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&(o=[]).concat.apply(o,document.body.children).forEach(function(e){return q.on(e,"mouseover",null,function(){})}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle(ft),this._element.classList.toggle(ft),q.trigger(t,ot,n)}}},t.hide=function(){if(!this._element.disabled&&!this._element.classList.contains(lt)&&this._menu.classList.contains(ft)){var t=e.getParentFromElement(this._element),n={relatedTarget:this._element}
q.trigger(t,nt,n).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle(ft),this._element.classList.toggle(ft),q.trigger(t,rt,n))}},t.dispose=function(){P(this._element,Ye),q.off(this._element,$e),this._element=null,this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this
q.on(this._element,st,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(e){return e=s({},this.constructor.Default,re.getDataAttributes(this._element),e),v(Ge,e,this.constructor.DefaultType),e},t._getMenuElement=function(){return ie.next(this._element,pt)[0]},t._getPlacement=function(){var e=this._element.parentNode,t="bottom-start"
return e.classList.contains("dropup")?t=this._menu.classList.contains(ht)?"top-end":"top-start":e.classList.contains("dropright")?t="right-start":e.classList.contains("dropleft")?t="left-start":this._menu.classList.contains(ht)&&(t="bottom-end"),t},t._detectNavbar=function(){return Boolean(this._element.closest(".navbar"))},t._getOffset=function(){var e=this,t={}
return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),s({},e,this._config.popperConfig)},e.dropdownInterface=function(t,n){var r=I(t,Ye)
if(r||(r=new e(t,"object"==typeof n?n:null)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"')
r[n]()}},e.jQueryInterface=function(t){return this.each(function(){e.dropdownInterface(this,t)})},e.clearMenus=function(t){if(!t||2!==t.button&&("keyup"!==t.type||"Tab"===t.key))for(var n=ie.find(dt),r=0,i=n.length;r<i;r++){var o=e.getParentFromElement(n[r]),s=I(n[r],Ye),a={relatedTarget:n[r]}
if(t&&"click"===t.type&&(a.clickEvent=t),s){var u,c=s._menu
n[r].classList.contains(ft)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&"Tab"===t.key)&&c.contains(t.target)||q.trigger(o,nt,a).defaultPrevented)&&("ontouchstart"in document.documentElement&&(u=[]).concat.apply(u,document.body.children).forEach(function(e){return q.off(e,"mouseover",null,function(){})}),n[r].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),c.classList.remove(ft),n[r].classList.remove(ft),q.trigger(o,rt,a))}}},e.getParentFromElement=function(e){return d(e)||e.parentNode},e.dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?t.key===Ze||t.key!==Je&&(t.key!==et&&t.key!==Xe||t.target.closest(pt)):!tt.test(t.key))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!this.classList.contains(lt))){var n=e.getParentFromElement(this),r=this.classList.contains(ft)
if(t.key===Je)return(this.matches(dt)?this:ie.prev(this,dt)[0]).focus(),void e.clearMenus()
if(r&&t.key!==Ze){var i=ie.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",n).filter(b)
if(i.length){var o=i.indexOf(t.target)
t.key===Xe&&o>0&&o--,t.key===et&&o<i.length-1&&o++,i[o=-1===o?0:o].focus()}}else e.clearMenus()}},e.getInstance=function(e){return I(e,Ye)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return gt}},{key:"DefaultType",get:function(){return yt}}]),e}()
q.on(document,ut,dt,mt.dataApiKeydownHandler),q.on(document,ut,pt,mt.dataApiKeydownHandler),q.on(document,at,mt.clearMenus),q.on(document,ct,mt.clearMenus),q.on(document,at,dt,function(e){e.preventDefault(),e.stopPropagation(),mt.dropdownInterface(this,"toggle")}),q.on(document,at,".dropdown form",function(e){return e.stopPropagation()}),E(function(){var e=A()
if(e){var t=e.fn[Ge]
e.fn[Ge]=mt.jQueryInterface,e.fn[Ge].Constructor=mt,e.fn[Ge].noConflict=function(){return e.fn[Ge]=t,mt.jQueryInterface}}})
var vt="modal",bt="bs.modal",wt="."+bt,_t="Escape",St={backdrop:!0,keyboard:!0,focus:!0,show:!0},At={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Et="hide"+wt,Ct="hidePrevented"+wt,Ot="hidden"+wt,It="show"+wt,Pt="shown"+wt,Tt="focusin"+wt,kt="resize"+wt,xt="click.dismiss"+wt,Mt="keydown.dismiss"+wt,Ut="mouseup.dismiss"+wt,Rt="mousedown.dismiss"+wt,Dt="click"+wt+".data-api",jt="modal-open",Nt="fade",Lt="show",Ft="modal-static",Bt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ht=".sticky-top",qt=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=ie.findOne(".modal-dialog",e),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0,O(e,bt,this)}var t=e.prototype
return t.toggle=function(e){return this._isShown?this.hide():this.show(e)},t.show=function(e){var t=this
if(!this._isShown&&!this._isTransitioning){this._element.classList.contains(Nt)&&(this._isTransitioning=!0)
var n=q.trigger(this._element,It,{relatedTarget:e})
this._isShown||n.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),q.on(this._element,xt,'[data-dismiss="modal"]',function(e){return t.hide(e)}),q.on(this._dialog,Rt,function(){q.one(t._element,Ut,function(e){e.target===t._element&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},t.hide=function(e){var t=this
if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning&&!q.trigger(this._element,Et).defaultPrevented){this._isShown=!1
var n=this._element.classList.contains(Nt)
if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),q.off(document,Tt),this._element.classList.remove(Lt),q.off(this._element,xt),q.off(this._dialog,Rt),n){var r=p(this._element)
q.one(this._element,c,function(e){return t._hideModal(e)}),m(this._element,r)}else this._hideModal()}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return q.off(e,wt)}),q.off(document,Tt),P(this._element,bt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(e){return e=s({},St,e),v(vt,e,At),e},t._showElement=function(e){var t=this,n=this._element.classList.contains(Nt),r=ie.findOne(".modal-body",this._dialog)
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,r&&(r.scrollTop=0),n&&S(this._element),this._element.classList.add(Lt),this._config.focus&&this._enforceFocus()
var i=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,q.trigger(t._element,Pt,{relatedTarget:e})}
if(n){var o=p(this._dialog)
q.one(this._dialog,c,i),m(this._dialog,o)}else i()},t._enforceFocus=function(){var e=this
q.off(document,Tt),q.on(document,Tt,function(t){document===t.target||e._element===t.target||e._element.contains(t.target)||e._element.focus()})},t._setEscapeEvent=function(){var e=this
this._isShown?q.on(this._element,Mt,function(t){e._config.keyboard&&t.key===_t?(t.preventDefault(),e.hide()):e._config.keyboard||t.key!==_t||e._triggerBackdropTransition()}):q.off(this._element,Mt)},t._setResizeEvent=function(){var e=this
this._isShown?q.on(window,kt,function(){return e._adjustDialog()}):q.off(window,kt)},t._hideModal=function(){var e=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){document.body.classList.remove(jt),e._resetAdjustments(),e._resetScrollbar(),q.trigger(e._element,Ot)})},t._removeBackdrop=function(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null},t._showBackdrop=function(e){var t=this,n=this._element.classList.contains(Nt)?Nt:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),document.body.appendChild(this._backdrop),q.on(this._element,xt,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()}),n&&S(this._backdrop),this._backdrop.classList.add(Lt),!n)return void e()
var r=p(this._backdrop)
q.one(this._backdrop,c,e),m(this._backdrop,r)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove(Lt)
var i=function(){t._removeBackdrop(),e()}
if(this._element.classList.contains(Nt)){var o=p(this._backdrop)
q.one(this._backdrop,c,i),m(this._backdrop,o)}else i()}else e()},t._triggerBackdropTransition=function(){var e=this
if("static"===this._config.backdrop){if(q.trigger(this._element,Ct).defaultPrevented)return
var t=this._element.scrollHeight>document.documentElement.clientHeight
t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ft)
var n=p(this._dialog)
q.off(this._element,c),q.one(this._element,c,function(){e._element.classList.remove(Ft),t||(q.one(e._element,c,function(){e._element.style.overflowY=""}),m(e._element,n))}),m(this._element,n),this._element.focus()}else this.hide()},t._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var e=document.body.getBoundingClientRect()
this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var e=this
if(this._isBodyOverflowing){ie.find(Bt).forEach(function(t){var n=t.style.paddingRight,r=window.getComputedStyle(t)["padding-right"]
re.setDataAttribute(t,"padding-right",n),t.style.paddingRight=parseFloat(r)+e._scrollbarWidth+"px"}),ie.find(Ht).forEach(function(t){var n=t.style.marginRight,r=window.getComputedStyle(t)["margin-right"]
re.setDataAttribute(t,"margin-right",n),t.style.marginRight=parseFloat(r)-e._scrollbarWidth+"px"})
var t=document.body.style.paddingRight,n=window.getComputedStyle(document.body)["padding-right"]
re.setDataAttribute(document.body,"padding-right",t),document.body.style.paddingRight=parseFloat(n)+this._scrollbarWidth+"px"}document.body.classList.add(jt)},t._resetScrollbar=function(){ie.find(Bt).forEach(function(e){var t=re.getDataAttribute(e,"padding-right")
void 0!==t&&(re.removeDataAttribute(e,"padding-right"),e.style.paddingRight=t)}),ie.find(""+Ht).forEach(function(e){var t=re.getDataAttribute(e,"margin-right")
void 0!==t&&(re.removeDataAttribute(e,"margin-right"),e.style.marginRight=t)})
var e=re.getDataAttribute(document.body,"padding-right")
void 0===e?document.body.style.paddingRight="":(re.removeDataAttribute(document.body,"padding-right"),document.body.style.paddingRight=e)},t._getScrollbarWidth=function(){var e=document.createElement("div")
e.className="modal-scrollbar-measure",document.body.appendChild(e)
var t=e.getBoundingClientRect().width-e.clientWidth
return document.body.removeChild(e),t},e.jQueryInterface=function(t,n){return this.each(function(){var r=I(this,bt),i=s({},St,re.getDataAttributes(this),"object"==typeof t&&t?t:{})
if(r||(r=new e(this,i)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"')
r[t](n)}else i.show&&r.show(n)})},e.getInstance=function(e){return I(e,bt)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return St}}]),e}()
q.on(document,Dt,'[data-toggle="modal"]',function(e){var t=this,n=d(this)
"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault(),q.one(n,It,function(e){e.defaultPrevented||q.one(n,Ot,function(){b(t)&&t.focus()})})
var r=I(n,bt)
if(!r){var i=s({},re.getDataAttributes(n),re.getDataAttributes(this))
r=new qt(n,i)}r.show(this)}),E(function(){var e=A()
if(e){var t=e.fn[vt]
e.fn[vt]=qt.jQueryInterface,e.fn[vt].Constructor=qt,e.fn[vt].noConflict=function(){return e.fn[vt]=t,qt.jQueryInterface}}})
var Vt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Kt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Wt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
function zt(e,t,n){var r
if(!e.length)return e
if(n&&"function"==typeof n)return n(e)
for(var i=(new window.DOMParser).parseFromString(e,"text/html"),o=Object.keys(t),s=(r=[]).concat.apply(r,i.body.querySelectorAll("*")),a=function(e,n){var r,i=s[e],a=i.nodeName.toLowerCase()
if(-1===o.indexOf(a))return i.parentNode.removeChild(i),"continue"
var u=(r=[]).concat.apply(r,i.attributes),c=[].concat(t["*"]||[],t[a]||[])
u.forEach(function(e){(function(e,t){var n=e.nodeName.toLowerCase()
if(-1!==t.indexOf(n))return-1===Vt.indexOf(n)||Boolean(e.nodeValue.match(Kt)||e.nodeValue.match(Wt))
for(var r=t.filter(function(e){return e instanceof RegExp}),i=0,o=r.length;i<o;i++)if(n.match(r[i]))return!0
return!1})(e,c)||i.removeAttribute(e.nodeName)})},u=0,c=s.length;u<c;u++)a(u)
return i.body.innerHTML}var Gt="tooltip",Yt="bs.tooltip",$t="."+Yt,Qt="bs-tooltip",Jt=new RegExp("(^|\\s)"+Qt+"\\S+","g"),Zt=["sanitize","allowList","sanitizeFn"],Xt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object)"},en={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},tn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},nn={HIDE:"hide"+$t,HIDDEN:"hidden"+$t,SHOW:"show"+$t,SHOWN:"shown"+$t,INSERTED:"inserted"+$t,CLICK:"click"+$t,FOCUSIN:"focusin"+$t,FOCUSOUT:"focusout"+$t,MOUSEENTER:"mouseenter"+$t,MOUSELEAVE:"mouseleave"+$t},rn="fade",on="modal",sn="show",an="show",un="out",cn="hover",ln="focus",fn=function(){function e(e,t){if(void 0===r.A)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners(),O(e,this.constructor.DATA_KEY,this)}var t=e.prototype
return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=I(e.delegateTarget,t)
n||(n=new this.constructor(e.delegateTarget,this._getDelegateConfig()),O(e.delegateTarget,t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(this.getTipElement().classList.contains(sn))return void this._leave(null,this)
this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),P(this.element,this.constructor.DATA_KEY),q.off(this.element,this.constructor.EVENT_KEY),q.off(this.element.closest("."+on),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this
if("none"===this.element.style.display)throw new Error("Please use show on visible elements")
if(this.isWithContent()&&this._isEnabled){var t=q.trigger(this.element,this.constructor.Event.SHOW),n=w(this.element),i=null===n?this.element.ownerDocument.documentElement.contains(this.element):n.contains(this.element)
if(t.defaultPrevented||!i)return
var o=this.getTipElement(),s=l(this.constructor.NAME)
o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&o.classList.add(rn)
var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(a)
this._addAttachmentClass(u)
var f,h=this._getContainer()
O(o,this.constructor.DATA_KEY,this),this.element.ownerDocument.documentElement.contains(this.tip)||h.appendChild(o),q.trigger(this.element,this.constructor.Event.INSERTED),this._popper=new r.A(this.element,o,this._getPopperConfig(u)),o.classList.add(sn),"ontouchstart"in document.documentElement&&(f=[]).concat.apply(f,document.body.children).forEach(function(e){q.on(e,"mouseover",function(){})})
var d=function(){e.config.animation&&e._fixTransition()
var t=e._hoverState
e._hoverState=null,q.trigger(e.element,e.constructor.Event.SHOWN),t===un&&e._leave(null,e)}
if(this.tip.classList.contains(rn)){var g=p(this.tip)
q.one(this.tip,c,d),m(this.tip,g)}else d()}},t.hide=function(){var e=this
if(this._popper){var t=this.getTipElement(),n=function(){e._hoverState!==an&&t.parentNode&&t.parentNode.removeChild(t),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),q.trigger(e.element,e.constructor.Event.HIDDEN),e._popper.destroy()}
if(!q.trigger(this.element,this.constructor.Event.HIDE).defaultPrevented){var r
if(t.classList.remove(sn),"ontouchstart"in document.documentElement&&(r=[]).concat.apply(r,document.body.children).forEach(function(e){return q.off(e,"mouseover",_)}),this._activeTrigger.click=!1,this._activeTrigger[ln]=!1,this._activeTrigger[cn]=!1,this.tip.classList.contains(rn)){var i=p(t)
q.one(t,c,n),m(t,i)}else n()
this._hoverState=""}}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.getTipElement=function(){if(this.tip)return this.tip
var e=document.createElement("div")
return e.innerHTML=this.config.template,this.tip=e.children[0],this.tip},t.setContent=function(){var e=this.getTipElement()
this.setElementContent(ie.findOne(".tooltip-inner",e),this.getTitle()),e.classList.remove(rn,sn)},t.setElementContent=function(e,t){if(null!==e)return"object"==typeof t&&y(t)?(t.jquery&&(t=t[0]),void(this.config.html?t.parentNode!==e&&(e.innerHTML="",e.appendChild(t)):e.textContent=t.textContent)):void(this.config.html?(this.config.sanitize&&(t=zt(t,this.config.allowList,this.config.sanitizeFn)),e.innerHTML=t):e.textContent=t)},t.getTitle=function(){var e=this.element.getAttribute("data-original-title")
return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},t._getPopperConfig=function(e){var t=this
return s({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:"."+this.constructor.NAME+"-arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},this.config.popperConfig)},t._addAttachmentClass=function(e){this.getTipElement().classList.add(Qt+"-"+e)},t._getOffset=function(){var e=this,t={}
return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:y(this.config.container)?this.config.container:ie.findOne(this.config.container)},t._getAttachment=function(e){return en[e.toUpperCase()]},t._setListeners=function(){var e=this
this.config.trigger.split(" ").forEach(function(t){if("click"===t)q.on(e.element,e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)})
else if("manual"!==t){var n=t===cn?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=t===cn?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT
q.on(e.element,n,e.config.selector,function(t){return e._enter(t)}),q.on(e.element,r,e.config.selector,function(t){return e._leave(t)})}}),this._hideModalHandler=function(){e.element&&e.hide()},q.on(this.element.closest("."+on),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||I(e.delegateTarget,n))||(t=new this.constructor(e.delegateTarget,this._getDelegateConfig()),O(e.delegateTarget,n,t)),e&&(t._activeTrigger["focusin"===e.type?ln:cn]=!0),t.getTipElement().classList.contains(sn)||t._hoverState===an?t._hoverState=an:(clearTimeout(t._timeout),t._hoverState=an,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===an&&t.show()},t.config.delay.show):t.show())},t._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||I(e.delegateTarget,n))||(t=new this.constructor(e.delegateTarget,this._getDelegateConfig()),O(e.delegateTarget,n,t)),e&&(t._activeTrigger["focusout"===e.type?ln:cn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=un,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===un&&t.hide()},t.config.delay.hide):t.hide())},t._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0
return!1},t._getConfig=function(e){var t=re.getDataAttributes(this.element)
return Object.keys(t).forEach(function(e){-1!==Zt.indexOf(e)&&delete t[e]}),e&&"object"==typeof e.container&&e.container.jquery&&(e.container=e.container[0]),"number"==typeof(e=s({},this.constructor.Default,t,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),v(Gt,e,this.constructor.DefaultType),e.sanitize&&(e.template=zt(e.template,e.allowList,e.sanitizeFn)),e},t._getDelegateConfig=function(){var e={}
if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t])
return e},t._cleanTipClass=function(){var e=this.getTipElement(),t=e.getAttribute("class").match(Jt)
null!==t&&t.length>0&&t.map(function(e){return e.trim()}).forEach(function(t){return e.classList.remove(t)})},t._handlePopperPlacementChange=function(e){this.tip=e.instance.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement))},t._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation
null===e.getAttribute("x-placement")&&(e.classList.remove(rn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,Yt),r="object"==typeof t&&t
if((n||!/dispose|hide/.test(t))&&(n||(n=new e(this,r)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},e.getInstance=function(e){return I(e,Yt)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return tn}},{key:"NAME",get:function(){return Gt}},{key:"DATA_KEY",get:function(){return Yt}},{key:"Event",get:function(){return nn}},{key:"EVENT_KEY",get:function(){return $t}},{key:"DefaultType",get:function(){return Xt}}]),e}()
E(function(){var e=A()
if(e){var t=e.fn[Gt]
e.fn[Gt]=fn.jQueryInterface,e.fn[Gt].Constructor=fn,e.fn[Gt].noConflict=function(){return e.fn[Gt]=t,fn.jQueryInterface}}})
var hn="popover",dn="bs.popover",pn="."+dn,gn="bs-popover",yn=new RegExp("(^|\\s)"+gn+"\\S+","g"),mn=s({},fn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),vn=s({},fn.DefaultType,{content:"(string|element|function)"}),bn={HIDE:"hide"+pn,HIDDEN:"hidden"+pn,SHOW:"show"+pn,SHOWN:"shown"+pn,INSERTED:"inserted"+pn,CLICK:"click"+pn,FOCUSIN:"focusin"+pn,FOCUSOUT:"focusout"+pn,MOUSEENTER:"mouseenter"+pn,MOUSELEAVE:"mouseleave"+pn},wn=function(e){var t,n
function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i.isWithContent=function(){return this.getTitle()||this._getContent()},i.setContent=function(){var e=this.getTipElement()
this.setElementContent(ie.findOne(".popover-header",e),this.getTitle())
var t=this._getContent()
"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(ie.findOne(".popover-body",e),t),e.classList.remove("fade","show")},i._addAttachmentClass=function(e){this.getTipElement().classList.add(gn+"-"+e)},i._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},i._cleanTipClass=function(){var e=this.getTipElement(),t=e.getAttribute("class").match(yn)
null!==t&&t.length>0&&t.map(function(e){return e.trim()}).forEach(function(t){return e.classList.remove(t)})},r.jQueryInterface=function(e){return this.each(function(){var t=I(this,dn),n="object"==typeof e?e:null
if((t||!/dispose|hide/.test(e))&&(t||(t=new r(this,n),O(this,dn,t)),"string"==typeof e)){if(void 0===t[e])throw new TypeError('No method named "'+e+'"')
t[e]()}})},r.getInstance=function(e){return I(e,dn)},o(r,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return mn}},{key:"NAME",get:function(){return hn}},{key:"DATA_KEY",get:function(){return dn}},{key:"Event",get:function(){return bn}},{key:"EVENT_KEY",get:function(){return pn}},{key:"DefaultType",get:function(){return vn}}]),r}(fn)
E(function(){var e=A()
if(e){var t=e.fn[hn]
e.fn[hn]=wn.jQueryInterface,e.fn[hn].Constructor=wn,e.fn[hn].noConflict=function(){return e.fn[hn]=t,wn.jQueryInterface}}})
var _n="scrollspy",Sn="bs.scrollspy",An="."+Sn,En={offset:10,method:"auto",target:""},Cn={offset:"number",method:"string",target:"(string|element)"},On="activate"+An,In="scroll"+An,Pn="load"+An+".data-api",Tn="dropdown-item",kn="active",xn=".nav-link",Mn=".list-group-item",Un="position",Rn=function(){function e(e,t){var n=this
this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+xn+", "+this._config.target+" "+Mn+", "+this._config.target+" ."+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,q.on(this._scrollElement,In,function(e){return n._process(e)}),this.refresh(),this._process(),O(e,Sn,this)}var t=e.prototype
return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?"offset":Un,n="auto"===this._config.method?t:this._config.method,r=n===Un?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),ie.find(this._selector).map(function(e){var t=h(e),i=t?ie.findOne(t):null
if(i){var o=i.getBoundingClientRect()
if(o.width||o.height)return[re[n](i).top+r,t]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){P(this._element,Sn),q.off(this._scrollElement,An),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(e){if("string"!=typeof(e=s({},En,"object"==typeof e&&e?e:{})).target&&y(e.target)){var t=e.target.id
t||(t=l(_n),e.target.id=t),e.target="#"+t}return v(_n,e,Cn),e},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight()
if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1]
this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(void 0===this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])}},t._activate=function(e){this._activeTarget=e,this._clear()
var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=ie.findOne(t.join(","))
n.classList.contains(Tn)?(ie.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add(kn),n.classList.add(kn)):(n.classList.add(kn),ie.parents(n,".nav, .list-group").forEach(function(e){ie.prev(e,xn+", "+Mn).forEach(function(e){return e.classList.add(kn)}),ie.prev(e,".nav-item").forEach(function(e){ie.children(e,xn).forEach(function(e){return e.classList.add(kn)})})})),q.trigger(this._scrollElement,On,{relatedTarget:e})},t._clear=function(){ie.find(this._selector).filter(function(e){return e.classList.contains(kn)}).forEach(function(e){return e.classList.remove(kn)})},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,Sn)
if(n||(n=new e(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},e.getInstance=function(e){return I(e,Sn)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"Default",get:function(){return En}}]),e}()
q.on(window,Pn,function(){ie.find('[data-spy="scroll"]').forEach(function(e){return new Rn(e,re.getDataAttributes(e))})}),E(function(){var e=A()
if(e){var t=e.fn[_n]
e.fn[_n]=Rn.jQueryInterface,e.fn[_n].Constructor=Rn,e.fn[_n].noConflict=function(){return e.fn[_n]=t,Rn.jQueryInterface}}})
var Dn="tab",jn="bs.tab",Nn="."+jn,Ln="hide"+Nn,Fn="hidden"+Nn,Bn="show"+Nn,Hn="shown"+Nn,qn="click"+Nn+".data-api",Vn="active",Kn="fade",Wn="show",zn=".active",Gn=":scope > li > .active",Yn=function(){function e(e){this._element=e,O(this._element,jn,this)}var t=e.prototype
return t.show=function(){var e=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Vn)||this._element.classList.contains("disabled"))){var t,n=d(this._element),r=this._element.closest(".nav, .list-group")
if(r){var i="UL"===r.nodeName||"OL"===r.nodeName?Gn:zn
t=(t=ie.find(i,r))[t.length-1]}var o=null
if(t&&(o=q.trigger(t,Ln,{relatedTarget:this._element})),!(q.trigger(this._element,Bn,{relatedTarget:t}).defaultPrevented||null!==o&&o.defaultPrevented)){this._activate(this._element,r)
var s=function(){q.trigger(t,Fn,{relatedTarget:e._element}),q.trigger(e._element,Hn,{relatedTarget:t})}
n?this._activate(n,n.parentNode,s):s()}}},t.dispose=function(){P(this._element,jn),this._element=null},t._activate=function(e,t,n){var r=this,i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ie.children(t,zn):ie.find(Gn,t))[0],o=n&&i&&i.classList.contains(Kn),s=function(){return r._transitionComplete(e,i,n)}
if(i&&o){var a=p(i)
i.classList.remove(Wn),q.one(i,c,s),m(i,a)}else s()},t._transitionComplete=function(e,t,n){if(t){t.classList.remove(Vn)
var r=ie.findOne(":scope > .dropdown-menu .active",t.parentNode)
r&&r.classList.remove(Vn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Vn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),S(e),e.classList.contains(Kn)&&e.classList.add(Wn),e.parentNode&&e.parentNode.classList.contains("dropdown-menu")&&(e.closest(".dropdown")&&ie.find(".dropdown-toggle").forEach(function(e){return e.classList.add(Vn)}),e.setAttribute("aria-expanded",!0)),n&&n()},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,jn)||new e(this)
if("string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},e.getInstance=function(e){return I(e,jn)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}}]),e}()
q.on(document,qn,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(e){e.preventDefault(),(I(this,jn)||new Yn(this)).show()}),E(function(){var e=A()
if(e){var t=e.fn[Dn]
e.fn[Dn]=Yn.jQueryInterface,e.fn[Dn].Constructor=Yn,e.fn[Dn].noConflict=function(){return e.fn[Dn]=t,Yn.jQueryInterface}}})
var $n="toast",Qn="bs.toast",Jn="."+Qn,Zn="click.dismiss"+Jn,Xn="hide"+Jn,er="hidden"+Jn,tr="show"+Jn,nr="shown"+Jn,rr="hide",ir="show",or="showing",sr={animation:"boolean",autohide:"boolean",delay:"number"},ar={animation:!0,autohide:!0,delay:5e3},ur=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners(),O(e,Qn,this)}var t=e.prototype
return t.show=function(){var e=this
if(!q.trigger(this._element,tr).defaultPrevented){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade")
var t=function(){e._element.classList.remove(or),e._element.classList.add(ir),q.trigger(e._element,nr),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))}
if(this._element.classList.remove(rr),S(this._element),this._element.classList.add(or),this._config.animation){var n=p(this._element)
q.one(this._element,c,t),m(this._element,n)}else t()}},t.hide=function(){var e=this
if(this._element.classList.contains(ir)&&!q.trigger(this._element,Xn).defaultPrevented){var t=function(){e._element.classList.add(rr),q.trigger(e._element,er)}
if(this._element.classList.remove(ir),this._config.animation){var n=p(this._element)
q.one(this._element,c,t),m(this._element,n)}else t()}},t.dispose=function(){this._clearTimeout(),this._element.classList.contains(ir)&&this._element.classList.remove(ir),q.off(this._element,Zn),P(this._element,Qn),this._element=null,this._config=null},t._getConfig=function(e){return e=s({},ar,re.getDataAttributes(this._element),"object"==typeof e&&e?e:{}),v($n,e,this.constructor.DefaultType),e},t._setListeners=function(){var e=this
q.on(this._element,Zn,'[data-dismiss="toast"]',function(){return e.hide()})},t._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},e.jQueryInterface=function(t){return this.each(function(){var n=I(this,Qn)
if(n||(n=new e(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t](this)}})},e.getInstance=function(e){return I(e,Qn)},o(e,null,[{key:"VERSION",get:function(){return"5.0.0-alpha3"}},{key:"DefaultType",get:function(){return sr}},{key:"Default",get:function(){return ar}}]),e}()
E(function(){var e=A()
if(e){var t=e.fn[$n]
e.fn[$n]=ur.jQueryInterface,e.fn[$n].Constructor=ur,e.fn[$n].noConflict=function(){return e.fn[$n]=t,ur.jQueryInterface}}})},1577:(e,t,n)=>{"use strict"
var r=n(485),i=n(4869),o=function(e,t,n){for(var r,i=e;null!=(r=i.next);i=r)if(r.key===t)return i.next=r.next,n||(r.next=e.next,e.next=r),r}
e.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new i("Side channel does not contain "+r(e))},delete:function(t){var n=e&&e.next,r=function(e,t){if(e)return o(e,t,!0)}(e,t)
return r&&n&&n===r&&(e=void 0),!!r},get:function(t){return function(e,t){if(e){var n=o(e,t)
return n&&n.value}}(e,t)},has:function(t){return function(e,t){return!!e&&!!o(e,t)}(e,t)},set:function(t,n){e||(e={next:void 0}),function(e,t,n){var r=o(e,t)
r?r.value=n:e.next={key:t,next:e.next,value:n}}(e,t,n)}}
return t}},1729:(e,t,n)=>{var r,i,o
void 0===(i="function"==typeof(r=o=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e]
for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():""
try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape)
var a=""
for(var u in o)o[u]&&(a+="; "+u,!0!==o[u]&&(a+="="+o[u].split(";")[0]))
return document.cookie=t+"="+n+a}}function s(e,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),u=a.slice(1).join("=")
n||'"'!==u.charAt(0)||(u=u.slice(1,-1))
try{var c=t(a[0])
if(u=(r.read||r)(u,c)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(i[c]=u,e===c)break}catch(e){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return s(e,!1)},i.getJSON=function(e){return s(e,!0)},i.remove=function(t,n){o(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}(function(){})})?r.call(t,n,t,e):r)||(e.exports=i),e.exports=o()},1755:e=>{"use strict"
var t=Object.prototype.toString,n=Math.max,r=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r]
for(var i=0;i<t.length;i+=1)n[i+e.length]=t[i]
return n}
e.exports=function(e){var i=this
if("function"!=typeof i||"[object Function]"!==t.apply(i))throw new TypeError("Function.prototype.bind called on incompatible "+i)
for(var o,s=function(e){for(var t=[],n=1,r=0;n<e.length;n+=1,r+=1)t[r]=e[n]
return t}(arguments),a=n(0,i.length-s.length),u=[],c=0;c<a;c++)u[c]="$"+c
if(o=Function("binder","return function ("+function(e){for(var t="",n=0;n<e.length;n+=1)t+=e[n],n+1<e.length&&(t+=",")
return t}(u)+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof o){var t=i.apply(this,r(s,arguments))
return Object(t)===t?t:this}return i.apply(e,r(s,arguments))}),i.prototype){var l=function(){}
l.prototype=i.prototype,o.prototype=new l,l.prototype=null}return o}},1890:e=>{"use strict"
e.exports="undefined"!=typeof Reflect&&Reflect.getPrototypeOf||null},2095:e=>{"use strict"
e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1
if("symbol"==typeof Symbol.iterator)return!0
var e={},t=Symbol("test"),n=Object(t)
if("string"==typeof t)return!1
if("[object Symbol]"!==Object.prototype.toString.call(t))return!1
if("[object Symbol]"!==Object.prototype.toString.call(n))return!1
for(var r in e[t]=42,e)return!1
if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1
if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1
var i=Object.getOwnPropertySymbols(e)
if(1!==i.length||i[0]!==t)return!1
if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1
if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t)
if(42!==o.value||!0!==o.enumerable)return!1}return!0}},2185:(e,t)=>{t.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,f=n?i-1:0,h=n?-1:1,d=e[t+f]
for(f+=h,o=d&(1<<-l)-1,d>>=-l,l+=a;l>0;o=256*o+e[t+f],f+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+f],f+=h,l-=8);if(0===o)o=1-c
else{if(o===u)return s?NaN:1/0*(d?-1:1)
s+=Math.pow(2,r),o-=c}return(d?-1:1)*s*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(t*u-1)*Math.pow(2,i),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+d]=255&s,d+=p,s/=256,c-=8);e[n+d-p]|=128*g}},2268:(e,t)=>{"use strict"
t.byteLength=function(e){var t=a(e),n=t[0],r=t[1]
return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,o=a(e),s=o[0],u=o[1],c=new i(function(e,t,n){return 3*(t+n)/4-n}(0,s,u)),l=0,f=u>0?s-4:s
for(n=0;n<f;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t
return 2===u&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,c[l++]=255&t),1===u&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t),c},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,o=[],s=16383,a=0,u=r-i;a<u;a+=s)o.push(c(e,a,a+s>u?u:a+s))
return 1===i?(t=e[r-1],o.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],o.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"=")),o.join("")}
for(var n=[],r=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)n[s]=o[s],r[o.charCodeAt(s)]=s
function a(e){var t=e.length
if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var n=e.indexOf("=")
return-1===n&&(n=t),[n,n===t?0:4-n%4]}function u(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[63&e]}function c(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(u(r))
return i.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},2306:function(e,t,n){var r
e.exports=(r=n(631),function(){if("function"==typeof ArrayBuffer){var e=r.lib.WordArray,t=e.init,n=e.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var n=e.byteLength,r=[],i=0;i<n;i++)r[i>>>2]|=e[i]<<24-i%4*8
t.call(this,r,n)}else t.apply(this,arguments)}
n.prototype=e}}(),r.lib.WordArray)},2339:(e,t,n)=>{"use strict"
var r=Function.prototype.call,i=Object.prototype.hasOwnProperty,o=n(3189)
e.exports=o.call(r,i)},2499:function(e,t,n){var r,i,o
e.exports=(i=(r=n(631)).lib.Base,o=r.enc.Utf8,void(r.algo.HMAC=i.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=o.parse(t))
var n=e.blockSize,r=4*n
t.sigBytes>r&&(t=e.finalize(t)),t.clamp()
for(var i=this._oKey=t.clone(),s=this._iKey=t.clone(),a=i.words,u=s.words,c=0;c<n;c++)a[c]^=1549556828,u[c]^=909522486
i.sigBytes=s.sigBytes=r,this.reset()},reset:function(){var e=this._hasher
e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e)
return t.reset(),t.finalize(this._oKey.clone().concat(n))}})))},2812:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0
var r=n(3426),i=n(7657),o=n(2932),s=function(){function e(e){this.toHash=new Uint8Array(0),void 0!==e&&(this.key=new Promise(function(t,n){(0,o.locateWindow)().crypto.subtle.importKey("raw",(0,r.convertToBuffer)(e),i.SHA_256_HMAC_ALGO,!1,["sign"]).then(t,n)}),this.key.catch(function(){}))}return e.prototype.update=function(e){if(!(0,r.isEmptyData)(e)){var t=(0,r.convertToBuffer)(e),n=new Uint8Array(this.toHash.byteLength+t.byteLength)
n.set(this.toHash,0),n.set(t,this.toHash.byteLength),this.toHash=n}},e.prototype.digest=function(){var e=this
return this.key?this.key.then(function(t){return(0,o.locateWindow)().crypto.subtle.sign(i.SHA_256_HMAC_ALGO,t,e.toHash).then(function(e){return new Uint8Array(e)})}):(0,r.isEmptyData)(this.toHash)?Promise.resolve(i.EMPTY_DATA_SHA_256):Promise.resolve().then(function(){return(0,o.locateWindow)().crypto.subtle.digest(i.SHA_256_HASH,e.toHash)}).then(function(e){return Promise.resolve(new Uint8Array(e))})},e}()
t.Sha256=s},2932:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{locateWindow:()=>i})
const r={}
function i(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:r}},3121:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0
var r=n(4473),i=n(8216),o=n(5416),s=n(3426),a=function(){function e(e){if(this.hash=new o.RawSha256,e){this.outer=new o.RawSha256
var t=function(e){var t=(0,s.convertToBuffer)(e)
if(t.byteLength>i.BLOCK_SIZE){var n=new o.RawSha256
n.update(t),t=n.digest()}var r=new Uint8Array(i.BLOCK_SIZE)
return r.set(t),r}(e),n=new Uint8Array(i.BLOCK_SIZE)
n.set(t)
for(var r=0;r<i.BLOCK_SIZE;r++)t[r]^=54,n[r]^=92
for(this.hash.update(t),this.outer.update(n),r=0;r<t.byteLength;r++)t[r]=0}}return e.prototype.update=function(e){if(!(0,s.isEmptyData)(e)&&!this.error)try{this.hash.update((0,s.convertToBuffer)(e))}catch(e){this.error=e}},e.prototype.digestSync=function(){if(this.error)throw this.error
return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},e.prototype.digest=function(){return(0,r.__awaiter)(this,void 0,void 0,function(){return(0,r.__generator)(this,function(e){return[2,this.digestSync()]})})},e}()
t.Sha256=a},3144:e=>{var t={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},3189:(e,t,n)=>{"use strict"
var r=n(1755)
e.exports=Function.prototype.bind||r},3200:e=>{"use strict"
var t=String.prototype.replace,n=/%20/g,r="RFC3986"
e.exports={default:r,formatters:{RFC1738:function(e){return t.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:r}},3426:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.uint32ArrayFrom=t.numToUint8=t.isEmptyData=t.convertToBuffer=void 0
var r=n(8274)
Object.defineProperty(t,"convertToBuffer",{enumerable:!0,get:function(){return r.convertToBuffer}})
var i=n(1091)
Object.defineProperty(t,"isEmptyData",{enumerable:!0,get:function(){return i.isEmptyData}})
var o=n(9671)
Object.defineProperty(t,"numToUint8",{enumerable:!0,get:function(){return o.numToUint8}})
var s=n(4968)
Object.defineProperty(t,"uint32ArrayFrom",{enumerable:!0,get:function(){return s.uint32ArrayFrom}})},3569:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),(0,n(4473).__exportStar)(n(3121),t)},3598:e=>{"use strict"
e.exports=SyntaxError},3614:(e,t,n)=>{e.exports=self.fetch||(self.fetch=n(140).default||n(140))},3797:(e,t,n)=>{"use strict"
n.d(t,{A:()=>te})
var r="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,i=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(r&&navigator.userAgent.indexOf(e[t])>=0)return 1
return 0}(),o=r&&window.Promise?function(e){var t=!1
return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1
return function(){t||(t=!0,setTimeout(function(){t=!1,e()},i))}}
function s(e){return e&&"[object Function]"==={}.toString.call(e)}function a(e,t){if(1!==e.nodeType)return[]
var n=e.ownerDocument.defaultView.getComputedStyle(e,null)
return t?n[t]:n}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body
switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body
case"#document":return e.body}var t=a(e),n=t.overflow,r=t.overflowX,i=t.overflowY
return/(auto|scroll|overlay)/.test(n+i+r)?e:c(u(e))}function l(e){return e&&e.referenceNode?e.referenceNode:e}var f=r&&!(!window.MSInputMethodContext||!document.documentMode),h=r&&/MSIE 10/.test(navigator.userAgent)
function d(e){return 11===e?f:10===e?h:f||h}function p(e){if(!e)return document.documentElement
for(var t=d(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent
var r=n&&n.nodeName
return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function g(e){return null!==e.parentNode?g(e.parentNode):e}function y(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,i=n?t:e,o=document.createRange()
o.setStart(r,0),o.setEnd(i,0)
var s,a,u=o.commonAncestorContainer
if(e!==u&&t!==u||r.contains(i))return"BODY"===(a=(s=u).nodeName)||"HTML"!==a&&p(s.firstElementChild)!==s?p(u):u
var c=g(e)
return c.host?y(c.host,t):y(e,g(t).host)}function m(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName
if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement
return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function v(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom"
return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+r+"Width"])}function b(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],d(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function w(e){var t=e.body,n=e.documentElement,r=d(10)&&getComputedStyle(n)
return{height:b("Height",t,n,r),width:b("Width",t,n,r)}}var _=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function E(e){return A({},e,{right:e.left+e.width,bottom:e.top+e.height})}function C(e){var t={}
try{if(d(10)){t=e.getBoundingClientRect()
var n=m(e,"top"),r=m(e,"left")
t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?w(e.ownerDocument):{},s=o.width||e.clientWidth||i.width,u=o.height||e.clientHeight||i.height,c=e.offsetWidth-s,l=e.offsetHeight-u
if(c||l){var f=a(e)
c-=v(f,"x"),l-=v(f,"y"),i.width-=c,i.height-=l}return E(i)}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(10),i="HTML"===t.nodeName,o=C(e),s=C(t),u=c(e),l=a(t),f=parseFloat(l.borderTopWidth),h=parseFloat(l.borderLeftWidth)
n&&i&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0))
var p=E({top:o.top-s.top-f,left:o.left-s.left-h,width:o.width,height:o.height})
if(p.marginTop=0,p.marginLeft=0,!r&&i){var g=parseFloat(l.marginTop),y=parseFloat(l.marginLeft)
p.top-=f-g,p.bottom-=f-g,p.left-=h-y,p.right-=h-y,p.marginTop=g,p.marginLeft=y}return(r&&!n?t.contains(u):t===u&&"BODY"!==u.nodeName)&&(p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m(t,"top"),i=m(t,"left"),o=n?-1:1
return e.top+=r*o,e.bottom+=r*o,e.left+=i*o,e.right+=i*o,e}(p,t)),p}function I(e){var t=e.nodeName
if("BODY"===t||"HTML"===t)return!1
if("fixed"===a(e,"position"))return!0
var n=u(e)
return!!n&&I(n)}function P(e){if(!e||!e.parentElement||d())return document.documentElement
for(var t=e.parentElement;t&&"none"===a(t,"transform");)t=t.parentElement
return t||document.documentElement}function T(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=i?P(e):y(e,l(t))
if("viewport"===r)o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=O(e,n),i=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:m(n),a=t?0:m(n,"left")
return E({top:s-r.top+r.marginTop,left:a-r.left+r.marginLeft,width:i,height:o})}(s,i)
else{var a=void 0
"scrollParent"===r?"BODY"===(a=c(u(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===r?e.ownerDocument.documentElement:r
var f=O(a,s,i)
if("HTML"!==a.nodeName||I(s))o=f
else{var h=w(e.ownerDocument),d=h.height,p=h.width
o.top+=f.top-f.marginTop,o.bottom=d+f.top,o.left+=f.left-f.marginLeft,o.right=p+f.left}}var g="number"==typeof(n=n||0)
return o.left+=g?n:n.left||0,o.top+=g?n:n.top||0,o.right-=g?n:n.right||0,o.bottom-=g?n:n.bottom||0,o}function k(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===e.indexOf("auto"))return e
var s=T(n,r,o,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},u=Object.keys(a).map(function(e){return A({key:e},a[e],{area:(t=a[e],t.width*t.height)})
var t}).sort(function(e,t){return t.area-e.area}),c=u.filter(function(e){var t=e.width,r=e.height
return t>=n.clientWidth&&r>=n.clientHeight}),l=c.length>0?c[0].key:u[0].key,f=e.split("-")[1]
return l+(f?"-"+f:"")}function x(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return O(n,r?P(t):y(t,l(n)),r)}function M(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0)
return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function U(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"}
return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function R(e,t,n){n=n.split("-")[0]
var r=M(e),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",u=o?"height":"width",c=o?"width":"height"
return i[s]=t[s]+t[u]/2-r[u]/2,i[a]=n===a?t[a]-r[c]:t[U(a)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function j(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n})
var r=D(e,function(e){return e[t]===n})
return e.indexOf(r)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=e.function||e.fn
e.enabled&&s(n)&&(t.offsets.popper=E(t.offsets.popper),t.offsets.reference=E(t.offsets.reference),t=n(t,e))}),t}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
e.offsets.reference=x(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=k(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=R(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=j(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function L(e,t){return e.some(function(e){var n=e.name
return e.enabled&&n===t})}function F(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var i=t[r],o=i?""+i+n:e
if(void 0!==document.body.style[o])return o}return null}function B(){return this.state.isDestroyed=!0,L(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[F("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e){var t=e.ownerDocument
return t?t.defaultView:window}function q(e,t,n,r){var i="BODY"===e.nodeName,o=i?e.ownerDocument.defaultView:e
o.addEventListener(t,n,{passive:!0}),i||q(c(o.parentNode),t,n,r),r.push(o)}function V(e,t,n,r){n.updateBound=r,H(e).addEventListener("resize",n.updateBound,{passive:!0})
var i=c(e)
return q(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function K(){this.state.eventsEnabled||(this.state=V(this.reference,this.options,this.state,this.scheduleUpdate))}function W(){var e,t
this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,H(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function z(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function G(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&z(t[n])&&(r="px"),e.style[n]=t[n]+r})}var Y=r&&/Firefox/i.test(navigator.userAgent)
function $(e,t,n){var r=D(e,function(e){return e.name===t}),i=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order})
if(!i){var o="`"+t+"`",s="`"+n+"`"
console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var Q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],J=Q.slice(3)
function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=J.indexOf(e),r=J.slice(n+1).concat(J.slice(0,n))
return t?r.reverse():r}var X={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1]
if(r){var i=e.offsets,o=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(n),u=a?"left":"top",c=a?"width":"height",l={start:S({},u,o[u]),end:S({},u,o[u]+o[c]-s[c])}
e.offsets.popper=A({},s,l[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,r=t.offset,i=e.placement,o=e.offsets,s=o.popper,a=o.reference,u=i.split("-")[0]
return n=z(+r)?[+r,0]:function(e,t,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(D(s,function(e){return-1!==e.search(/,|\s/)}))
s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var u=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(u)[0]]),[s[a].split(u)[1]].concat(s.slice(a+1))]:[s]
return(c=c.map(function(e,r){var i=(1===r?!o:o)?"height":"width",s=!1
return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],s=i[2]
return o?0===s.indexOf("%")?E("%p"===s?n:r)[t]/100*o:"vh"===s||"vw"===s?("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o:e}(e,i,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){z(n)&&(i[t]+=n*("-"===e[r-1]?-1:1))})}),i}(r,s,a,u),"left"===u?(s.top+=n[0],s.left-=n[1]):"right"===u?(s.top+=n[0],s.left+=n[1]):"top"===u?(s.left+=n[0],s.top-=n[1]):"bottom"===u&&(s.left+=n[0],s.top+=n[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||p(e.instance.popper)
e.instance.reference===n&&(n=p(n))
var r=F("transform"),i=e.instance.popper.style,o=i.top,s=i.left,a=i[r]
i.top="",i.left="",i[r]=""
var u=T(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed)
i.top=o,i.left=s,i[r]=a,t.boundaries=u
var c=t.priority,l=e.offsets.popper,f={primary:function(e){var n=l[e]
return l[e]<u[e]&&!t.escapeWithReference&&(n=Math.max(l[e],u[e])),S({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=l[n]
return l[e]>u[e]&&!t.escapeWithReference&&(r=Math.min(l[n],u[e]-("right"===e?l.width:l.height))),S({},n,r)}}
return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary"
l=A({},l,f[t](e))}),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,i=e.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",u=s?"left":"top",c=s?"width":"height"
return n[a]<o(r[u])&&(e.offsets.popper[u]=o(r[u])-n[c]),n[u]>o(r[a])&&(e.offsets.popper[u]=o(r[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n
if(!$(e.instance.modifiers,"arrow","keepTogether"))return e
var r=t.element
if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e
var i=e.placement.split("-")[0],o=e.offsets,s=o.popper,u=o.reference,c=-1!==["left","right"].indexOf(i),l=c?"height":"width",f=c?"Top":"Left",h=f.toLowerCase(),d=c?"left":"top",p=c?"bottom":"right",g=M(r)[l]
u[p]-g<s[h]&&(e.offsets.popper[h]-=s[h]-(u[p]-g)),u[h]+g>s[p]&&(e.offsets.popper[h]+=u[h]+g-s[p]),e.offsets.popper=E(e.offsets.popper)
var y=u[h]+u[l]/2-g/2,m=a(e.instance.popper),v=parseFloat(m["margin"+f]),b=parseFloat(m["border"+f+"Width"]),w=y-e.offsets.popper[h]-v-b
return w=Math.max(Math.min(s[l]-g,w),0),e.arrowElement=r,e.offsets.arrow=(S(n={},h,Math.round(w)),S(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(L(e.instance.modifiers,"inner"))return e
if(e.flipped&&e.placement===e.originalPlacement)return e
var n=T(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],i=U(r),o=e.placement.split("-")[1]||"",s=[]
switch(t.behavior){case"flip":s=[r,i]
break
case"clockwise":s=Z(r)
break
case"counterclockwise":s=Z(r,!0)
break
default:s=t.behavior}return s.forEach(function(a,u){if(r!==a||s.length===u+1)return e
r=e.placement.split("-")[0],i=U(r)
var c=e.offsets.popper,l=e.offsets.reference,f=Math.floor,h="left"===r&&f(c.right)>f(l.left)||"right"===r&&f(c.left)<f(l.right)||"top"===r&&f(c.bottom)>f(l.top)||"bottom"===r&&f(c.top)<f(l.bottom),d=f(c.left)<f(n.left),p=f(c.right)>f(n.right),g=f(c.top)<f(n.top),y=f(c.bottom)>f(n.bottom),m="left"===r&&d||"right"===r&&p||"top"===r&&g||"bottom"===r&&y,v=-1!==["top","bottom"].indexOf(r),b=!!t.flipVariations&&(v&&"start"===o&&d||v&&"end"===o&&p||!v&&"start"===o&&g||!v&&"end"===o&&y),w=!!t.flipVariationsByContent&&(v&&"start"===o&&p||v&&"end"===o&&d||!v&&"start"===o&&y||!v&&"end"===o&&g),_=b||w;(h||m||_)&&(e.flipped=!0,(h||m)&&(r=s[u+1]),_&&(o=function(e){return"end"===e?"start":"start"===e?"end":e}(o)),e.placement=r+(o?"-"+o:""),e.offsets.popper=A({},e.offsets.popper,R(e.instance.popper,e.offsets.reference,e.placement)),e=j(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,i=r.popper,o=r.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return i[s?"left":"top"]=o[n]-(a?i[s?"width":"height"]:0),e.placement=U(t),e.offsets.popper=E(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!$(e.instance.modifiers,"hide","preventOverflow"))return e
var t=e.offsets.reference,n=D(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries
if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e
e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e
e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,i=e.offsets.popper,o=D(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration
void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var s,a,u=void 0!==o?o:t.gpuAcceleration,c=p(e.instance.popper),l=C(c),f={position:i.position},h=function(e,t){var n=e.offsets,r=n.popper,i=n.reference,o=Math.round,s=Math.floor,a=function(e){return e},u=o(i.width),c=o(r.width),l=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),h=t?l||f||u%2==c%2?o:s:a,d=t?o:a
return{left:h(u%2==1&&c%2==1&&!f&&t?r.left-1:r.left),top:d(r.top),bottom:d(r.bottom),right:h(r.right)}}(e,window.devicePixelRatio<2||!Y),d="bottom"===n?"top":"bottom",g="right"===r?"left":"right",y=F("transform")
if(a="bottom"===d?"HTML"===c.nodeName?-c.clientHeight+h.bottom:-l.height+h.bottom:h.top,s="right"===g?"HTML"===c.nodeName?-c.clientWidth+h.right:-l.width+h.right:h.left,u&&y)f[y]="translate3d("+s+"px, "+a+"px, 0)",f[d]=0,f[g]=0,f.willChange="transform"
else{var m="bottom"===d?-1:1,v="right"===g?-1:1
f[d]=a*m,f[g]=s*v,f.willChange=d+", "+g}var b={"x-placement":e.placement}
return e.attributes=A({},b,e.attributes),e.styles=A({},f,e.styles),e.arrowStyles=A({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n
return G(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&G(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,i){var o=x(i,t,e,n.positionFixed),s=k(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return t.setAttribute("x-placement",s),G(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ee=function(){function e(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=o(this.update.bind(this)),this.options=A({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(A({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){r.options.modifiers[t]=A({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return A({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update()
var a=this.options.eventsEnabled
a&&this.enableEventListeners(),this.state.eventsEnabled=a}return _(e,[{key:"update",value:function(){return N.call(this)}},{key:"destroy",value:function(){return B.call(this)}},{key:"enableEventListeners",value:function(){return K.call(this)}},{key:"disableEventListeners",value:function(){return W.call(this)}}]),e}()
ee.Utils=("undefined"!=typeof window?window:global).PopperUtils,ee.placements=Q,ee.Defaults=X
const te=ee},3833:(e,t,n)=>{"use strict"
var r=n(3200),i=Object.prototype.hasOwnProperty,o=Array.isArray,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}(),a=function(e,t){for(var n=t&&t.plainObjects?{__proto__:null}:{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r])
return n},u=1024
e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var i=t[r],s=i.obj[i.prop],a=Object.keys(s),u=0;u<a.length;++u){var c=a[u],l=s[c]
"object"==typeof l&&null!==l&&-1===n.indexOf(l)&&(t.push({obj:s,prop:c}),n.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop]
if(o(n)){for(var r=[],i=0;i<n.length;++i)void 0!==n[i]&&r.push(n[i])
t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ")
if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(r)}catch(e){return r}},encode:function(e,t,n,i,o){if(0===e.length)return e
var a=e
if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===n)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"})
for(var c="",l=0;l<a.length;l+=u){for(var f=a.length>=u?a.slice(l,l+u):a,h=[],d=0;d<f.length;++d){var p=f.charCodeAt(d)
45===p||46===p||95===p||126===p||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||o===r.RFC1738&&(40===p||41===p)?h[h.length]=f.charAt(d):p<128?h[h.length]=s[p]:p<2048?h[h.length]=s[192|p>>6]+s[128|63&p]:p<55296||p>=57344?h[h.length]=s[224|p>>12]+s[128|p>>6&63]+s[128|63&p]:(d+=1,p=65536+((1023&p)<<10|1023&f.charCodeAt(d)),h[h.length]=s[240|p>>18]+s[128|p>>12&63]+s[128|p>>6&63]+s[128|63&p])}c+=h.join("")}return c},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]))
return n}return t(e)},merge:function e(t,n,r){if(!n)return t
if("object"!=typeof n&&"function"!=typeof n){if(o(t))t.push(n)
else{if(!t||"object"!=typeof t)return[t,n];(r&&(r.plainObjects||r.allowPrototypes)||!i.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n)
var s=t
return o(t)&&!o(n)&&(s=a(t,r)),o(t)&&o(n)?(n.forEach(function(n,o){if(i.call(t,o)){var s=t[o]
s&&"object"==typeof s&&n&&"object"==typeof n?t[o]=e(s,n,r):t.push(n)}else t[o]=n}),t):Object.keys(n).reduce(function(t,o){var s=n[o]
return i.call(t,o)?t[o]=e(t[o],s,r):t[o]=s,t},s)}}},3880:e=>{"use strict"
e.exports=Math.round},3982:(e,t,n)=>{"use strict"
var r=n(1890),i=n(6314),o=n(6442)
e.exports=r?function(e){return r(e)}:i?function(e){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("getProto: not an object")
return i(e)}:o?function(e){return o(e)}:null},4024:function(e,t,n){var r
e=n.nmd(e),function(){t&&t.nodeType,e&&e.nodeType
var i="object"==typeof global&&global
i.global!==i&&i.window!==i&&i.self
var o,s=2147483647,a=36,u=/^xn--/,c=/[^\x20-\x7E]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},h=Math.floor,d=String.fromCharCode
function p(e){throw new RangeError(f[e])}function g(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n])
return r}function y(e,t){var n=e.split("@"),r=""
return n.length>1&&(r=n[0]+"@",e=n[1]),r+g((e=e.replace(l,".")).split("."),t).join(".")}function m(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function v(e){return g(e,function(e){var t=""
return e>65535&&(t+=d((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+d(e)}).join("")}function b(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:a}function w(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function _(e,t,n){var r=0
for(e=n?h(e/700):e>>1,e+=h(e/t);e>455;r+=a)e=h(e/35)
return h(r+36*e/(e+38))}function S(e){var t,n,r,i,o,u,c,l,f,d,g=[],y=e.length,m=0,w=128,S=72
for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&p("not-basic"),g.push(e.charCodeAt(r))
for(i=n>0?n+1:0;i<y;){for(o=m,u=1,c=a;i>=y&&p("invalid-input"),((l=b(e.charCodeAt(i++)))>=a||l>h((s-m)/u))&&p("overflow"),m+=l*u,!(l<(f=c<=S?1:c>=S+26?26:c-S));c+=a)u>h(s/(d=a-f))&&p("overflow"),u*=d
S=_(m-o,t=g.length+1,0==o),h(m/t)>s-w&&p("overflow"),w+=h(m/t),m%=t,g.splice(m++,0,w)}return v(g)}function A(e){var t,n,r,i,o,u,c,l,f,g,y,v,b,S,A,E=[]
for(v=(e=m(e)).length,t=128,n=0,o=72,u=0;u<v;++u)(y=e[u])<128&&E.push(d(y))
for(r=i=E.length,i&&E.push("-");r<v;){for(c=s,u=0;u<v;++u)(y=e[u])>=t&&y<c&&(c=y)
for(c-t>h((s-n)/(b=r+1))&&p("overflow"),n+=(c-t)*b,t=c,u=0;u<v;++u)if((y=e[u])<t&&++n>s&&p("overflow"),y==t){for(l=n,f=a;!(l<(g=f<=o?1:f>=o+26?26:f-o));f+=a)A=l-g,S=a-g,E.push(d(w(g+A%S,0))),l=h(A/S)
E.push(d(w(l,0))),o=_(n,b,r==i),n=0,++r}++n,++t}return E.join("")}o={version:"1.4.1",ucs2:{decode:m,encode:v},decode:S,encode:A,toASCII:function(e){return y(e,function(e){return c.test(e)?"xn--"+A(e):e})},toUnicode:function(e){return y(e,function(e){return u.test(e)?S(e.slice(4).toLowerCase()):e})}},void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},4161:e=>{"use strict"
e.exports=Error},4317:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyData=void 0,t.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}},4339:(e,t,n)=>{"use strict"
var r=n(3833),i=Object.prototype.hasOwnProperty,o=Array.isArray,s={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:r.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},u=function(e,t,n){if(e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1)return e.split(",")
if(t.throwOnLimitExceeded&&n>=t.arrayLimit)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(1===t.arrayLimit?"":"s")+" allowed in an array.")
return e},c=function(e,t,n,o){if(e){var s=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,c=n.depth>0&&/(\[[^[\]]*])/.exec(s),l=c?s.slice(0,c.index):s,f=[]
if(l){if(!n.plainObjects&&i.call(Object.prototype,l)&&!n.allowPrototypes)return
f.push(l)}for(var h=0;n.depth>0&&null!==(c=a.exec(s))&&h<n.depth;){if(h+=1,!n.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return
f.push(c[1])}if(c){if(!0===n.strictDepth)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true")
f.push("["+s.slice(c.index)+"]")}return function(e,t,n,i){var o=0
if(e.length>0&&"[]"===e[e.length-1]){var s=e.slice(0,-1).join("")
o=Array.isArray(t)&&t[s]?t[s].length:0}for(var a=i?t:u(t,n,o),c=e.length-1;c>=0;--c){var l,f=e[c]
if("[]"===f&&n.parseArrays)l=n.allowEmptyArrays&&(""===a||n.strictNullHandling&&null===a)?[]:r.combine([],a)
else{l=n.plainObjects?{__proto__:null}:{}
var h="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,d=n.decodeDotInKeys?h.replace(/%2E/g,"."):h,p=parseInt(d,10)
n.parseArrays||""!==d?!isNaN(p)&&f!==d&&String(p)===d&&p>=0&&n.parseArrays&&p<=n.arrayLimit?(l=[])[p]=a:"__proto__"!==d&&(l[d]=a):l={0:a}}a=l}return a}(f,t,n,o)}}
e.exports=function(e,t){var n=function(e){if(!e)return s
if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided")
if(void 0!==e.decodeDotInKeys&&"boolean"!=typeof e.decodeDotInKeys)throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided")
if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
if(void 0!==e.throwOnLimitExceeded&&"boolean"!=typeof e.throwOnLimitExceeded)throw new TypeError("`throwOnLimitExceeded` option must be a boolean")
var t=void 0===e.charset?s.charset:e.charset,n=void 0===e.duplicates?s.duplicates:e.duplicates
if("combine"!==n&&"first"!==n&&"last"!==n)throw new TypeError("The duplicates option must be either combine, first, or last")
return{allowDots:void 0===e.allowDots?!0===e.decodeDotInKeys||s.allowDots:!!e.allowDots,allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:s.allowEmptyArrays,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:s.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:s.comma,decodeDotInKeys:"boolean"==typeof e.decodeDotInKeys?e.decodeDotInKeys:s.decodeDotInKeys,decoder:"function"==typeof e.decoder?e.decoder:s.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:s.depth,duplicates:n,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:s.plainObjects,strictDepth:"boolean"==typeof e.strictDepth?!!e.strictDepth:s.strictDepth,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling,throwOnLimitExceeded:"boolean"==typeof e.throwOnLimitExceeded&&e.throwOnLimitExceeded}}(t)
if(""===e||null==e)return n.plainObjects?{__proto__:null}:{}
for(var l="string"==typeof e?function(e,t){var n={__proto__:null},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
c=c.replace(/%5B/gi,"[").replace(/%5D/gi,"]")
var l=t.parameterLimit===1/0?void 0:t.parameterLimit,f=c.split(t.delimiter,t.throwOnLimitExceeded?l+1:l)
if(t.throwOnLimitExceeded&&f.length>l)throw new RangeError("Parameter limit exceeded. Only "+l+" parameter"+(1===l?"":"s")+" allowed.")
var h,d=-1,p=t.charset
if(t.charsetSentinel)for(h=0;h<f.length;++h)0===f[h].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[h]?p="utf-8":"utf8=%26%2310003%3B"===f[h]&&(p="iso-8859-1"),d=h,h=f.length)
for(h=0;h<f.length;++h)if(h!==d){var g,y,m=f[h],v=m.indexOf("]="),b=-1===v?m.indexOf("="):v+1;-1===b?(g=t.decoder(m,s.decoder,p,"key"),y=t.strictNullHandling?null:""):(g=t.decoder(m.slice(0,b),s.decoder,p,"key"),y=r.maybeMap(u(m.slice(b+1),t,o(n[g])?n[g].length:0),function(e){return t.decoder(e,s.decoder,p,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===p&&(y=a(String(y))),m.indexOf("[]=")>-1&&(y=o(y)?[y]:y)
var w=i.call(n,g)
w&&"combine"===t.duplicates?n[g]=r.combine(n[g],y):w&&"last"!==t.duplicates||(n[g]=y)}return n}(e,n):e,f=n.plainObjects?{__proto__:null}:{},h=Object.keys(l),d=0;d<h.length;++d){var p=h[d],g=c(p,l[p],n,"string"==typeof e)
f=r.merge(f,g,n)}return!0===n.allowSparse?f:r.compact(f)}},4473:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{__assign:()=>o,__asyncDelegator:()=>w,__asyncGenerator:()=>b,__asyncValues:()=>_,__await:()=>v,__awaiter:()=>l,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>O,__createBinding:()=>h,__decorate:()=>a,__exportStar:()=>d,__extends:()=>i,__generator:()=>f,__importDefault:()=>E,__importStar:()=>A,__makeTemplateObject:()=>S,__metadata:()=>c,__param:()=>u,__read:()=>g,__rest:()=>s,__spread:()=>y,__spreadArrays:()=>m,__values:()=>p})
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s)
return o>3&&s&&Object.defineProperty(t,n,s),s}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})}function f(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]))
return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s]
return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r
function s(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){o.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{(n=i[e](t)).value instanceof v?Promise.resolve(n.value.v).then(u,c):l(o[0][2],n)}catch(e){l(o[0][3],e)}var n}function u(e){a("next",e)}function c(e){a("throw",e)}function l(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function w(e){var t,n
return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,i){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,i,(t=e[n](t)).done,t.value)})}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function A(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}function O(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance")
return t.set(e,n),n}},4488:e=>{"use strict"
e.exports=Math.abs},4492:(e,t,n)=>{"use strict"
var r=n(3189),i=n(4869),o=n(7050),s=n(6590)
e.exports=function(e){if(e.length<1||"function"!=typeof e[0])throw new i("a function is required")
return s(r,o,e)}},4677:(e,t,n)=>{"use strict"
var r=n(4983),i=n(7946),o=n(485),s=n(665),a=n(4869),u=r("%WeakMap%",!0),c=i("WeakMap.prototype.get",!0),l=i("WeakMap.prototype.set",!0),f=i("WeakMap.prototype.has",!0),h=i("WeakMap.prototype.delete",!0)
e.exports=u?function(){var e,t,n={assert:function(e){if(!n.has(e))throw new a("Side channel does not contain "+o(e))},delete:function(n){if(u&&n&&("object"==typeof n||"function"==typeof n)){if(e)return h(e,n)}else if(s&&t)return t.delete(n)
return!1},get:function(n){return u&&n&&("object"==typeof n||"function"==typeof n)&&e?c(e,n):t&&t.get(n)},has:function(n){return u&&n&&("object"==typeof n||"function"==typeof n)&&e?f(e,n):!!t&&t.has(n)},set:function(n,r){u&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new u),l(e,n,r)):s&&(t||(t=s()),t.set(n,r))}}
return n}:s},4686:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})},4709:e=>{for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1)
e.exports=function(e,n){var r=n||0,i=t
return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},4749:e=>{"use strict"
var t=Object.defineProperty||!1
if(t)try{t({},"a",{value:1})}catch(e){t=!1}e.exports=t},4784:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1365)
r.__exportStar(n(1266),t),r.__exportStar(n(6355),t),r.__exportStar(n(7366),t),r.__exportStar(n(4686),t),r.__exportStar(n(9290),t)},4869:e=>{"use strict"
e.exports=TypeError},4949:(e,t,n)=>{"use strict"
var r=n(2268),i=n(2185),o=n(3144)
function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(s()<t)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,n)
if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return f(this,e)}return c(this,e,t,n)}function c(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
return t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=h(e,t),e}(e,t,n,r):"string"==typeof t?function(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(t,n),i=(e=a(e,r)).write(t,n)
return i!==r&&(e=e.slice(0,i)),e}(e,t,n):function(e,t){if(u.isBuffer(t)){var n=0|d(t.length)
return 0===(e=a(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?a(e,0):h(e,t)
if("Buffer"===t.type&&o(t.data))return h(e,t.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e,t){if(l(t),e=a(e,t<0?0:0|d(t)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0
return e}function h(e,t){var n=t.length<0?0:0|d(t.length)
e=a(e,n)
for(var r=0;r<n;r+=1)e[r]=255&t[r]
return e}function d(e){if(e>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes")
return 0|e}function p(e,t){if(u.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return H(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return q(e).length
default:if(r)return H(e).length
t=(""+t).toLowerCase(),r=!0}}function g(e,t,n){var r=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return k(this,t,n)
case"utf8":case"utf-8":return O(this,t,n)
case"ascii":return P(this,t,n)
case"latin1":case"binary":return T(this,t,n)
case"base64":return C(this,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,n)
default:if(r)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),r=!0}}function y(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function m(e,t,n,r,i){if(0===e.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1
n=e.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof t&&(t=u.from(t,r)),u.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,i)
if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,i){var o,s=1,a=e.length,u=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var l=-1
for(o=n;o<a;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*s}else-1!==l&&(o-=o-l),l=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){for(var f=!0,h=0;h<u;h++)if(c(e,o+h)!==c(t,h)){f=!1
break}if(f)return o}return-1}function b(e,t,n,r){n=Number(n)||0
var i=e.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=t.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16)
if(isNaN(a))return s
e[n+s]=a}return s}function w(e,t,n,r){return V(H(t,e.length-n),e,n,r)}function _(e,t,n,r){return V(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function S(e,t,n,r){return _(e,t,n,r)}function A(e,t,n,r){return V(q(t),e,n,r)}function E(e,t,n,r){return V(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r)
return o}(t,e.length-n),e,n,r)}function C(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function O(e,t,n){n=Math.min(e.length,n)
for(var r=[],i=t;i<n;){var o,s,a,u,c=e[i],l=null,f=c>239?4:c>223?3:c>191?2:1
if(i+f<=n)switch(f){case 1:c<128&&(l=c)
break
case 2:128==(192&(o=e[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u)
break
case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(l=u)
break
case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=f}return function(e){var t=e.length
if(t<=I)return String.fromCharCode.apply(String,e)
for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=I))
return n}(r)}t.hp=u,t.IS=50,u.TYPED_ARRAY_SUPPORT=void 0!==global.TYPED_ARRAY_SUPPORT?global.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),s(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,n){return c(null,e,t,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,n){return function(e,t,n,r){return l(t),t<=0?a(e,t):void 0!==n?"string"==typeof r?a(e,t).fill(n,r):a(e,t).fill(n):a(e,t)}(null,e,t,n)},u.allocUnsafe=function(e){return f(null,e)},u.allocUnsafeSlow=function(e){return f(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i]
break}return n<r?-1:r<n?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},u.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return u.alloc(0)
var n
if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length
var r=u.allocUnsafe(t),i=0
for(n=0;n<e.length;++n){var s=e[n]
if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers')
s.copy(r,i),i+=s.length}return r},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)y(this,t,t+1)
return this},u.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2)
return this},u.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4)
return this},u.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?O(this,0,e):g.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",n=t.IS
return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,n,r,i){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&t>=n)return 0
if(r>=i)return-1
if(t>=n)return 1
if(this===e)return 0
for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),c=this.slice(r,i),l=e.slice(t,n),f=0;f<a;++f)if(c[f]!==l[f]){o=c[f],s=l[f]
break}return o<s?-1:s<o?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},u.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t
if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return b(this,e,t,n)
case"utf8":case"utf-8":return w(this,e,t,n)
case"ascii":return _(this,e,t,n)
case"latin1":case"binary":return S(this,e,t,n)
case"base64":return A(this,e,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var I=4096
function P(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i])
return r}function T(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(e[i])
return r}function k(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=t;o<n;++o)i+=B(e[o])
return i}function x(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function U(e,t,n,r,i,o){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(t>i||t<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function R(e,t,n,r){t<0&&(t=65535+t+1)
for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function D(e,t,n,r){t<0&&(t=4294967295+t+1)
for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function N(e,t,n,r,o){return o||j(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function L(e,t,n,r,o){return o||j(e,0,n,8),i.write(e,t,n,r,52,8),n+8}u.prototype.slice=function(e,t){var n,r=this.length
if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=u.prototype
else{var i=t-e
n=new u(i,void 0)
for(var o=0;o<i;++o)n[o]=this[o+e]}return n},u.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r},u.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i
return r},u.prototype.readUInt8=function(e,t){return t||M(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||M(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||M(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},u.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length)
for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},u.prototype.readInt8=function(e,t){return t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||M(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){t||M(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||M(e,4,this.length),i.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||M(e,4,this.length),i.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||M(e,8,this.length),i.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||M(e,8,this.length),i.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,n,r){e=+e,t|=0,n|=0,r||U(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255
return t+n},u.prototype.writeUIntBE=function(e,t,n,r){e=+e,t|=0,n|=0,r||U(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255
return t+n},u.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):D(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
U(this,e,t,n,i-1,-i)}var o=0,s=1,a=0
for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s|0)-a&255
return t+n},u.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
U(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0
for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s|0)-a&255
return t+n},u.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):D(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,n){return N(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return N(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return L(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return L(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var i,o=r-n
if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n]
else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t)
return o},u.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0)
i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(n<=t)return this
var o
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e
else{var s=u.isBuffer(e)?e:H(new u(e,r).toString()),a=s.length
for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this}
var F=/[^+\/0-9A-Za-z-_]/g
function B(e){return e<16?"0"+e.toString(16):e.toString(16)}function H(e,t){var n
t=t||1/0
for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189)
continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((t-=1)<0)break
o.push(n)}else if(n<2048){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function q(e){return r.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(F,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function V(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i]
return i}},4968:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.uint32ArrayFrom=void 0,t.uint32ArrayFrom=function(e){if(!Array.from){for(var t=new Uint32Array(e.length);0<e.length;)t[0]=e[0]
return t}return Uint32Array.from(e)}},4983:(e,t,n)=>{"use strict"
var r,i=n(9106),o=n(4161),s=n(8555),a=n(7116),u=n(5288),c=n(3598),l=n(4869),f=n(939),h=n(4488),d=n(6486),p=n(1538),g=n(1196),y=n(686),m=n(3880),v=n(6827),b=Function,w=function(e){try{return b('"use strict"; return ('+e+").constructor;")()}catch(e){}},_=n(6593),S=n(4749),A=function(){throw new l},E=_?function(){try{return A}catch(e){try{return _(arguments,"callee").get}catch(e){return A}}}():A,C=n(8653)(),O=n(3982),I=n(6314),P=n(1890),T=n(6088),k=n(7050),x={},M="undefined"!=typeof Uint8Array&&O?O(Uint8Array):r,U={__proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":C&&O?O([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":x,"%AsyncGenerator%":x,"%AsyncGeneratorFunction%":x,"%AsyncIteratorPrototype%":x,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?r:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":o,"%eval%":eval,"%EvalError%":s,"%Float16Array%":"undefined"==typeof Float16Array?r:Float16Array,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":b,"%GeneratorFunction%":x,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":C&&O?O(O([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&C&&O?O((new Map)[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":i,"%Object.getOwnPropertyDescriptor%":_,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":a,"%ReferenceError%":u,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&C&&O?O((new Set)[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":C&&O?O(""[Symbol.iterator]()):r,"%Symbol%":C?Symbol:r,"%SyntaxError%":c,"%ThrowTypeError%":E,"%TypedArray%":M,"%TypeError%":l,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":f,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet,"%Function.prototype.call%":k,"%Function.prototype.apply%":T,"%Object.defineProperty%":S,"%Object.getPrototypeOf%":I,"%Math.abs%":h,"%Math.floor%":d,"%Math.max%":p,"%Math.min%":g,"%Math.pow%":y,"%Math.round%":m,"%Math.sign%":v,"%Reflect.getPrototypeOf%":P}
if(O)try{null.error}catch(e){var R=O(O(e))
U["%Error.prototype%"]=R}var D=function e(t){var n
if("%AsyncFunction%"===t)n=w("async function () {}")
else if("%GeneratorFunction%"===t)n=w("function* () {}")
else if("%AsyncGeneratorFunction%"===t)n=w("async function* () {}")
else if("%AsyncGenerator%"===t){var r=e("%AsyncGeneratorFunction%")
r&&(n=r.prototype)}else if("%AsyncIteratorPrototype%"===t){var i=e("%AsyncGenerator%")
i&&O&&(n=O(i.prototype))}return U[t]=n,n},j={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},N=n(3189),L=n(2339),F=N.call(k,Array.prototype.concat),B=N.call(T,Array.prototype.splice),H=N.call(k,String.prototype.replace),q=N.call(k,String.prototype.slice),V=N.call(k,RegExp.prototype.exec),K=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,W=/\\(\\)?/g,z=function(e,t){var n,r=e
if(L(j,r)&&(r="%"+(n=j[r])[0]+"%"),L(U,r)){var i=U[r]
if(i===x&&(i=D(r)),void 0===i&&!t)throw new l("intrinsic "+e+" exists, but is not available. Please file an issue!")
return{alias:n,name:r,value:i}}throw new c("intrinsic "+e+" does not exist!")}
e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new l("intrinsic name must be a non-empty string")
if(arguments.length>1&&"boolean"!=typeof t)throw new l('"allowMissing" argument must be a boolean')
if(null===V(/^%?[^%]*%?$/,e))throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name")
var n=function(e){var t=q(e,0,1),n=q(e,-1)
if("%"===t&&"%"!==n)throw new c("invalid intrinsic syntax, expected closing `%`")
if("%"===n&&"%"!==t)throw new c("invalid intrinsic syntax, expected opening `%`")
var r=[]
return H(e,K,function(e,t,n,i){r[r.length]=n?H(i,W,"$1"):t||e}),r}(e),r=n.length>0?n[0]:"",i=z("%"+r+"%",t),o=i.name,s=i.value,a=!1,u=i.alias
u&&(r=u[0],B(n,F([0,1],u)))
for(var f=1,h=!0;f<n.length;f+=1){var d=n[f],p=q(d,0,1),g=q(d,-1)
if(('"'===p||"'"===p||"`"===p||'"'===g||"'"===g||"`"===g)&&p!==g)throw new c("property names with quotes must have matching quotes")
if("constructor"!==d&&h||(a=!0),L(U,o="%"+(r+="."+d)+"%"))s=U[o]
else if(null!=s){if(!(d in s)){if(!t)throw new l("base intrinsic for "+e+" exists, but the property is not available.")
return}if(_&&f+1>=n.length){var y=_(s,d)
s=(h=!!y)&&"get"in y&&!("originalValue"in y.get)?y.get:s[d]}else h=L(s,d),s=s[d]
h&&!a&&(U[o]=s)}}return s}},5288:e=>{"use strict"
e.exports=ReferenceError},5383:e=>{"use strict"
var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty
e.exports=function e(i,o){if(i===o)return!0
if(i&&o&&"object"==typeof i&&"object"==typeof o){var s,a,u,c=t(i),l=t(o)
if(c&&l){if((a=i.length)!=o.length)return!1
for(s=a;0!==s--;)if(!e(i[s],o[s]))return!1
return!0}if(c!=l)return!1
var f=i instanceof Date,h=o instanceof Date
if(f!=h)return!1
if(f&&h)return i.getTime()==o.getTime()
var d=i instanceof RegExp,p=o instanceof RegExp
if(d!=p)return!1
if(d&&p)return i.toString()==o.toString()
var g=n(i)
if((a=g.length)!==n(o).length)return!1
for(s=a;0!==s--;)if(!r.call(o,g[s]))return!1
for(s=a;0!==s--;)if(!e(i[u=g[s]],o[u]))return!1
return!0}return i!=i&&o!=o}},5394:e=>{!function(){"use strict"
e.exports={polyfill:function(){var e=window,t=document
if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0)
e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var e=arguments[0].left,t=arguments[0].top
d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted")
i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var n=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host
return e}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect()
n!==t.body?(d.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function u(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0
if("object"==typeof e&&"smooth"===e.behavior)return!1
throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function l(t,n){var r=e.getComputedStyle(t,null)["overflow"+n]
return"auto"===r||"scroll"===r}function f(e){var t=c(e,"Y")&&l(e,"Y"),n=c(e,"X")&&l(e,"X")
return t||n}function h(t){var n,r,i,s,a=(o()-t.startTime)/468
s=a=a>1?1:a,n=.5*(1-Math.cos(Math.PI*s)),r=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,i),r===t.x&&i===t.y||e.requestAnimationFrame(h.bind(e,t))}function d(n,r,s){var u,c,l,f,d=o()
n===t.body?(u=e,c=e.scrollX||e.pageXOffset,l=e.scrollY||e.pageYOffset,f=i.scroll):(u=n,c=n.scrollLeft,l=n.scrollTop,f=a),h({scrollable:u,method:f,startTime:d,startX:c,startY:l,x:r,y:s})}}}}()},5416:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.RawSha256=void 0
var r=n(8216),i=function(){function e(){this.state=Int32Array.from(r.INIT),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return e.prototype.update=function(e){if(this.finished)throw new Error("Attempted to update an already finished hash.")
var t=0,n=e.byteLength
if(this.bytesHashed+=n,8*this.bytesHashed>r.MAX_HASHABLE_LENGTH)throw new Error("Cannot hash more than 2^53 - 1 bits")
for(;n>0;)this.buffer[this.bufferLength++]=e[t++],n--,this.bufferLength===r.BLOCK_SIZE&&(this.hashBuffer(),this.bufferLength=0)},e.prototype.digest=function(){if(!this.finished){var e=8*this.bytesHashed,t=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),n=this.bufferLength
if(t.setUint8(this.bufferLength++,128),n%r.BLOCK_SIZE>=r.BLOCK_SIZE-8){for(var i=this.bufferLength;i<r.BLOCK_SIZE;i++)t.setUint8(i,0)
this.hashBuffer(),this.bufferLength=0}for(i=this.bufferLength;i<r.BLOCK_SIZE-8;i++)t.setUint8(i,0)
t.setUint32(r.BLOCK_SIZE-8,Math.floor(e/4294967296),!0),t.setUint32(r.BLOCK_SIZE-4,e),this.hashBuffer(),this.finished=!0}var o=new Uint8Array(r.DIGEST_LENGTH)
for(i=0;i<8;i++)o[4*i]=this.state[i]>>>24&255,o[4*i+1]=this.state[i]>>>16&255,o[4*i+2]=this.state[i]>>>8&255,o[4*i+3]=this.state[i]>>>0&255
return o},e.prototype.hashBuffer=function(){for(var e=this.buffer,t=this.state,n=t[0],i=t[1],o=t[2],s=t[3],a=t[4],u=t[5],c=t[6],l=t[7],f=0;f<r.BLOCK_SIZE;f++){if(f<16)this.temp[f]=(255&e[4*f])<<24|(255&e[4*f+1])<<16|(255&e[4*f+2])<<8|255&e[4*f+3]
else{var h=this.temp[f-2],d=(h>>>17|h<<15)^(h>>>19|h<<13)^h>>>10,p=((h=this.temp[f-15])>>>7|h<<25)^(h>>>18|h<<14)^h>>>3
this.temp[f]=(d+this.temp[f-7]|0)+(p+this.temp[f-16]|0)}var g=(((a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7))+(a&u^~a&c)|0)+(l+(r.KEY[f]+this.temp[f]|0)|0)|0,y=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&i^n&o^i&o)|0
l=c,c=u,u=a,a=s+g|0,s=o,o=i,i=n,n=g+y|0}t[0]+=n,t[1]+=i,t[2]+=o,t[3]+=s,t[4]+=a,t[5]+=u,t[6]+=c,t[7]+=l},e}()
t.RawSha256=i},5748:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebCryptoSha256=t.Ie11Sha256=void 0,(0,n(4473).__exportStar)(n(8836),t)
var r=n(705)
Object.defineProperty(t,"Ie11Sha256",{enumerable:!0,get:function(){return r.Sha256}})
var i=n(2812)
Object.defineProperty(t,"WebCryptoSha256",{enumerable:!0,get:function(){return i.Sha256}})},5820:(e,t,n)=>{var r=n(6643),i=n(9472),o=i
o.v1=r,o.v4=i,e.exports=o},6088:e=>{"use strict"
e.exports=Function.prototype.apply},6314:(e,t,n)=>{"use strict"
var r=n(9106)
e.exports=r.getPrototypeOf||null},6355:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})},6437:e=>{"use strict"
e.exports=Number.isNaN||function(e){return e!=e}},6442:(e,t,n)=>{"use strict"
var r,i=n(4492),o=n(6593)
try{r=[].__proto__===Array.prototype}catch(e){if(!e||"object"!=typeof e||!("code"in e)||"ERR_PROTO_ACCESS"!==e.code)throw e}var s=!!r&&o&&o(Object.prototype,"__proto__"),a=Object,u=a.getPrototypeOf
e.exports=s&&"function"==typeof s.get?i([s.get]):"function"==typeof u&&function(e){return u(null==e?e:a(e))}},6448:(e,t,n)=>{"use strict"
var r=n(8877),i=n(4339),o=n(3200)
e.exports={formats:o,parse:i,stringify:r}},6486:e=>{"use strict"
e.exports=Math.floor},6590:(e,t,n)=>{"use strict"
var r=n(3189),i=n(6088),o=n(7050),s=n(1249)
e.exports=s||r.call(o,i)},6593:(e,t,n)=>{"use strict"
var r=n(8139)
if(r)try{r([],"length")}catch(e){r=null}e.exports=r},6643:(e,t,n)=>{var r,i,o=n(7700),s=n(4709),a=0,u=0
e.exports=function(e,t,n){var c=t&&n||0,l=t||[],f=(e=e||{}).node||r,h=void 0!==e.clockseq?e.clockseq:i
if(null==f||null==h){var d=o()
null==f&&(f=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==h&&(h=i=16383&(d[6]<<8|d[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:u+1,y=p-a+(g-u)/1e4
if(y<0&&void 0===e.clockseq&&(h=h+1&16383),(y<0||p>a)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
a=p,u=g,i=h
var m=(1e4*(268435455&(p+=122192928e5))+g)%4294967296
l[c++]=m>>>24&255,l[c++]=m>>>16&255,l[c++]=m>>>8&255,l[c++]=255&m
var v=p/4294967296*1e4&268435455
l[c++]=v>>>8&255,l[c++]=255&v,l[c++]=v>>>24&15|16,l[c++]=v>>>16&255,l[c++]=h>>>8|128,l[c++]=255&h
for(var b=0;b<6;++b)l[c+b]=f[b]
return t||s(l)}},6827:(e,t,n)=>{"use strict"
var r=n(6437)
e.exports=function(e){return r(e)||0===e?e:e<0?-1:1}},6870:(e,t,n)=>{"use strict"
var r=n(4869),i=n(485),o=n(1577),s=n(665),a=n(4677)||s||o
e.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new r("Side channel does not contain "+i(e))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,n){e||(e=a()),e.set(t,n)}}
return t}},7050:e=>{"use strict"
e.exports=Function.prototype.call},7116:e=>{"use strict"
e.exports=RangeError},7366:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})},7441:(e,t)=>{"use strict"
t.q=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string")
for(var r={},i=t||{},s=e.split(";"),a=i.decode||n,u=0;u<s.length;u++){var c=s[u],l=c.indexOf("=")
if(!(l<0)){var f=c.substring(0,l).trim()
if(null==r[f]){var h=c.substring(l+1,c.length).trim()
'"'===h[0]&&(h=h.slice(1,-1)),r[f]=o(h,a)}}}return r},t.l=function(e,t,n){var o=n||{},s=o.encode||r
if("function"!=typeof s)throw new TypeError("option encode is invalid")
if(!i.test(e))throw new TypeError("argument name is invalid")
var a=s(t)
if(a&&!i.test(a))throw new TypeError("argument val is invalid")
var u=e+"="+a
if(null!=o.maxAge){var c=o.maxAge-0
if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid")
u+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid")
u+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid")
u+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid")
u+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:u+="; SameSite=Strict"
break
case"lax":u+="; SameSite=Lax"
break
case"strict":u+="; SameSite=Strict"
break
case"none":u+="; SameSite=None"
break
default:throw new TypeError("option sameSite is invalid")}return u}
var n=decodeURIComponent,r=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
function o(e,t){try{return t(e)}catch(t){return e}}},7492:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{fromUtf8:()=>r,toUtf8:()=>i})
const r=e=>"function"==typeof TextEncoder?function(e){return(new TextEncoder).encode(e)}(e):(e=>{const t=[]
for(let n=0,r=e.length;n<r;n++){const r=e.charCodeAt(n)
if(r<128)t.push(r)
else if(r<2048)t.push(r>>6|192,63&r|128)
else if(n+1<e.length&&55296==(64512&r)&&56320==(64512&e.charCodeAt(n+1))){const i=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n))
t.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else t.push(r>>12|224,r>>6&63|128,63&r|128)}return Uint8Array.from(t)})(e),i=e=>"function"==typeof TextDecoder?function(e){return new TextDecoder("utf-8").decode(e)}(e):(e=>{let t=""
for(let n=0,r=e.length;n<r;n++){const r=e[n]
if(r<128)t+=String.fromCharCode(r)
else if(192<=r&&r<224){const i=e[++n]
t+=String.fromCharCode((31&r)<<6|63&i)}else if(240<=r&&r<365){const i="%"+[r,e[++n],e[++n],e[++n]].map(e=>e.toString(16)).join("%")
t+=decodeURIComponent(i)}else t+=String.fromCharCode((15&r)<<12|(63&e[++n])<<6|63&e[++n])}return t})(e)},7657:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.EMPTY_DATA_SHA_256=t.SHA_256_HMAC_ALGO=t.SHA_256_HASH=void 0,t.SHA_256_HASH={name:"SHA-256"},t.SHA_256_HMAC_ALGO={name:"HMAC",hash:t.SHA_256_HASH},t.EMPTY_DATA_SHA_256=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85])},7658:function(e){e.exports=function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=90)}({17:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r=n(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var n=t.match(e)
return n&&n.length>0&&n[1]||""},e.getSecondMatch=function(e,t){var n=t.match(e)
return n&&n.length>1&&n[2]||""},e.matchAndReturnConst=function(e,t,n){if(e.test(t))return n},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT"
case"XP":case"NT 5.1":return"XP"
case"NT 5.0":return"2000"
case"NT 5.2":return"2003"
case"NT 6.0":return"Vista"
case"NT 6.1":return"7"
case"NT 6.2":return"8"
case"NT 6.3":return"8.1"
case"NT 10.0":return"10"
default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0})
if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard"
case 6:return"Snow Leopard"
case 7:return"Lion"
case 8:return"Mountain Lion"
case 9:return"Mavericks"
case 10:return"Yosemite"
case 11:return"El Capitan"
case 12:return"Sierra"
case 13:return"High Sierra"
case 14:return"Mojave"
case 15:return"Catalina"
default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0})
if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,n,r){void 0===r&&(r=!1)
var i=e.getVersionPrecision(t),o=e.getVersionPrecision(n),s=Math.max(i,o),a=0,u=e.map([t,n],function(t){var n=s-e.getVersionPrecision(t),r=t+new Array(n+1).join(".0")
return e.map(r.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()})
for(r&&(a=s-Math.min(i,o)),s-=1;s>=a;){if(u[0][s]>u[1][s])return 1
if(u[0][s]===u[1][s]){if(s===a)return 0
s-=1}else if(u[0][s]<u[1][s])return-1}},e.map=function(e,t){var n,r=[]
if(Array.prototype.map)return Array.prototype.map.call(e,t)
for(n=0;n<e.length;n+=1)r.push(t(e[n]))
return r},e.find=function(e,t){var n,r
if(Array.prototype.find)return Array.prototype.find.call(e,t)
for(n=0,r=e.length;n<r;n+=1){var i=e[n]
if(t(i,n))return i}},e.assign=function(e){for(var t,n,r=e,i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s]
if(Object.assign)return Object.assign.apply(Object,[e].concat(o))
var a=function(){var e=o[t]
"object"==typeof e&&null!==e&&Object.keys(e).forEach(function(t){r[t]=e[t]})}
for(t=0,n=o.length;t<n;t+=1)a()
return e},e.getBrowserAlias=function(e){return r.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return r.BROWSER_MAP[e]||""},e}()
t.default=i,e.exports=t.default},18:function(e,t,n){"use strict"
t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,i=(r=n(91))&&r.__esModule?r:{default:r},o=n(18)
function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){}var t,n
return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string")
return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,(n=[{key:"BROWSER_MAP",get:function(){return o.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return o.ENGINE_MAP}},{key:"OS_MAP",get:function(){return o.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return o.PLATFORMS_MAP}}])&&s(t,n),e}()
t.default=a,e.exports=t.default},91:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r=u(n(92)),i=u(n(93)),o=u(n(94)),s=u(n(95)),a=u(n(17))
function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty")
this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype
return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this
this.parsedResult.browser={}
var t=a.default.find(r.default,function(t){if("function"==typeof t.test)return t.test(e)
if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)})
throw new Error("Browser's test function is not valid")})
return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this
this.parsedResult.os={}
var t=a.default.find(i.default,function(t){if("function"==typeof t.test)return t.test(e)
if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)})
throw new Error("Browser's test function is not valid")})
return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name
return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1)
var t=this.getPlatform().type
return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this
this.parsedResult.platform={}
var t=a.default.find(o.default,function(t){if("function"==typeof t.test)return t.test(e)
if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)})
throw new Error("Browser's test function is not valid")})
return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this
this.parsedResult.engine={}
var t=a.default.find(s.default,function(t){if("function"==typeof t.test)return t.test(e)
if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)})
throw new Error("Browser's test function is not valid")})
return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return a.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,n={},r=0,i={},o=0
if(Object.keys(e).forEach(function(t){var s=e[t]
"string"==typeof s?(i[t]=s,o+=1):"object"==typeof s&&(n[t]=s,r+=1)}),r>0){var s=Object.keys(n),u=a.default.find(s,function(e){return t.isOS(e)})
if(u){var c=this.satisfies(n[u])
if(void 0!==c)return c}var l=a.default.find(s,function(e){return t.isPlatform(e)})
if(l){var f=this.satisfies(n[l])
if(void 0!==f)return f}}if(o>0){var h=Object.keys(i),d=a.default.find(h,function(e){return t.isBrowser(e,!0)})
if(void 0!==d)return this.compareVersion(i[d])}},t.isBrowser=function(e,t){void 0===t&&(t=!1)
var n=this.getBrowserName().toLowerCase(),r=e.toLowerCase(),i=a.default.getBrowserTypeByAlias(r)
return t&&i&&(r=i.toLowerCase()),r===n},t.compareVersion=function(e){var t=[0],n=e,r=!1,i=this.getBrowserVersion()
if("string"==typeof i)return">"===e[0]||"<"===e[0]?(n=e.substr(1),"="===e[1]?(r=!0,n=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?n=e.substr(1):"~"===e[0]&&(r=!0,n=e.substr(1)),t.indexOf(a.default.compareVersions(i,n,r))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this
return void 0===e&&(e=[]),e.some(function(e){return t.is(e)})},e}()
t.default=c,e.exports=t.default},92:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,i=(r=n(17))&&r.__esModule?r:{default:r},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},n=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},n=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},n=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},n=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},n=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},n=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},n=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},n=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},n=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},n=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},n=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},n=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},n=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},n=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e)
return n&&(t.version=n),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},n=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},n=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},n=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},n=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},n=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},n=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},n=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},n=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},n=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},n=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},n=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},n=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},n=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i)
return t&&n},describe:function(e){var t={name:"Android Browser"},n=i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},n=i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},n=i.default.getFirstMatch(o,e)
return n&&(t.version=n),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /
return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}]
t.default=s,e.exports=t.default},93:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,i=(r=n(17))&&r.__esModule?r:{default:r},o=n(18),s=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e)
return{name:o.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e)
return{name:o.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=i.default.getWindowsVersionName(t)
return{name:o.OS_MAP.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:o.OS_MAP.iOS},n=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e)
return n&&(t.version=n),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=i.default.getMacOSVersionName(t),r={name:o.OS_MAP.MacOS,version:t}
return n&&(r.versionName=n),r}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".")
return{name:o.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i)
return t&&n},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=i.default.getAndroidVersionName(t),r={name:o.OS_MAP.Android,version:t}
return n&&(r.versionName=n),r}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:o.OS_MAP.WebOS}
return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e)
return{name:o.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e)
return{name:o.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e)
return{name:o.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e)
return{name:o.OS_MAP.PlayStation4,version:t}}}]
t.default=s,e.exports=t.default},94:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,i=(r=n(17))&&r.__esModule?r:{default:r},o=n(18),s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"}
return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i)
return t&&!n},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e)
return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0])
return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}]
t.default=s,e.exports=t.default},95:function(e,t,n){"use strict"
t.__esModule=!0,t.default=void 0
var r,i=(r=n(17))&&r.__esModule?r:{default:r},o=n(18),s=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:o.ENGINE_MAP.Blink}
var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e)
return{name:o.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:o.ENGINE_MAP.Trident},n=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:o.ENGINE_MAP.Presto},n=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:function(e){var t=e.test(/gecko/i),n=e.test(/like gecko/i)
return t&&!n},describe:function(e){var t={name:o.ENGINE_MAP.Gecko},n=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:o.ENGINE_MAP.WebKit},n=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e)
return n&&(t.version=n),t}}]
t.default=s,e.exports=t.default}})},7700:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(t){var n=new Uint8Array(16)
e.exports=function(){return t(n),n}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255
return r}}},7851:function(e,t,n){var r
e.exports=(r=n(631),n(9659),n(2499),r.HmacSHA256)},7946:(e,t,n)=>{"use strict"
var r=n(4983),i=n(4492),o=i([r("%String.prototype.indexOf%")])
e.exports=function(e,t){var n=r(e,!!t)
return"function"==typeof n&&o(e,".prototype.")>-1?i([n]):n}},8139:e=>{"use strict"
e.exports=Object.getOwnPropertyDescriptor},8216:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_HASHABLE_LENGTH=t.INIT=t.KEY=t.DIGEST_LENGTH=t.BLOCK_SIZE=void 0,t.BLOCK_SIZE=64,t.DIGEST_LENGTH=32,t.KEY=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),t.INIT=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.MAX_HASHABLE_LENGTH=Math.pow(2,53)-1},8274:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.convertToBuffer=void 0
var r=n(7492),i="undefined"!=typeof Buffer&&Buffer.from?function(e){return Buffer.from(e,"utf8")}:r.fromUtf8
t.convertToBuffer=function(e){return e instanceof Uint8Array?e:"string"==typeof e?i(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}},8524:function(e,t,n){var r,i,o
e.exports=(r=n(631),o=(i=r).lib.WordArray,i.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map
e.clamp()
for(var i=[],o=0;o<n;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)i.push(r.charAt(s>>>6*(3-a)&63))
var u=r.charAt(64)
if(u)for(;i.length%4;)i.push(u)
return i.join("")},parse:function(e){var t=e.length,n=this._map,r=this._reverseMap
if(!r){r=this._reverseMap=[]
for(var i=0;i<n.length;i++)r[n.charCodeAt(i)]=i}var s=n.charAt(64)
if(s){var a=e.indexOf(s);-1!==a&&(t=a)}return function(e,t,n){for(var r=[],i=0,s=0;s<t;s++)if(s%4){var a=n[e.charCodeAt(s-1)]<<s%4*2|n[e.charCodeAt(s)]>>>6-s%4*2
r[i>>>2]|=a<<24-i%4*8,i++}return o.create(r,i)}(e,t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},r.enc.Base64)},8540:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.supportsZeroByteGCM=t.supportsSubtleCrypto=t.supportsSecureRandom=t.supportsWebCrypto=void 0
var r=n(624),i=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"]
function o(e){return"object"==typeof e&&"object"==typeof e.crypto&&"function"==typeof e.crypto.getRandomValues}function s(e){return e&&i.every(function(t){return"function"==typeof e[t]})}t.supportsWebCrypto=function(e){return!(!o(e)||"object"!=typeof e.crypto.subtle)&&s(e.crypto.subtle)},t.supportsSecureRandom=o,t.supportsSubtleCrypto=s,t.supportsZeroByteGCM=function(e){return r.__awaiter(this,void 0,void 0,function(){var t
return r.__generator(this,function(n){switch(n.label){case 0:if(!s(e))return[2,!1]
n.label=1
case 1:return n.trys.push([1,4,,5]),[4,e.generateKey({name:"AES-GCM",length:128},!1,["encrypt"])]
case 2:return t=n.sent(),[4,e.encrypt({name:"AES-GCM",iv:new Uint8Array(Array(12)),additionalData:new Uint8Array(Array(16)),tagLength:128},t,new Uint8Array(0))]
case 3:return[2,16===n.sent().byteLength]
case 4:return n.sent(),[2,!1]
case 5:return[2]}})})}},8555:e=>{"use strict"
e.exports=EvalError},8653:(e,t,n)=>{"use strict"
var r="undefined"!=typeof Symbol&&Symbol,i=n(2095)
e.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&i()}},8771:(e,t,n)=>{"use strict"
var r,i,o,s,a
n.r(t),n.d(t,{ErrorCode:()=>o,connectToChild:()=>S,connectToParent:()=>A}),function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(r||(r={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(i||(i={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NoIframeSrc="NoIframeSrc"}(o||(o={})),function(e){e.DataCloneError="DataCloneError"}(s||(s={})),function(e){e.Message="message"}(a||(a={}))
const u=(e,t)=>{const n=[]
let r=!1
return{destroy(i){r||(r=!0,t(`${e}: Destroying connection`),n.forEach(e=>{e(i)}))},onDestroy(e){r?e():n.push(e)}}},c=e=>(...t)=>{e&&console.log("[Penpal]",...t)},l={"http:":"80","https:":"443"},f=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,h=["file:","data:"],d=({name:e,message:t,stack:n})=>({name:e,message:t,stack:n}),p=(e,t,n)=>{const{localName:o,local:u,remote:c,originForSending:l,originForReceiving:f}=e
let h=!1
const p=e=>{if(e.source!==c||e.data.penpal!==r.Call)return
if("*"!==f&&e.origin!==f)return void n(`${o} received message from origin ${e.origin} which did not match expected origin ${f}`)
const a=e.data,{methodName:u,args:p,id:g}=a
n(`${o}: Received ${u}() call`)
const y=e=>t=>{if(n(`${o}: Sending ${u}() reply`),h)return void n(`${o}: Unable to send ${u}() reply due to destroyed connection`)
const a={penpal:r.Reply,id:g,resolution:e,returnValue:t}
e===i.Rejected&&t instanceof Error&&(a.returnValue=d(t),a.returnValueIsError=!0)
try{c.postMessage(a,l)}catch(e){if(e.name===s.DataCloneError){const n={penpal:r.Reply,id:g,resolution:i.Rejected,returnValue:d(e),returnValueIsError:!0}
c.postMessage(n,l)}throw e}}
new Promise(e=>e(t[u].apply(t,p))).then(y(i.Fulfilled),y(i.Rejected))}
return u.addEventListener(a.Message,p),()=>{h=!0,u.removeEventListener(a.Message,p)}}
let g=0
const y=()=>++g,m=e=>e?e.split("."):[],v=(e,t,n)=>{const r=m(t)
return r.reduce((e,t,i)=>(void 0===e[t]&&(e[t]={}),i===r.length-1&&(e[t]=n),e[t]),e),e},b=(e,t)=>{const n={}
return Object.keys(e).forEach(r=>{const i=e[r],o=((e,t)=>{const n=m(t||"")
return n.push(e),(e=>e.join("."))(n)})(r,t)
"object"==typeof i&&Object.assign(n,b(i,o)),"function"==typeof i&&(n[o]=i)}),n},w=(e,t,n,s,u)=>{const{localName:c,local:l,remote:f,originForSending:h,originForReceiving:d}=t
let p=!1
u(`${c}: Connecting call sender`)
const g=n.reduce((e,t)=>{return e[t]=(n=t,(...e)=>{let t
u(`${c}: Sending ${n}() call`)
try{f.closed&&(t=!0)}catch(e){t=!0}if(t&&s(),p){const e=new Error(`Unable to send ${n}() call due to destroyed connection`)
throw e.code=o.ConnectionDestroyed,e}return new Promise((t,o)=>{const s=y(),p=e=>{if(e.source!==f||e.data.penpal!==r.Reply||e.data.id!==s)return
if("*"!==d&&e.origin!==d)return void u(`${c} received message from origin ${e.origin} which did not match expected origin ${d}`)
const h=e.data
u(`${c}: Received ${n}() reply`),l.removeEventListener(a.Message,p)
let g=h.returnValue
h.returnValueIsError&&(g=(e=>{const t=new Error
return Object.keys(e).forEach(n=>t[n]=e[n]),t})(g)),(h.resolution===i.Fulfilled?t:o)(g)}
l.addEventListener(a.Message,p)
const g={penpal:r.Call,id:s,methodName:n,args:e}
f.postMessage(g,h)})}),e
var n},{})
return Object.assign(e,(e=>{const t={}
for(const n in e)v(t,n,e[n])
return t})(g)),()=>{p=!0}},_=(e,t)=>{let n
return void 0!==e&&(n=window.setTimeout(()=>{const n=new Error(`Connection timed out after ${e}ms`)
n.code=o.ConnectionTimeout,t(n)},e)),()=>{clearTimeout(n)}},S=e=>{let{iframe:t,methods:n={},childOrigin:i,timeout:s,debug:d=!1}=e
const g=c(d),y=u("Parent",g),{onDestroy:m,destroy:v}=y
i||((e=>{if(!e.src&&!e.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.")
throw e.code=o.NoIframeSrc,e}})(t),i=(e=>{if(e&&h.find(t=>e.startsWith(t)))return"null"
const t=document.location,n=f.exec(e)
let r,i,o
return n?(r=n[1]?n[1]:t.protocol,i=n[2],o=n[4]):(r=t.protocol,i=t.hostname,o=t.port),`${r}//${i}${o&&o!==l[r]?`:${o}`:""}`})(t.src))
const S="null"===i?"*":i,A=b(n),E=((e,t,n,i)=>o=>{if(!o.source)return
if("*"!==n&&o.origin!==n)return void e(`Parent: Handshake - Received SYN message from origin ${o.origin} which did not match expected origin ${n}`)
e("Parent: Handshake - Received SYN, responding with SYN-ACK")
const s={penpal:r.SynAck,methodNames:Object.keys(t)}
o.source.postMessage(s,i)})(g,A,i,S),C=((e,t,n,r,i)=>{const{destroy:o,onDestroy:s}=r
let a,u
const c={}
return r=>{if("*"!==t&&r.origin!==t)return void i(`Parent: Handshake - Received ACK message from origin ${r.origin} which did not match expected origin ${t}`)
i("Parent: Handshake - Received ACK")
const l={localName:"Parent",local:window,remote:r.source,originForSending:n,originForReceiving:t}
a&&a(),a=p(l,e,i),s(a),u&&u.forEach(e=>{delete c[e]}),u=r.data.methodNames
const f=w(c,l,u,o,i)
return s(f),c}})(A,i,S,y,g),O=new Promise((e,n)=>{const i=_(s,v),o=n=>{if(n.source===t.contentWindow&&n.data)if(n.data.penpal!==r.Syn){if(n.data.penpal===r.Ack){const t=C(n)
return void(t&&(i(),e(t)))}}else E(n)}
window.addEventListener(a.Message,o),g("Parent: Awaiting handshake"),((e,t)=>{const{destroy:n,onDestroy:r}=t,i=setInterval(()=>{e.isConnected||(clearInterval(i),n())},6e4)
r(()=>{clearInterval(i)})})(t,y),m(e=>{window.removeEventListener(a.Message,o),e&&n(e)})})
return{promise:O,destroy(){v()}}},A=(e={})=>{const{parentOrigin:t="*",methods:n={},timeout:i,debug:o=!1}=e,s=c(o),l=u("Child",s),{destroy:f,onDestroy:h}=l,d=b(n),g=((e,t,n,i)=>{const{destroy:o,onDestroy:s}=n
return n=>{if(!(e instanceof RegExp?e.test(n.origin):"*"===e||e===n.origin))return void i(`Child: Handshake - Received SYN-ACK from origin ${n.origin} which did not match expected origin ${e}`)
i("Child: Handshake - Received SYN-ACK, responding with ACK")
const a="null"===n.origin?"*":n.origin,u={penpal:r.Ack,methodNames:Object.keys(t)}
window.parent.postMessage(u,a)
const c={localName:"Child",local:window,remote:window.parent,originForSending:a,originForReceiving:n.origin},l=p(c,t,i)
s(l)
const f={},h=w(f,c,n.data.methodNames,o,i)
return s(h),f}})(t,d,l,s)
return{promise:new Promise((e,n)=>{const o=_(i,f),u=t=>{if((()=>{try{clearTimeout()}catch(e){return!1}return!0})()&&t.source===parent&&t.data&&t.data.penpal===r.SynAck){const n=g(t)
n&&(window.removeEventListener(a.Message,u),o(),e(n))}}
window.addEventListener(a.Message,u),(()=>{s("Child: Handshake - Sending SYN")
const e={penpal:r.Syn},n=t instanceof RegExp?"*":t
window.parent.postMessage(e,n)})(),h(e=>{window.removeEventListener(a.Message,u),e&&n(e)})}),destroy(){f()}}}},8836:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Sha256=void 0
var r=n(705),i=n(2812),o=n(3569),s=n(283),a=n(4784),u=n(2932),c=function(){function e(e){(0,s.supportsWebCrypto)((0,u.locateWindow)())?this.hash=new i.Sha256(e):(0,a.isMsWindow)((0,u.locateWindow)())?this.hash=new r.Sha256(e):this.hash=new o.Sha256(e)}return e.prototype.update=function(e,t){this.hash.update(e,t)},e.prototype.digest=function(){return this.hash.digest()},e}()
t.Sha256=c},8877:(e,t,n)=>{"use strict"
var r=n(6870),i=n(3833),o=n(3200),s=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},u=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,u(t)?t:[t])},f=Date.prototype.toISOString,h=o.default,d={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:i.encode,encodeValuesOnly:!1,filter:void 0,format:h,formatter:o.formatters[h],indices:!1,serializeDate:function(e){return f.call(e)},skipNulls:!1,strictNullHandling:!1},p={},g=function e(t,n,o,s,a,c,f,h,g,y,m,v,b,w,_,S,A,E){for(var C,O=t,I=E,P=0,T=!1;void 0!==(I=I.get(p))&&!T;){var k=I.get(t)
if(P+=1,void 0!==k){if(k===P)throw new RangeError("Cyclic object value")
T=!0}void 0===I.get(p)&&(P=0)}if("function"==typeof y?O=y(n,O):O instanceof Date?O=b(O):"comma"===o&&u(O)&&(O=i.maybeMap(O,function(e){return e instanceof Date?b(e):e})),null===O){if(c)return g&&!S?g(n,d.encoder,A,"key",w):n
O=""}if("string"==typeof(C=O)||"number"==typeof C||"boolean"==typeof C||"symbol"==typeof C||"bigint"==typeof C||i.isBuffer(O))return g?[_(S?n:g(n,d.encoder,A,"key",w))+"="+_(g(O,d.encoder,A,"value",w))]:[_(n)+"="+_(String(O))]
var x,M=[]
if(void 0===O)return M
if("comma"===o&&u(O))S&&g&&(O=i.maybeMap(O,g)),x=[{value:O.length>0?O.join(",")||null:void 0}]
else if(u(y))x=y
else{var U=Object.keys(O)
x=m?U.sort(m):U}var R=h?String(n).replace(/\./g,"%2E"):String(n),D=s&&u(O)&&1===O.length?R+"[]":R
if(a&&u(O)&&0===O.length)return D+"[]"
for(var j=0;j<x.length;++j){var N=x[j],L="object"==typeof N&&N&&void 0!==N.value?N.value:O[N]
if(!f||null!==L){var F=v&&h?String(N).replace(/\./g,"%2E"):String(N),B=u(O)?"function"==typeof o?o(D,F):D:D+(v?"."+F:"["+F+"]")
E.set(t,P)
var H=r()
H.set(p,E),l(M,e(L,B,o,s,a,c,f,h,"comma"===o&&S&&u(O)?null:g,y,m,v,b,w,_,S,A,H))}}return M}
e.exports=function(e,t){var n,i=e,c=function(e){if(!e)return d
if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided")
if(void 0!==e.encodeDotInKeys&&"boolean"!=typeof e.encodeDotInKeys)throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided")
if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||d.charset
if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var n=o.default
if(void 0!==e.format){if(!s.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.")
n=e.format}var r,i=o.formatters[n],c=d.filter
if(("function"==typeof e.filter||u(e.filter))&&(c=e.filter),r=e.arrayFormat in a?e.arrayFormat:"indices"in e?e.indices?"indices":"repeat":d.arrayFormat,"commaRoundTrip"in e&&"boolean"!=typeof e.commaRoundTrip)throw new TypeError("`commaRoundTrip` must be a boolean, or absent")
var l=void 0===e.allowDots?!0===e.encodeDotInKeys||d.allowDots:!!e.allowDots
return{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:l,allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:d.allowEmptyArrays,arrayFormat:r,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encodeDotInKeys:"boolean"==typeof e.encodeDotInKeys?e.encodeDotInKeys:d.encodeDotInKeys,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:c,format:n,formatter:i,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t)
"function"==typeof c.filter?i=(0,c.filter)("",i):u(c.filter)&&(n=c.filter)
var f=[]
if("object"!=typeof i||null===i)return""
var h=a[c.arrayFormat],p="comma"===h&&c.commaRoundTrip
n||(n=Object.keys(i)),c.sort&&n.sort(c.sort)
for(var y=r(),m=0;m<n.length;++m){var v=n[m],b=i[v]
c.skipNulls&&null===b||l(f,g(b,v,h,p,c.allowEmptyArrays,c.strictNullHandling,c.skipNulls,c.encodeDotInKeys,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.format,c.formatter,c.encodeValuesOnly,c.charset,y))}var w=f.join(c.delimiter),_=!0===c.addQueryPrefix?"?":""
return c.charsetSentinel&&("iso-8859-1"===c.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),w.length>0?_+w:""}},9106:e=>{"use strict"
e.exports=Object},9139:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>c})
var r=n(3797),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0,arrowSelector:".tooltip-arrow, .tooltip__arrow",innerSelector:".tooltip-inner, .tooltip__inner"},a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u.call(this),n=o({},s,n),t.jquery&&(t=t[0]),this.reference=t,this.options=n
var r="string"==typeof n.trigger?n.trigger.split(" ").filter(function(e){return-1!==["click","hover","focus"].indexOf(e)}):[]
this._isOpen=!1,this._popperOptions={},this._setEventListeners(t,r,n)}return i(e,[{key:"_create",value:function(e,t,n,r){var i=window.document.createElement("div")
i.innerHTML=t.trim()
var o=i.childNodes[0]
o.id="tooltip_"+Math.random().toString(36).substr(2,10),o.setAttribute("aria-hidden","false")
var s=i.querySelector(this.options.innerSelector)
return this._addTitleContent(e,n,r,s),o}},{key:"_addTitleContent",value:function(e,t,n,r){var i
1===t.nodeType||11===t.nodeType?n&&r.appendChild(t):(i=t)&&"[object Function]"==={}.toString.call(i)?this._addTitleContent(e,t.call(e),n,r):n?r.innerHTML=t:r.textContent=t}},{key:"_show",value:function(e,t){if(this._isOpen&&!this._isOpening)return this
if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.visibility="visible",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this
var n=e.getAttribute("title")||t.title
if(!n)return this
var i=this._create(e,t.template,n,t.html)
e.setAttribute("aria-describedby",i.id)
var s=this._findContainer(t.container,e)
return this._append(i,s),this._popperOptions=o({},t.popperOptions,{placement:t.placement}),this._popperOptions.modifiers=o({},this._popperOptions.modifiers,{arrow:o({},this._popperOptions.modifiers&&this._popperOptions.modifiers.arrow,{element:t.arrowSelector}),offset:o({},this._popperOptions.modifiers&&this._popperOptions.modifiers.offset,{offset:t.offset||this._popperOptions.modifiers&&this._popperOptions.modifiers.offset&&this._popperOptions.modifiers.offset.offset||t.offset})}),t.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:t.boundariesElement}),this.popperInstance=new r.A(e,i,this._popperOptions),this._tooltipNode=i,this}},{key:"_hide",value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.visibility="hidden",this._tooltipNode.setAttribute("aria-hidden","true"),this):this}},{key:"_dispose",value:function(){var e=this
return this._events.forEach(function(t){var n=t.func,r=t.event
e.reference.removeEventListener(r,n)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(e,t){return"string"==typeof e?e=window.document.querySelector(e):!1===e&&(e=t.parentNode),e}},{key:"_append",value:function(e,t){t.appendChild(e)}},{key:"_setEventListeners",value:function(e,t,n){var r=this,i=[],o=[]
t.forEach(function(e){switch(e){case"hover":i.push("mouseenter"),o.push("mouseleave")
break
case"focus":i.push("focus"),o.push("blur")
break
case"click":i.push("click"),o.push("click")}}),i.forEach(function(t){var i=function(t){!0!==r._isOpening&&(t.usedByTooltip=!0,r._scheduleShow(e,n.delay,n,t))}
r._events.push({event:t,func:i}),e.addEventListener(t,i)}),o.forEach(function(t){var i=function(t){!0!==t.usedByTooltip&&r._scheduleHide(e,n.delay,n,t)}
r._events.push({event:t,func:i}),e.addEventListener(t,i),"click"===t&&n.closeOnClickOutside&&document.addEventListener("mousedown",function(t){if(r._isOpening){var n=r.popperInstance.popper
e.contains(t.target)||n.contains(t.target)||i(t)}},!0)})}},{key:"_scheduleShow",value:function(e,t,n){var r=this
this._isOpening=!0
var i=t&&t.show||t||0
this._showTimeout=window.setTimeout(function(){return r._show(e,n)},i)}},{key:"_scheduleHide",value:function(e,t,n,r){var i=this
this._isOpening=!1
var o=t&&t.hide||t||0
window.clearTimeout(this._showTimeout),window.setTimeout(function(){if(!1!==i._isOpen&&document.body.contains(i._tooltipNode)){if("mouseleave"===r.type&&i._setTooltipNodeEvent(r,e,t,n))return
i._hide(e,n)}},o)}},{key:"_updateTitleContent",value:function(e){if(void 0!==this._tooltipNode){var t=this._tooltipNode.querySelector(this.options.innerSelector)
this._clearTitleContent(t,this.options.html,this.reference.getAttribute("title")||this.options.title),this._addTitleContent(this.reference,e,this.options.html,t),this.options.title=e,this.popperInstance.update()}else void 0!==this.options.title&&(this.options.title=e)}},{key:"_clearTitleContent",value:function(e,t,n){1===n.nodeType||11===n.nodeType?t&&e.removeChild(n):t?e.innerHTML="":e.textContent=""}}]),e}(),u=function(){var e=this
this.show=function(){return e._show(e.reference,e.options)},this.hide=function(){return e._hide()},this.dispose=function(){return e._dispose()},this.toggle=function(){return e._isOpen?e.hide():e.show()},this.updateTitleContent=function(t){return e._updateTitleContent(t)},this._events=[],this._setTooltipNodeEvent=function(t,n,r,i){var o=t.relatedreference||t.toElement||t.relatedTarget
return!!e._tooltipNode.contains(o)&&(e._tooltipNode.addEventListener(t.type,function r(o){var s=o.relatedreference||o.toElement||o.relatedTarget
e._tooltipNode.removeEventListener(t.type,r),n.contains(s)||e._scheduleHide(n,i.delay,i,o)}),!0)}}
const c=a},9290:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isMsWindow=void 0
var n=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"]
t.isMsWindow=function(e){if(function(e){return"MSInputMethodContext"in e&&"msCrypto"in e}(e)&&void 0!==e.msCrypto.subtle){var t=e.msCrypto,r=t.getRandomValues,i=t.subtle
return n.map(function(e){return i[e]}).concat(r).every(function(e){return"function"==typeof e})}return!1}},9315:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{fromUtf8:()=>r,toUtf8:()=>i})
var r=function(e){return"function"==typeof TextEncoder?function(e){return(new TextEncoder).encode(e)}(e):function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e.charCodeAt(n)
if(i<128)t.push(i)
else if(i<2048)t.push(i>>6|192,63&i|128)
else if(n+1<e.length&&55296==(64512&i)&&56320==(64512&e.charCodeAt(n+1))){var o=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n))
t.push(o>>18|240,o>>12&63|128,o>>6&63|128,63&o|128)}else t.push(i>>12|224,i>>6&63|128,63&i|128)}return Uint8Array.from(t)}(e)},i=function(e){return"function"==typeof TextDecoder?function(e){return new TextDecoder("utf-8").decode(e)}(e):function(e){for(var t="",n=0,r=e.length;n<r;n++){var i=e[n]
if(i<128)t+=String.fromCharCode(i)
else if(192<=i&&i<224){var o=e[++n]
t+=String.fromCharCode((31&i)<<6|63&o)}else if(240<=i&&i<365){var s="%"+[i,e[++n],e[++n],e[++n]].map(function(e){return e.toString(16)}).join("%")
t+=decodeURIComponent(s)}else t+=String.fromCharCode((15&i)<<12|(63&e[++n])<<6|63&e[++n])}return t}(e)}},9316:(e,t,n)=>{"use strict"
var r,i
function o(e){return e&&!!["provider"].find(function(t){return e.hasOwnProperty(t)})}function s(e){return void 0!==e.redirectSignIn}n.r(t),n.d(t,{Auth:()=>ko,AuthErrorStrings:()=>go,CognitoHostedUIIdentityProvider:()=>r,CognitoUser:()=>Ki,CookieStorage:()=>no,appendToCognitoUserAgent:()=>zi,default:()=>xo}),function(e){e.Cognito="COGNITO",e.Google="Google",e.Facebook="Facebook",e.Amazon="LoginWithAmazon",e.Apple="SignInWithApple"}(r||(r={})),function(e){e.NoConfig="noConfig",e.MissingAuthConfig="missingAuthConfig",e.EmptyUsername="emptyUsername",e.InvalidUsername="invalidUsername",e.EmptyPassword="emptyPassword",e.EmptyCode="emptyCode",e.SignUpError="signUpError",e.NoMFA="noMFA",e.InvalidMFA="invalidMFA",e.EmptyChallengeResponse="emptyChallengeResponse",e.NoUserSession="noUserSession",e.Default="default"}(i||(i={}))
var a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},u=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]))
return e},c={VERBOSE:1,DEBUG:2,INFO:3,WARN:4,ERROR:5},l=function(){function e(e,t){void 0===t&&(t="WARN"),this.name=e,this.level=t}return e.prototype._padding=function(e){return e<10?"0"+e:""+e},e.prototype._ts=function(){var e=new Date
return[this._padding(e.getMinutes()),this._padding(e.getSeconds())].join(":")+"."+e.getMilliseconds()},e.prototype._log=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var i=this.level
if(e.LOG_LEVEL&&(i=e.LOG_LEVEL),"undefined"!=typeof window&&window.LOG_LEVEL&&(i=window.LOG_LEVEL),c[t]>=c[i]){var o=console.log.bind(console)
"ERROR"===t&&console.error&&(o=console.error.bind(console)),"WARN"===t&&console.warn&&(o=console.warn.bind(console))
var s="["+t+"] "+this._ts()+" "+this.name
if(1===n.length&&"string"==typeof n[0])o(s+" - "+n[0])
else if(1===n.length)o(s,n[0])
else if("string"==typeof n[0]){var a=n.slice(1)
1===a.length&&(a=a[0]),o(s+" - "+n[0],a)}else o(s,n)}},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["INFO"],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["INFO"],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["WARN"],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["ERROR"],e))},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["DEBUG"],e))},e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._log.apply(this,u(["VERBOSE"],e))},e.LOG_LEVEL=null,e}(),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},f.apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},d=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]))
return e},p=new l("Hub"),g="undefined"!=typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("amplify_default"):"@@amplify_default",y=function(){function e(e){this.listeners=[],this.patterns=[],this.protectedChannels=["core","auth","api","analytics","interactions","pubsub","storage","xr"],this.name=e}return e.prototype.remove=function(e,t){if(e instanceof RegExp){var n=this.patterns.find(function(t){return t.pattern.source===e.source})
if(!n)return void p.warn("No listeners for "+e)
this.patterns=d(this.patterns.filter(function(e){return e!==n}))}else{var r=this.listeners[e]
if(!r)return void p.warn("No listeners for "+e)
this.listeners[e]=d(r.filter(function(e){return e.callback!==t}))}},e.prototype.dispatch=function(e,t,n,r){void 0===n&&(n=""),this.protectedChannels.indexOf(e)>-1&&(r===g||p.warn("WARNING: "+e+" is protected and dispatching on it can have unintended consequences"))
var i={channel:e,payload:f({},t),source:n,patternInfo:[]}
try{this._toListeners(i)}catch(e){p.error(e)}},e.prototype.listen=function(e,t,n){var r,i=this
if(void 0===n&&(n="noname"),function(e){return void 0!==e.onHubCapsule}(t))p.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."),r=t.onHubCapsule.bind(t)
else{if("function"!=typeof t)throw new Error("No callback supplied to Hub")
r=t}if(e instanceof RegExp)this.patterns.push({pattern:e,callback:r})
else{var o=this.listeners[e]
o||(o=[],this.listeners[e]=o),o.push({name:n,callback:r})}return function(){i.remove(e,r)}},e.prototype._toListeners=function(e){var t=e.channel,n=e.payload,r=this.listeners[t]
if(r&&r.forEach(function(r){p.debug("Dispatching to "+t+" with ",n)
try{r.callback(e)}catch(e){p.error(e)}}),this.patterns.length>0){if(!n.message)return void p.warn("Cannot perform pattern matching without a message key")
var i=n.message
this.patterns.forEach(function(t){var n=i.match(t.pattern)
if(n){var r=h(n).slice(1),o=f(f({},e),{patternInfo:r})
try{t.callback(o)}catch(e){p.error(e)}}})}},e}(),m=new y("__default__"),v={},b=function(){function e(){}return e.setItem=function(e,t){return v[e]=t,v[e]},e.getItem=function(e){return Object.prototype.hasOwnProperty.call(v,e)?v[e]:void 0},e.removeItem=function(e){return delete v[e]},e.clear=function(){return v={}},e}(),w=function(){function e(){try{this.storageWindow=window.localStorage,this.storageWindow.setItem("aws.amplify.test-ls",1),this.storageWindow.removeItem("aws.amplify.test-ls")}catch(e){this.storageWindow=b}}return e.prototype.getStorage=function(){return this.storageWindow},e}(),_=[{type:"text/plain",ext:"txt"},{type:"text/html",ext:"html"},{type:"text/javascript",ext:"js"},{type:"text/css",ext:"css"},{type:"text/csv",ext:"csv"},{type:"text/yaml",ext:"yml"},{type:"text/yaml",ext:"yaml"},{type:"text/calendar",ext:"ics"},{type:"text/calendar",ext:"ical"},{type:"image/apng",ext:"apng"},{type:"image/bmp",ext:"bmp"},{type:"image/gif",ext:"gif"},{type:"image/x-icon",ext:"ico"},{type:"image/x-icon",ext:"cur"},{type:"image/jpeg",ext:"jpg"},{type:"image/jpeg",ext:"jpeg"},{type:"image/jpeg",ext:"jfif"},{type:"image/jpeg",ext:"pjp"},{type:"image/jpeg",ext:"pjpeg"},{type:"image/png",ext:"png"},{type:"image/svg+xml",ext:"svg"},{type:"image/tiff",ext:"tif"},{type:"image/tiff",ext:"tiff"},{type:"image/webp",ext:"webp"},{type:"application/json",ext:"json"},{type:"application/xml",ext:"xml"},{type:"application/x-sh",ext:"sh"},{type:"application/zip",ext:"zip"},{type:"application/x-rar-compressed",ext:"rar"},{type:"application/x-tar",ext:"tar"},{type:"application/x-bzip",ext:"bz"},{type:"application/x-bzip2",ext:"bz2"},{type:"application/pdf",ext:"pdf"},{type:"application/java-archive",ext:"jar"},{type:"application/msword",ext:"doc"},{type:"application/vnd.ms-excel",ext:"xls"},{type:"application/vnd.ms-excel",ext:"xlsx"},{type:"message/rfc822",ext:"eml"}],S=function(e){return void 0===e&&(e={}),0===Object.keys(e).length},A=function(e,t,n){if(!e||!e.sort)return!1
var r=n&&"desc"===n?-1:1
return e.sort(function(e,n){var i=e[t],o=n[t]
return void 0===o?void 0===i?0:1*r:void 0===i||i<o?-1*r:i>o?1*r:0}),!0},E=function(e,t){var n=Object.assign({},e)
return t&&("string"==typeof t?delete n[t]:t.forEach(function(e){delete n[e]})),n},C=function(e,t){void 0===t&&(t="application/octet-stream")
var n=e.toLowerCase(),r=_.filter(function(e){return n.endsWith("."+e.ext)})
return r.length>0?r[0].type:t},O=function(e){var t=e.toLowerCase()
return!!t.startsWith("text/")||"application/json"===t||"application/xml"===t||"application/sh"===t},I=function(){for(var e="",t=32;t>0;t-=1)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())]
return e},P=function(e){if(e.isResolved)return e
var t=!0,n=!1,r=!1,i=e.then(function(e){return r=!0,t=!1,e},function(e){throw n=!0,t=!1,e})
return i.isFullfilled=function(){return r},i.isPending=function(){return t},i.isRejected=function(){return n},i},T=function(){if("undefined"==typeof self)return!1
var e=self
return void 0!==e.WorkerGlobalScope&&self instanceof e.WorkerGlobalScope},k=function(){return{isBrowser:"undefined"!=typeof window&&void 0!==window.document,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}},x=function(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),!U(e))return e
var r={}
for(var i in e)e.hasOwnProperty(i)&&(r[t.includes(i)?i:i[0].toLowerCase()+i.slice(1)]=n.includes(i)?e[i]:x(e[i],t,n))
return r},M=function(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),!U(e))return e
var r={}
for(var i in e)e.hasOwnProperty(i)&&(r[t.includes(i)?i:i[0].toUpperCase()+i.slice(1)]=n.includes(i)?e[i]:M(e[i],t,n))
return r},U=function(e){return!(!(e instanceof Object)||e instanceof Array||e instanceof Function||e instanceof Number||e instanceof String||e instanceof Boolean)},R=function(){function e(){}return e.isEmpty=S,e.sortByField=A,e.objectLessAttributes=E,e.filenameToContentType=C,e.isTextFile=O,e.generateRandomString=I,e.makeQuerablePromise=P,e.isWebWorker=T,e.browserOrNode=k,e.transferKeyToLowerCase=x,e.transferKeyToUpperCase=M,e.isStrictObject=U,e}(),D=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)}
return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},N=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(j(arguments[t]))
return e},L=new l("Util"),F=function(e){function t(t){var n=e.call(this,t)||this
return n.nonRetryable=!0,n}return D(t,e),t}(Error)
function B(e,t,n,r){return void 0===r&&(r=1),i=this,s=function(){var i,o
return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(s){switch(s.label){case 0:if("function"!=typeof e)throw Error("functionToRetry must be a function")
L.debug(e.name+" attempt #"+r+" with this vars: "+JSON.stringify(t)),s.label=1
case 1:return s.trys.push([1,3,,8]),[4,e.apply(void 0,N(t))]
case 2:return[2,s.sent()]
case 3:if(i=s.sent(),L.debug("error on "+e.name,i),(a=i)&&a.nonRetryable)throw L.debug(e.name+" non retryable error",i),i
return o=n(r,t,i),L.debug(e.name+" retrying in "+o+" ms"),!1===o?[3,6]:[4,new Promise(function(e){return setTimeout(e,o)})]
case 4:return s.sent(),[4,B(e,t,n,r+1)]
case 5:return[2,s.sent()]
case 6:throw i
case 7:return[3,8]
case 8:return[2]}var a})},new((o=void 0)||(o=Promise))(function(e,t){function n(e){try{a(s.next(e))}catch(e){t(e)}}function r(e){try{a(s.throw(e))}catch(e){t(e)}}function a(t){var i
t.done?e(t.value):(i=t.value,i instanceof o?i:new o(function(e){e(i)})).then(n,r)}a((s=s.apply(i,[])).next())})
var i,o,s}var H=new l("CognitoCredentials"),q=new Promise(function(e,t){return k().isBrowser?window.gapi&&window.gapi.auth2&&window.gapi.auth2?(H.debug("google api already loaded"),e()):void setTimeout(function(){return e()},2e3):(H.debug("not in the browser, directly resolved"),e())}),V=function(){function e(){this.initialized=!1,this.refreshGoogleToken=this.refreshGoogleToken.bind(this),this._refreshGoogleTokenImpl=this._refreshGoogleTokenImpl.bind(this)}return e.prototype.refreshGoogleToken=function(){return e=this,n=function(){return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(e){switch(e.label){case 0:return this.initialized?[3,2]:(H.debug("need to wait for the Google SDK loaded"),[4,q])
case 1:e.sent(),this.initialized=!0,H.debug("finish waiting"),e.label=2
case 2:return[2,this._refreshGoogleTokenImpl()]}})},new((t=void 0)||(t=Promise))(function(r,i){function o(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var n
e.done?r(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(o,s)}a((n=n.apply(e,[])).next())})
var e,t,n},e.prototype._refreshGoogleTokenImpl=function(){var e=null
return k().isBrowser&&(e=window.gapi&&window.gapi.auth2?window.gapi.auth2:null),e?new Promise(function(t,n){e.getAuthInstance().then(function(e){e||(H.debug("google Auth undefined"),n(new F("google Auth undefined")))
var r=e.currentUser.get()
r.isSignedIn()?(H.debug("refreshing the google access token"),r.reloadAuthResponse().then(function(e){var n=e.id_token,r=e.expires_at
t({token:n,expires_at:r})}).catch(function(e){e&&"network_error"===e.error?n("Network error reloading google auth response"):n(new F("Failed to reload google auth response"))})):n(new F("User is not signed in with Google"))}).catch(function(e){H.debug("Failed to refresh google token",e),n(new F("Failed to refresh google token"))})}):(H.debug("no gapi auth2 available"),Promise.reject("no gapi auth2 available"))},e}(),K=new l("CognitoCredentials"),W=new Promise(function(e,t){return k().isBrowser?window.FB?(K.debug("FB SDK already loaded"),e()):void setTimeout(function(){return e()},2e3):(K.debug("not in the browser, directly resolved"),e())}),z=function(){function e(){this.initialized=!1,this.refreshFacebookToken=this.refreshFacebookToken.bind(this),this._refreshFacebookTokenImpl=this._refreshFacebookTokenImpl.bind(this)}return e.prototype.refreshFacebookToken=function(){return e=this,n=function(){return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(e){switch(e.label){case 0:return this.initialized?[3,2]:(K.debug("need to wait for the Facebook SDK loaded"),[4,W])
case 1:e.sent(),this.initialized=!0,K.debug("finish waiting"),e.label=2
case 2:return[2,this._refreshFacebookTokenImpl()]}})},new((t=void 0)||(t=Promise))(function(r,i){function o(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var n
e.done?r(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(o,s)}a((n=n.apply(e,[])).next())})
var e,t,n},e.prototype._refreshFacebookTokenImpl=function(){var e=null
if(k().isBrowser&&(e=window.FB),!e){var t="no fb sdk available"
return K.debug(t),Promise.reject(new F(t))}return new Promise(function(t,n){e.getLoginStatus(function(e){if(e&&e.authResponse){var r=e.authResponse,i=r.accessToken,o=1e3*r.expiresIn+(new Date).getTime()
i||(s="the jwtToken is undefined",K.debug(s),n(new F(s))),t({token:i,expires_at:o})}else{var s="no response from facebook when refreshing the jwt token"
K.debug(s),n(new F(s))}},{scope:"public_profile,email"})})},e}(),G=new V,Y=new z,$="aws-amplify/3.8.23",Q={userAgent:$+" js",product:"",navigator:null,isReactNative:!1}
"undefined"!=typeof navigator&&navigator.product&&(Q.product=navigator.product||"",Q.navigator=navigator||null,"ReactNative"===navigator.product?(Q.userAgent=$+" react-native",Q.isReactNative=!0):(Q.userAgent=$+" js",Q.isReactNative=!1))
var J=function(){return Q.userAgent},Z=new l("Amplify"),X=function(){function e(){this._components=[],this._config={},this._modules={},this.Auth=null,this.Analytics=null,this.API=null,this.Credentials=null,this.Storage=null,this.I18n=null,this.Cache=null,this.PubSub=null,this.Interactions=null,this.Pushnotification=null,this.UI=null,this.XR=null,this.Predictions=null,this.DataStore=null,this.Logger=l,this.ServiceWorker=null}return e.prototype.register=function(e){Z.debug("component registered in amplify",e),this._components.push(e),"function"==typeof e.getModuleName?(this._modules[e.getModuleName()]=e,this[e.getModuleName()]=e):Z.debug("no getModuleName method for component",e),e.configure(this._config)},e.prototype.configure=function(e){var t=this
return e?(this._config=Object.assign(this._config,e),Z.debug("amplify config",this._config),Object.entries(this._modules).forEach(function(e){var n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}(e,2),r=(n[0],n[1])
Object.keys(r).forEach(function(e){t._modules[e]&&(r[e]=t._modules[e])})}),this._components.map(function(e){e.configure(t._config)}),this._config):this._config},e.prototype.addPluggable=function(e){e&&e.getCategory&&"function"==typeof e.getCategory&&this._components.map(function(t){t.addPluggable&&"function"==typeof t.addPluggable&&t.addPluggable(e)})},e}(),ee=new X,te=function(e,t){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},te(e,t)}
function ne(e,t){function n(){this.constructor=e}te(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var re=function(){return re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},re.apply(this,arguments)}
function ie(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function oe(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})}function se(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function ae(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function ue(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function ce(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(ue(arguments[t]))
return e}var le=function(e,t){return le=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},le(e,t)}
function fe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}le(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var he,de,pe,ge,ye,me,ve,be,we,_e,Se,Ae,Ee,Ce,Oe,Ie,Pe,Te,ke,xe,Me,Ue,Re,De,je,Ne,Le,Fe,Be,He,qe,Ve,Ke,We,ze,Ge,Ye,$e,Qe,Je,Ze,Xe,et,tt,nt,rt,it,ot,st,at,ut,ct,lt,ft,ht,dt,pt,gt=function(){return gt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},gt.apply(this,arguments)}
function yt(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})}function mt(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype)
return s.next=a(0),s.throw=a(1),s.return=a(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.")
for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i
switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a
break
case 4:return o.label++,{value:a[1],done:!1}
case 5:o.label++,r=a[1],a=[0]
continue
case 7:a=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0
continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1]
break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError,function(e){e.AUTHENTICATED_ROLE="AuthenticatedRole",e.DENY="Deny"}(he||(he={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(de||(de={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(pe||(pe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ge||(ge={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ye||(ye={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(me||(me={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ve||(ve={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(be||(be={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(we||(we={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(_e||(_e={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Se||(Se={})),function(e){e.ACCESS_DENIED="AccessDenied",e.INTERNAL_SERVER_ERROR="InternalServerError"}(Ae||(Ae={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ee||(Ee={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ce||(Ce={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Oe||(Oe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ie||(Ie={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Pe||(Pe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Te||(Te={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ke||(ke={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(xe||(xe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Me||(Me={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ue||(Ue={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Re||(Re={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(De||(De={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(je||(je={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ne||(Ne={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Le||(Le={})),function(e){e.CONTAINS="Contains",e.EQUALS="Equals",e.NOT_EQUAL="NotEqual",e.STARTS_WITH="StartsWith"}(Fe||(Fe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Be||(Be={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(He||(He={})),function(e){e.RULES="Rules",e.TOKEN="Token"}(qe||(qe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ve||(Ve={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ke||(Ke={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(We||(We={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ze||(ze={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ge||(Ge={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ye||(Ye={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}($e||($e={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Qe||(Qe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Je||(Je={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Ze||(Ze={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(Xe||(Xe={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(et||(et={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(tt||(tt={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(nt||(nt={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(rt||(rt={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(it||(it={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ot||(ot={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(st||(st={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(at||(at={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ut||(ut={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ct||(ct={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(lt||(lt={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ft||(ft={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(ht||(ht={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(dt||(dt={})),function(e){e.filterSensitiveLog=function(e){return gt({},e)}}(pt||(pt={}))
var vt=function(){function e(e){this.statusCode=e.statusCode,this.headers=e.headers||{},this.body=e.body}return e.isInstance=function(e){if(!e)return!1
var t=e
return"number"==typeof t.statusCode&&"object"==typeof t.headers},e}(),bt=function(){function e(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.substr(-1)?e.protocol+":":e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?"/"+e.path:e.path:"/"}return e.isInstance=function(e){if(!e)return!1
var t=e
return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&"object"==typeof t.query&&"object"==typeof t.headers},e.prototype.clone=function(){var t,n=new e(re(re({},this),{headers:re({},this.headers)}))
return n.query&&(n.query=(t=n.query,Object.keys(t).reduce(function(e,n){var r,i=t[n]
return re(re({},e),((r={})[n]=Array.isArray(i)?ce(i):i,r))},{}))),n},e}(),wt=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r,i,o,s,a,u,c,l,f,h,d,p,g,y
return mt(this,function(m){switch(m.label){case 0:return r=[gt({},e)],y={},[4,Kt(e.body,t)]
case 1:switch(n=gt.apply(void 0,r.concat([(y.body=m.sent(),y)])),o="UnknownError",o=Wt(e,n.body)){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2]
case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4]
case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":return[3,6]
case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,8]
case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10]
case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12]
case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14]
case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18]
case 2:return s=[{}],[4,St(n,t)]
case 3:return i=gt.apply(void 0,[gt.apply(void 0,s.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 4:return a=[{}],[4,At(n,t)]
case 5:return i=gt.apply(void 0,[gt.apply(void 0,a.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 6:return u=[{}],[4,Et(n,t)]
case 7:return i=gt.apply(void 0,[gt.apply(void 0,u.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 8:return c=[{}],[4,Ct(n,t)]
case 9:return i=gt.apply(void 0,[gt.apply(void 0,c.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 10:return l=[{}],[4,It(n,t)]
case 11:return i=gt.apply(void 0,[gt.apply(void 0,l.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 12:return f=[{}],[4,Pt(n,t)]
case 13:return i=gt.apply(void 0,[gt.apply(void 0,f.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 14:return h=[{}],[4,Tt(n,t)]
case 15:return i=gt.apply(void 0,[gt.apply(void 0,h.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 16:return d=[{}],[4,kt(n,t)]
case 17:return i=gt.apply(void 0,[gt.apply(void 0,d.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 18:p=n.body,o=p.code||p.Code||o,i=gt(gt({},p),{name:""+o,message:p.message||p.Message||o,$fault:"client",$metadata:qt(e)}),m.label=19
case 19:return g=i.message||i.Message||o,i.message=g,delete i.Message,[2,Promise.reject(Object.assign(new Error(g),i))]}})})},_t=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r,i,o,s,a,u,c,l,f,h,d,p,g,y
return mt(this,function(m){switch(m.label){case 0:return r=[gt({},e)],y={},[4,Kt(e.body,t)]
case 1:switch(n=gt.apply(void 0,r.concat([(y.body=m.sent(),y)])),o="UnknownError",o=Wt(e,n.body)){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2]
case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4]
case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,6]
case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":return[3,8]
case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10]
case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12]
case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14]
case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18]
case 2:return s=[{}],[4,St(n,t)]
case 3:return i=gt.apply(void 0,[gt.apply(void 0,s.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 4:return a=[{}],[4,At(n,t)]
case 5:return i=gt.apply(void 0,[gt.apply(void 0,a.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 6:return u=[{}],[4,Ct(n,t)]
case 7:return i=gt.apply(void 0,[gt.apply(void 0,u.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 8:return c=[{}],[4,Ot(n,t)]
case 9:return i=gt.apply(void 0,[gt.apply(void 0,c.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 10:return l=[{}],[4,It(n,t)]
case 11:return i=gt.apply(void 0,[gt.apply(void 0,l.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 12:return f=[{}],[4,Pt(n,t)]
case 13:return i=gt.apply(void 0,[gt.apply(void 0,f.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 14:return h=[{}],[4,Tt(n,t)]
case 15:return i=gt.apply(void 0,[gt.apply(void 0,h.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 16:return d=[{}],[4,kt(n,t)]
case 17:return i=gt.apply(void 0,[gt.apply(void 0,d.concat([m.sent()])),{name:o,$metadata:qt(e)}]),[3,19]
case 18:p=n.body,o=p.code||p.Code||o,i=gt(gt({},p),{name:""+o,message:p.message||p.Message||o,$fault:"client",$metadata:qt(e)}),m.label=19
case 19:return g=i.message||i.Message||o,i.message=g,delete i.Message,[2,Promise.reject(Object.assign(new Error(g),i))]}})})},St=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Ut(n,t),[2,gt({name:"ExternalServiceException",$fault:"client",$metadata:qt(e)},r)]})})},At=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Rt(n,t),[2,gt({name:"InternalErrorException",$fault:"server",$metadata:qt(e)},r)]})})},Et=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Dt(n,t),[2,gt({name:"InvalidIdentityPoolConfigurationException",$fault:"client",$metadata:qt(e)},r)]})})},Ct=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=jt(n,t),[2,gt({name:"InvalidParameterException",$fault:"client",$metadata:qt(e)},r)]})})},Ot=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Nt(n,t),[2,gt({name:"LimitExceededException",$fault:"client",$metadata:qt(e)},r)]})})},It=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Lt(n,t),[2,gt({name:"NotAuthorizedException",$fault:"client",$metadata:qt(e)},r)]})})},Pt=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Ft(n,t),[2,gt({name:"ResourceConflictException",$fault:"client",$metadata:qt(e)},r)]})})},Tt=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Bt(n,t),[2,gt({name:"ResourceNotFoundException",$fault:"client",$metadata:qt(e)},r)]})})},kt=function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n=e.body,r=Ht(n,t),[2,gt({name:"TooManyRequestsException",$fault:"client",$metadata:qt(e)},r)]})})},xt=function(e,t){return Object.entries(e).reduce(function(e,t){var n,r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}(t,2),i=r[0],o=r[1]
return null===o?e:gt(gt({},e),((n={})[i]=o,n))},{})},Mt=function(e,t){return{AccessKeyId:void 0!==e.AccessKeyId&&null!==e.AccessKeyId?e.AccessKeyId:void 0,Expiration:void 0!==e.Expiration&&null!==e.Expiration?new Date(Math.round(1e3*e.Expiration)):void 0,SecretKey:void 0!==e.SecretKey&&null!==e.SecretKey?e.SecretKey:void 0,SessionToken:void 0!==e.SessionToken&&null!==e.SessionToken?e.SessionToken:void 0}},Ut=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Rt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Dt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},jt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Nt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Lt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Ft=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Bt=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},Ht=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},qt=function(e){var t
return{httpStatusCode:e.statusCode,requestId:null!==(t=e.headers["x-amzn-requestid"])&&void 0!==t?t:e.headers["x-amzn-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},Vt=function(e,t,n,r,i){return yt(void 0,void 0,void 0,function(){var o,s,a,u,c,l
return mt(this,function(f){switch(f.label){case 0:return[4,e.endpoint()]
case 1:return o=f.sent(),s=o.hostname,a=o.protocol,u=void 0===a?"https":a,c=o.port,l={protocol:u,hostname:s,port:c,method:"POST",path:n,headers:t},void 0!==r&&(l.hostname=r),void 0!==i&&(l.body=i),[2,new bt(l)]}})})},Kt=function(e,t){return function(e,t){return function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)}(e,t).then(function(e){return t.utf8Encoder(e)})}(e,t).then(function(e){return e.length?JSON.parse(e):{}})},Wt=function(e,t){var n,r=function(e){var t=e
return t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},i=(n=e.headers,Object.keys(n).find(function(e){return e.toLowerCase()==="x-amzn-errortype".toLowerCase()}))
return void 0!==i?r(e.headers[i]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):""},zt={name:"deserializerMiddleware",step:"deserialize",tags:["DESERIALIZER"],override:!0},Gt={name:"serializerMiddleware",step:"serialize",tags:["SERIALIZER"],override:!0}
function Yt(e,t,n){return{applyToStack:function(r){r.add(function(e,t){return function(n,r){return function(r){return oe(void 0,void 0,void 0,function(){var i,o
return se(this,function(s){switch(s.label){case 0:return[4,n(r)]
case 1:return i=s.sent().response,[4,t(i,e)]
case 2:return o=s.sent(),[2,{response:i,output:o}]}})})}}}(e,n),zt),r.add(function(e,t){return function(n,r){return function(r){return oe(void 0,void 0,void 0,function(){var i
return se(this,function(o){switch(o.label){case 0:return[4,t(r.input,e)]
case 1:return i=o.sent(),[2,n(re(re({},r),{request:i}))]}})})}}}(e,t),Gt)}}}var $t=function(){var e=[],t=[],n=new Set,r=function(n){return e.forEach(function(e){n.add(e.middleware,re({},e))}),t.forEach(function(e){n.addRelativeTo(e.middleware,re({},e))}),n},i=function(e){var t=[]
return e.before.forEach(function(e){0===e.before.length&&0===e.after.length?t.push(e):t.push.apply(t,ce(i(e)))}),t.push(e),e.after.reverse().forEach(function(e){0===e.before.length&&0===e.after.length?t.push(e):t.push.apply(t,ce(i(e)))}),t},o={add:function(t,r){void 0===r&&(r={})
var i=r.name,o=r.override,s=re({step:"initialize",priority:"normal",middleware:t},r)
if(i){if(n.has(i)){if(!o)throw new Error("Duplicate middleware name '"+i+"'")
var a=e.findIndex(function(e){return e.name===i}),u=e[a]
if(u.step!==s.step||u.priority!==s.priority)throw new Error('"'+i+'" middleware with '+u.priority+" priority in "+u.step+" step cannot be overridden by same-name middleware with "+s.priority+" priority in "+s.step+" step.")
e.splice(a,1)}n.add(i)}e.push(s)},addRelativeTo:function(e,r){var i=r.name,o=r.override,s=re({middleware:e},r)
if(i){if(n.has(i)){if(!o)throw new Error("Duplicate middleware name '"+i+"'")
var a=t.findIndex(function(e){return e.name===i}),u=t[a]
if(u.toMiddleware!==s.toMiddleware||u.relation!==s.relation)throw new Error('"'+i+'" middleware '+u.relation+' "'+u.toMiddleware+'" middleware cannot be overridden by same-name middleware '+s.relation+' "'+s.toMiddleware+'" middleware.')
t.splice(a,1)}n.add(i)}t.push(s)},clone:function(){return r($t())},use:function(e){e.applyToStack(o)},remove:function(r){return"string"==typeof r?function(r){var i=!1,o=function(e){return!e.name||e.name!==r||(i=!0,n.delete(r),!1)}
return e=e.filter(o),t=t.filter(o),i}(r):function(r){var i=!1,o=function(e){return e.middleware!==r||(i=!0,e.name&&n.delete(e.name),!1)}
return e=e.filter(o),t=t.filter(o),i}(r)},removeByTag:function(r){var i=!1,o=function(e){var t=e.tags,o=e.name
return!t||!t.includes(r)||(o&&n.delete(o),i=!0,!1)}
return e=e.filter(o),t=t.filter(o),i},concat:function(e){var t=r($t())
return t.use(e),t},applyToStack:r,resolve:function(n,r){var o,s
try{for(var a=ae(function(){var n,r=[],o=[],s={}
return e.forEach(function(e){var t=re(re({},e),{before:[],after:[]})
t.name&&(s[t.name]=t),r.push(t)}),t.forEach(function(e){var t=re(re({},e),{before:[],after:[]})
t.name&&(s[t.name]=t),o.push(t)}),o.forEach(function(e){if(e.toMiddleware){var t=s[e.toMiddleware]
if(void 0===t)throw new Error(e.toMiddleware+" is not found when adding "+(e.name||"anonymous")+" middleware "+e.relation+" "+e.toMiddleware)
"after"===e.relation&&t.after.push(e),"before"===e.relation&&t.before.push(e)}}),(n=r,n.sort(function(e,t){return Qt[t.step]-Qt[e.step]||Jt[t.priority||"normal"]-Jt[e.priority||"normal"]})).map(i).reduce(function(e,t){return e.push.apply(e,ce(t)),e},[]).map(function(e){return e.middleware})}().reverse()),u=a.next();!u.done;u=a.next())n=(0,u.value)(n,r)}catch(e){o={error:e}}finally{try{u&&!u.done&&(s=a.return)&&s.call(a)}finally{if(o)throw o.error}}return n}}
return o},Qt={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},Jt={high:3,normal:2,low:1},Zt=function(){function e(e){this.middlewareStack=$t(),this.config=e}return e.prototype.send=function(e,t,n){var r="function"!=typeof t?t:void 0,i="function"==typeof t?t:n,o=e.resolveMiddleware(this.middlewareStack,this.config,r)
if(!i)return o(e).then(function(e){return e.output})
o(e).then(function(e){return i(null,e.output)},function(e){return i(e)}).catch(function(){})},e.prototype.destroy=function(){this.config.requestHandler.destroy&&this.config.requestHandler.destroy()},e}(),Xt=function(){this.middlewareStack=$t()},en=function(){var e=Object.getPrototypeOf(this).constructor,t=new(Function.bind.apply(String,ce([null],arguments)))
return Object.setPrototypeOf(t,e.prototype),t}
en.prototype=Object.create(String.prototype,{constructor:{value:en,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(en,String),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}ne(t,e),t.prototype.deserializeJSON=function(){return JSON.parse(e.prototype.toString.call(this))},t.prototype.toJSON=function(){return e.prototype.toString.call(this)},t.fromObject=function(e){return e instanceof t?e:new t(e instanceof String||"string"==typeof e?e:JSON.stringify(e))}}(en)
var tn=function(e){function t(t){var n=e.call(this)||this
return n.input=t,n}return fe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(Yt(t,this.serialize,this.deserialize))
var r=e.concat(this.middlewareStack),i={logger:t.logger,clientName:"CognitoIdentityClient",commandName:"GetCredentialsForIdentityCommand",inputFilterSensitiveLog:Me.filterSensitiveLog,outputFilterSensitiveLog:Re.filterSensitiveLog},o=t.requestHandler
return r.resolve(function(e){return o.handle(e.request,n||{})},i)},t.prototype.serialize=function(e,t){return function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n={"content-type":"application/x-amz-json-1.1","x-amz-target":"AWSCognitoIdentityService.GetCredentialsForIdentity"},r=JSON.stringify(function(e){return gt(gt(gt({},void 0!==e.CustomRoleArn&&null!==e.CustomRoleArn&&{CustomRoleArn:e.CustomRoleArn}),void 0!==e.IdentityId&&null!==e.IdentityId&&{IdentityId:e.IdentityId}),void 0!==e.Logins&&null!==e.Logins&&{Logins:xt(e.Logins)})}(e)),[2,Vt(t,n,"/",void 0,r)]})})}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return yt(void 0,void 0,void 0,function(){var n,r,i
return mt(this,function(o){switch(o.label){case 0:return e.statusCode>=300?[2,wt(e,t)]:[4,Kt(e.body,t)]
case 1:return n=o.sent(),r=function(e){return{Credentials:void 0!==e.Credentials&&null!==e.Credentials?Mt(e.Credentials):void 0,IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}}(n),i=gt({$metadata:qt(e)},r),[2,Promise.resolve(i)]}})})}(e,t)},t}(Xt),nn=function(e){function t(t,n){void 0===n&&(n=!0)
var r=e.call(this,t)||this
return r.tryNextLink=n,r}return ne(t,e),t}(Error)
function rn(e){return Promise.all(Object.keys(e).reduce(function(t,n){var r=e[n]
return"string"==typeof r?t.push([n,r]):t.push(r().then(function(e){return[n,e]})),t},[])).then(function(e){return e.reduce(function(e,t){var n=ue(t,2),r=n[0],i=n[1]
return e[r]=i,e},{})})}function on(e){var t=this
return function(){return oe(t,void 0,void 0,function(){var t,n,r,i,o,s,a,u,c,l,f,h,d
return se(this,function(p){switch(p.label){case 0:return l=(c=e.client).send,f=tn.bind,d={CustomRoleArn:e.customRoleArn,IdentityId:e.identityId},e.logins?[4,rn(e.logins)]:[3,2]
case 1:return h=p.sent(),[3,3]
case 2:h=void 0,p.label=3
case 3:return[4,l.apply(c,[new(f.apply(tn,[void 0,(d.Logins=h,d)]))])]
case 4:return t=p.sent().Credentials,n=void 0===t?function(){throw new nn("Response from Amazon Cognito contained no credentials")}():t,r=n.AccessKeyId,i=void 0===r?function(){throw new nn("Response from Amazon Cognito contained no access key ID")}():r,o=n.Expiration,s=n.SecretKey,a=void 0===s?function(){throw new nn("Response from Amazon Cognito contained no secret key")}():s,u=n.SessionToken,[2,{identityId:e.identityId,accessKeyId:i,secretAccessKey:a,sessionToken:u,expiration:o}]}})})}}for(var sn=function(e){function t(t){var n=e.call(this)||this
return n.input=t,n}return fe(t,e),t.prototype.resolveMiddleware=function(e,t,n){this.middlewareStack.use(Yt(t,this.serialize,this.deserialize))
var r=e.concat(this.middlewareStack),i={logger:t.logger,clientName:"CognitoIdentityClient",commandName:"GetIdCommand",inputFilterSensitiveLog:je.filterSensitiveLog,outputFilterSensitiveLog:Ne.filterSensitiveLog},o=t.requestHandler
return r.resolve(function(e){return o.handle(e.request,n||{})},i)},t.prototype.serialize=function(e,t){return function(e,t){return yt(void 0,void 0,void 0,function(){var n,r
return mt(this,function(i){return n={"content-type":"application/x-amz-json-1.1","x-amz-target":"AWSCognitoIdentityService.GetId"},r=JSON.stringify(function(e){return gt(gt(gt({},void 0!==e.AccountId&&null!==e.AccountId&&{AccountId:e.AccountId}),void 0!==e.IdentityPoolId&&null!==e.IdentityPoolId&&{IdentityPoolId:e.IdentityPoolId}),void 0!==e.Logins&&null!==e.Logins&&{Logins:xt(e.Logins)})}(e)),[2,Vt(t,n,"/",void 0,r)]})})}(e,t)},t.prototype.deserialize=function(e,t){return function(e,t){return yt(void 0,void 0,void 0,function(){var n,r,i
return mt(this,function(o){switch(o.label){case 0:return e.statusCode>=300?[2,_t(e,t)]:[4,Kt(e.body,t)]
case 1:return n=o.sent(),r=function(e){return{IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}}(n),i=gt({$metadata:qt(e)},r),[2,Promise.resolve(i)]}})})}(e,t)},t}(Xt),an="IdentityIds",un=function(){function e(e){void 0===e&&(e="aws:cognito-identity-ids"),this.dbName=e}return e.prototype.getItem=function(e){return this.withObjectStore("readonly",function(t){var n=t.get(e)
return new Promise(function(e){n.onerror=function(){return e(null)},n.onsuccess=function(){return e(n.result?n.result.value:null)}})}).catch(function(){return null})},e.prototype.removeItem=function(e){return this.withObjectStore("readwrite",function(t){var n=t.delete(e)
return new Promise(function(e,t){n.onerror=function(){return t(n.error)},n.onsuccess=function(){return e()}})})},e.prototype.setItem=function(e,t){return this.withObjectStore("readwrite",function(n){var r=n.put({id:e,value:t})
return new Promise(function(e,t){r.onerror=function(){return t(r.error)},r.onsuccess=function(){return e()}})})},e.prototype.getDb=function(){var e=self.indexedDB.open(this.dbName,1)
return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)},e.onblocked=function(){n(new Error("Unable to access DB"))},e.onupgradeneeded=function(){var t=e.result
t.onerror=function(){n(new Error("Failed to create object store"))},t.createObjectStore(an,{keyPath:"id"})}})},e.prototype.withObjectStore=function(e,t){return this.getDb().then(function(n){var r=n.transaction(an,e)
return r.oncomplete=function(){return n.close()},new Promise(function(e,n){r.onerror=function(){return n(r.error)},e(t(r.objectStore(an)))}).catch(function(e){throw n.close(),e})})},e}(),cn=new(function(){function e(e){void 0===e&&(e={}),this.store=e}return e.prototype.getItem=function(e){return e in this.store?this.store[e]:null},e.prototype.removeItem=function(e){delete this.store[e]},e.prototype.setItem=function(e,t){this.store[e]=t},e}()),ln=n(5748),fn=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,hn)},hn=function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()},dn=function(){function e(e){var t=(void 0===e?{}:e).requestTimeout
this.requestTimeout=t}return e.prototype.destroy=function(){},e.prototype.handle=function(e,t){var n=(void 0===t?{}:t).abortSignal,r=this.requestTimeout
if(null==n?void 0:n.aborted){var i=new Error("Request aborted")
return i.name="AbortError",Promise.reject(i)}var o=e.path
if(e.query){var s=function(e){var t,n,r=[]
try{for(var i=ae(Object.keys(e).sort()),o=i.next();!o.done;o=i.next()){var s=o.value,a=e[s]
if(s=fn(s),Array.isArray(a))for(var u=0,c=a.length;u<c;u++)r.push(s+"="+fn(a[u]))
else{var l=s;(a||"string"==typeof a)&&(l+="="+fn(a)),r.push(l)}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r.join("&")}(e.query)
s&&(o+="?"+s)}var a=e.port,u=e.method,c=e.protocol+"//"+e.hostname+(a?":"+a:"")+o,l={body:"GET"===u||"HEAD"===u?void 0:e.body,headers:new Headers(e.headers),method:u}
"undefined"!=typeof AbortController&&(l.signal=n)
var f,h=new Request(c,l),d=[fetch(h).then(function(e){var t,n,r=e.headers,i={}
try{for(var o=ae(r.entries()),s=o.next();!s.done;s=o.next()){var a=s.value
i[a[0]]=a[1]}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return void 0!==e.body?{response:new vt({headers:i,statusCode:e.status,body:e.body})}:e.blob().then(function(t){return{response:new vt({headers:i,statusCode:e.status,body:t})}})}),(f=r,void 0===f&&(f=0),new Promise(function(e,t){f&&setTimeout(function(){var e=new Error("Request did not complete within "+f+" ms")
e.name="TimeoutError",t(e)},f)}))]
return n&&d.push(new Promise(function(e,t){n.onabort=function(){var e=new Error("Request aborted")
e.name="AbortError",t(e)}})),Promise.race(d)},e}(),pn={},gn=new Array(64),yn=0,mn="A".charCodeAt(0),vn="Z".charCodeAt(0);yn+mn<=vn;yn++){var bn=String.fromCharCode(yn+mn)
pn[bn]=yn,gn[yn]=bn}for(yn=0,mn="a".charCodeAt(0),vn="z".charCodeAt(0);yn+mn<=vn;yn++){bn=String.fromCharCode(yn+mn)
var wn=yn+26
pn[bn]=wn,gn[wn]=bn}for(yn=0;yn<10;yn++)pn[yn.toString(10)]=yn+52,bn=yn.toString(10),wn=yn+52,pn[bn]=wn,gn[wn]=bn
function _n(e){var t=e.length/4*3
"=="===e.substr(-2)?t-=2:"="===e.substr(-1)&&t--
for(var n=new ArrayBuffer(t),r=new DataView(n),i=0;i<e.length;i+=4){for(var o=0,s=0,a=i,u=i+3;a<=u;a++)"="!==e[a]?(o|=pn[e[a]]<<6*(u-a),s+=6):o>>=6
var c=i/4*3
o>>=s%8
for(var l=Math.floor(s/8),f=0;f<l;f++){var h=8*(l-f-1)
r.setUint8(c+f,(o&255<<h)>>h)}}return new Uint8Array(n)}function Sn(e){return new Promise(function(t,n){var r=new FileReader
r.onloadend=function(){var e
if(2!==r.readyState)return n(new Error("Reader aborted too early"))
var i=null!==(e=r.result)&&void 0!==e?e:"",o=i.indexOf(","),s=o>-1?o+1:i.length
t(i.substring(s))},r.onabort=function(){return n(new Error("Read aborted"))},r.onerror=function(){return n(r.error)},r.readAsDataURL(e)})}pn["+"]=62,gn[62]="+",pn["/"]=63,gn[63]="/"
for(var An,En,Cn,On={name:"retryMiddleware",tags:["RETRY"],step:"finalizeRequest",priority:"high",override:!0},In=["AuthFailure","InvalidSignatureException","RequestExpired","RequestInTheFuture","RequestTimeTooSkewed","SignatureDoesNotMatch"],Pn=["BandwidthLimitExceeded","EC2ThrottledException","LimitExceededException","PriorRequestNotComplete","ProvisionedThroughputExceededException","RequestLimitExceeded","RequestThrottled","RequestThrottledException","SlowDown","ThrottledException","Throttling","ThrottlingException","TooManyRequestsException","TransactionInProgressException"],Tn=["AbortError","TimeoutError","RequestTimeout","RequestTimeoutException"],kn=[500,502,503,504],xn=function(e){var t,n
return 429===(null===(t=e.$metadata)||void 0===t?void 0:t.httpStatusCode)||Pn.includes(e.name)||1==(null===(n=e.$retryable)||void 0===n?void 0:n.throttling)},Mn=n(5820),Un=function(e,t){return Math.floor(Math.min(2e4,Math.random()*Math.pow(2,t)*e))},Rn=function(e){return!!e&&(function(e){return void 0!==e.$retryable}(e)||function(e){return In.includes(e.name)}(e)||xn(e)||function(e){var t
return Tn.includes(e.name)||kn.includes((null===(t=e.$metadata)||void 0===t?void 0:t.httpStatusCode)||0)}(e))},Dn=function(){function e(e,t){var n,r,i,o,s,a
this.maxAttemptsProvider=e,this.mode="standard",this.retryDecider=null!==(n=null==t?void 0:t.retryDecider)&&void 0!==n?n:Rn,this.delayDecider=null!==(r=null==t?void 0:t.delayDecider)&&void 0!==r?r:Un,this.retryQuota=null!==(i=null==t?void 0:t.retryQuota)&&void 0!==i?i:(o=500,s=function(e){return"TimeoutError"===e.name?10:5},a=function(e){return s(e)<=o},Object.freeze({hasRetryTokens:a,retrieveRetryTokens:function(e){if(!a(e))throw new Error("No retry token available")
var t=s(e)
return o-=t,t},releaseRetryTokens:function(e){o+=null!=e?e:1,o=Math.min(o,500)}}))}return e.prototype.shouldRetry=function(e,t,n){return t<n&&this.retryDecider(e)&&this.retryQuota.hasRetryTokens(e)},e.prototype.getMaxAttempts=function(){return oe(this,void 0,void 0,function(){var e
return se(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.maxAttemptsProvider()]
case 1:return e=t.sent(),[3,3]
case 2:return t.sent(),e=3,[3,3]
case 3:return[2,e]}})})},e.prototype.retry=function(e,t){return oe(this,void 0,void 0,function(){var n,r,i,o,s,a,u,c
return se(this,function(l){switch(l.label){case 0:return r=0,i=0,[4,this.getMaxAttempts()]
case 1:o=l.sent(),s=t.request,bt.isInstance(s)&&(s.headers["amz-sdk-invocation-id"]=(0,Mn.v4)()),a=function(){var a,c,l,f,h
return se(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,5]),bt.isInstance(s)&&(s.headers["amz-sdk-request"]="attempt="+(r+1)+"; max="+o),[4,e(t)]
case 1:return a=d.sent(),c=a.response,l=a.output,u.retryQuota.releaseRetryTokens(n),l.$metadata.attempts=r+1,l.$metadata.totalRetryDelay=i,[2,{value:{response:c,output:l}}]
case 2:return f=d.sent(),r++,u.shouldRetry(f,r,o)?(n=u.retryQuota.retrieveRetryTokens(f),h=u.delayDecider(xn(f)?500:100,r),i+=h,[4,new Promise(function(e){return setTimeout(e,h)})]):[3,4]
case 3:return d.sent(),[2,"continue"]
case 4:throw f.$metadata||(f.$metadata={}),f.$metadata.attempts=r,f.$metadata.totalRetryDelay=i,f
case 5:return[2]}})},u=this,l.label=2
case 2:return[5,a()]
case 3:return"object"==typeof(c=l.sent())?[2,c.value]:[3,2]
case 4:return[2]}})})},e}(),jn=n(7658),Nn=n.n(jn),Ln="cognito-identity.{region}.amazonaws.com",Fn=new Set(["af-south-1","ap-east-1","ap-northeast-1","ap-northeast-2","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","eu-central-1","eu-north-1","eu-south-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","sa-east-1","us-east-1","us-east-2","us-west-1","us-west-2"]),Bn=new Set(["cn-north-1","cn-northwest-1"]),Hn=new Set(["us-iso-east-1"]),qn=new Set(["us-isob-east-1"]),Vn=new Set(["us-gov-east-1","us-gov-west-1"]),Kn={apiVersion:"2014-06-30",disableHostPrefix:!1,logger:{},regionInfoProvider:function(e,t){var n=void 0
switch(e){case"ap-northeast-1":n={hostname:"cognito-identity.ap-northeast-1.amazonaws.com",partition:"aws"}
break
case"ap-northeast-2":n={hostname:"cognito-identity.ap-northeast-2.amazonaws.com",partition:"aws"}
break
case"ap-south-1":n={hostname:"cognito-identity.ap-south-1.amazonaws.com",partition:"aws"}
break
case"ap-southeast-1":n={hostname:"cognito-identity.ap-southeast-1.amazonaws.com",partition:"aws"}
break
case"ap-southeast-2":n={hostname:"cognito-identity.ap-southeast-2.amazonaws.com",partition:"aws"}
break
case"ca-central-1":n={hostname:"cognito-identity.ca-central-1.amazonaws.com",partition:"aws"}
break
case"cn-north-1":n={hostname:"cognito-identity.cn-north-1.amazonaws.com.cn",partition:"aws-cn"}
break
case"eu-central-1":n={hostname:"cognito-identity.eu-central-1.amazonaws.com",partition:"aws"}
break
case"eu-north-1":n={hostname:"cognito-identity.eu-north-1.amazonaws.com",partition:"aws"}
break
case"eu-west-1":n={hostname:"cognito-identity.eu-west-1.amazonaws.com",partition:"aws"}
break
case"eu-west-2":n={hostname:"cognito-identity.eu-west-2.amazonaws.com",partition:"aws"}
break
case"eu-west-3":n={hostname:"cognito-identity.eu-west-3.amazonaws.com",partition:"aws"}
break
case"fips-us-east-1":n={hostname:"cognito-identity-fips.us-east-1.amazonaws.com",partition:"aws",signingRegion:"us-east-1"}
break
case"fips-us-east-2":n={hostname:"cognito-identity-fips.us-east-2.amazonaws.com",partition:"aws",signingRegion:"us-east-2"}
break
case"fips-us-gov-west-1":n={hostname:"cognito-identity-fips.us-gov-west-1.amazonaws.com",partition:"aws-us-gov",signingRegion:"us-gov-west-1"}
break
case"fips-us-west-2":n={hostname:"cognito-identity-fips.us-west-2.amazonaws.com",partition:"aws",signingRegion:"us-west-2"}
break
case"sa-east-1":n={hostname:"cognito-identity.sa-east-1.amazonaws.com",partition:"aws"}
break
case"us-east-1":n={hostname:"cognito-identity.us-east-1.amazonaws.com",partition:"aws"}
break
case"us-east-2":n={hostname:"cognito-identity.us-east-2.amazonaws.com",partition:"aws"}
break
case"us-gov-west-1":n={hostname:"cognito-identity.us-gov-west-1.amazonaws.com",partition:"aws-us-gov"}
break
case"us-west-1":n={hostname:"cognito-identity.us-west-1.amazonaws.com",partition:"aws"}
break
case"us-west-2":n={hostname:"cognito-identity.us-west-2.amazonaws.com",partition:"aws"}
break
default:Fn.has(e)&&(n={hostname:Ln.replace("{region}",e),partition:"aws"}),Bn.has(e)&&(n={hostname:"cognito-identity.{region}.amazonaws.com.cn".replace("{region}",e),partition:"aws-cn"}),Hn.has(e)&&(n={hostname:"cognito-identity.{region}.c2s.ic.gov".replace("{region}",e),partition:"aws-iso"}),qn.has(e)&&(n={hostname:"cognito-identity.{region}.sc2s.sgov.gov".replace("{region}",e),partition:"aws-iso-b"}),Vn.has(e)&&(n={hostname:"cognito-identity.{region}.amazonaws.com".replace("{region}",e),partition:"aws-us-gov"}),void 0===n&&(n={hostname:Ln.replace("{region}",e),partition:"aws"})}return Promise.resolve(gt({signingService:"cognito-identity"},n))},serviceId:"Cognito Identity",urlParser:function(e){var t,n=new URL(e),r=n.hostname,i=n.pathname,o=n.port,s=n.protocol,a=n.search
return a&&(t=function(e){var t,n,r={}
if(e=e.replace(/^\?/,""))try{for(var i=ae(e.split("&")),o=i.next();!o.done;o=i.next()){var s=ue(o.value.split("="),2),a=s[0],u=s[1],c=void 0===u?null:u
a=decodeURIComponent(a),c&&(c=decodeURIComponent(c)),a in r?Array.isArray(r[a])?r[a].push(c):r[a]=[r[a],c]:r[a]=c}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}(a)),{hostname:r,port:o?parseInt(o):void 0,protocol:s,path:i,query:t}}},Wn=gt(gt({},Kn),{runtime:"browser",base64Decoder:_n,base64Encoder:function(e){for(var t="",n=0;n<e.length;n+=3){for(var r=0,i=0,o=n,s=Math.min(n+3,e.length);o<s;o++)r|=e[o]<<8*(s-o-1),i+=8
var a=Math.ceil(i/6)
r<<=6*a-i
for(var u=1;u<=a;u++){var c=6*(a-u)
t+=gn[(r&63<<c)>>c]}t+="==".slice(0,4-a)}return t},bodyLengthChecker:function(e){if("string"==typeof e){for(var t=e.length,n=t-1;n>=0;n--){var r=e.charCodeAt(n)
r>127&&r<=2047?t++:r>2047&&r<=65535&&(t+=2)}return t}return"number"==typeof e.byteLength?e.byteLength:"number"==typeof e.size?e.size:void 0},credentialDefaultProvider:function(e){return function(){return Promise.reject(new Error("Credential is missing"))}},defaultUserAgentProvider:(An={serviceId:Kn.serviceId,clientVersion:"3.6.1"},En=An.serviceId,Cn=An.clientVersion,function(){return oe(void 0,void 0,void 0,function(){var e,t,n,r,i,o,s,a,u
return se(this,function(c){return e=(null===(n=null===window||void 0===window?void 0:window.navigator)||void 0===n?void 0:n.userAgent)?Nn().parse(window.navigator.userAgent):void 0,t=[["aws-sdk-js",Cn],["os/"+((null===(r=null==e?void 0:e.os)||void 0===r?void 0:r.name)||"other"),null===(i=null==e?void 0:e.os)||void 0===i?void 0:i.version],["lang/js"],["md/browser",(null!==(s=null===(o=null==e?void 0:e.browser)||void 0===o?void 0:o.name)&&void 0!==s?s:"unknown")+"_"+(null!==(u=null===(a=null==e?void 0:e.browser)||void 0===a?void 0:a.version)&&void 0!==u?u:"unknown")]],En&&t.push(["api/"+En,Cn]),[2,t]})})}),maxAttempts:3,region:function(){return Promise.reject("Region is missing")},requestHandler:new dn,sha256:ln.Sha256,streamCollector:function(e){return"function"==typeof Blob&&e instanceof Blob?function(e){return oe(this,void 0,void 0,function(){var t,n
return se(this,function(r){switch(r.label){case 0:return[4,Sn(e)]
case 1:return t=r.sent(),n=_n(t),[2,new Uint8Array(n)]}})})}(e):function(e){return oe(this,void 0,void 0,function(){var t,n,r,i,o,s,a
return se(this,function(u){switch(u.label){case 0:t=new Uint8Array(0),n=e.getReader(),r=!1,u.label=1
case 1:return r?[3,3]:[4,n.read()]
case 2:return i=u.sent(),o=i.done,(s=i.value)&&(a=t,(t=new Uint8Array(a.length+s.length)).set(a),t.set(s,a.length)),r=o,[3,1]
case 3:return[2,t]}})})}(e)},utf8Decoder:function(e){return"function"==typeof TextEncoder?function(e){return(new TextEncoder).encode(e)}(e):function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e.charCodeAt(n)
if(i<128)t.push(i)
else if(i<2048)t.push(i>>6|192,63&i|128)
else if(n+1<e.length&&55296==(64512&i)&&56320==(64512&e.charCodeAt(n+1))){var o=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n))
t.push(o>>18|240,o>>12&63|128,o>>6&63|128,63&o|128)}else t.push(i>>12|224,i>>6&63|128,63&i|128)}return Uint8Array.from(t)}(e)},utf8Encoder:function(e){return"function"==typeof TextDecoder?function(e){return new TextDecoder("utf-8").decode(e)}(e):function(e){for(var t="",n=0,r=e.length;n<r;n++){var i=e[n]
if(i<128)t+=String.fromCharCode(i)
else if(192<=i&&i<224){var o=e[++n]
t+=String.fromCharCode((31&i)<<6|63&o)}else if(240<=i&&i<365){var s="%"+[i,e[++n],e[++n],e[++n]].map(function(e){return e.toString(16)}).join("%")
t+=decodeURIComponent(s)}else t+=String.fromCharCode((15&i)<<12|(63&e[++n])<<6|63&e[++n])}return t}(e)}}),zn=function(e){var t=e.endpoint,n=e.urlParser
if("string"==typeof t){var r=Promise.resolve(n(t))
return function(){return r}}if("object"==typeof t){var i=Promise.resolve(t)
return function(){return i}}return t},Gn=function(e){if("string"==typeof e){var t=Promise.resolve(e)
return function(){return t}}return e},Yn="content-length",$n={step:"build",tags:["SET_CONTENT_LENGTH","CONTENT_LENGTH"],name:"contentLengthMiddleware",override:!0},Qn={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},Jn={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},Zn={},Xn={},er=0;er<256;er++){var tr=er.toString(16).toLowerCase()
1===tr.length&&(tr="0"+tr),Zn[er]=tr,Xn[tr]=er}function nr(e){for(var t="",n=0;n<e.byteLength;n++)t+=Zn[e[n]]
return t}var rr="X-Amz-Date",ir="X-Amz-Signature",or="X-Amz-Security-Token",sr="authorization",ar=rr.toLowerCase(),ur=[sr,ar,"date"],cr=ir.toLowerCase(),lr="x-amz-content-sha256",fr=or.toLowerCase(),hr={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},dr=/^proxy-/,pr=/^sec-/,gr="AWS4-HMAC-SHA256",yr="AWS4-HMAC-SHA256-PAYLOAD",mr="aws4_request",vr={},br=[]
function wr(e,t,n){return e+"/"+t+"/"+n+"/"+mr}function _r(e,t,n){var r=new e(t)
return r.update(n),r.digest()}function Sr(e,t,n){var r,i,o=e.headers,s={}
try{for(var a=ae(Object.keys(o).sort()),u=a.next();!u.done;u=a.next()){var c=u.value,l=c.toLowerCase();(l in hr||(null==t?void 0:t.has(l))||dr.test(l)||pr.test(l))&&(!n||n&&!n.has(l))||(s[l]=o[c].trim().replace(/\s+/g," "))}}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return s}function Ar(e,t){var n=e.headers,r=e.body
return oe(this,void 0,void 0,function(){var e,i,o,s,a,u,c
return se(this,function(l){switch(l.label){case 0:try{for(e=ae(Object.keys(n)),i=e.next();!i.done;i=e.next())if((o=i.value).toLowerCase()===lr)return[2,n[o]]}catch(e){u={error:e}}finally{try{i&&!i.done&&(c=e.return)&&c.call(e)}finally{if(u)throw u.error}}return null!=r?[3,1]:[2,"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"]
case 1:return"string"==typeof r||ArrayBuffer.isView(r)||(f=r,"function"==typeof ArrayBuffer&&f instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(f))?((s=new t).update(r),a=nr,[4,s.digest()]):[3,3]
case 2:return[2,a.apply(void 0,[l.sent()])]
case 3:return[2,"UNSIGNED-PAYLOAD"]}var f})})}function Er(e){var t=e.headers,n=e.query,r=ie(e,["headers","query"])
return re(re({},r),{headers:re({},t),query:n?Cr(n):void 0})}function Cr(e){return Object.keys(e).reduce(function(t,n){var r,i=e[n]
return re(re({},t),((r={})[n]=Array.isArray(i)?ce(i):i,r))},{})}function Or(e){var t,n
e="function"==typeof e.clone?e.clone():Er(e)
try{for(var r=ae(Object.keys(e.headers)),i=r.next();!i.done;i=r.next()){var o=i.value
ur.indexOf(o.toLowerCase())>-1&&delete e.headers[o]}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return e}var Ir=function(){function e(e){var t=e.applyChecksum,n=e.credentials,r=e.region,i=e.service,o=e.sha256,s=e.uriEscapePath,a=void 0===s||s
this.service=i,this.sha256=o,this.uriEscapePath=a,this.applyChecksum="boolean"!=typeof t||t,this.regionProvider=kr(r),this.credentialProvider=xr(n)}return e.prototype.presign=function(e,t){return void 0===t&&(t={}),oe(this,void 0,void 0,function(){var n,r,i,o,s,a,u,c,l,f,h,d,p,g,y,m,v,b,w,_,S,A,E,C
return se(this,function(O){switch(O.label){case 0:return n=t.signingDate,r=void 0===n?new Date:n,i=t.expiresIn,o=void 0===i?3600:i,s=t.unsignableHeaders,a=t.unhoistableHeaders,u=t.signableHeaders,c=t.signingRegion,l=t.signingService,[4,this.credentialProvider()]
case 1:return f=O.sent(),null==c?[3,2]:(d=c,[3,4])
case 2:return[4,this.regionProvider()]
case 3:d=O.sent(),O.label=4
case 4:return h=d,p=Pr(r),g=p.longDate,y=p.shortDate,o>604800?[2,Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")]:(m=wr(y,h,null!=l?l:this.service),v=function(e,t){var n,r,i
void 0===t&&(t={})
var o="function"==typeof e.clone?e.clone():Er(e),s=o.headers,a=o.query,u=void 0===a?{}:a
try{for(var c=ae(Object.keys(s)),l=c.next();!l.done;l=c.next()){var f=l.value,h=f.toLowerCase()
"x-amz-"!==h.substr(0,6)||(null===(i=t.unhoistableHeaders)||void 0===i?void 0:i.has(h))||(u[f]=s[f],delete s[f])}}catch(e){n={error:e}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return re(re({},e),{headers:s,query:u})}(Or(e),{unhoistableHeaders:a}),f.sessionToken&&(v.query[or]=f.sessionToken),v.query["X-Amz-Algorithm"]=gr,v.query["X-Amz-Credential"]=f.accessKeyId+"/"+m,v.query[rr]=g,v.query["X-Amz-Expires"]=o.toString(10),b=Sr(v,s,u),v.query["X-Amz-SignedHeaders"]=Tr(b),w=v.query,_=ir,S=this.getSignature,A=[g,m,this.getSigningKey(f,h,y,l)],E=this.createCanonicalRequest,C=[v,b],[4,Ar(e,this.sha256)])
case 5:return[4,S.apply(this,A.concat([E.apply(this,C.concat([O.sent()]))]))]
case 6:return w[_]=O.sent(),[2,v]}})})},e.prototype.sign=function(e,t){return oe(this,void 0,void 0,function(){return se(this,function(n){return"string"==typeof e?[2,this.signString(e,t)]:e.headers&&e.payload?[2,this.signEvent(e,t)]:[2,this.signRequest(e,t)]})})},e.prototype.signEvent=function(e,t){var n=e.headers,r=e.payload,i=t.signingDate,o=void 0===i?new Date:i,s=t.priorSignature,a=t.signingRegion,u=t.signingService
return oe(this,void 0,void 0,function(){var e,t,i,c,l,f,h,d,p,g,y
return se(this,function(m){switch(m.label){case 0:return null==a?[3,1]:(t=a,[3,3])
case 1:return[4,this.regionProvider()]
case 2:t=m.sent(),m.label=3
case 3:return e=t,i=Pr(o),c=i.shortDate,l=i.longDate,f=wr(c,e,null!=u?u:this.service),[4,Ar({headers:{},body:r},this.sha256)]
case 4:return h=m.sent(),(d=new this.sha256).update(n),g=nr,[4,d.digest()]
case 5:return p=g.apply(void 0,[m.sent()]),y=[yr,l,f,s,p,h].join("\n"),[2,this.signString(y,{signingDate:o,signingRegion:e,signingService:u})]}})})},e.prototype.signString=function(e,t){var n=void 0===t?{}:t,r=n.signingDate,i=void 0===r?new Date:r,o=n.signingRegion,s=n.signingService
return oe(this,void 0,void 0,function(){var t,n,r,a,u,c,l,f
return se(this,function(h){switch(h.label){case 0:return[4,this.credentialProvider()]
case 1:return t=h.sent(),null==o?[3,2]:(r=o,[3,4])
case 2:return[4,this.regionProvider()]
case 3:r=h.sent(),h.label=4
case 4:return n=r,a=Pr(i).shortDate,l=(c=this.sha256).bind,[4,this.getSigningKey(t,n,a,s)]
case 5:return(u=new(l.apply(c,[void 0,h.sent()]))).update(e),f=nr,[4,u.digest()]
case 6:return[2,f.apply(void 0,[h.sent()])]}})})},e.prototype.signRequest=function(e,t){var n=void 0===t?{}:t,r=n.signingDate,i=void 0===r?new Date:r,o=n.signableHeaders,s=n.unsignableHeaders,a=n.signingRegion,u=n.signingService
return oe(this,void 0,void 0,function(){var t,n,r,c,l,f,h,d,p,g,y
return se(this,function(m){switch(m.label){case 0:return[4,this.credentialProvider()]
case 1:return t=m.sent(),null==a?[3,2]:(r=a,[3,4])
case 2:return[4,this.regionProvider()]
case 3:r=m.sent(),m.label=4
case 4:return n=r,c=Or(e),l=Pr(i),f=l.longDate,h=l.shortDate,d=wr(h,n,null!=u?u:this.service),c.headers[ar]=f,t.sessionToken&&(c.headers[fr]=t.sessionToken),[4,Ar(c,this.sha256)]
case 5:return p=m.sent(),!function(e,t){var n,r
e=e.toLowerCase()
try{for(var i=ae(Object.keys(t)),o=i.next();!o.done;o=i.next())if(e===o.value.toLowerCase())return!0}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return!1}(lr,c.headers)&&this.applyChecksum&&(c.headers[lr]=p),g=Sr(c,s,o),[4,this.getSignature(f,d,this.getSigningKey(t,n,h,u),this.createCanonicalRequest(c,g,p))]
case 6:return y=m.sent(),c.headers[sr]=gr+" Credential="+t.accessKeyId+"/"+d+", SignedHeaders="+Tr(g)+", Signature="+y,[2,c]}})})},e.prototype.createCanonicalRequest=function(e,t,n){var r=Object.keys(t).sort()
return e.method+"\n"+this.getCanonicalPath(e)+"\n"+function(e){var t,n,r=e.query,i=void 0===r?{}:r,o=[],s={},a=function(e){if(e.toLowerCase()===cr)return"continue"
o.push(e)
var t=i[e]
"string"==typeof t?s[e]=fn(e)+"="+fn(t):Array.isArray(t)&&(s[e]=t.slice(0).sort().reduce(function(t,n){return t.concat([fn(e)+"="+fn(n)])},[]).join("&"))}
try{for(var u=ae(Object.keys(i).sort()),c=u.next();!c.done;c=u.next())a(c.value)}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return o.map(function(e){return s[e]}).filter(function(e){return e}).join("&")}(e)+"\n"+r.map(function(e){return e+":"+t[e]}).join("\n")+"\n\n"+r.join(";")+"\n"+n},e.prototype.createStringToSign=function(e,t,n){return oe(this,void 0,void 0,function(){var r,i
return se(this,function(o){switch(o.label){case 0:return(r=new this.sha256).update(n),[4,r.digest()]
case 1:return i=o.sent(),[2,gr+"\n"+e+"\n"+t+"\n"+nr(i)]}})})},e.prototype.getCanonicalPath=function(e){var t=e.path
return this.uriEscapePath?"/"+encodeURIComponent(t.replace(/^\//,"")).replace(/%2F/g,"/"):t},e.prototype.getSignature=function(e,t,n,r){return oe(this,void 0,void 0,function(){var i,o,s,a,u
return se(this,function(c){switch(c.label){case 0:return[4,this.createStringToSign(e,t,r)]
case 1:return i=c.sent(),a=(s=this.sha256).bind,[4,n]
case 2:return(o=new(a.apply(s,[void 0,c.sent()]))).update(i),u=nr,[4,o.digest()]
case 3:return[2,u.apply(void 0,[c.sent()])]}})})},e.prototype.getSigningKey=function(e,t,n,r){return function(e,t,n,r,i){return oe(void 0,void 0,void 0,function(){var o,s,a,u,c,l,f,h,d
return se(this,function(p){switch(p.label){case 0:return[4,_r(e,t.secretAccessKey,t.accessKeyId)]
case 1:if(o=p.sent(),(s=n+":"+r+":"+i+":"+nr(o)+":"+t.sessionToken)in vr)return[2,vr[s]]
for(br.push(s);br.length>50;)delete vr[br.shift()]
a="AWS4"+t.secretAccessKey,p.label=2
case 2:p.trys.push([2,7,8,9]),u=ae([n,r,i,mr]),c=u.next(),p.label=3
case 3:return c.done?[3,6]:(l=c.value,[4,_r(e,a,l)])
case 4:a=p.sent(),p.label=5
case 5:return c=u.next(),[3,3]
case 6:return[3,9]
case 7:return f=p.sent(),h={error:f},[3,9]
case 8:try{c&&!c.done&&(d=u.return)&&d.call(u)}finally{if(h)throw h.error}return[7]
case 9:return[2,vr[s]=a]}})})}(this.sha256,e,n,t,r||this.service)},e}(),Pr=function(e){var t,n=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"")
return{longDate:n,shortDate:n.substr(0,8)}},Tr=function(e){return Object.keys(e).sort().join(";")},kr=function(e){if("string"==typeof e){var t=Promise.resolve(e)
return function(){return t}}return e},xr=function(e){if("object"==typeof e){var t=Promise.resolve(e)
return function(){return t}}return e}
function Mr(e){if("object"==typeof e){var t=Promise.resolve(e)
return function(){return t}}return e}var Ur="user-agent",Rr=/[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,Dr=function(e){var t=ue(e,2),n=t[0],r=t[1],i=n.indexOf("/"),o=n.substring(0,i),s=n.substring(i+1)
return"api"===o&&(s=s.toLowerCase()),[o,s,r].filter(function(e){return e&&e.length>0}).map(function(e){return null==e?void 0:e.replace(Rr,"_")}).join("/")},jr={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0},Nr=function(e){function t(t){var n,r,i,o,s=this,a=function(e){if(!e.region)throw new Error("Region is missing")
return re(re({},e),{region:Gn(e.region)})}(gt(gt({},Wn),t)),u=function(e){var t
return re(re({},e),{tls:null===(t=e.tls)||void 0===t||t,endpoint:e.endpoint?zn(e):function(){return function(e){return oe(void 0,void 0,void 0,function(){var t,n,r,i,o
return se(this,function(s){switch(s.label){case 0:return t=e.tls,n=void 0===t||t,[4,e.region()]
case 1:if(r=s.sent(),!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r))throw new Error("Invalid region in client config")
return[4,e.regionInfoProvider(r)]
case 2:if(!(i=(null!==(o=s.sent())&&void 0!==o?o:{}).hostname))throw new Error("Cannot resolve hostname from client config")
return[2,e.urlParser((n?"https:":"http:")+"//"+i)]}})})}(e)},isCustomEndpoint:!!e.endpoint})}(a),c=function(e){var t,n=this,r=Mr(e.credentials||e.credentialDefaultProvider(e)),i=e.signingEscapePath,o=void 0===i||i,s=e.systemClockOffset,a=void 0===s?e.systemClockOffset||0:s,u=e.sha256
return t=e.signer?Mr(e.signer):function(){return Mr(e.region)().then(function(t){return oe(n,void 0,void 0,function(){return se(this,function(n){switch(n.label){case 0:return[4,e.regionInfoProvider(t)]
case 1:return[2,[n.sent()||{},t]]}})})}).then(function(t){var n=ue(t,2),i=n[0],s=n[1],a=i.signingRegion,c=i.signingService
return e.signingRegion=e.signingRegion||a||s,e.signingName=e.signingName||c||e.serviceId,new Ir({credentials:r,region:e.signingRegion,service:e.signingName,sha256:u,uriEscapePath:o})})},re(re({},e),{systemClockOffset:a,signingEscapePath:o,credentials:r,signer:t})}(u),l=function(e){return re(re({},e),{customUserAgent:"string"==typeof e.customUserAgent?[[e.customUserAgent]]:e.customUserAgent})}((r=function(e){if(void 0===e&&(e=3),"number"==typeof e){var t=Promise.resolve(e)
return function(){return t}}return e}((n=c).maxAttempts),re(re({},n),{maxAttempts:r,retryStrategy:n.retryStrategy||new Dn(r)})))
return(s=e.call(this,l)||this).config=l,s.middlewareStack.use((o=s.config,{applyToStack:function(e){e.add(function(e){return function(t,n){return function(r){return oe(void 0,void 0,void 0,function(){var i
return se(this,function(o){return(null===(i=null==e?void 0:e.retryStrategy)||void 0===i?void 0:i.mode)&&(n.userAgent=ce(n.userAgent||[],[["cfg/retry-mode",e.retryStrategy.mode]])),[2,e.retryStrategy.retry(t,r)]})})}}}(o),On)}})),s.middlewareStack.use(function(e){return{applyToStack:function(t){t.add(function(e){var t=this
return function(n){return function(r){return oe(t,void 0,void 0,function(){var t,i,o,s,a
return se(this,function(u){return t=r.request,bt.isInstance(t)&&(i=t.body,o=t.headers,i&&-1===Object.keys(o).map(function(e){return e.toLowerCase()}).indexOf(Yn)&&void 0!==(s=e(i))&&(t.headers=re(re({},t.headers),((a={})[Yn]=String(s),a)))),[2,n(re(re({},r),{request:t}))]})})}}}(e.bodyLengthChecker),$n)}}}(s.config)),s.middlewareStack.use(function(e){return{applyToStack:function(t){t.add(function(e){return function(t){return function(n){return oe(void 0,void 0,void 0,function(){var r,i
return se(this,function(o){return bt.isInstance(n.request)?(r=n.request,(void 0===(i=(e.requestHandler.metadata||{}).handlerProtocol)?"":i).indexOf("h2")>=0&&!r.headers[":authority"]?(delete r.headers.host,r.headers[":authority"]=""):r.headers.host||(r.headers.host=r.hostname),[2,t(n)]):[2,t(n)]})})}}}(e),Qn)}}}(s.config)),s.middlewareStack.use((s.config,{applyToStack:function(e){e.add(function(e,t){return function(n){return oe(void 0,void 0,void 0,function(){var r,i,o,s,a,u,c,l,f
return se(this,function(h){switch(h.label){case 0:return r=t.clientName,i=t.commandName,o=t.inputFilterSensitiveLog,s=t.logger,a=t.outputFilterSensitiveLog,[4,e(n)]
case 1:return u=h.sent(),s?("function"==typeof s.info&&(c=u.output,l=c.$metadata,f=ie(c,["$metadata"]),s.info({clientName:r,commandName:i,input:o(n.input),output:a(f),metadata:l})),[2,u]):[2,u]}})})}},Jn)}})),s.middlewareStack.use((i=s.config,{applyToStack:function(e){var t
e.add((t=i,function(e,n){return function(r){return oe(void 0,void 0,void 0,function(){var i,o,s,a,u,c,l,f
return se(this,function(h){switch(h.label){case 0:return i=r.request,bt.isInstance(i)?(o=i.headers,s=(null===(l=null==n?void 0:n.userAgent)||void 0===l?void 0:l.map(Dr))||[],[4,t.defaultUserAgentProvider()]):[2,e(r)]
case 1:return a=h.sent().map(Dr),u=(null===(f=null==t?void 0:t.customUserAgent)||void 0===f?void 0:f.map(Dr))||[],o["x-amz-user-agent"]=ce(a,s,u).join(" "),c=ce(a.filter(function(e){return e.startsWith("aws-sdk-")}),u).join(" "),"browser"!==t.runtime&&c&&(o[Ur]=o[Ur]?o[Ur]+" "+c:c),[2,e(re(re({},r),{request:i}))]}})})}}),jr)}})),s}return fe(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this)},t}(Zt),Lr=function(){return Lr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},Lr.apply(this,arguments)},Fr=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})},Br=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},Hr=new l("Credentials"),qr=function(){function e(e){this._gettingCredPromise=null,this._refreshHandlers={},this.Auth=void 0,this.configure(e),this._refreshHandlers.google=G.refreshGoogleToken,this._refreshHandlers.facebook=Y.refreshFacebookToken}return e.prototype.getModuleName=function(){return"Credentials"},e.prototype.getCredSource=function(){return this._credentials_source},e.prototype.configure=function(e){if(!e)return this._config||{}
this._config=Object.assign({},this._config,e)
var t=this._config.refreshHandlers
return t&&(this._refreshHandlers=Lr(Lr({},this._refreshHandlers),t)),this._storage=this._config.storage,this._storage||(this._storage=(new w).getStorage()),this._storageSync=Promise.resolve(),"function"==typeof this._storage.sync&&(this._storageSync=this._storage.sync()),this._config},e.prototype.get=function(){return Hr.debug("getting credentials"),this._pickupCredentials()},e.prototype._pickupCredentials=function(){return Hr.debug("picking up credentials"),this._gettingCredPromise&&this._gettingCredPromise.isPending()?Hr.debug("getting old cred promise"):(Hr.debug("getting new cred promise"),this._gettingCredPromise=P(this._keepAlive())),this._gettingCredPromise},e.prototype._keepAlive=function(){return Fr(this,void 0,void 0,function(){var e,t,n,r,i,o,s
return Br(this,function(a){switch(a.label){case 0:if(Hr.debug("checking if credentials exists and not expired"),(e=this._credentials)&&!this._isExpired(e)&&!this._isPastTTL())return Hr.debug("credentials not changed and not expired, directly return"),[2,Promise.resolve(e)]
if(Hr.debug("need to get a new credential or refresh the existing one"),t=this.Auth,!(n=void 0===t?ee.Auth:t)||"function"!=typeof n.currentUserCredentials)return[2,Promise.reject("No Auth module registered in Amplify")]
if(this._isExpired(e)||!this._isPastTTL())return[3,6]
Hr.debug("ttl has passed but token is not yet expired"),a.label=1
case 1:return a.trys.push([1,5,,6]),[4,n.currentUserPoolUser()]
case 2:return r=a.sent(),[4,n.currentSession()]
case 3:return i=a.sent(),o=i.refreshToken,[4,new Promise(function(e,t){r.refreshSession(o,function(n,r){return n?t(n):e(r)})})]
case 4:return a.sent(),[3,6]
case 5:return s=a.sent(),Hr.debug("Error attempting to refreshing the session",s),[3,6]
case 6:return[2,n.currentUserCredentials()]}})})},e.prototype.refreshFederatedToken=function(e){Hr.debug("Getting federated credentials")
var t=e.provider,n=e.user,r=e.token,i=e.identity_id,o=e.expires_at
o=1970===new Date(o).getFullYear()?1e3*o:o
var s=this
return Hr.debug("checking if federated jwt token expired"),o>(new Date).getTime()?(Hr.debug("token not expired"),this._setCredentialsFromFederation({provider:t,token:r,user:n,identity_id:i,expires_at:o})):s._refreshHandlers[t]&&"function"==typeof s._refreshHandlers[t]?(Hr.debug("getting refreshed jwt token from federation provider"),this._providerRefreshWithRetry({refreshHandler:s._refreshHandlers[t],provider:t,user:n})):(Hr.debug("no refresh handler for provider:",t),this.clear(),Promise.reject("no refresh handler for provider"))},e.prototype._providerRefreshWithRetry=function(e){var t,n,r,i=this,o=e.refreshHandler,s=e.provider,a=e.user
return(t=o,n=[],r=1e4,void 0===r&&(r=3e5),B(t,n,function(e){return function(t){var n=100*Math.pow(2,t)+100*Math.random()
return!(n>e)&&n}}(r))).then(function(e){return Hr.debug("refresh federated token sucessfully",e),i._setCredentialsFromFederation({provider:s,token:e.token,user:a,identity_id:e.identity_id,expires_at:e.expires_at})}).catch(function(e){return"string"==typeof e&&0===e.toLowerCase().lastIndexOf("network error",e.length)||i.clear(),Hr.debug("refresh federated token failed",e),Promise.reject("refreshing federation token failed: "+e)})},e.prototype._isExpired=function(e){if(!e)return Hr.debug("no credentials for expiration check"),!0
Hr.debug("are these credentials expired?",e)
var t=Date.now()
return e.expiration.getTime()<=t},e.prototype._isPastTTL=function(){return this._nextCredentialsRefresh<=Date.now()},e.prototype._setCredentialsForGuest=function(){return Fr(this,void 0,void 0,function(){var e,t,n,r,i,o,s,a,u=this
return Br(this,function(c){switch(c.label){case 0:if(Hr.debug("setting credentials for guest"),e=this._config,t=e.identityPoolId,n=e.region,e.mandatorySignIn)return[2,Promise.reject("cannot get guest credentials when mandatory signin enabled")]
if(!t)return Hr.debug("No Cognito Identity pool provided for unauthenticated access"),[2,Promise.reject("No Cognito Identity pool provided for unauthenticated access")]
if(!n)return Hr.debug("region is not configured for getting the credentials"),[2,Promise.reject("region is not configured for getting the credentials")]
r=void 0,c.label=1
case 1:return c.trys.push([1,3,,4]),[4,this._storageSync]
case 2:return c.sent(),r=this._storage.getItem("CognitoIdentityId-"+t),this._identityId=r,[3,4]
case 3:return i=c.sent(),Hr.debug("Failed to get the cached identityId",i),[3,4]
case 4:return o=new Nr({region:n,customUserAgent:J()}),s=void 0,r?s=on({identityId:r,client:o})():(a=function(){return Fr(u,void 0,void 0,function(){var e
return Br(this,function(n){switch(n.label){case 0:return[4,o.send(new sn({IdentityPoolId:t}))]
case 1:return e=n.sent().IdentityId,this._identityId=e,[2,on({client:o,identityId:e})()]}})})},s=a().catch(function(e){return Fr(u,void 0,void 0,function(){return Br(this,function(t){throw e})})})),[2,this._loadCredentials(s,"guest",!1,null).then(function(e){return e}).catch(function(e){return Fr(u,void 0,void 0,function(){var n,i=this
return Br(this,function(a){return"ResourceNotFoundException"===e.name&&e.message==="Identity '"+r+"' not found."?(Hr.debug("Failed to load guest credentials"),this._storage.removeItem("CognitoIdentityId-"+t),n=function(){return Fr(i,void 0,void 0,function(){var e
return Br(this,function(n){switch(n.label){case 0:return[4,o.send(new sn({IdentityPoolId:t}))]
case 1:return e=n.sent().IdentityId,this._identityId=e,[2,on({client:o,identityId:e})()]}})})},s=n().catch(function(e){return Fr(i,void 0,void 0,function(){return Br(this,function(t){throw e})})}),[2,this._loadCredentials(s,"guest",!1,null)]):[2,e]})})})]}})})},e.prototype._setCredentialsFromFederation=function(e){var t=e.provider,n=e.token,r=e.identity_id,i={google:"accounts.google.com",facebook:"graph.facebook.com",amazon:"www.amazon.com",developer:"cognito-identity.amazonaws.com"}[t]||t
if(!i)return Promise.reject("You must specify a federated provider")
var o={}
o[i]=n
var s=this._config,a=s.identityPoolId,u=s.region
if(!a)return Hr.debug("No Cognito Federated Identity pool provided"),Promise.reject("No Cognito Federated Identity pool provided")
if(!u)return Hr.debug("region is not configured for getting the credentials"),Promise.reject("region is not configured for getting the credentials")
var c,l=new Nr({region:u,customUserAgent:J()})
return c=r?on({identityId:r,logins:o,client:l})():function(e){var t=this,n=e.accountId,r=e.cache,i=void 0===r?"object"==typeof self&&self.indexedDB?new un:"object"==typeof window&&window.localStorage?window.localStorage:cn:r,o=e.client,s=e.customRoleArn,a=e.identityPoolId,u=e.logins,c=e.userIdentifier,l=void 0===c?u&&0!==Object.keys(u).length?void 0:"ANONYMOUS":c,f=l?"aws:cognito-identity-credentials:"+a+":"+l:void 0,h=function(){return oe(t,void 0,void 0,function(){var e,t,r,c,l,d,p,g,y
return se(this,function(m){switch(m.label){case 0:return(t=f)?[4,i.getItem(f)]:[3,2]
case 1:t=m.sent(),m.label=2
case 2:return(e=t)?[3,7]:(d=(l=o).send,p=sn.bind,y={AccountId:n,IdentityPoolId:a},u?[4,rn(u)]:[3,4])
case 3:return g=m.sent(),[3,5]
case 4:g=void 0,m.label=5
case 5:return[4,d.apply(l,[new(p.apply(sn,[void 0,(y.Logins=g,y)]))])]
case 6:r=m.sent().IdentityId,c=void 0===r?function(){throw new nn("Response from Amazon Cognito contained no identity ID")}():r,e=c,f&&Promise.resolve(i.setItem(f,e)).catch(function(){}),m.label=7
case 7:return[2,(h=on({client:o,customRoleArn:s,logins:u,identityId:e}))()]}})})}
return function(){return h().catch(function(e){return oe(t,void 0,void 0,function(){return se(this,function(t){throw f&&Promise.resolve(i.removeItem(f)).catch(function(){}),e})})})}}({logins:o,identityPoolId:a,client:l})(),this._loadCredentials(c,"federated",!0,e)},e.prototype._setCredentialsFromSession=function(e){var t=this
Hr.debug("set credentials from session")
var n=e.getIdToken().getJwtToken(),r=this._config,i=r.region,o=r.userPoolId,s=r.identityPoolId
if(!s)return Hr.debug("No Cognito Federated Identity pool provided"),Promise.reject("No Cognito Federated Identity pool provided")
if(!i)return Hr.debug("region is not configured for getting the credentials"),Promise.reject("region is not configured for getting the credentials")
var a={}
a["cognito-idp."+i+".amazonaws.com/"+o]=n
var u=new Nr({region:i,customUserAgent:J()}),c=Fr(t,void 0,void 0,function(){var e
return Br(this,function(t){switch(t.label){case 0:return[4,u.send(new sn({IdentityPoolId:s,Logins:a}))]
case 1:return e=t.sent().IdentityId,this._identityId=e,[2,on({client:u,logins:a,identityId:e})()]}})}).catch(function(e){return Fr(t,void 0,void 0,function(){return Br(this,function(t){throw e})})})
return this._loadCredentials(c,"userPool",!0,null)},e.prototype._loadCredentials=function(e,t,n,r){var i=this,o=this,s=this._config.identityPoolId
return new Promise(function(a,u){e.then(function(e){return Fr(i,void 0,void 0,function(){var i,u,c,l,f,h
return Br(this,function(d){switch(d.label){case 0:if(Hr.debug("Load credentials successfully",e),this._identityId&&!e.identityId&&(e.identityId=this._identityId),o._credentials=e,o._credentials.authenticated=n,o._credentials_source=t,o._nextCredentialsRefresh=(new Date).getTime()+3e6,"federated"===t){i=Object.assign({id:this._credentials.identityId},r.user),u=r.provider,c=r.token,l=r.expires_at,f=r.identity_id
try{this._storage.setItem("aws-amplify-federatedInfo",JSON.stringify({provider:u,token:c,user:i,expires_at:l,identity_id:f}))}catch(e){Hr.debug("Failed to put federated info into auth storage",e)}}if("guest"!==t)return[3,4]
d.label=1
case 1:return d.trys.push([1,3,,4]),[4,this._storageSync]
case 2:return d.sent(),this._storage.setItem("CognitoIdentityId-"+s,e.identityId),[3,4]
case 3:return h=d.sent(),Hr.debug("Failed to cache identityId",h),[3,4]
case 4:return a(o._credentials),[2]}})})}).catch(function(t){if(t)return Hr.debug("Failed to load credentials",e),Hr.debug("Error loading credentials",t),void u(t)})})},e.prototype.set=function(e,t){return"session"===t?this._setCredentialsFromSession(e):"federation"===t?this._setCredentialsFromFederation(e):"guest"===t?this._setCredentialsForGuest():(Hr.debug("no source specified for setting credentials"),Promise.reject("invalid source"))},e.prototype.clear=function(){return Fr(this,void 0,void 0,function(){return Br(this,function(e){return this._credentials=null,this._credentials_source=null,Hr.debug("removing aws-amplify-federatedInfo from storage"),this._storage.removeItem("aws-amplify-federatedInfo"),[2]})})},e.prototype.shear=function(e){return{accessKeyId:e.accessKeyId,sessionToken:e.sessionToken,secretAccessKey:e.secretAccessKey,identityId:e.identityId,authenticated:e.authenticated}},e}(),Vr=new qr(null)
ee.register(Vr)
var Kr=new l("Parser"),Wr=function(e){var t,n={}
if(e.aws_mobile_analytics_app_id){var r={AWSPinpoint:{appId:e.aws_mobile_analytics_app_id,region:e.aws_mobile_analytics_app_region}}
n.Analytics=r}return(e.aws_cognito_identity_pool_id||e.aws_user_pools_id)&&(n.Auth={userPoolId:e.aws_user_pools_id,userPoolWebClientId:e.aws_user_pools_web_client_id,region:e.aws_cognito_region,identityPoolId:e.aws_cognito_identity_pool_id,identityPoolRegion:e.aws_cognito_region,mandatorySignIn:"enable"===e.aws_mandatory_sign_in}),t=e.aws_user_files_s3_bucket?{AWSS3:{bucket:e.aws_user_files_s3_bucket,region:e.aws_user_files_s3_bucket_region,dangerouslyConnectToHttpEndpointForTesting:e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing}}:e?e.Storage||e:{},n.Analytics=Object.assign({},n.Analytics,e.Analytics),n.Auth=Object.assign({},n.Auth,e.Auth),n.Storage=Object.assign({},t),Kr.debug("parse config",e,"to amplifyconfig",n),n},zr=function(){function e(){}return e.parseMobilehubConfig=Wr,e}(),Gr=n(7441)
function Yr(e,t){void 0===t&&(t={})
var n=function(e){return e&&"j"===e[0]&&":"===e[1]?e.substr(2):e}(e)
if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(e){}return e}var $r=function(){return $r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},$r.apply(this,arguments)},Qr=function(){function e(e,t){var n=this
this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?Gr.q(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise(function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=Gr.q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),Yr(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t)
var n={}
for(var r in this.cookies)n[r]=Yr(this.cookies[r],e)
return n},e.prototype.set=function(e,t,n){var r
"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=$r($r({},this.cookies),((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Gr.l(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=$r($r({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0})
this.cookies=$r({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Gr.l(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e)
t>=0&&this.changeListeners.splice(t,1)},e}()
const Jr=Qr
var Zr,Xr=k().isBrowser,ei=function(){function e(e){void 0===e&&(e={}),this.cookies=new Jr,this.store=Xr?window.localStorage:Object.create(null),this.cookies=e.req?new Jr(e.req.headers.cookie):new Jr,Object.assign(this.store,this.cookies.getAll())}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.entries(this.store).length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this
Array.from(new Array(this.length)).map(function(t,n){return e.key(n)}).forEach(function(t){return e.removeItem(t)})},e.prototype.getItem=function(e){return this.getLocalItem(e)},e.prototype.getLocalItem=function(e){return Object.prototype.hasOwnProperty.call(this.store,e)?this.store[e]:null},e.prototype.getUniversalItem=function(e){return this.cookies.get(e)},e.prototype.key=function(e){return Object.keys(this.store)[e]},e.prototype.removeItem=function(e){this.removeLocalItem(e),this.removeUniversalItem(e)},e.prototype.removeLocalItem=function(e){delete this.store[e]},e.prototype.removeUniversalItem=function(e){this.cookies.remove(e,{path:"/"})},e.prototype.setItem=function(e,t){switch(this.setLocalItem(e,t),e.split(".").pop()){case"LastAuthUser":case"accessToken":case"idToken":this.setUniversalItem(e,t)}},e.prototype.setLocalItem=function(e,t){this.store[e]=t},e.prototype.setUniversalItem=function(e,t){this.cookies.set(e,t,{path:"/",sameSite:!0,secure:"localhost"!==window.location.hostname})},e}(),ti=function(){function e(e){var t=e||{},n=t.ValidationData,r=t.Username,i=t.Password,o=t.AuthParameters,s=t.ClientMetadata
this.validationData=n||{},this.authParameters=o||{},this.clientMetadata=s||{},this.username=r,this.password=i}var t=e.prototype
return t.getUsername=function(){return this.username},t.getPassword=function(){return this.password},t.getValidationData=function(){return this.validationData},t.getAuthParameters=function(){return this.authParameters},t.getClientMetadata=function(){return this.clientMetadata},e}(),ni=n(4949),ri=n(631),ii=n.n(ri),oi=(n(2306),n(9659)),si=n.n(oi),ai=n(7851),ui=n.n(ai)
if("undefined"!=typeof window&&window.crypto&&(Zr=window.crypto),!Zr&&"undefined"!=typeof window&&window.msCrypto&&(Zr=window.msCrypto),!Zr&&"undefined"!=typeof global&&global.crypto&&(Zr=global.crypto),!Zr)try{Zr=n(23)}catch(e){}function ci(){if(Zr){if("function"==typeof Zr.getRandomValues)try{return Zr.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof Zr.randomBytes)try{return Zr.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")}var li=function(){function e(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length}var t=e.prototype
return t.random=function(t){for(var n=[],r=0;r<t;r+=4)n.push(ci())
return new e(n,t)},t.toString=function(){return function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")}(this)},e}()
const fi=hi
function hi(e,t){null!=e&&this.fromString(e,t)}function di(){return new hi(null)}var pi,gi="undefined"!=typeof navigator
gi&&"Microsoft Internet Explorer"==navigator.appName?(hi.prototype.am=function(e,t,n,r,i,o){for(var s=32767&t,a=t>>15;--o>=0;){var u=32767&this[e],c=this[e++]>>15,l=a*u+c*s
i=((u=s*u+((32767&l)<<15)+n[r]+(1073741823&i))>>>30)+(l>>>15)+a*c+(i>>>30),n[r++]=1073741823&u}return i},pi=30):gi&&"Netscape"!=navigator.appName?(hi.prototype.am=function(e,t,n,r,i,o){for(;--o>=0;){var s=t*this[e++]+n[r]+i
i=Math.floor(s/67108864),n[r++]=67108863&s}return i},pi=26):(hi.prototype.am=function(e,t,n,r,i,o){for(var s=16383&t,a=t>>14;--o>=0;){var u=16383&this[e],c=this[e++]>>14,l=a*u+c*s
i=((u=s*u+((16383&l)<<14)+n[r]+i)>>28)+(l>>14)+a*c,n[r++]=268435455&u}return i},pi=28),hi.prototype.DB=pi,hi.prototype.DM=(1<<pi)-1,hi.prototype.DV=1<<pi,hi.prototype.FV=Math.pow(2,52),hi.prototype.F1=52-pi,hi.prototype.F2=2*pi-52
var yi,mi,vi=new Array
for(yi="0".charCodeAt(0),mi=0;mi<=9;++mi)vi[yi++]=mi
for(yi="a".charCodeAt(0),mi=10;mi<36;++mi)vi[yi++]=mi
for(yi="A".charCodeAt(0),mi=10;mi<36;++mi)vi[yi++]=mi
function bi(e){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)}function wi(e,t){var n=vi[e.charCodeAt(t)]
return null==n?-1:n}function _i(e){var t=di()
return t.fromInt(e),t}function Si(e){var t,n=1
return 0!=(t=e>>>16)&&(e=t,n+=16),0!=(t=e>>8)&&(e=t,n+=8),0!=(t=e>>4)&&(e=t,n+=4),0!=(t=e>>2)&&(e=t,n+=2),0!=(t=e>>1)&&(e=t,n+=1),n}function Ai(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function Ei(e){return ni.hp.from((new li).random(e).toString(),"hex")}Ai.prototype.convert=function(e){var t=di()
return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(hi.ZERO)>0&&this.m.subTo(t,t),t},Ai.prototype.revert=function(e){var t=di()
return e.copyTo(t),this.reduce(t),t},Ai.prototype.reduce=function(e){for(;e.t<=this.mt2;)e[e.t++]=0
for(var t=0;t<this.m.t;++t){var n=32767&e[t],r=n*this.mpl+((n*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM
for(e[n=t+this.m.t]+=this.m.am(0,r,e,t,0,this.m.t);e[n]>=e.DV;)e[n]-=e.DV,e[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)},Ai.prototype.mulTo=function(e,t,n){e.multiplyTo(t,n),this.reduce(n)},Ai.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},hi.prototype.copyTo=function(e){for(var t=this.t-1;t>=0;--t)e[t]=this[t]
e.t=this.t,e.s=this.s},hi.prototype.fromInt=function(e){this.t=1,this.s=e<0?-1:0,e>0?this[0]=e:e<-1?this[0]=e+this.DV:this.t=0},hi.prototype.fromString=function(e,t){var n
if(16==t)n=4
else if(8==t)n=3
else if(2==t)n=1
else if(32==t)n=5
else{if(4!=t)throw new Error("Only radix 2, 4, 8, 16, 32 are supported")
n=2}this.t=0,this.s=0
for(var r=e.length,i=!1,o=0;--r>=0;){var s=wi(e,r)
s<0?"-"==e.charAt(r)&&(i=!0):(i=!1,0==o?this[this.t++]=s:o+n>this.DB?(this[this.t-1]|=(s&(1<<this.DB-o)-1)<<o,this[this.t++]=s>>this.DB-o):this[this.t-1]|=s<<o,(o+=n)>=this.DB&&(o-=this.DB))}this.clamp(),i&&hi.ZERO.subTo(this,this)},hi.prototype.clamp=function(){for(var e=this.s&this.DM;this.t>0&&this[this.t-1]==e;)--this.t},hi.prototype.dlShiftTo=function(e,t){var n
for(n=this.t-1;n>=0;--n)t[n+e]=this[n]
for(n=e-1;n>=0;--n)t[n]=0
t.t=this.t+e,t.s=this.s},hi.prototype.drShiftTo=function(e,t){for(var n=e;n<this.t;++n)t[n-e]=this[n]
t.t=Math.max(this.t-e,0),t.s=this.s},hi.prototype.lShiftTo=function(e,t){var n,r=e%this.DB,i=this.DB-r,o=(1<<i)-1,s=Math.floor(e/this.DB),a=this.s<<r&this.DM
for(n=this.t-1;n>=0;--n)t[n+s+1]=this[n]>>i|a,a=(this[n]&o)<<r
for(n=s-1;n>=0;--n)t[n]=0
t[s]=a,t.t=this.t+s+1,t.s=this.s,t.clamp()},hi.prototype.rShiftTo=function(e,t){t.s=this.s
var n=Math.floor(e/this.DB)
if(n>=this.t)t.t=0
else{var r=e%this.DB,i=this.DB-r,o=(1<<r)-1
t[0]=this[n]>>r
for(var s=n+1;s<this.t;++s)t[s-n-1]|=(this[s]&o)<<i,t[s-n]=this[s]>>r
r>0&&(t[this.t-n-1]|=(this.s&o)<<i),t.t=this.t-n,t.clamp()}},hi.prototype.subTo=function(e,t){for(var n=0,r=0,i=Math.min(e.t,this.t);n<i;)r+=this[n]-e[n],t[n++]=r&this.DM,r>>=this.DB
if(e.t<this.t){for(r-=e.s;n<this.t;)r+=this[n],t[n++]=r&this.DM,r>>=this.DB
r+=this.s}else{for(r+=this.s;n<e.t;)r-=e[n],t[n++]=r&this.DM,r>>=this.DB
r-=e.s}t.s=r<0?-1:0,r<-1?t[n++]=this.DV+r:r>0&&(t[n++]=r),t.t=n,t.clamp()},hi.prototype.multiplyTo=function(e,t){var n=this.abs(),r=e.abs(),i=n.t
for(t.t=i+r.t;--i>=0;)t[i]=0
for(i=0;i<r.t;++i)t[i+n.t]=n.am(0,r[i],t,i,0,n.t)
t.s=0,t.clamp(),this.s!=e.s&&hi.ZERO.subTo(t,t)},hi.prototype.squareTo=function(e){for(var t=this.abs(),n=e.t=2*t.t;--n>=0;)e[n]=0
for(n=0;n<t.t-1;++n){var r=t.am(n,t[n],e,2*n,0,1);(e[n+t.t]+=t.am(n+1,2*t[n],e,2*n+1,r,t.t-n-1))>=t.DV&&(e[n+t.t]-=t.DV,e[n+t.t+1]=1)}e.t>0&&(e[e.t-1]+=t.am(n,t[n],e,2*n,0,1)),e.s=0,e.clamp()},hi.prototype.divRemTo=function(e,t,n){var r=e.abs()
if(!(r.t<=0)){var i=this.abs()
if(i.t<r.t)return null!=t&&t.fromInt(0),void(null!=n&&this.copyTo(n))
null==n&&(n=di())
var o=di(),s=this.s,a=e.s,u=this.DB-Si(r[r.t-1])
u>0?(r.lShiftTo(u,o),i.lShiftTo(u,n)):(r.copyTo(o),i.copyTo(n))
var c=o.t,l=o[c-1]
if(0!=l){var f=l*(1<<this.F1)+(c>1?o[c-2]>>this.F2:0),h=this.FV/f,d=(1<<this.F1)/f,p=1<<this.F2,g=n.t,y=g-c,m=null==t?di():t
for(o.dlShiftTo(y,m),n.compareTo(m)>=0&&(n[n.t++]=1,n.subTo(m,n)),hi.ONE.dlShiftTo(c,m),m.subTo(o,o);o.t<c;)o[o.t++]=0
for(;--y>=0;){var v=n[--g]==l?this.DM:Math.floor(n[g]*h+(n[g-1]+p)*d)
if((n[g]+=o.am(0,v,n,y,0,c))<v)for(o.dlShiftTo(y,m),n.subTo(m,n);n[g]<--v;)n.subTo(m,n)}null!=t&&(n.drShiftTo(c,t),s!=a&&hi.ZERO.subTo(t,t)),n.t=c,n.clamp(),u>0&&n.rShiftTo(u,n),s<0&&hi.ZERO.subTo(n,n)}}},hi.prototype.invDigit=function(){if(this.t<1)return 0
var e=this[0]
if(!(1&e))return 0
var t=3&e
return(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this.DV)%this.DV)>0?this.DV-t:-t},hi.prototype.addTo=function(e,t){for(var n=0,r=0,i=Math.min(e.t,this.t);n<i;)r+=this[n]+e[n],t[n++]=r&this.DM,r>>=this.DB
if(e.t<this.t){for(r+=e.s;n<this.t;)r+=this[n],t[n++]=r&this.DM,r>>=this.DB
r+=this.s}else{for(r+=this.s;n<e.t;)r+=e[n],t[n++]=r&this.DM,r>>=this.DB
r+=e.s}t.s=r<0?-1:0,r>0?t[n++]=r:r<-1&&(t[n++]=this.DV+r),t.t=n,t.clamp()},hi.prototype.toString=function(e){if(this.s<0)return"-"+this.negate().toString(e)
var t
if(16==e)t=4
else if(8==e)t=3
else if(2==e)t=1
else if(32==e)t=5
else{if(4!=e)throw new Error("Only radix 2, 4, 8, 16, 32 are supported")
t=2}var n,r=(1<<t)-1,i=!1,o="",s=this.t,a=this.DB-s*this.DB%t
if(s-- >0)for(a<this.DB&&(n=this[s]>>a)>0&&(i=!0,o=bi(n));s>=0;)a<t?(n=(this[s]&(1<<a)-1)<<t-a,n|=this[--s]>>(a+=this.DB-t)):(n=this[s]>>(a-=t)&r,a<=0&&(a+=this.DB,--s)),n>0&&(i=!0),i&&(o+=bi(n))
return i?o:"0"},hi.prototype.negate=function(){var e=di()
return hi.ZERO.subTo(this,e),e},hi.prototype.abs=function(){return this.s<0?this.negate():this},hi.prototype.compareTo=function(e){var t=this.s-e.s
if(0!=t)return t
var n=this.t
if(0!=(t=n-e.t))return this.s<0?-t:t
for(;--n>=0;)if(0!=(t=this[n]-e[n]))return t
return 0},hi.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+Si(this[this.t-1]^this.s&this.DM)},hi.prototype.mod=function(e){var t=di()
return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(hi.ZERO)>0&&e.subTo(t,t),t},hi.prototype.equals=function(e){return 0==this.compareTo(e)},hi.prototype.add=function(e){var t=di()
return this.addTo(e,t),t},hi.prototype.subtract=function(e){var t=di()
return this.subTo(e,t),t},hi.prototype.multiply=function(e){var t=di()
return this.multiplyTo(e,t),t},hi.prototype.divide=function(e){var t=di()
return this.divRemTo(e,t,null),t},hi.prototype.modPow=function(e,t,n){var r,i=e.bitLength(),o=_i(1),s=new Ai(t)
if(i<=0)return o
r=i<18?1:i<48?3:i<144?4:i<768?5:6
var a=new Array,u=3,c=r-1,l=(1<<r)-1
if(a[1]=s.convert(this),r>1){var f=di()
for(s.sqrTo(a[1],f);u<=l;)a[u]=di(),s.mulTo(f,a[u-2],a[u]),u+=2}var h,d,p=e.t-1,g=!0,y=di()
for(i=Si(e[p])-1;p>=0;){for(i>=c?h=e[p]>>i-c&l:(h=(e[p]&(1<<i+1)-1)<<c-i,p>0&&(h|=e[p-1]>>this.DB+i-c)),u=r;!(1&h);)h>>=1,--u
if((i-=u)<0&&(i+=this.DB,--p),g)a[h].copyTo(o),g=!1
else{for(;u>1;)s.sqrTo(o,y),s.sqrTo(y,o),u-=2
u>0?s.sqrTo(o,y):(d=o,o=y,y=d),s.mulTo(y,a[h],o)}for(;p>=0&&!(e[p]&1<<i);)s.sqrTo(o,y),d=o,o=y,y=d,--i<0&&(i=this.DB-1,--p)}var m=s.revert(o)
return n(null,m),m},hi.ZERO=_i(0),hi.ONE=_i(1)
var Ci=/^[89a-f]/i,Oi=function(){function e(e){this.N=new fi("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",16),this.g=new fi("2",16),this.k=new fi(this.hexHash(""+this.padHex(this.N)+this.padHex(this.g)),16),this.smallAValue=this.generateRandomSmallA(),this.getLargeAValue(function(){}),this.infoBits=ni.hp.from("Caldera Derived Key","utf8"),this.poolName=e}var t=e.prototype
return t.getSmallAValue=function(){return this.smallAValue},t.getLargeAValue=function(e){var t=this
this.largeAValue?e(null,this.largeAValue):this.calculateA(this.smallAValue,function(n,r){n&&e(n,null),t.largeAValue=r,e(null,t.largeAValue)})},t.generateRandomSmallA=function(){var e=Ei(128).toString("hex")
return new fi(e,16)},t.generateRandomString=function(){return Ei(40).toString("base64")},t.getRandomPassword=function(){return this.randomPassword},t.getSaltDevices=function(){return this.SaltToHashDevices},t.getVerifierDevices=function(){return this.verifierDevices},t.generateHashDevice=function(e,t,n){var r=this
this.randomPassword=this.generateRandomString()
var i=""+e+t+":"+this.randomPassword,o=this.hash(i),s=Ei(16).toString("hex")
this.SaltToHashDevices=this.padHex(new fi(s,16)),this.g.modPow(new fi(this.hexHash(this.SaltToHashDevices+o),16),this.N,function(e,t){e&&n(e,null),r.verifierDevices=r.padHex(t),n(null,null)})},t.calculateA=function(e,t){var n=this
this.g.modPow(e,this.N,function(e,r){e&&t(e,null),r.mod(n.N).equals(fi.ZERO)&&t(new Error("Illegal paramater. A mod N cannot be 0."),null),t(null,r)})},t.calculateU=function(e,t){return this.UHexHash=this.hexHash(this.padHex(e)+this.padHex(t)),new fi(this.UHexHash,16)},t.hash=function(e){var t=e instanceof ni.hp?ii().lib.WordArray.create(e):e,n=si()(t).toString()
return new Array(64-n.length).join("0")+n},t.hexHash=function(e){return this.hash(ni.hp.from(e,"hex"))},t.computehkdf=function(e,t){var n=ii().lib.WordArray.create(ni.hp.concat([this.infoBits,ni.hp.from(String.fromCharCode(1),"utf8")])),r=e instanceof ni.hp?ii().lib.WordArray.create(e):e,i=t instanceof ni.hp?ii().lib.WordArray.create(t):t,o=ui()(r,i),s=ui()(n,o)
return ni.hp.from(s.toString(),"hex").slice(0,16)},t.getPasswordAuthenticationKey=function(e,t,n,r,i){var o=this
if(n.mod(this.N).equals(fi.ZERO))throw new Error("B cannot be zero.")
if(this.UValue=this.calculateU(this.largeAValue,n),this.UValue.equals(fi.ZERO))throw new Error("U cannot be zero.")
var s=""+this.poolName+e+":"+t,a=this.hash(s),u=new fi(this.hexHash(this.padHex(r)+a),16)
this.calculateS(u,n,function(e,t){e&&i(e,null)
var n=o.computehkdf(ni.hp.from(o.padHex(t),"hex"),ni.hp.from(o.padHex(o.UValue),"hex"))
i(null,n)})},t.calculateS=function(e,t,n){var r=this
this.g.modPow(e,this.N,function(i,o){i&&n(i,null),t.subtract(r.k.multiply(o)).modPow(r.smallAValue.add(r.UValue.multiply(e)),r.N,function(e,t){e&&n(e,null),n(null,t.mod(r.N))})})},t.getNewPasswordRequiredChallengeUserAttributePrefix=function(){return"userAttributes."},t.padHex=function(e){if(!(e instanceof fi))throw new Error("Not a BigInteger")
var t=e.compareTo(fi.ZERO)<0,n=e.abs().toString(16)
if(n=n.length%2!=0?"0"+n:n,n=Ci.test(n)?"00"+n:n,t){var r=n.split("").map(function(e){var t=15&~parseInt(e,16)
return"0123456789ABCDEF".charAt(t)}).join("");(n=new fi(r,16).add(fi.ONE).toString(16)).toUpperCase().startsWith("FF8")&&(n=n.substring(2))}return n},e}(),Ii=function(){function e(e){this.jwtToken=e||"",this.payload=this.decodePayload()}var t=e.prototype
return t.getJwtToken=function(){return this.jwtToken},t.getExpiration=function(){return this.payload.exp},t.getIssuedAt=function(){return this.payload.iat},t.decodePayload=function(){var e=this.jwtToken.split(".")[1]
try{return JSON.parse(ni.hp.from(e,"base64").toString("utf8"))}catch(e){return{}}},e}()
function Pi(e,t){return Pi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Pi(e,t)}var Ti=function(e){var t,n
function r(t){var n=(void 0===t?{}:t).AccessToken
return e.call(this,n||"")||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Pi(t,n),r}(Ii)
function ki(e,t){return ki=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ki(e,t)}var xi=function(e){var t,n
function r(t){var n=(void 0===t?{}:t).IdToken
return e.call(this,n||"")||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,ki(t,n),r}(Ii),Mi=function(){function e(e){var t=(void 0===e?{}:e).RefreshToken
this.token=t||""}return e.prototype.getToken=function(){return this.token},e}(),Ui=n(8524),Ri=n.n(Ui),Di=function(){function e(e){var t=void 0===e?{}:e,n=t.IdToken,r=t.RefreshToken,i=t.AccessToken,o=t.ClockDrift
if(null==i||null==n)throw new Error("Id token and Access Token must be present.")
this.idToken=n,this.refreshToken=r,this.accessToken=i,this.clockDrift=void 0===o?this.calculateClockDrift():o}var t=e.prototype
return t.getIdToken=function(){return this.idToken},t.getRefreshToken=function(){return this.refreshToken},t.getAccessToken=function(){return this.accessToken},t.getClockDrift=function(){return this.clockDrift},t.calculateClockDrift=function(){return Math.floor(new Date/1e3)-Math.min(this.accessToken.getIssuedAt(),this.idToken.getIssuedAt())},t.isValid=function(){var e=Math.floor(new Date/1e3)-this.clockDrift
return e<this.accessToken.getExpiration()&&e<this.idToken.getExpiration()},e}(),ji=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ni=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Li=function(){function e(){}return e.prototype.getNowString=function(){var e=new Date,t=Ni[e.getUTCDay()],n=ji[e.getUTCMonth()],r=e.getUTCDate(),i=e.getUTCHours()
i<10&&(i="0"+i)
var o=e.getUTCMinutes()
o<10&&(o="0"+o)
var s=e.getUTCSeconds()
return s<10&&(s="0"+s),t+" "+n+" "+r+" "+i+":"+o+":"+s+" UTC "+e.getUTCFullYear()},e}(),Fi=function(){function e(e){var t=void 0===e?{}:e,n=t.Name,r=t.Value
this.Name=n||"",this.Value=r||""}var t=e.prototype
return t.getValue=function(){return this.Value},t.setValue=function(e){return this.Value=e,this},t.getName=function(){return this.Name},t.setName=function(e){return this.Name=e,this},t.toString=function(){return JSON.stringify(this)},t.toJSON=function(){return{Name:this.Name,Value:this.Value}},e}(),Bi={},Hi=function(){function e(){}return e.setItem=function(e,t){return Bi[e]=t,Bi[e]},e.getItem=function(e){return Object.prototype.hasOwnProperty.call(Bi,e)?Bi[e]:void 0},e.removeItem=function(e){return delete Bi[e]},e.clear=function(){return Bi={}},e}(),qi=function(){function e(){try{this.storageWindow=window.localStorage,this.storageWindow.setItem("aws.cognito.test-ls",1),this.storageWindow.removeItem("aws.cognito.test-ls")}catch(e){this.storageWindow=Hi}}return e.prototype.getStorage=function(){return this.storageWindow},e}(),Vi="undefined"!=typeof navigator?navigator.userAgent:"nodejs",Ki=function(){function e(e){if(null==e||null==e.Username||null==e.Pool)throw new Error("Username and Pool information are required.")
this.username=e.Username||"",this.pool=e.Pool,this.Session=null,this.client=e.Pool.client,this.signInUserSession=null,this.authenticationFlowType="USER_SRP_AUTH",this.storage=e.Storage||(new qi).getStorage(),this.keyPrefix="CognitoIdentityServiceProvider."+this.pool.getClientId(),this.userDataKey=this.keyPrefix+"."+this.username+".userData"}var t=e.prototype
return t.setSignInUserSession=function(e){this.clearCachedUserData(),this.signInUserSession=e,this.cacheTokens()},t.getSignInUserSession=function(){return this.signInUserSession},t.getUsername=function(){return this.username},t.getAuthenticationFlowType=function(){return this.authenticationFlowType},t.setAuthenticationFlowType=function(e){this.authenticationFlowType=e},t.initiateAuth=function(e,t){var n=this,r=e.getAuthParameters()
r.USERNAME=this.username
var i=0!==Object.keys(e.getValidationData()).length?e.getValidationData():e.getClientMetadata(),o={AuthFlow:"CUSTOM_AUTH",ClientId:this.pool.getClientId(),AuthParameters:r,ClientMetadata:i}
this.getUserContextData()&&(o.UserContextData=this.getUserContextData()),this.client.request("InitiateAuth",o,function(e,r){if(e)return t.onFailure(e)
var i=r.ChallengeName,o=r.ChallengeParameters
return"CUSTOM_CHALLENGE"===i?(n.Session=r.Session,t.customChallenge(o)):(n.signInUserSession=n.getCognitoUserSession(r.AuthenticationResult),n.cacheTokens(),t.onSuccess(n.signInUserSession))})},t.authenticateUser=function(e,t){return"USER_PASSWORD_AUTH"===this.authenticationFlowType?this.authenticateUserPlainUsernamePassword(e,t):"USER_SRP_AUTH"===this.authenticationFlowType||"CUSTOM_AUTH"===this.authenticationFlowType?this.authenticateUserDefaultAuth(e,t):t.onFailure(new Error("Authentication flow type is invalid."))},t.authenticateUserDefaultAuth=function(e,t){var n,r,i=this,o=new Oi(this.pool.getUserPoolId().split("_")[1]),s=new Li,a={}
null!=this.deviceKey&&(a.DEVICE_KEY=this.deviceKey),a.USERNAME=this.username,o.getLargeAValue(function(u,c){u&&t.onFailure(u),a.SRP_A=c.toString(16),"CUSTOM_AUTH"===i.authenticationFlowType&&(a.CHALLENGE_NAME="SRP_A")
var l=0!==Object.keys(e.getValidationData()).length?e.getValidationData():e.getClientMetadata(),f={AuthFlow:i.authenticationFlowType,ClientId:i.pool.getClientId(),AuthParameters:a,ClientMetadata:l}
i.getUserContextData(i.username)&&(f.UserContextData=i.getUserContextData(i.username)),i.client.request("InitiateAuth",f,function(a,u){if(a)return t.onFailure(a)
var c=u.ChallengeParameters
i.username=c.USER_ID_FOR_SRP,i.userDataKey=i.keyPrefix+"."+i.username+".userData",n=new fi(c.SRP_B,16),r=new fi(c.SALT,16),i.getCachedDeviceKeyAndPassword(),o.getPasswordAuthenticationKey(i.username,e.getPassword(),n,r,function(e,n){e&&t.onFailure(e)
var r=s.getNowString(),a=ii().lib.WordArray.create(ni.hp.concat([ni.hp.from(i.pool.getUserPoolId().split("_")[1],"utf8"),ni.hp.from(i.username,"utf8"),ni.hp.from(c.SECRET_BLOCK,"base64"),ni.hp.from(r,"utf8")])),f=ii().lib.WordArray.create(n),h=Ri().stringify(ui()(a,f)),d={}
d.USERNAME=i.username,d.PASSWORD_CLAIM_SECRET_BLOCK=c.SECRET_BLOCK,d.TIMESTAMP=r,d.PASSWORD_CLAIM_SIGNATURE=h,null!=i.deviceKey&&(d.DEVICE_KEY=i.deviceKey)
var p={ChallengeName:"PASSWORD_VERIFIER",ClientId:i.pool.getClientId(),ChallengeResponses:d,Session:u.Session,ClientMetadata:l}
i.getUserContextData()&&(p.UserContextData=i.getUserContextData()),function e(t,n){return i.client.request("RespondToAuthChallenge",t,function(r,o){return r&&"ResourceNotFoundException"===r.code&&-1!==r.message.toLowerCase().indexOf("device")?(d.DEVICE_KEY=null,i.deviceKey=null,i.randomPassword=null,i.deviceGroupKey=null,i.clearCachedDeviceKeyAndPassword(),e(t,n)):n(r,o)})}(p,function(e,n){return e?t.onFailure(e):i.authenticateUserInternal(n,o,t)})})})})},t.authenticateUserPlainUsernamePassword=function(e,t){var n=this,r={}
if(r.USERNAME=this.username,r.PASSWORD=e.getPassword(),r.PASSWORD){var i=new Oi(this.pool.getUserPoolId().split("_")[1])
this.getCachedDeviceKeyAndPassword(),null!=this.deviceKey&&(r.DEVICE_KEY=this.deviceKey)
var o=0!==Object.keys(e.getValidationData()).length?e.getValidationData():e.getClientMetadata(),s={AuthFlow:"USER_PASSWORD_AUTH",ClientId:this.pool.getClientId(),AuthParameters:r,ClientMetadata:o}
this.getUserContextData(this.username)&&(s.UserContextData=this.getUserContextData(this.username)),this.client.request("InitiateAuth",s,function(e,r){return e?t.onFailure(e):n.authenticateUserInternal(r,i,t)})}else t.onFailure(new Error("PASSWORD parameter is required"))},t.authenticateUserInternal=function(e,t,n){var r=this,i=e.ChallengeName,o=e.ChallengeParameters
if("SMS_MFA"===i)return this.Session=e.Session,n.mfaRequired(i,o)
if("SELECT_MFA_TYPE"===i)return this.Session=e.Session,n.selectMFAType(i,o)
if("MFA_SETUP"===i)return this.Session=e.Session,n.mfaSetup(i,o)
if("SOFTWARE_TOKEN_MFA"===i)return this.Session=e.Session,n.totpRequired(i,o)
if("CUSTOM_CHALLENGE"===i)return this.Session=e.Session,n.customChallenge(o)
if("NEW_PASSWORD_REQUIRED"===i){this.Session=e.Session
var s=null,a=null,u=[],c=t.getNewPasswordRequiredChallengeUserAttributePrefix()
if(o&&(s=JSON.parse(e.ChallengeParameters.userAttributes),a=JSON.parse(e.ChallengeParameters.requiredAttributes)),a)for(var l=0;l<a.length;l++)u[l]=a[l].substr(c.length)
return n.newPasswordRequired(s,u)}if("DEVICE_SRP_AUTH"!==i){this.signInUserSession=this.getCognitoUserSession(e.AuthenticationResult),this.challengeName=i,this.cacheTokens()
var f=e.AuthenticationResult.NewDeviceMetadata
if(null==f)return n.onSuccess(this.signInUserSession)
t.generateHashDevice(e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,e.AuthenticationResult.NewDeviceMetadata.DeviceKey,function(i){if(i)return n.onFailure(i)
var o={Salt:ni.hp.from(t.getSaltDevices(),"hex").toString("base64"),PasswordVerifier:ni.hp.from(t.getVerifierDevices(),"hex").toString("base64")}
r.verifierDevices=o.PasswordVerifier,r.deviceGroupKey=f.DeviceGroupKey,r.randomPassword=t.getRandomPassword(),r.client.request("ConfirmDevice",{DeviceKey:f.DeviceKey,AccessToken:r.signInUserSession.getAccessToken().getJwtToken(),DeviceSecretVerifierConfig:o,DeviceName:Vi},function(t,i){return t?n.onFailure(t):(r.deviceKey=e.AuthenticationResult.NewDeviceMetadata.DeviceKey,r.cacheDeviceKeyAndPassword(),!0===i.UserConfirmationNecessary?n.onSuccess(r.signInUserSession,i.UserConfirmationNecessary):n.onSuccess(r.signInUserSession))})})}else this.getDeviceResponse(n)},t.completeNewPasswordChallenge=function(e,t,n,r){var i=this
if(!e)return n.onFailure(new Error("New password is required."))
var o=new Oi(this.pool.getUserPoolId().split("_")[1]),s=o.getNewPasswordRequiredChallengeUserAttributePrefix(),a={}
t&&Object.keys(t).forEach(function(e){a[s+e]=t[e]}),a.NEW_PASSWORD=e,a.USERNAME=this.username
var u={ChallengeName:"NEW_PASSWORD_REQUIRED",ClientId:this.pool.getClientId(),ChallengeResponses:a,Session:this.Session,ClientMetadata:r}
this.getUserContextData()&&(u.UserContextData=this.getUserContextData()),this.client.request("RespondToAuthChallenge",u,function(e,t){return e?n.onFailure(e):i.authenticateUserInternal(t,o,n)})},t.getDeviceResponse=function(e,t){var n=this,r=new Oi(this.deviceGroupKey),i=new Li,o={}
o.USERNAME=this.username,o.DEVICE_KEY=this.deviceKey,r.getLargeAValue(function(s,a){s&&e.onFailure(s),o.SRP_A=a.toString(16)
var u={ChallengeName:"DEVICE_SRP_AUTH",ClientId:n.pool.getClientId(),ChallengeResponses:o,ClientMetadata:t}
n.getUserContextData()&&(u.UserContextData=n.getUserContextData()),n.client.request("RespondToAuthChallenge",u,function(t,o){if(t)return e.onFailure(t)
var s=o.ChallengeParameters,a=new fi(s.SRP_B,16),u=new fi(s.SALT,16)
r.getPasswordAuthenticationKey(n.deviceKey,n.randomPassword,a,u,function(t,r){if(t)return e.onFailure(t)
var a=i.getNowString(),u=ii().lib.WordArray.create(ni.hp.concat([ni.hp.from(n.deviceGroupKey,"utf8"),ni.hp.from(n.deviceKey,"utf8"),ni.hp.from(s.SECRET_BLOCK,"base64"),ni.hp.from(a,"utf8")])),c=ii().lib.WordArray.create(r),l=Ri().stringify(ui()(u,c)),f={}
f.USERNAME=n.username,f.PASSWORD_CLAIM_SECRET_BLOCK=s.SECRET_BLOCK,f.TIMESTAMP=a,f.PASSWORD_CLAIM_SIGNATURE=l,f.DEVICE_KEY=n.deviceKey
var h={ChallengeName:"DEVICE_PASSWORD_VERIFIER",ClientId:n.pool.getClientId(),ChallengeResponses:f,Session:o.Session}
n.getUserContextData()&&(h.UserContextData=n.getUserContextData()),n.client.request("RespondToAuthChallenge",h,function(t,r){return t?e.onFailure(t):(n.signInUserSession=n.getCognitoUserSession(r.AuthenticationResult),n.cacheTokens(),e.onSuccess(n.signInUserSession))})})})})},t.confirmRegistration=function(e,t,n,r){var i={ClientId:this.pool.getClientId(),ConfirmationCode:e,Username:this.username,ForceAliasCreation:t,ClientMetadata:r}
this.getUserContextData()&&(i.UserContextData=this.getUserContextData()),this.client.request("ConfirmSignUp",i,function(e){return e?n(e,null):n(null,"SUCCESS")})},t.sendCustomChallengeAnswer=function(e,t,n){var r=this,i={}
i.USERNAME=this.username,i.ANSWER=e
var o=new Oi(this.pool.getUserPoolId().split("_")[1])
this.getCachedDeviceKeyAndPassword(),null!=this.deviceKey&&(i.DEVICE_KEY=this.deviceKey)
var s={ChallengeName:"CUSTOM_CHALLENGE",ChallengeResponses:i,ClientId:this.pool.getClientId(),Session:this.Session,ClientMetadata:n}
this.getUserContextData()&&(s.UserContextData=this.getUserContextData()),this.client.request("RespondToAuthChallenge",s,function(e,n){return e?t.onFailure(e):r.authenticateUserInternal(n,o,t)})},t.sendMFACode=function(e,t,n,r){var i=this,o={}
o.USERNAME=this.username,o.SMS_MFA_CODE=e
var s=n||"SMS_MFA"
"SOFTWARE_TOKEN_MFA"===s&&(o.SOFTWARE_TOKEN_MFA_CODE=e),null!=this.deviceKey&&(o.DEVICE_KEY=this.deviceKey)
var a={ChallengeName:s,ChallengeResponses:o,ClientId:this.pool.getClientId(),Session:this.Session,ClientMetadata:r}
this.getUserContextData()&&(a.UserContextData=this.getUserContextData()),this.client.request("RespondToAuthChallenge",a,function(e,n){if(e)return t.onFailure(e)
if("DEVICE_SRP_AUTH"!==n.ChallengeName){if(i.signInUserSession=i.getCognitoUserSession(n.AuthenticationResult),i.cacheTokens(),null==n.AuthenticationResult.NewDeviceMetadata)return t.onSuccess(i.signInUserSession)
var r=new Oi(i.pool.getUserPoolId().split("_")[1])
r.generateHashDevice(n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,n.AuthenticationResult.NewDeviceMetadata.DeviceKey,function(e){if(e)return t.onFailure(e)
var o={Salt:ni.hp.from(r.getSaltDevices(),"hex").toString("base64"),PasswordVerifier:ni.hp.from(r.getVerifierDevices(),"hex").toString("base64")}
i.verifierDevices=o.PasswordVerifier,i.deviceGroupKey=n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,i.randomPassword=r.getRandomPassword(),i.client.request("ConfirmDevice",{DeviceKey:n.AuthenticationResult.NewDeviceMetadata.DeviceKey,AccessToken:i.signInUserSession.getAccessToken().getJwtToken(),DeviceSecretVerifierConfig:o,DeviceName:Vi},function(e,r){return e?t.onFailure(e):(i.deviceKey=n.AuthenticationResult.NewDeviceMetadata.DeviceKey,i.cacheDeviceKeyAndPassword(),!0===r.UserConfirmationNecessary?t.onSuccess(i.signInUserSession,r.UserConfirmationNecessary):t.onSuccess(i.signInUserSession))})})}else i.getDeviceResponse(t)})},t.changePassword=function(e,t,n,r){if(null==this.signInUserSession||!this.signInUserSession.isValid())return n(new Error("User is not authenticated"),null)
this.client.request("ChangePassword",{PreviousPassword:e,ProposedPassword:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),ClientMetadata:r},function(e){return e?n(e,null):n(null,"SUCCESS")})},t.enableMFA=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null)
var t=[]
t.push({DeliveryMedium:"SMS",AttributeName:"phone_number"}),this.client.request("SetUserSettings",{MFAOptions:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t){return t?e(t,null):e(null,"SUCCESS")})},t.setUserMfaPreference=function(e,t,n){if(null==this.signInUserSession||!this.signInUserSession.isValid())return n(new Error("User is not authenticated"),null)
this.client.request("SetUserMFAPreference",{SMSMfaSettings:e,SoftwareTokenMfaSettings:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?n(e,null):n(null,"SUCCESS")})},t.disableMFA=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null)
this.client.request("SetUserSettings",{MFAOptions:[],AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t){return t?e(t,null):e(null,"SUCCESS")})},t.deleteUser=function(e,t){var n=this
if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null)
this.client.request("DeleteUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),ClientMetadata:t},function(t){return t?e(t,null):(n.clearCachedUser(),e(null,"SUCCESS"))})},t.updateAttributes=function(e,t,n){var r=this
if(null==this.signInUserSession||!this.signInUserSession.isValid())return t(new Error("User is not authenticated"),null)
this.client.request("UpdateUserAttributes",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),UserAttributes:e,ClientMetadata:n},function(e){return e?t(e,null):r.getUserData(function(){return t(null,"SUCCESS")},{bypassCache:!0})})},t.getUserAttributes=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null)
this.client.request("GetUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t,n){if(t)return e(t,null)
for(var r=[],i=0;i<n.UserAttributes.length;i++){var o={Name:n.UserAttributes[i].Name,Value:n.UserAttributes[i].Value},s=new Fi(o)
r.push(s)}return e(null,r)})},t.getMFAOptions=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null)
this.client.request("GetUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t,n){return t?e(t,null):e(null,n.MFAOptions)})},t.createGetUserRequest=function(){return this.client.promisifyRequest("GetUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()})},t.refreshSessionIfPossible=function(e){var t=this
return void 0===e&&(e={}),new Promise(function(n){var r=t.signInUserSession.getRefreshToken()
r&&r.getToken()?t.refreshSession(r,n,e.clientMetadata):n()})},t.getUserData=function(e,t){var n=this
if(null==this.signInUserSession||!this.signInUserSession.isValid())return this.clearCachedUserData(),e(new Error("User is not authenticated"),null)
var r=this.getUserDataFromCache()
if(r)if(this.isFetchUserDataAndTokenRequired(t))this.fetchUserData().then(function(e){return n.refreshSessionIfPossible(t).then(function(){return e})}).then(function(t){return e(null,t)}).catch(e)
else try{return void e(null,JSON.parse(r))}catch(t){return this.clearCachedUserData(),void e(t,null)}else this.fetchUserData().then(function(t){e(null,t)}).catch(e)},t.getUserDataFromCache=function(){return this.storage.getItem(this.userDataKey)},t.isFetchUserDataAndTokenRequired=function(e){var t=(e||{}).bypassCache
return void 0!==t&&t},t.fetchUserData=function(){var e=this
return this.createGetUserRequest().then(function(t){return e.cacheUserData(t),t})},t.deleteAttributes=function(e,t){if(null==this.signInUserSession||!this.signInUserSession.isValid())return t(new Error("User is not authenticated"),null)
this.client.request("DeleteUserAttributes",{UserAttributeNames:e,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?t(e,null):t(null,"SUCCESS")})},t.resendConfirmationCode=function(e,t){var n={ClientId:this.pool.getClientId(),Username:this.username,ClientMetadata:t}
this.client.request("ResendConfirmationCode",n,function(t,n){return t?e(t,null):e(null,n)})},t.getSession=function(e,t){if(void 0===t&&(t={}),null==this.username)return e(new Error("Username is null. Cannot retrieve a new session"),null)
if(null!=this.signInUserSession&&this.signInUserSession.isValid())return e(null,this.signInUserSession)
var n="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,r=n+".idToken",i=n+".accessToken",o=n+".refreshToken",s=n+".clockDrift"
if(this.storage.getItem(r)){var a=new xi({IdToken:this.storage.getItem(r)}),u=new Ti({AccessToken:this.storage.getItem(i)}),c=new Mi({RefreshToken:this.storage.getItem(o)}),l=parseInt(this.storage.getItem(s),0)||0,f=new Di({IdToken:a,AccessToken:u,RefreshToken:c,ClockDrift:l})
if(f.isValid())return this.signInUserSession=f,e(null,this.signInUserSession)
if(!c.getToken())return e(new Error("Cannot retrieve a new session. Please authenticate."),null)
this.refreshSession(c,e,t.clientMetadata)}else e(new Error("Local storage is missing an ID Token, Please authenticate"),null)},t.refreshSession=function(e,t,n){var r=this,i=this.pool.wrapRefreshSessionCallback?this.pool.wrapRefreshSessionCallback(t):t,o={}
o.REFRESH_TOKEN=e.getToken()
var s="CognitoIdentityServiceProvider."+this.pool.getClientId(),a=s+".LastAuthUser"
if(this.storage.getItem(a)){this.username=this.storage.getItem(a)
var u=s+"."+this.username+".deviceKey"
this.deviceKey=this.storage.getItem(u),o.DEVICE_KEY=this.deviceKey}var c={ClientId:this.pool.getClientId(),AuthFlow:"REFRESH_TOKEN_AUTH",AuthParameters:o,ClientMetadata:n}
this.getUserContextData()&&(c.UserContextData=this.getUserContextData()),this.client.request("InitiateAuth",c,function(t,n){if(t)return"NotAuthorizedException"===t.code&&r.clearCachedUser(),i(t,null)
if(n){var o=n.AuthenticationResult
return Object.prototype.hasOwnProperty.call(o,"RefreshToken")||(o.RefreshToken=e.getToken()),r.signInUserSession=r.getCognitoUserSession(o),r.cacheTokens(),i(null,r.signInUserSession)}})},t.cacheTokens=function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId(),t=e+"."+this.username+".idToken",n=e+"."+this.username+".accessToken",r=e+"."+this.username+".refreshToken",i=e+"."+this.username+".clockDrift",o=e+".LastAuthUser"
this.storage.setItem(t,this.signInUserSession.getIdToken().getJwtToken()),this.storage.setItem(n,this.signInUserSession.getAccessToken().getJwtToken()),this.storage.setItem(r,this.signInUserSession.getRefreshToken().getToken()),this.storage.setItem(i,""+this.signInUserSession.getClockDrift()),this.storage.setItem(o,this.username)},t.cacheUserData=function(e){this.storage.setItem(this.userDataKey,JSON.stringify(e))},t.clearCachedUserData=function(){this.storage.removeItem(this.userDataKey)},t.clearCachedUser=function(){this.clearCachedTokens(),this.clearCachedUserData()},t.cacheDeviceKeyAndPassword=function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",r=e+".deviceGroupKey"
this.storage.setItem(t,this.deviceKey),this.storage.setItem(n,this.randomPassword),this.storage.setItem(r,this.deviceGroupKey)},t.getCachedDeviceKeyAndPassword=function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",r=e+".deviceGroupKey"
this.storage.getItem(t)&&(this.deviceKey=this.storage.getItem(t),this.randomPassword=this.storage.getItem(n),this.deviceGroupKey=this.storage.getItem(r))},t.clearCachedDeviceKeyAndPassword=function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",r=e+".deviceGroupKey"
this.storage.removeItem(t),this.storage.removeItem(n),this.storage.removeItem(r)},t.clearCachedTokens=function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId(),t=e+"."+this.username+".idToken",n=e+"."+this.username+".accessToken",r=e+"."+this.username+".refreshToken",i=e+".LastAuthUser",o=e+"."+this.username+".clockDrift"
this.storage.removeItem(t),this.storage.removeItem(n),this.storage.removeItem(r),this.storage.removeItem(i),this.storage.removeItem(o)},t.getCognitoUserSession=function(e){var t=new xi(e),n=new Ti(e),r=new Mi(e)
return new Di({IdToken:t,AccessToken:n,RefreshToken:r})},t.forgotPassword=function(e,t){var n={ClientId:this.pool.getClientId(),Username:this.username,ClientMetadata:t}
this.getUserContextData()&&(n.UserContextData=this.getUserContextData()),this.client.request("ForgotPassword",n,function(t,n){return t?e.onFailure(t):"function"==typeof e.inputVerificationCode?e.inputVerificationCode(n):e.onSuccess(n)})},t.confirmPassword=function(e,t,n,r){var i={ClientId:this.pool.getClientId(),Username:this.username,ConfirmationCode:e,Password:t,ClientMetadata:r}
this.getUserContextData()&&(i.UserContextData=this.getUserContextData()),this.client.request("ConfirmForgotPassword",i,function(e){return e?n.onFailure(e):n.onSuccess()})},t.getAttributeVerificationCode=function(e,t,n){if(null==this.signInUserSession||!this.signInUserSession.isValid())return t.onFailure(new Error("User is not authenticated"))
this.client.request("GetUserAttributeVerificationCode",{AttributeName:e,AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),ClientMetadata:n},function(e,n){return e?t.onFailure(e):"function"==typeof t.inputVerificationCode?t.inputVerificationCode(n):t.onSuccess()})},t.verifyAttribute=function(e,t,n){if(null==this.signInUserSession||!this.signInUserSession.isValid())return n.onFailure(new Error("User is not authenticated"))
this.client.request("VerifyUserAttribute",{AttributeName:e,Code:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?n.onFailure(e):n.onSuccess("SUCCESS")})},t.getDevice=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e.onFailure(new Error("User is not authenticated"))
this.client.request("GetDevice",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey},function(t,n){return t?e.onFailure(t):e.onSuccess(n)})},t.forgetSpecificDevice=function(e,t){if(null==this.signInUserSession||!this.signInUserSession.isValid())return t.onFailure(new Error("User is not authenticated"))
this.client.request("ForgetDevice",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:e},function(e){return e?t.onFailure(e):t.onSuccess("SUCCESS")})},t.forgetDevice=function(e){var t=this
this.forgetSpecificDevice(this.deviceKey,{onFailure:e.onFailure,onSuccess:function(n){return t.deviceKey=null,t.deviceGroupKey=null,t.randomPassword=null,t.clearCachedDeviceKeyAndPassword(),e.onSuccess(n)}})},t.setDeviceStatusRemembered=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e.onFailure(new Error("User is not authenticated"))
this.client.request("UpdateDeviceStatus",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey,DeviceRememberedStatus:"remembered"},function(t){return t?e.onFailure(t):e.onSuccess("SUCCESS")})},t.setDeviceStatusNotRemembered=function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e.onFailure(new Error("User is not authenticated"))
this.client.request("UpdateDeviceStatus",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey,DeviceRememberedStatus:"not_remembered"},function(t){return t?e.onFailure(t):e.onSuccess("SUCCESS")})},t.listDevices=function(e,t,n){if(null==this.signInUserSession||!this.signInUserSession.isValid())return n.onFailure(new Error("User is not authenticated"))
var r={AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),Limit:e}
t&&(r.PaginationToken=t),this.client.request("ListDevices",r,function(e,t){return e?n.onFailure(e):n.onSuccess(t)})},t.globalSignOut=function(e){var t=this
if(null==this.signInUserSession||!this.signInUserSession.isValid())return e.onFailure(new Error("User is not authenticated"))
this.client.request("GlobalSignOut",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(n){return n?e.onFailure(n):(t.clearCachedUser(),e.onSuccess("SUCCESS"))})},t.signOut=function(){this.signInUserSession=null,this.clearCachedUser()},t.sendMFASelectionAnswer=function(e,t){var n=this,r={}
r.USERNAME=this.username,r.ANSWER=e
var i={ChallengeName:"SELECT_MFA_TYPE",ChallengeResponses:r,ClientId:this.pool.getClientId(),Session:this.Session}
this.getUserContextData()&&(i.UserContextData=this.getUserContextData()),this.client.request("RespondToAuthChallenge",i,function(r,i){return r?t.onFailure(r):(n.Session=i.Session,"SMS_MFA"===e?t.mfaRequired(i.ChallengeName,i.ChallengeParameters):"SOFTWARE_TOKEN_MFA"===e?t.totpRequired(i.ChallengeName,i.ChallengeParameters):void 0)})},t.getUserContextData=function(){return this.pool.getUserContextData(this.username)},t.associateSoftwareToken=function(e){var t=this
null!=this.signInUserSession&&this.signInUserSession.isValid()?this.client.request("AssociateSoftwareToken",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t,n){return t?e.onFailure(t):e.associateSecretCode(n.SecretCode)}):this.client.request("AssociateSoftwareToken",{Session:this.Session},function(n,r){return n?e.onFailure(n):(t.Session=r.Session,e.associateSecretCode(r.SecretCode))})},t.verifySoftwareToken=function(e,t,n){var r=this
null!=this.signInUserSession&&this.signInUserSession.isValid()?this.client.request("VerifySoftwareToken",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),UserCode:e,FriendlyDeviceName:t},function(e,t){return e?n.onFailure(e):n.onSuccess(t)}):this.client.request("VerifySoftwareToken",{Session:this.Session,UserCode:e,FriendlyDeviceName:t},function(e,t){if(e)return n.onFailure(e)
r.Session=t.Session
var i={}
i.USERNAME=r.username
var o={ChallengeName:"MFA_SETUP",ClientId:r.pool.getClientId(),ChallengeResponses:i,Session:r.Session}
r.getUserContextData()&&(o.UserContextData=r.getUserContextData()),r.client.request("RespondToAuthChallenge",o,function(e,t){return e?n.onFailure(e):(r.signInUserSession=r.getCognitoUserSession(t.AuthenticationResult),r.cacheTokens(),n.onSuccess(r.signInUserSession))})})},e}()
function Wi(){}n(3614),Wi.prototype.userAgent="aws-amplify/0.1.x js"
var zi=function(e){e&&(Wi.prototype.userAgent&&!Wi.prototype.userAgent.includes(e)&&(Wi.prototype.userAgent=Wi.prototype.userAgent.concat(" ",e)),Wi.prototype.userAgent&&""!==Wi.prototype.userAgent||(Wi.prototype.userAgent=e))}
const Gi=Wi
function Yi(e){var t="function"==typeof Map?new Map:void 0
return Yi=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e
var n
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,r)}function r(){return $i(e,arguments,Ji(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Qi(r,e)},Yi(e)}function $i(e,t,n){return $i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null]
r.push.apply(r,t)
var i=new(Function.bind.apply(e,r))
return n&&Qi(i,n.prototype),i},$i.apply(null,arguments)}function Qi(e,t){return Qi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Qi(e,t)}function Ji(e){return Ji=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ji(e)}var Zi=function(e){var t,n
function r(t,n,r,i){var o
return(o=e.call(this,t)||this).code=n,o.name=r,o.statusCode=i,o}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Qi(t,n),r}(Yi(Error)),Xi=function(){function e(e,t,n){this.endpoint=t||"https://cognito-idp."+e+".amazonaws.com/"
var r=(n||{}).credentials
this.fetchOptions=r?{credentials:r}:{}}var t=e.prototype
return t.promisifyRequest=function(e,t){var n=this
return new Promise(function(r,i){n.request(e,t,function(e,t){e?i(new Zi(e.message,e.code,e.name,e.statusCode)):r(t)})})},t.request=function(e,t,n){var r,i={"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService."+e,"X-Amz-User-Agent":Gi.prototype.userAgent},o=Object.assign({},this.fetchOptions,{headers:i,method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify(t)})
fetch(this.endpoint,o).then(function(e){return r=e,e},function(e){if(e instanceof TypeError)throw new Error("Network error")
throw e}).then(function(e){return e.json().catch(function(){return{}})}).then(function(e){if(r.ok)return n(null,e)
var t=(e.__type||e.code).split("#").pop(),i={code:t,name:t,message:e.message||e.Message||null}
return n(i)}).catch(function(e){if(!(r&&r.headers&&r.headers.get("x-amzn-errortype"))){if(e instanceof Error&&"Network error"===e.message){var t={code:"NetworkError",name:e.name,message:e.message}
return n(t)}return n(e)}try{var i=r.headers.get("x-amzn-errortype").split(":")[0],o={code:i,name:i,statusCode:r.status,message:r.status?r.status.toString():null}
return n(o)}catch(t){return n(e)}})},e}(),eo=function(){function e(e,t){var n=e||{},r=n.UserPoolId,i=n.ClientId,o=n.endpoint,s=n.fetchOptions,a=n.AdvancedSecurityDataCollectionFlag
if(!r||!i)throw new Error("Both UserPoolId and ClientId are required.")
if(!/^[\w-]+_.+$/.test(r))throw new Error("Invalid UserPoolId format.")
var u=r.split("_")[0]
this.userPoolId=r,this.clientId=i,this.client=new Xi(u,o,s),this.advancedSecurityDataCollectionFlag=!1!==a,this.storage=e.Storage||(new qi).getStorage(),t&&(this.wrapRefreshSessionCallback=t)}var t=e.prototype
return t.getUserPoolId=function(){return this.userPoolId},t.getClientId=function(){return this.clientId},t.signUp=function(e,t,n,r,i,o){var s=this,a={ClientId:this.clientId,Username:e,Password:t,UserAttributes:n,ValidationData:r,ClientMetadata:o}
this.getUserContextData(e)&&(a.UserContextData=this.getUserContextData(e)),this.client.request("SignUp",a,function(t,n){if(t)return i(t,null)
var r={Username:e,Pool:s,Storage:s.storage},o={user:new Ki(r),userConfirmed:n.UserConfirmed,userSub:n.UserSub,codeDeliveryDetails:n.CodeDeliveryDetails}
return i(null,o)})},t.getCurrentUser=function(){var e="CognitoIdentityServiceProvider."+this.clientId+".LastAuthUser",t=this.storage.getItem(e)
if(t){var n={Username:t,Pool:this,Storage:this.storage}
return new Ki(n)}return null},t.getUserContextData=function(e){if("undefined"!=typeof AmazonCognitoAdvancedSecurityData){var t=AmazonCognitoAdvancedSecurityData
if(this.advancedSecurityDataCollectionFlag){var n=t.getData(e,this.userPoolId,this.clientId)
if(n)return{EncodedData:n}}return{}}},e}(),to=n(1729),no=function(){function e(e){if(!e.domain)throw new Error("The domain of cookieStorage can not be undefined.")
if(this.domain=e.domain,e.path?this.path=e.path:this.path="/",Object.prototype.hasOwnProperty.call(e,"expires")?this.expires=e.expires:this.expires=365,Object.prototype.hasOwnProperty.call(e,"secure")?this.secure=e.secure:this.secure=!0,Object.prototype.hasOwnProperty.call(e,"sameSite")){if(!["strict","lax","none"].includes(e.sameSite))throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".')
if("none"===e.sameSite&&!this.secure)throw new Error("sameSite = None requires the Secure attribute in latest browser versions.")
this.sameSite=e.sameSite}else this.sameSite=null}var t=e.prototype
return t.setItem=function(e,t){var n={path:this.path,expires:this.expires,domain:this.domain,secure:this.secure}
return this.sameSite&&(n.sameSite=this.sameSite),to.set(e,t,n),to.get(e)},t.getItem=function(e){return to.get(e)},t.removeItem=function(e){var t={path:this.path,expires:this.expires,domain:this.domain,secure:this.secure}
return this.sameSite&&(t.sameSite=this.sameSite),to.remove(e,t)},t.clear=function(){for(var e=to.get(),t=Object.keys(e).length,n=0;n<t;++n)this.removeItem(Object.keys(e)[n])
return{}},e}(),ro=n(9721),io=function(e){var t=window.open(e,"_self")
return t?Promise.resolve(t):Promise.reject()},oo=function(){return oo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},oo.apply(this,arguments)},so=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})},ao=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},uo=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},co="undefined"!=typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("amplify_default"):"@@amplify_default",lo=function(e,t,n){m.dispatch("auth",{event:e,data:t,message:n},"Auth",co)},fo=new l("OAuth"),ho=function(){function e(e){var t=e.config,n=e.cognitoClientId,r=e.scopes,i=void 0===r?[]:r
if(this._urlOpener=t.urlOpener||io,this._config=t,this._cognitoClientId=n,!this.isValidScopes(i))throw Error("scopes must be a String Array")
this._scopes=i}return e.prototype.isValidScopes=function(e){return Array.isArray(e)&&e.every(function(e){return"string"==typeof e})},e.prototype.oauthSignIn=function(e,t,n,i,o,s){void 0===e&&(e="code"),void 0===o&&(o=r.Cognito)
var a=this._generateState(32),u=s?a+"-"+s.split("").map(function(e){return e.charCodeAt(0).toString(16).padStart(2,"0")}).join(""):a
!function(e){window.sessionStorage.setItem("oauth_state",e)}(u)
var c,l=this._generateRandom(128)
c=l,window.sessionStorage.setItem("ouath_pkce_key",c)
var f=this._generateChallenge(l),h=this._scopes.join(" "),d=Object.entries(oo(oo({redirect_uri:n,response_type:e,client_id:i,identity_provider:o,scope:h,state:u},"code"===e?{code_challenge:f}:{}),"code"===e?{code_challenge_method:"S256"}:{})).map(function(e){var t=uo(e,2),n=t[0],r=t[1]
return encodeURIComponent(n)+"="+encodeURIComponent(r)}).join("&"),p="https://"+t+"/oauth2/authorize?"+d
fo.debug("Redirecting to "+p),this._urlOpener(p,n)},e.prototype._handleCodeFlow=function(e){return so(this,void 0,void 0,function(){var t,n,r,i,o,a,u,c,l,f,h,d,p,g
return ao(this,function(y){switch(y.label){case 0:return t=((0,ro.qg)(e).query||"").split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n,r=uo(t,2),i=r[0],o=r[1]
return oo(oo({},e),((n={})[i]=o,n))},{code:void 0}).code,n=(0,ro.qg)(e).pathname||"/",r=(0,ro.qg)(this._config.redirectSignIn).pathname||"/",t&&n===r?(i="https://"+this._config.domain+"/oauth2/token",lo("codeFlow",{},"Retrieving tokens from "+i),o=s(this._config)?this._cognitoClientId:this._config.clientID,a=s(this._config)?this._config.redirectSignIn:this._config.redirectUri,m=window.sessionStorage.getItem("ouath_pkce_key"),window.sessionStorage.removeItem("ouath_pkce_key"),c=oo({grant_type:"authorization_code",code:t,client_id:o,redirect_uri:a},(u=m)?{code_verifier:u}:{}),fo.debug("Calling token endpoint: "+i+" with",c),l=Object.entries(c).map(function(e){var t=uo(e,2),n=t[0],r=t[1]
return encodeURIComponent(n)+"="+encodeURIComponent(r)}).join("&"),[4,fetch(i,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:l})]):[2]
case 1:return[4,y.sent().json()]
case 2:if(f=y.sent(),h=f.access_token,d=f.refresh_token,p=f.id_token,g=f.error)throw new Error(g)
return[2,{accessToken:h,refreshToken:d,idToken:p}]}var m})})},e.prototype._handleImplicitFlow=function(e){return so(this,void 0,void 0,function(){var t,n,r
return ao(this,function(i){return t=((0,ro.qg)(e).hash||"#").substr(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n,r=uo(t,2),i=r[0],o=r[1]
return oo(oo({},e),((n={})[i]=o,n))},{id_token:void 0,access_token:void 0}),n=t.id_token,r=t.access_token,lo("implicitFlow",{},"Got tokens from "+e),fo.debug("Retrieving implicit tokens from "+e+" with"),[2,{accessToken:r,idToken:n,refreshToken:null}]})})},e.prototype.handleAuthResponse=function(e){return so(this,void 0,void 0,function(){var t,n,r,i,o,s,a
return ao(this,function(u){switch(u.label){case 0:if(u.trys.push([0,5,,6]),t=e?oo(oo({},((0,ro.qg)(e).hash||"#").substr(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=uo(t,2),r=n[0],i=n[1]
return e[r]=i,e},{})),((0,ro.qg)(e).query||"").split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=uo(t,2),r=n[0],i=n[1]
return e[r]=i,e},{})):{},n=t.error,r=t.error_description,n)throw new Error(r)
return i=this._validateState(t),fo.debug("Starting "+this._config.responseType+" flow with "+e),"code"!==this._config.responseType?[3,2]:(o=[{}],[4,this._handleCodeFlow(e)])
case 1:return[2,oo.apply(void 0,[oo.apply(void 0,o.concat([u.sent()])),{state:i}])]
case 2:return s=[{}],[4,this._handleImplicitFlow(e)]
case 3:return[2,oo.apply(void 0,[oo.apply(void 0,s.concat([u.sent()])),{state:i}])]
case 4:return[3,6]
case 5:throw a=u.sent(),fo.error("Error handling auth response.",a),a
case 6:return[2]}})})},e.prototype._validateState=function(e){if(e){var t,n=(t=window.sessionStorage.getItem("oauth_state"),window.sessionStorage.removeItem("oauth_state"),t),r=e.state
if(n&&n!==r)throw new Error("Invalid state in OAuth flow")
return r}},e.prototype.signOut=function(){return so(this,void 0,void 0,function(){var e,t,n
return ao(this,function(r){return e="https://"+this._config.domain+"/logout?",t=s(this._config)?this._cognitoClientId:this._config.oauth.clientID,n=s(this._config)?this._config.redirectSignOut:this._config.returnTo,e+=Object.entries({client_id:t,logout_uri:encodeURIComponent(n)}).map(function(e){var t=uo(e,2)
return t[0]+"="+t[1]}).join("&"),lo("oAuthSignOut",{oAuth:"signOut"},"Signing out from "+e),fo.debug("Signing out from "+e),[2,this._urlOpener(e)]})})},e.prototype._generateState=function(e){for(var t="",n=e;n>0;--n)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())]
return t},e.prototype._generateChallenge=function(e){return this._base64URL(si()(e))},e.prototype._base64URL=function(e){return e.toString(Ri()).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},e.prototype._generateRandom=function(e){var t=new Uint8Array(e)
if("undefined"!=typeof window&&window.crypto)window.crypto.getRandomValues(t)
else for(var n=0;n<e;n+=1)t[n]=66*Math.random()|0
return this._bufferToString(t)},e.prototype._bufferToString=function(e){for(var t=[],n=0;n<e.byteLength;n+=1){var r=e[n]%62
t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[r])}return t.join("")},e}()
const po=ho
var go
!function(e){e.DEFAULT_MSG="Authentication Error",e.EMPTY_USERNAME="Username cannot be empty",e.INVALID_USERNAME="The username should either be a string or one of the sign in types",e.EMPTY_PASSWORD="Password cannot be empty",e.EMPTY_CODE="Confirmation code cannot be empty",e.SIGN_UP_ERROR="Error creating account",e.NO_MFA="No valid MFA method provided",e.INVALID_MFA="Invalid MFA type",e.EMPTY_CHALLENGE="Challenge response cannot be empty",e.NO_USER_SESSION="Failed to get the session because the user is empty"}(go||(go={}))
var yo=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)}
return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),mo=new l("AuthError"),vo=function(e){function t(n){var r=this,i=wo[n],o=i.message,s=i.log
return(r=e.call(this,o)||this).constructor=t,Object.setPrototypeOf(r,t.prototype),r.name="AuthError",r.log=s||o,mo.error(r.log),r}return yo(t,e),t}(Error),bo=function(e){function t(n){var r=e.call(this,n)||this
return r.constructor=t,Object.setPrototypeOf(r,t.prototype),r.name="NoUserPoolError",r}return yo(t,e),t}(vo),wo={noConfig:{message:go.DEFAULT_MSG,log:"\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        "},missingAuthConfig:{message:go.DEFAULT_MSG,log:"\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        "},emptyUsername:{message:go.EMPTY_USERNAME},invalidUsername:{message:go.INVALID_USERNAME},emptyPassword:{message:go.EMPTY_PASSWORD},emptyCode:{message:go.EMPTY_CODE},signUpError:{message:go.SIGN_UP_ERROR,log:"The first parameter should either be non-null string or object"},noMFA:{message:go.NO_MFA},invalidMFA:{message:go.INVALID_MFA},emptyChallengeResponse:{message:go.EMPTY_CHALLENGE},noUserSession:{message:go.NO_USER_SESSION},default:{message:go.DEFAULT_MSG}},_o=function(){return _o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},_o.apply(this,arguments)},So=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})},Ao=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},Eo=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},Co=new l("AuthClass"),Oo="aws.cognito.signin.user.admin",Io="undefined"!=typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("amplify_default"):"@@amplify_default",Po=function(e,t,n){m.dispatch("auth",{event:e,data:t,message:n},"Auth",Io)},To=function(){function e(e){var t=this
this.userPool=null,this.user=null,this.oAuthFlowInProgress=!1,this.Credentials=Vr,this.wrapRefreshSessionCallback=function(e){return function(t,n){return n?Po("tokenRefresh",void 0,"New token retrieved"):Po("tokenRefresh_failure",t,"Failed to retrieve new token"),e(t,n)}},this.configure(e),this.currentCredentials=this.currentCredentials.bind(this),this.currentUserCredentials=this.currentUserCredentials.bind(this),m.listen("auth",function(e){switch(e.payload.event){case"signIn":t._storage.setItem("amplify-signin-with-hostedUI","false")
break
case"signOut":t._storage.removeItem("amplify-signin-with-hostedUI")
break
case"cognitoHostedUI":t._storage.setItem("amplify-signin-with-hostedUI","true")}})}return e.prototype.getModuleName=function(){return"Auth"},e.prototype.configure=function(e){var t=this
if(!e)return this._config||{}
Co.debug("configure Auth")
var n=Object.assign({},this._config,zr.parseMobilehubConfig(e).Auth,e)
this._config=n
var r=this._config,i=r.userPoolId,o=r.userPoolWebClientId,a=r.cookieStorage,u=r.oauth,c=r.region,l=r.identityPoolId,f=r.mandatorySignIn,h=r.refreshHandlers,d=r.identityPoolRegion,p=r.clientMetadata,g=r.endpoint
if(this._config.storage){if(!this._isValidAuthStorage(this._config.storage))throw Co.error("The storage in the Auth config is not valid!"),new Error("Empty storage object")
this._storage=this._config.storage}else this._storage=a?new no(a):e.ssr?new ei:(new w).getStorage()
if(this._storageSync=Promise.resolve(),"function"==typeof this._storage.sync&&(this._storageSync=this._storage.sync()),i){var y={UserPoolId:i,ClientId:o,endpoint:g}
y.Storage=this._storage,this.userPool=new eo(y,this.wrapRefreshSessionCallback)}this.Credentials.configure({mandatorySignIn:f,region:d||c,userPoolId:i,identityPoolId:l,refreshHandlers:h,storage:this._storage})
var m=u?s(this._config.oauth)?u:u.awsCognito:void 0
if(m){var v=Object.assign({cognitoClientId:o,UserPoolId:i,domain:m.domain,scopes:m.scope,redirectSignIn:m.redirectSignIn,redirectSignOut:m.redirectSignOut,responseType:m.responseType,Storage:this._storage,urlOpener:m.urlOpener,clientMetadata:p},m.options)
this._oAuthHandler=new po({scopes:v.scopes,config:v,cognitoClientId:v.cognitoClientId})
var b={}
!function(){if(R.browserOrNode().isBrowser&&window.location)!function(){var e={url:window.location.href}.url
b[e]||(b[e]=!0,t._handleAuthResponse(e))}()
else if(!R.browserOrNode().isNode)throw new Error("Not supported")}()}return Po("configured",null,"The Auth category has been configured successfully"),this._config},e.prototype.signUp=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
if(!this.userPool)return this.rejectNoUserPool()
var o,s=null,a=null,u=[],c=null
if(e&&"string"==typeof e){s=e,a=n?n[0]:null
var l=n?n[1]:null,f=n?n[2]:null
l&&u.push(new Fi({Name:"email",Value:l})),f&&u.push(new Fi({Name:"phone_number",Value:f}))}else{if(!e||"object"!=typeof e)return this.rejectAuthError(i.SignUpError)
s=e.username,a=e.password,e&&e.clientMetadata?o=e.clientMetadata:this._config.clientMetadata&&(o=this._config.clientMetadata)
var h=e.attributes
h&&Object.keys(h).map(function(e){u.push(new Fi({Name:e,Value:h[e]}))})
var d=e.validationData
d&&(c=[],Object.keys(d).map(function(e){c.push(new Fi({Name:e,Value:d[e]}))}))}return s?a?(Co.debug("signUp attrs:",u),Co.debug("signUp validation data:",c),new Promise(function(e,n){t.userPool.signUp(s,a,u,c,function(t,r){t?(Po("signUp_failure",t,s+" failed to signup"),n(t)):(Po("signUp",r,s+" has signed up successfully"),e(r))},o)})):this.rejectAuthError(i.EmptyPassword):this.rejectAuthError(i.EmptyUsername)},e.prototype.confirmSignUp=function(e,t,n){if(!this.userPool)return this.rejectNoUserPool()
if(!e)return this.rejectAuthError(i.EmptyUsername)
if(!t)return this.rejectAuthError(i.EmptyCode)
var r,o=this.createCognitoUser(e),s=!n||"boolean"!=typeof n.forceAliasCreation||n.forceAliasCreation
return n&&n.clientMetadata?r=n.clientMetadata:this._config.clientMetadata&&(r=this._config.clientMetadata),new Promise(function(e,n){o.confirmRegistration(t,s,function(t,r){t?n(t):e(r)},r)})},e.prototype.resendSignUp=function(e,t){if(void 0===t&&(t=this._config.clientMetadata),!this.userPool)return this.rejectNoUserPool()
if(!e)return this.rejectAuthError(i.EmptyUsername)
var n=this.createCognitoUser(e)
return new Promise(function(e,r){n.resendConfirmationCode(function(t,n){t?r(t):e(n)},t)})},e.prototype.signIn=function(e,t,n){if(void 0===n&&(n=this._config.clientMetadata),!this.userPool)return this.rejectNoUserPool()
var r=null,o=null,s={}
if("string"==typeof e)r=e,o=t
else{if(!e.username)return this.rejectAuthError(i.InvalidUsername)
void 0!==t&&Co.warn("The password should be defined under the first parameter object!"),r=e.username,o=e.password,s=e.validationData}if(!r)return this.rejectAuthError(i.EmptyUsername)
var a=new ti({Username:r,Password:o,ValidationData:s,ClientMetadata:n})
return o?this.signInWithPassword(a):this.signInWithoutPassword(a)},e.prototype.authCallbacks=function(e,t,n){var r=this,i=this
return{onSuccess:function(o){return So(r,void 0,void 0,function(){var r,s,a,u
return Ao(this,function(c){switch(c.label){case 0:Co.debug(o),delete e.challengeName,delete e.challengeParam,c.label=1
case 1:return c.trys.push([1,4,5,9]),[4,this.Credentials.clear()]
case 2:return c.sent(),[4,this.Credentials.set(o,"session")]
case 3:return r=c.sent(),Co.debug("succeed to get cognito credentials",r),[3,9]
case 4:return s=c.sent(),Co.debug("cannot get cognito credentials",s),[3,9]
case 5:return c.trys.push([5,7,,8]),[4,this.currentUserPoolUser()]
case 6:return a=c.sent(),i.user=a,Po("signIn",a,"A user "+e.getUsername()+" has been signed in"),t(a),[3,8]
case 7:return u=c.sent(),Co.error("Failed to get the signed in user",u),n(u),[3,8]
case 8:return[7]
case 9:return[2]}})})},onFailure:function(t){Co.debug("signIn failure",t),Po("signIn_failure",t,e.getUsername()+" failed to signin"),n(t)},customChallenge:function(n){Co.debug("signIn custom challenge answer required"),e.challengeName="CUSTOM_CHALLENGE",e.challengeParam=n,t(e)},mfaRequired:function(n,r){Co.debug("signIn MFA required"),e.challengeName=n,e.challengeParam=r,t(e)},mfaSetup:function(n,r){Co.debug("signIn mfa setup",n),e.challengeName=n,e.challengeParam=r,t(e)},newPasswordRequired:function(n,r){Co.debug("signIn new password"),e.challengeName="NEW_PASSWORD_REQUIRED",e.challengeParam={userAttributes:n,requiredAttributes:r},t(e)},totpRequired:function(n,r){Co.debug("signIn totpRequired"),e.challengeName=n,e.challengeParam=r,t(e)},selectMFAType:function(n,r){Co.debug("signIn selectMFAType",n),e.challengeName=n,e.challengeParam=r,t(e)}}},e.prototype.signInWithPassword=function(e){var t=this
if(this.pendingSignIn)throw new Error("Pending sign-in attempt already in progress")
var n=this.createCognitoUser(e.getUsername())
return this.pendingSignIn=new Promise(function(r,i){n.authenticateUser(e,t.authCallbacks(n,function(e){t.pendingSignIn=null,r(e)},function(e){t.pendingSignIn=null,i(e)}))}),this.pendingSignIn},e.prototype.signInWithoutPassword=function(e){var t=this,n=this.createCognitoUser(e.getUsername())
return n.setAuthenticationFlowType("CUSTOM_AUTH"),new Promise(function(r,i){n.initiateAuth(e,t.authCallbacks(n,r,i))})},e.prototype.getMFAOptions=function(e){return new Promise(function(t,n){e.getMFAOptions(function(e,r){if(e)return Co.debug("get MFA Options failed",e),void n(e)
Co.debug("get MFA options success",r),t(r)})})},e.prototype.getPreferredMFA=function(e,t){var n=this,r=this
return new Promise(function(i,o){var s=n._config.clientMetadata,a=!!t&&t.bypassCache
e.getUserData(function(e,t){if(e)return Co.debug("getting preferred mfa failed",e),void o(e)
var n=r._getMfaTypeFromUserData(t)
return n?void i(n):void o("invalid MFA Type")},{bypassCache:a,clientMetadata:s})})},e.prototype._getMfaTypeFromUserData=function(e){var t=null,n=e.PreferredMfaSetting
if(n)t=n
else{var r=e.UserMFASettingList
r?0===r.length?t="NOMFA":Co.debug("invalid case for getPreferredMFA",e):t=e.MFAOptions?"SMS_MFA":"NOMFA"}return t},e.prototype._getUserData=function(e,t){return new Promise(function(n,r){e.getUserData(function(e,t){return e?(Co.debug("getting user data failed",e),void r(e)):void n(t)},t)})},e.prototype.setPreferredMFA=function(e,t){return So(this,void 0,void 0,function(){var n,r,o,s,a,u
return Ao(this,function(c){switch(c.label){case 0:return n=this._config.clientMetadata,[4,this._getUserData(e,{bypassCache:!0,clientMetadata:n})]
case 1:switch(r=c.sent(),o=null,s=null,t){case"TOTP":return[3,2]
case"SMS":return[3,3]
case"NOMFA":return[3,4]}return[3,6]
case 2:return s={PreferredMfa:!0,Enabled:!0},[3,7]
case 3:return o={PreferredMfa:!0,Enabled:!0},[3,7]
case 4:return a=r.UserMFASettingList,[4,this._getMfaTypeFromUserData(r)]
case 5:if("NOMFA"===(u=c.sent()))return[2,Promise.resolve("No change for mfa type")]
if("SMS_MFA"===u)o={PreferredMfa:!1,Enabled:!1}
else{if("SOFTWARE_TOKEN_MFA"!==u)return[2,this.rejectAuthError(i.InvalidMFA)]
s={PreferredMfa:!1,Enabled:!1}}return a&&0!==a.length&&a.forEach(function(e){"SMS_MFA"===e?o={PreferredMfa:!1,Enabled:!1}:"SOFTWARE_TOKEN_MFA"===e&&(s={PreferredMfa:!1,Enabled:!1})}),[3,7]
case 6:return Co.debug("no validmfa method provided"),[2,this.rejectAuthError(i.NoMFA)]
case 7:return[2,new Promise(function(t,r){e.setUserMfaPreference(o,s,function(i,o){if(i)return Co.debug("Set user mfa preference error",i),r(i)
Co.debug("Set user mfa success",o),Co.debug("Caching the latest user data into local"),e.getUserData(function(e,n){return e?(Co.debug("getting user data failed",e),r(e)):t(o)},{bypassCache:!0,clientMetadata:n})})})]}})})},e.prototype.disableSMS=function(e){return new Promise(function(t,n){e.disableMFA(function(e,r){if(e)return Co.debug("disable mfa failed",e),void n(e)
Co.debug("disable mfa succeed",r),t(r)})})},e.prototype.enableSMS=function(e){return new Promise(function(t,n){e.enableMFA(function(e,r){if(e)return Co.debug("enable mfa failed",e),void n(e)
Co.debug("enable mfa succeed",r),t(r)})})},e.prototype.setupTOTP=function(e){return new Promise(function(t,n){e.associateSoftwareToken({onFailure:function(e){Co.debug("associateSoftwareToken failed",e),n(e)},associateSecretCode:function(e){Co.debug("associateSoftwareToken sucess",e),t(e)}})})},e.prototype.verifyTotpToken=function(e,t){return Co.debug("verification totp token",e,t),new Promise(function(n,r){e.verifySoftwareToken(t,"My TOTP device",{onFailure:function(e){Co.debug("verifyTotpToken failed",e),r(e)},onSuccess:function(t){Po("signIn",e,"A user "+e.getUsername()+" has been signed in"),Co.debug("verifyTotpToken success",t),n(t)}})})},e.prototype.confirmSignIn=function(e,t,n,r){var o=this
if(void 0===r&&(r=this._config.clientMetadata),!t)return this.rejectAuthError(i.EmptyCode)
var s=this
return new Promise(function(i,a){e.sendMFACode(t,{onSuccess:function(t){return So(o,void 0,void 0,function(){var n,r
return Ao(this,function(o){switch(o.label){case 0:Co.debug(t),o.label=1
case 1:return o.trys.push([1,4,5,6]),[4,this.Credentials.clear()]
case 2:return o.sent(),[4,this.Credentials.set(t,"session")]
case 3:return n=o.sent(),Co.debug("succeed to get cognito credentials",n),[3,6]
case 4:return r=o.sent(),Co.debug("cannot get cognito credentials",r),[3,6]
case 5:return s.user=e,Po("signIn",e,"A user "+e.getUsername()+" has been signed in"),i(e),[7]
case 6:return[2]}})})},onFailure:function(e){Co.debug("confirm signIn failure",e),a(e)}},n,r)})},e.prototype.completeNewPassword=function(e,t,n,r){var o=this
if(void 0===n&&(n={}),void 0===r&&(r=this._config.clientMetadata),!t)return this.rejectAuthError(i.EmptyPassword)
var s=this
return new Promise(function(i,a){e.completeNewPasswordChallenge(t,n,{onSuccess:function(t){return So(o,void 0,void 0,function(){var n,r
return Ao(this,function(o){switch(o.label){case 0:Co.debug(t),o.label=1
case 1:return o.trys.push([1,4,5,6]),[4,this.Credentials.clear()]
case 2:return o.sent(),[4,this.Credentials.set(t,"session")]
case 3:return n=o.sent(),Co.debug("succeed to get cognito credentials",n),[3,6]
case 4:return r=o.sent(),Co.debug("cannot get cognito credentials",r),[3,6]
case 5:return s.user=e,Po("signIn",e,"A user "+e.getUsername()+" has been signed in"),i(e),[7]
case 6:return[2]}})})},onFailure:function(e){Co.debug("completeNewPassword failure",e),Po("completeNewPassword_failure",e,o.user+" failed to complete the new password flow"),a(e)},mfaRequired:function(t,n){Co.debug("signIn MFA required"),e.challengeName=t,e.challengeParam=n,i(e)},mfaSetup:function(t,n){Co.debug("signIn mfa setup",t),e.challengeName=t,e.challengeParam=n,i(e)},totpRequired:function(t,n){Co.debug("signIn mfa setup",t),e.challengeName=t,e.challengeParam=n,i(e)}},r)})},e.prototype.sendCustomChallengeAnswer=function(e,t,n){var r=this
return void 0===n&&(n=this._config.clientMetadata),this.userPool?t?new Promise(function(i,o){e.sendCustomChallengeAnswer(t,r.authCallbacks(e,i,o),n)}):this.rejectAuthError(i.EmptyChallengeResponse):this.rejectNoUserPool()},e.prototype.updateUserAttributes=function(e,t,n){void 0===n&&(n=this._config.clientMetadata)
var r=[],i=this
return new Promise(function(o,s){i.userSession(e).then(function(i){for(var a in t)if("sub"!==a&&a.indexOf("_verified")<0){var u={Name:a,Value:t[a]}
r.push(u)}e.updateAttributes(r,function(e,t){return e?s(e):o(t)},n)})})},e.prototype.userAttributes=function(e){var t=this
return new Promise(function(n,r){t.userSession(e).then(function(t){e.getUserAttributes(function(e,t){e?r(e):n(t)})})})},e.prototype.verifiedContact=function(e){var t=this
return this.userAttributes(e).then(function(e){var n=t.attributesToObject(e),r={},i={}
return n.email&&(n.email_verified?i.email=n.email:r.email=n.email),n.phone_number&&(n.phone_number_verified?i.phone_number=n.phone_number:r.phone_number=n.phone_number),{verified:i,unverified:r}})},e.prototype.currentUserPoolUser=function(e){var t=this
return this.userPool?new Promise(function(n,r){t._storageSync.then(function(){return So(t,void 0,void 0,function(){var t,i,o=this
return Ao(this,function(s){switch(s.label){case 0:return this.isOAuthInProgress()?(Co.debug("OAuth signIn in progress, waiting for resolution..."),[4,new Promise(function(e){var t=setTimeout(function(){Co.debug("OAuth signIn in progress timeout"),m.remove("auth",n),e()},1e4)
function n(r){var i=r.payload.event
"cognitoHostedUI"!==i&&"cognitoHostedUI_failure"!==i||(Co.debug("OAuth signIn resolved: "+i),clearTimeout(t),m.remove("auth",n),e())}m.listen("auth",n)})]):[3,2]
case 1:s.sent(),s.label=2
case 2:return(t=this.userPool.getCurrentUser())?(i=this._config.clientMetadata,t.getSession(function(i,s){return So(o,void 0,void 0,function(){var o,a,u,c=this
return Ao(this,function(l){switch(l.label){case 0:return i?(Co.debug("Failed to get the user session",i),r(i),[2]):(o=!!e&&e.bypassCache)?[4,this.Credentials.clear()]:[3,2]
case 1:l.sent(),l.label=2
case 2:return a=this._config.clientMetadata,(void 0===(u=s.getAccessToken().decodePayload().scope)?"":u).split(" ").includes(Oo)?(t.getUserData(function(e,i){if(e)return Co.debug("getting user data failed",e),void("User is disabled."===e.message||"User does not exist."===e.message||"Access Token has been revoked"===e.message?r(e):n(t))
for(var o=i.PreferredMfaSetting||"NOMFA",s=[],a=0;a<i.UserAttributes.length;a++){var u={Name:i.UserAttributes[a].Name,Value:i.UserAttributes[a].Value},l=new Fi(u)
s.push(l)}var f=c.attributesToObject(s)
return Object.assign(t,{attributes:f,preferredMFA:o}),n(t)},{bypassCache:o,clientMetadata:a}),[2]):(Co.debug("Unable to get the user data because the "+Oo+" is not in the scopes of the access token"),[2,n(t)])}})})},{clientMetadata:i}),[2]):(Co.debug("Failed to get user from user pool"),r("No current user"),[2])}})})}).catch(function(e){return Co.debug("Failed to sync cache info into memory",e),r(e)})}):this.rejectNoUserPool()},e.prototype.isOAuthInProgress=function(){return this.oAuthFlowInProgress},e.prototype.currentAuthenticatedUser=function(e){return So(this,void 0,void 0,function(){var t,n,r,i,o
return Ao(this,function(s){switch(s.label){case 0:Co.debug("getting current authenticated user"),t=null,s.label=1
case 1:return s.trys.push([1,3,,4]),[4,this._storageSync]
case 2:return s.sent(),[3,4]
case 3:throw n=s.sent(),Co.debug("Failed to sync cache info into memory",n),n
case 4:try{(r=JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")))&&(t=_o(_o({},r.user),{token:r.token}))}catch(e){Co.debug("cannot load federated user from auth storage")}return t?(this.user=t,Co.debug("get current authenticated federated user",this.user),[2,this.user]):[3,5]
case 5:Co.debug("get current authenticated userpool user"),i=null,s.label=6
case 6:return s.trys.push([6,8,,9]),[4,this.currentUserPoolUser(e)]
case 7:return i=s.sent(),[3,9]
case 8:return"No userPool"===(o=s.sent())&&Co.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"),Co.debug("The user is not authenticated by the error",o),[2,Promise.reject("The user is not authenticated")]
case 9:return this.user=i,[2,this.user]}})})},e.prototype.currentSession=function(){var e=this
return Co.debug("Getting current session"),this.userPool?new Promise(function(t,n){e.currentUserPoolUser().then(function(r){e.userSession(r).then(function(e){t(e)}).catch(function(e){Co.debug("Failed to get the current session",e),n(e)})}).catch(function(e){Co.debug("Failed to get the current user",e),n(e)})}):Promise.reject()},e.prototype.userSession=function(e){if(!e)return Co.debug("the user is null"),this.rejectAuthError(i.NoUserSession)
var t=this._config.clientMetadata
return new Promise(function(n,r){Co.debug("Getting the session from this user:",e),e.getSession(function(t,i){return t?(Co.debug("Failed to get the session from user",e),void r(t)):(Co.debug("Succeed to get the user session",i),void n(i))},{clientMetadata:t})})},e.prototype.currentUserCredentials=function(){return So(this,void 0,void 0,function(){var e,t,n=this
return Ao(this,function(r){switch(r.label){case 0:Co.debug("Getting current user credentials"),r.label=1
case 1:return r.trys.push([1,3,,4]),[4,this._storageSync]
case 2:return r.sent(),[3,4]
case 3:throw e=r.sent(),Co.debug("Failed to sync cache info into memory",e),e
case 4:t=null
try{t=JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"))}catch(e){Co.debug("failed to get or parse item aws-amplify-federatedInfo",e)}return t?[2,this.Credentials.refreshFederatedToken(t)]:[2,this.currentSession().then(function(e){return Co.debug("getting session success",e),n.Credentials.set(e,"session")}).catch(function(e){return Co.debug("getting session failed",e),n.Credentials.set(null,"guest")})]}})})},e.prototype.currentCredentials=function(){return Co.debug("getting current credentials"),this.Credentials.get()},e.prototype.verifyUserAttribute=function(e,t,n){return void 0===n&&(n=this._config.clientMetadata),new Promise(function(r,i){e.getAttributeVerificationCode(t,{onSuccess:function(){return r()},onFailure:function(e){return i(e)}},n)})},e.prototype.verifyUserAttributeSubmit=function(e,t,n){return n?new Promise(function(r,i){e.verifyAttribute(t,n,{onSuccess:function(e){r(e)},onFailure:function(e){i(e)}})}):this.rejectAuthError(i.EmptyCode)},e.prototype.verifyCurrentUserAttribute=function(e){var t=this
return t.currentUserPoolUser().then(function(n){return t.verifyUserAttribute(n,e)})},e.prototype.verifyCurrentUserAttributeSubmit=function(e,t){var n=this
return n.currentUserPoolUser().then(function(r){return n.verifyUserAttributeSubmit(r,e,t)})},e.prototype.cognitoIdentitySignOut=function(e,t){return So(this,void 0,void 0,function(){var n,r,i=this
return Ao(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this._storageSync]
case 1:return o.sent(),[3,3]
case 2:throw n=o.sent(),Co.debug("Failed to sync cache info into memory",n),n
case 3:return r=this._oAuthHandler&&"true"===this._storage.getItem("amplify-signin-with-hostedUI"),[2,new Promise(function(n,o){if(e&&e.global){Co.debug("user global sign out",t)
var s=i._config.clientMetadata
t.getSession(function(e,s){if(e)return Co.debug("failed to get the user session",e),o(e)
t.globalSignOut({onSuccess:function(e){if(Co.debug("global sign out success"),!r)return n()
i.oAuthSignOutRedirect(n,o)},onFailure:function(e){return Co.debug("global sign out failed",e),o(e)}})},{clientMetadata:s})}else{if(Co.debug("user sign out",t),t.signOut(),!r)return n()
i.oAuthSignOutRedirect(n,o)}})]}})})},e.prototype.oAuthSignOutRedirect=function(e,t){R.browserOrNode().isBrowser?this.oAuthSignOutRedirectOrReject(t):this.oAuthSignOutAndResolve(e)},e.prototype.oAuthSignOutAndResolve=function(e){this._oAuthHandler.signOut(),e()},e.prototype.oAuthSignOutRedirectOrReject=function(e){this._oAuthHandler.signOut(),setTimeout(function(){return e("Signout timeout fail")},3e3)},e.prototype.signOut=function(e){return So(this,void 0,void 0,function(){var t
return Ao(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.cleanCachedItems()]
case 1:return n.sent(),[3,3]
case 2:return n.sent(),Co.debug("failed to clear cached items"),[3,3]
case 3:return this.userPool?(t=this.userPool.getCurrentUser())?[4,this.cognitoIdentitySignOut(e,t)]:[3,5]:[3,7]
case 4:return n.sent(),[3,6]
case 5:Co.debug("no current Cognito user"),n.label=6
case 6:return[3,8]
case 7:Co.debug("no Congito User pool"),n.label=8
case 8:return Po("signOut",this.user,"A user has been signed out"),this.user=null,[2]}})})},e.prototype.cleanCachedItems=function(){return So(this,void 0,void 0,function(){return Ao(this,function(e){switch(e.label){case 0:return[4,this.Credentials.clear()]
case 1:return e.sent(),[2]}})})},e.prototype.changePassword=function(e,t,n,r){var i=this
return void 0===r&&(r=this._config.clientMetadata),new Promise(function(o,s){i.userSession(e).then(function(i){e.changePassword(t,n,function(e,t){return e?(Co.debug("change password failure",e),s(e)):o(t)},r)})})},e.prototype.forgotPassword=function(e,t){if(void 0===t&&(t=this._config.clientMetadata),!this.userPool)return this.rejectNoUserPool()
if(!e)return this.rejectAuthError(i.EmptyUsername)
var n=this.createCognitoUser(e)
return new Promise(function(r,i){n.forgotPassword({onSuccess:function(){r()},onFailure:function(t){Co.debug("forgot password failure",t),Po("forgotPassword_failure",t,e+" forgotPassword failed"),i(t)},inputVerificationCode:function(t){Po("forgotPassword",n,e+" has initiated forgot password flow"),r(t)}},t)})},e.prototype.forgotPasswordSubmit=function(e,t,n,r){if(void 0===r&&(r=this._config.clientMetadata),!this.userPool)return this.rejectNoUserPool()
if(!e)return this.rejectAuthError(i.EmptyUsername)
if(!t)return this.rejectAuthError(i.EmptyCode)
if(!n)return this.rejectAuthError(i.EmptyPassword)
var o=this.createCognitoUser(e)
return new Promise(function(i,s){o.confirmPassword(t,n,{onSuccess:function(){Po("forgotPasswordSubmit",o,e+" forgotPasswordSubmit successful"),i()},onFailure:function(t){Po("forgotPasswordSubmit_failure",t,e+" forgotPasswordSubmit failed"),s(t)}},r)})},e.prototype.currentUserInfo=function(){return So(this,void 0,void 0,function(){var e,t,n,r,i,o,s
return Ao(this,function(a){switch(a.label){case 0:return(e=this.Credentials.getCredSource())&&"aws"!==e&&"userPool"!==e?[3,9]:[4,this.currentUserPoolUser().catch(function(e){return Co.debug(e)})]
case 1:if(!(s=a.sent()))return[2,null]
a.label=2
case 2:return a.trys.push([2,8,,9]),[4,this.userAttributes(s)]
case 3:t=a.sent(),n=this.attributesToObject(t),r=null,a.label=4
case 4:return a.trys.push([4,6,,7]),[4,this.currentCredentials()]
case 5:return r=a.sent(),[3,7]
case 6:return i=a.sent(),Co.debug("Failed to retrieve credentials while getting current user info",i),[3,7]
case 7:return[2,{id:r?r.identityId:void 0,username:s.getUsername(),attributes:n}]
case 8:return o=a.sent(),Co.debug("currentUserInfo error",o),[2,{}]
case 9:return"federated"===e?[2,(s=this.user)||{}]:[2]}})})},e.prototype.federatedSignIn=function(e,t,n){return So(this,void 0,void 0,function(){var i,a,u,c,l,f,h,d,p,g,y
return Ao(this,function(m){switch(m.label){case 0:if(!this._config.identityPoolId&&!this._config.userPoolId)throw new Error("Federation requires either a User Pool or Identity Pool in config")
if(void 0===e&&this._config.identityPoolId&&!this._config.userPoolId)throw new Error("Federation with Identity Pools requires tokens passed as arguments")
return o(e)||(v=e)&&["customProvider"].find(function(e){return v.hasOwnProperty(e)})||function(e){return e&&!!["customState"].find(function(t){return e.hasOwnProperty(t)})}(e)||void 0===e?(i=e||{provider:r.Cognito},l=o(i)?i.provider:i.customProvider,o(i),a=i.customState,this._config.userPoolId&&(u=s(this._config.oauth)?this._config.userPoolWebClientId:this._config.oauth.clientID,c=s(this._config.oauth)?this._config.oauth.redirectSignIn:this._config.oauth.redirectUri,this._oAuthHandler.oauthSignIn(this._config.oauth.responseType,this._config.oauth.domain,c,u,l,a)),[3,4]):[3,1]
case 1:l=e
try{(f=JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user))&&Co.warn("There is already a signed in user: "+f+" in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.")}catch(e){}return h=t.token,d=t.identity_id,p=t.expires_at,[4,this.Credentials.set({provider:l,token:h,identity_id:d,user:n,expires_at:p},"federation")]
case 2:return g=m.sent(),[4,this.currentAuthenticatedUser()]
case 3:return y=m.sent(),Po("signIn",y,"A user "+y.username+" has been signed in"),Co.debug("federated sign in credentials",g),[2,g]
case 4:return[2]}var v})})},e.prototype._handleAuthResponse=function(e){return So(this,void 0,void 0,function(){var t,n,r,i,o,s,a,u,c,l,f,h,d,p
return Ao(this,function(g){switch(g.label){case 0:if(this.oAuthFlowInProgress)return Co.debug("Skipping URL "+e+" current flow in progress"),[2]
g.label=1
case 1:if(g.trys.push([1,,8,9]),this.oAuthFlowInProgress=!0,!this._config.userPoolId)throw new Error("OAuth responses require a User Pool defined in config")
if(Po("parsingCallbackUrl",{url:e},"The callback url is being parsed"),t=e||(R.browserOrNode().isBrowser?window.location.href:""),n=!!((0,ro.qg)(t).query||"").split("&").map(function(e){return e.split("=")}).find(function(e){var t=Eo(e,1)[0]
return"code"===t||"error"===t}),r=!!((0,ro.qg)(t).hash||"#").substr(1).split("&").map(function(e){return e.split("=")}).find(function(e){var t=Eo(e,1)[0]
return"access_token"===t||"error"===t}),!n&&!r)return[3,7]
this._storage.setItem("amplify-redirected-from-hosted-ui","true"),g.label=2
case 2:return g.trys.push([2,6,,7]),[4,this._oAuthHandler.handleAuthResponse(t)]
case 3:return i=g.sent(),o=i.accessToken,s=i.idToken,a=i.refreshToken,u=i.state,c=new Di({IdToken:new xi({IdToken:s}),RefreshToken:new Mi({RefreshToken:a}),AccessToken:new Ti({AccessToken:o})}),l=void 0,this._config.identityPoolId?[4,this.Credentials.set(c,"session")]:[3,5]
case 4:l=g.sent(),Co.debug("AWS credentials",l),g.label=5
case 5:return f=/-/.test(u),(h=this.createCognitoUser(c.getIdToken().decodePayload()["cognito:username"])).setSignInUserSession(c),window&&void 0!==window.history&&window.history.replaceState({},null,this._config.oauth.redirectSignIn),Po("signIn",h,"A user "+h.getUsername()+" has been signed in"),Po("cognitoHostedUI",h,"A user "+h.getUsername()+" has been signed in via Cognito Hosted UI"),f&&(d=u.split("-").splice(1).join("-"),Po("customOAuthState",d.match(/.{2}/g).map(function(e){return String.fromCharCode(parseInt(e,16))}).join(""),"State for user "+h.getUsername())),[2,l]
case 6:return p=g.sent(),Co.debug("Error in cognito hosted auth response",p),Po("signIn_failure",p,"The OAuth response flow failed"),Po("cognitoHostedUI_failure",p,"A failure occurred when returning to the Cognito Hosted UI"),Po("customState_failure",p,"A failure occurred when returning state"),[3,7]
case 7:return[3,9]
case 8:return this.oAuthFlowInProgress=!1,[7]
case 9:return[2]}})})},e.prototype.essentialCredentials=function(e){return{accessKeyId:e.accessKeyId,sessionToken:e.sessionToken,secretAccessKey:e.secretAccessKey,identityId:e.identityId,authenticated:e.authenticated}},e.prototype.attributesToObject=function(e){var t=this,n={}
return e&&e.map(function(e){"email_verified"===e.Name||"phone_number_verified"===e.Name?n[e.Name]=t.isTruthyString(e.Value)||!0===e.Value:n[e.Name]=e.Value}),n},e.prototype.isTruthyString=function(e){return"function"==typeof e.toLowerCase&&"true"===e.toLowerCase()},e.prototype.createCognitoUser=function(e){var t={Username:e,Pool:this.userPool}
t.Storage=this._storage
var n=this._config.authenticationFlowType,r=new Ki(t)
return n&&r.setAuthenticationFlowType(n),r},e.prototype._isValidAuthStorage=function(e){return!!e&&"function"==typeof e.getItem&&"function"==typeof e.setItem&&"function"==typeof e.removeItem&&"function"==typeof e.clear},e.prototype.noUserPoolErrorHandler=function(e){return!e||e.userPoolId&&e.identityPoolId?i.NoConfig:i.MissingAuthConfig},e.prototype.rejectAuthError=function(e){return Promise.reject(new vo(e))},e.prototype.rejectNoUserPool=function(){var e=this.noUserPoolErrorHandler(this._config)
return Promise.reject(new bo(e))},e}(),ko=new To(null)
ee.register(ko)
const xo=ko},9472:(e,t,n)=>{var r=n(7700),i=n(4709)
e.exports=function(e,t,n){var o=t&&n||0
"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null)
var s=(e=e||{}).random||(e.rng||r)()
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a]
return t||i(s)}},9659:function(e,t,n){var r
e.exports=(r=n(631),function(e){var t=r,n=t.lib,i=n.WordArray,o=n.Hasher,s=t.algo,a=[],u=[]
!function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1
return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var r=2,i=0;i<64;)t(r)&&(i<8&&(a[i]=n(e.pow(r,.5))),u[i]=n(e.pow(r,1/3)),i++),r++}()
var c=[],l=s.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],a=n[4],l=n[5],f=n[6],h=n[7],d=0;d<64;d++){if(d<16)c[d]=0|e[t+d]
else{var p=c[d-15],g=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,y=c[d-2],m=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10
c[d]=g+c[d-7]+m+c[d-16]}var v=r&i^r&o^i&o,b=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=h+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&l^~a&f)+u[d]+c[d]
h=f,f=l,l=a,a=s+w|0,s=o,o=i,i=r,r=w+(b+v)|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+l|0,n[6]=n[6]+f|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes
return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this)
return e._hash=this._hash.clone(),e}})
t.SHA256=o._createHelper(l),t.HmacSHA256=o._createHmacHelper(l)}(Math),r.SHA256)},9671:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.numToUint8=void 0,t.numToUint8=function(e){return new Uint8Array([(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e])}},9721:(e,t,n)=>{"use strict"
var r=n(4024)
function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var o=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),l=["%","/","?",";","#"].concat(c),f=["/","?","#"],h=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,p={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},m=n(6448)
function v(e,t,n){if(e&&"object"==typeof e&&e instanceof i)return e
var r=new i
return r.parse(e,t,n),r}i.prototype.parse=function(e,t,n){if("string"!=typeof e)throw new TypeError("Parameter 'url' must be a string, not "+typeof e)
var i=e.indexOf("?"),s=-1!==i&&i<e.indexOf("#")?"?":"#",u=e.split(s)
u[0]=u[0].replace(/\\/g,"/")
var v=e=u.join(s)
if(v=v.trim(),!n&&1===e.split("#").length){var b=a.exec(v)
if(b)return this.path=v,this.href=v,this.pathname=b[1],b[2]?(this.search=b[2],this.query=t?m.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=o.exec(v)
if(w){var _=(w=w[0]).toLowerCase()
this.protocol=_,v=v.substr(w.length)}if(n||w||v.match(/^\/\/[^@/]+@[^@/]+/)){var S="//"===v.substr(0,2)
!S||w&&g[w]||(v=v.substr(2),this.slashes=!0)}if(!g[w]&&(S||w&&!y[w])){for(var A,E,C=-1,O=0;O<f.length;O++)-1!==(I=v.indexOf(f[O]))&&(-1===C||I<C)&&(C=I)
for(-1!==(E=-1===C?v.lastIndexOf("@"):v.lastIndexOf("@",C))&&(A=v.slice(0,E),v=v.slice(E+1),this.auth=decodeURIComponent(A)),C=-1,O=0;O<l.length;O++){var I;-1!==(I=v.indexOf(l[O]))&&(-1===C||I<C)&&(C=I)}-1===C&&(C=v.length),this.host=v.slice(0,C),v=v.slice(C),this.parseHost(),this.hostname=this.hostname||""
var P="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!P)for(var T=this.hostname.split(/\./),k=(O=0,T.length);O<k;O++){var x=T[O]
if(x&&!x.match(h)){for(var M="",U=0,R=x.length;U<R;U++)x.charCodeAt(U)>127?M+="x":M+=x[U]
if(!M.match(h)){var D=T.slice(0,O),j=T.slice(O+1),N=x.match(d)
N&&(D.push(N[1]),j.unshift(N[2])),j.length&&(v="/"+j.join(".")+v),this.hostname=D.join(".")
break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),P||(this.hostname=r.toASCII(this.hostname))
var L=this.port?":"+this.port:"",F=this.hostname||""
this.host=F+L,this.href+=this.host,P&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==v[0]&&(v="/"+v))}if(!p[_])for(O=0,k=c.length;O<k;O++){var B=c[O]
if(-1!==v.indexOf(B)){var H=encodeURIComponent(B)
H===B&&(H=escape(B)),v=v.split(B).join(H)}}var q=v.indexOf("#");-1!==q&&(this.hash=v.substr(q),v=v.slice(0,q))
var V=v.indexOf("?")
if(-1!==V?(this.search=v.substr(V),this.query=v.substr(V+1),t&&(this.query=m.parse(this.query)),v=v.slice(0,V)):t&&(this.search="",this.query={}),v&&(this.pathname=v),y[_]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){L=this.pathname||""
var K=this.search||""
this.path=L+K}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||""
e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@")
var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o=""
this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(o=m.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}))
var s=this.search||o&&"?"+o||""
return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),t+i+(n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(s=s.replace("#","%23"))+r},i.prototype.resolve=function(e){return this.resolveObject(v(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if("string"==typeof e){var t=new i
t.parse(e,!1,!0),e=t}for(var n=new i,r=Object.keys(this),o=0;o<r.length;o++){var s=r[o]
n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n
if(e.slashes&&!e.protocol){for(var a=Object.keys(e),u=0;u<a.length;u++){var c=a[u]
"protocol"!==c&&(n[c]=e[c])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.pathname="/",n.path=n.pathname),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var l=Object.keys(e),f=0;f<l.length;f++){var h=l[f]
n[h]=e[h]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||g[e.protocol])n.pathname=e.pathname
else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var p=n.pathname||"",m=n.search||""
n.path=p+m}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var v=n.pathname&&"/"===n.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=b||v||n.host&&e.pathname,_=w,S=n.pathname&&n.pathname.split("/")||[],A=(d=e.pathname&&e.pathname.split("/")||[],n.protocol&&!y[n.protocol])
if(A&&(n.hostname="",n.port=null,n.host&&(""===S[0]?S[0]=n.host:S.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),w=w&&(""===d[0]||""===S[0])),b)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,S=d
else if(d.length)S||(S=[]),S.pop(),S=S.concat(d),n.search=e.search,n.query=e.query
else if(null!=e.search)return A&&(n.host=S.shift(),n.hostname=n.host,(P=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=P.shift(),n.hostname=P.shift(),n.host=n.hostname)),n.search=e.search,n.query=e.query,null===n.pathname&&null===n.search||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n
if(!S.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n
for(var E=S.slice(-1)[0],C=(n.host||e.host||S.length>1)&&("."===E||".."===E)||""===E,O=0,I=S.length;I>=0;I--)"."===(E=S[I])?S.splice(I,1):".."===E?(S.splice(I,1),O++):O&&(S.splice(I,1),O--)
if(!w&&!_)for(;O--;O)S.unshift("..")
!w||""===S[0]||S[0]&&"/"===S[0].charAt(0)||S.unshift(""),C&&"/"!==S.join("/").substr(-1)&&S.push("")
var P,T=""===S[0]||S[0]&&"/"===S[0].charAt(0)
return A&&(n.hostname=T?"":S.length?S.shift():"",n.host=n.hostname,(P=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=P.shift(),n.hostname=P.shift(),n.host=n.hostname)),(w=w||n.host&&S.length)&&!T&&S.unshift(""),S.length>0?n.pathname=S.join("/"):(n.pathname=null,n.path=null),null===n.pathname&&null===n.search||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var e=this.host,t=s.exec(e)
t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},t.qg=v}}])
