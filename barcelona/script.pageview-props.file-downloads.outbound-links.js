!function(){"use strict";var r=window.location,o=window.document,p=o.currentScript,l=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return s("localhost",e);if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var i={},t=(i.n=t,i.u=r.href,i.d=p.getAttribute("data-domain"),i.r=o.referrer||null,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props),p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),n=i.p||{},a=(t.forEach(function(t){var e=t.replace("event-",""),t=p.getAttribute(t);n[e]=n[e]||t}),i.p=n,new XMLHttpRequest);a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<e.length;n++)t.apply(this,e[n]);function a(){i!==r.pathname&&(i=r.pathname,t("pageview"))}var c,u=window.history;u.pushState&&(c=u.pushState,u.pushState=function(){c.apply(this,arguments),a()},window.addEventListener("popstate",a)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||a()}):a();var d=1;function f(t){var e,i,n,a;if("auxclick"!==t.type||t.button===d)return e=function(t){for(;t&&(void 0===t.tagName||!(e=t)||!e.tagName||"a"!==e.tagName.toLowerCase()||!t.href);)t=t.parentNode;var e;return t}(t.target),i=e&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==r.host?w(t,e,{name:"Outbound Link: Click",props:{url:e.href}}):(n=i)&&(a=n.split(".").pop(),h.some(function(t){return t===a}))?w(t,e,{name:"File Download",props:{url:i}}):void 0}function w(t,e,i){var n,a=!1;function r(){a||(a=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented)return e=!e.target||e.target.match(/^_(self|parent|top)$/i),t=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type,e&&t}(t,e)?(n={props:i.props},plausible(i.name,n)):(n={props:i.props,callback:r},plausible(i.name,n),setTimeout(r,5e3),t.preventDefault())}o.addEventListener("click",f),o.addEventListener("auxclick",f);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=p.getAttribute("file-types"),g=p.getAttribute("add-file-types"),h=v&&v.split(",")||g&&g.split(",").concat(u)||u}();