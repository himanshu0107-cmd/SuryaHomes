'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import { IoBedOutline, IoWaterOutline, IoExpandOutline } from 'react-icons/io5';
import { properties, Property } from '@/data/properties';

interface Props { onSelect: (p: Property) => void; isDark: boolean; }

const types = ['All', 'Flat', 'Plot', 'Villa', 'Commercial'];

export default function PropertiesSection({ onSelect, isDark }: Props) {
  const [activeType, setActiveType] = useState('All');
  const filtered = activeType === 'All' ? properties : properties.filter(p => p.type === activeType);

  return (
    <section id="properties" className="spa-section"
      style={{ padding: '100px 24px', background: isDark ? '#070f1e' : '#F8F9FC', transition: 'background 0.4s' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            ✦ Premium Listings
          </div>
          <h2 style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 800,
            fontSize: 'clamp(28px,4.5vw,48px)', color: isDark ? '#FFFFFF' : '#0A1628',
            lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px',
          }}>
            Featured <span className="text-gold-gradient">Properties</span>
          </h2>
          <div className="gold-bar gold-bar-center" />
          <p style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#8A97B0', fontSize: '16px', fontWeight: 400, maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            Hand-picked, verified listings across Greater Noida and NCR — ready for your visit.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
          {types.map(t => (
            <button key={t} onClick={() => setActiveType(t)}
              style={{
                padding: '9px 22px', borderRadius: '100px', border: '1.5px solid',
                fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '13px',
                cursor: 'pointer', transition: 'all 0.22s',
                background: activeType === t ? 'linear-gradient(135deg,#A8872E,#C9A84C,#E4C46A)' : 'white',
                color: activeType === t ? '#0A1628' : '#4A5568',
                borderColor: activeType === t ? 'transparent' : '#E2E6F0',
                boxShadow: activeType === t ? '0 4px 20px rgba(201,168,76,0.35)' : 'none',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '28px' }}>
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: 0 }}
              style={{
                animation: `fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s both`,
              }}>
              <div className="prop-card" onClick={() => onSelect(p)}>

                {/* Image */}
                <div className="prop-card-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {p.badge && (
                      <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'linear-gradient(135deg,#A8872E,#C9A84C)', color: '#0A1628', fontSize: '11px', fontWeight: 700, fontFamily: "'Poppins',sans-serif", letterSpacing: '0.04em' }}>
                        {p.badge}
                      </span>
                    )}
                    <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'rgba(10,22,40,0.75)', color: 'white', fontSize: '11px', fontWeight: 600, fontFamily: "'Poppins',sans-serif", backdropFilter: 'blur(8px)' }}>
                      {p.type}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '14px', right: '14px' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 700,
                      fontFamily: "'Poppins',sans-serif", backdropFilter: 'blur(8px)',
                      background: p.status === 'Ready to Move' ? 'rgba(16,185,129,0.9)' : 'rgba(59,130,246,0.85)',
                      color: 'white',
                    }}>
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '16px', color: isDark ? '#FFFFFF' : '#0A1628', lineHeight: 1.3, flex: 1 }}>
                      {p.title}
                    </h3>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '18px', color: '#C9A84C', flexShrink: 0 }}>
                      {p.price}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isDark ? 'rgba(255,255,255,0.45)' : '#8A97B0', fontSize: '13px', marginBottom: '16px' }}>
                    <FiMapPin size={13} style={{ color: '#C9A84C', flexShrink: 0 }} /> {p.location}
                  </div>

                  <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid #F1F3F8' }}>
                    {p.bedrooms > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4A5568', fontSize: '13px', fontWeight: 500 }}>
                        <IoBedOutline size={14} style={{ color: '#8A97B0' }} />{p.bedrooms} Beds
                      </div>
                    )}
                    {p.bathrooms > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4A5568', fontSize: '13px', fontWeight: 500 }}>
                        <IoWaterOutline size={14} style={{ color: '#8A97B0' }} />{p.bathrooms} Baths
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4A5568', fontSize: '13px', fontWeight: 500 }}>
                      <IoExpandOutline size={13} style={{ color: '#8A97B0' }} />{p.area.toLocaleString()} {p.type === 'Plot' ? 'Sq Yd' : 'Sq Ft'}
                    </div>
                  </div>

                  <button
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '18px', borderRadius: '10px', fontSize: '13px', padding: '12px' }}
                    onClick={e => { e.stopPropagation(); onSelect(p); }}>
                    View Details <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
