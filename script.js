// Navbar show/hide
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('visible', window.scrollY > window.innerHeight * 0.8);
});

// Fade-in sections
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));

// === THEME TOGGLE ===
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

// Set initial theme and button text
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  toggleBtn.textContent = 'Light Roast';
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  toggleBtn.textContent = 'Dark Roast';
}

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = 'Dark Roast';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Roast';
    localStorage.setItem('theme', 'dark');
  }
  
});

// ===== LEAFLET MAP =====
const map = L.map('map').setView([20.5937, 78.9629], 4); // India centered view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; Coffee Map Journal | Map data © OpenStreetMap contributors',
}).addTo(map);

// Example locations
const coffeePlaces = [
  {
    name: "Blue Tokai Coffee, Mumbai",
    coords: [19.0760, 72.8777],
    note: "Tried their Monsoon Malabar — nutty and rich.",
  },
  {
    name: "Third Wave Coffee, Bangalore",
    coords: [12.9716, 77.5946],
    note: "V60 perfection with Ethiopian beans.",
  },
  {
    name: "Onibus Coffee, Tokyo",
    coords: [35.6586, 139.6985],
    note: "Floral, clean, and unforgettable atmosphere.",
  },
  {
    name: "La Cabra, Copenhagen",
    coords: [55.6761, 12.5683],
    note: "Bright citrus-forward coffee and calm vibes.",
  }
];

// Add pins
coffeePlaces.forEach(place => {
  L.marker(place.coords)
    .addTo(map)
    .bindPopup(`
  <b>${place.name}</b><br>
  <img src="tokyo-cafe.jpg" width="120"><br>
  ${place.note}
`)
    .openPopup();
});

// ==== FLAVOR RADAR CHART (DEMO) ====
const chartCanvas = document.getElementById('flavorChart');
if (chartCanvas) {
  const flavorChart = new Chart(chartCanvas, {
    type: 'radar',
    data: {
      labels: [
        'Floral 🌸',
        'Fruity 🍓',
        'Nutty 🌰',
        'Funky 🍷',
        'Sweet 🍯',
        'Bitter 🍫',
        'Dark ☕',
        'Acidic 🍋',
        'Dry/Wet 💧'
      ],
      datasets: [
        {
          label: 'My Flavor Profile',
          data: [8, 9, 7, 6, 8, 3, 5, 7, 4], // demo values
          fill: true,
          backgroundColor: 'rgba(164,196,154,0.3)', // pistachio tint
          borderColor: '#5A6B58', // earthy brown
          pointBackgroundColor: '#5A6B58',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          grid: { color: '#C7D8BE' },
          angleLines: { color: '#A4C49A' },
          suggestedMin: 0,
          suggestedMax: 10,
          ticks: { display: false },
          pointLabels: {
            color: '#2F3E2E',
            font: { size: 13, family: 'Poppins' }
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#2F3E2E',
            font: { family: 'Poppins' }
          }
        }
      }
    }
  });
}

// ==== FADE-IN QUOTES ====
const quotes = document.querySelectorAll('.fade-quote');
const quoteObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
    else entry.target.classList.remove('visible');
  });
}, { threshold: 0.5 });
quotes.forEach(q => quoteObserver.observe(q));


// Dark mode chart color switch
if (body.classList.contains('dark-mode')) {
  flavorChart.options.scales.r.pointLabels.color = '#EDE7DF';
  flavorChart.options.scales.r.grid.color = '#DAB892';
  flavorChart.options.scales.r.angleLines.color = '#DAB892';
  flavorChart.data.datasets[0].borderColor = '#DAB892';
  flavorChart.data.datasets[0].backgroundColor = 'rgba(218,184,146,0.25)';
  flavorChart.update();
}
