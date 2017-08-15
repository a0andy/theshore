(function($, window, document) {

  function ctascroll() {
    $(".m-videobanner .bannercta").click(function() {
      console.log($(".m-videobanner").outerHeight());
      $('html, body').animate({
          scrollTop: $(".m-videobanner").outerHeight(),
      }, 1500);
    });
  }

 $(function() {
  ctascroll();
 });
}(window.jQuery, window, document));
