(function () {

  NodeList.prototype.forEach = Array.prototype.forEach;

  var sitenav = document.querySelector('[data-role="site-nav"]');
  var sitenavopen = document.querySelector('[data-role="site-nav-open"]');
  var sitenavclose = document.querySelector('[data-role="site-nav-close"]');

  if (sitenavopen) {
    sitenavopen.addEventListener('click', function (event) {
      event.preventDefault();
      var isopen = sitenavopen.getAttribute('aria-expanded') === 'true';
      isopen ? closenav() : opennav();
    });
  }

  if (sitenavclose) {
    sitenavclose.addEventListener('click', function (event) {
      event.preventDefault();
      closenav();
    });
  }

  if (sitenav) {
    document.body.addEventListener('click', function (event) {
      if (!sitenav.contains(event.target) && !sitenavopen.contains(event.target)) {
        closenav();
      }
    })
  }

  function opennav() {

    sitenavopen.setAttribute('aria-expanded', true);
    sitenavopen.setAttribute('aria-label', 'Hide site navigation');
    sitenav.setAttribute('data-expanded', true);

  }

  function closenav() {

    sitenavopen.setAttribute('aria-expanded', false);
    sitenavopen.setAttribute('aria-label', 'Show site navigation');
    // sitenav.style.cssText = "transform: translateX(0)";
    sitenav.removeAttribute('data-expanded');

  }

})();