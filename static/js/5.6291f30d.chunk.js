(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{19:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",o=r(0);e.a=function(){return Object(o.jsx)("img",{src:n,alt:"Error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},20:function(t,e,r){t.exports=r(23)},21:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},22:function(t,e,r){"use strict";var n=r(20),o=r.n(n),a=r(21),c=r(4),i=r(1);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(c.a)(t,2),r=e[0],n=e[1],u=Object(i.useState)(null),s=Object(c.a)(u,2),l=s[0],h=s[1];return{loading:r,request:Object(i.useCallback)(function(){var t=Object(a.a)(o.a.mark((function t(e){var r,a,c,i,u,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},n(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:a,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,n(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),n(!1),h(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return h(null)}),[])}}(),e=t.loading,r=t.request,n=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=953c7b2c43941d945893eb4ae855e28d",h=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,r("".concat(s,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",m(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,r("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},v=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"Not available"}};return{loading:e,error:n,getAllCharacters:h,getCharacter:f,clearError:u,getAllComics:p,getComic:d}}},23:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new N(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(C([])));j&&j!==r&&n.call(j,a)&&(b=j);var x=y.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,c,i){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,i)}))}i(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),u(x,i,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},33:function(t,e,r){},37:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(2),a=r(5),c=r(1),i=r(22),u=r(9),s=r(19),l=(r(33),r(0)),h=function(t){var e=t.comic,r=e.title,n=e.description,o=e.pageCount,c=e.thumbnail,i=e.language,u=e.price;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:c,alt:r,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:r}),Object(l.jsx)("p",{className:"single-comic__descr",children:n}),Object(l.jsx)("p",{className:"single-comic__descr",children:o}),Object(l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",i]}),Object(l.jsx)("div",{className:"single-comic__price",children:u})]}),Object(l.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};e.default=function(){var t=Object(o.g)().comicId,e=Object(c.useState)(null),r=Object(n.a)(e,2),a=r[0],f=r[1],p=Object(i.a)(),d=p.loading,m=p.error,v=p.getComic,g=p.clearError;Object(c.useEffect)((function(){y()}),[t]);var y=function(){g(),v(t).then(b)},b=function(t){f(t)},w=m?Object(l.jsx)(s.a,{}):null,j=d?Object(l.jsx)(u.a,{}):null,x=d||m||!a?null:Object(l.jsx)(h,{comic:a});return Object(l.jsxs)(l.Fragment,{children:[w,j,x]})}}}]);
//# sourceMappingURL=5.6291f30d.chunk.js.map