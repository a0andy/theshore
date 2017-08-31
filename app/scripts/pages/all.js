(function($, window, document) {

  function mainnav() {
    $('header .menu').on('click', function() {
      $('.reservationform').stop().fadeOut();
      $('.reservationbtn').stop().removeClass('open');

      $('header').stop().toggleClass('open');
      $('nav').stop().fadeToggle();
    });

    $('.reservationbtn, header .calendar').on('click', function(e) {
      $('nav').stop().fadeOut();
      $('header').stop().removeClass('open');

      $('.reservationform').stop().fadeToggle();
      $('.reservationbtn').stop().toggleClass('open');

      e.preventDefault();
    });

    $('nav p').on('click', function() {
      $('.sub').stop().slideUp();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active').siblings('p').removeClass('active');
      } else {
        $(this).addClass('active').siblings('p').removeClass('active');
      }
      
      $(this).next('.sub').stop().slideToggle();
    });

    $('header, nav, .calendar, .reservationform, .ui-datepicker').on('click', function(e) {
      e.stopPropagation();
    });

    $('html').on('click', function() {
      $('header, .reservationbtn').stop().removeClass('open');
      $('.sub').stop().slideUp();
      $('nav, .reservationform').stop().fadeOut();
      $('nav p').removeClass('active');
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

  function scrollactive() {
    var controller = new ScrollMagic.Controller();

    // loop through all elements
    $('.scrollactive').each(function() {

      // build a scene
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -250
      })
      .setClassToggle(this, "active")
      .addTo(controller);

      var reverse = scene.reverse();
      scene.reverse(false);
    });
  }

  function footerheight() {
    $('footer .footeritem.toprow').matchHeight();
    $('footer .footeritem.bottomrow').matchHeight();
  }

  function password() {
    $('#passbutton').on('click', function() {
      if ($('#passfield').val().toLowerCase() == 'entertheshore') {
        $('body').removeClass('hide');
        $('#passform').hide();
      } else {
        alert('wrong password');
      }
    });
  }

  function calendar() {
    $('.datepicker').each(function() {
      $(this).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        maxDate: "+6M +10D",
        dateFormat: 'dd-mm-yy'
      });
    });
  }

 $(function() {
   mainnav();
   headerform();
   footerheight();
   scrollactive();
   calendar();
   password();
 });
}(window.jQuery, window, document));
