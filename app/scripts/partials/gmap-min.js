!function(e,o,n){function i(){var o,i=new google.maps.DirectionsService;directionsDisplay=new google.maps.DirectionsRenderer;var t=new google.maps.LatLng(56.005184,-4.5942377),r={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,center:t};o=new google.maps.Map(n.getElementById("map_canvas"),r),directionsDisplay.setMap(o),directionsDisplay.setPanel(n.getElementById("directionsPanel")),e("#getdirections").on("click",function(o){o.preventDefault();var t={origin:n.getElementById("start").value,destination:"g83 8ql",travelMode:google.maps.DirectionsTravelMode.DRIVING};i.route(t,function(o,n){n==google.maps.DirectionsStatus.OK?(directionsDisplay.setDirections(o),e(".form input").removeClass("error"),e(".directionmsg").hide()):e(".form input").addClass("error")})})}e(function(){i()})}(window.jQuery,window,document);