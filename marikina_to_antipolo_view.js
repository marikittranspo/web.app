let map;
let directionsService;
let directionsRenderer;
let watchId;

const options = {
    center: { lat: 14.63382, lng: 121.10169 },
    zoom: 15,
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
        origin: { lat: 14.63371, lng: 121.09971 },
        destination: { lat: 14.63413, lng: 121.10614 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: { lat: 14.63257, lng: 121.09964 } },
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
        origin: { lat: 14.63409, lng: 121.1062 },
        destination:  { lat: 14.63371, lng: 121.09971 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: { lat: 14.63279, lng: 121.10147 } },
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
