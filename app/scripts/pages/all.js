(function($, window, document) {

  function mainnav() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: 0,
      maxDate: "+6M +10D",
      dateFormat: 'dd-mm-yy'
    });

    $('header .menu').on('click', function() {
      $('.reservationform').stop().fadeOut();
      $('.reservationbtn').stop().removeClass('open');

      $('header').stop().toggleClass('open');
      $('nav').stop().fadeToggle();
    });

    $('.reservationbtn').on('click', function(e) {
      $('nav').stop().fadeOut();
      $('header').stop().removeClass('open');

      $('.reservationform').stop().fadeToggle();
      $('.reservationbtn').stop().toggleClass('open');

      e.preventDefault();
    });

    $('nav p').on('click', function() {
      $('.sub').stop().slideUp();
      $(this).next('.sub').stop().slideToggle();
    });

    $('header, nav, .reservationform, .ui-datepicker').on('click', function(e) {
      e.stopPropagation();
    });

    $('html').on('click', function() {
      $('header, .reservationbtn').stop().removeClass('open');
      $('.sub').stop().slideUp();
      $('nav, .reservationform').stop().fadeOut();
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
