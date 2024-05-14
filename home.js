let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 14.6507, lng: 121.1029 },
    zoom: 13,
  });
}

initMap();

