(function () {
  var forms = document.querySelectorAll('form[data-required]');
  forms.forEach(function (form) {
    var submit = form.querySelector('[type="submit"]');
    if (!submit) {
      return;
    }

    form.addEventListener('input', function (event) {
      if (form.checkValidity()) {
        submit.removeAttribute('disabled');
      }

      else {
        submit.setAttribute('disabled', 'disabled')
      }
    })
  })
})();