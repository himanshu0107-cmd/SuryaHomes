'use client';
import { FiShield, FiDollarSign, FiUsers, FiStar } from 'react-icons/fi';
import { features, testimonials } from '@/data/properties';

const featureIcons = [
  <FiShield size={28} key="shield" />,
  <FiDollarSign size={28} key="dollar" />,
  <FiUsers size={28} key="users" />,
];

export default function AboutSection({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* ── WHY CHOOSE US ── */}
      <section id="about" className="spa-section"
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(160deg,#060e1c 0%,#0A1628 50%,#0d2244 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* Decorative orbs */}
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-8%', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(26,51,88,0.5) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex' }}>✦ Why Choose Us</div>
            <h2 style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 800,
              fontSize: 'clamp(28px,4.5vw,48px)', color: 'white',
              lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px',
            }}>
              The <span className="text-gold-gradient">Surya Homes</span> Difference
            </h2>
            <div className="gold-bar gold-bar-center" />
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
              Trusted by 1,000+ families. Built on transparency, expertise, and genuine care.
            </p>
          </div>

          {/* Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px', marginBottom: '64px' }}>
            {features.map((f, i) => (
              <div key={i}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  transition: 'all 0.3s ease',
                  animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s both`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.borderColor = 'rgba(201,168,76,0.35)';
                  el.style.background = 'rgba(255,255,255,0.07)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = 'rgba(255,255,255,0.1)';
                  el.style.background = 'rgba(255,255,255,0.05)';
                }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '16px',
                  background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C9A84C', marginBottom: '24px',
                }}>
                  {featureIcons[i]}
                </div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '20px', color: 'white', marginBottom: '12px' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
            gap: '1px', background: 'rgba(255,255,255,0.08)',
            borderRadius: '20px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { n: '500+', l: 'Properties' },
              { n: '15+', l: 'Years' },
              { n: '98%', l: 'Satisfaction' },
              { n: '₹0', l: 'Hidden Charges' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '28px 16px', background: 'rgba(10,22,40,0.6)' }}>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '32px', color: '#C9A84C', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 24px', background: isDark ? '#070f1e' : '#F8F9FC', transition: 'background 0.4s' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex' }}>✦ Client Stories</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,4vw,44px)', color: isDark ? '#FFFFFF' : '#0A1628', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
            <div className="gold-bar gold-bar-center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ animation: `fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both` }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FiStar key={j} size={16} style={{ color: '#C9A84C', fill: '#C9A84C' }} />
                  ))}
                </div>
                {/* Quote */}
                <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#4A5568', fontSize: '14px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '20px', position: 'relative', paddingLeft: '8px' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#F1F3F8'}` }}>
                  <img src={t.avatar} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(201,168,76,0.3)' }} />
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '14px', color: isDark ? '#FFFFFF' : '#0A1628' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: isDark ? 'rgba(255,255,255,0.45)' : '#8A97B0', marginTop: '2px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
