(function($, window, document) {

  function ctascroll() {
    $(".m-videobanner .bannercta").click(function() {
      $('html, body').animate({
          scrollTop: $(".m-videobanner").outerHeight() - 40,
      }, 1500);
    });
  }

  function videoparallax() {
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    new ScrollMagic.Scene({triggerElement: ".m-videobanner"})
			.setTween(".m-videobanner video", {y: "100%", ease: Linear.easeNone})
			.addTo(controller);
  }

 $(function() {
  ctascroll();
  // videoparallax();
 });
}(window.jQuery, window, document));
