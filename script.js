const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".trip-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("is-hidden", selected !== "all" && !tags.includes(selected));
    });
  });
});

const mapElement = document.querySelector("#travel-map");

if (mapElement && window.L) {
  const trips = [
    {
      title: "Bałkany",
      coords: [42.7, 20.8],
      url: "https://klosiezwiedzaja.blogspot.com/2022/08/bakany-trip.html",
    },
    {
      title: "Lizbona",
      coords: [38.7223, -9.1393],
      url: "https://klosiezwiedzaja.blogspot.com/2022/03/lizbona.html",
    },
    {
      title: "Rzym",
      coords: [41.9028, 12.4964],
      url: "https://klosiezwiedzaja.blogspot.com/2021/12/rzym.html",
    },
    {
      title: "Północne Włochy",
      coords: [45.4642, 9.19],
      url: "https://klosiezwiedzaja.blogspot.com/2021/09/ponocne-wochy.html",
    },
    {
      title: "Zachód USA",
      coords: [37.1, -113.6],
      url: "https://klosiezwiedzaja.blogspot.com/2019/11/zachod-usa-w-trzy-tygodnie.html",
    },
    {
      title: "Bułgaria, Rumunia, Serbia i nie tylko",
      coords: [44.2, 24.8],
      url: "https://klosiezwiedzaja.blogspot.com/2019/08/bugaria-rumunia-serbia-i-nie-tylko.html",
    },
    {
      title: "Bawaria & Czechy",
      coords: [49.4, 12.1],
      url: "https://klosiezwiedzaja.blogspot.com/2018/06/bawaria-czechy.html",
    },
  ];

  const map = L.map(mapElement, {
    attributionControl: true,
    scrollWheelZoom: false,
    worldCopyJump: true,
  }).setView([34, 5], 2);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 7,
  }).addTo(map);

  const pinIcon = L.divIcon({
    className: "map-marker",
    html: '<span class="map-pin"></span>',
    iconAnchor: [16, 32],
    iconSize: [32, 32],
  });

  const markers = trips.map((trip) => {
    const marker = L.marker(trip.coords, { icon: pinIcon, title: trip.title }).addTo(map);
    marker.bindPopup(trip.title);
    marker.on("click", () => {
      window.location.href = trip.url;
    });
    return marker;
  });

  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.28), { maxZoom: 3 });
}
