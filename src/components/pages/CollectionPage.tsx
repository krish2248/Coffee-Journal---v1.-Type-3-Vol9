import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffees, getBestCoffees, getOnRepeatCoffees, getPremiumCoffees, getWorstCoffees } from '../../data/coffees';
import type { Coffee } from '../../data/coffees';
import StarRating from '../ui/StarRating';

// Unsplash coffee image URLs for cards
const coffeeImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1501747315-124a0eaca060?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1521302200778-33500795e128?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&h=250&fit=crop',
];

function getCoffeeImage(id: string): string {
  // Deterministic image based on id hash
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash) + id.charCodeAt(i);
  return coffeeImages[Math.abs(hash) % coffeeImages.length];
}

function FlavorBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-20 opacity-60">{label}</span>
      <div className="flex-1 h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[var(--accent)]"
          initial={{ width: 0 }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
      <span className="font-mono w-6 text-right opacity-50">{value}</span>
    </div>
  );
}

function CoffeeCard({ coffee, onClick }: { coffee: Coffee; onClick: () => void }) {
  const roastColors: Record<string, string> = {
    'Light': 'var(--accent)',
    'Medium-Light': 'var(--text-secondary)',
    'Medium': 'var(--text-muted)',
    'Medium-Dark': 'var(--text-primary)',
    'Dark': 'var(--text-primary)',
  };

  return (
    <motion.div
      layout
      className="card-hover cursor-pointer rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
    >
      {/* Coffee image */}
      <div className="coffee-image-card">
        <img
          src={getCoffeeImage(coffee.id)}
          alt={coffee.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold backdrop-blur-sm border border-white/20"
            style={{ background: `${roastColors[coffee.roast]}33`, color: 'var(--text-primary)' }}
          >
            {coffee.rating}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight">{coffee.name}</h3>
          <p className="text-sm opacity-50">{coffee.roaster}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {coffee.notes.map(note => (
            <span key={note} className="text-xs px-2 py-0.5 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs opacity-50">
          <span>{coffee.origin}</span>
          <span>·</span>
          <span>{coffee.process}</span>
          <span>·</span>
          <span>{coffee.roast}</span>
        </div>

        <StarRating rating={coffee.rating} size="text-sm" />
      </div>
    </motion.div>
  );
}

function CoffeeModal({ coffee, onClose }: { coffee: Coffee; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--border-color)]/50 flex items-center justify-center hover:bg-[var(--border-color)] transition-colors"
        >
          &#10005;
        </button>

        {/* Modal image */}
        <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
          <img src={getCoffeeImage(coffee.id)} alt={coffee.name} className="w-full h-full object-cover" />
        </div>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest opacity-40 mb-1">{coffee.roaster}</div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">{coffee.name}</h2>
        </div>

        <StarRating rating={coffee.rating} size="text-xl" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {[
            { label: 'Origin', value: coffee.region || coffee.origin },
            { label: 'Process', value: coffee.process },
            { label: 'Roast', value: coffee.roast },
            { label: 'Brew', value: coffee.brewMethod },
            ...(coffee.elevation ? [{ label: 'Elevation', value: coffee.elevation }] : []),
            ...(coffee.variety ? [{ label: 'Variety', value: coffee.variety }] : []),
          ].map(item => (
            <div key={item.label} className="p-3 rounded-xl bg-[var(--bg-secondary)]">
              <div className="text-xs uppercase tracking-widest opacity-40">{item.label}</div>
              <div className="font-medium text-sm mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {coffee.notes.map(note => (
            <span key={note} className="px-3 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)] text-sm font-medium">
              {note}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">Flavor Profile</h3>
          <div className="space-y-2">
            <FlavorBar label="Acidity" value={coffee.flavorProfile.acidity} />
            <FlavorBar label="Sweetness" value={coffee.flavorProfile.sweetness} />
            <FlavorBar label="Body" value={coffee.flavorProfile.body} />
            <FlavorBar label="Bitterness" value={coffee.flavorProfile.bitterness} />
            <FlavorBar label="Aftertaste" value={coffee.flavorProfile.aftertaste} />
          </div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">Tasting Notes</h3>
          <p className="text-sm leading-relaxed opacity-70">{coffee.review}</p>
          <div className="text-xs opacity-40 mt-3">Tasted on {new Date(coffee.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

type CuratedTab = 'all' | 'best' | 'on-repeat' | 'premium' | 'worst';

export default function CollectionPage() {
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<string>('rating');
  const [selected, setSelected] = useState<Coffee | null>(null);
  const [curatedTab, setCuratedTab] = useState<CuratedTab>('all');

  const roastFilters = ['all', ...new Set(coffees.map(c => c.roast))];

  const filtered = useMemo(() => {
    let list = coffees;

    // Curated filter
    if (curatedTab === 'best') list = getBestCoffees();
    else if (curatedTab === 'on-repeat') list = getOnRepeatCoffees();
    else if (curatedTab === 'premium') list = getPremiumCoffees();
    else if (curatedTab === 'worst') list = getWorstCoffees();

    // Roast filter
    if (filter !== 'all') list = list.filter(c => c.roast === filter);

    // Sort
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'date') list = [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [filter, sort, curatedTab]);

  const curatedTabs: { id: CuratedTab; label: string; emoji: string }[] = [
    { id: 'all', label: 'All Coffees', emoji: '☕' },
    { id: 'best', label: 'Best Ever', emoji: '🏆' },
    { id: 'on-repeat', label: 'On Repeat', emoji: '🔁' },
    { id: 'premium', label: 'Premium', emoji: '💎' },
    { id: 'worst', label: 'Worst', emoji: '💀' },
  ];

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-[var(--accent)]">Collection</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl">
            Every coffee I've tasted, rated, and reviewed. Click any card for the full story.
          </p>
        </motion.div>

        {/* Curated tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {curatedTabs.map(t => (
            <button
              key={t.id}
              onClick={() => setCuratedTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                curatedTab === t.id
                  ? t.id === 'worst'
                    ? 'bg-red-500/10 border-2 border-red-500/30 text-red-400'
                    : 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
              }`}
            >
              <span>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {roastFilters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  filter === f
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
                }`}
              >
                {f === 'all' ? 'All Roasts' : f}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-4 py-1.5 rounded-full text-sm bg-[var(--bg-card)] border border-[var(--border-color)] outline-none"
          >
            <option value="rating">By Rating</option>
            <option value="date">By Date</option>
            <option value="name">By Name</option>
          </select>
          <span className="text-sm opacity-40 ml-auto">{filtered.length} coffees</span>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(coffee => (
              <CoffeeCard key={coffee.id} coffee={coffee} onClick={() => setSelected(coffee)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 opacity-30">
            <div className="text-4xl mb-4">🫗</div>
            <div>No coffees match your filters</div>
          </div>
        )}

        <AnimatePresence>
          {selected && <CoffeeModal coffee={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
}
