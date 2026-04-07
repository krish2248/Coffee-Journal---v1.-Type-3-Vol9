import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brewingMethods } from '../../data/coffees';

export default function BrewingSection() {
  const [selected, setSelected] = useState(brewingMethods[0]);

  return (
    <section id="brewing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            Brewing <span className="text-[var(--accent)]">Methods</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            How you brew matters as much as what you brew. Master these methods to unlock every flavor.
          </p>
        </motion.div>

        {/* V60 Hero */}
        <motion.div
          className="mb-16 rounded-3xl border border-[var(--color-caramel)]/30 bg-gradient-to-br from-[var(--color-caramel)]/5 to-transparent p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-[var(--color-caramel)]/20 text-[var(--color-caramel)] font-bold uppercase tracking-widest">
            My Pick
          </div>
          <div className="absolute -right-10 -bottom-10 text-[200px] opacity-5 leading-none select-none">V60</div>

          <div className="max-w-2xl">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
              Why the <span className="text-[var(--color-caramel)]">Hario V60</span> is King
            </h3>
            <p className="text-lg opacity-70 mb-6 leading-relaxed">
              {brewingMethods[0].whyBest}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Time', value: brewingMethods[0].time },
                { label: 'Ratio', value: brewingMethods[0].ratio },
                { label: 'Grind', value: brewingMethods[0].grind },
                { label: 'Rating', value: `${brewingMethods[0].rating}/10` },
              ].map(s => (
                <div key={s.label} className="p-3 rounded-xl bg-[var(--bg-card)]/50 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-widest opacity-40">{s.label}</div>
                  <div className="font-bold font-mono text-[var(--color-caramel)]">{s.value}</div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-bold mb-3">How to Brew</h4>
              <ol className="space-y-2">
                {brewingMethods[0].steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-caramel)]/20 text-[var(--color-caramel)] flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="opacity-70">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* All methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
          {brewingMethods.map(method => (
            <button
              key={method.id}
              onClick={() => setSelected(method)}
              className={`p-4 rounded-xl text-left transition-all ${
                selected.id === method.id
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
              }`}
            >
              <div className="text-2xl mb-2">{method.icon}</div>
              <div className="font-bold text-sm">{method.name}</div>
              <div className={`text-xs mt-1 ${selected.id === method.id ? 'opacity-80' : 'opacity-40'}`}>
                {method.type}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{selected.icon}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{selected.name}</h3>
                    <span className="text-xs opacity-40">{selected.type}</span>
                  </div>
                </div>

                <p className="opacity-60 mb-6 leading-relaxed">{selected.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Difficulty', value: selected.difficulty },
                    { label: 'Brew Time', value: selected.time },
                    { label: 'Ratio', value: selected.ratio },
                    { label: 'Grind', value: selected.grind },
                  ].map(item => (
                    <div key={item.label} className="p-3 rounded-lg bg-[var(--bg-secondary)]">
                      <div className="text-xs uppercase tracking-widest opacity-30">{item.label}</div>
                      <div className="text-sm font-medium mt-1">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs opacity-40">Rating:</span>
                  <div className="flex-1 h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.rating * 10}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="font-mono text-sm font-bold">{selected.rating}/10</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4">Step by Step</h4>
                <ol className="space-y-3">
                  {selected.steps.map((step, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="opacity-70">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
