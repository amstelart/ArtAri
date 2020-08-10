// Если на проекте jQuery
$( document ).ready(function() {

  $('select').niceSelect();

  $("#owl-carousel-demo").owlCarousel({
    items: 3,
    nav: false,
    loop: false,
    margin: 15,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 6,
      },
      1800 : {
        items: 7,
      }
    }
  });
  $("#owl-carousel-demo-2").owlCarousel({
    items: 3,
    nav: false,
    loop: false,
    margin: 15,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });
  $("#owl-carousel-demo-3").owlCarousel({
    items: 3,
    nav: false,
    loop: false,
    margin: 20,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        margin: 60,
        items: 4,
      }
    }
  });

  // range-slider
  $(function () {

    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 5000,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      type: "double",
      skin: "round",
      min: min,
      max: max,
      from: 0,
      to: 5000,

      onStart: updateInputs,
      onChange: updateInputs,
      step: 100,
      prettify_enabled: true,
      prettify_separator: ".",
      values_separator: " - ",
      force_edges: true
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
    });

  });
  // end range-slider
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
