(function($, window, document) {

  function mainnav() {
    $('.menu').on('click', function() {
      $(this).children().toggleClass('open');
    });
  }

 $(function() {
   mainnav();
 });
}(window.jQuery, window, document));
