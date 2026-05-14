'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/properties', label: 'Properties',
    sub: [
      { href: '/properties', label: '🏢 Buy Property' },
      { href: '/properties?filter=rent', label: '🔑 Rent Property' },
      { href: '/properties/list', label: '📋 List Your Property' },
      { href: '/land-plot', label: '🌾 Land & Plots' },
    ]
  },
  {
    href: '/construction', label: 'Construction',
    sub: [
      { href: '/construction', label: '🏗️ Residential' },
      { href: '/construction', label: '🏢 Commercial' },
      { href: '/construction', label: '🛋️ Interior Design' },
      { href: '/construction', label: '🔨 Renovation' },
    ]
  },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDrop(null); }, [pathname]);

  const isHeroPage = pathname === '/';
  const navBg = isHeroPage && !scrolled && !mobileOpen
    ? 'transparent'
    : 'rgba(10,20,38,0.96)';
  const navShadow = scrolled || !isHeroPage
    ? '0 1px 0 rgba(255,255,255,0.06), 0 8px 40px -8px rgba(0,0,0,0.5)'
    : 'none';

  return (
    <>
      <nav
        className="navbar-sticky"
        style={{
          background: navBg,
          boxShadow: navShadow,
          backdropFilter: (scrolled || !isHeroPage) ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: (scrolled || !isHeroPage) ? 'blur(24px) saturate(180%)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}>
        <div className="container flex items-center justify-between" style={{height:'72px'}}>

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/surya-homes-logo.png"
              alt="Surya Homes – Building Trust. Creating Futures."
              width={160}
              height={52}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'contain', height: '52px', width: 'auto' }}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const isHovered = hoveredLink === link.href;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      color: isActive ? '#E0A82E' : isHovered ? '#fff' : 'rgba(255,255,255,0.78)',
                      background: isHovered && !isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                    }}>
                    {link.label}
                    {link.sub && (
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{
                          opacity: 0.6,
                          transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}/>
                    )}
                  </Link>
                  {/* Active underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full" style={{background:'#C9940A'}}/>
                  )}
                  {/* Dropdown */}
                  {link.sub && isHovered && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 rounded-2xl overflow-hidden shadow-2xl z-50 animate-scaleIn"
                      style={{
                        background:'rgba(8,18,36,0.97)',
                        backdropFilter:'blur(20px)',
                        border:'1px solid rgba(255,255,255,0.08)',
                        transformOrigin:'top left',
                      }}>
                      {link.sub.map((s, si) => (
                        <Link
                          key={s.href + s.label}
                          href={s.href}
                          className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-medium transition-all duration-150 hover:bg-amber-500/10"
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            borderBottom: si < link.sub!.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#E0A82E'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white/10"
              style={{color:'rgba(255,255,255,0.8)'}}>
              <Phone className="w-4 h-4" style={{color:'#C9940A'}}/>
              +91 98765 43210
            </a>
            <Link
              href="/properties/list"
              className="btn btn-gold btn-sm"
              style={{borderRadius:'8px'}}>
              List Property
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10">
            {mobileOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[998] lg:hidden" style={{top:'72px'}}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)}/>
          <div
            className="absolute top-0 left-0 right-0 shadow-2xl animate-scaleIn"
            style={{
              background:'rgba(8,18,36,0.98)',
              backdropFilter:'blur(24px)',
              borderBottom:'1px solid rgba(255,255,255,0.08)',
            }}>
            <div className="p-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.href}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className="flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all"
                        style={{
                          color: isActive ? '#E0A82E' : 'rgba(255,255,255,0.85)',
                          background: isActive ? 'rgba(201,148,10,0.1)' : 'transparent',
                        }}>
                        {link.label}
                      </Link>
                      {link.sub && (
                        <button
                          onClick={() => setOpenDrop(openDrop === link.href ? null : link.href)}
                          className="p-2.5 rounded-xl transition-colors text-white/40 hover:text-white hover:bg-white/10">
                          <ChevronDown className="w-4 h-4 transition-transform" style={{transform: openDrop === link.href ? 'rotate(180deg)' : 'none'}}/>
                        </button>
                      )}
                    </div>
                    {link.sub && openDrop === link.href && (
                      <div className="ml-4 mt-1 mb-2 border-l-2 pl-4" style={{borderColor:'rgba(201,148,10,0.3)'}}>
                        {link.sub.map(s => (
                          <Link
                            key={s.label}
                            href={s.href}
                            className="block px-3 py-2.5 text-sm rounded-lg transition-colors mb-0.5"
                            style={{color:'rgba(255,255,255,0.55)'}}>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Footer */}
              <div className="pt-4 border-t mt-4 space-y-3" style={{borderColor:'rgba(255,255,255,0.08)'}}>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold"
                  style={{background:'rgba(255,255,255,0.06)',color:'white',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <Phone className="w-4 h-4" style={{color:'#C9940A'}}/>
                  +91 98765 43210
                </a>
                <Link
                  href="/properties/list"
                  className="btn btn-gold w-full py-3.5 justify-center"
                  style={{borderRadius:'12px',fontSize:'15px'}}>
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
