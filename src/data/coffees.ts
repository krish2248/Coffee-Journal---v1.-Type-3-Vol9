export interface Coffee {
  id: string;
  name: string;
  roaster: string;
  roasterId: string;
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
  elevation?: string;
  variety?: string;
  image?: string;
  category?: ('best' | 'on-repeat' | 'premium' | 'worst' | 'great-branding')[];
}

export interface Roaster {
  id: string;
  name: string;
  location: string;
  website?: string;
  specialty: string;
  rating: number;
  description: string;
  image?: string;
  category?: ('good' | 'great-branding' | 'premium')[];
}

// ──────────────────────────────────────
// ROASTERS — from handwritten journal
// ──────────────────────────────────────

export const roasters: Roaster[] = [
  {
    id: 'blue-tokai',
    name: 'Blue Tokai',
    location: 'India',
    specialty: 'Indian Single Origins & Blends',
    rating: 4,
    description: "India's pioneering specialty coffee roaster. Known for direct trade relationships with Indian estates, consistent quality, and a massive catalog ranging from beginner-friendly blends to competition-grade micro-lots.",
    category: ['good', 'great-branding']
  },
  {
    id: 'subko',
    name: 'Subko Coffee',
    location: 'Mumbai, India',
    specialty: 'Experimental & Anaerobic Processing',
    rating: 5,
    description: "Mumbai's most exciting roaster, pushing boundaries with anaerobic naturals and experimental fermentation. Every release feels like an event. Consistently delivers mind-blowing cups.",
    category: ['good', 'premium']
  },
  {
    id: 'ifkis',
    name: 'Ifkis Coffee',
    location: 'India',
    specialty: 'Bold Specialty Roasts',
    rating: 5,
    description: 'Ifkis delivers exceptional quality with standout offerings like Vibrant Vino. One of the most consistent 5/5 roasters in my collection.',
    category: ['good']
  },
  {
    id: 'third-wave',
    name: 'Third Wave Coffee',
    location: 'Bangalore, India',
    specialty: 'Accessible Specialty',
    rating: 1,
    description: 'Widely available chain. While they made specialty coffee mainstream in India, the quality has been inconsistent. Their Chikmanglur Single Origin was my worst coffee experience in 6 months — a 0/5.',
  },
  {
    id: 'curious-life',
    name: 'Curious Life Coffee',
    location: 'India',
    specialty: 'Micro-lots',
    rating: 3,
    description: 'Small batch roaster with decent offerings. The Unknown Coffee scored a 3.5/5 — solid but not exceptional.',
  },
  {
    id: 'cj',
    name: 'CJ Coffee',
    location: 'India',
    specialty: 'Collaborations & Unique Blends',
    rating: 5,
    description: 'Exceptional roaster known for creative collaborations. Their White Honey (with Coffeeverse) and collabs with Blue Tokai are outstanding.',
    category: ['good']
  },
  {
    id: 'veronica',
    name: 'Veronica Coffee',
    location: 'India',
    specialty: 'Honey & Sundried Processes',
    rating: 5,
    description: 'Veronica delivers perfection. Nosy Lucy from Baba Budangiri with honey sundried processing is a 5/5 masterpiece. An absolute gem of a roaster.',
    category: ['good', 'premium']
  },
  {
    id: 'toffee-coffee',
    name: 'Toffee Coffee Roasters',
    location: 'India',
    specialty: 'Wide Range — Hit or Miss',
    rating: 1,
    description: "A mixed bag. Their Tangerine is an incredible 5/5, and Barbara Estate is solid. But the cold brews score a flat 0 and Blueberry Mocha was terrible. You never know what you are going to get.",
  },
  {
    id: 'naivo',
    name: 'Naivo Coffee',
    location: 'India',
    specialty: 'Estate Coffees',
    rating: 5,
    description: 'High-rated roaster with a focus on estate-specific offerings. Seethagundu Estate and Thogarihunkal Honey showcase their commitment to quality.',
    category: ['good']
  },
  {
    id: 'fraction-9',
    name: 'Fraction 9 Coffee',
    location: 'India',
    specialty: 'Specialty Blends',
    rating: 5,
    description: 'A 5/5 rated roaster. Crimson Gold is an absolute stunner — one of the best coffees I have had. Winter Berry is decent too.',
    category: ['good']
  },
  {
    id: 'corridor-seven',
    name: 'Corridor Seven Coffee',
    location: 'New Delhi, India',
    specialty: 'Filter Coffee',
    rating: 3,
    description: "Delhi's specialty roaster. Their Grapefruit Anaerobic Natural was disappointing at 2/5 despite the interesting processing method.",
  },
  {
    id: 'araku',
    name: 'Araku Coffee',
    location: 'Araku Valley, India',
    specialty: 'Tribal Estate Coffees',
    rating: 4,
    description: "From the beautiful Araku Valley. Early Harvest Natural Process is a perfect 5/5 — one of my best coffees ever. Signature Washed was weaker at 2/5. When they hit, they hit hard.",
    category: ['good']
  },
  {
    id: 'grey-soul',
    name: 'Grey Soul Coffee',
    location: 'India',
    specialty: 'Fruit Naturals & Sun Dried',
    rating: 5,
    description: 'Grey Soul specializes in natural processed, sun-dried coffees that burst with fruit. Their Fruit Naturals is a perfect 5/5. Exceptional.',
    category: ['good', 'premium']
  },
  {
    id: 'palanimalai',
    name: 'Palanimalai Coffee',
    location: 'Tamil Nadu, India',
    specialty: 'South Indian Estate Coffee',
    rating: 3,
    description: 'Estate coffee from the Palanimalai hills. Ammikulam Estate Natural was disappointing at 1/5. Has potential but needs refinement.',
  },
  {
    id: 'gb-roasters',
    name: 'GB Roasters',
    location: 'India',
    specialty: 'Ethiopian & International Origins',
    rating: 5,
    description: 'One of the few Indian roasters sourcing incredible Ethiopian beans. Their Hamasho Village Natural from Ethiopia is a perfect 5/5 — world-class quality.',
    category: ['good', 'premium']
  },
  {
    id: 'kintry',
    name: 'Kintry Coffee',
    location: 'India',
    specialty: 'General Specialty',
    rating: 3,
    description: 'Rated 3/5 overall. Only tried one offering which scored 1/5. Need to explore more before passing final judgment.',
  },
  {
    id: 'tulum',
    name: 'Tulum Coffee',
    location: 'India',
    specialty: 'Estate Specialties',
    rating: 5,
    description: 'Tulum is exceptional. Durgamadhata Estate scored a perfect 5/5. A roaster that clearly cares about quality at every step.',
    category: ['good']
  },
  {
    id: 'kapi-kottai',
    name: 'Kapi Kottai',
    location: 'India',
    specialty: 'Mind-Blowing Specialty',
    rating: 5,
    description: 'Mind = Blown. That is literally what I wrote in my journal. Kapi Kottai delivers an experience that transcends normal coffee. A must-try for any specialty enthusiast.',
    category: ['good', 'premium']
  },
  {
    id: 'savorworks',
    name: 'Savorworks Coffee',
    location: 'India',
    specialty: 'Natural Process & Blends',
    rating: 5,
    description: "Savorworks is perfection. Three coffees, three 5/5 scores. Bossi's Wife blend, Hisenberg Riverdale Natural, and Fruit Bomb — every single one is extraordinary. The best hit rate of any roaster in my collection.",
    category: ['good', 'premium']
  },
  {
    id: 'handcrafted',
    name: 'Handcrafted Cafe Roasters',
    location: 'India',
    specialty: 'Experimental & Bacteria Culture Processing',
    rating: 5,
    description: 'Handcrafted pushes the absolute frontier of coffee processing. Their Alcohol Bacteria Culture coffee from Ratnagiri and Chikmanglur is unlike anything else. Orchardale Estate is another perfect 5/5.',
    category: ['good', 'premium']
  },
  {
    id: 'ambrosia',
    name: 'Ambrosia Roasters',
    location: 'India',
    specialty: 'Estate Single Origins',
    rating: 5,
    description: 'Named after the food of the gods, and they deliver. Udayagiri Estate at 4/5 shows their consistent high quality.',
    category: ['good']
  },
  {
    id: 'coffeeverse',
    name: 'Coffeeverse',
    location: 'India',
    specialty: 'Bio-Dynamic & Natural Filters',
    rating: 5,
    description: 'Coffeeverse explores the cutting edge with bio-dynamic natural filter coffees. Moonlit Manay was a miss at 1/5, but their Bio-Dynamic Natural Filter at 3/5 shows the potential.',
    category: ['great-branding']
  },
  {
    id: 'kulp',
    name: 'Kulp Coffee',
    location: 'India',
    specialty: 'Barrel-Aged & Experimental',
    rating: 1,
    description: 'Tried their Barrel Whiskey Aged coffee — an interesting concept but scored only 1/5. The barrel aging overpowered the coffee character.',
  },
];

