const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".trip-card");

function getVisibleCards() {
  return Array.from(cards).filter((card) => !card.classList.contains("is-hidden"));
}

function applyFeaturedLayout() {
  const visibleCards = getVisibleCards();

  visibleCards.forEach((card, index) => {
    const positionInCycle = index % 12;
    const isFeaturedCard =
      positionInCycle === 3 ||
      positionInCycle === 9;

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
    //gdansk
    {
      title: "Park Arkadia",
      coords: [52.0757, 20.0613],
      url: "posts/gdansk.html#arkadia",
    },
    {
      title: "Grudziądz",
      coords: [53.4841, 18.7537],
      url: "posts/gdansk.html#arkadia",
    },
    {
      title: "Gdańsk",
      coords: [54.3520, 18.6466],
      url: "posts/gdansk.html#gdansk",
    },
    {
      title: "Sopot",
      coords: [54.4418, 18.5600],
      url: "posts/gdansk.html#sopot",
    },
    {
      title: "Gdynia",
      coords: [54.5189, 18.5305],
      url: "posts/gdansk.html#sopot",
    },
    {
      title: "Hel",
      coords: [54.6084, 18.8015],
      url: "posts/gdansk.html#sopot",
    },
    {
      title: "Malbork",
      coords: [54.0359, 19.0266],
      url: "posts/gdansk.html#malbork",
    },
    {
      title: "Kwidzyń",
      coords: [53.7249, 18.9311],
      url: "posts/gdansk.html#malbork",
    },
    {
      title: "Biskupin",
      coords: [52.7877, 17.7343],
      url: "posts/gdansk.html#biskupin",
    },
    {
      title: "Gniezno",
      coords: [52.5346, 17.5820],
      url: "posts/gdansk.html#biskupin",
    },
    //czarnobyl
    {
      title: "Czarnobyl",
      coords: [51.2762, 30.2219],
      url: "posts/czarnobyl.html#czarnobyl",
    },
    {
      title: "Czarnobyl-2 (Radar Duga)",
      coords: [51.3048, 30.0655],
      url: "posts/czarnobyl.html#czarnobyl",
    },
    {
      title: "Prypeć",
      coords: [51.4046, 30.0567],
      url: "posts/czarnobyl.html#prypec",
    },
    {
      title: "Sławutycz",
      coords: [51.5228, 30.7564],
      url: "posts/czarnobyl.html",
    },
    {
      title: "Elektrownia Jądrowa w Czarnobylu",
      coords: [51.3890, 30.0993],
      url: "posts/czarnobyl.html#elektrownia",
    },
    {
      title: "Kijów",
      coords: [50.4501, 30.5234],
      url: "posts/czarnobyl.html#kijow",
    },
    {
      title: "Sewilla",
      coords: [37.3828, -5.9732],
      url: "posts/sewilla.html",
    },
    //wlochy poludnie
    {
      title: "Alberobello",
      coords: [40.7864, 17.2405],
      url: "posts/wlochy-poludnie.html#alberobello",
    },
    {
      title: "Monopoli",
      coords: [40.9525, 17.3021],
      url: "posts/wlochy-poludnie.html#alberobello",
    },
    {
      title: "Polignano a Mare",
      coords: [40.9952, 17.2184],
      url: "posts/wlochy-poludnie.html#alberobello",
    },
    {
      title: "Grotte di Castellana",
      coords: [40.8735, 17.1655],
      url: "posts/wlochy-poludnie.html#alberobello",
    },
    {
      title: "Brindisi",
      coords: [40.6327, 17.9418],
      url: "posts/wlochy-poludnie.html#matera",
    },
    {
      title: "Lecce",
      coords: [40.3515, 18.1750],
      url: "posts/wlochy-poludnie.html#matera",
    },
    {
      title: "Cave of Poetry",
      coords: [40.2744, 18.4305],
      url: "posts/wlochy-poludnie.html#matera",
    },
    {
      title: "Matera",
      coords: [40.6663, 16.6043],
      url: "posts/wlochy-poludnie.html#matera",
    },
    {
      title: "Metaponto",
      coords: [40.3706, 16.8155],
      url: "posts/wlochy-poludnie.html#matera",
    },
    {
      title: "Craco",
      coords: [40.3902, 16.4367],
      url: "posts/wlochy-poludnie.html#craco",
    },
    {
      title: "Crotone",
      coords: [39.0808, 17.1271],
      url: "posts/wlochy-poludnie.html#craco",
    },
    {
      title: "Le Castella",
      coords: [38.9105, 17.0348],
      url: "posts/wlochy-poludnie.html#craco",
    },
    {
      title: "Scilla",
      coords: [38.2536, 15.7173],
      url: "posts/wlochy-poludnie.html#craco",
    },
    {
      title: "Tropea",
      coords: [38.6762, 15.8986],
      url: "posts/wlochy-poludnie.html#craco",
    },
    {
      title: "Certosa di Padula",
      coords: [40.3445, 15.6550],
      url: "posts/wlochy-poludnie.html#neapol",
    },
    {
      title: "Neapol",
      coords: [40.8518, 14.2681],
      url: "posts/wlochy-poludnie.html#neapol",
    },
    {
      title: "Pompeje",
      coords: [40.7460, 14.4989],
      url: "posts/wlochy-poludnie.html#pompeje",
    },
    {
      title: "Vieste",
      coords: [41.8825, 16.1750],
      url: "posts/wlochy-poludnie.html#pompeje",
    },
    //cypr
    {
      title: "Larnaka Salt Lake",
      coords: [34.8866, 33.6207],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "Hala Sultan Tekke",
      coords: [34.8843, 33.6167],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "Larnaka",
      coords: [34.9167, 33.6292],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "St Mamas Ruins",
      coords: [35.0348, 33.2706],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "Nikozja",
      coords: [35.1856, 33.3823],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "Fikardu",
      coords: [34.9817, 33.1778],
      url: "posts/cypr.html#pierwszy",
    },
    {
      title: "Kościół Saint Nicholas of the Roof",
      coords: [34.9636, 32.8297],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Galata",
      coords: [34.9642, 32.8278],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Klasztor Saint John Lampadistes",
      coords: [34.9919, 32.7403],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Klasztor Kykkos",
      coords: [34.9806, 32.7411],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Wodospad Chantara",
      coords: [34.9328, 32.8576],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Wodospad Kalidonia",
      coords: [34.9184, 32.8668],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Obserwatorium Troodos",
      coords: [34.9188, 32.8898],
      url: "posts/cypr.html#drugi",
    },
    {
      title: "Skała Afrodyty",
      coords: [34.6656, 32.6275],
      url: "posts/cypr.html#trzeci",
    },
    {
      title: "Szlak Afrodyty (Akamas)",
      coords: [35.0552, 32.3415],
      url: "posts/cypr.html#trzeci",
    },
    {
      title: "Wąwóz Avakas",
      coords: [34.9444, 32.3462],
      url: "posts/cypr.html#trzeci",
    },
    {
      title: "Pafos",
      coords: [34.7720, 32.4297],
      url: "posts/cypr.html#trzeci",
    },
    //mazury
    {
      title: "Suwałki",
      coords: [54.1111, 22.9304],
      url: "posts/mazury.html#suwalki",
    },
    {
      title: "Mosty w Stańczykach",
      coords: [54.2888, 22.6400],
      url: "posts/mazury.html#suwalki",
    },
    {
      title: "Jezioro Hańcza",
      coords: [54.2584, 22.8157],
      url: "posts/mazury.html#suwalki",
    },
    {
      title: "Wigierska Kolejka Wąskotorowa",
      coords: [53.5915, 20.8035],
      url: "posts/mazury.html#kolejka",
    },
    {
      title: "Ełk",
      coords: [53.8282, 22.3647],
      url: "posts/mazury.html#kolejka",
    },
    {
      title: "Augustów",
      coords: [53.8446, 22.9798],
      url: "posts/mazury.html#kolejka",
    },
    {
      title: "Troki",
      coords: [54.6370, 24.9342],
      url: "posts/mazury.html#litwa",
    },
    {
      title: "Wilno",
      coords: [54.6872, 25.2797],
      url: "posts/mazury.html#litwa",
    },
    {
      title: "Śluza Kudrynki",
      coords: [53.9227, 23.5715],
      url: "posts/mazury.html#tatarzy",
    },
    {
      title: "Meczet w Bohonikach",
      coords: [53.5416, 23.5326],
      url: "posts/mazury.html#tatarzy",
    },
    {
      title: "Meczet w Kruszynianach",
      coords: [53.4377, 23.6515],
      url: "posts/mazury.html#tatarzy",
    },
    {
      title: "Zagroda Pokazowa Żubrów w Kopnej Górze",
      coords: [53.2198, 23.4085],
      url: "posts/mazury.html#tatarzy",
    },
    {
      title: "Biebrzański Park Narodowy",
      coords: [53.4688, 22.6428],
      url: "posts/mazury.html#grajewo",
    },
    {
      title: "Grajewo",
      coords: [53.6473, 22.4554],
      url: "posts/mazury.html#grajewo",
    },
    {
      title: "Twierdza Boyen",
      coords: [54.0376, 21.7595],
      url: "posts/mazury.html#boyen",
    },
    {
      title: "Wilczy Szaniec",
      coords: [54.0818, 21.4952],
      url: "posts/mazury.html#boyen",
    },
    {
      title: "Spływ kajakowy Krutynia - Ukta",
      coords: [53.7014, 21.4807],
      url: "posts/mazury.html#olsztyn",
    },
    {
      title: "Olsztyn",
      coords: [53.7784, 20.4801],
      url: "posts/mazury.html#olsztyn",
    },
    {
      title: "Barcelona",
      coords: [41.3851, 2.1734],
      url: "posts/barcelona.html",
    },
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
