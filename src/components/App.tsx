import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './ui/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const BrewingPage = lazy(() => import('./pages/BrewingPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const RoastersPage = lazy(() => import('./pages/RoastersPage'));

type Page = 'home' | 'collection' | 'brewing' | 'guide' | 'profile' | 'roasters';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState<Page>('home');
  const [konamiActive, setKonamiActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800);

    // Konami code easter egg
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === sequence[pos]) {
        pos++;
        if (pos === sequence.length) {
          setKonamiActive(true);
          pos = 0;
          setTimeout(() => setKonamiActive(false), 5000);
        }
      } else {
        pos = 0;
      }
    };
    window.addEventListener('keydown', onKey);

    // Handle hash routing
    const onHash = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (['home','collection','brewing','guide','profile','roasters'].includes(hash)) {
        setPage(hash as Page);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    onHash();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const navigate = (p: Page) => {
    window.location.hash = p;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`grain ${konamiActive ? 'konami-activated' : ''}`}>
      {/* Loading Screen */}
      <div className={`loading-screen ${loaded ? 'loaded' : ''}`}>
        <div className="cup-loader">
          <div className="wisp" />
          <div className="wisp" />
          <div className="wisp" />
          <div className="cup-body">
            <div className="cup-fill" />
          </div>
          <div className="cup-handle" />
          <div className="cup-saucer" />
        </div>
        <div className="mt-10 text-center">
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold" style={{ color: 'var(--loading-text)' }}>
            Coffee Journal
          </div>
          <div className="text-sm mt-3 tracking-[0.2em] uppercase loading-dots" style={{ color: 'var(--loading-sub)' }}>
            Brewing your experience
          </div>
        </div>
      </div>

      <Navbar currentPage={page} onNavigate={navigate} />

      <main className="page-enter" key={page}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center opacity-30">
              <div className="text-4xl mb-4">☕</div>
              <div className="text-sm tracking-widest uppercase">Loading</div>
            </div>
          </div>
        }>
          {page === 'home' && <HomePage onNavigate={navigate} />}
          {page === 'collection' && <CollectionPage />}
          {page === 'brewing' && <BrewingPage />}
          {page === 'guide' && <GuidePage />}
          {page === 'profile' && <ProfilePage />}
          {page === 'roasters' && <RoastersPage />}
        </Suspense>
      </main>

      {/* Easter egg: click counter */}
      {konamiActive && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg-card)] border border-[var(--border-color)] px-6 py-3 rounded-full text-sm font-mono shadow-xl">
          You found the secret! Here's a virtual espresso shot for you.
        </div>
      )}
    </div>
  );
}
