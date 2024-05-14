const jeepneyRoutes = [
  "Marikina - Montalban",
  "Montalban - Cubao",
  "Parang - Cubao (Modesta)",
  "Silangan - Cubao (Via AFP Housing)",
  "Silangan - Cubao (Via Tierra Monte)",
  "Commonwealth - Q.Plaza",
  "Parang - Marikina (Molave)",
  "Parang - Marikina (Tumana)",
  "Parang - Stop&Shop",
  "Parang - Cubao (Philstress)",
  "Parang - Stop & Shop",
  "SSS Village - Cubao ",
  "Calumpang - Cubao",
  "Marikina - Paenaan",
  "Marikina - Antipolo",
  "Marikina - Mambugan",
  "Marikina - Bagong Nayon II",
  "Marikina - Pasig",
];

const searchBar = document.getElementById("search-bar");
const resultsList = document.getElementById("results");

function filterRoutes(searchTerm) {
  const filteredRoutes = jeepneyRoutes.filter(route =>
    route.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredRoutes;
}

function displayResults(routes) {
  resultsList.innerHTML = "";
  if (routes.length === 0) {
    resultsList.innerHTML = "<li>No Results Found</li>";
  } else {
    routes.forEach(route => {
      const listItem = document.createElement("li");
      listItem.textContent = route;
      listItem.addEventListener("click", function() {
        window.location.href = "jeepney.html" + route;
      });
      resultsList.appendChild(listItem);
    });
  }
}

searchBar.addEventListener("input", function() {
  const searchTerm = searchBar.value;
  const filtered = filterRoutes(searchTerm);
  displayResults(filtered);
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-bar');
  const resultsList = document.getElementById('results'); 
});
