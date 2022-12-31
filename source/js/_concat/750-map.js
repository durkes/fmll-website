$(function() {
	var map = null, marker = null;
	var $map = $("#map");

	if ($map.length && typeof google !== 'undefined') {
		var coordinate = new google.maps.LatLng(38.9691029,-95.2860479);
		var mapOptions = {
			zoom: 12,
			center: coordinate,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: parseInt($map.data("scroll-wheel"), 10),
			draggable: parseInt($map.data("draggable"), 10),
			styles: [ { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#8ccaf1" } ] },{ "featureType": "poi", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels", "stylers": [ { "color": "#ffffff" }, { "visibility": "simplified" } ] } ]
		};


		map = new google.maps.Map(document.getElementById("map"),mapOptions);
		marker = new google.maps.Marker({
			position: coordinate,
			map: map,
			icon: new google.maps.MarkerImage("images/map_pointer.png", new google.maps.Size(38, 48), null, new google.maps.Point(18, 48))
		});
	}

	$(window).on('resize orientationchange', function () {
		if(map !== null) {
			map.setCenter(coordinate);
		}
	});
});