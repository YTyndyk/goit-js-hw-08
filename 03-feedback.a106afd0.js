function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function h(){var e=v();if(O(e))return S(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,o-(e-c)):n}(e))}function S(e){return f=void 0,g&&r?y(e):(r=i=void 0,a)}function T(){var e=v(),n=O(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:S(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");!function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})))}(),y.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=y.elements;if(""===t.value||""===n.value)return alert("Не всі поля заповнені!");console.log({email:t.value,message:n.value});e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));
//# sourceMappingURL=03-feedback.a106afd0.js.map
