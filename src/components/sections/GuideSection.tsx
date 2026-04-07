import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeKnowledge } from '../../data/coffees';

type Tab = 'roasts' | 'processing' | 'beans' | 'drying';

export default function GuideSection() {
  const [tab, setTab] = useState<Tab>('roasts');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'roasts', label: 'Roast Levels' },
    { id: 'processing', label: 'Processing' },
    { id: 'beans', label: 'Bean Types' },
    { id: 'drying', label: 'Drying Methods' },
  ];

  return (
    <section id="guide" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            Beginner's <span className="text-[var(--accent)]">Guide</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            Everything you need to know about specialty coffee — from bean to cup.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="mb-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                The term <strong className="text-[var(--accent)] opacity-100">"Third Wave"</strong> refers to the movement that treats coffee as an artisanal food, like wine or craft beer. First wave was commodity (Folgers), second wave was café culture (Starbucks), third wave is about the craft.
              </p>
            </div>
            <div>
              <p className="mb-4">
                The journey begins at <strong className="text-[var(--accent)] opacity-100">origin</strong> — where the coffee cherry grows. Altitude, soil, climate, and variety all affect flavor. A coffee from Ethiopia tastes wildly different from one grown in Brazil, even with the same processing.
              </p>
              <p className="mb-4">
                After harvesting, the cherry must be <strong className="text-[var(--accent)] opacity-100">processed</strong> — the fruit removed from the seed (the bean). How this is done is one of the biggest factors in the final taste. Then comes roasting, which develops the flavors locked inside.
              </p>
              <p>
                Finally, <strong className="text-[var(--accent)] opacity-100">brewing</strong> is the last extraction. The right grind size, water temperature, and ratio unlock what the farmer, processor, and roaster worked so hard to create.
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
          {tab === 'roasts' && (
            <motion.div
              key="roasts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Roast gradient visualization */}
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
                  <div
                    className="w-12 h-12 rounded-full shrink-0"
                    style={{ background: roast.color }}
                  />
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
                  <div className="text-xs px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] inline-block">
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
