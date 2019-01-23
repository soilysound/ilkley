(function () {

  'use strict';

  var hassmoothscrolling = 'scrollBehavior' in document.documentElement.style;
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

    function smoothscroll(el, left, top) {

      // aliases
      var w = window;
      var d = document;

      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468;


      // define timing method
      var now =
        w.performance && w.performance.now
          ? w.performance.now.bind(w.performance)
          : Date.now;

      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }

      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;

        // apply easing to elapsed time
        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        // scroll more if we have not reached our destination
        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }

      function scroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        // define scroll context

        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;


        // scroll looping over a frame
        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      }

      scroll(el, left, top);

    }

    dotnav.onclick = function (event) {
      event.preventDefault();
      if (event.target.hasOwnProperty('navindex')) {

        var left = (slides[event.target.navindex].offsetLeft) - ((window.innerWidth - slides[event.target.navindex].offsetWidth) / 2);
        if (hassmoothscrolling) {
          rail.scrollLeft = left;
        }
        else {
          smoothscroll(rail, left, 0)
        }
      }
    }

    tick();

  })

})();