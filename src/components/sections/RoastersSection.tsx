import { motion } from 'framer-motion';
import { roasters, coffees } from '../../data/coffees';
import StarRating from '../ui/StarRating';

export default function RoastersSection() {
  return (
    <section id="roasters" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-[var(--accent)]">Roasters</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            The craftspeople behind the beans. Each roaster brings their own philosophy and technique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roasters.map((roaster, i) => {
            const roasterCoffees = coffees.filter(c => c.roaster === roaster.name);
            return (
              <motion.div
                key={roaster.id}
                className="card-hover rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{roaster.name}</h3>
                    <p className="text-xs opacity-40">{roaster.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
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
                    {roasterCoffees.slice(0, 2).map(c => (
                      <div key={c.id} className="flex items-center justify-between text-xs mb-1">
                        <span className="opacity-70 truncate mr-2">{c.name}</span>
                        <span className="text-[var(--color-caramel)] font-mono">{c.rating}</span>
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
