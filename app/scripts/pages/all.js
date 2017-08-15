(function($, window, document) {

  function mainnav() {
    $('header .menu').on('click', function() {
      $('header, nav').stop().toggleClass('open');
    });

    $('nav p').on('click', function() {
      $('.sub').stop().slideUp();
      $(this).next('.sub').stop().slideToggle();
    });

    $('header, nav').on('click', function(e) {
      e.stopPropagation();
    });

    $('html').on('click', function() {
      $('header, nav').stop().removeClass('open');
      $('.sub').stop().slideUp();
    });

    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos = 5;

      if(y_scroll_pos > scroll_pos) {
        $('header').addClass('scroll');
      } else {
        $('header').removeClass('scroll');
      }
    });
  }

 $(function() {
   mainnav();
 });
}(window.jQuery, window, document));
