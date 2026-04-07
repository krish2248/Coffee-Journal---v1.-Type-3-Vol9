import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brewingMethods } from '../../data/coffees';

// Espresso-based drinks
const espressoDrinks = [
  { name: 'Espresso', ratio: '1:2', desc: 'The foundation. 25-30ml of concentrated coffee extracted under 9 bars of pressure in 25-30 seconds.', milk: false, icon: '☕', strength: 10 },
  { name: 'Doppio', ratio: '1:2', desc: 'Double espresso. Two shots in one cup. When one isn\'t enough.', milk: false, icon: '☕', strength: 10 },
  { name: 'Ristretto', ratio: '1:1', desc: 'Shorter, more concentrated than espresso. Half the water, double the intensity.', milk: false, icon: '🔥', strength: 10 },
  { name: 'Lungo', ratio: '1:3', desc: 'Long shot. More water through the same grounds. Milder but more bitter.', milk: false, icon: '💧', strength: 6 },
  { name: 'Americano', ratio: 'Espresso + Water', desc: 'Espresso diluted with hot water. Born when American soldiers in WWII Italy wanted drip-style coffee.', milk: false, icon: '🇺🇸', strength: 5 },
  { name: 'Latte', ratio: '1:3 milk', desc: '1/3 espresso, 2/3 steamed milk, thin layer of foam. Smooth, creamy, approachable.', milk: true, icon: '🥛', strength: 3 },
  { name: 'Cappuccino', ratio: '1:1:1', desc: 'Equal parts espresso, steamed milk, and foam. The perfect balance. Named after Capuchin monks\' robes.', milk: true, icon: '🫧', strength: 5 },
  { name: 'Flat White', ratio: '1:2 microfoam', desc: 'Originated in Australia/NZ. Like a latte but with velvety microfoam instead of frothy milk. Stronger coffee taste.', milk: true, icon: '🇦🇺', strength: 6 },
  { name: 'Macchiato', ratio: 'Espresso + dot', desc: '"Stained" in Italian. Espresso with just a dollop of foam. Not the Starbucks thing.', milk: true, icon: '🎯', strength: 8 },
  { name: 'Cortado', ratio: '1:1', desc: 'Spanish origin. Equal parts espresso and warm milk. No foam. Simple, honest.', milk: true, icon: '🇪🇸', strength: 7 },
  { name: 'Mocha', ratio: '1:1:1 + choc', desc: 'Espresso + chocolate + steamed milk. The dessert drink. Named after Mocha, Yemen.', milk: true, icon: '🍫', strength: 4 },
  { name: 'Affogato', ratio: 'Espresso + gelato', desc: 'Hot espresso poured over vanilla gelato. Italian for "drowned." Dessert meets coffee.', milk: false, icon: '🍨', strength: 7 },
  { name: 'Irish Coffee', ratio: 'Coffee + whiskey + cream', desc: 'Hot coffee, Irish whiskey, sugar, topped with cream. Born at Foynes Airport, Ireland, 1943.', milk: true, icon: '🍀', strength: 5 },
  { name: 'Red Eye', ratio: 'Drip + espresso', desc: 'Drip coffee with a shot of espresso. For when you need to be awake for a very long time.', milk: false, icon: '👁️', strength: 9 },
  { name: 'Vienna Coffee', ratio: 'Espresso + whipped cream', desc: 'Strong black coffee topped with whipped cream. The cream slowly melts into the coffee.', milk: true, icon: '🇦🇹', strength: 6 },
];

// Specialty methods
const specialtyMethods = [
  { name: 'Siphon / Vacuum', time: '5-8 min', difficulty: 'Expert', desc: 'Uses vapor pressure and vacuum to brew. Theatrical, precise, produces exceptionally clean cups. The science experiment of coffee.', grind: 'Medium', icon: '🧪' },
  { name: 'Vietnamese Phin', time: '4-6 min', difficulty: 'Easy', desc: 'Small metal filter that sits on your cup. Slow drip, usually served with condensed milk. Sweet, strong, addictive.', grind: 'Medium-Coarse', icon: '🇻🇳' },
  { name: 'Ibrik / Cezve (Turkish)', time: '3-4 min', difficulty: 'Intermediate', desc: 'Ultra-fine ground coffee boiled in a small pot with water and sugar. Unfiltered, thick, served in small cups with the grounds.', grind: 'Extra Fine', icon: '🪔' },
  { name: 'Nel Drip (Japanese)', time: '3-5 min', difficulty: 'Advanced', desc: 'Flannel cloth filter pour-over. Produces the smoothest, most rounded cup. High maintenance (wash the cloth, keep it wet).', grind: 'Medium', icon: '🇯🇵' },
  { name: 'Nitro Cold Brew', time: '12-24 hrs', difficulty: 'Intermediate', desc: 'Cold brew infused with nitrogen gas. Creamy, cascading effect like a Guinness. No milk needed — the nitrogen gives it body.', grind: 'Coarse', icon: '🫧' },
  { name: 'Clever Dripper', time: '3-4 min', difficulty: 'Beginner', desc: 'Hybrid immersion/pour-over. Steep like French Press, drain like V60. Forgiving, consistent, great for beginners.', grind: 'Medium', icon: '🧠' },
];

