(function () {
  var loginlink = document.querySelectorAll('[data-role="login-link"]');
  var loginbox = document.querySelector('[data-role="login-box"]');
  var loginbody = loginbox.querySelector('[data-role="login-body"]');
  var loginclose = loginbox.querySelector('[data-role="login-close"]');
  var loginform = document.querySelector('[data-role="login-form"]');
  var loginbutton = document.querySelector('[data-role="login-button"]');

  loginlink.forEach(function (item) {
    item.onclick = function (event) {

      event.preventDefault();

      var isopen = !loginbox.getAttribute('aria-hidden');

      if (isopen) {
        closelogin()
      }

      else {
        openlogin();
      }
    }
  });

  loginform.oninput = function (event) {
    if (loginform.checkValidity()) {
      enableform()
    }

    else {
      disableform()
    }
  }

  loginbox.onclick = function (event) {
    if (!loginbody.contains(event.target) && event.target !== loginbutton) {
      closelogin();
    }
  }

  loginclose.onclick = function (event) {
    event.preventDefault();
    closelogin();
  }

  function openlogin() {
    loginbox.removeAttribute('aria-hidden');
  }

  function closelogin() {
    loginbox.setAttribute('aria-hidden', true);
  }

  function enableform() {
    loginbutton.removeAttribute('disabled');
  }

  function disableform() {
    loginbutton.setAttribute('disabled', 'disabled');
  }

})();