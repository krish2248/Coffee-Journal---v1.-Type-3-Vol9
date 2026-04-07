import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Page = 'home' | 'collection' | 'brewing' | 'guide' | 'profile' | 'roasters';

const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'collection', label: 'Collection' },
  { page: 'brewing', label: 'Brewing' },
  { page: 'guide', label: 'Guide' },
  { page: 'profile', label: 'Profile' },
  { page: 'roasters', label: 'Roasters' },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-color)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-sm font-bold">
              CJ
            </div>
            <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
              <span className="text-[var(--accent)]">Coffee</span>
              <span className="opacity-70">Journal</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  currentPage === link.page
                    ? 'text-[var(--accent)] opacity-100'
                    : 'opacity-60 hover:opacity-100 hover:text-[var(--accent)]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--accent)] transition-all duration-300 ${
                  currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-[var(--text-primary)] block"
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--text-primary)] block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--text-primary)] block"
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.page}
                className={`text-2xl font-[family-name:var(--font-display)] font-bold transition-colors ${
                  currentPage === link.page ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { onNavigate(link.page); setMobileOpen(false); }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
