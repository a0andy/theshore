(function($, window, document) {

  function ctascroll() {
    $(".m-videobanner .bannercta").click(function() {
      $('html, body').animate({
          scrollTop: $(".m-videobanner").outerHeight() - 40,
      }, 1500);
    });
  }

 $(function() {
  ctascroll();
 });
}(window.jQuery, window, document));
