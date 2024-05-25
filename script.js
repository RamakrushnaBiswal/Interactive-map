// Initialize the map centered on India
const map = L.map("map").setView([20.5937, 78.9629], 5);

// Load and display tile layers on the map
L.tileLayer(
  "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=ssjepsOfxXaqATsEknxl",
  {
    attribution: "&copy; OpenStreetMap contributors",
  }
).addTo(map);

// Marker data for locations in India
const markersData = [
  {
    coords: [28.6139, 77.209],
    name: "New Delhi",
    description: "Capital city of India",
    pic: "img/delhi.jpg",
  },
  {
    coords: [19.076, 72.8777],
    name: "Mumbai",
    description: "Financial capital of India",
    pic: "img/mumbai.jpg",
  },
  {
    coords: [12.9716, 77.5946],
    name: "Bangalore",
    description: "Silicon Valley of India",
    pic: "img/bangalore.jpg",
  },
  {
    coords: [13.0827, 80.2707],
    name: "Chennai",
    description: "Cultural capital of South India",
    pic: "img/chennai.jpg",
  },
  {
    coords: [22.5726, 88.3639],
    name: "Kolkata",
    description: "City of Joy",
    pic: "img/kolkata.jpg",
  },
  {
    coords: [18.5204, 73.8567],
    name: "Pune",
    description: "Oxford of the East",
    pic: "img/pune.jpg",
  },
  {
    coords: [23.2599, 77.4126],
    name: "Bhopal",
    description: "City of Lakes",
    pic: "img/bhopal.jpg",
  },
  {
    coords: [26.9124, 75.7873],
    name: "Jaipur",
    description: "Pink City of India, India",
    pic: "img/jaipur.jpg",
  },
  {
    coords: [15.2993, 74.124],
    name: "Goa",
    description: "Tourist paradise",
    pic: "img/goa.jpg",
  },
  {
    coords: [11.0168, 76.9558],
    name: "Coimbatore",
    description: "Manchester of South India",
    pic: "img/coimbator.jpg",
  },
  {
    coords: [21.1702, 72.8311],
    name: "Surat",
    description: "Diamond City of India",
    pic: "img/surat.jpg",
  },
  {
    coords: [25.3176, 82.9739],
    name: "Varanasi",
    description: "Spiritual capital of India",
    pic: "img/varanasi.jpg",
  },
  {
    coords: [30.7333, 76.7794],
    name: "Chandigarh",
    description: "The City Beautiful",
    pic: "img/chandigarh.jpg",
  },
  {
    coords: [13.3409, 74.7421],
    name: "Udupi",
    description: "Temple city",
    pic: "img/udupi.jpg",
  },
  {
    coords: [32.7266, 74.857],
    name: "Jammu",
    description: "Winter capital of Jammu & Kashmir",
    pic: "img/jammu.jpg",
  },
  {
    coords: [34.0837, 74.7973],
    name: "Srinagar",
    description: "Summer capital of Jammu & Kashmir",
    pic: "img/srinagar.jpg",
  },
  {
    coords: [9.9312, 76.2673],
    name: "Kochi",
    description: "Queen of the Arabian Sea",
    pic: "img/kochi.jpg",
  },
  {
    coords: [8.5241, 76.9366],
    name: "Thiruvananthapuram",
    description: "Capital city of Kerala",
    pic: "img/thituanantapuram.jpg",
  },
  {
    coords: [23.0225, 72.5714],
    name: "Ahmedabad",
    description: "Manchester of India",
    pic: "img/ahmedabad.jpg",
  },
  {
    coords: [22.3072, 73.1812],
    name: "Vadodara",
    description: "Cultural capital of Gujarat",
    pic: "img/vadodara.jpg",
  },
  {
    coords: [24.5854, 73.7125],
    name: "Udaipur",
    description: "City of Lakes",
    pic: "img/udaipur.jpg",
  },
  {
    coords: [12.2958, 76.6394],
    name: "Mysore",
    description: "City of Palaces",
    pic: "img/mysore.jpg",
  },
  {
    coords: [22.7196, 75.8577],
    name: "Indore",
    description: "Cleanest city of India",
    pic: "img/indore.jpg",
  },
  {
    coords: [21.1458, 79.0882],
    name: "Nagpur",
    description: "Orange City",
    pic: "img/nagpur.jpg",
  },
  {
    coords: [19.9975, 73.7898],
    name: "Nashik",
    description: "Wine capital of India",
    pic: "img/nashik.jpg",
  },
  {
    coords: [16.5062, 80.648],
    name: "Vijayawada",
    description: "Land of Victory",
    pic: "img/vijayawada.jpg",
  },
  {
    coords: [20.2961, 85.8245],
    name: "Bhubaneswar",
    description: "Temple city of India",
    pic: "img/bbsr.jpg",
  },
];

const markers = {};

// Initialize markers but don't add them to the map yet
markersData.forEach((data) => {
  const marker = L.marker(data.coords).bindPopup(
    `<h3>${data.name}</h3><i>${data.description}</i></p>`
  );
  markers[data.name.toLowerCase()] = marker;
});

// Search functionality
document.getElementById("search-box").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const matchedMarkerData = markersData.find((data) =>
    data.name.toLowerCase().includes(searchTerm)
  );

  // Remove any existing markers from the map
  Object.values(markers).forEach((marker) => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });

  if (matchedMarkerData) {
    const matchedMarker = markers[matchedMarkerData.name.toLowerCase()];
    map.setView(matchedMarkerData.coords, 13);
    matchedMarker.addTo(map).openPopup();
    document.getElementById("info").style.display = "block";
    document.getElementById(
      "info"
    ).innerHTML = `<h3>${matchedMarkerData.name}</h3><p>${matchedMarkerData.description}</p><img src="${matchedMarkerData.pic}" style="width: 250px; height: 200px">`;
  } else {
    document.getElementById("info").style.display = "none";
  }
});
