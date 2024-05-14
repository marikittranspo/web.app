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
        origin: { lat: 14.67249, lng: 121.10918 },
        destination: { lat: 14.62105, lng: 121.10191 },
        travelMode: 'DRIVING',
        waypoints: [
            { location: { lat: 14.66961, lng: 121.10829 } },
            { location: { lat: 14.66716, lng: 121.10752 } },
            { location: { lat: 14.66513, lng: 121.10688 } },   
            { location: { lat: 14.66442, lng: 121.10664 } },
            { location: { lat: 14.66429, lng: 121.1066 } },
            { location: { lat: 14.663, lng: 121.1062 } },
            { location: { lat: 14.6618, lng: 121.1094 } },
            { location: { lat: 14.66054, lng: 121.10952 } },
            { location: { lat: 14.64066, lng: 121.10355 } },

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
        origin: { lat: 14.62155, lng: 121.10266 },
        destination: { lat: 14.67249, lng: 121.10918 },
        travelMode: 'DRIVING',
        waypoints: [
        { location: { lat: 14.65095, lng: 121.10481 } },
        { location: { lat: 14.66029, lng: 121.10941 } },
        { location: { lat: 14.6621, lng: 121.11013 } },
        { location: { lat: 14.66226, lng: 121.10957 } },
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
