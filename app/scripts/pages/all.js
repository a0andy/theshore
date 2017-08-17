(function($, window, document) {

  function mainnav() {
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

  function headerform() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: 0,
      maxDate: "+6M +10D",
      dateFormat: 'dd-mm-yy'
    });

    $('.reservationform .restype').on('change', function() {
      var resType = $(".reservationform .restype option:checked").val();

      if ((resType == 'wedding') || (resType == 'conferences')) {
        $('.reservationform .extra-form').fadeIn();
        $('.reservationform .link').hide();
      } else {
        $('.reservationform .link').hide();
        $('.reservationform .extra-form').hide();
        showbtn = '.' + resType;
        $(showbtn).fadeIn();
      }
    });
  }

  function footerheight() {
    $('footer .footeritem.toprow').matchHeight();
    $('footer .footeritem.bottomrow').matchHeight();
  }

 $(function() {
   mainnav();
   headerform();
   footerheight();
 });
}(window.jQuery, window, document));
