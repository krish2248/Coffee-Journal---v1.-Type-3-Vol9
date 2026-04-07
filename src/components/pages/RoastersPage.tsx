import { motion } from 'framer-motion';
import { roasters, coffees } from '../../data/coffees';
import StarRating from '../ui/StarRating';

export default function RoastersPage() {
  // Sort roasters by rating desc
  const sortedRoasters = [...roasters].sort((a, b) => b.rating - a.rating);

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-[var(--accent)]">Roasters</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl">
            {roasters.length} roasters explored and rated. The craftspeople behind every bean.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 mb-12 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
          {[
            { label: 'Total Roasters', value: roasters.length },
            { label: '5-Star Roasters', value: roasters.filter(r => r.rating === 5).length },
            { label: 'Avg Rating', value: (roasters.reduce((a, r) => a + r.rating, 0) / roasters.length).toFixed(1) },
            { label: 'Total Coffees', value: coffees.length },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold font-mono text-[var(--accent)]">{s.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-40">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedRoasters.map((roaster, i) => {
            const roasterCoffees = coffees.filter(c => c.roaster === roaster.name);
            return (
              <motion.div
                key={roaster.id}
                className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.5) }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{roaster.name}</h3>
                    <p className="text-xs opacity-40">{roaster.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]">
                    {roasterCoffees.length} coffees
                  </span>
                </div>

                <p className="text-sm opacity-50 mb-4 line-clamp-3">{roaster.description}</p>

                <div className="text-xs uppercase tracking-widest opacity-30 mb-1">Specialty</div>
                <div className="text-sm font-medium mb-3">{roaster.specialty}</div>

                <StarRating rating={roaster.rating} size="text-sm" />

                {roasterCoffees.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                    <div className="text-xs uppercase tracking-widest opacity-30 mb-2">Top Coffees</div>
                    {roasterCoffees
                      .sort((a, b) => b.rating - a.rating)
                      .slice(0, 3)
                      .map(c => (
                        <div key={c.id} className="flex items-center justify-between text-xs mb-1">
                          <span className="opacity-70 truncate mr-2">{c.name}</span>
                          <span className="text-[var(--accent)] font-mono">{c.rating}/5</span>
                        </div>
                      ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
