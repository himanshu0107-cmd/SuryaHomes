'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiLogOut, FiSun, FiMoon, FiArrowLeft } from 'react-icons/fi';

export type AppView = 'home' | 'marketplace' | 'list-property';

interface Props {
  onLogout: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  view: AppView;
  onNavigate: (v: AppView) => void;
}

const HOME_NAV = [
  { id: 'home', label: 'Home', isScroll: true },
  { id: 'properties', label: 'Properties', isScroll: true },
  { id: 'about', label: 'About', isScroll: true },
  { id: 'contact', label: 'Contact', isScroll: true },
];

export default function SpaNavbar({ onLogout, isDark, toggleTheme, view, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (view === 'home') {
        const sections = HOME_NAV.map(n => document.getElementById(n.id));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = sections[i];
          if (el && el.getBoundingClientRect().top <= 120) { setActive(HOME_NAV[i].id); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [view]);

  // Reset scroll highlight when switching views
  useEffect(() => {
    if (view !== 'home') setActive(view);
    else setActive('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const scrollTo = (id: string) => {
    if (view !== 'home') { onNavigate('home'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350); }
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navigate = (v: AppView) => { onNavigate(v); setMobileOpen(false); };

  const isLightScrolled = scrolled && !isDark;
  const isPageView = view !== 'home';
  // On sub-pages, always show solid background
  const navBg = isPageView
    ? (isDark ? 'rgba(6,14,28,0.98)' : 'rgba(255,255,255,0.98)')
    : scrolled ? (isDark ? 'rgba(6,14,28,0.97)' : 'rgba(255,255,255,0.97)') : 'transparent';
  const navShadow = (scrolled || isPageView)
    ? (isDark ? '0 1px 0 rgba(255,255,255,0.06),0 8px 32px rgba(0,0,0,0.35)' : '0 2px 20px rgba(0,0,0,0.1)')
    : 'none';
  const navTextColor = (isLightScrolled || isPageView && !isDark) ? 'rgba(10,22,40,0.7)' : 'rgba(255,255,255,0.75)';

  const isActiveLink = (id: string) => {
    if (view === 'marketplace' && id === 'marketplace') return true;
    if (view === 'list-property' && id === 'list-property') return true;
    if (view === 'home') return active === id;
    return false;
  };

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: '72px', display: 'flex', alignItems: 'center', background: navBg, backdropFilter: (scrolled || isPageView) ? 'blur(20px)' : 'none', boxShadow: navShadow, transition: 'all 0.35s' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <button onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="12" fill="#C9A84C" fillOpacity="0.15"/>
              <circle cx="22" cy="22" r="10" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
              <line x1="22" y1="4" x2="22" y2="10" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="34" x2="22" y2="40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4" y1="22" x2="10" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="34" y1="22" x2="40" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 13 L30 19 L30 28 L14 28 L14 19 Z" fill="#0A1628"/>
              <path d="M12 20 L22 12 L32 20" fill="none" stroke="#C9A84C" strokeWidth="2.2" strokeLinejoin="round"/>
              <rect x="19" y="21" width="6" height="7" rx="1" fill="#C9A84C"/>
            </svg>
            <div>
              <div style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, color: (isLightScrolled || (isPageView && !isDark)) ? '#0A1628' : 'white', fontSize:'17px', lineHeight:1, transition:'color 0.3s' }}>Surya Homes</div>
              <div style={{ fontSize:'9px', color:'rgba(201,168,76,0.85)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'3px' }}>Your Dream, Our Foundation</div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div style={{ display:'flex', alignItems:'center', gap:'4px' }} className="hidden-mobile">
            {/* Home scroll links */}
            {HOME_NAV.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                style={{ padding:'8px 16px', borderRadius:'8px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:'13px', background: isActiveLink(n.id) ? 'rgba(201,168,76,0.15)' : 'transparent', color: isActiveLink(n.id) ? '#C9A84C' : navTextColor, transition:'all 0.2s', position:'relative' }}>
                {n.label}
                {isActiveLink(n.id) && <span style={{ position:'absolute', bottom:'2px', left:'50%', transform:'translateX(-50%)', width:'20px', height:'2px', background:'#C9A84C', borderRadius:'1px' }}/>}
              </button>
            ))}
            {/* Page navigation links */}
            {([['marketplace','🏠 Buy / Rent'],['list-property','+ List Property']] as [AppView,string][]).map(([v, label]) => (
              <button key={v} onClick={() => navigate(v)}
                style={{ padding:'8px 16px', borderRadius:'8px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:'13px',
                  background: isActiveLink(v) ? 'rgba(201,168,76,0.15)' : 'transparent',
                  color: isActiveLink(v) ? '#C9A84C' : navTextColor, transition:'all 0.2s', position:'relative' }}>
                {label}
                {isActiveLink(v) && <span style={{ position:'absolute', bottom:'2px', left:'50%', transform:'translateX(-50%)', width:'20px', height:'2px', background:'#C9A84C', borderRadius:'1px' }}/>}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            <a href="tel:+919876543210" className="hidden-mobile"
              style={{ display:'flex', alignItems:'center', gap:'6px', color: navTextColor, fontSize:'13px', fontWeight:500, textDecoration:'none', padding:'8px 12px', borderRadius:'8px', transition:'all 0.2s' }}>
              <FiPhone size={14}/> +91 98765 43210
            </a>

            {/* List Property CTA */}
            <button onClick={() => navigate('list-property')} className="hidden-mobile"
              style={{ padding:'8px 18px', borderRadius:'8px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:'12px', background: view === 'list-property' ? 'linear-gradient(135deg,#7a6020,#A8872E)' : 'linear-gradient(135deg,#A8872E,#C9A84C,#E4C46A)', color:'#0A1628', transition:'all 0.2s', boxShadow:'0 3px 14px rgba(201,168,76,0.35)', letterSpacing:'0.03em' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 6px 22px rgba(201,168,76,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 3px 14px rgba(201,168,76,0.35)'; }}>
              + List Property
            </button>

            {/* Back button on sub-pages — always visible including mobile */}
            {isPageView && (
              <button onClick={() => navigate('home')}
                style={{ display:'flex', alignItems:'center', gap:'6px', padding:'8px 14px', borderRadius:'8px', background: isDark ? 'rgba(201,168,76,0.15)' : 'rgba(10,22,40,0.1)', border:`1.5px solid ${isDark ? 'rgba(201,168,76,0.35)' : 'rgba(10,22,40,0.2)'}`, color: isDark ? '#C9A84C' : (isPageView && !isDark ? '#0A1628' : navTextColor), fontSize:'12px', fontWeight:700, cursor:'pointer', transition:'all 0.2s', fontFamily:"'Poppins',sans-serif", whiteSpace:'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(201,168,76,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background= isDark ? 'rgba(201,168,76,0.15)' : 'rgba(10,22,40,0.1)'; }}>
                <FiArrowLeft size={14}/> <span style={{marginLeft:2}}>Home</span>
              </button>
            )}

            {/* Theme Toggle */}
            <motion.button onClick={toggleTheme} whileTap={{ scale: 0.85 }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{ width:'40px', height:'40px', borderRadius:'50%', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background: isDark ? 'rgba(201,168,76,0.15)' : 'rgba(10,22,40,0.08)', transition:'all 0.3s' }}>
              <motion.div key={String(isDark)} initial={{ rotate: -90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}>
                {isDark ? <FiSun size={18} style={{ color:'#C9A84C' }}/> : <FiMoon size={18} style={{ color: (isLightScrolled || (isPageView && !isDark)) ? '#0A1628' : 'rgba(255,255,255,0.8)' }}/>}
              </motion.div>
            </motion.button>

            {/* Logout */}
            <button onClick={onLogout}
              style={{ display:'flex', alignItems:'center', gap:'6px', padding:'8px 14px', borderRadius:'8px', background:'rgba(255,255,255,0.07)', border:`1px solid ${(isLightScrolled || (isPageView && !isDark)) ? 'rgba(10,22,40,0.15)' : 'rgba(255,255,255,0.1)'}`, color: navTextColor, fontSize:'12px', fontWeight:600, cursor:'pointer', transition:'all 0.2s', fontFamily:"'Poppins',sans-serif" }}
              onMouseEnter={e => { const el=e.currentTarget; el.style.background='rgba(239,68,68,0.12)'; el.style.color='#fc8181'; }}
              onMouseLeave={e => { const el=e.currentTarget; el.style.background='rgba(255,255,255,0.07)'; el.style.color=navTextColor; }}>
              <FiLogOut size={14}/><span className="hidden-mobile">Logout</span>
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="show-mobile"
              style={{ display:'none', padding:'8px', borderRadius:'8px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'white', cursor:'pointer' }}>
              {mobileOpen ? <FiX size={20}/> : <FiMenu size={20}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
          style={{ position:'fixed', top:'72px', left:0, right:0, zIndex:999, background: isDark?'rgba(6,14,28,0.98)':'rgba(255,255,255,0.98)', backdropFilter:'blur(20px)', borderBottom:`1px solid ${isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.08)'}`, padding:'16px 24px' }}>

          {/* Back to Home — shown only on sub-pages */}
          {isPageView && (
            <button onClick={() => navigate('home')}
              style={{ display:'flex', alignItems:'center', gap:10, width:'100%', padding:'14px 16px', borderRadius:12, border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:'15px', marginBottom:12, background:'linear-gradient(135deg,rgba(201,168,76,0.15),rgba(201,168,76,0.08))', color:'#C9A84C', borderLeft:'3px solid #C9A84C' }}>
              <FiArrowLeft size={18}/> Back to Home
            </button>
          )}

          {/* Divider */}
          {isPageView && <div style={{ height:1, background: isDark?'rgba(255,255,255,0.08)':'rgba(0,0,0,0.08)', marginBottom:12 }} />}

          {HOME_NAV.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              style={{ display:'block', width:'100%', textAlign:'left', padding:'12px 16px', borderRadius:'10px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:'14px', marginBottom:'4px', background: isActiveLink(n.id)?'rgba(201,168,76,0.12)':'transparent', color: isActiveLink(n.id)?'#C9A84C': isDark?'rgba(255,255,255,0.75)':'#0A1628' }}>
              {n.label}
            </button>
          ))}
          <button onClick={() => navigate('marketplace')}
            style={{ display:'block', width:'100%', textAlign:'left', padding:'12px 16px', borderRadius:'10px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:'14px', marginBottom:'4px', background: view==='marketplace'?'rgba(201,168,76,0.12)':'transparent', color: view==='marketplace'?'#C9A84C': isDark?'rgba(255,255,255,0.75)':'#0A1628' }}>
            🏠 Buy / Rent
          </button>
          <button onClick={() => navigate('list-property')}
            style={{ display:'block', width:'100%', textAlign:'left', padding:'12px 16px', borderRadius:'10px', border:'none', cursor:'pointer', fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'8px', background:'linear-gradient(135deg,#A8872E,#C9A84C)', color:'#0A1628' }}>
            + List Your Property
          </button>
          <a href="tel:+919876543210"
            style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'4px', padding:'12px 16px', borderRadius:'10px', background:'rgba(201,168,76,0.08)', color: isDark?'rgba(255,255,255,0.7)':'#4A5568', fontSize:'14px', fontWeight:500, textDecoration:'none' }}>
            <FiPhone size={16} style={{ color:'#C9A84C' }}/> +91 98765 43210
          </a>
        </motion.div>
      )}

      <style>{`
        @media (max-width:900px) { .hidden-mobile{display:none!important} .show-mobile{display:flex!important} }
        @media (min-width:901px) { .show-mobile{display:none!important} }
      `}</style>
    </>
  );
}
