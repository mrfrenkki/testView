(function () {
  'use strict'
  var elem, h_elem, top, hght, mrg, intHeight;
  intHeight = window.innerHeight;

  window.onscroll = function() {

    elem = document.getElementById('menu');
    top = window.pageYOffset || document.documentElement.scrollTop;
    hght = 160;
    mrg = 50;
    h_elem = elem.offsetWidth;

    if(intHeight < top){
      elem.style.position = "fixed";
      elem.style.bottom = mrg + hght + "px";
    } else if (top + mrg < hght) {
      elem.style.position = "absolute";
      elem.style.top = hght + "px";
    } else {
      elem.style.position = "fixed";
      elem.style.top = mrg + "px";
    }
  }

})();
//# sourceMappingURL=maps/app.js.map
