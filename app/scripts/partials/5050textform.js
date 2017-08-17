(function($, window, document) {

  function formdatepicker() {
    $( "#5050datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: 0,
      maxDate: "+6M +10D",
      dateFormat: 'dd-mm-yy'
    });
  }

 $(function() {
   formdatepicker();
 });
}(window.jQuery, window, document));
