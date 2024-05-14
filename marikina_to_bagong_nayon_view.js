let map;
let directionsService;
let directionsRenderer;
let watchId;

const options = {
    center: { lat: 14.62902, lng: 121.1005 },
    zoom: 13,
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
        origin: { lat: 14.63241, lng: 121.09839 },
        destination: { lat: 14.62109, lng: 121.10192 },
        travelMode: 'DRIVING',
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
        origin: { lat: 14.62119, lng: 121.10193},
        destination: { lat: 14.63359, lng: 121.09782 },
        travelMode: 'DRIVING',
        waypoints: [
          { location: { lat: 14.62968, lng: 121.10121 } },
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
