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
    //bulgaria, rumunia, serbia
    {
      title: "Koszyce",
      coords: [48.7164, 21.2611],
      url: "posts/bulgaria-rumunia-serbia.html#koszyce",
    },
    {
      title: "Sighișoara",
      coords: [46.2214, 24.7928],
      url: "posts/bulgaria-rumunia-serbia.html#sighisoara",
    },
    {
      title: "Braszów",
      coords: [45.6579, 25.6012],
      url: "posts/bulgaria-rumunia-serbia.html#braszow",
    },
    {
      title: "Bukareszt",
      coords: [44.4397, 26.0963],
      url: "posts/bulgaria-rumunia-serbia.html#bukareszt",
    },
    {
      title: "Skalne cerkwie w Iwanowie",
      coords: [43.7167, 25.9667],
      url: "posts/bulgaria-rumunia-serbia.html#skalne-cerkwie",
    },
    {
      title: "Ruiny twierdzy Czerwen",
      coords: [43.6207, 26.0176],
      url: "posts/bulgaria-rumunia-serbia.html#czerwen",
    },
    {
      title: "Kamienny las",
      coords: [43.2283, 27.7059],
      url: "posts/bulgaria-rumunia-serbia.html#warna",
    },
    {
      title: "Warna",
      coords: [43.2141, 27.9147],
      url: "posts/bulgaria-rumunia-serbia.html#warna",
    },
    {
      title: "Nesebyr",
      coords: [42.6598, 27.7360],
      url: "posts/bulgaria-rumunia-serbia.html#nesebyr-burgas",
    },
    {
      title: "Burgas",
      coords: [42.5048, 27.4626],
      url: "posts/bulgaria-rumunia-serbia.html#burgas-burgas",
    },
    {
      title: "Skansen w Etar",
      coords: [42.8040, 25.3493],
      url: "posts/bulgaria-rumunia-serbia.html#skansen-w-etar",
    },
    {
      title: "Komunistyczny monument w Buzłudży",
      coords: [42.7358, 25.3938],
      url: "posts/bulgaria-rumunia-serbia.html#buzludza",
    },
    {
      title: "Płowdiw",
      coords: [42.1354, 24.7453],
      url: "posts/bulgaria-rumunia-serbia.html#plowdiw",
    },
    {
      title: "Sofia",
      coords: [42.6977, 23.3219],
      url: "posts/bulgaria-rumunia-serbia.html#sofia",
    },
    {
      title: "Nisz",
      coords: [43.3209, 21.8958],
      url: "posts/bulgaria-rumunia-serbia.html#nisz",
    },
    {
      title: "Belgrad",
      coords: [44.7866, 20.4489],
      url: "posts/bulgaria-rumunia-serbia.html#belgrad",
    },
    {
      title: "Ökocentrum Tisza-Tavi",
      coords: [47.6460, 20.6614],
      url: "posts/bulgaria-rumunia-serbia.html#okocentrum",
    },
    {
      title: "Lillafüred",
      coords: [48.1006, 20.6254],
      url: "posts/bulgaria-rumunia-serbia.html#lillafured",
    },
    {
      title: "Jaskinia Domica",
      coords: [48.4778, 20.4698],
      url: "posts/bulgaria-rumunia-serbia.html#jaskinia-domica",
    },
    {
      title: "Dobszyńska Jaskinia Lodowa",
      coords: [48.8719, 20.2947],
      url: "posts/bulgaria-rumunia-serbia.html#jaskinia-domica",
    },
    //bawaria i czechy
    {
      title: "Skalne Miasto w Adrspach",
      coords: [50.6164, 16.1205],
      url: "posts/bawaria-czechy.html#skalne-miasto",
    },
    {
      title: "Drezno",
      coords: [51.0504, 13.7373],
      url: "posts/bawaria-czechy.html#drezno",
    },
    {
      title: "Norymberga",
      coords: [49.4521, 11.0767],
      url: "posts/bawaria-czechy.html#norymberga",
    },
    {
      title: "Monachium",
      coords: [48.1351, 11.582],
      url: "posts/bawaria-czechy.html#monachium",
    },
    {
      title: "Zamek Neuschwanstein",
      coords: [47.5576, 10.7498],
      url: "posts/bawaria-czechy.html#neuschwanstein",
    },
    {
      title: "Prien am Chiemsee",
      coords: [47.856, 12.3469],
      url: "posts/bawaria-czechy.html#chiemsee",
    },
    {
      title: "Pałac Hluboka",
      coords: [49.0523, 14.4343],
      url: "posts/bawaria-czechy.html#hluboka",
    },
    {
      title: "Ołomuniec",
      coords: [49.5938, 17.2509],
      url: "posts/bawaria-czechy.html#olomuniec",
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
    iconAnchor: [9, 18],
    iconSize: [18, 18],
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
