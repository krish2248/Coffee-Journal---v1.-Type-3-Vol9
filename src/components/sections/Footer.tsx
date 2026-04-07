import { motion } from 'framer-motion';
import { coffees, roasters, brewingMethods } from '../../data/coffees';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                <span className="text-[var(--accent)]">Coffee</span>Journal
              </span>
            </div>
            <p className="text-sm opacity-50 leading-relaxed">
              A personal collection of specialty coffees — tasted, rated, and remembered. Built with love and caffeine.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-40 mb-4">Quick Stats</h4>
            <div className="space-y-2 text-sm opacity-60">
              <div>{coffees.length} coffees tasted</div>
              <div>{roasters.length} roasters explored</div>
              <div>{brewingMethods.length} brew methods</div>
              <div>{new Set(coffees.map(c => c.process)).size} processing methods</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-40 mb-4">Sections</h4>
            <div className="space-y-2 text-sm">
              {['Home', 'Collection', 'Roasters', 'Brewing', 'Guide', 'Flavors'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} className="block opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-40 mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['Astro', 'React', 'Three.js', 'TailwindCSS', 'Framer Motion'].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-color)]">
          <p className="text-xs opacity-30">
            Made with ☕ and code. Not a store — just a coffee nerd's journal.
          </p>
          <p className="text-xs opacity-30 mt-2 md:mt-0">
            "Life is too short for bad coffee."
          </p>
        </div>
      </div>
    </footer>
  );
}
