!function(){var t=document.querySelector('[data-role="site-nav"]'),n=document.querySelector('[data-role="site-nav-open"]'),e=document.querySelector('[data-role="site-nav-close"]');function a(){n.setAttribute("aria-expanded",!1),n.setAttribute("aria-label","Show site navigation"),t.removeAttribute("data-expanded")}n.addEventListener("click",function(e){e.preventDefault(),"true"===n.getAttribute("aria-expanded")?a():(n.setAttribute("aria-expanded",!0),n.setAttribute("aria-label","Hide site navigation"),t.setAttribute("data-expanded",!0))}),e.addEventListener("click",function(e){e.preventDefault(),a()}),document.body.addEventListener("click",function(e){t.contains(e.target)||n.contains(e.target)||a()})}(),function(){var t=document.querySelector('[data-role="site-nav-menu-scope"]'),e=document.querySelectorAll('[data-role="site-nav-menu"]'),n=[];function a(){n.forEach(function(e){e.setAttribute("aria-expanded","false")})}e.forEach(function(e){n.push(e.previousElementSibling)}),n.forEach(function(n){n.onclick=function(e){e.preventDefault();var t="true"===n.getAttribute("aria-expanded");a(),n.setAttribute("aria-expanded",!t)}}),document.body.addEventListener("click",function(e){t.contains(e.target)||a()})}();