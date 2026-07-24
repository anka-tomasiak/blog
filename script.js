const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".trip-card");

function getVisibleCards() {
  return Array.from(cards).filter((card) => !card.classList.contains("is-hidden"));
}

function applyFeaturedLayout() {
  const visibleCards = getVisibleCards();

  visibleCards.forEach((card) => card.classList.remove("featured"));

  visibleCards.forEach((card, index) => {
    const isFeaturedCard = index >= 3 && (index - 3) % 6 === 0;
    card.classList.toggle("featured", isFeaturedCard);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("is-hidden", selected !== "all" && !tags.includes(selected));
    });

    applyFeaturedLayout();
  });
});

applyFeaturedLayout();

const mapElement = document.querySelector("#travel-map");

if (mapElement && window.L) {
  const trips = [
    //majowka 2023
    {
      title: "Jasna Góra",
      coords: [50.8118, 19.1203],
      url: "posts/majowka23.html#poznan",
    },
    {
      title: "Poznań",
      coords: [52.4064, 16.9252],
      url: "posts/majowka23.html#poznan",
    },
    {
      title: "Parowozownia Wolsztyn",
      coords: [52.1124, 16.1125],
      url: "posts/majowka23.html#poznan",
    },
    {
      title: "Zielona Góra",
      coords: [51.9356, 15.5062],
      url: "posts/majowka23.html#zielona-gora",
    },
    {
      title: "Zamek Czocha",
      coords: [51.0302, 15.3082],
      url: "posts/majowka23.html#zielona-gora",
    },
    {
      title: "Jelenia Góra",
      coords: [50.9044, 15.7194],
      url: "posts/majowka23.html#zielona-gora",
    },
    {
      title: "Wrocław",
      coords: [51.1079, 17.0385],
      url: "posts/majowka23.html#wroclaw",
    },
    //malta
    {
      title: "Valletta",
      coords: [35.8989, 14.5146],
      url: "posts/malta.html#valletta",
    },
    {
      title: "Blue Grotto",
      coords: [35.8184, 14.4574],
      url: "posts/malta.html#blue-grotto",
    },
    {
      title: "Għar Lapsi",
      coords: [35.8250, 14.4433],
      url: "posts/malta.html#ghar-lapsi",
    },
    {
      title: "Mdina",
      coords: [35.8869, 14.4025],
      url: "posts/malta.html#mdina",
    },
    {
      title: "Rabat",
      coords: [35.8818, 14.3987],
      url: "posts/malta.html#rabat",
    },
    {
      title: "Popeye Village",
      coords: [35.9577, 14.3420],
      url: "posts/malta.html#popeye-village",
    },
    {
      title: "Red Tower",
      coords: [35.9898, 14.3434],
      url: "posts/malta.html#red-tower",
    },
    {
      title: "Klify Ta’ Ċenċ",
      coords: [36.0184, 14.2618],
      url: "posts/malta.html#klify-ta-cenc",
    },
    {
      title: "Azure Window",
      coords: [36.0471, 14.1889],
      url: "posts/malta.html#azure-window",
    },
    {
      title: "Kościół Ta' Pinu",
      coords: [36.0578, 14.2149],
      url: "posts/malta.html#kosciol-ta-pinu",
    },
    {
      title: "Marsaxlokk",
      coords: [35.8417, 14.5431],
      url: "posts/malta.html#marsaxlokk",
    },
    {
      title: "Basen św. Piotra",
      coords: [35.8410, 14.5672],
      url: "posts/malta.html#basen-sw-piotra",
    },
    {
      title: "Marsaskala",
      coords: [35.8624, 14.5677],
      url: "posts/malta.html#marsaskala",
    },
    {
      title: "Vittoriosa (Birgu)",
      coords: [35.8895, 14.5228],
      url: "posts/malta.html#vittoriosa-birgu",
    },
    {
      title: "Senglea",
      coords: [35.8873, 14.5168],
      url: "posts/malta.html#senglea",
    },
    //balkany
    {
      title: "Kopački Rit",
      coords: [45.6089, 18.8583],
      url: "posts/balkany.html#kopacki-rit",
    },
    {
      title: "Sarajewo",
      coords: [43.8563, 18.4131],
      url: "posts/balkany.html#kopacki-rit",
    },
    {
      title: "Tjentište Spomenik",
      coords: [43.6029, 18.7068],
      url: "posts/balkany.html#kopacki-rit",
    },
    {
      title: "Dragoš Sedlo i wodospad",
      coords: [43.0928, 18.9646],
      url: "posts/balkany.html#kopacki-rit",
    },
    {
      title: "Monaster Ostrog",
      coords: [42.6756, 19.0298],
      url: "posts/balkany.html#ostrog-podgorica-mesi-rozafa",
    },
    {
      title: "Podgorica",
      coords: [42.4304, 19.2594],
      url: "posts/balkany.html#ostrog-podgorica-mesi-rozafa",
    },
    {
      title: "Most Mesi",
      coords: [42.1062, 19.5357],
      url: "posts/balkany.html#ostrog-podgorica-mesi-rozafa",
    },
    {
      title: "Zamek Rozafy",
      coords: [42.0395, 19.4908],
      url: "posts/balkany.html#ostrog-podgorica-mesi-rozafa",
    },
    {
      title: "Bigorski Monaster św. Jana Chrzciciela",
      coords: [41.6948, 20.6075],
      url: "posts/balkany.html#bigorski-mavrovo-skopje",
    },
    {
      title: "Old Mavrovo Church",
      coords: [41.6546, 20.7343],
      url: "posts/balkany.html#bigorski-mavrovo-skopje",
    },
    {
      title: "Skopje",
      coords: [41.9981, 21.4254],
      url: "posts/balkany.html#bigorski-mavrovo-skopje",
    },
    {
      title: "Saloniki",
      coords: [40.6401, 22.9444],
      url: "posts/balkany.html#saloniki-meteory",
    },
    {
      title: "Meteory",
      coords: [39.7217, 21.6300],
      url: "posts/balkany.html#saloniki-meteory",
    },
    {
      title: "Ateny",
      coords: [37.9838, 23.7275],
      url: "posts/balkany.html#ateny-epidauros-nauplion",
    },
    {
      title: "Teatr w Epidauros i sanktuarium Asklepiosa",
      coords: [37.5961, 23.0753],
      url: "posts/balkany.html#ateny-epidauros-nauplion",
    },
    {
      title: "Nauplion",
      coords: [37.5673, 22.8016],
      url: "posts/balkany.html#ateny-epidauros-nauplion",
    },
    {
      title: "Mykeny",
      coords: [37.7308, 22.7546],
      url: "posts/balkany.html#mykeny-delfy",
    },
    {
      title: "Delfy",
      coords: [38.4824, 22.5010],
      url: "posts/balkany.html#mykeny-delfy",
    },
    {
      title: "Syri i Kaltër",
      coords: [39.9154, 20.1887],
      url: "posts/balkany.html#syri-kalter-berat-tirana",
    },
    {
      title: "Berat",
      coords: [40.7058, 19.9522],
      url: "posts/balkany.html#syri-kalter-berat-tirana",
    },
    {
      title: "Tirana",
      coords: [41.3275, 19.8187],
      url: "posts/balkany.html#syri-kalter-berat-tirana",
    },
    {
      title: "Wyspa Sveti Stefan",
      coords: [42.2562, 18.8969],
      url: "posts/balkany.html#kotor-herceg-novi-dubrovnik",
    },
    {
      title: "Kotor",
      coords: [42.4247, 18.7712],
      url: "posts/balkany.html#kotor-herceg-novi-dubrovnik",
    },
    {
      title: "Catholic Monastery of Saint George",
      coords: [42.4864, 18.6990],
      url: "posts/balkany.html#kotor-herceg-novi-dubrovnik",
    },
    {
      title: "Herceg Novi",
      coords: [42.4531, 18.5375],
      url: "posts/balkany.html#kotor-herceg-novi-dubrovnik",
    },
    {
      title: "Dubrownik",
      coords: [42.6507, 18.0944],
      url: "posts/balkany.html#kotor-herceg-novi-dubrovnik",
    },
    {
      title: "Park Narodowy Krka",
      coords: [43.8045, 15.9733],
      url: "posts/balkany.html#krka-plitwickie-zagreb",
    },
    {
      title: "Jeziora Plitwickie",
      coords: [44.8806, 15.6160],
      url: "posts/balkany.html#krka-plitwickie-zagreb",
    },
    {
      title: "Zagrzeb",
      coords: [45.8150, 15.9819],
      url: "posts/balkany.html#krka-plitwickie-zagreb",
    },
    {
      title: "Lizbona",
      coords: [38.7223, -9.1393],
      url: "posts/lizbona.html",
    },
    {
      title: "Rzym",
      coords: [41.9028, 12.4964],
      url: "posts/rzym.html",
    },
    //polnocne wlochy
    {
      title: "Bergamo",
      coords: [45.6983, 9.6773],
      url: "posts/wlochy-polnoc.html#bergamo",
    },
    {
      title: "Diga del Vajont",
      coords: [46.2669, 12.3244],
      url: "posts/wlochy-polnoc.html#diga-del-vajont",
    },
    {
      title: "Riva del Garda",
      coords: [45.8867, 10.8413],
      url: "posts/wlochy-polnoc.html#riva-del-garda",
    },
    {
      title: "Trydent",
      coords: [46.0748, 11.1217],
      url: "posts/wlochy-polnoc.html#trydent",
    },
    {
      title: "Lake Misurina",
      coords: [46.5814, 12.2523],
      url: "posts/wlochy-polnoc.html#lake-misurina",
    },
    {
      title: "Sentiero del Dint",
      coords: [46.2967, 12.3195],
      url: "posts/wlochy-polnoc.html#sentiero-del-dint",
    },
    {
      title: "Triest",
      coords: [45.6495, 13.7768],
      url: "posts/wlochy-polnoc.html#triest",
    },
    {
      title: "Werona",
      coords: [45.4384, 10.9916],
      url: "posts/wlochy-polnoc.html#werona",
    },
    {
      title: "Sirmione",
      coords: [45.4924, 10.6097],
      url: "posts/wlochy-polnoc.html#sirmione",
    },
    {
      title: "Parma",
      coords: [44.8015, 10.3279],
      url: "posts/wlochy-polnoc.html#parma",
    },
    {
      title: "Lavagna",
      coords: [44.3096, 9.3490],
      url: "posts/wlochy-polnoc.html#lavagna",
    },
    {
      title: "Genua",
      coords: [44.4056, 8.9463],
      url: "posts/wlochy-polnoc.html#genua",
    },
    {
      title: "Sacra di San Michele",
      coords: [45.0964, 7.3459],
      url: "posts/wlochy-polnoc.html#sacra-di-san-michele",
    },
    {
      title: "Turyn",
      coords: [45.0703, 7.6869],
      url: "posts/wlochy-polnoc.html#turyn",
    },
    {
      title: "Mediolan",
      coords: [45.4642, 9.1900],
      url: "posts/wlochy-polnoc.html#mediolan",
    },
    //zachod usa
    {
      title: "San Francisco",
      coords: [37.7749, -122.4194],
      url: "posts/zachod-usa.html#san-francisco",
    },
    {
      title: "Alcatraz",
      coords: [37.8267, -122.4230],
      url: "posts/zachod-usa.html#san-francisco",
    },
    {
      title: "Point Arena Lighthouse",
      coords: [38.9537, -123.7361],
      url: "posts/zachod-usa.html#point-arena-lighthouse",
    },
    {
      title: "Glass Beach",
      coords: [39.4457, -123.8136],
      url: "posts/zachod-usa.html#point-arena-lighthouse",
    },
    {
      title: "Lassen Volcanic National Park",
      coords: [40.4977, -121.4207],
      url: "posts/zachod-usa.html#lassen-volcanic-park",
    },
    {
      title: "Redwood National Park",
      coords: [41.2132, -124.0046],
      url: "posts/zachod-usa.html#lassen-volcanic-park",
    },
    {
      title: "Crater Lake National Park",
      coords: [42.9446, -122.1090],
      url: "posts/zachod-usa.html#crater-lake-toketee-smith-rock",
    },
    {
      title: "Toketee Falls",
      coords: [43.2902, -122.4317],
      url: "posts/zachod-usa.html#crater-lake-toketee-smith-rock",
    },
    {
      title: "Smith Rock State Park",
      coords: [44.3656, -121.1409],
      url: "posts/zachod-usa.html#crater-lake-toketee-smith-rock",
    },
    {
      title: "Trillium Lake",
      coords: [45.2704, -121.7385],
      url: "posts/zachod-usa.html#trillium-multnomah-portland",
    },
    {
      title: "Multnomah Falls",
      coords: [45.5762, -122.1158],
      url: "posts/zachod-usa.html#trillium-multnomah-portland",
    },
    {
      title: "Portland",
      coords: [45.5152, -122.6784],
      url: "posts/zachod-usa.html#trillium-multnomah-portland",
    },
    {
      title: "Olympic National Park",
      coords: [47.8021, -123.6044],
      url: "posts/zachod-usa.html#olympic-national-park",
    },
    {
      title: "Ruby Beach",
      coords: [47.7108, -124.4158],
      url: "posts/zachod-usa.html#olympic-national-park",
    },
    {
      title: "Big Cedar Tree",
      coords: [47.8592, -123.9342],
      url: "posts/zachod-usa.html#olympic-national-park",
    },
    {
      title: "Seattle",
      coords: [47.6062, -122.3321],
      url: "posts/zachod-usa.html#seattle",
    },
    {
      title: "Yellowstone National Park",
      coords: [44.4280, -110.5885],
      url: "posts/zachod-usa.html#yellowstone-yellowstone-bear-world",
    },
    {
      title: "Yellowstone Bear World",
      coords: [43.8332, -111.7893],
      url: "posts/zachod-usa.html#yellowstone-yellowstone-bear-world",
    },
    {
      title: "Bonneville Salt Flats",
      coords: [40.7615, -113.8961],
      url: "posts/zachod-usa.html#salt-flat-bonneville-salt-lake-city",
    },
    {
      title: "Salt Lake City",
      coords: [40.7608, -111.8910],
      url: "posts/zachod-usa.html#salt-flat-bonneville-salt-lake-city",
    },
    {
      title: "Arches National Park",
      coords: [38.7331, -109.5925],
      url: "posts/zachod-usa.html#arches",
    },
    {
      title: "Capitol Reef National Park",
      coords: [38.2917, -111.2615],
      url: "posts/zachod-usa.html#arches",
    },
    {
      title: "Bryce Canyon National Park",
      coords: [37.5930, -112.1871],
      url: "posts/zachod-usa.html#bryce-zion",
    },
    {
      title: "Zion National Park",
      coords: [37.2982, -113.0263],
      url: "posts/zachod-usa.html#bryce-zion",
    },
    {
      title: "Zapora Glen Canyon",
      coords: [36.9372, -111.4832],
      url: "posts/zachod-usa.html#canyon",
    },
    {
      title: "Horseshoe Bend",
      coords: [36.8796, -111.5104],
      url: "posts/zachod-usa.html#canyon",
    },
    {
      title: "Grand Canyon National Park",
      coords: [36.1069, -112.1129],
      url: "posts/zachod-usa.html#canyon",
    },
    {
      title: "Zapora Hoovera",
      coords: [36.0156, -114.7378],
      url: "posts/zachod-usa.html#las-vegas",
    },
    {
      title: "Las Vegas",
      coords: [36.1699, -115.1398],
      url: "posts/zachod-usa.html#las-vegas",
    },
    {
      title: "Route 66",
      coords: [35.1983, -111.6513],
      url: "posts/zachod-usa.html#las-vegas",
    },
    {
      title: "Joshua Tree National Park",
      coords: [33.8734, -115.9010],
      url: "posts/zachod-usa.html#joshua-tree",
    },
    {
      title: "San Diego",
      coords: [32.7157, -117.1611],
      url: "posts/zachod-usa.html#joshua-tree",
    },
    {
      title: "Los Angeles",
      coords: [34.0522, -118.2437],
      url: "posts/zachod-usa.html#los-angeles",
    },
    {
      title: "Universal Studios Hollywood",
      coords: [34.1381, -118.3534],
      url: "posts/zachod-usa.html#los-angeles",
    },
    {
      title: "Sequoia National Park",
      coords: [36.4864, -118.5658],
      url: "posts/zachod-usa.html#yosemite-sequoia",
    },
    {
      title: "Yosemite National Park",
      coords: [37.8651, -119.5383],
      url: "posts/zachod-usa.html#yosemite-sequoia",
    },
    {
      title: "Googleplex",
      coords: [37.4220, -122.0841],
      url: "posts/zachod-usa.html#yosemite-sequoia",
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
