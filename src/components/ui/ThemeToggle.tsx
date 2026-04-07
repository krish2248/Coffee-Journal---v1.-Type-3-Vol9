import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 border border-[var(--border-color)]"
      style={{ background: dark ? '#1a1a1a' : '#fef7ed' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
        style={{ background: dark ? '#ffffff' : '#b45309' }}
        animate={{ x: dark ? 26 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {dark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
}
