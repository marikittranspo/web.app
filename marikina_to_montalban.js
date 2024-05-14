let map;
let directionsService;
let directionsRenderer;
let jeepneyMarker;
let watchId;

function initMap() {
    const options = {
        center: { lat: 14.64686, lng: 121.1019 },
        zoom: 12,
        mapTypeControl: false,
        zoomControl: false,
    };

    map = new google.maps.Map(document.getElementById("map_twentyFour"), options);
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
    jeepneyMarker = new google.maps.Marker({
        map: map,
        title: "Jeepney",
        icon: {
            url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    document.getElementById("startTrackingBtn").addEventListener("click", startTracking);

    document.getElementById("stopTrackingBtn").addEventListener("click", stopTracking);

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
           { location: { lat: 14.66276, lng:121.10612 } },
           { location: { lat: 14.66429, lng: 121.1066 } },
           { location: { lat: 14.66712, lng: 121.10751 } },
           { location: { lat: 14.66903, lng: 121.10812 } },
           { location: { lat: 14.66978, lng: 121.10835 } },
        ]
    };

    directionsService.route(route, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            simulateJeepneyMovement(result.routes[0].overview_path);
        } else {
            console.error("Directions request failed due to " + status);
        }
    });
}

function startTracking() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
                const userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                updateJeepneyPosition(userLocation);
            },
            (error) => {
                console.error("Error getting location:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

function stopTracking() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function updateJeepneyPosition(position) {
    jeepneyMarker.setPosition(position);
    document.getElementById("jeepneyPosition").textContent = position.lat() + ", " + position.lng();
}

function simulateJeepneyMovement(path) {
    let index = 0;
    setInterval(() => {
        if (index === path.length) {
            index = 0; // Loop back to the beginning of the path
        }
        updateJeepneyPosition(path[index]);
        index++;
    }, 2000); // Update every 2 seconds (adjust as needed)
}