(function () {
  var loginlink = document.querySelectorAll('[data-role="login-link"]');
  var loginbox = document.querySelector('[data-role="login-box"]');
  var loginbody = document.querySelector('[data-role="login-body"]');
  var loginclose = document.querySelector('[data-role="login-close"]');
  var loginform = document.querySelector('[data-role="login-form"]');
  var loginbutton = document.querySelector('[data-role="login-button"]');

  var loggedinsettings = document.querySelector('[data-role="logged-in-settings"]');
  var loggedinlink = document.querySelector('[data-role="logged-in-link"]');
  var loggedinpanel = document.querySelector('[data-role="logged-in-panel"]');

  if (loginlink) {
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
  }

  if (loginform) {
    loginform.oninput = function (event) {
      if (loginform.checkValidity()) {
        enableform()
      }

      else {
        disableform()
      }
    }
  }

  if (loginbox && loginbody) {
    loginbox.onclick = function (event) {
      if (!loginbody.contains(event.target) && event.target !== loginbutton) {
        closelogin();
      }
    }
  }

  if (loginclose) {
    loginclose.onclick = function (event) {
      event.preventDefault();
      closelogin();
    }
  }

  if (loggedinlink && loggedinpanel) {
    loggedinlink.onclick = function (event) {
      event.preventDefault();
      var expanded = loggedinlink.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        closeloggedin()
      }

      else {
        openloggedin();
      }
    }

    document.body.addEventListener('click', function (event) {
      if (!loggedinsettings.contains(event.target)) {
        closeloggedin();
      }
    })
  }

  function openlogin() {
    loginbox.removeAttribute('aria-hidden');
  }

  function closelogin() {
    loginbox.setAttribute('aria-hidden', true);
  }

  function openloggedin() {
    loggedinlink.setAttribute('aria-expanded', 'true');
    loggedinpanel.setAttribute('aria-hidden', 'false');
  }

  function closeloggedin() {
    loggedinlink.setAttribute('aria-expanded', 'false');
    loggedinpanel.setAttribute('aria-hidden', 'true');
  }

  function enableform() {
    loginbutton.removeAttribute('disabled');
  }

  function disableform() {
    loginbutton.setAttribute('disabled', 'disabled');
  }

})();