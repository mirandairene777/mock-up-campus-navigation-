const trackingStateEl = document.getElementById("trackingState");
const speedStateEl = document.getElementById("speedState");
const lastUpdateEl = document.getElementById("lastUpdate");
const tripInfoEl = document.getElementById("tripInfo");
const modeChipEl = document.getElementById("modeChip");
const appShellEl = document.getElementById("appShell");
const toastEl = document.getElementById("toast");
const placeListEl = document.getElementById("placeList");
const placeCountEl = document.getElementById("placeCount");
const detailsCardEl = document.getElementById("detailsCard");
const detailsTitleEl = document.getElementById("detailsTitle");
const detailsDescEl = document.getElementById("detailsDesc");
const detailsCategoryEl = document.getElementById("detailsCategory");
const detailsCoordsEl = document.getElementById("detailsCoords");
const closeDetailsBtn = document.getElementById("closeDetailsBtn");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const locateBtn = document.getElementById("locateBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const clearRouteBtn = document.getElementById("clearRouteBtn");
const fitRouteBtn = document.getElementById("fitRouteBtn");
const startTrackingBtn = document.getElementById("startTrackingBtn");
const stopTrackingBtn = document.getElementById("stopTrackingBtn");
const themeBtn = document.getElementById("themeBtn");
const mobilePanelBtn = document.getElementById("mobilePanelBtn");
const sidePanelEl = document.querySelector(".side-panel");

const defaultLatLng = [14.5995, 120.9842];
const mapPlaces = [
  { id: "main", name: "Main Building", category: "Administrative", description: "Main offices and student services", lat: 14.6002, lng: 120.9852 },
  { id: "ccs", name: "College of Computer Studies", category: "Academic", description: "BSIT and BSCS classes and labs", lat: 14.5992, lng: 120.9838 },
  { id: "library", name: "Library", category: "Facility", description: "Study hall, references, and digital resources", lat: 14.5998, lng: 120.9846 },
  { id: "gym", name: "Gymnasium", category: "Recreational", description: "Sports and events venue", lat: 14.5989, lng: 120.9857 },
  { id: "canteen", name: "Cafeteria", category: "Service", description: "Food stalls and student dining area", lat: 14.5993, lng: 120.9855 }
];
const map = L.map("map", {
  zoomControl: false
}).setView(defaultLatLng, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

mapPlaces.forEach((place) => {
  const marker = L.marker([place.lat, place.lng]).addTo(map);
  marker.bindPopup(`<strong>${place.name}</strong><br>${place.category}`);
  marker.on("click", () => showPlaceDetails(place));
  placeMarkers.set(place.id, marker);
});

const liveIcon = L.divIcon({
  className: "live-dot-icon",
  html: `<div style="
    width:18px;height:18px;border-radius:50%;
    background:#1a73e8;border:3px solid #fff;
    box-shadow:0 0 0 6px rgba(26,115,232,.20);
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

let liveMarker = L.marker(defaultLatLng, { icon: liveIcon }).addTo(map);
let userPath = [defaultLatLng];
let trailLine = L.polyline(userPath, {
  color: "#1a73e8",
  weight: 4,
  opacity: 0.85
}).addTo(map);

let routeLine = null;
let destinationMarker = null;
let watchId = null;
let currentLatLng = defaultLatLng;
let mockTimer = null;
let toastTimer = null;
const placeMarkers = new Map();

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function setModeChip(mode) {
  modeChipEl.textContent = `Mode: ${mode}`;
}

function showPlaceDetails(place) {
  detailsTitleEl.textContent = place.name;
  detailsDescEl.textContent = place.description;
  detailsCategoryEl.textContent = place.category;
  detailsCoordsEl.textContent = `${place.lat.toFixed(4)}, ${place.lng.toFixed(4)}`;
  detailsCardEl.hidden = false;
}

function renderPlaceList() {
  placeListEl.innerHTML = "";
  mapPlaces.forEach((place) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "place-item";
    item.innerHTML = `<h4>${place.name}</h4><p>${place.description}</p>`;
    item.addEventListener("click", () => {
      map.setView([place.lat, place.lng], 17);
      showPlaceDetails(place);
      const marker = placeMarkers.get(place.id);
      if (marker) marker.openPopup();
      toast(`Opened ${place.name}`);
    });
    placeListEl.appendChild(item);
  });
  placeCountEl.textContent = String(mapPlaces.length);
}

function setStatus(track, speedKmh) {
  trackingStateEl.textContent = track;
  speedStateEl.textContent = Number.isFinite(speedKmh)
    ? `${speedKmh.toFixed(1)} km/h`
    : "-- km/h";
  lastUpdateEl.textContent = new Date().toLocaleTimeString();
}

function updateTripText(extra = "") {
  const [lat, lng] = currentLatLng;
  tripInfoEl.textContent = `Lat ${lat.toFixed(5)}, Lng ${lng.toFixed(5)}${extra}`;
}

function moveLiveMarker(lat, lng, speedMps = 0) {
  currentLatLng = [lat, lng];
  liveMarker.setLatLng(currentLatLng);
  userPath.push(currentLatLng);
  trailLine.setLatLngs(userPath);
  setStatus("Live", speedMps * 3.6);
  updateTripText();
}

function mockMovement() {
  if (mockTimer) return;
  setStatus("Mock mode", NaN);
  setModeChip("Mock");
  updateTripText(" (simulated tracking)");

  mockTimer = setInterval(() => {
    const [lat, lng] = currentLatLng;
    const nextLat = lat + (Math.random() - 0.5) * 0.0012;
    const nextLng = lng + (Math.random() - 0.5) * 0.0012;
    moveLiveMarker(nextLat, nextLng, 3 + Math.random() * 8);
  }, 2500);
}

function startLiveTracking() {
  if (mockTimer) {
    clearInterval(mockTimer);
    mockTimer = null;
  }

  if (!("geolocation" in navigator)) {
    trackingStateEl.textContent = "No geolocation API";
    toast("No geolocation support, using mock.");
    mockMovement();
    return;
  }

  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude, longitude, speed } = pos.coords;
      moveLiveMarker(latitude, longitude, speed || 0);
      map.panTo(currentLatLng);
      setModeChip("Live");
    },
    () => {
      trackingStateEl.textContent = "Permission denied, using mock";
       toast("Location denied. Switched to mock mode.");
      mockMovement();
    },
    {
      enableHighAccuracy: true,
      maximumAge: 3000,
      timeout: 8000
    }
  );
  toast("Live tracking started.");
}

function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  if (mockTimer) {
    clearInterval(mockTimer);
    mockTimer = null;
  }
  setStatus("Paused", NaN);
  setModeChip("Paused");
  toast("Tracking paused.");
}

function clearRoute() {
  if (routeLine) {
    map.removeLayer(routeLine);
    routeLine = null;
  }
  if (destinationMarker) {
    map.removeLayer(destinationMarker);
    destinationMarker = null;
  }
  updateTripText();
  toast("Route cleared.");
}

function fitRoute() {
  if (!routeLine) {
    map.setView(currentLatLng, 16);
    toast("Centered on live marker.");
    return;
  }
  map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
  toast("Fitted route to view.");
}

map.on("click", (event) => {
  const destination = [event.latlng.lat, event.latlng.lng];

  if (destinationMarker) {
    destinationMarker.setLatLng(destination);
  } else {
    destinationMarker = L.marker(destination).addTo(map);
  }

  const points = [currentLatLng, destination];
  if (routeLine) {
    routeLine.setLatLngs(points);
  } else {
    routeLine = L.polyline(points, {
      color: "#0b57d0",
      weight: 5,
      dashArray: "8, 10"
    }).addTo(map);
  }

  const distanceKm =
    map.distance(L.latLng(currentLatLng), L.latLng(destination)) / 1000;
  const etaMin = Math.max(2, Math.round((distanceKm / 35) * 60));
  updateTripText(` | ${distanceKm.toFixed(2)} km away, ETA ~${etaMin} min`);
});

async function searchPlace() {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    searchBtn.disabled = true;
    searchBtn.textContent = "Finding...";
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    if (!Array.isArray(data) || !data.length) {
      tripInfoEl.textContent = "No result found for your search.";
      toast("No search results.");
      return;
    }
    const first = data[0];
    const lat = Number(first.lat);
    const lon = Number(first.lon);
    map.setView([lat, lon], 14);
    L.marker([lat, lon]).addTo(map).bindPopup(first.display_name).openPopup();
    toast("Location found.");
  } catch (error) {
    tripInfoEl.textContent = "Search failed. Check internet connection.";
    toast("Search failed.");
  } finally {
    searchBtn.disabled = false;
    searchBtn.textContent = "Search";
  }
}

searchBtn.addEventListener("click", searchPlace);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchPlace();
});

locateBtn.addEventListener("click", () => {
  map.setView(currentLatLng, 16);
  toast("Centered on current location.");
});

zoomInBtn.addEventListener("click", () => map.zoomIn());
zoomOutBtn.addEventListener("click", () => map.zoomOut());
clearRouteBtn.addEventListener("click", clearRoute);
fitRouteBtn.addEventListener("click", fitRoute);
startTrackingBtn.addEventListener("click", startLiveTracking);
stopTrackingBtn.addEventListener("click", stopTracking);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("map-theme", isDark ? "dark" : "light");
  toast(isDark ? "Dark mode on" : "Light mode on");
});

mobilePanelBtn.addEventListener("click", () => {
  sidePanelEl.classList.toggle("open");
});
closeDetailsBtn.addEventListener("click", () => {
  detailsCardEl.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    event.preventDefault();
    searchInput.focus();
  } else if (event.key.toLowerCase() === "d") {
    themeBtn.click();
  } else if (event.key === "Escape") {
    sidePanelEl.classList.remove("open");
  }
});

window.addEventListener("beforeunload", () => {
  stopTracking();
});

const storedTheme = localStorage.getItem("map-theme");
if (storedTheme === "dark") {
  document.body.classList.add("dark");
}

startLiveTracking();
updateTripText();
renderPlaceList();
