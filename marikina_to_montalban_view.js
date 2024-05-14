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
        origin: { lat: 14.63446, lng: 121.09751 },
        destination: { lat: 14.67249, lng: 121.10918 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: { lat: 14.63669, lng: 121.09732 } },
            { location: { lat: 14.63645, lng: 121.09613 } },
            { location: { lat: 14.64101, lng: 121.0942 } },
            { location: { lat: 14.64183, lng: 121.09411 } },
            { location: { lat: 14.64263, lng: 121.09477} },
            { location: { lat: 14.64515, lng: 121.09635 } },
            { location: { lat: 14.646, lng: 121.09662 } },
            { location: { lat: 14.64806, lng: 121.09719} },
            { location: { lat: 14.64887, lng: 121.09769 }},
            { location: { lat: 14.64937, lng: 121.10009} },
            { location: { lat: 14.64958, lng: 121.10184 } },
            { location: { lat: 14.65085, lng: 121.10315} },
            { location: { lat: 14.65298, lng: 121.10383 } },
            { location: { lat: 14.65418, lng: 121.10388 } },
            { location: { lat: 14.65747, lng: 121.10416 } },
            { location: { lat: 14.66276, lng: 121.10612 } },
            { location: { lat: 14.66429, lng: 121.1066 } },
            { location: { lat: 14.66712, lng: 121.10751 } },
            { location: { lat: 14.66903, lng: 121.10812 } },
            { location: { lat: 14.66978, lng: 121.10835 } }
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
        origin: { lat: 14.67248, lng: 121.10913 },
        destination: { lat: 14.63274, lng: 121.09721 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: { lat: 14.66961, lng: 121.10829 } },
            { location: { lat: 14.66716, lng: 121.10752 } },
            { location: { lat: 14.66513, lng: 121.10688 } },   
            { location: { lat: 14.66442, lng: 121.10664 } },
            { location: { lat: 14.66429, lng: 121.1066 } },
            { location: { lat: 14.663, lng: 121.1062 } },
            { location: { lat: 14.66003, lng: 121.1049 } },
            { location: { lat: 14.65738, lng: 121.10367 } },
            { location: { lat: 14.65579, lng: 121.10343 } },
            { location: { lat: 14.65329, lng: 121.10314 } },
            { location: { lat: 14.65046, lng: 121.10255 } },
            { location: { lat: 14.6498, lng: 121.10214 } },
            { location: { lat: 14.64919, lng: 121.09815 } },
            { location: { lat: 14.64891, lng: 121.09769 } },    
            { location: { lat: 14.64805, lng: 121.09719 } },
            { location: { lat: 14.64575, lng: 121.09656 } },
            { location: { lat: 14.6417, lng: 121.09408 } },
            { location: { lat: 14.6409, lng: 121.09418 } },
            { location: { lat: 14.63836, lng: 121.09409 } },
            { location: { lat: 14.63634, lng: 121.0937 } },
            { location: { lat: 14.63589, lng: 121.09352 } },
            { location: { lat: 14.63537, lng: 121.09434 } },
            { location: { lat: 14.6341, lng: 121.09492 } },
            { location: { lat: 14.63253, lng: 121.09517 } }
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
