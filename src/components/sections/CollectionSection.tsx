import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffees } from '../../data/coffees';
import type { Coffee } from '../../data/coffees';
import StarRating from '../ui/StarRating';

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
    'Light': '#c4a882',
    'Medium-Light': '#a0784a',
    'Medium': '#8b5e3c',
    'Medium-Dark': '#5c3d2e',
    'Dark': '#2d1f14',
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
      {/* Roast color strip */}
      <div className="h-1.5" style={{ background: roastColors[coffee.roast] }} />

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight">{coffee.name}</h3>
            <p className="text-sm opacity-50">{coffee.roaster}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: roastColors[coffee.roast], color: coffee.roast === 'Light' ? '#2d1f14' : '#f5e6d0' }}
          >
            {coffee.rating}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {coffee.notes.map(note => (
            <span key={note} className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
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
          ✕
        </button>

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
            <span key={note} className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium">
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

export default function CollectionSection() {
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<string>('rating');
  const [selected, setSelected] = useState<Coffee | null>(null);

  const filters = ['all', ...new Set(coffees.map(c => c.roast))];

  const filtered = useMemo(() => {
    let list = filter === 'all' ? coffees : coffees.filter(c => c.roast === filter);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'date') list = [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [filter, sort]);

  return (
    <section id="collection" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[var(--accent)]">Collection</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            Every coffee I have tasted, rated, and reviewed. Click any card for the full story.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  filter === f
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
                }`}
              >
                {f === 'all' ? 'All' : f}
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
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(coffee => (
              <CoffeeCard key={coffee.id} coffee={coffee} onClick={() => setSelected(coffee)} />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selected && <CoffeeModal coffee={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
}
