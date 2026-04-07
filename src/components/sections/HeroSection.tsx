import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { coffees, roasters } from '../../data/coffees';

const CoffeeBean3D = lazy(() => import('../3d/CoffeeBean3D'));

export default function HeroSection() {
  const totalCoffees = coffees.length;
  const totalRoasters = roasters.length;
  const avgRating = (coffees.reduce((a, c) => a + c.rating, 0) / totalCoffees).toFixed(1);
  const topRated = coffees.reduce((best, c) => c.rating > best.rating ? c : best, coffees[0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={null}>
          <CoffeeBean3D />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/50 backdrop-blur-sm text-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-caramel)] animate-pulse" />
            Personal Coffee Journal
          </motion.div>

          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block">Every Cup</span>
            <span className="block text-[var(--accent)] glow-text">Tells a Story</span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl opacity-60 leading-relaxed mb-12">
            A curated collection of specialty coffees I have tasted — from the farms they grew on
            to the cup I brewed. Rated, reviewed, and remembered.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            {[
              { value: totalCoffees, label: 'Coffees Tasted' },
              { value: totalRoasters, label: 'Roasters' },
              { value: avgRating, label: 'Avg Rating' },
              { value: '9', label: 'Brew Methods' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-[var(--accent)]">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#collection"
              className="px-8 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.a>
            <motion.a
              href="#guide"
              className="px-8 py-3 border border-[var(--border-color)] rounded-full font-medium hover:bg-[var(--bg-card)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Beginner's Guide
            </motion.a>
          </div>
        </motion.div>

        {/* Top rated callout */}
        <motion.div
          className="absolute bottom-12 right-6 md:right-12 hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="gradient-border p-6 rounded-2xl bg-[var(--bg-card)]/80 backdrop-blur-xl max-w-xs">
            <div className="text-xs uppercase tracking-widest opacity-50 mb-2">Top Rated</div>
            <div className="font-[family-name:var(--font-display)] text-lg font-bold">{topRated.name}</div>
            <div className="text-sm opacity-60">{topRated.roaster}</div>
            <div className="flex items-center gap-1 mt-2 text-[var(--color-caramel)]">
              {'★'.repeat(Math.floor(topRated.rating))}
              <span className="text-sm font-mono ml-1">{topRated.rating}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
              {topRated.notes.map(note => (
                <span key={note} className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                  {note}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
