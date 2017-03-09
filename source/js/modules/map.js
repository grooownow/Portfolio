
function initMap() {
    var myLatLng = {lat: 55.653514, lng: 37.982237};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 55.650288, lng: 37.937595},
        styles:
            [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#4c4d4b"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dde3d5"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c7d1b8"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c7d1b8"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#919191"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c7d1b8"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#86a77a"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b3b3b3"
                        }
                    ]
                }
            ]
    });

    var image = 'assets/images/sprite/map_marker.svg';
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

}