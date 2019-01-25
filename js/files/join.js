(function () {

  var steps = document.querySelectorAll('[data-role="join-step"]');
  var nextsteplink = document.querySelectorAll('[data-role="join-step-next"]');
  var stepsheader = document.querySelectorAll('[data-role="join-step-header"]');

  if (!steps.length) {
    return;
  }

  nextsteplink.forEach(function (item) {
    item.onclick = function (event) {
      // event.preventDefault();
      if (this.hasAttribute('disabled')) {
        return;
      }
      focusstep(getstep(this.href));
    }
  });

  stepsheader.forEach(function (item) {
    item.onclick = function () {
      var parent = this.parentNode;
      var id = parent.id;
      if (parent.getAttribute('data-complete')) {
        focusstep(getstep(id));
      }

    }
  })

  function getstep(id) {

    id = id.replace(/#/, '');
    id = id.split('join-step-')[1];
    id = parseInt(id, 10);

    if (id) {
      return id - 1;
    }

    else {
      return 0;
    }
  }

  function focusstep(step) {

    if (step === -1) {
      return;
    }

    for (var i = -1; ++i < steps.length;) {
      if (i < step) {
        steps[i].setAttribute('data-complete', true);
        steps[i].removeAttribute('data-active', true);
        steps[i].setAttribute('aria-hidden', true);
      }

      if (i === step) {
        steps[i].setAttribute('data-active', true);
        steps[i].removeAttribute('data-complete', true);
        steps[i].removeAttribute('aria-hidden');
      }

      if (i > step) {
        steps[i].removeAttribute('data-active', true);
        steps[i].removeAttribute('data-complete', true);
        steps[i].setAttribute('aria-hidden', true);
      }
    }
  }

  window.addEventListener('hashchange', function () {
    focusstep(getstep(location.hash));
  });

  // focusstep(getstep(location.hash));


})()