import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeKnowledge } from '../../data/coffees';

type Tab = 'roasts' | 'processing' | 'beans' | 'drying' | 'starter-kit' | 'mistakes';

const starterKit = [
  { item: 'Hario V60 (Size 02)', price: '~Rs 500', why: 'The best entry point. Cheap, portable, produces incredible cups.', priority: 'Essential' },
  { item: 'V60 Paper Filters', price: '~Rs 300/100', why: 'Tabbed filters. Rinse before use to remove paper taste.', priority: 'Essential' },
  { item: 'Kitchen Scale (0.1g)', price: '~Rs 600', why: 'Coffee is chemistry. You can\'t eyeball ratios.', priority: 'Essential' },
  { item: 'Gooseneck Kettle', price: '~Rs 1500', why: 'Controlled, precise pour. Regular kettles dump water too fast.', priority: 'Essential' },
  { item: 'Hand Grinder (Timemore C2)', price: '~Rs 4000', why: 'Fresh grinding is the single biggest upgrade. Pre-ground goes stale in days.', priority: 'Important' },
  { item: 'Light Roast Specialty Beans', price: '~Rs 400-800', why: 'Start with a washed Ethiopian or Indian single origin from a good roaster.', priority: 'Essential' },
  { item: 'Timer', price: 'Free (phone)', why: 'Brew time affects extraction. 2:30-3:30 is your V60 target.', priority: 'Essential' },
  { item: 'Thermometer', price: '~Rs 300', why: '90-96°C is the sweet spot. Boiling water burns coffee.', priority: 'Nice to have' },
];

const commonMistakes = [
  { mistake: 'Using boiling water', fix: 'Let it cool to 90-96°C. Boiling water over-extracts and makes coffee bitter.' },
  { mistake: 'Using pre-ground coffee', fix: 'Grind fresh, right before brewing. Coffee goes stale within 15 minutes of grinding.' },
  { mistake: 'Wrong grind size', fix: 'Too fine = bitter, too coarse = sour. For V60, think table salt consistency.' },
  { mistake: 'Ignoring ratios', fix: 'Use 1:15 to 1:17 coffee-to-water ratio. 15g coffee to 250g water is a good start.' },
  { mistake: 'Not blooming', fix: 'Pour 2x coffee weight in water, wait 30-45 seconds. Releases CO2 for even extraction.' },
  { mistake: 'Stale beans', fix: 'Use within 2-4 weeks of roast date. Check the bag for a roast date (not just expiry).' },
  { mistake: 'Storing beans wrong', fix: 'Airtight container, room temperature, away from light. NEVER refrigerate.' },
  { mistake: 'Adding milk to hide bad coffee', fix: 'If you need milk/sugar to make it drinkable, the coffee is the problem, not your palate.' },
];

