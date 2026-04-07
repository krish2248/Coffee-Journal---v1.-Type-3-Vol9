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
                <text
                  key={note}
                  x={nx}
                  y={ny}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={cat.color}
                  fontSize="9"
                  opacity={0.8}
                >
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
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--color-caramel)] flex items-center justify-end pr-2"
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
  const avgProfile = {
    acidity: 0,
    sweetness: 0,
    body: 0,
    bitterness: 0,
    aftertaste: 0,
  };
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
    avgProfile.acidity / n,
    avgProfile.sweetness / n,
    avgProfile.body / n,
    avgProfile.bitterness / n,
    avgProfile.aftertaste / n,
  ];

  const cx = 150, cy = 150, r = 100;

  const getPoint = (index: number, value: number) => {
    const angle = (index / 5) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * (value / 10) * r,
      y: cy + Math.sin(angle) * (value / 10) * r,
    };
  };

  const polygonPoints = values.map((v, i) => {
    const p = getPoint(i, v);
    return `${p.x},${p.y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
      {/* Grid */}
      {[2, 4, 6, 8, 10].map(level => (
        <polygon
          key={level}
          points={Array.from({ length: 5 }, (_, i) => {
            const p = getPoint(i, level);
            return `${p.x},${p.y}`;
          }).join(' ')}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="0.5"
          opacity={0.5}
        />
      ))}

      {/* Axes */}
      {labels.map((_, i) => {
        const p = getPoint(i, 10);
        return (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--border-color)" strokeWidth="0.5" opacity={0.3} />
        );
      })}

      {/* Data */}
      <polygon points={polygonPoints} fill="var(--accent)" opacity={0.2} stroke="var(--accent)" strokeWidth="2" />
      {values.map((v, i) => {
        const p = getPoint(i, v);
        return <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--accent)" />;
      })}

      {/* Labels */}
      {labels.map((label, i) => {
        const p = getPoint(i, 12);
        return (
          <text key={label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="10">
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default function FlavorSection() {
  return (
    <section id="flavors" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            Flavor <span className="text-[var(--accent)]">Profiles</span>
          </h2>
          <p className="text-lg opacity-50 max-w-xl">
            Visualizing taste — from the flavor wheel to my personal preference radar.
          </p>
        </motion.div>

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
            <p className="text-sm opacity-50 mb-4">Tasting notes ranked by frequency in my collection</p>
            <NotesDistribution />
          </motion.div>
        </div>

        {/* Flavor categories detail */}
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
