(function () {

  var carousels = document.querySelectorAll('[data-role="carousel"]');
  carousels.forEach(function (carousel) {

    var rail = carousel.querySelector('[data-role="carousel-rail"]');
    var dots = carousel.querySelector('[data-role="carousel-dots"]');
    var dot = dots.innerHTML;
    var slides = carousel.querySelectorAll('[data-role="carousel-slide"]');

    function tick() {
      var pages = Math.ceil((rail.scrollWidth + rail.offsetWidth) / window.innerWidth);
      dots.innerHTML = "";
      for (var i = pages; --i > -1;) {
        dots.insertAdjacentHTML('afterbegin', dot);
      }
      requestAnimationFrame(tick);
    }

    tick();

  });

})();