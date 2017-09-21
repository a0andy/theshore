(function($, window, document) {

  function vouchercta() {
    $('.m-vouchercta form label').on('click', function() {
      $('.m-vouchercta form label').removeClass('active');
      $(this).addClass('active');
    });
  }

 $(function() {
   vouchercta();
 });
}(window.jQuery, window, document));
