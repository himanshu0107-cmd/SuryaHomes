'use client';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const quickLinks = [
  { label: 'Browse Properties', href: '#properties' },
  { label: 'Construction Services', href: '#about' },
  { label: 'Land & Plots', href: '#properties' },
  { label: 'List Your Property', href: '#contact' },
  { label: 'Blog & Insights', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

const FacebookIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;

export default function FooterSection({ isDark: _isDark }: { isDark: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="spa-footer spa-section">
      {/* Newsletter */}
      <div style={{ padding: '56px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(201,168,76,0.05)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '16px' }}>✦ Stay Updated</div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3.5vw,34px)', color: 'white', marginBottom: '8px' }}>
            Subscribe to Our Newsletter
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', marginBottom: '28px', lineHeight: 1.7 }}>
            Get the latest property listings, market insights, and exclusive deals delivered weekly.
          </p>
          <div style={{ display: 'flex', gap: '8px', maxWidth: '480px', margin: '0 auto' }}>
            <input type="email" placeholder="Enter your email address" className="input-spa" style={{ flex: 1 }} />
            <button className="btn-primary" style={{ borderRadius: '10px', flexShrink: 0, whiteSpace: 'nowrap' }}>
              Subscribe <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: '72px 24px 48px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
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
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: 'white', fontSize: '18px' }}>Surya Homes</div>
                <div style={{ fontSize: '10px', color: 'rgba(201,168,76,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>Your Dream, Our Foundation</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.8, marginBottom: '24px', maxWidth: '260px' }}>
              Greater Noida&apos;s most trusted real estate and construction company since 2010.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: YoutubeIcon, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(201,168,76,0.15)'; el.style.borderColor = 'rgba(201,168,76,0.4)'; el.style.color = '#C9A84C'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.07)'; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = 'rgba(255,255,255,0.5)'; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '14px', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; (e.currentTarget as HTMLElement).style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}>
                    <FiArrowRight size={12} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '14px', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <FiMapPin size={16} />, text: 'Plot No. 45, Sector Alpha-1, Greater Noida, UP – 201310' },
                { icon: <FiPhone size={16} />, text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <FiMail size={16} />, text: 'info@suryahomes.in', href: 'mailto:info@suryahomes.in' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 400, lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Working Hours */}
            <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px' }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", color: '#C9A84C', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Working Hours</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: 1.7 }}>Mon – Sat: 9:00 AM – 7:00 PM<br/>Sunday: 10:00 AM – 4:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            © {year} Surya Homes. All rights reserved. · RERA: UPRERAPRJ123456
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
