!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function s(e,t){return(void 0===e?"undefined":r(e))===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):y?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e,n,r,s){var i,o,c,l,u="modernizr",f=a("div"),d=function(){var e=t.body;return e||((e=a(y?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=a("div")).id=s?s[r]:u+(r+1),f.appendChild(c);return i=a("style"),i.type="text/css",i.id="s"+u,(d.fake?d:f).appendChild(i),d.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=A.style.overflow,A.style.overflow="hidden",A.appendChild(d)),o=n(f,e),d.fake?(d.parentNode.removeChild(d),A.style.overflow=l,A.offsetHeight):f.parentNode.removeChild(f),!!o}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+r+")");return i=i.join(" or "),o("@supports ("+i+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var i=e.console;null!==s?r&&(s=s.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}(t,null,"position")})}return n}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,r,o,c){var d=e.charAt(0).toUpperCase()+e.slice(1),p=(e+" "+w.join(d+" ")+d).split(" ");return s(t,"string")||s(t,"undefined")?function(e,t,r,o){function c(){d&&(delete C.style,delete C.modElem)}if(o=!s(o,"undefined")&&o,!s(r,"undefined")){var f=l(e,r);if(!s(f,"undefined"))return f}for(var d,p,m,h,g,v=["modernizr","tspan","samp"];!C.style&&v.length;)d=!0,C.modElem=a(v.shift()),C.style=C.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=C.style[h],i(h,"-")&&(h=u(h)),C.style[h]!==n){if(o||s(r,"undefined"))return c(),"pfx"!=t||h;try{C.style[h]=r}catch(e){}if(C.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}(p,t,o,c):(p=(e+" "+S.join(d+" ")+d).split(" "),function(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],s(r,"function")?f(r,n||t):r);return!1}(p,t,r))}function p(e,t,r){return d(e,n,n,t,r)}var m=[],h={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){m.push({name:e,fn:t,options:n})},addAsyncTest:function(e){m.push({name:null,fn:e})}},g=function(){};g.prototype=h,g=new g;var v=[],A=t.documentElement,y="svg"===A.nodeName.toLowerCase(),z="Moz O ms Webkit",w=h._config.usePrefixes?z.split(" "):[];h._cssomPrefixes=w;var b={elem:a("modernizr")};g._q.push(function(){delete b.elem});var C={style:b.elem.style};g._q.unshift(function(){delete C.style});var S=h._config.usePrefixes?z.toLowerCase().split(" "):[];h._domPrefixes=S,h.testAllProps=d,h.testAllProps=p,g.addTest("flexbox",p("flexBasis","1px",!0)),g.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,i,a;for(var o in m)if(m.hasOwnProperty(o)){if(e=[],(t=m[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(a=e[i].split(".")).length?g[a[0]]=r:(!g[a[0]]||g[a[0]]instanceof Boolean||(g[a[0]]=new Boolean(g[a[0]])),g[a[0]][a[1]]=r),v.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=A.className,n=g._config.classPrefix||"";if(y&&(t=t.baseVal),g._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}g._config.enableClasses&&(t+=" "+n+e.join(" "+n),y?A.className.baseVal=t:A.className=t)}(v),delete h.addTest,delete h.addAsyncTest;for(var x=0;x<g._q.length;x++)g._q[x]();e.Modernizr=g}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t,n,r){var s,i,a;return"saveData"===C.algorithm?e>2.7?a=n+1:(i=(t-n)*(s=Math.pow(e-.6,1.5)),r&&(i+=.1*s),a=e+i):a=n>1?Math.sqrt(e*t):e,a>n}function l(e,t){return e.res-t.res}function u(e,t){var n,r,s;if(e&&t)for(s=m.parseSet(t),e=m.makeUrl(e),n=0;n<s.length;n++)if(e===m.makeUrl(s[n].url)){r=s[n];break}return r}i.createElement("picture");var f,d,p,m={},h=!1,g=function(){},v=i.createElement("img"),A=v.getAttribute,y=v.setAttribute,z=v.removeAttribute,w=i.documentElement,b={},C={algorithm:""},S="data-pfsrc",x=S+"set",E=navigator.userAgent,T=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,M="currentSrc",P=/\s+\+?\d+(e\d+)?w/,R=/(\([^)]+\))?\s*(.+)/,L=s.picturefillCFG,_="font-size:100%!important;",N=!0,B={},k={},W=s.devicePixelRatio,$={px:1,in:96},D=i.createElement("a"),I=!1,O=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,F=/^[^ \t\n\r\u000c]+/,H=/[,]+$/,j=/^\d+$/,q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Q=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},G=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},V=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=G(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var s;if(!(n in B))if(B[n]=!1,r&&(s=n.match(e)))B[n]=s[1]*$[s[2]];else try{B[n]=new Function("e",t(n))($)}catch(e){}return B[n]}}(),J=function(e,t){return e.w?(e.cWidth=m.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},K=function(e){if(h){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||m.qsa(s.context||i,s.reevaluate||s.reselect?m.sel:m.selShort),r=t.length){for(m.setupRun(s),I=!0,n=0;n<r;n++)m.fillImg(t[n],s);m.teardownRun(s)}}};s.console&&console.warn,M in v||(M="src"),b["image/jpeg"]=!0,b["image/gif"]=!0,b["image/png"]=!0,b["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),m.ns=("pf"+(new Date).getTime()).substr(0,9),m.supSrcset="srcset"in v,m.supSizes="sizes"in v,m.supPicture=!!s.HTMLPictureElement,m.supSrcset&&m.supPicture&&!m.supSizes&&function(e){v.srcset="data:,a",e.src="data:,a",m.supSrcset=v.complete===e.complete,m.supPicture=m.supSrcset&&m.supPicture}(i.createElement("img")),m.supSrcset&&!m.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(m.supSizes=!0),d=m.supSrcset&&!m.supSizes,h=!0,setTimeout(K)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():h=!0,m.selShort="picture>img,img[srcset]",m.sel=m.selShort,m.cfg=C,m.DPR=W||1,m.u=$,m.types=b,m.setSize=g,m.makeUrl=G(function(e){return D.href=e,D.href}),m.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},m.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?m.matchesMedia=function(e){return!e||matchMedia(e).matches}:m.matchesMedia=m.mMQ,m.matchesMedia.apply(this,arguments)},m.mMQ=function(e){return!e||V(e)},m.calcLength=function(e){var t=V(e,!0)||!1;return t<0&&(t=!1),t},m.supportsType=function(e){return!e||b[e]},m.parseSize=G(function(e){var t=(e||"").match(R);return{media:t&&t[1],length:t&&t[2]}}),m.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,s,o,c,l,u,f,d=!1,m={};for(s=0;s<a.length;s++)c=(o=a[s])[o.length-1],l=o.substring(0,o.length-1),u=parseInt(l,10),f=parseFloat(l),j.test(l)&&"w"===c?((e||n)&&(d=!0),0===u?d=!0:e=u):q.test(l)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):j.test(l)&&"h"===c?((r||n)&&(d=!0),0===u?d=!0:r=u):d=!0;d||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(n(O),c="",l="in descriptor";;){if(u=e.charAt(d),"in descriptor"===l)if(o(u))c&&(a.push(c),c="",l="after descriptor");else{if(","===u)return d+=1,c&&a.push(c),void r();if("("===u)c+=u,l="in parens";else{if(""===u)return c&&a.push(c),void r();c+=u}}else if("in parens"===l)if(")"===u)c+=u,l="in descriptor";else{if(""===u)return a.push(c),void r();c+=u}else if("after descriptor"===l)if(o(u));else{if(""===u)return void r();l="in descriptor",d-=1}d+=1}}for(var i,a,c,l,u,f=e.length,d=0,p=[];;){if(n(U),d>=f)return p;i=n(F),a=[],","===i.slice(-1)?(i=i.replace(H,""),r()):s()}}(e.srcset,e)),e.cands},m.getEmValue=function(){var e;if(!f&&(e=i.body)){var t=i.createElement("div"),n=w.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",w.style.cssText=_,e.style.cssText=_,e.appendChild(t),f=t.offsetWidth,e.removeChild(t),f=parseFloat(f,10),w.style.cssText=n,e.style.cssText=r}return f||16},m.calcListLength=function(e){if(!(e in k)||C.uT){var t=m.calcLength(function(e){function t(e){return!!(l.test(e)&&parseFloat(e)>=0)||!!u.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,s,i,a,c,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(r=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,l=0,u=!1;;){if(""===(r=e.charAt(l)))return t(),n(),a;if(u){if("*"===r&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(o(r)){if(e.charAt(l-1)&&o(e.charAt(l-1))||!s){l+=1;continue}if(0===c){t(),l+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),l+=1;continue}if("/"===r&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}s+=r,l+=1}}}(e)).length,n=0;n<s;n++)if(i=r[n],a=i[i.length-1],t(a)){if(c=a,i.pop(),0===i.length)return c;if(i=i.join(" "),m.matchesMedia(i))return c}return"100vw"}(e));k[e]=t||$.width}return k[e]},m.setRes=function(e){var t;if(e)for(var n=0,r=(t=m.parseSet(e)).length;n<r;n++)J(t[n],e.sizes);return t},m.setRes.res=J,m.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,f,d,p,h=t[m.ns],g=m.DPR;if(o=h.curSrc||t[M],(f=h.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[m.ns].sets)&&n[n.length-1]),(r=u(t,n))&&(t=m.makeUrl(t),e[m.ns].curSrc=t,e[m.ns].curCan=r,r.res||J(r,r.set.sizes)),r}(t,o,e[0].set))&&f.set===e[0].set&&((p=T&&!t.complete&&f.res-.1>g)||(f.cached=!0,f.res>=g&&(a=f))),!a)for(e.sort(l),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=g){a=e[s=r-1]&&(p||o!==m.makeUrl(n.url))&&c(e[s].res,n.res,g,e[s].cached)?e[s]:n;break}a&&(d=m.makeUrl(a.url),h.curSrc=d,h.curCan=a,d!==o&&m.setSrc(t,a),m.setSize(t))}},m.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},m.getSet=function(e){var t,n,r,s=!1,i=e[m.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&m.matchesMedia(n.media)&&(r=m.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},m.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[m.ns];(void 0===c.src||n.src)&&(c.src=A.call(e,"src"),c.src?y.call(e,S,c.src):z.call(e,S)),(void 0===c.srcset||n.srcset||!m.supSrcset||e.srcset)&&(r=A.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[m.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:A.call(e,"sizes")},c.sets.push(s),(i=(d||c.src)&&P.test(c.srcset||""))||!c.src||u(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!m.supSrcset||i&&!m.supSizes),a&&m.supSrcset&&!c.supported&&(r?(y.call(e,x,r),e.srcset=""):z.call(e,x)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==m.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},m.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[m.ns]||(e[m.ns]={}),n=e[m.ns],(r||n.evaled!==p)&&(n.parsed&&!t.reevaluate||m.parseSets(e,e.parentNode,t),n.supported?n.evaled=p:function(e){var t,n=m.getSet(e),r=!1;"pending"!==n&&(r=p,n&&(t=m.setRes(n),m.applySetCandidate(t,e))),e[m.ns].evaled=r}(e))},m.setupRun=function(){I&&!N&&W===s.devicePixelRatio||(N=!1,W=s.devicePixelRatio,B={},k={},m.DPR=W||1,$.width=Math.max(s.innerWidth||0,w.clientWidth),$.height=Math.max(s.innerHeight||0,w.clientHeight),$.vw=$.width/100,$.vh=$.height/100,p=[$.height,$.width,W].join("-"),$.em=m.getEmValue(),$.rem=$.em)},m.supPicture?(K=g,m.fillImg=g):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(m.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=w.clientHeight;Q(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(function(){N=Math.max(s.innerWidth||0,w.clientWidth)!==$.width||w.clientHeight!==a,a=w.clientHeight,N&&m.fillImgs()},99)),Q(i,"readystatechange",n)}(),m.picturefill=K,m.fillImgs=K,m.teardownRun=g,K._=m,s.picturefillCFG={pf:m,push:function(e){var t=e.shift();"function"==typeof m[t]?m[t].apply(m,e):(C[t]=e[0],I&&m.fillImgs({reselect:!0}))}};for(;L&&L.length;)s.picturefillCFG.push(L.shift());s.picturefill=K,"object"==typeof e&&"object"==typeof e.exports?e.exports=K:void 0!==(r=function(){return K}.call(t,n,t,e))&&(e.exports=r),m.supPicture||(b["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){b[e]=!1,K()},n.onload=function(){b[e]=1===n.width,K()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,s=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o="addEventListener",c="getAttribute",l=e[o],u=e.setTimeout,f=e.requestAnimationFrame||u,d=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,v=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},A=function(e,t){v(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},z=function(e,t,n){var r=n?o:"removeEventListener";n&&z(e,t),m.forEach(function(n){e[r](n,t)})},w=function(e,r,s,i,a){var o=t.createEvent("CustomEvent");return s||(s={}),s.instance=n,o.initCustomEvent(r,!i,!a,s),e.dispatchEvent(o),o},b=function(t,n){var s;!a&&(s=e.picturefill||r.pf)?s({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=function(){var e,n,r=[],s=[],i=r,a=function(){var t=i;for(i=r.length?s:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,s){e&&!s?r.apply(this,arguments):(i.push(r),n||(n=!0,(t.hidden?u:f)(a)))};return o._lsFlush=a,o}(),E=function(e,t){return t?function(){x(e)}:function(){var t=this,n=arguments;x(function(){e.apply(t,n)})}},T=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=d?function(){d(s,{timeout:r}),666!==r&&(r=666)}:E(function(){u(s)},!0);return function(e){var s;(e=!0===e)&&(r=44),t||(t=!0,(s=125-(i.now()-n))<0&&(s=0),e||s<9&&d?a():u(a,s))}},M=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?u(s,99-e):(d||r)(r)};return function(){n=i.now(),t||(t=u(s,99))}},P=function(){var a,f,d,m,h,S,P,L,_,N,B,k,W,$,D=/^img$/i,I=/^iframe$/i,O="onscroll"in e&&!/glebot/.test(navigator.userAgent),U=0,F=0,H=-1,j=function(e){F--,e&&e.target&&z(e.target,j),(!e||F<0||!e.target)&&(F=0)},q=function(e,n){var r,i=e,a="hidden"==C(t.body,"visibility")||"hidden"!=C(e,"visibility");for(L-=n,B+=n,_-=n,N+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(a=(C(i,"opacity")||1)>0)&&"visible"!=C(i,"overflow")&&(r=i.getBoundingClientRect(),a=N>r.left&&_<r.right&&B>r.top-1&&L<r.bottom+1);return a},Q=function(){var e,i,o,l,u,d,p,h,g,v=n.elements;if((m=r.loadMode)&&F<8&&(e=v.length)){i=0,H++,null==W&&("expand"in r||(r.expand=s.clientHeight>500&&s.clientWidth>500?500:370),k=r.expand,W=k*r.expFactor),U<W&&F<1&&H>2&&m>2&&!t.hidden?(U=W,H=0):U=m>1&&H>1&&F<6?k:0;for(;i<e;i++)if(v[i]&&!v[i]._lazyRace)if(O)if((h=v[i][c]("data-expand"))&&(d=1*h)||(d=U),g!==d&&(S=innerWidth+d*$,P=innerHeight+d,p=-1*d,g=d),o=v[i].getBoundingClientRect(),(B=o.bottom)>=p&&(L=o.top)<=P&&(N=o.right)>=p*$&&(_=o.left)<=S&&(B||N||_||L)&&(r.loadHidden||"hidden"!=C(v[i],"visibility"))&&(f&&F<3&&!h&&(m<3||H<4)||q(v[i],d))){if(Y(v[i]),u=!0,F>9)break}else!u&&f&&!l&&F<4&&H<4&&m>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!h&&(B||N||_||L||"auto"!=v[i][c](r.sizesAttr)))&&(l=a[0]||v[i]);else Y(v[i]);l&&!u&&Y(l)}},G=T(Q),V=function(e){A(e.target,r.loadedClass),y(e.target,r.loadingClass),z(e.target,K),w(e.target,"lazyloaded")},J=E(V),K=function(e){J({target:e.target})},X=function(e){var t,n=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Z=E(function(e,t,n,s,i){var a,o,l,f,m,h;(m=w(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?A(e,r.autosizesClass):e.setAttribute("sizes",s)),o=e[c](r.srcsetAttr),a=e[c](r.srcAttr),i&&(l=e.parentNode,f=l&&p.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||f),m={target:e},h&&(z(e,j,!0),clearTimeout(d),d=u(j,2500),A(e,r.loadingClass),z(e,K,!0)),f&&g.call(l.getElementsByTagName("source"),X),o?e.setAttribute("srcset",o):a&&!f&&(I.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),i&&(o||f)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),x(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?j(m):F--,V(m))},!0)}),Y=function(e){var t,n=D.test(e.nodeName),s=n&&(e[c](r.sizesAttr)||e[c]("sizes")),i="auto"==s;(!i&&f||!n||!e[c]("src")&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=w(e,"lazyunveilread").detail,i&&R.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,Z(e,t,i,s,n))},ee=function(){if(!f)if(i.now()-h<999)u(ee,999);else{var e=M(function(){r.loadMode=3,G()});f=!0,r.loadMode=3,G(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){h=i.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),$=r.hFac,l("scroll",G,!0),l("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s[o]("DOMNodeInserted",G,!0),s[o]("DOMAttrModified",G,!0),setInterval(G,999)),l("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,G,!0)}),/d$|^c/.test(t.readyState)?ee():(l("load",ee),t[o]("DOMContentLoaded",G),u(ee,2e4)),n.elements.length?(Q(),x._lsFlush()):G()},checkElems:G,unveil:Y}}(),R=function(){var e,n=E(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),s=function(e,t,r){var s,i=e.parentNode;i&&(r=S(e,i,r),(s=w(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=s.detail.width)&&r!==e._lazysizesWidth&&n(e,i,s,r))},i=M(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),l("resize",i)},checkElems:i,updateElem:s}}(),L=function(){L.i||(L.i=!0,R._(),P._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,u(function(){r.init&&L()})}(),n={cfg:r,autoSizer:R,loader:P,init:L,uP:b,aC:A,rC:y,hC:v,fire:w,gW:S,rAF:x}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);