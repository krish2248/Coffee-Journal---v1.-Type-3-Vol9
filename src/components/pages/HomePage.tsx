import { useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { coffees, roasters, brewingMethods } from '../../data/coffees';

type Page = 'home' | 'collection' | 'brewing' | 'guide' | 'profile' | 'roasters';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

// ─── DATA ───────────────────────────────────────────

const coffeeFacts = [
  "Coffee is the second most traded commodity on Earth after oil",
  "A coffee tree takes 3-4 years to produce its first harvest",
  "Finland drinks the most coffee per capita in the world",
  "The word 'coffee' comes from the Arabic 'qahwa'",
  "Beethoven counted exactly 60 beans per cup",
  "Goats discovered coffee",
  "Espresso means 'pressed out' in Italian",
  "There are over 100 species of coffee plants",
  "The world drinks about 2.25 billion cups of coffee daily",
  "Coffee was banned 5 times in history by different cultures",
];

const mySetup = [
  { name: 'Agaro Grinder', desc: 'Manual burr grinder for consistent grind size', icon: '1' },
  { name: 'Hario V60 02', desc: 'The iconic cone-shaped pour-over dripper', icon: '2' },
  { name: 'Hario S02 Filter Papers', desc: 'Tabbed paper filters for the V60', icon: '3' },
  { name: 'Beans.co Weighing Scale', desc: 'Precision scale for dose + brew time', icon: '4' },
  { name: 'Milton Kettle 600ml', desc: 'Gooseneck kettle for controlled pouring', icon: '5' },
  { name: '1 Ceramic Mug', desc: 'One mug. That is all you need.', icon: '6' },
];

const worldData = [
  { stat: '2.25B', label: 'Cups consumed daily worldwide' },
  { stat: '170M', label: '60kg bags produced per year' },
  { stat: '$495B', label: 'Global coffee industry value' },
  { stat: '125M', label: 'People depend on coffee for livelihood' },
  { stat: '12.5kg', label: 'Finland per capita consumption (highest)' },
  { stat: '70+', label: 'Countries that grow coffee commercially' },
  { stat: '3-5%', label: 'Of all coffee qualifies as specialty grade' },
  { stat: '80+', label: 'Score required on 100-point scale for specialty' },
];

const healthBenefits = [
  { title: 'Antioxidant Powerhouse', desc: 'Black coffee is one of the richest dietary sources of antioxidants, outperforming most fruits and vegetables.' },
  { title: 'Brain Performance', desc: 'Caffeine blocks adenosine receptors, improving alertness, reaction time, and cognitive function for 4-6 hours.' },
  { title: 'Metabolism Boost', desc: 'Black coffee increases metabolic rate by 3-11% and enhances fat oxidation, especially before exercise.' },
  { title: 'Liver Protection', desc: 'Regular coffee consumption is linked to 40% lower risk of liver cancer and reduced liver fibrosis.' },
  { title: 'Heart Health', desc: '3-5 cups daily associated with 15% lower risk of cardiovascular disease per Harvard meta-analysis.' },
  { title: 'Longevity', desc: 'Multiple large studies associate 3-4 cups/day with 12-16% lower all-cause mortality risk.' },
];

const coffeeTypes = [
  { name: 'Arabica', share: '60-70%', desc: 'The specialty standard. Complex flavors, higher acidity, lower caffeine. Grown at 900-2000m altitude.' },
  { name: 'Robusta', share: '30-40%', desc: 'Hardier plant, lower altitudes. Higher caffeine (2x Arabica), more bitter. Used in espresso blends and instant coffee.' },
  { name: 'Liberica', share: '<2%', desc: 'Rare. Large asymmetric beans with unique floral and woody character. Found in Philippines and Malaysia.' },
];

const specialtyVsCommercial = [
  { aspect: 'Sourcing', specialty: 'Single origin, traceable to farm', commercial: 'Bulk blends, unknown origins' },
  { aspect: 'Quality', specialty: '80+ SCA score, Q-grader evaluated', commercial: 'No grading system applied' },
  { aspect: 'Roasting', specialty: 'Light-medium, preserves origin', commercial: 'Dark roast, masks defects' },
  { aspect: 'Freshness', specialty: 'Roasted within 2-4 weeks', commercial: 'Months to years on shelf' },
  { aspect: 'Price per kg', specialty: '800-3000+', commercial: '200-500' },
  { aspect: 'Flavor', specialty: 'Complex, nuanced, origin-specific', commercial: 'Generic, bitter, flat' },
];

// ─── HERO ───────────────────────────────────────────

function HeroSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const totalCoffees = coffees.length;
  const totalRoasters = roasters.length;
  const avgRating = (coffees.reduce((a, c) => a + c.rating, 0) / totalCoffees).toFixed(1);
  const fiveStarCount = coffees.filter(c => c.rating === 5).length;
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-orb', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, stagger: 0.15 }, 0);
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, 0.3);
      tl.fromTo('.hero-title-line', { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.8, stagger: 0.15 }, 0.4);
      tl.fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 0.6, y: 0, duration: 0.7 }, 0.9);
      tl.fromTo('.hero-stat', { opacity: 0, y: 30, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 }, 1.1);
      tl.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 1.3);
      tl.fromTo(heroImageRef.current, { opacity: 0, scale: 1.2, rotate: -5 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.4, ease: 'power2.out' }, 0.2);

      gsap.to('.hero-orb', {
        y: 'random(-30, 30)', x: 'random(-20, 20)',
        duration: 'random(4, 7)', repeat: -1, yoyo: true, ease: 'sine.inOut',
        stagger: { each: 0.5, from: 'random' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleImageMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroImageRef.current) return;
    const rect = heroImageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const yy = (e.clientY - rect.top - rect.height / 2) / rect.height;
    gsap.to(heroImageRef.current, { rotateY: x * 15, rotateX: -yy * 15, duration: 0.4, ease: 'power2.out' });
  }, []);

  const handleImageMouseLeave = useCallback(() => {
    if (!heroImageRef.current) return;
    gsap.to(heroImageRef.current, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb absolute w-[600px] h-[600px] rounded-full opacity-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', left: '55%', top: '-10%' }} />
        <div className="hero-orb absolute w-[500px] h-[500px] rounded-full opacity-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', left: '70%', top: '50%' }} />
        <div className="hero-orb absolute w-[400px] h-[400px] rounded-full opacity-0" style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.06) 0%, transparent 70%)', left: '20%', top: '60%' }} />
        <div className="hero-orb absolute w-[300px] h-[300px] rounded-full opacity-0" style={{ background: 'radial-gradient(circle, rgba(212,162,78,0.05) 0%, transparent 70%)', left: '10%', top: '10%' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/50 backdrop-blur-sm text-sm mb-8 opacity-0">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              730+ days of black coffee
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              <span className="hero-title-line block overflow-hidden">Black</span>
              <span className="hero-title-line block overflow-hidden text-[var(--accent)] glow-text">Coffee</span>
              <span className="hero-title-line block text-3xl md:text-4xl lg:text-5xl font-normal opacity-50 mt-2 overflow-hidden">& Nothing Else</span>
            </h1>

            <p ref={descRef} className="text-lg md:text-xl max-w-xl leading-relaxed mb-12 opacity-0">
              Two years. Every single morning. No sugar, no milk, no compromise.
              This is my journal of tasting, discovering, and falling deeper into
              the world of specialty coffee.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              {[
                { value: totalCoffees, label: 'Coffees Tasted' },
                { value: totalRoasters, label: 'Roasters' },
                { value: avgRating, label: 'Avg Rating' },
                { value: fiveStarCount, label: '5-Star Coffees' },
                { value: '730+', label: 'Days Brewing' },
                { value: brewingMethods.length, label: 'Brew Methods' },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat text-center opacity-0">
                  <div className="text-3xl md:text-4xl font-bold font-mono text-[var(--accent)]">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('collection')} className="hero-cta px-8 py-3 bg-[var(--accent)] text-black rounded-full font-medium hover:bg-white transition-colors duration-300 opacity-0">
                Explore Collection
              </button>
              <button onClick={() => onNavigate('guide')} className="hero-cta px-8 py-3 border border-[var(--border-color)] rounded-full font-medium hover:bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 opacity-0">
                Beginner's Guide
              </button>
            </div>
          </div>

          <motion.div style={{ y: imgY }} className="hidden lg:flex items-center justify-center">
            <div ref={heroImageRef} onMouseMove={handleImageMouseMove} onMouseLeave={handleImageMouseLeave} className="relative opacity-0" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
              <div className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden border border-[var(--border-color)]/30">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop&q=80" alt="Black coffee" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">Top Rated</div>
                  <div className="text-2xl font-bold text-white">Silver Oak TV-KV</div>
                  <div className="text-white/50 text-sm mt-1">Blue Tokai &middot; 5/5</div>
                  <div className="flex gap-1.5 mt-3">
                    {['Complex', 'Balanced', 'Sweet'].map(n => (
                      <span key={n} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70 backdrop-blur-sm">{n}</span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div className="absolute -top-6 -right-10 px-4 py-3 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border-color)] text-sm shadow-2xl backdrop-blur-md" animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <span className="text-xs uppercase tracking-widest opacity-40 block">Method</span>
                <span className="font-bold text-[var(--accent)]">V60 Pour Over</span>
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-12 px-4 py-3 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border-color)] text-sm shadow-2xl backdrop-blur-md" animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <span className="text-xs uppercase tracking-widest opacity-40 block">Temp</span>
                <span className="font-bold font-mono text-[var(--accent)]">93°C</span>
              </motion.div>
              <motion.div className="absolute top-1/3 -left-16 px-4 py-3 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border-color)] text-sm shadow-2xl backdrop-blur-md" animate={{ y: [-4, 8, -4] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="text-xs uppercase tracking-widest opacity-40 block">Roast</span>
                <span className="font-bold text-[var(--accent)]">Light</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-xs tracking-widest uppercase opacity-50">Scroll</span>
        <div className="w-5 h-8 border-2 border-[var(--border-color)] rounded-full flex items-start justify-center p-1">
          <motion.div className="w-1 h-2 bg-[var(--accent)] rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}

// ─── FACT TICKER ─────────────────────────────────────

function FactTicker() {
  return (
    <div className="py-3 border-y border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...coffeeFacts, ...coffeeFacts].map((fact, i) => (
            <span key={i} className="text-sm opacity-50 whitespace-nowrap flex items-center gap-6">
              <span className="text-[var(--accent)]">&#9679;</span>
              {fact}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WHY BLACK COFFEE ────────────────────────────────

function WhyBlackCoffee() {
  const reasons = [
    { title: 'Pure Flavor', desc: "No milk or sugar to mask the bean's true character. Every origin, every process — you taste it all." },
    { title: 'Clarity', desc: "Black coffee is honest. It tells you if the roast is good, if the brew is right. There's nowhere to hide." },
    { title: 'Daily Ritual', desc: 'Every morning at 7am. Grind, bloom, pour. 3 minutes of meditation before the day begins.' },
    { title: 'The Focus', desc: 'Not for the caffeine — for the clarity. A well-brewed black coffee is like pressing reset on your brain.' },
    { title: 'Terroir', desc: 'Like wine, coffee is a product of its place. Black coffee lets you taste Ethiopia vs Colombia vs India.' },
    { title: 'Respect', desc: "Farmers, processors, roasters — years of work in every bean. Drinking it black is how I honor that chain." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why <span className="text-[var(--accent)]">Black</span> Coffee?</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">People ask me why I drink my coffee black. Here's why I'll never go back.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} className="card-hover p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MY SETUP ────────────────────────────────────────

function MySetup() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-[var(--accent)]">Setup</span></h2>
          <p className="text-lg opacity-50 max-w-2xl">Everything I use to brew. Simple, intentional, no fluff. Total cost under 5000.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mySetup.map((item, i) => (
            <motion.div key={item.name} className="card-hover p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] font-bold text-lg flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm opacity-50 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY V60 ─────────────────────────────────────────

function WhyV60() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why I Brew with the <span className="text-[var(--accent)]">V60</span></h2>
            <p className="opacity-60 leading-relaxed mb-6">
              The Hario V60 is a 60-degree cone with spiral ridges and a single large hole at the bottom.
              It sounds simple, but it gives you complete control over every variable that matters: water temperature,
              pour rate, agitation, bloom time, and draw-down speed.
            </p>
            <p className="opacity-60 leading-relaxed mb-6">
              The conical shape creates a faster flow rate than flat-bottom brewers. This preserves delicate floral
              and fruity notes that other methods muddle. Paper filters remove oils and fines, giving you a
              crystalline cup where every flavor note is distinct and clean.
            </p>
            <p className="opacity-60 leading-relaxed mb-8">
              There's a reason almost every coffee in my journal was brewed on a V60 — it lets the coffee
              speak for itself. The V60 does not add or hide anything. It's the most honest way to experience a bean.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Grind', value: 'Medium-Fine' },
                { label: 'Ratio', value: '1:15 (15g:225ml)' },
                { label: 'Water Temp', value: '92-96°C' },
                { label: 'Brew Time', value: '2:30-3:30' },
                { label: 'Bloom', value: '30-45ml, 30-45s' },
                { label: 'Filter', value: 'Hario S02 paper' },
              ].map(s => (
                <div key={s.label} className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-xs uppercase tracking-widest opacity-40">{s.label}</div>
                  <div className="font-medium text-sm mt-1">{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-3xl overflow-hidden border border-[var(--border-color)]/30 aspect-square">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&h=700&fit=crop&q=80" alt="V60 pour over brewing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── WHAT IS SPECIALTY COFFEE ────────────────────────

function WhatIsSpecialty() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What is <span className="text-[var(--accent)]">Specialty</span> Coffee?</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">
            Specialty coffee scores 80+ on a 100-point scale by certified Q Graders.
            It represents just 3-5% of all coffee produced worldwide.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Specialty vs Commercial</h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="text-left py-3 px-4 opacity-50 font-medium">Aspect</th>
                  <th className="text-left py-3 px-4 text-[var(--accent)] font-bold">Specialty</th>
                  <th className="text-left py-3 px-4 opacity-40 font-medium">Commercial</th>
                </tr>
              </thead>
              <tbody>
                {specialtyVsCommercial.map(row => (
                  <tr key={row.aspect} className="border-b border-[var(--border-color)]/50">
                    <td className="py-3 px-4 font-medium">{row.aspect}</td>
                    <td className="py-3 px-4 opacity-80">{row.specialty}</td>
                    <td className="py-3 px-4 opacity-40">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">What is <span className="text-[var(--accent)]">Manual Brew</span>?</h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              <h4 className="font-bold text-lg mb-3">Manual Brewing</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Manual (or hand) brewing means you control every variable: the water temperature,
                pour rate, grind size, coffee-to-water ratio, and brew time. Methods include V60,
                Chemex, AeroPress, French Press, and Siphon. The barista (you) is the machine.
              </p>
              <p className="text-sm opacity-60 leading-relaxed mt-3">
                The result? A cup that's perfectly dialed in to your taste. Manual brewing is slower
                and takes practice, but it produces flavors that automatic machines cannot replicate.
                It's meditative, precise, and deeply satisfying.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              <h4 className="font-bold text-lg mb-3">Why It Matters</h4>
              <ul className="text-sm opacity-60 space-y-3 leading-relaxed">
                <li><strong className="text-[var(--accent)] opacity-100">Control:</strong> Adjust every variable to match the specific coffee you're brewing</li>
                <li><strong className="text-[var(--accent)] opacity-100">Clarity:</strong> Paper filters remove oils and sediment, revealing clean flavors</li>
                <li><strong className="text-[var(--accent)] opacity-100">Cost:</strong> A V60 costs 500. A good espresso machine costs 50,000+</li>
                <li><strong className="text-[var(--accent)] opacity-100">Portability:</strong> A V60 fits in your backpack. Brew anywhere.</li>
                <li><strong className="text-[var(--accent)] opacity-100">Learning:</strong> You learn what makes coffee taste good by doing it yourself</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COFFEE TYPES ────────────────────────────────────

function CoffeeTypesSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const methods = [
    { name: 'Espresso', desc: 'The foundation — 25ml of concentrated intensity', color: '#3c1518' },
    { name: 'Pour Over', desc: 'Clean, bright, and full of clarity', color: '#92400e' },
    { name: 'French Press', desc: 'Full-bodied and rich, oils and all', color: '#5c3d2e' },
    { name: 'Cold Brew', desc: '24 hours of patience, worth every minute', color: '#1e3a5f' },
    { name: 'Aeropress', desc: 'The Swiss Army knife of brewing', color: '#4a5568' },
    { name: 'Moka Pot', desc: 'Stovetop magic, Italian style', color: '#6b4226' },
    { name: 'Chemex', desc: "The cleanest cup you'll ever taste", color: '#d4a24e' },
    { name: 'Siphon', desc: 'Science meets art in a vacuum', color: '#8b4513' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Types of <span className="text-[var(--accent)]">Coffee</span></h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">From bean species to brew methods — the fundamentals.</p>
        </motion.div>

        {/* Bean species */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {coffeeTypes.map((t, i) => (
            <motion.div key={t.name} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-xl">{t.name}</h3>
                <span className="text-sm font-mono text-[var(--accent)]">{t.share}</span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brew methods */}
        <h3 className="text-2xl font-bold mb-6 text-center">Brewing <span className="text-[var(--accent)]">Methods</span></h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {methods.map((t, i) => (
            <motion.div key={t.name} className="card-hover p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-center cursor-pointer group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} onClick={() => onNavigate('brewing')}>
              <div className="w-10 h-10 rounded-full mx-auto mb-4 border border-[var(--border-color)]" style={{ background: t.color }} />
              <h3 className="font-bold text-lg mb-1">{t.name}</h3>
              <p className="text-xs opacity-50">{t.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button onClick={() => onNavigate('brewing')} className="text-sm text-[var(--accent)] hover:underline font-medium">Explore all brewing methods &rarr;</button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── HEALTH BENEFITS ─────────────────────────────────

function HealthBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Health <span className="text-[var(--accent)]">Benefits</span></h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">What science says about black coffee. No milk, no sugar — just the good stuff.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthBenefits.map((b, i) => (
            <motion.div key={b.title} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WORLD DATA ──────────────────────────────────────

function WorldDataSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Coffee by the <span className="text-[var(--accent)]">Numbers</span></h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">Global coffee statistics. The scale of the world's favorite drug.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {worldData.map((d, i) => (
            <motion.div key={d.label} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="text-3xl font-bold font-mono text-[var(--accent)] mb-2">{d.stat}</div>
              <div className="text-xs opacity-50 leading-relaxed">{d.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Top producing / consuming countries */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="font-bold text-lg mb-4">Top Producing Countries</h3>
            {[
              { country: 'Brazil', pct: 35 },
              { country: 'Vietnam', pct: 17 },
              { country: 'Colombia', pct: 8 },
              { country: 'Indonesia', pct: 7 },
              { country: 'Ethiopia', pct: 5 },
              { country: 'India', pct: 4 },
            ].map(c => (
              <div key={c.country} className="flex items-center gap-3 mb-3">
                <span className="text-sm w-24 opacity-60">{c.country}</span>
                <div className="flex-1 h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-[var(--accent)]" initial={{ width: 0 }} whileInView={{ width: `${(c.pct / 35) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} />
                </div>
                <span className="text-xs font-mono w-10 text-right opacity-50">{c.pct}%</span>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="font-bold text-lg mb-4">Top Consuming Countries (kg/capita/yr)</h3>
            {[
              { country: 'Finland', kg: 12.5 },
              { country: 'Norway', kg: 9.9 },
              { country: 'Iceland', kg: 9.0 },
              { country: 'Denmark', kg: 8.7 },
              { country: 'Netherlands', kg: 8.4 },
              { country: 'Sweden', kg: 8.2 },
            ].map(c => (
              <div key={c.country} className="flex items-center gap-3 mb-3">
                <span className="text-sm w-24 opacity-60">{c.country}</span>
                <div className="flex-1 h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-[var(--accent)]" initial={{ width: 0 }} whileInView={{ width: `${(c.kg / 12.5) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} />
                </div>
                <span className="text-xs font-mono w-10 text-right opacity-50">{c.kg}kg</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── MY FAV ROASTERS ─────────────────────────────────

function MyFavRoasters({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const favRoasters = roasters.filter(r => r.rating === 5).sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Fav <span className="text-[var(--accent)]">Roasters</span></h2>
            <p className="text-lg opacity-50 max-w-xl">The roasters that consistently blow my mind. All rated 5/5.</p>
          </div>
          <button onClick={() => onNavigate('roasters')} className="text-sm text-[var(--accent)] hover:underline font-medium">See all {roasters.length} roasters &rarr;</button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favRoasters.map((roaster, i) => {
            const roasterCoffees = coffees.filter(c => c.roaster === roaster.name).sort((a, b) => b.rating - a.rating);
            return (
              <motion.div key={roaster.id} className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{roaster.name}</h3>
                      <p className="text-xs opacity-40">{roaster.location}</p>
                    </div>
                    <div className="flex gap-0.5 text-[var(--accent)]">{'★'.repeat(roaster.rating)}</div>
                  </div>
                  <p className="text-sm opacity-50 line-clamp-2 mb-3">{roaster.description}</p>
                  <div className="text-xs uppercase tracking-widest opacity-30 mb-1">Specialty</div>
                  <div className="text-sm font-medium mb-3">{roaster.specialty}</div>
                  {roasterCoffees.length > 0 && (
                    <div className="pt-3 border-t border-[var(--border-color)]">
                      <div className="text-xs uppercase tracking-widest opacity-30 mb-2">Top Coffees</div>
                      {roasterCoffees.slice(0, 2).map(c => (
                        <div key={c.id} className="flex items-center justify-between text-xs mb-1">
                          <span className="opacity-70 truncate mr-2">{c.name}</span>
                          <span className="text-[var(--accent)] font-mono">{c.rating}/5</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── MY FAV COFFEES ──────────────────────────────────

function MyFavCoffees({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const favCoffees = coffees.filter(c => c.rating === 5).slice(0, 6);

  const coffeeImages = [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&h=250&fit=crop',
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Fav <span className="text-[var(--accent)]">Coffees</span></h2>
            <p className="text-lg opacity-50 max-w-xl">The coffees that earned a perfect 5/5. Every one of these is extraordinary.</p>
          </div>
          <button onClick={() => onNavigate('collection')} className="text-sm text-[var(--accent)] hover:underline font-medium">See all {coffees.length} coffees &rarr;</button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favCoffees.map((coffee, i) => (
            <motion.div key={coffee.id} className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="coffee-image-card">
                <img src={coffeeImages[i % coffeeImages.length]} alt={coffee.name} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold backdrop-blur-sm border border-white/20 bg-white/10 text-white">{coffee.rating}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg leading-tight">{coffee.name}</h3>
                <p className="text-sm opacity-50">{coffee.roaster}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {coffee.notes.slice(0, 3).map(note => (
                    <span key={note} className="text-xs px-2 py-0.5 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">{note}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs opacity-50 mt-3">
                  <span>{coffee.origin}</span>
                  <span>·</span>
                  <span>{coffee.process}</span>
                  <span>·</span>
                  <span>{coffee.roast}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MY JOURNEY ──────────────────────────────────────

function MyJourney() {
  const milestones = [
    { year: '2024', month: 'Jan', event: 'First pour-over', detail: 'Borrowed a V60 from a friend. Used Blue Tokai Attikan Estate. Life changed.' },
    { year: '2024', month: 'Mar', event: 'Quit instant coffee forever', detail: 'After tasting specialty, instant coffee tasted like cardboard water. No going back.' },
    { year: '2024', month: 'Jun', event: 'Started the journal', detail: 'Too many coffees to remember. Started rating every single one. The obsession grew.' },
    { year: '2024', month: 'Sep', event: 'Dropped milk & sugar', detail: 'Realized I was tasting dairy, not coffee. Went black. The flavors exploded.' },
    { year: '2024', month: 'Dec', event: '50 coffees tasted', detail: 'Half a century of beans. Discovered my palate: fruity naturals, light roasts, high acidity.' },
    { year: '2025', month: 'Mar', event: 'Discovered anaerobic processing', detail: "Subko's Project Yung Gun changed everything. 76-hour anoxic natural. Mind = blown." },
    { year: '2025', month: 'Jun', event: '100+ coffees & counting', detail: 'Built this website to share the journey. Every cup tells a story.' },
  ];

  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The <span className="text-[var(--accent)]">Journey</span></h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">From my first pour-over to 100+ coffees tasted.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)]" />
          {milestones.map((m, i) => (
            <motion.div key={i} className={`relative mb-12 flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-secondary)] z-10" />
              <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className="text-xs font-mono text-[var(--accent)] mb-1">{m.month} {m.year}</div>
                <h3 className="text-xl font-bold mb-2">{m.event}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── QUICK LINKS ─────────────────────────────────────

function QuickLinks({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const links = [
    { page: 'collection' as Page, title: 'My Collection', desc: `${coffees.length} coffees tasted and rated` },
    { page: 'brewing' as Page, title: 'Brewing Methods', desc: `${brewingMethods.length} methods from espresso to cold brew` },
    { page: 'guide' as Page, title: "Beginner's Guide", desc: 'Everything you need to start your journey' },
    { page: 'profile' as Page, title: 'My Coffee Profile', desc: 'Flavor preferences, stats, and taste radar' },
    { page: 'roasters' as Page, title: 'Roasters', desc: `${roasters.length} roasters reviewed and ranked` },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore <span className="text-[var(--accent)]">More</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <motion.button key={link.page} onClick={() => onNavigate(link.page)} className="card-hover p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-left group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{link.title}</h3>
              <p className="text-sm opacity-50">{link.desc}</p>
              <div className="mt-4 text-sm text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-black text-sm font-bold">CJ</div>
            <span className="text-lg font-bold"><span className="text-[var(--accent)]">Coffee</span>Journal</span>
          </div>
          <p className="text-xs opacity-30 text-center">Made with coffee and code. Not a store — just a coffee nerd's journal.</p>
          <p className="text-xs opacity-30">"Life is too short for bad coffee."</p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs opacity-10 hover:opacity-50 transition-opacity cursor-default select-none" title="Try the Konami code">There are secrets on this page, if you know where to look.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <FactTicker />
      <WhyBlackCoffee />
      <MySetup />
      <WhyV60 />
      <WhatIsSpecialty />
      <CoffeeTypesSection onNavigate={onNavigate} />
      <HealthBenefitsSection />
      <WorldDataSection />
      <MyFavRoasters onNavigate={onNavigate} />
      <MyFavCoffees onNavigate={onNavigate} />
      <MyJourney />
      <QuickLinks onNavigate={onNavigate} />
      <Footer />
    </>
  );
}
