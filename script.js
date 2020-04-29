var map;
function initMap()
{
	var POST={lat:41.836349, lng:-87.625969};
	var BOG={lat:41.835584, lng:-87.628250};
	var MSV={lat:41.835534, lng:-87.624167};
	var latlang={lat:4.710859,lng:-74.074955};
	map=new google.maps.Map(
		document.getElementById('map'),
		{center: new google.maps.LatLng(41.834977, -87.627245), zoom:17});
	var POSTmarker= new google.maps.Marker({position:POST,map:map});
	var BOGmarker= new google.maps.Marker({position:BOG,map:map});
	
	marker = new google.maps.Marker({
		map:map,
		draggable:true,
		animation:google.maps.Animation.BOUNCE,
		position:{lat:41.835534, lng:-87.624167},
		icon:'image/home.png'
});
}
