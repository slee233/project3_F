/* var map;
      function initMap() {
        var mapOptions = {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
          // The below line is equivalent to writing:
          // position: new google.maps.LatLng(-34.397, 150.644)
          position: {lat: -34.397, lng: 150.644},
          map: map
        });

        // You can use a LatLng literal in place of a google.maps.LatLng object when
        // creating the Marker object. Once the Marker object is instantiated, its
        // position will be available as a google.maps.LatLng object. In this case,
        // we retrieve the marker's position using the
        // google.maps.LatLng.getPosition() method.
        var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
      }


google.maps.event.addDomListener(window, 'load', initMap);
 */
 var map;
function initMap()
{
var latlang={lat:4.710859,lng:-74.074955};
mapa=new google.maps.Map(
		document.getElementById('map'),
		{center: new google.maps.LatLng(41.835013, -87.626968), zoom:8});

var marker= new google.maps.Marker({position:latlang,map:map});

marker= new google.maps.Marker({
	map:map,
	draggable:true,
	animation:google.maps.Animation.BOUNCE,
	position:new google.maps.LatLng(6.219131, -75.566329),
//icon:'images/house6.jpg'
});
}
