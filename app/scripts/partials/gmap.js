(function($, window, document) {

  function initMap() {
    var directionDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;
    var google;
    var maps;

    function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var UK = new google.maps.LatLng(54.5728,-3.1139);
      var myOptions = {
        zoom:5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: UK
      };

      map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    }

    function calcRoute() {
      var start = document.getElementById("start").value;
      var end = document.getElementById("end").value;
      var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }
  }

 $(function() {
   initMap();
 });
}(window.jQuery, window, document));
