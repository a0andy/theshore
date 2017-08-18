(function($, window, document) {

  function ctascroll() {
    $(".m-videobanner .bannercta").click(function() {
      $('html, body').animate({
          scrollTop: $(".m-videobanner").outerHeight() - 40,
      }, 1500);
    });
  }

  function videofixed() {
    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos = $('.m-videobanner').outerHeight() + 100;

      if(y_scroll_pos > scroll_pos) {
        $('.m-videobanner').addClass('nofix');
      } else {
        $('.m-videobanner').removeClass('nofix');
      }
    });
  }

 $(function() {
  ctascroll();
  videofixed();
 });
}(window.jQuery, window, document));
