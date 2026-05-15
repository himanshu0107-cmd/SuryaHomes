'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginSection from '@/spa/LoginSection';
import RegisterSection from '@/spa/RegisterSection';
import SpaNavbar, { AppView } from '@/spa/SpaNavbar';
import HeroSection from '@/spa/HeroSection';
import PropertiesSection from '@/spa/PropertiesSection';
import PropertyDetail from '@/spa/PropertyDetail';
import MarketplaceSection from '@/spa/MarketplaceSection';
import ListPropertySection from '@/spa/ListPropertySection';
import AboutSection from '@/spa/AboutSection';
import FooterSection from '@/spa/FooterSection';
import { Property } from '@/data/properties';

type AuthView = 'login' | 'register';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const pageVariants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
  exit:    { opacity: 0, y: -24, transition: { duration: 0.3 } },
} as const;

export default function SuryaHomesSPA() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState<AuthView>('login');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [showWA, setShowWA] = useState(false);
  const [view, setView] = useState<AppView>('home');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.style.background = isDark ? '#060e1c' : '#ffffff';
  }, [isDark]);

  // WhatsApp button delay
  useEffect(() => {
    if (!isLoggedIn) return;
    const t = setTimeout(() => setShowWA(true), 3000);
    return () => clearTimeout(t);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('login');
    setSelectedProperty(null);
    setShowWA(false);
    setView('home');
  };

  const handleSelectProperty = (p: Property) => {
    setSelectedProperty(p);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const handleBackToProperties = () => {
    setSelectedProperty(null);
    setTimeout(() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleNavigate = (v: AppView) => {
    setView(v);
    setSelectedProperty(null); // clear any property detail
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Auth Screens ──
  if (!isLoggedIn) {
    return (
      <AnimatePresence mode="wait">
        {authView === 'login' ? (
          <motion.div key="login" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.35 }}>
            <LoginSection onLogin={handleLogin} onGoToRegister={() => setAuthView('register')} />
          </motion.div>
        ) : (
          <motion.div key="register" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <RegisterSection onRegister={handleLogin} onBackToLogin={() => setAuthView('login')} />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // ── Main SPA ──
  return (
    <div style={{ minHeight: '100vh', background: isDark ? '#060e1c' : 'white', transition: 'background 0.4s' }}>
      <SpaNavbar
        onLogout={handleLogout}
        isDark={isDark}
        toggleTheme={() => setIsDark(d => !d)}
        view={view}
        onNavigate={handleNavigate}
      />

      <AnimatePresence mode="wait">

        {/* ── Marketplace page ── */}
        {view === 'marketplace' && (
          <motion.div key="marketplace" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Marketplace Page Hero */}
            <div style={{ paddingTop: 72, background: isDark ? 'linear-gradient(145deg,#040b17,#0A1628)' : 'linear-gradient(145deg,#0A1628,#0F2040)', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)' }} />
              <div className="section-pill" style={{ display: 'inline-flex' }}>✦ Property Marketplace</div>
              <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,52px)', color: 'white', textAlign: 'center', lineHeight: 1.15, margin: 0 }}>
                Buy, Sell &amp; <span className="text-gold-gradient">Rent Properties</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, textAlign: 'center', maxWidth: 500, lineHeight: 1.7 }}>
                Browse verified listings from owners, agents, and builders — all in one place.
              </p>
              {/* Mobile back button */}
              <button onClick={() => handleNavigate('home')} className="show-mobile"
                style={{ display:'none', alignItems:'center', gap:8, padding:'10px 20px', borderRadius:10, border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.85)', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:13, cursor:'pointer', marginTop:8 }}>
                ← Back to Home
              </button>
            </div>
            <MarketplaceSection isDark={isDark} />
            <FooterSection isDark={isDark} />
          </motion.div>
        )}

        {/* ── List Property page ── */}
        {view === 'list-property' && (
          <motion.div key="list-property" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* List Property Page Hero */}
            <div style={{ paddingTop: 72, background: isDark ? 'linear-gradient(145deg,#040b17,#0A1628)' : 'linear-gradient(145deg,#0A1628,#0F2040)', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)' }} />
              <div className="section-pill" style={{ display: 'inline-flex' }}>✦ Free Listing</div>
              <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,52px)', color: 'white', textAlign: 'center', lineHeight: 1.15, margin: 0 }}>
                List Your <span className="text-gold-gradient">Property</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, textAlign: 'center', maxWidth: 500, lineHeight: 1.7 }}>
                Reach thousands of verified buyers &amp; tenants — completely free of charge.
              </p>
              {/* Mobile back button */}
              <button onClick={() => handleNavigate('home')} className="show-mobile"
                style={{ display:'none', alignItems:'center', gap:8, padding:'10px 20px', borderRadius:10, border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.85)', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:13, cursor:'pointer', marginTop:8 }}>
                ← Back to Home
              </button>
            </div>
            <ListPropertySection isDark={isDark} />
            <FooterSection isDark={isDark} />
          </motion.div>
        )}

        {/* ── Home / Property Detail ── */}
        {view === 'home' && (
          <motion.div key="home-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <AnimatePresence mode="wait">
              {selectedProperty ? (
                <motion.div key="detail"
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <PropertyDetail property={selectedProperty} onBack={handleBackToProperties} isDark={isDark} />
                  <FooterSection isDark={isDark} />
                </motion.div>
              ) : (
                <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                  <HeroSection onExplore={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })} />
                  <PropertiesSection onSelect={handleSelectProperty} isDark={isDark} />
                  <AboutSection isDark={isDark} />
                  <FooterSection isDark={isDark} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Floating WhatsApp CTA */}
      <AnimatePresence>
        {showWA && (
          <motion.a href="https://wa.me/919876543210?text=Hi%2C+I%27m+interested+in+Surya+Homes+listings!"
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
            style={{ position:'fixed', bottom:'28px', right:'28px', zIndex:9999, width:'56px', height:'56px', borderRadius:'50%', background:'linear-gradient(135deg,#1ebe57,#25D366)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 24px rgba(37,211,102,0.5)', textDecoration:'none', color:'white', animation:'waRing 2.5s ease-out infinite' }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
