# Coffee Journal

A personal coffee tasting journal and discovery platform built with modern web technologies. This application serves as a comprehensive digital record of specialty coffee experiences, featuring detailed tasting notes, roaster profiles, brewing method guides, and flavor analytics.

## Overview

Coffee Journal transforms handwritten tasting notes into an interactive, searchable digital archive. The platform documents over 60 specialty coffees from 25+ Indian roasters, providing insights into flavor profiles, processing methods, and brewing techniques that produce exceptional cups.

## Features

### Coffee Catalog
- **Detailed Tasting Notes**: Each coffee entry includes origin, processing method, roast level, flavor notes, and personal ratings
- **Flavor Profile Visualization**: Radar charts displaying acidity, sweetness, body, bitterness, and aftertaste metrics
- **Category Filtering**: Browse by best coffees, worst experiences, premium offerings, and on-repeat favorites

### Roaster Directory
- **25+ Indian Roasters Profiled**: From Blue Tokai and Subko to smaller artisan roasters
- **Roaster Ratings**: Aggregate scores based on coffee quality and consistency
- **Specialty Information**: Each roaster's focus areas and processing expertise

### Brewing Methods
- **9 Brewing Techniques**: V60, AeroPress, French Press, Espresso, Chemex, Moka Pot, Cold Brew, Siphon, and South Indian Filter
- **Step-by-Step Guides**: Detailed instructions with ratios, grind sizes, and timing
- **Method Comparisons**: Difficulty ratings and flavor impact analysis

### Coffee Knowledge Base
- **Roast Level Guide**: Light to dark with temperature ranges and flavor characteristics
- **Processing Methods**: Washed, Natural, Honey, Anaerobic, Carbonic Maceration, and experimental techniques
- **Bean Varieties**: Arabica, Robusta, and Liberica with regional distributions

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Astro 6.1 |
| UI Library | React 19.2 |
| Styling | Tailwind CSS 4.2 |
| Animations | Framer Motion 12.38, GSAP 3.14 |
| 3D Graphics | Three.js, React Three Fiber |
| Charts | Recharts 3.8 |
| Smooth Scrolling | Lenis 1.3 |

## Project Structure

```
coffee-journal/
├── src/
│   ├── components/
│   │   ├── 3d/           # Three.js components
│   │   ├── pages/        # Page-level components
│   │   ├── sections/     # Major UI sections
│   │   └── ui/           # Reusable UI components
│   ├── data/
│   │   └── coffees.ts    # Complete coffee and roaster database
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Astro pages
│   └── styles/           # Global styles
├── public/               # Static assets
└── astro.config.mjs      # Astro configuration
```

## Data Model

### Coffee Entry
```typescript
interface Coffee {
  id: string;
  name: string;
  roaster: string;
  origin: string;
  region?: string;
  process: string;
  roast: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  rating: number;
  notes: string[];
  flavorProfile: {
    acidity: number;
    sweetness: number;
    body: number;
    bitterness: number;
    aftertaste: number;
  };
  brewMethod: string;
  review: string;
  date: string;
}
```

### Roaster Entry
```typescript
interface Roaster {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  description: string;
  category?: ('good' | 'great-branding' | 'premium')[];
}
```

## Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/krish2248/coffee-journal.git
cd coffee-journal

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |

## Coffee Rating System

The rating system uses a 0-5 scale based on overall cup quality:

| Rating | Interpretation |
|--------|----------------|
| 5/5 | Exceptional - A memorable experience |
| 4/5 | Great - Above average, would buy again |
| 3/5 | Good - Solid, nothing remarkable |
| 2/5 | Below Average - Notable flaws |
| 1/5 | Poor - Significant quality issues |
| 0/5 | Unacceptable - Defective or offensive |

## Featured Roasters

Some standout roasters from the collection:

- **Savorworks Coffee**: Three coffees, three perfect scores. Consistent excellence.
- **Handcrafted Cafe Roasters**: Pioneering alcohol bacteria culture processing.
- **Subko Coffee**: Mumbai's leader in anaerobic naturals.
- **Kapi Kottai**: Mind-blowing specialty experiences.
- **Grey Soul Coffee**: Masters of sun-dried naturals.

## Processing Methods Documented

The journal covers both traditional and experimental processing:

- Washed (Wet Process)
- Natural (Dry Process)
- Honey Processing
- Anaerobic Natural
- Carbonic Maceration
- Alcohol Bacteria Culture
- Bio-Dynamic Natural
- Barrel Aging

## Contributing

This is a personal journal project, but suggestions for features or roasters to try are welcome. Open an issue to share recommendations.

## License

MIT License

## Acknowledgments

- All the Indian specialty coffee roasters pushing the boundaries of quality
- The specialty coffee community for sharing knowledge and passion
- V60 for being the brewing method of choice
