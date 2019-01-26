!function(){var e=document.querySelector('[data-role="site-nav"]'),n=document.querySelector('[data-role="site-nav-open"]'),t=document.querySelector('[data-role="site-nav-close"]');function a(){n.setAttribute("aria-expanded",!1),n.setAttribute("aria-label","Show site navigation"),e.removeAttribute("data-expanded")}n&&n.addEventListener("click",function(t){t.preventDefault(),"true"===n.getAttribute("aria-expanded")?a():(n.setAttribute("aria-expanded",!0),n.setAttribute("aria-label","Hide site navigation"),e.setAttribute("data-expanded",!0))}),t&&t.addEventListener("click",function(t){t.preventDefault(),a()}),e&&document.body.addEventListener("click",function(t){e.contains(t.target)||n.contains(t.target)||a()})}(),function(){var e=document.querySelector('[data-role="site-nav-menu-scope"]'),t=document.querySelectorAll('[data-role="site-nav-menu"]'),n=[];function a(){n.forEach(function(t){t.setAttribute("aria-expanded","false")})}e&&t&&(t.forEach(function(t){n.push(t.previousElementSibling)}),n.forEach(function(n){n.onclick=function(t){t.preventDefault();var e="true"===n.getAttribute("aria-expanded");a(),n.setAttribute("aria-expanded",!e)}}),document.body.addEventListener("click",function(t){e.contains(t.target)||a()}))}(),function(){"use strict";var u="scrollBehavior"in document.documentElement.style;document.querySelectorAll('[data-role="carousel"]').forEach(function(t){for(var a,r=t.querySelector('[data-role="carousel-rail"]'),e=t.querySelector('[data-role="carousel-dots"]'),i=e.getElementsByTagName("*"),o=t.querySelectorAll('[data-role="carousel-slide"]'),c=0,n=-1;++n<o.length;){var l=i[0].cloneNode(!0);l.navindex=n,e.appendChild(l)}function d(t,e,n){var a,r,i,o=window,c=(document,o.HTMLElement||o.Element,468),l=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now;function d(t){var e,n,a,r,i=(l()-t.startTime)/c;r=i=1<i?1:i,e=.5*(1-Math.cos(Math.PI*r)),n=t.startX+(t.x-t.startX)*e,a=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,n,a),n===t.x&&a===t.y||o.requestAnimationFrame(d.bind(o,t))}function u(t,e){this.scrollLeft=t,this.scrollTop=e}r=e,i=n,d({scrollable:a=t,method:u,startTime:l(),startX:a.scrollLeft,startY:a.scrollTop,x:r,y:i})}e.removeChild(e.firstElementChild),e.onclick=function(t){if(t.preventDefault(),t.target.hasOwnProperty("navindex")){var e=o[t.target.navindex].offsetLeft-(window.innerWidth-o[t.target.navindex].offsetWidth)/2;u?r.scrollLeft=e:d(r,e,0)}},function t(){var e=o[0].offsetWidth;(e=r.offsetWidth/2-e/2)!==a&&(a=e,r.style.cssText="--offset: "+a+"px");for(var n=-1;++n<o.length;)if(0<o[n].getBoundingClientRect().left){c=n;break}for(n=-1;++n<i.length;)i[n].setAttribute("data-active",n===c);requestAnimationFrame(t)}()})}(),function(){var t=document.querySelectorAll('[data-role="login-link"]'),e=document.querySelector('[data-role="login-box"]'),n=document.querySelector('[data-role="login-body"]'),a=document.querySelector('[data-role="login-close"]'),r=document.querySelector('[data-role="login-form"]'),i=document.querySelector('[data-role="login-button"]'),o=document.querySelector('[data-role="logged-in-settings"]'),c=document.querySelectorAll('[data-role="logged-in-link"]'),l=document.querySelector('[data-role="logged-in-panel"]');function d(){e.setAttribute("aria-hidden",!0)}function u(){c.forEach(function(t){t.setAttribute("aria-expanded","false")}),l.setAttribute("aria-hidden","true")}t&&t.forEach(function(t){t.onclick=function(t){t.preventDefault(),!e.getAttribute("aria-hidden")?d():e.removeAttribute("aria-hidden")}}),r&&(r.oninput=function(t){r.checkValidity()?i.removeAttribute("disabled"):i.setAttribute("disabled","disabled")}),e&&n&&(e.onclick=function(t){n.contains(t.target)||t.target===i||d()}),a&&(a.onclick=function(t){t.preventDefault(),d()}),c&&l&&(c.forEach(function(e){e.onclick=function(t){t.preventDefault(),"true"===e.getAttribute("aria-expanded")?u():(c.forEach(function(t){t.setAttribute("aria-expanded","true")}),l.setAttribute("aria-hidden","false"))}}),document.body.addEventListener("click",function(t){o.contains(t.target)||u()}))}(),function(){var e=document.querySelector('[data-role="join-form"]'),t=e.elements,n=document.querySelector('[data-role="join-submit"]'),a=document.querySelectorAll('[data-role="join-step"]'),r=document.querySelectorAll('[data-role="join-step-next"]'),i=document.querySelectorAll('[data-role="join-step-header"]');if(e||a.length){r.forEach(function(t){t.onclick=function(t){this.hasAttribute("disabled")||l(c(this.href))}}),i.forEach(function(t){t.onclick=function(){var t=this.parentNode,e=t.id;t.getAttribute("data-complete")&&l(c(location.hash=e))}}),window.addEventListener("hashchange",function(){l(c(location.hash))}),e.onsubmit=function(t){t.preventDefault(),e.setAttribute("data-validate",!0),d()&&e.submit()};for(var o=-1;++o<t.length;)t[o].onclick=function(){this.setAttribute("data-validate",!0)};e.onchange=function(t){t.preventDefault(),a.forEach(function(t){var e=!0;t.querySelectorAll("input, button, textarea, select").forEach(function(t){t.checkValidity()||(e=!1)}),function(t,e){var n=t.querySelector('[data-role="join-step-next"]');if(!n)return;e?(n.removeAttribute("disabled"),t.setAttribute("data-step-is-valid",!0)):(n.setAttribute("disabled","disabled"),t.setAttribute("data-step-is-valid",!1))}(t,e)}),d()}}function c(t){return t=(t=t.replace(/#/,"")).split("join-step-")[1],(t=parseInt(t,10))?t-1:0}function l(t){if(-1!==t)for(var e=-1;++e<a.length;)e<t&&(a[e].setAttribute("data-complete",!0),a[e].removeAttribute("data-active",!0),a[e].setAttribute("aria-hidden",!0)),e===t&&(a[e].setAttribute("data-active",!0),a[e].removeAttribute("data-complete",!0),a[e].removeAttribute("aria-hidden")),t<e&&(a[e].removeAttribute("data-active",!0),a[e].removeAttribute("data-complete",!0),a[e].setAttribute("aria-hidden",!0))}function d(){return e.checkValidity()?(n.removeAttribute("disabled"),!0):!(n.disabled="disabled")}}();