function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var r,i,a,o,u,f,l=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function j(e){return l=e,u=setTimeout(w,t),s?y(e):o}function h(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=a}function w(){var e=g();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return c?d(n,a-(e-l)):n}(e))}function O(e){return u=void 0,v&&r?y(e):(r=i=void 0,o)}function T(){var e=g(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(c)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),o}return t=b(t)||0,p(n)&&(s=!!n.leading,a=(c="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?o:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j={};(()=>{let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),y.elements.email.value=e.email?e.email:"",y.elements.message.value=e.message?e.message:"")})(),y.addEventListener("input",e(t)((e=>{j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(e=>{if(e.preventDefault(),""===e.target.elements.email.value||""===e.target.elements.message.value)return alert("Всі поля повинні бути заповнені!");const t={};t.email=e.target.elements.email.value,t.message=e.target.elements.message.value,console.log(t),e.target.reset(),j.email="",j.message="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.9385ff50.js.map