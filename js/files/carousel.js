(function () {

  var carousels = document.querySelectorAll('[data-role="carousel"]');

  carousels.forEach(function (carousel) {

    var rail = carousel.querySelector('[data-role="carousel-rail"]');
    var dotnav = carousel.querySelector('[data-role="carousel-dots"]');
    var dots = dotnav.getElementsByTagName('*');
    var slides = carousel.querySelectorAll('[data-role="carousel-slide"]');
    var offset;
    var index = 0;

    for (var i = -1; ++i < slides.length;) {
      var el = dots[0].cloneNode(true);
      el.navindex = i;
      dotnav.appendChild(el);
    }

    dotnav.removeChild(dotnav.firstElementChild);

    function tick() {

      var width = slides[0].offsetWidth;
      width = (rail.offsetWidth / 2) - (width / 2);

      if (width !== offset) {
        offset = width;
        rail.style.cssText = "--offset: " + offset + "px";
      }

      for (var i = -1; ++i < slides.length;) {
        if (slides[i].getBoundingClientRect().left > 0) {
          index = i;
          break;
        }
      }

      for (var i = -1; ++i < dots.length;) {
        dots[i].setAttribute('data-active', i === index);
      };

      requestAnimationFrame(tick);
    }

    dotnav.onclick = function (event) {
      event.preventDefault();
      if (event.target.hasOwnProperty('navindex')) {
        var left = slides[event.target.navindex].offsetLeft - (slides[event.target.navindex].offsetWidth / 2);
        rail.scrollLeft = left;
      }
    }

    tick();

  })

})();