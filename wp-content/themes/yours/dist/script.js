!function(e){var r={};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=1)}([function(t,n){t.exports=jQuery},function(t,n,e){t.exports=e(3)},,function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.matchMedia||(window.matchMedia=function(){var n=window.styleMedia||window.media;if(!n){var e,r=document.createElement("style"),t=document.getElementsByTagName("script")[0];r.type="text/css",r.id="matchmediajs-test",t?t.parentNode.insertBefore(r,t):document.head.appendChild(r),e="getComputedStyle"in window&&window.getComputedStyle(r,null)||r.currentStyle,n={matchMedium:function(t){var n="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return r.styleSheet?r.styleSheet.cssText=n:r.textContent=n,"1px"===e.width}}}return function(t){return{matches:n.matchMedium(t||"all"),media:t||"all"}}}());var a={queries:[],current:"",_init:function(){o()("meta.foundation-mq").length||o()('<meta class="foundation-mq">').appendTo(document.head);var t,n,e,r=o()(".foundation-mq").css("font-family");for(var i in e={},t="string"==typeof(n=r)&&(n=n.trim().slice(1,-1))?e=n.split("&").reduce(function(t,n){var e=n.replace(/\+/g," ").split("="),r=e[0],i=e[1];return r=decodeURIComponent(r),i=void 0===i?null:decodeURIComponent(i),t.hasOwnProperty(r)?Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]:t[r]=i,t},{}):e)t.hasOwnProperty(i)&&this.queries.push({name:i,value:"only screen and (min-width: ".concat(t[i],")")});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var n=this.get(t);return!!n&&window.matchMedia(n).matches},is:function(t){return 1<(t=t.trim().split(" ")).length&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},get:function(t){for(var n in this.queries)if(this.queries.hasOwnProperty(n)){var e=this.queries[n];if(t===e.name)return e.value}return null},_getCurrentSize:function(){for(var t,n=0;n<this.queries.length;n++){var e=this.queries[n];window.matchMedia(e.value).matches&&(t=e)}return"object"===i(t)?t.name:t},_watcher:function(){var e=this;o()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var t=e._getCurrentSize(),n=e.current;t!==n&&(e.current=t,o()(window).trigger("changed.zf.mediaquery",[t,n]))})}};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={version:"6.5.3",_plugins:{},_uuids:[],plugin:function(t,n){var e=n||s(t),r=f(e);this._plugins[r]=this[e]=t},registerPlugin:function(t,n){var e,r,i=n?f(n):s(t.constructor).toLowerCase();t.uuid=(r=i,e=(e=6)||6,Math.round(Math.pow(36,e+1)-Math.random()*Math.pow(36,e)).toString(36).slice(1)+(r?"-".concat(r):"")),t.$element.attr("data-".concat(i))||t.$element.attr("data-".concat(i),t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf.".concat(i)),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var n=f(s(t.$element.data("zfPlugin").constructor));for(var e in this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-".concat(n)).removeData("zfPlugin").trigger("destroyed.zf.".concat(n)),t)t[e]=null},reInit:function(t){var n=t instanceof o.a;try{if(n)t.each(function(){o()(this).data("zfPlugin")._init()});else{var e=u(t),r=this;({object:function(t){t.forEach(function(t){t=f(t),o()("[data-"+t+"]").foundation("_init")})},string:function(){t=f(t),o()("[data-"+t+"]").foundation("_init")},undefined:function(){this.object(Object.keys(r._plugins))}})[e](t)}}catch(t){}finally{return t}},reflow:function(r,t){void 0===t?t=Object.keys(this._plugins):"string"==typeof t&&(t=[t]);var i=this;o.a.each(t,function(t,n){var e=i._plugins[n];o()(r).find("[data-"+n+"]").addBack("[data-"+n+"]").each(function(){var t=o()(this),r={};if(!t.data("zfPlugin")){if(t.attr("data-options"))t.attr("data-options").split(";").forEach(function(t,n){var e=t.split(":").map(function(t){return t.trim()});e[0]&&(r[e[0]]=function(t){{if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(1*t))return parseFloat(t)}return t}(e[1]))});try{t.data("zfPlugin",new e(o()(this),r))}catch(t){}finally{return}}})})},getFnName:s,addToJquery:function(o){return o.fn.foundation=function(e){var t=u(e),n=o(".no-js");if(n.length&&n.removeClass("no-js"),"undefined"===t)a._init(),c.reflow(this);else{if("string"!==t)throw new TypeError("We're sorry, ".concat(t," is not a valid parameter. You must use a string representing the method you wish to invoke."));var r=Array.prototype.slice.call(arguments,1),i=this.data("zfPlugin");if(void 0===i||void 0===i[e])throw new ReferenceError("We're sorry, '"+e+"' is not an available method for "+(i?s(i):"this element")+".");1===this.length?i[e].apply(i,r):this.each(function(t,n){i[e].apply(o(n).data("zfPlugin"),r)})}return this},o}};function s(t){if(void 0!==Function.prototype.name)return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name;var n=/function\s([^(]{1,})\(/.exec(t.toString());return n&&1<n.length?n[1].trim():""}function f(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}c.util={throttle:function(e,r){var i=null;return function(){var t=this,n=arguments;null===i&&(i=setTimeout(function(){e.apply(t,n),i=null},r))}}},window.Foundation=c,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var r=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(r+16,n);return setTimeout(function(){t(r=e)},e-n)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),e=this,r=function(){},i=function(){return e.apply(this instanceof r?this:t,n.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),i.prototype=new r,i}),c.addToJquery(o.a),c.MediaQuery=a;window.$=o.a,o()(document).ready(function(){o()(document).foundation(),o()("#current").text(Foundation.MediaQuery.current)}),window.addEventListener("resize",function(t){document.getElementById("current").innerHTML=Foundation.MediaQuery.current},!1),window.$=o.a}]);