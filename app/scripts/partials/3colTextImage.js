(function($, window, document) {

  function parallax() {
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    new ScrollMagic.Scene({triggerElement: ".m-3colTextImage"})
			.setTween(".m-3colTextImage .bg-image", {y: "40%", ease: Linear.easeNone})
			.addTo(controller);
  }

 $(function() {
   parallax();
 });
}(window.jQuery, window, document));
