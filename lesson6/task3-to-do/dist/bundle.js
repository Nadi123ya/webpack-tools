!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(2);(t.exports=r(!1)).push([t.i,'*{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif}.title{font-size:24px;text-transform:uppercase;text-align:center}.todo-list{display:flex;flex-direction:column;margin-top:32px;background-color:coral;border-radius:8px;padding:8px;max-width:600px;margin:auto}.list{margin:0;padding:0;list-style-type:none;margin:auto;width:100%}.list-item{display:flex;align-items:center;height:40px;border-radius:8px;background-color:wheat;margin-bottom:8px;padding:8px}.list-item:last-child{margin-bottom:0}.list-item__checkbox{margin-right:8px}.list-item_done{opacity:.7}.list-item_done .list-item__text{text-decoration:line-through}.list-item__delete-btn{width:24px;height:24px;border-radius:50%;outline:none;cursor:pointer;background:rgba(0,0,0,0);border:none;margin-left:auto;text-decoration:none;padding:0;font-size:18px;line-height:24px;text-align:center;opacity:.7}.list-item__delete-btn::before{content:"x"}.list__item .btn{height:32px;min-width:64px;border:3px solid #ccc;outline:none;cursor:pointer;border-radius:8px;margin-left:16px}.actions{display:flex;margin-bottom:8px}.task-input{height:32px;border:3px solid #ccc;border-radius:8px;flex:1}.btn{height:32px;min-width:64px;border:3px solid #ccc;outline:none;cursor:pointer;border-radius:8px;margin-left:16px}',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r=0;r<t.length;r++){var i=[].concat(t[r]);n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),e.push(i)}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,e){var n,r,i;if(e.singleton){var o=h++;n=m||(m=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t,e);return s(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],u=i[a.id];u&&(u.refs--,r.push(u))}t&&s(c(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(t,e,n){"use strict";n.r(e);var r="https://62f9bd43ffd7197707df7c8f.mockapi.io/tasks",i=function(){return fetch(r).then((function(t){return t.json()}))};n(0);function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=document.querySelector(".list"),s=function(t,e){return t.done-e.done},u=function(t){var e=t.text,n=t.done,r=t.id,i=document.createElement("li");i.classList.add("list-item");var o=document.createElement("input");o.setAttribute("type","checkbox"),o.dataset.id=Number(r),o.checked=n,o.classList.add("list-item__checkbox"),n&&i.classList.add("list-item_done");var a=document.createElement("span");a.classList.add("list-item__text"),a.textContent=e;var c=document.createElement("button");return c.classList.add("list-item__delete-btn"),i.append(o,a,c),i.dataset.id=Number(r),i},l=function(){i().then((function(t){c.innerHTML="";var e=t.slice().sort(s).map(u);c.append.apply(c,o(e))}))};l();var d=function(){var t,e=document.querySelector(".task-input"),n=e.value;n&&(e.value="",(t={text:n,done:!1},fetch(r,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)})).then((function(){return i()})).then((function(){l()})))},f=function(t){var e=t.target.classList.contains("list-item__checkbox"),n=t.target.dataset.id;e&&i().then((function(e){var o=e.find((function(e){return e.id===t.target.dataset.id})).text,a=t.target.checked;(function(t,e){return fetch("".concat(r,"/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})})(n,{text:o,done:a}).then((function(){return i()})).then((function(){l()}))}))},p=function(t){t.target.classList.contains("list-item__delete-btn")&&function(t){return fetch("".concat(r,"/").concat(t),{method:"DELETE"})}(t.target.closest(".list-item").dataset.id).then((function(){return i()})).then((function(){l()}))},m=function(t){t.target.classList.contains("list-item__delete-btn")&&p(t),t.target.classList.contains("list-item__checkbox")&&f(t)};document.addEventListener("DOMContentLoaded",(function(){i().then((function(){l()})),document.querySelector(".create-task-btn").addEventListener("click",d),document.querySelector(".list").addEventListener("click",m)}))}]);