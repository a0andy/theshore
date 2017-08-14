(function($, window, document) {

  function mainnav() {
    $('header').on('click', function() {
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
  }

 $(function() {
   mainnav();
 });
}(window.jQuery, window, document));
