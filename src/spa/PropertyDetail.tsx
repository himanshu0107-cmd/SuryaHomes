'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import { IoBedOutline, IoWaterOutline, IoExpandOutline } from 'react-icons/io5';
import { Property } from '@/data/properties';

interface Props { property: Property; onBack: () => void; isDark: boolean; }

export default function PropertyDetail({ property: p, onBack, isDark }: Props) {
  const [imgIdx, setImgIdx] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', message: `Hi, I'm interested in "${p.title}". Please contact me.` });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ minHeight: '100vh', background: isDark ? '#070f1e' : '#F8F9FC', paddingTop: '88px', transition: 'background 0.4s' }}>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A5568', fontSize: '14px', fontWeight: 600, background: 'white', border: '1.5px solid #E2E6F0', borderRadius: '10px', padding: '10px 18px', cursor: 'pointer', marginBottom: '32px', fontFamily: "'Poppins',sans-serif", transition: 'all 0.2s' }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#C9A84C'; el.style.color = '#C9A84C'; }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#E2E6F0'; el.style.color = '#4A5568'; }}>
          <FiChevronLeft size={18} /> Back to Properties
        </motion.button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>

          {/* ── Gallery ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', aspectRatio: '16/8', background: '#0A1628' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={p.gallery[imgIdx]}
                  alt={p.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </AnimatePresence>

              {/* Nav arrows */}
              {p.gallery.length > 1 && (
                <>
                  <button onClick={() => setImgIdx(i => (i - 1 + p.gallery.length) % p.gallery.length)}
                    style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#0A1628'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,22,40,0.7)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}>
                    <FiChevronLeft size={20} />
                  </button>
                  <button onClick={() => setImgIdx(i => (i + 1) % p.gallery.length)}
                    style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#0A1628'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,22,40,0.7)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}>
                    <FiChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(10,22,40,0.75)', color: 'white', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '100px', backdropFilter: 'blur(8px)', fontFamily: "'Poppins',sans-serif" }}>
                {imgIdx + 1} / {p.gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            {p.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
                {p.gallery.map((img, i) => (
                  <button key={i} onClick={() => setImgIdx(i)}
                    className={`gallery-thumb ${i === imgIdx ? 'active' : ''}`}
                    style={{ width: '120px', height: '78px', flexShrink: 0, border: i === imgIdx ? '2px solid #C9A84C' : '2px solid transparent', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── Details + Contact ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '28px' }}>

            {/* Left: Details */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ background: 'white', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 24px rgba(10,22,40,0.07)', border: '1px solid #E2E6F0' }}>

              {/* Badge + Price */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
                <div>
                  {p.badge && (
                    <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'linear-gradient(135deg,#A8872E,#C9A84C)', color: '#0A1628', fontSize: '11px', fontWeight: 700, fontFamily: "'Poppins',sans-serif", display: 'inline-block', marginBottom: '10px' }}>
                      {p.badge}
                    </span>
                  )}
                  <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(20px,3vw,28px)', color: '#0A1628', lineHeight: 1.2, letterSpacing: '-0.01em' }}>{p.title}</h1>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '28px', color: '#C9A84C', lineHeight: 1 }}>{p.price}</div>
                  {p.type === 'Flat' && <div style={{ fontSize: '11px', color: '#8A97B0', marginTop: '4px' }}>₹{Math.round(Number(p.price.replace(/[₹\s,LCr]/g, '')) * (p.price.includes('Cr') ? 10000000 : 100000) / p.area).toLocaleString()}/sqft</div>}
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A97B0', fontSize: '14px', marginBottom: '24px' }}>
                <FiMapPin size={16} style={{ color: '#C9A84C' }} /> {p.location}
              </div>

              {/* Specs row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '28px', padding: '20px', background: '#F8F9FC', borderRadius: '14px' }}>
                {[
                  { icon: <IoBedOutline size={20} />, label: 'Bedrooms', val: p.bedrooms > 0 ? p.bedrooms : 'N/A' },
                  { icon: <IoWaterOutline size={20} />, label: 'Bathrooms', val: p.bathrooms > 0 ? p.bathrooms : 'N/A' },
                  { icon: <IoExpandOutline size={20} />, label: p.type === 'Plot' ? 'Sq Yards' : 'Sq Feet', val: p.area.toLocaleString() },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ color: '#C9A84C', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '18px', color: '#0A1628' }}>{s.val}</div>
                    <div style={{ fontSize: '11px', color: '#8A97B0', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '15px', color: '#0A1628', marginBottom: '10px' }}>About this Property</h3>
                <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.8, fontWeight: 400 }}>{p.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '15px', color: '#0A1628', marginBottom: '14px' }}>Amenities</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {p.amenities.map(a => (
                    <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#0A1628', fontFamily: "'Poppins',sans-serif" }}>
                      <FiCheck size={12} style={{ color: '#C9A84C' }} /> {a}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Agent */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>

              {/* Agent card */}
              <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 24px rgba(10,22,40,0.07)', border: '1px solid #E2E6F0', marginBottom: '20px' }}>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '14px', color: '#8A97B0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Listed By</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg,#A8872E,#C9A84C)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#0A1628', fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '20px' }}>{p.agent.charAt(0)}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '16px', color: '#0A1628' }}>{p.agent}</div>
                    <div style={{ fontSize: '12px', color: '#8A97B0', marginTop: '2px' }}>Verified Agent · Surya Homes</div>
                  </div>
                </div>
                <a href={`tel:${p.agentPhone}`} className="btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center', borderRadius: '10px', fontSize: '13px' }}>
                  <FiPhone size={14} /> Call {p.agentPhone}
                </a>
              </div>

              {/* Contact Form */}
              <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 24px rgba(10,22,40,0.07)', border: '1px solid #E2E6F0' }}>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '16px', color: '#0A1628', marginBottom: '20px' }}>Send Enquiry</h3>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '32px 16px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <FiCheck size={28} style={{ color: '#10B981' }} />
                    </div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '18px', color: '#0A1628', marginBottom: '8px' }}>Enquiry Sent!</div>
                    <div style={{ color: '#8A97B0', fontSize: '13px' }}>{p.agent} will contact you within 24 hours.</div>
                    <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: '20px' }}>Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Poppins',sans-serif" }}>Your Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="input-light" placeholder="Himanshu Pandey" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Poppins',sans-serif" }}>Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="input-light" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Poppins',sans-serif" }}>Message</label>
                      <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        className="input-light" style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary" disabled={sending}
                      style={{ justifyContent: 'center', borderRadius: '10px', opacity: sending ? 0.7 : 1 }}>
                      {sending ? 'Sending...' : <><FiSend size={14} /> Send Enquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
