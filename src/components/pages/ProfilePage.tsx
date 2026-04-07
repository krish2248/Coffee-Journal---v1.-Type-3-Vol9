import { useState } from 'react';
import { motion } from 'framer-motion';
import { coffeeKnowledge, coffees } from '../../data/coffees';

function FlavorWheel() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const categories = coffeeKnowledge.flavorCategories;
  const total = categories.length;
  const radius = 140;
  const centerX = 200;
  const centerY = 200;

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
      {categories.map((cat, i) => {
        const startAngle = (i / total) * Math.PI * 2 - Math.PI / 2;
        const endAngle = ((i + 1) / total) * Math.PI * 2 - Math.PI / 2;
        const midAngle = (startAngle + endAngle) / 2;

        const x1 = centerX + Math.cos(startAngle) * radius;
        const y1 = centerY + Math.sin(startAngle) * radius;
        const x2 = centerX + Math.cos(endAngle) * radius;
        const y2 = centerY + Math.sin(endAngle) * radius;
        const labelX = centerX + Math.cos(midAngle) * (radius * 0.65);
        const labelY = centerY + Math.sin(midAngle) * (radius * 0.65);

        const isHovered = hoveredCategory === cat.category;

        return (
          <g
            key={cat.category}
            onMouseEnter={() => setHoveredCategory(cat.category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="cursor-pointer"
          >
            <path
              d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
              fill={cat.color}
              opacity={isHovered ? 0.9 : 0.6}
              stroke="var(--bg-primary)"
              strokeWidth="2"
              style={{ transition: 'opacity 0.3s ease' }}
            />
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="11"
              fontWeight="bold"
            >
              {cat.category}
            </text>
          </g>
        );
      })}
      <circle cx={centerX} cy={centerY} r="30" fill="var(--bg-primary)" />
      <text x={centerX} y={centerY} textAnchor="middle" dominantBaseline="middle" fill="var(--accent)" fontSize="9" fontWeight="bold">
        FLAVOR
      </text>

      {hoveredCategory && (
        <g>
          {(() => {
            const cat = categories.find(c => c.category === hoveredCategory)!;
            const i = categories.indexOf(cat);
            const midAngle = ((i + 0.5) / total) * Math.PI * 2 - Math.PI / 2;
            return cat.notes.map((note, j) => {
              const noteRadius = radius + 20 + j * 18;
              const nx = centerX + Math.cos(midAngle) * noteRadius;
              const ny = centerY + Math.sin(midAngle) * noteRadius;
              return (
                <text key={note} x={nx} y={ny} textAnchor="middle" dominantBaseline="middle" fill={cat.color} fontSize="9" opacity={0.8}>
                  {note}
                </text>
              );
            });
          })()}
        </g>
      )}
    </svg>
  );
}