export default function BrewingPage() {
  const [selectedMethod, setSelectedMethod] = useState(brewingMethods[0]);
  const [showBlack, setShowBlack] = useState(true);

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            Brewing <span className="text-[var(--accent)]">Methods</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl">
            From your first pour-over to siphon mastery. Every method, every drink, every way to extract magic from beans.
          </p>
        </motion.div>

        {/* V60 Hero */}
        <motion.div
          className="mb-16 rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent-bg)] p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold uppercase tracking-widest">
            My Pick
          </div>
          <div className="absolute -right-10 -bottom-10 text-[200px] opacity-[0.03] leading-none select-none font-bold">V60</div>

          <div className="max-w-2xl">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
              Why the <span className="text-[var(--accent)]">Hario V60</span> is King
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
                  <div className="font-bold font-mono text-[var(--accent)]">{s.value}</div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-bold mb-3">How to Brew</h4>
              <ol className="space-y-2">
                {brewingMethods[0].steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="opacity-70">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* All brewing methods */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-8">
            All <span className="text-[var(--accent)]">Methods</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {brewingMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className={`p-4 rounded-xl text-left transition-all ${
                  selectedMethod.id === method.id
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)]'
                }`}
              >
                <div className="text-2xl mb-2">{method.icon}</div>
                <div className="font-bold text-sm">{method.name}</div>
                <div className={`text-xs mt-1 ${selectedMethod.id === method.id ? 'opacity-80' : 'opacity-40'}`}>
                  {method.type}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMethod.id}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{selectedMethod.icon}</span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{selectedMethod.name}</h3>
                      <span className="text-xs opacity-40">{selectedMethod.type}</span>
                    </div>
                  </div>

                  <p className="opacity-60 mb-6 leading-relaxed">{selectedMethod.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Difficulty', value: selectedMethod.difficulty },
                      { label: 'Brew Time', value: selectedMethod.time },
                      { label: 'Ratio', value: selectedMethod.ratio },
                      { label: 'Grind', value: selectedMethod.grind },
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
                        animate={{ width: `${selectedMethod.rating * 10}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="font-mono text-sm font-bold">{selectedMethod.rating}/10</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Step by Step</h4>
                  <ol className="space-y-3">
                    {selectedMethod.steps.map((step, i) => (
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

        {/* Espresso-Based Drinks */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
              Espresso-Based <span className="text-[var(--accent)]">Drinks</span>
            </h2>
            <p className="text-lg opacity-50 max-w-xl mb-4">
              Every drink that starts with a shot. From the purist's ristretto to the indulgent affogato.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowBlack(true)}
                className={`px-4 py-1.5 rounded-full text-sm ${showBlack ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-card)] border border-[var(--border-color)]'}`}
              >
                Black (No Milk)
              </button>
              <button
                onClick={() => setShowBlack(false)}
                className={`px-4 py-1.5 rounded-full text-sm ${!showBlack ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-card)] border border-[var(--border-color)]'}`}
              >
                Milk-Based
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {espressoDrinks.filter(d => showBlack ? !d.milk : d.milk).map((drink, i) => (
              <motion.div
                key={drink.name}
                className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{drink.icon}</span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{drink.name}</h3>
                      <span className="text-xs font-mono opacity-40">{drink.ratio}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: j < Math.round(drink.strength / 2)
                            ? 'var(--accent)'
                            : 'var(--border-color)',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm opacity-60 leading-relaxed">{drink.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialty Methods */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
              Specialty <span className="text-[var(--accent)]">Methods</span>
            </h2>
            <p className="text-lg opacity-50 max-w-xl">
              For when you want something beyond the ordinary. These methods require patience but deliver magic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyMethods.map((method, i) => (
              <motion.div
                key={method.name}
                className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2">{method.name}</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">{method.desc}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">{method.time}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">{method.difficulty}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">{method.grind}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
