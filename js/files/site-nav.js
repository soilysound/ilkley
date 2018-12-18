(function () {

  var sitenav = document.querySelector('[data-role="site-nav"]');
  var sitenavopen = document.querySelector('[data-role="site-nav-open"]');
  var sitenavclose = document.querySelector('[data-role="site-nav-close"]');

  sitenavopen.addEventListener('click', function (event) {

    event.preventDefault();
    var isopen = sitenavopen.getAttribute('aria-expanded') === 'true';
    isopen ? closenav() : opennav();

  });

  sitenavclose.addEventListener('click', function (event) {

    event.preventDefault();
    closenav();

  });

  document.body.addEventListener('click', function (event) {

    if (!sitenav.contains(event.target) && !sitenavopen.contains(event.target)) {
      closenav();
    }

  })

  function opennav() {

    sitenavopen.setAttribute('aria-expanded', true);
    sitenavopen.setAttribute('aria-label', 'Hide site navigation');
    sitenav.setAttribute('data-expanded', true);

  }

  function closenav() {

    sitenavopen.setAttribute('aria-expanded', false);
    sitenavopen.setAttribute('aria-label', 'Show site navigation');
    sitenav.removeAttribute('data-expanded');

  }

})();