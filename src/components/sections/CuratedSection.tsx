import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBestCoffees, getOnRepeatCoffees, getPremiumCoffees, getWorstCoffees } from '../../data/coffees';
import type { Coffee } from '../../data/coffees';
import StarRating from '../ui/StarRating';

type CuratedTab = 'best' | 'on-repeat' | 'premium' | 'worst';

function MiniCard({ coffee, accent = false }: { coffee: Coffee; accent?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`rounded-2xl border overflow-hidden cursor-pointer ${
        accent
          ? 'border-[var(--color-caramel)]/30 bg-gradient-to-br from-[var(--color-caramel)]/5 to-transparent'
          : 'border-[var(--border-color)] bg-[var(--bg-card)]'
      }`}
      onClick={() => setExpanded(!expanded)}
      layout
      whileHover={{ y: -2 }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight">{coffee.name}</h4>
            <p className="text-sm opacity-40">{coffee.roaster}</p>
          </div>
          <div className={`text-2xl font-bold font-mono ${
            coffee.rating >= 4 ? 'text-[var(--color-caramel)]' :
            coffee.rating >= 3 ? 'text-[var(--text-secondary)]' :
            'text-red-500'
          }`}>
            {coffee.rating}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {coffee.notes.slice(0, 4).map(note => (
            <span key={note} className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs opacity-40">
          <span>{coffee.process}</span>
          <span>·</span>
          <span>{coffee.brewMethod}</span>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-[var(--border-color)]">
                <p className="text-sm opacity-60 leading-relaxed mb-3">{coffee.review}</p>

                <div className="space-y-1.5">
                  {Object.entries(coffee.flavorProfile).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-2 text-xs">
                      <span className="w-16 capitalize opacity-40">{key}</span>
                      <div className="flex-1 h-1 bg-[var(--border-color)] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{ width: `${(val / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono opacity-30 w-4">{val}</span>
                    </div>
                  ))}
                </div>

                {coffee.region && (
                  <div className="mt-3 text-xs opacity-40">{coffee.region}</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CuratedSection() {
  const [tab, setTab] = useState<CuratedTab>('best');

  const tabs: { id: CuratedTab; label: string; emoji: string; description: string }[] = [
    { id: 'best', label: 'Best Ever', emoji: '🏆', description: 'The absolute best coffees I have ever tasted. Every single one is a 5/5.' },
    { id: 'on-repeat', label: 'On Repeat', emoji: '🔁', description: 'The coffees I keep coming back to. Reliable, comforting, always satisfying.' },
    { id: 'premium', label: 'Premium Picks', emoji: '💎', description: 'Worth every rupee. These are the coffees that justify the premium price tag.' },
    { id: 'worst', label: 'Worst Experiences', emoji: '💀', description: 'The ones that hurt. These coffees were so bad I had to document the crime.' },
  ];

  const getList = (): Coffee[] => {
    switch (tab) {
      case 'best': return getBestCoffees();
      case 'on-repeat': return getOnRepeatCoffees();
      case 'premium': return getPremiumCoffees();
      case 'worst': return getWorstCoffees();
    }
  };

  const list = getList();

  return (
    <section id="curated" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            Curated <span className="text-[var(--accent)]">Lists</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            My personal picks — the best, the reliable, the premium, and the ones I wish I could forget.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`p-4 rounded-xl text-left transition-all ${
                tab === t.id
                  ? t.id === 'worst'
                    ? 'bg-red-500/10 border-2 border-red-500/30 text-red-400'
                    : 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
              }`}
            >
              <div className="text-2xl mb-2">{t.emoji}</div>
              <div className="font-bold text-sm">{t.label}</div>
              <div className={`text-xs mt-1 ${tab === t.id ? 'opacity-80' : 'opacity-40'}`}>
                {getListByTab(t.id).length} coffees
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className={`rounded-xl p-4 mb-6 text-sm ${
              tab === 'worst' ? 'bg-red-500/5 border border-red-500/20 text-red-400' : 'bg-[var(--accent)]/5 border border-[var(--accent)]/20 text-[var(--accent)]'
            }`}>
              {tabs.find(t => t.id === tab)?.emoji} {tabs.find(t => t.id === tab)?.description}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((coffee, i) => (
                <motion.div
                  key={coffee.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <MiniCard coffee={coffee} accent={tab === 'best'} />
                </motion.div>
              ))}
            </div>

            {list.length === 0 && (
              <div className="text-center py-12 opacity-30">No coffees in this list yet.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function getListByTab(tab: CuratedTab): Coffee[] {
  switch (tab) {
    case 'best': return getBestCoffees();
    case 'on-repeat': return getOnRepeatCoffees();
    case 'premium': return getPremiumCoffees();
    case 'worst': return getWorstCoffees();
  }
}