// ──────────────────────────────────────
// ALL COFFEES — from handwritten journal
// ──────────────────────────────────────

export const coffees: Coffee[] = [
  // ── BLUE TOKAI ──
  {
    id: 'bt-harley',
    name: 'Harley Estate',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Karnataka',
    process: 'Washed',
    roast: 'Medium',
    rating: 3,
    notes: ['Chocolate', 'Nutty', 'Mild'],
    flavorProfile: { acidity: 4, sweetness: 5, body: 6, bitterness: 4, aftertaste: 4 },
    brewMethod: 'V60',
    review: 'A decent estate coffee from Blue Tokai. Chocolate and nutty notes come through, but nothing that makes you sit up. Solid but unremarkable — a 3/5.',
    date: '2025-01-15',
  },
  {
    id: 'bt-attikan',
    name: 'Attikan Estate',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Chikmagalur, Karnataka',
    process: 'Washed',
    roast: 'Medium-Light',
    rating: 4,
    notes: ['Citrus', 'Chocolate', 'Caramel'],
    flavorProfile: { acidity: 7, sweetness: 7, body: 6, bitterness: 3, aftertaste: 7 },
    brewMethod: 'V60',
    review: 'Beautiful clean cup with bright citrus acidity that fades into warm chocolate. The caramel sweetness lingers nicely. A strong 4/5 from Blue Tokai — this is what Indian specialty can be.',
    date: '2025-01-20',
    elevation: '1100m',
    variety: 'SLN 795',
    category: ['on-repeat']
  },
  {
    id: 'bt-silver-oak',
    name: 'Silver Oak TV-KV Blend',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Karnataka',
    process: 'Washed',
    roast: 'Medium',
    rating: 5,
    notes: ['Complex', 'Balanced', 'Sweet', 'Rich'],
    flavorProfile: { acidity: 7, sweetness: 9, body: 7, bitterness: 3, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'A perfect blend. The TV-KV combination creates something greater than the sum of its parts — complex sweetness, impeccable balance, and a rich body that carries every note beautifully. 5/5.',
    date: '2025-02-01',
    category: ['best', 'on-repeat']
  },
  {
    id: 'bt-vienna',
    name: 'Vienna Roast',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium-Dark',
    rating: 4,
    notes: ['Dark Chocolate', 'Caramel', 'Full-Bodied'],
    flavorProfile: { acidity: 3, sweetness: 6, body: 8, bitterness: 5, aftertaste: 6 },
    brewMethod: 'French Press',
    review: 'A darker take from Blue Tokai. Rich dark chocolate with caramel sweetness and a heavy body. Excellent for milk-based drinks. 4/5 — reliable and comforting.',
    date: '2025-01-10',
    category: ['on-repeat']
  },
  {
    id: 'bt-seethagundu',
    name: 'Seethagundu Estate - Light',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Karnataka',
    process: 'Washed',
    roast: 'Light',
    rating: 0,
    notes: ['Flat', 'Underdeveloped'],
    flavorProfile: { acidity: 3, sweetness: 1, body: 2, bitterness: 5, aftertaste: 1 },
    brewMethod: 'V60',
    review: 'A rare miss from Blue Tokai. The light roast on this estate did not work at all — flat, underdeveloped, with an unpleasant bitterness that should not be there in a light roast. 0/5.',
    date: '2024-12-20',
    category: ['worst']
  },
  {
    id: 'bt-arakku-blend',
    name: 'Arakku Blend',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Araku Valley',
    process: 'Natural',
    roast: 'Medium',
    rating: 3.5,
    notes: ['Berry', 'Earthy', 'Mild Sweetness'],
    flavorProfile: { acidity: 5, sweetness: 6, body: 6, bitterness: 4, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'A pleasant Araku blend. Berry notes with earthy undertones and mild sweetness. Not as exciting as their single origins but a solid daily drinker. 3.5/5.',
    date: '2025-01-05',
  },
  {
    id: 'bt-devdi',
    name: 'Devdi Blend',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 5,
    notes: ['Complex', 'Sweet', 'Balanced', 'Smooth'],
    flavorProfile: { acidity: 6, sweetness: 9, body: 8, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Devdi is Blue Tokai at their absolute best. A masterfully crafted blend — complex sweetness that evolves with every sip, perfectly balanced body, and an aftertaste that makes you crave the next cup. 5/5.',
    date: '2025-02-10',
    category: ['best', 'on-repeat', 'premium']
  },
  {
    id: 'bt-kalledevarapura',
    name: 'Kalledevarapura Estate - Pulp Sun Dried',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Karnataka',
    process: 'Pulp Sun Dried',
    roast: 'Medium',
    rating: 4,
    notes: ['Fruity', 'Honey', 'Bright'],
    flavorProfile: { acidity: 7, sweetness: 8, body: 6, bitterness: 3, aftertaste: 7 },
    brewMethod: 'V60',
    review: 'The pulp sun dried process shines here — fruity sweetness with honey-like body and a bright finish. An excellent showcase of how processing affects flavor. 4/5.',
    date: '2025-02-05',
  },
  {
    id: 'bt-13yr',
    name: '13 Year Anniversary Blend',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    process: 'Special',
    roast: 'Medium',
    rating: 5,
    notes: ['Celebratory', 'Complex', 'Premium', 'Layered'],
    flavorProfile: { acidity: 7, sweetness: 9, body: 8, bitterness: 2, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'Blue Tokai pulled out all the stops for their 13th anniversary. A commemorative blend that is easily their best work — layer after layer of complexity, with a finish that lasts forever. Collector-worthy. 5/5.',
    date: '2025-03-15',
    category: ['best', 'premium']
  },
  {
    id: 'bt-skin',
    name: 'Skin (Blue Tokai x CJ)',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    process: 'Experimental',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Unique', 'Funky', 'Complex', 'Bold'],
    flavorProfile: { acidity: 8, sweetness: 8, body: 7, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'A Blue Tokai x CJ collaboration that pushes boundaries. Named "Skin" for good reason — it gets under yours. Bold, funky, complex. The kind of coffee that starts conversations. 5/5.',
    date: '2025-02-20',
    category: ['best', 'premium']
  },
  {
    id: 'bt-riverdale',
    name: 'Riverdale N72 (Blue Tokai x CJ)',
    roaster: 'Blue Tokai',
    roasterId: 'blue-tokai',
    origin: 'India',
    region: 'Riverdale Estate',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Fruity', 'Vibrant', 'Tropical', 'Wine'],
    flavorProfile: { acidity: 9, sweetness: 9, body: 6, bitterness: 1, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Riverdale N72 is a collaboration masterpiece. Vibrant tropical fruit, wine-like complexity, and an acidity that sparkles. This is the coffee that makes you fall in love with naturals. 5/5.',
    date: '2025-02-25',
    category: ['best', 'premium']
  },

  // ── IFKIS ──
  {
    id: 'ifkis-vibrant-vino',
    name: 'Vibrant Vino',
    roaster: 'Ifkis Coffee',
    roasterId: 'ifkis',
    origin: 'India',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Wine', 'Berry', 'Vibrant', 'Complex'],
    flavorProfile: { acidity: 9, sweetness: 9, body: 7, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'The name says it all — Vibrant Vino is exactly that. Wine-like character with berry brightness and extraordinary complexity. One of the most memorable coffees I have ever had. 5/5.',
    date: '2025-02-15',
    category: ['best', 'on-repeat', 'premium']
  },
  {
    id: 'ifkis-divine-delight',
    name: 'Divine Delight',
    roaster: 'Ifkis Coffee',
    roasterId: 'ifkis',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 1,
    notes: ['Disappointing', 'Flat'],
    flavorProfile: { acidity: 3, sweetness: 2, body: 4, bitterness: 5, aftertaste: 2 },
    brewMethod: 'V60',
    review: 'A shocking letdown from a 5/5 rated roaster. Divine Delight was anything but divine — flat, one-dimensional, with none of the magic that makes Ifkis special. Rare miss. 1/5.',
    date: '2025-02-18',
    category: ['worst']
  },

  // ── CURIOUS LIFE ──
  {
    id: 'cl-unknown',
    name: 'Unknown Coffee',
    roaster: 'Curious Life Coffee',
    roasterId: 'curious-life',
    origin: 'India',
    process: 'Unknown',
    roast: 'Medium',
    rating: 3.5,
    notes: ['Pleasant', 'Mild', 'Clean'],
    flavorProfile: { acidity: 5, sweetness: 6, body: 5, bitterness: 3, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'A coffee without a name from Curious Life. Pleasant, mild, and clean. Nothing to write home about but nothing to complain about either. 3.5/5.',
    date: '2025-01-25',
  },

  // ── CJ ──
  {
    id: 'cj-white-honey',
    name: 'White Honey (Coffeeverse x CJ)',
    roaster: 'CJ Coffee',
    roasterId: 'cj',
    origin: 'India',
    process: 'White Honey',
    roast: 'Medium-Light',
    rating: 4,
    notes: ['Honey', 'Floral', 'Delicate', 'Sweet'],
    flavorProfile: { acidity: 6, sweetness: 9, body: 5, bitterness: 1, aftertaste: 8 },
    brewMethod: 'V60',
    review: 'A Coffeeverse x CJ collaboration showcasing white honey processing at its finest. Delicate floral notes float on a bed of honey sweetness. Light-bodied but deeply flavored. 4/5.',
    date: '2025-02-22',
    category: ['premium']
  },

  // ── SUBKO ──
  {
    id: 'subko-yung-gun',
    name: 'Project Yung Gun - Korakulhi Estate',
    roaster: 'Subko Coffee',
    roasterId: 'subko',
    origin: 'India',
    region: 'Korakulhi Estate',
    process: 'Anaerobic Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Tropical', 'Funky', 'Explosive', 'Fermented Fruit'],
    flavorProfile: { acidity: 9, sweetness: 10, body: 7, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'Project Yung Gun from Subko is anaerobic natural processing taken to the extreme. Explosive tropical fruit, funky fermented notes, and a sweetness that seems impossible from coffee. This is the future of Indian coffee. 5/5.',
    date: '2025-03-01',
    category: ['best', 'premium']
  },

  // ── VERONICA ──
  {
    id: 'veronica-nosy-lucy',
    name: 'Nosy Lucy - Baba Budangiri',
    roaster: 'Veronica Coffee',
    roasterId: 'veronica',
    origin: 'India',
    region: 'Baba Budangiri',
    process: 'Honey Sundried',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Honey', 'Stone Fruit', 'Sundried', 'Warm'],
    flavorProfile: { acidity: 6, sweetness: 10, body: 7, bitterness: 1, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'From the birthplace of Indian coffee — Baba Budangiri. Nosy Lucy is honey sundried perfection. Stone fruit sweetness wrapped in warm honey, with the sun-dried process adding depth and complexity. 5/5.',
    date: '2025-03-05',
    elevation: '1200m',
    category: ['best', 'premium']
  },

  // ── TOFFEE COFFEE ROASTERS ──
  {
    id: 'toffee-peaberry',
    name: 'Peaberry Blend',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 2,
    notes: ['Thin', 'Mild', 'Unremarkable'],
    flavorProfile: { acidity: 4, sweetness: 3, body: 4, bitterness: 4, aftertaste: 3 },
    brewMethod: 'V60',
    review: 'A peaberry blend that does not justify the premium. Thin body, mild flavors, nothing memorable. Peaberry deserves better treatment than this. 2/5.',
    date: '2024-11-15',
  },
  {
    id: 'toffee-barbara',
    name: 'Barbara Estate',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 4,
    notes: ['Clean', 'Sweet', 'Balanced'],
    flavorProfile: { acidity: 6, sweetness: 7, body: 6, bitterness: 3, aftertaste: 6 },
    brewMethod: 'V60',
    review: 'A surprisingly good estate coffee from Toffee Coffee. Clean and sweet with good balance. Proves they can deliver when they focus on quality single origins. 4/5.',
    date: '2024-11-20',
  },
  {
    id: 'toffee-tangerine',
    name: 'Tangerine',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Citrus', 'Tangerine', 'Bright', 'Juicy'],
    flavorProfile: { acidity: 9, sweetness: 9, body: 5, bitterness: 1, aftertaste: 8 },
    brewMethod: 'V60',
    review: 'The star of the Toffee Coffee lineup and it is not even close. Tangerine lives up to its name — explosive citrus, juicy brightness, and a sweetness that feels like biting into a fresh tangerine. 5/5.',
    date: '2024-12-01',
    category: ['best']
  },
  {
    id: 'toffee-annanas',
    name: 'Annanas',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 3,
    notes: ['Pineapple', 'Tropical', 'Mild'],
    flavorProfile: { acidity: 6, sweetness: 6, body: 5, bitterness: 3, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'Pineapple-forward but lacks the punch of Tangerine. Mild tropical notes that never fully develop. A 3/5 — fine but unremarkable.',
    date: '2024-12-05',
  },
  {
    id: 'toffee-cold-brew',
    name: 'All Cold Brews',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Various',
    roast: 'Medium',
    rating: 0,
    notes: ['Watery', 'Flavorless', 'Waste'],
    flavorProfile: { acidity: 1, sweetness: 1, body: 2, bitterness: 3, aftertaste: 1 },
    brewMethod: 'Cold Brew',
    review: 'Every cold brew from Toffee Coffee has been a disaster. Watery, flavorless, and a complete waste of money. If you see "Toffee Coffee Cold Brew" — run. 0/5.',
    date: '2024-11-10',
    category: ['worst']
  },
  {
    id: 'toffee-blueberry-mocha',
    name: 'Blueberry Mocha',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Flavored',
    roast: 'Medium',
    rating: 1,
    notes: ['Artificial', 'Cloying', 'Unbalanced'],
    flavorProfile: { acidity: 2, sweetness: 7, body: 5, bitterness: 4, aftertaste: 2 },
    brewMethod: 'Various',
    review: 'Artificial blueberry flavor that overpowers any coffee character. Cloying sweetness with no balance. This is not specialty coffee — this is a flavored disaster. 1/5.',
    date: '2024-11-12',
    category: ['worst']
  },
  {
    id: 'toffee-yelagondhan',
    name: 'Yelagondhan Estate',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 1,
    notes: ['Dull', 'Papery', 'Stale'],
    flavorProfile: { acidity: 2, sweetness: 2, body: 3, bitterness: 5, aftertaste: 1 },
    brewMethod: 'V60',
    review: 'Dull, papery, and tasting almost stale. Yelagondhan Estate deserves a better roaster. 1/5.',
    date: '2025-03-10',
    category: ['worst']
  },
  {
    id: 'toffee-kuilinphan',
    name: 'Kuilinphan Estate',
    roaster: 'Toffee Coffee Roasters',
    roasterId: 'toffee-coffee',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 4,
    notes: ['Clean', 'Bright', 'Citrus'],
    flavorProfile: { acidity: 7, sweetness: 6, body: 5, bitterness: 3, aftertaste: 6 },
    brewMethod: 'V60',
    review: 'Another solid estate coffee from Toffee. Clean, bright, with citrus notes. Proves they can deliver when they get the estate right. 4/5.',
    date: '2025-03-12',
  },

  // ── NAIVO ──
  {
    id: 'naivo-seethagundu',
    name: 'Seethagundu Estate (Washed)',
    roaster: 'Naivo Coffee',
    roasterId: 'naivo',
    origin: 'India',
    region: 'Karnataka',
    process: 'Washed',
    roast: 'Medium',
    rating: 3,
    notes: ['Clean', 'Mild', 'Balanced'],
    flavorProfile: { acidity: 5, sweetness: 5, body: 6, bitterness: 3, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'A clean and mild washed coffee from Seethagundu Estate. Well-balanced but lacks the excitement you want from a 5/5 rated roaster. 3/5.',
    date: '2025-01-30',
  },
  {
    id: 'naivo-thogarihunkal',
    name: 'Thogarihunkal Honey',
    roaster: 'Naivo Coffee',
    roasterId: 'naivo',
    origin: 'India',
    process: 'Honey',
    roast: 'Medium-Light',
    rating: 2,
    notes: ['Muted', 'Under-developed', 'Thin'],
    flavorProfile: { acidity: 4, sweetness: 4, body: 3, bitterness: 3, aftertaste: 3 },
    brewMethod: 'V60',
    review: 'The honey process is muted here — none of the sweetness and body you expect. Thin and underdeveloped. A disappointing 2/5.',
    date: '2025-02-02',
  },

  // ── FRACTION 9 ──
  {
    id: 'f9-winter-berry',
    name: 'Winter Berry',
    roaster: 'Fraction 9 Coffee',
    roasterId: 'fraction-9',
    origin: 'India',
    process: 'Natural',
    roast: 'Light',
    rating: 3,
    notes: ['Berry', 'Light', 'Crisp'],
    flavorProfile: { acidity: 7, sweetness: 6, body: 4, bitterness: 2, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'Light and crisp with berry notes. A nice winter coffee but does not reach the heights of their Crimson Gold. 3/5.',
    date: '2025-01-08',
  },
  {
    id: 'f9-crimson-gold',
    name: 'Crimson Gold',
    roaster: 'Fraction 9 Coffee',
    roasterId: 'fraction-9',
    origin: 'India',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Rich', 'Gold', 'Berry', 'Complex', 'Layered'],
    flavorProfile: { acidity: 8, sweetness: 9, body: 7, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Crimson Gold from Fraction 9 is liquid gold. Rich, complex, layered — it unfolds like a story in your cup. Berry brightness meets golden sweetness. One of the best natural processed coffees I have had. 5/5.',
    date: '2025-01-12',
    category: ['best', 'on-repeat', 'premium']
  },

  // ── CORRIDOR SEVEN ──
  {
    id: 'c7-grapefruit',
    name: 'Grapefruit Anaerobic Natural',
    roaster: 'Corridor Seven Coffee',
    roasterId: 'corridor-seven',
    origin: 'India',
    process: 'Anaerobic Natural',
    roast: 'Light',
    rating: 2,
    notes: ['Sour', 'Unbalanced', 'Over-fermented'],
    flavorProfile: { acidity: 8, sweetness: 3, body: 4, bitterness: 5, aftertaste: 3 },
    brewMethod: 'V60',
    review: 'The anaerobic process went too far here — over-fermented sourness rather than pleasant fruit acidity. The grapefruit character is more like grapefruit pith than juice. 2/5.',
    date: '2025-02-08',
  },

  // ── ARAKU ──
  {
    id: 'araku-early-harvest',
    name: 'Early Harvest (Natural Process)',
    roaster: 'Araku Coffee',
    roasterId: 'araku',
    origin: 'India',
    region: 'Araku Valley, Andhra Pradesh',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Fruity', 'Sweet', 'Complex', 'Tribal Heritage'],
    flavorProfile: { acidity: 7, sweetness: 9, body: 7, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Early Harvest from Araku Valley is a revelation. The natural process brings out incredible fruit sweetness and complexity. You can taste the terroir of the tribal lands. This is Indian coffee heritage at its finest. 5/5.',
    date: '2025-03-05',
    elevation: '900-1100m',
    category: ['best', 'premium']
  },
  {
    id: 'araku-signature',
    name: 'Signature (Washed)',
    roaster: 'Araku Coffee',
    roasterId: 'araku',
    origin: 'India',
    region: 'Araku Valley',
    process: 'Washed',
    roast: 'Medium',
    rating: 2,
    notes: ['Thin', 'Generic', 'Bland'],
    flavorProfile: { acidity: 4, sweetness: 3, body: 4, bitterness: 4, aftertaste: 3 },
    brewMethod: 'V60',
    review: 'The washed version strips away everything that makes Araku special. Thin and generic — could be from anywhere. Stick to their naturals. 2/5.',
    date: '2025-03-06',
  },

  // ── GREY SOUL ──
  {
    id: 'gs-fruit-naturals',
    name: 'Fruit Naturals (Sun Dried)',
    roaster: 'Grey Soul Coffee',
    roasterId: 'grey-soul',
    origin: 'India',
    process: 'Natural Sun Dried',
    roast: 'Light',
    rating: 5,
    notes: ['Fruit Bomb', 'Sun-Dried', 'Jammy', 'Sweet'],
    flavorProfile: { acidity: 8, sweetness: 10, body: 7, bitterness: 1, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Grey Soul lives up to their name with this deeply soulful coffee. Sun-dried to perfection — jammy fruit notes, incredible sweetness, and a body that carries every flavor. A perfect 5/5.',
    date: '2025-03-08',
    category: ['best', 'premium']
  },

  // ── PALANIMALAI ──
  {
    id: 'palan-ammikulam',
    name: 'Ammikulam Estate (Natural)',
    roaster: 'Palanimalai Coffee',
    roasterId: 'palanimalai',
    origin: 'India',
    region: 'Palanimalai, Tamil Nadu',
    process: 'Natural',
    roast: 'Medium',
    rating: 1,
    notes: ['Defective', 'Harsh', 'Unclean'],
    flavorProfile: { acidity: 3, sweetness: 2, body: 5, bitterness: 7, aftertaste: 2 },
    brewMethod: 'V60',
    review: 'The natural process went wrong here. Harsh, unclean flavors with defective notes. Palanimalai has a long way to go. 1/5.',
    date: '2025-03-02',
    category: ['worst']
  },

  // ── GB ROASTERS ──
  {
    id: 'gb-ethiopia',
    name: 'Ethiopia - Hamasho Village (Natural)',
    roaster: 'GB Roasters',
    roasterId: 'gb-roasters',
    origin: 'Ethiopia',
    region: 'Hamasho Village',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Blueberry', 'Floral', 'Ethiopian Classic', 'Bright'],
    flavorProfile: { acidity: 9, sweetness: 9, body: 6, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'The real deal — Ethiopian natural from Hamasho Village. Classic blueberry and floral notes with a brightness that dances on the palate. GB Roasters nailed this import. World-class. 5/5.',
    date: '2025-03-10',
    category: ['best', 'premium']
  },

  // ── KINTRY ──
  {
    id: 'kintry-generic',
    name: 'Single Origin (Unnamed)',
    roaster: 'Kintry Coffee',
    roasterId: 'kintry',
    origin: 'India',
    process: 'Unknown',
    roast: 'Medium',
    rating: 1,
    notes: ['Forgettable', 'Bland', 'Generic'],
    flavorProfile: { acidity: 3, sweetness: 2, body: 4, bitterness: 5, aftertaste: 2 },
    brewMethod: 'V60',
    review: 'Forgettable in every way. No distinct character, bland flavor, generic finish. Kintry needs to step up their game. 1/5.',
    date: '2025-02-28',
    category: ['worst']
  },

  // ── TULUM ──
  {
    id: 'tulum-durgamadhata',
    name: 'Durgamadhata Estate',
    roaster: 'Tulum Coffee',
    roasterId: 'tulum',
    origin: 'India',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Rich', 'Complex', 'Elegant', 'Estate Character'],
    flavorProfile: { acidity: 7, sweetness: 9, body: 7, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: 'Durgamadhata Estate through Tulum is pure elegance. Rich and complex with the unmistakable character of a well-maintained estate. Every sip reveals a new layer. 5/5.',
    date: '2025-03-12',
    category: ['best', 'premium']
  },

  // ── KAPI KOTTAI ──
  {
    id: 'kk-mind-blown',
    name: 'Signature Blend',
    roaster: 'Kapi Kottai',
    roasterId: 'kapi-kottai',
    origin: 'India',
    process: 'Various',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Mind-Blowing', 'Extraordinary', 'Transformative'],
    flavorProfile: { acidity: 8, sweetness: 10, body: 8, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'Mind = Blown. That is all I wrote when I first tasted Kapi Kottai, and honestly that still captures it perfectly. This is not just coffee — this is a transformative experience. Everything about it is extraordinary. 5/5.',
    date: '2025-03-14',
    category: ['best', 'premium']
  },

  // ── SAVORWORKS ──
  {
    id: 'sw-bossis-wife',
    name: "Bossi's Wife (Ratnagiri-Riverdale Blend)",
    roaster: 'Savorworks Coffee',
    roasterId: 'savorworks',
    origin: 'India',
    region: 'Ratnagiri & Riverdale Estates',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Fruity', 'Balanced', 'Silky', 'Complex'],
    flavorProfile: { acidity: 8, sweetness: 9, body: 7, bitterness: 2, aftertaste: 9 },
    brewMethod: 'V60',
    review: "Bossi's Wife is a beautifully named, beautifully crafted blend from Ratnagiri and Riverdale estates. Fruity yet balanced, silky yet complex. Savorworks shows why blending is an art. 5/5.",
    date: '2025-03-16',
    category: ['best', 'on-repeat', 'premium']
  },
  {
    id: 'sw-hisenberg',
    name: 'Hisenberg Riverdale (Natural)',
    roaster: 'Savorworks Coffee',
    roasterId: 'savorworks',
    origin: 'India',
    region: 'Riverdale Estate',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Explosive', 'Fruity', 'Bold', 'Heisenberg-Level'],
    flavorProfile: { acidity: 9, sweetness: 9, body: 7, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'Named after the uncertainty principle, and there is absolutely no uncertainty about the quality here. Explosive fruit, bold character, and a complexity that keeps you guessing with every sip. 5/5.',
    date: '2025-03-18',
    category: ['best', 'premium']
  },
  {
    id: 'sw-fruit-bomb',
    name: 'Fruit Bomb - Anti-Moderation Natural (Ratnagiri)',
    roaster: 'Savorworks Coffee',
    roasterId: 'savorworks',
    origin: 'India',
    region: 'Ratnagiri Estate',
    process: 'Natural',
    roast: 'Light',
    rating: 5,
    notes: ['Fruit Explosion', 'Extreme', 'Juicy', 'Unapologetic'],
    flavorProfile: { acidity: 10, sweetness: 10, body: 6, bitterness: 1, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'Anti-Moderation is right. This coffee does not hold back — it is an absolute fruit explosion that refuses to be subtle. Juicy, extreme, unapologetic. Savorworks says "more is more" and they are right. 5/5.',
    date: '2025-03-20',
    category: ['best', 'premium']
  },

  // ── HANDCRAFTED ──
  {
    id: 'hc-bacteria-culture',
    name: 'Alcohol Bacteria Culture (Ratnagiri, Chikmanglur)',
    roaster: 'Handcrafted Cafe Roasters',
    roasterId: 'handcrafted',
    origin: 'India',
    region: 'Ratnagiri & Chikmanglur',
    process: 'Alcohol Bacteria Culture',
    roast: 'Light',
    rating: 5,
    notes: ['Funky', 'Wild', 'Boozy', 'Complex', 'Unique'],
    flavorProfile: { acidity: 8, sweetness: 9, body: 7, bitterness: 2, aftertaste: 10 },
    brewMethod: 'V60',
    review: 'This is the frontier of coffee processing. Alcohol bacteria culture creates flavors that should not be possible from coffee — boozy, funky, wild, and incredibly complex. If you want to taste the future, this is it. 5/5.',
    date: '2025-03-22',
    category: ['best', 'premium']
  },
  {
    id: 'hc-orchardale',
    name: 'Orchardale Estate',
    roaster: 'Handcrafted Cafe Roasters',
    roasterId: 'handcrafted',
    origin: 'India',
    process: 'Natural',
    roast: 'Medium-Light',
    rating: 5,
    notes: ['Estate Character', 'Clean', 'Rich', 'Elegant'],
    flavorProfile: { acidity: 7, sweetness: 8, body: 7, bitterness: 2, aftertaste: 8 },
    brewMethod: 'V60',
    review: 'Orchardale Estate is everything a single origin should be — clean, rich, and elegant with unmistakable estate character. Handcrafted does it again. 5/5.',
    date: '2025-03-24',
    category: ['best']
  },

  // ── AMBROSIA ──
  {
    id: 'ambrosia-udayagiri',
    name: 'Udayagiri Estate',
    roaster: 'Ambrosia Roasters',
    roasterId: 'ambrosia',
    origin: 'India',
    process: 'Washed',
    roast: 'Medium',
    rating: 4,
    notes: ['Smooth', 'Sweet', 'Balanced', 'Elegant'],
    flavorProfile: { acidity: 6, sweetness: 7, body: 7, bitterness: 3, aftertaste: 7 },
    brewMethod: 'V60',
    review: 'Smooth, sweet, and elegantly balanced. Udayagiri Estate through Ambrosia Roasters is a consistently pleasurable cup. 4/5.',
    date: '2025-03-25',
    category: ['on-repeat']
  },

  // ── COFFEEVERSE ──
  {
    id: 'cv-moonlit-manay',
    name: 'Moonlit Manay',
    roaster: 'Coffeeverse',
    roasterId: 'coffeeverse',
    origin: 'India',
    process: 'Natural',
    roast: 'Light',
    rating: 1,
    notes: ['Underwhelming', 'Thin', 'Flat'],
    flavorProfile: { acidity: 3, sweetness: 3, body: 3, bitterness: 4, aftertaste: 2 },
    brewMethod: 'V60',
    review: 'Beautiful name, beautiful branding, disappointing cup. Moonlit Manay is underwhelming in every dimension — thin, flat, with none of the magic the name promises. 1/5.',
    date: '2025-03-08',
    category: ['worst']
  },
  {
    id: 'cv-biodynamic',
    name: 'Bio-Dynamic Natural Filter',
    roaster: 'Coffeeverse',
    roasterId: 'coffeeverse',
    origin: 'India',
    process: 'Bio-Dynamic Natural',
    roast: 'Medium-Light',
    rating: 3,
    notes: ['Interesting', 'Natural', 'Earthy', 'Mild'],
    flavorProfile: { acidity: 5, sweetness: 5, body: 6, bitterness: 3, aftertaste: 5 },
    brewMethod: 'V60',
    review: 'An interesting concept — bio-dynamic farming meets natural processing. The result is pleasant and earthy but does not reach the heights the method promises. 3/5.',
    date: '2025-03-10',
  },

  // ── KULP ──
  {
    id: 'kulp-barrel',
    name: 'Barrel Whiskey Aged',
    roaster: 'Kulp Coffee',
    roasterId: 'kulp',
    origin: 'India',
    process: 'Barrel Aged',
    roast: 'Medium-Dark',
    rating: 1,
    notes: ['Overpowering Whiskey', 'Lost Coffee Character', 'Gimmicky'],
    flavorProfile: { acidity: 2, sweetness: 4, body: 7, bitterness: 6, aftertaste: 3 },
    brewMethod: 'French Press',
    review: 'An interesting concept that fails in execution. The whiskey barrel aging completely overpowers the coffee — you are drinking a bad whiskey impression, not coffee. Gimmicky. 1/5.',
    date: '2024-12-10',
    category: ['worst']
  },

  // ── THIRD WAVE ──
  {
    id: 'tw-chikmanglur',
    name: 'Chikmanglur Region Single Origin',
    roaster: 'Third Wave Coffee',
    roasterId: 'third-wave',
    origin: 'India',
    region: 'Chikmanglur, Karnataka',
    process: 'Washed',
    roast: 'Medium',
    rating: 0,
    notes: ['Worst', 'Stale', 'Defective', 'Offensive'],
    flavorProfile: { acidity: 2, sweetness: 1, body: 3, bitterness: 8, aftertaste: 1 },
    brewMethod: 'V60',
    review: 'The worst coffee I have had in the last 6 months. Stale, defective, offensive to the senses. This is an insult to the Chikmanglur region and to specialty coffee in general. 0/5. Absolutely unacceptable.',
    date: '2025-03-26',
    category: ['worst']
  },
];

// ──────────────────────────────────────
// BREWING METHODS
// ──────────────────────────────────────

export const brewingMethods = [
  {
    id: 'v60',
    name: 'Hario V60',
    type: 'Pour Over',
    difficulty: 'Intermediate',
    time: '3-4 min',
    ratio: '1:15',
    grind: 'Medium-Fine',
    description: 'The gold standard of pour-over brewing. The V60 cone shape and spiral ridges create a uniform extraction that highlights the nuanced flavors of specialty coffee. Its paper filter produces an incredibly clean cup.',
    whyBest: 'The V60 gives you complete control over every variable — water temperature, pour rate, agitation, bloom time. This control means you can dial in any coffee to its absolute best. The conical shape and single large hole create a faster draw-down than flat-bottom brewers, which preserves delicate floral and fruity notes that other methods can muddle. There is a reason almost every coffee in my journal was brewed on a V60.',
    rating: 10,
    icon: '☕',
    steps: [
      'Heat water to 92-96°C (just off boil)',
      'Rinse paper filter with hot water, discard rinse water',
      'Add 15g medium-fine ground coffee',
      'Bloom with 30-45ml water for 30-45 seconds',
      'Pour in slow, steady concentric circles to 250ml',
      'Total brew time target: 2:30-3:30'
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    type: 'Immersion/Pressure',
    difficulty: 'Beginner',
    time: '2-3 min',
    ratio: '1:12',
    grind: 'Medium',
    description: 'Versatile and forgiving. The AeroPress combines immersion brewing with gentle pressure to produce a concentrated, clean cup. Great for travel and experimentation.',
    rating: 9,
    icon: '🫗',
    steps: [
      'Heat water to 85-92°C',
      'Add 17g medium ground coffee (inverted method)',
      'Pour 200ml water, stir gently',
      'Steep for 1-2 minutes',
      'Flip and press steadily for 30 seconds',
      'Dilute to taste'
    ]
  },
  {
    id: 'french-press',
    name: 'French Press',
    type: 'Immersion',
    difficulty: 'Beginner',
    time: '4-5 min',
    ratio: '1:15',
    grind: 'Coarse',
    description: 'Full immersion brewing that produces a rich, full-bodied cup. The metal mesh filter allows oils and fine particles through, giving French Press coffee its characteristic thick mouthfeel.',
    rating: 7,
    icon: '🍵',
    steps: [
      'Heat water to 93-96°C',
      'Add 30g coarsely ground coffee',
      'Pour 450ml water, stir once',
      'Place lid on, do not press',
      'Wait 4 minutes',
      'Press slowly and serve immediately'
    ]
  },
  {
    id: 'espresso',
    name: 'Espresso',
    type: 'Pressure',
    difficulty: 'Advanced',
    time: '25-30 sec',
    ratio: '1:2',
    grind: 'Fine',
    description: 'High-pressure extraction that produces a concentrated, intense shot with crema. The foundation for all milk-based drinks. Requires significant investment in equipment and technique.',
    rating: 9,
    icon: '☕',
    steps: [
      'Dose 18g finely ground coffee into portafilter',
      'Distribute and tamp evenly at 15kg pressure',
      'Lock portafilter, start extraction',
      'Target 36g output in 25-30 seconds',
      'Look for tiger striping in the pour',
      'Serve immediately'
    ]
  },
  {
    id: 'chemex',
    name: 'Chemex',
    type: 'Pour Over',
    difficulty: 'Intermediate',
    time: '4-5 min',
    ratio: '1:16',
    grind: 'Medium-Coarse',
    description: 'Elegant glass brewer with thick bonded filters that absorb oils and fine particles. Produces the cleanest, most tea-like cup of any brewing method.',
    rating: 8,
    icon: '⏳',
    steps: [
      'Heat water to 93-96°C',
      'Place thick filter, rinse thoroughly',
      'Add 30g medium-coarse ground coffee',
      'Bloom with 60ml for 45 seconds',
      'Pour steadily to 480ml',
      'Total brew time: 4:00-5:00'
    ]
  },
  {
    id: 'moka-pot',
    name: 'Moka Pot',
    type: 'Pressure',
    difficulty: 'Beginner',
    time: '5-7 min',
    ratio: '1:7',
    grind: 'Medium-Fine',
    description: 'Stovetop brewer that uses steam pressure to push water through coffee. Produces a strong, concentrated brew closest to espresso without a machine.',
    rating: 7,
    icon: '🫖',
    steps: [
      'Fill bottom chamber with hot water to valve',
      'Fill basket with medium-fine ground coffee, level off',
      'Assemble and place on medium heat',
      'Remove from heat when you hear hissing',
      'Run cold water on bottom to stop extraction',
      'Serve immediately'
    ]
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    type: 'Immersion',
    difficulty: 'Beginner',
    time: '12-24 hrs',
    ratio: '1:8',
    grind: 'Extra Coarse',
    description: 'Low temperature, long extraction time produces a smooth, low-acid concentrate. Sweet and mellow flavor profile that is refreshing served cold.',
    rating: 7,
    icon: '🧊',
    steps: [
      'Grind 100g coffee extra coarse',
      'Add to container with 800ml cold filtered water',
      'Stir gently to saturate grounds',
      'Refrigerate for 12-24 hours',
      'Strain through fine mesh then paper filter',
      'Dilute concentrate 1:1 with water or milk'
    ]
  },
  {
    id: 'siphon',
    name: 'Siphon / Vacuum',
    type: 'Immersion/Vacuum',
    difficulty: 'Advanced',
    time: '5-8 min',
    ratio: '1:15',
    grind: 'Medium',
    description: 'Theatrical brewing method using vacuum pressure to move water between chambers. Produces an exceptionally clean, aromatic cup. The visual spectacle alone is worth it.',
    rating: 8,
    icon: '🔬',
    steps: [
      'Add water to bottom chamber, heat',
      'Attach top chamber with filter',
      'Water rises to top when boiling',
      'Add 25g medium ground coffee, stir',
      'Brew for 60-90 seconds',
      'Remove heat, vacuum pulls coffee down',
      'Serve from bottom chamber'
    ]
  },
  {
    id: 'south-indian-filter',
    name: 'South Indian Filter',
    type: 'Drip/Percolation',
    difficulty: 'Beginner',
    time: '10-15 min',
    ratio: '1:10',
    grind: 'Fine',
    description: 'Traditional South Indian two-chamber metal filter. Coffee drips slowly through fine grounds, producing a strong decoction traditionally mixed with hot milk and sugar.',
    rating: 8,
    icon: '🇮🇳',
    steps: [
      'Add 20g finely ground coffee-chicory blend to upper chamber',
      'Lightly press with the tamper disc',
      'Pour 200ml boiling water',
      'Cover and wait 10-15 minutes',
      'Collect decoction from bottom chamber',
      'Mix with hot milk in tumbler, pour back and forth to froth'
    ]
  }
];

// ──────────────────────────────────────
// COFFEE KNOWLEDGE
// ──────────────────────────────────────

export const coffeeKnowledge = {
  roastLevels: [
    { name: 'Light', temp: '180-205°C', color: '#c4a882', description: 'Highest acidity, most origin character. Fruity, floral notes. First crack.', flavor: 'Bright, fruity, acidic, floral, tea-like' },
    { name: 'Medium-Light', temp: '210-220°C', color: '#a0784a', description: 'Balanced acidity and body. Caramel sweetness develops. Just past first crack.', flavor: 'Sweet, balanced, caramel, nutty' },
    { name: 'Medium', temp: '220-230°C', color: '#8b5e3c', description: 'Balanced cup. Origin and roast flavors coexist. Sweet spot for many origins.', flavor: 'Chocolate, caramel, balanced, smooth' },
    { name: 'Medium-Dark', temp: '230-240°C', color: '#5c3d2e', description: 'Lower acidity, more body. Roast character begins to dominate.', flavor: 'Dark chocolate, spice, smoky undertones' },
    { name: 'Dark', temp: '240-250°C', color: '#2d1f14', description: 'Dominated by roast flavor. Low acidity, heavy body. Second crack and beyond.', flavor: 'Smoky, bitter, charcoal, bold' }
  ],
  processingMethods: [
    { name: 'Washed (Wet)', description: 'Cherry skin and mucilage removed before drying. Produces clean, bright cups with high clarity.', flavor: 'Clean, bright, high clarity, origin-forward' },
    { name: 'Natural (Dry)', description: 'Whole cherry dried intact. Fruit ferments around the bean, imparting fruity, wine-like flavors.', flavor: 'Fruity, wine-like, sweet, full-bodied' },
    { name: 'Honey', description: 'Skin removed but mucilage left on during drying. Bridges washed clarity and natural sweetness.', flavor: 'Sweet, syrupy, balanced, stone fruit' },
    { name: 'Pulp Sun Dried', description: 'Pulped cherry dried in the sun. Combines elements of washed and natural with sun-dried character.', flavor: 'Fruity, bright, honey-like, clean' },
    { name: 'Anaerobic Natural', description: 'Fermented in sealed, oxygen-free tanks. Produces intense, unique tropical flavors.', flavor: 'Intense, funky, tropical, unique' },
    { name: 'Carbonic Maceration', description: 'Borrowed from winemaking. Whole cherries fermented in CO2-rich environment.', flavor: 'Sparkling, fruity, complex, wine-like' },
    { name: 'Extended Fermentation', description: 'Prolonged fermentation (48-120 hours) develops complex flavor compounds.', flavor: 'Complex, layered, intense sweetness' },
    { name: 'Honey Sundried', description: 'Honey processed then sun dried. Combines honey sweetness with sun-dried depth.', flavor: 'Warm, honey-sweet, complex, deep' },
    { name: 'Alcohol Bacteria Culture', description: 'Cutting-edge process using alcohol-producing bacteria during fermentation. Creates boozy, wild flavors impossible through other methods.', flavor: 'Boozy, funky, wild, complex, unprecedented' },
    { name: 'Bio-Dynamic Natural', description: 'Coffee grown using bio-dynamic farming principles, then naturally processed. Emphasizes terroir and natural harmony.', flavor: 'Earthy, natural, terroir-driven, holistic' },
    { name: 'Barrel Aged', description: 'Green or roasted beans aged in spirit barrels (whiskey, rum, wine). Absorbs barrel character.', flavor: 'Boozy, woody, sweet, spirit-forward' }
  ],
  beanTypes: [
    { name: 'Arabica', share: '60-70%', description: 'The specialty standard. Grown at high altitudes. Complex flavors, higher acidity, lower caffeine.', regions: 'Ethiopia, Colombia, Brazil, India, Kenya' },
    { name: 'Robusta', share: '30-40%', description: 'Hardier plant, lower altitudes. Higher caffeine, more bitter, fuller body. Used in espresso blends.', regions: 'Vietnam, Brazil, Indonesia, India' },
    { name: 'Liberica', share: '<2%', description: 'Rare species with large, asymmetric beans. Unique floral and fruity aroma with woody body.', regions: 'Philippines, Malaysia, West Africa' }
  ],
  flavorCategories: [
    { category: 'Fruity', notes: ['Berry', 'Citrus', 'Stone Fruit', 'Tropical', 'Apple', 'Grape'], color: '#e74c3c' },
    { category: 'Sweet', notes: ['Chocolate', 'Caramel', 'Honey', 'Vanilla', 'Brown Sugar', 'Maple'], color: '#d4a24e' },
    { category: 'Floral', notes: ['Jasmine', 'Rose', 'Lavender', 'Bergamot', 'Elderflower', 'Chamomile'], color: '#9b59b6' },
    { category: 'Nutty', notes: ['Almond', 'Hazelnut', 'Walnut', 'Peanut', 'Pecan', 'Cashew'], color: '#8b5e3c' },
    { category: 'Spicy', notes: ['Cinnamon', 'Clove', 'Ginger', 'Black Pepper', 'Cardamom', 'Nutmeg'], color: '#e67e22' },
    { category: 'Earthy', notes: ['Tobacco', 'Cedar', 'Leather', 'Mushroom', 'Moss', 'Forest Floor'], color: '#27ae60' }
  ],
  dryingMethods: [
    { name: 'Raised Beds / African Beds', description: 'Elevated mesh beds allow air circulation from all sides. Gold standard for even drying. Coffee turned regularly over 1-3 weeks.' },
    { name: 'Patio Drying', description: 'Coffee spread on concrete or brick patios. Turned frequently with rakes. Common in Brazil and larger farms.' },
    { name: 'Mechanical Dryers', description: 'Rotating drum dryers to speed up the process. Allows control regardless of weather.' },
    { name: 'Greenhouse / Covered', description: 'Drying inside transparent structures that protect from rain while allowing solar heat.' }
  ]
};

// ──────────────────────────────────────
// HELPER FUNCTIONS
// ──────────────────────────────────────

export const getBestCoffees = () => coffees.filter(c => c.category?.includes('best')).sort((a, b) => b.rating - a.rating);
export const getOnRepeatCoffees = () => coffees.filter(c => c.category?.includes('on-repeat'));
export const getPremiumCoffees = () => coffees.filter(c => c.category?.includes('premium'));
export const getWorstCoffees = () => coffees.filter(c => c.category?.includes('worst')).sort((a, b) => a.rating - b.rating);
export const getGoodRoasters = () => roasters.filter(r => r.category?.includes('good'));
export const getGreatBrandingRoasters = () => roasters.filter(r => r.category?.includes('great-branding'));
export const getPremiumRoasters = () => roasters.filter(r => r.category?.includes('premium'));
