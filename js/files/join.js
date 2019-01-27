(function () {

  var form = document.querySelector('[data-role="join-form"]');
  var elements = form.elements;
  var submit = document.querySelector('[data-role="join-submit"]');
  var steps = document.querySelectorAll('[data-role="join-step"]');
  var nextsteplink = document.querySelectorAll('[data-role="join-step-next"]');
  var stepsheader = document.querySelectorAll('[data-role="join-step-header"]');

  if (!form && !steps.length) {
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
  });

  window.addEventListener('hashchange', function () {
    focusstep(getstep(location.hash));
  });

  // control when we want to validate form elements:

  // onsubmit...
  form.onsubmit = function (event) {
    event.preventDefault();
    form.setAttribute('data-validate', true);
    if (checkformvalidity()) {
      form.submit();
    };
  }

  //... and when te user interacts with a form elements
  for (var i = -1; ++i < elements.length;) {
    elements[i].onclick = function () {
      this.setAttribute('data-validate', true);
    }
  }

  form.onchange = function (event) {
    event.preventDefault();
    steps.forEach(function (step) {
      var isvalid = true;
      step.querySelectorAll('input, button, textarea, select').forEach(function (item) {
        if (!item.checkValidity()) {
          isvalid = false;
        };
      });

      validstep(step, isvalid);

    });

    checkformvalidity();
  }

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

  function validstep(step, valid) {
    var link = step.querySelector('[data-role="join-step-next"]');
    if (!link) {
      return;
    }

    if (valid) {
      link.removeAttribute('disabled');
      step.setAttribute('data-step-is-valid', true);
    }
    else {
      link.setAttribute('disabled', 'disabled');
      step.setAttribute('data-step-is-valid', false);
    }
  }

  function checkformvalidity() {
    if (form.checkValidity()) {
      submit.removeAttribute('disabled');
      return true;
    }
    else {
      submit.disabled = 'disabled';
      return false;
    }
  }
  // enable the below if you want the form to retqain its current step when page reloaded
  // focusstep(getstep(location.hash));

})();