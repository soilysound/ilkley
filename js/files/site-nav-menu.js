(function () {

  var scope = document.querySelector('[data-role="site-nav-menu-scope"]')
  var menus = document.querySelectorAll('[data-role="site-nav-menu"]');
  var links = [];

  menus.forEach(function (menu) {
    links.push(menu.previousElementSibling);
  });

  links.forEach(function (link) {
    link.onclick = function (event) {

      event.preventDefault();

      var expanded = link.getAttribute('aria-expanded') === 'true';

      closeall();

      link.setAttribute('aria-expanded', !expanded);

    }
  });

  document.body.addEventListener('click', function (event) {
    if (!scope.contains(event.target)) {
      closeall();
    }
  })


  function closeall() {
    links.forEach(function (item) {
      item.setAttribute('aria-expanded', 'false');
    });
  }

})();