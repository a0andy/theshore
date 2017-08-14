(function($, window, document) {

  function mainnav() {
    $('header').on('click', function() {
      $('header, nav').stop().toggleClass('open');
    });

    $('nav p').on('click', function() {
      $('.sub').stop().slideUp();
        $(this).next('.sub').stop().slideToggle();
    });
  }

 $(function() {
   mainnav();
 });
}(window.jQuery, window, document));