function NotesDistribution() {
  const allNotes = coffees.flatMap(c => c.notes);
  const noteCount: Record<string, number> = {};
  allNotes.forEach(n => { noteCount[n] = (noteCount[n] || 0) + 1; });
  const sorted = Object.entries(noteCount).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const maxCount = sorted[0]?.[1] || 1;

  return (
    <div className="space-y-3">
      {sorted.map(([note, count], i) => (
        <motion.div
          key={note}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <span className="w-28 text-sm text-right opacity-60">{note}</span>
          <div className="flex-1 h-6 bg-[var(--border-color)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)] flex items-center justify-end pr-2"
              initial={{ width: 0 }}
              whileInView={{ width: `${(count / maxCount) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <span className="text-xs font-mono font-bold text-white">{count}</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ProfileRadar() {
  const avgProfile = { acidity: 0, sweetness: 0, body: 0, bitterness: 0, aftertaste: 0 };
  coffees.forEach(c => {
    avgProfile.acidity += c.flavorProfile.acidity;
    avgProfile.sweetness += c.flavorProfile.sweetness;
    avgProfile.body += c.flavorProfile.body;
    avgProfile.bitterness += c.flavorProfile.bitterness;
    avgProfile.aftertaste += c.flavorProfile.aftertaste;
  });
  const n = coffees.length;
  const labels = ['Acidity', 'Sweetness', 'Body', 'Bitterness', 'Aftertaste'];
  const values = [
    avgProfile.acidity / n, avgProfile.sweetness / n, avgProfile.body / n,
    avgProfile.bitterness / n, avgProfile.aftertaste / n,
  ];

  const cx = 150, cy = 150, r = 100;
  const getPoint = (index: number, value: number) => {
    const angle = (index / 5) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * (value / 10) * r, y: cy + Math.sin(angle) * (value / 10) * r };
  };
  const polygonPoints = values.map((v, i) => { const p = getPoint(i, v); return `${p.x},${p.y}`; }).join(' ');

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
      {[2, 4, 6, 8, 10].map(level => (
        <polygon key={level} points={Array.from({ length: 5 }, (_, i) => { const p = getPoint(i, level); return `${p.x},${p.y}`; }).join(' ')} fill="none" stroke="var(--border-color)" strokeWidth="0.5" opacity={0.5} />
      ))}
      {labels.map((_, i) => { const p = getPoint(i, 10); return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--border-color)" strokeWidth="0.5" opacity={0.3} />; })}
      <polygon points={polygonPoints} fill="var(--accent)" opacity={0.2} stroke="var(--accent)" strokeWidth="2" />
      {values.map((v, i) => { const p = getPoint(i, v); return <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--accent)" />; })}
      {labels.map((label, i) => { const p = getPoint(i, 12); return <text key={label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="10">{label}</text>; })}
    </svg>
  );
}

export default function ProfilePage() {
  // Stats
  const totalCoffees = coffees.length;
  const fiveStar = coffees.filter(c => c.rating === 5).length;
  const uniqueOrigins = new Set(coffees.map(c => c.origin)).size;
  const uniqueProcesses = new Set(coffees.map(c => c.process)).size;
  const avgRating = (coffees.reduce((a, c) => a + c.rating, 0) / totalCoffees).toFixed(1);
  const favoriteRoaster = (() => {
    const count: Record<string, number> = {};
    coffees.forEach(c => { count[c.roaster] = (count[c.roaster] || 0) + 1; });
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
  })();
  const roastDist = (() => {
    const count: Record<string, number> = {};
    coffees.forEach(c => { count[c.roast] = (count[c.roast] || 0) + 1; });
    return Object.entries(count).sort((a, b) => b[1] - a[1]);
  })();

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            Coffee <span className="text-[var(--accent)]">Profile</span>
          </h1>
          <p className="text-lg opacity-50 max-w-xl">
            My taste DNA — visualized. What I love, what I drink, and how my palate has evolved.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[
            { label: 'Total Coffees', value: totalCoffees, icon: '☕' },
            { label: '5-Star Ratings', value: fiveStar, icon: '⭐' },
            { label: 'Avg Rating', value: avgRating, icon: '📊' },
            { label: 'Origins', value: uniqueOrigins, icon: '🌍' },
            { label: 'Processes', value: uniqueProcesses, icon: '🔬' },
            { label: 'Top Roaster', value: favoriteRoaster, icon: '🏆' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold font-mono text-[var(--accent)]">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-40 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Roast distribution */}
        <motion.div
          className="mb-16 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Roast Preference</h3>
          <div className="flex h-8 rounded-full overflow-hidden mb-4">
            {roastDist.map(([roast, count]) => (
              <div
                key={roast}
                className="relative group flex items-center justify-center text-xs font-bold"
                style={{
                  width: `${(count / totalCoffees) * 100}%`,
                  background: roast === 'Light' ? 'var(--accent)' : roast === 'Medium-Light' ? 'var(--text-muted)' : roast === 'Medium' ? 'var(--text-secondary)' : 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                }}
                title={`${roast}: ${count}`}
              >
                <span className="hidden md:inline truncate px-1">{roast} ({count})</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            {roastDist.map(([roast, count]) => (
              <span key={roast} className="opacity-50">
                {roast}: <span className="font-mono font-bold">{count}</span> ({Math.round((count / totalCoffees) * 100)}%)
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visualizations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">Flavor Wheel</h3>
            <p className="text-sm opacity-50 mb-4">Hover over a segment to see specific tasting notes</p>
            <FlavorWheel />
          </motion.div>

          <motion.div
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">My Taste Radar</h3>
            <p className="text-sm opacity-50 mb-4">Average flavor profile across all my coffees</p>
            <ProfileRadar />
          </motion.div>

          <motion.div
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">Most Common Notes</h3>
            <p className="text-sm opacity-50 mb-4">Tasting notes ranked by frequency</p>
            <NotesDistribution />
          </motion.div>
        </div>

        {/* Flavor categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {coffeeKnowledge.flavorCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-8 h-8 rounded-full mb-3" style={{ background: cat.color }} />
              <h4 className="font-bold text-sm mb-2">{cat.category}</h4>
              <div className="space-y-1">
                {cat.notes.map(note => (
                  <div key={note} className="text-xs opacity-50">{note}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