export default function GuidePage() {
  const [tab, setTab] = useState<Tab>('starter-kit');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'starter-kit', label: 'Starter Kit' },
    { id: 'mistakes', label: 'Common Mistakes' },
    { id: 'roasts', label: 'Roast Levels' },
    { id: 'processing', label: 'Processing' },
    { id: 'beans', label: 'Bean Types' },
    { id: 'drying', label: 'Drying Methods' },
  ];

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            Beginner's <span className="text-[var(--accent)]">Guide</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl">
            Everything I wish someone told me when I started. From your first V60 to understanding processing methods.
          </p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          className="mb-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">What is Specialty Coffee?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm opacity-70 leading-relaxed">
            <div>
              <p className="mb-4">
                Specialty coffee is coffee that scores <strong className="text-[var(--accent)] opacity-100">80 points or above</strong> on a 100-point scale by certified Q Graders. It represents the top 3-5% of all coffee produced worldwide.
              </p>
              <p className="mb-4">
                Unlike commercial coffee, specialty coffee is traceable — you know the farm, the variety, the altitude, and the processing method. Every step from seed to cup is optimized for quality, not just yield.
              </p>
              <p>
                The term <strong className="text-[var(--accent)] opacity-100">"Third Wave"</strong> refers to the movement that treats coffee as an artisanal food, like wine or craft beer.
              </p>
            </div>
            <div>
              <p className="mb-4">
                The journey begins at <strong className="text-[var(--accent)] opacity-100">origin</strong> — where the coffee cherry grows. Altitude, soil, climate, and variety all affect flavor.
              </p>
              <p className="mb-4">
                After harvesting, the cherry must be <strong className="text-[var(--accent)] opacity-100">processed</strong> — the fruit removed from the seed. How this is done is one of the biggest factors in the final taste.
              </p>
              <p>
                Finally, <strong className="text-[var(--accent)] opacity-100">brewing</strong> is the last extraction. The right grind size, water temperature, and ratio unlock what everyone before you worked hard to create.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === t.id
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'starter-kit' && (
            <motion.div
              key="starter-kit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="rounded-xl p-4 bg-[var(--accent-bg)] border border-[var(--accent)]/20 text-sm text-[var(--accent)] mb-6">
                Total cost to start: ~Rs 7,000. That's less than 3 months of Starbucks lattes.
              </div>
              {starterKit.map((item, i) => (
                <motion.div
                  key={item.item}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className={`text-xs px-2 py-1 rounded-full shrink-0 font-medium ${
                    item.priority === 'Essential' ? 'bg-[var(--accent)]/10 text-[var(--accent)]' :
                    item.priority === 'Important' ? 'bg-[var(--tag-bg)] text-[var(--tag-text)]' :
                    'bg-[var(--border-color)] opacity-50'
                  }`}>
                    {item.priority}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold">{item.item}</h4>
                      <span className="text-xs font-mono opacity-40">{item.price}</span>
                    </div>
                    <p className="text-sm opacity-60">{item.why}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'mistakes' && (
            <motion.div
              key="mistakes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {commonMistakes.map((m, i) => (
                <motion.div
                  key={m.mistake}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-400 text-lg">&#10007;</span>
                    <h4 className="font-bold text-red-400">{m.mistake}</h4>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-lg mt-0.5">&#10003;</span>
                    <p className="text-sm opacity-60">{m.fix}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'roasts' && (
            <motion.div
              key="roasts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 mb-6">
                <div className="flex h-16 rounded-xl overflow-hidden mb-4">
                  {coffeeKnowledge.roastLevels.map(r => (
                    <div key={r.name} className="flex-1 relative group" style={{ background: r.color }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-black/50 text-white">{r.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs opacity-40">
                  <span>Light 180°C</span>
                  <span>Dark 250°C</span>
                </div>
              </div>

              {coffeeKnowledge.roastLevels.map((roast, i) => (
                <motion.div
                  key={roast.name}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full shrink-0" style={{ background: roast.color }} />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold">{roast.name}</h4>
                      <span className="text-xs font-mono opacity-40">{roast.temp}</span>
                    </div>
                    <p className="text-sm opacity-60 mb-2">{roast.description}</p>
                    <p className="text-xs text-[var(--accent)]">{roast.flavor}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {coffeeKnowledge.processingMethods.map((method, i) => (
                <motion.div
                  key={method.name}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{method.name}</h4>
                  <p className="text-sm opacity-60 mb-3">{method.description}</p>
                  <div className="text-xs px-3 py-1.5 rounded-lg bg-[var(--tag-bg)] text-[var(--tag-text)] inline-block">
                    {method.flavor}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'beans' && (
            <motion.div
              key="beans"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {coffeeKnowledge.beanTypes.map((bean, i) => (
                <motion.div
                  key={bean.name}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-[family-name:var(--font-display)] text-xl font-bold">{bean.name}</h4>
                    <span className="text-xs font-mono opacity-40">{bean.share}</span>
                  </div>
                  <p className="text-sm opacity-60 mb-4">{bean.description}</p>
                  <div className="text-xs opacity-40">
                    <span className="font-medium">Regions: </span>{bean.regions}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'drying' && (
            <motion.div
              key="drying"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {coffeeKnowledge.dryingMethods.map((method, i) => (
                <motion.div
                  key={method.name}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{method.name}</h4>
                  <p className="text-sm opacity-60">{method.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
