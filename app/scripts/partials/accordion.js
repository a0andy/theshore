(function($, window, document) {

  function accordion() {
    $('.accordion').on('click', function() {
      if (!($(this).hasClass('active'))) {
        $('.accordion').removeClass('active').children('.more').stop().slideUp();
        $(this).addClass('active').children('.more').stop().slideDown();
      } else {
        $('.accordion').removeClass('active').children('.more').stop().slideUp();
      }
    });
  }

 $(function() {
   accordion();
 });
}(window.jQuery, window, document));
