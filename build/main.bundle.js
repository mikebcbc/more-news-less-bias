!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+g+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=f.p+""+g+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}})}function o(e){var t=M[e];if(!t)return f;var n=function(n){return t.hot.active?(M[n]?M[n].parents.indexOf(e)<0&&M[n].parents.push(e):(D=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),D=[]),f(n)};for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(r));return n.e=function(e){function t(){H--,"prepare"===E&&(P[e]||l(e),0===H&&0===x&&p())}return"ready"===E&&c("prepare"),H++,f.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:a,apply:u,status:function(e){if(!e)return E;j.push(e)},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var t=j.indexOf(e);t>=0&&j.splice(t,1)},data:O[e]};return v=void 0,t}function c(e){E=e;for(var t=0;t<j.length;t++)j[t].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return b=e,c("check"),r().then(function(e){if(!e)return c("idle"),null;I={},P={},k=e.c,w=e.h,c("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});m={};return l(0),"prepare"===E&&0===H&&0===x&&p(),t})}function s(e,t){if(k[e]&&I[e]){I[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--x&&0===H&&p()}}function l(e){k[e]?(I[e]=!0,x++,n(e)):P[e]=!0}function p(){c("ready");var e=y;if(y=null,e)if(b)u(b).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(d(n));e.resolve(t)}}function u(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,a,s,l,p={},u=[],h={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){l=d(y);var b;b=m[y]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),c=i.id,d=i.chain;if((s=M[c])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],p=M[l];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([l]),moduleId:c,parentId:l};t.indexOf(l)>=0||(p.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),r(n[l],[c])):(delete n[l],t.push(l),o.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:y};var _=!1,j=!1,x=!1,H="";switch(b.chain&&(H="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+b.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(b),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),x=!0;break;default:throw new Error("Unexception type "+b.type)}if(_)return c("abort"),Promise.reject(_);if(j){h[l]=m[l],r(u,b.outdatedModules);for(l in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,l)&&(p[l]||(p[l]=[]),r(p[l],b.outdatedDependencies[l]))}x&&(r(u,[b.moduleId]),h[l]=v)}var P=[];for(i=0;i<u.length;i++)l=u[i],M[l]&&M[l].hot._selfAccepted&&P.push({module:l,errorHandler:M[l].hot._selfAccepted});c("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&t(e)});for(var I,A=u.slice();A.length>0;)if(l=A.pop(),s=M[l]){var U={},N=s.hot._disposeHandlers;for(a=0;a<N.length;a++)(o=N[a])(U);for(O[l]=U,s.hot.active=!1,delete M[l],a=0;a<s.children.length;a++){var q=M[s.children[a]];q&&((I=q.parents.indexOf(l))>=0&&q.parents.splice(I,1))}}var L,R;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(s=M[l]))for(R=p[l],a=0;a<R.length;a++)L=R[a],(I=s.children.indexOf(L))>=0&&s.children.splice(I,1);c("apply"),g=w;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var S=null;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)){s=M[l],R=p[l];var T=[];for(i=0;i<R.length;i++)L=R[i],o=s.hot._acceptedDependencies[L],T.indexOf(o)>=0||T.push(o);for(i=0;i<T.length;i++){o=T[i];try{o(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[i],error:e}),n.ignoreErrored||S||(S=e)}}}for(i=0;i<P.length;i++){var B=P[i];l=B.module,D=[l];try{f(l)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e}),n.ignoreErrored||S||(S=t),S||(S=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||S||(S=e)}}return S?(c("fail"),Promise.reject(S)):(c("idle"),new Promise(function(e){e(u)}))}function f(t){if(M[t])return M[t].exports;var n=M[t]={i:t,l:!1,exports:{},hot:i(t),parents:(_=D,D=[],_),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){s(e,t),h&&h(e,t)};var v,y,m,w,b=!0,g="f0f7fa660d8337fc9672",O={},D=[],_=[],j=[],E="idle",x=0,H=0,P={},I={},k={},M={};f.m=e,f.c=M,f.i=function(e){return e},f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return g},o(1)(f.s=1)}([function(e,t){e.exports='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="description" content="More News, Less Bias is a news hub dedicated to pulling articles from diverse news sources around the world in an effort to eliminate bias.">\n    <title>More News, Less Bias</title>\n    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">\n    <link rel="stylesheet" href="main.css">\n  </head>\n  <body>\n\n\t<div class="row logo">\n\t\t<div class="col-12">\n\t\t\t<h1>More News, Less Bias</h1>\n\t\t</div>\n\t</div>\n\n\t<div class="row filters">\n\t\t<div class="col-6 sort">\n\t\t\t<select>\n\t\t\t\t<option value="shuffle">Shuffle</option>\n\t\t\t\t<option value="name">Name</option>\n\t\t\t\t<option value="date">Date</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class="col-6 filter">\n\t\t\t<input type="text" placeholder="Filter">\n\t\t</div>\n\t</div>\n\t<div class="row articles">\n\t\t<div class="col-12">\n\t\t\t<ul>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n  <script type="text/javascript" src="main.bundle.js"><\/script>\n  </body>\n</html>'},function(e,t,n){e.exports=n(0)}]);