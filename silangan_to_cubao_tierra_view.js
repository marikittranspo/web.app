let map;
let directionsService;
let directionsRenderer;
let watchId;

const options = {
    center: { lat: 14.64686, lng: 121.1019 },
    zoom: 12,
    mapTypeControl: false,
    zoomControl: false,
};

function initMap1() {
    const map1 = new google.maps.Map(document.getElementById("map1"), options);
}

function initMap1() {
    const map1 = new google.maps.Map(document.getElementById("map1"), options);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true // Suppresses the rendering of markers for waypoints
    });
    directionsRenderer.setMap(map1);

    const route = {
        origin: { lat: 14.63228, lng: 121.0802 },
        destination: { lat: 14.6543, lng: 121.13358 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: new google.maps.LatLng(14.63289, 121.08273) },
            { location: new google.maps.LatLng(14.63418, 121.08633) },
            { location: new google.maps.LatLng(14.63622, 121.09093) },
            { location: new google.maps.LatLng(14.63616, 121.09133) },
            { location: new google.maps.LatLng(14.63587, 121.09496) },
            { location: new google.maps.LatLng(14.63614, 121.09732) },
            { location: new google.maps.LatLng(14.63746, 121.09888) },
            { location: new google.maps.LatLng(14.6397, 121.09992) },
            { location: new google.maps.LatLng(14.63992, 121.09943) },
            { location: new google.maps.LatLng(14.64197, 121.1004) },
            { location: new google.maps.LatLng(14.6442, 121.10144) },
            { location: new google.maps.LatLng(14.64645, 121.10251) },
            { location: new google.maps.LatLng(14.65032, 121.10435) },
            { location: new google.maps.LatLng(14.65062, 121.10448) },
            { location: new google.maps.LatLng(14.65088, 121.10459) },
            { location: new google.maps.LatLng(14.65074, 121.10768) },
            { location: new google.maps.LatLng(14.65091, 121.1083) },
            { location: new google.maps.LatLng(14.651, 121.11032) },
            { location: new google.maps.LatLng(14.65091, 121.11132) },
            { location: new google.maps.LatLng(14.65067, 121.11214) },
            { location: new google.maps.LatLng(14.65049, 121.11712) },
            { location: new google.maps.LatLng(14.6504, 121.1187) },
            { location: new google.maps.LatLng(14.65319, 121.1187) },
            { location: new google.maps.LatLng(14.65393, 121.11957) },
            { location: new google.maps.LatLng(14.65566, 121.12223) },
        ]
    };

    directionsService.route(route, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);

            // Display markers for origin and destination
            const originMarker = new google.maps.Marker({
                position: route.origin,
                map: map1,
                title: 'Origin',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            const destinationMarker = new google.maps.Marker({
                position: route.destination,
                map: map1,
                title: 'Destination',
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


function initMap2() {
    const map2 = new google.maps.Map(document.getElementById("map2"), options);
}

function initMap2() {
    const map2 = new google.maps.Map(document.getElementById("map2"), options);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true // Suppresses the rendering of markers for waypoints
    });
    directionsRenderer.setMap(map2);

    const route = {
        origin: { lat: 14.6543, lng: 121.13358 },
        destination: { lat: 14.63228, lng: 121.0802 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: new google.maps.LatLng(14.65835, 121.12809) },
            { location: new google.maps.LatLng(14.65817, 121.12629) },
            { location: new google.maps.LatLng(14.65603, 121.12404) },
            { location: new google.maps.LatLng(14.65563, 121.12206) },
            { location: new google.maps.LatLng(14.65404, 121.1197) },
            { location: new google.maps.LatLng(14.65333, 121.11885) },
            { location: new google.maps.LatLng(14.65064, 121.11716) },
            { location: new google.maps.LatLng(14.65079, 121.11209) },
            { location: new google.maps.LatLng(14.65091, 121.11132) },
            { location: new google.maps.LatLng(14.65074, 121.10768) },
            { location: new google.maps.LatLng(14.65032, 121.10613) },
            { location: new google.maps.LatLng(14.64981, 121.10532) },
            { location: new google.maps.LatLng(14.64814, 121.10454) },
            { location: new google.maps.LatLng(14.64604, 121.10355) },
            { location: new google.maps.LatLng(14.64671, 121.10183) },
            { location: new google.maps.LatLng(14.64671, 121.10183) },
            { location: new google.maps.LatLng(14.63686, 121.09733) },
            { location: new google.maps.LatLng(14.63587, 121.09495) },
            { location: new google.maps.LatLng(14.63616, 121.09157) },
            { location: new google.maps.LatLng(14.63527, 121.08855) },
            { location: new google.maps.LatLng(14.63418, 121.08633) },
            { location: new google.maps.LatLng(14.63289, 121.08273) },
            { location: new google.maps.LatLng(14.63265, 121.08194) },
        ]
    };

    directionsService.route(route, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);

            // Display markers for origin and destination
            const originMarker = new google.maps.Marker({
                position: route.origin,
                map: map2,
                title: 'Origin',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            const destinationMarker = new google.maps.Marker({
                position: route.destination,
                map: map2,
                title: 'Destination',
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function initMap() {
    initMap1(); // Initialize first map
    initMap2(); // Initialize second map
}

function goBack() {
    window.history.back();
}
