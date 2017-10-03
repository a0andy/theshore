(function($, window, document) {

  function gmap() {
    var directionDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    directionsDisplay = new google.maps.DirectionsRenderer();
    var UK = new google.maps.LatLng(56.005184,-4.5942377);
    var myOptions = {
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: UK
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));

    $('#getdirections').on('click', function(e) {
      e.preventDefault();

      var start = document.getElementById("start").value;
      var end = 'g83 8ql';
      var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          $('.form input').removeClass('error');
          $('.directionmsg').hide();
        } else {
          $('.form input').addClass('error');
        }
      });
    });
  }

 $(function() {
   gmap();
 });
}(window.jQuery, window, document));
