import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const FacebookIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2"/></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/land-plot', label: 'Land & Plots' },
    { href: '/construction', label: 'Construction' },
    { href: '/locations', label: 'Our Locations' },
    { href: '/blog', label: 'Blog & News' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/admin', label: 'Admin Panel' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Projects',
    'Interior Design',
    'Renovation & Remodeling',
    'Architectural Planning',
    'Project Management',
    'Property Valuation',
    'Legal Assistance',
  ];

  return (
    <footer style={{background: '#0f1c2e'}} className="text-white">
      {/* Newsletter Strip */}
      <div style={{background: 'var(--gold)'}} className="py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-navy" style={{color: '#1A2E4A'}}>Subscribe to Our Newsletter</h3>
            <p className="text-navy/70 mt-1 text-sm" style={{color: '#1A2E4A99'}}>Get the latest property listings, market trends & offers delivered to you.</p>
          </div>
          <div className="flex gap-0 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-xl text-gray-800 text-sm outline-none"
              style={{border: 'none'}}
            />
            <button className="px-6 py-3 rounded-r-xl font-bold text-white text-sm flex items-center gap-2 transition-all hover:opacity-90" style={{background: '#1A2E4A'}}>
              Subscribe <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="10" fill="#D4A017"/>
                <line x1="22" y1="4" x2="22" y2="10" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="22" y1="34" x2="22" y2="40" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="4" y1="22" x2="10" y2="22" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="34" y1="22" x2="40" y2="22" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="8.34" y1="8.34" x2="12.58" y2="12.58" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="31.42" y1="31.42" x2="35.66" y2="35.66" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="35.66" y1="8.34" x2="31.42" y2="12.58" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="12.58" y1="31.42" x2="8.34" y2="35.66" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M22 14 L28 19 L28 27 L16 27 L16 19 Z" fill="#1A2E4A"/>
                <path d="M14 20 L22 13 L30 20" fill="none" stroke="#F5ECD4" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="20" y="21" width="4" height="6" fill="#D4A017"/>
              </svg>
              <div>
                <div className="text-xl font-bold font-serif">Surya Homes</div>
                <div className="text-xs text-amber-400">Your Dream, Our Foundation</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Greater Noida's most trusted real estate & construction company. We turn your property dreams into reality with transparency, quality, and care.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, href: '#' },
                { Icon: InstagramIcon, href: '#' },
                { Icon: YoutubeIcon, href: '#' },
                { Icon: TwitterIcon, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 text-amber-400" style={{background: 'rgba(255,255,255,0.1)'}}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-5 text-amber-400 font-serif">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-amber-300 text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:text-amber-300 transition-colors"/>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-5 text-amber-400 font-serif">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-5 text-amber-400 font-serif">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"/>
                <div className="text-white/60 text-sm">
                  Plot No. 45, Sector Alpha-1,<br/>
                  Greater Noida, UP – 201310
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0"/>
                <div>
                  <a href="tel:+919876543210" className="text-white/70 hover:text-amber-300 text-sm transition-colors block">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="text-white/70 hover:text-amber-300 text-sm transition-colors block">+91 98765 43211</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0"/>
                <div>
                  <a href="mailto:info@suryahomes.in" className="text-white/70 hover:text-amber-300 text-sm transition-colors block">info@suryahomes.in</a>
                  <a href="mailto:sales@suryahomes.in" className="text-white/70 hover:text-amber-300 text-sm transition-colors block">sales@suryahomes.in</a>
                </div>
              </div>
              <div className="text-white/60 text-sm">
                <span className="text-amber-400 font-medium">Working Hours:</span><br/>
                Mon – Sat: 9:00 AM – 7:00 PM<br/>
                Sunday: 10:00 AM – 4:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5 px-4" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Surya Homes. All rights reserved. | RERA Reg: UPRERAPRJ123456
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-amber-300 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-amber-300 text-sm transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-white/40 hover:text-amber-300 text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
