'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiSearch, FiFilter, FiPhone, FiCheckCircle, FiX, FiHome, FiArrowRight } from 'react-icons/fi';
import { IoBedOutline, IoWaterOutline, IoExpandOutline } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { marketplaceListings, MarketplaceListing, ListingType, PropertyCategory } from '@/data/listings';

interface Props { isDark: boolean; }

const SALE_CATEGORIES: PropertyCategory[] = ['Flat', 'Villa', 'Plot', 'Commercial', 'Row House'];
const RENT_CATEGORIES: PropertyCategory[] = ['Flat', 'Villa', 'Studio', 'Commercial', 'PG / Hostel'];
const CITIES = ['All Cities', 'Noida', 'Greater Noida'];

function ListingCard({ l, isDark }: { l: MarketplaceListing; isDark: boolean }) {
  const [showContact, setShowContact] = useState(false);
  const isRent = l.listingType === 'Rent';

  return (
    <motion.div layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}>
      <div className="prop-card" style={{ overflow: 'hidden' }}>
        {/* Image */}
        <div className="prop-card-img" style={{ position: 'relative' }}>
          <img src={l.image} alt={l.title} loading="lazy" />
          <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', borderRadius: 100, background: isRent ? 'rgba(59,130,246,0.92)' : 'rgba(16,185,129,0.92)', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: "'Poppins',sans-serif" }}>
              {isRent ? 'FOR RENT' : 'FOR SALE'}
            </span>
            {l.badge && (
              <span style={{ padding: '4px 12px', borderRadius: 100, background: 'linear-gradient(135deg,#A8872E,#C9A84C)', color: '#0A1628', fontSize: 11, fontWeight: 700, fontFamily: "'Poppins',sans-serif" }}>
                {l.badge}
              </span>
            )}
          </div>
          <div style={{ position: 'absolute', top: 14, right: 14 }}>
            <span style={{ padding: '4px 12px', borderRadius: 100, background: 'rgba(10,22,40,0.8)', color: 'white', fontSize: 11, fontWeight: 600, backdropFilter: 'blur(8px)' }}>
              {l.category}
            </span>
          </div>
          {l.verified && (
            <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 10px', borderRadius: 100, background: 'rgba(16,185,129,0.88)', color: 'white', fontSize: 11, fontWeight: 600 }}>
                <MdVerified size={12} /> Verified
              </span>
            </div>
          )}
          <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            <span style={{ padding: '4px 10px', borderRadius: 100, background: 'rgba(10,22,40,0.75)', color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: 600 }}>
              By {l.postedByRole}
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 22px 22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, color: isDark ? '#FFFFFF' : '#0A1628', lineHeight: 1.3, flex: 1 }}>{l.title}</h3>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 16, color: '#C9A84C', flexShrink: 0 }}>{l.price}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: isDark ? 'rgba(255,255,255,0.45)' : '#8A97B0', fontSize: 13, marginBottom: 14 }}>
            <FiMapPin size={12} style={{ color: '#C9A84C', flexShrink: 0 }} /> {l.location}
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 16, paddingTop: 14, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#F1F3F8'}`, flexWrap: 'wrap' }}>
            {l.bedrooms > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: isDark ? 'rgba(255,255,255,0.6)' : '#4A5568', fontSize: 13 }}>
                <IoBedOutline size={14} style={{ color: '#8A97B0' }} />{l.bedrooms} Bed
              </div>
            )}
            {l.bathrooms > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: isDark ? 'rgba(255,255,255,0.6)' : '#4A5568', fontSize: 13 }}>
                <IoWaterOutline size={14} style={{ color: '#8A97B0' }} />{l.bathrooms} Bath
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: isDark ? 'rgba(255,255,255,0.6)' : '#4A5568', fontSize: 13 }}>
              <IoExpandOutline size={13} style={{ color: '#8A97B0' }} />{l.area.toLocaleString()} {l.category === 'Plot' ? 'Sq Yd' : 'Sq Ft'}
            </div>
            {l.furnishing !== 'Unfurnished' && (
              <div style={{ fontSize: 11, padding: '2px 8px', borderRadius: 6, background: isDark ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.1)', color: '#C9A84C', fontWeight: 600 }}>
                {l.furnishing}
              </div>
            )}
          </div>

          {/* Amenities */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
            {l.amenities.slice(0, 3).map(a => (
              <span key={a} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: isDark ? 'rgba(255,255,255,0.06)' : '#F1F3F8', color: isDark ? 'rgba(255,255,255,0.55)' : '#4A5568', fontWeight: 500 }}>{a}</span>
            ))}
            {l.amenities.length > 3 && (
              <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: isDark ? 'rgba(255,255,255,0.06)' : '#F1F3F8', color: '#C9A84C', fontWeight: 600 }}>+{l.amenities.length - 3} more</span>
            )}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <button className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 13, padding: '11px 16px', borderRadius: 10 }}
              onClick={() => setShowContact(c => !c)}>
              <FiPhone size={13} /> {showContact ? 'Hide Contact' : 'Contact Now'}
            </button>
            <a href={`https://wa.me/${l.postedByPhone.replace(/\D/g, '')}?text=Hi, I'm interested in "${l.title}" listed on Surya Homes.`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg,#1ebe57,#25D366)', color: 'white', textDecoration: 'none', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>

          {/* Contact reveal */}
          <AnimatePresence>
            {showContact && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}>
                <div style={{ marginTop: 14, padding: '14px 16px', borderRadius: 12, background: isDark ? 'rgba(201,168,76,0.08)' : 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14, color: isDark ? '#fff' : '#0A1628', marginBottom: 4 }}>{l.postedBy} <span style={{ fontWeight: 500, color: '#C9A84C', fontSize: 12 }}>· {l.postedByRole}</span></div>
                  <a href={`tel:${l.postedByPhone}`} style={{ color: '#C9A84C', fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FiPhone size={14} /> {l.postedByPhone}
                  </a>
                  {l.reraId && <div style={{ marginTop: 6, fontSize: 11, color: isDark ? 'rgba(255,255,255,0.4)' : '#8A97B0' }}>RERA: {l.reraId}</div>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function MarketplaceSection({ isDark }: Props) {
  const [tab, setTab] = useState<ListingType>('Sale');
  const [category, setCategory] = useState<string>('All');
  const [city, setCity] = useState('All Cities');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [minBeds, setMinBeds] = useState(0);
  const [furnishing, setFurnishing] = useState('All');

  const cats = tab === 'Sale' ? SALE_CATEGORIES : RENT_CATEGORIES;

  const filtered = useMemo(() => {
    return marketplaceListings.filter(l => {
      if (l.listingType !== tab) return false;
      if (category !== 'All' && l.category !== category) return false;
      if (city !== 'All Cities' && l.city !== city) return false;
      if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (minBeds > 0 && l.bedrooms < minBeds) return false;
      if (furnishing !== 'All' && l.furnishing !== furnishing) return false;
      return true;
    });
  }, [tab, category, city, search, minBeds, furnishing]);

  const bg = isDark ? '#060e1c' : '#F8F9FC';
  const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'white';
  const textColor = isDark ? '#FFFFFF' : '#0A1628';
  const mutedColor = isDark ? 'rgba(255,255,255,0.45)' : '#8A97B0';

  return (
    <section id="marketplace" className="spa-section" style={{ padding: '100px 24px 80px', background: bg, transition: 'background 0.4s' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex' }}>✦ Property Marketplace</div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,4vw,44px)', color: textColor, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Buy, Sell &amp; <span className="text-gold-gradient">Rent Properties</span>
          </h2>
          <div className="gold-bar gold-bar-center" />
          <p style={{ color: mutedColor, fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Browse verified listings from owners, agents, and builders — all in one place.
          </p>
        </div>

        {/* Buy / Rent Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', background: isDark ? 'rgba(255,255,255,0.06)' : '#EAECF2', borderRadius: 14, padding: 4, gap: 4 }}>
            {(['Sale', 'Rent'] as ListingType[]).map(t => (
              <button key={t} onClick={() => { setTab(t); setCategory('All'); }}
                style={{ padding: '10px 36px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14, transition: 'all 0.25s',
                  background: tab === t ? 'linear-gradient(135deg,#A8872E,#C9A84C,#E4C46A)' : 'transparent',
                  color: tab === t ? '#0A1628' : mutedColor,
                  boxShadow: tab === t ? '0 4px 20px rgba(201,168,76,0.35)' : 'none' }}>
                {t === 'Sale' ? '🏠 Buy Property' : '🔑 Rent Property'}
              </button>
            ))}
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220, position: 'relative' }}>
            <FiSearch size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#8A97B0' }} />
            <input className="input-light" placeholder="Search by title or location…" value={search} onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 42, background: isDark ? 'rgba(255,255,255,0.07)' : 'white', color: isDark ? '#fff' : '#0A1628', borderColor: isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0' }} />
          </div>
          <select className="input-light" value={city} onChange={e => setCity(e.target.value)}
            style={{ minWidth: 160, background: isDark ? 'rgba(255,255,255,0.07)' : 'white', color: isDark ? '#fff' : '#0A1628', borderColor: isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0', cursor: 'pointer' }}>
            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button onClick={() => setShowFilters(f => !f)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.15)' : '#E2E6F0'}`, background: showFilters ? 'rgba(201,168,76,0.12)' : 'transparent', color: showFilters ? '#C9A84C' : mutedColor, cursor: 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, transition: 'all 0.2s' }}>
            <FiFilter size={15} /> Filters {showFilters ? <FiX size={13} /> : null}
          </button>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', marginBottom: 24 }}>
              <div style={{ padding: '20px 24px', borderRadius: 16, background: isDark ? 'rgba(255,255,255,0.04)' : 'white', border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E6F0'}`, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 12, color: mutedColor, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Min. Bedrooms</label>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {[0,1,2,3,4].map(n => (
                      <button key={n} onClick={() => setMinBeds(n)}
                        style={{ width: 36, height: 36, borderRadius: 8, border: `1.5px solid ${minBeds===n ? '#C9A84C' : (isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0')}`, background: minBeds===n ? 'rgba(201,168,76,0.15)' : 'transparent', color: minBeds===n ? '#C9A84C' : mutedColor, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                        {n === 0 ? 'Any' : n+'+'}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 12, color: mutedColor, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Furnishing</label>
                  <select className="input-light" value={furnishing} onChange={e => setFurnishing(e.target.value)}
                    style={{ minWidth: 180, background: isDark ? 'rgba(255,255,255,0.07)' : 'white', color: isDark ? '#fff' : '#0A1628', borderColor: isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0', padding: '9px 14px', cursor: 'pointer' }}>
                    <option value="All">All Furnishing Types</option>
                    <option>Fully Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                  </select>
                </div>
                <button onClick={() => { setMinBeds(0); setFurnishing('All'); setSearch(''); setCity('All Cities'); setCategory('All'); }}
                  style={{ padding: '9px 18px', borderRadius: 10, border: '1.5px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.08)', color: '#fc8181', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                  Reset All
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {['All', ...cats].map(c => (
            <button key={c} onClick={() => setCategory(c)}
              style={{ padding: '8px 20px', borderRadius: 100, border: '1.5px solid', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'all 0.22s',
                background: category === c ? 'linear-gradient(135deg,#A8872E,#C9A84C,#E4C46A)' : (isDark ? 'transparent' : 'white'),
                color: category === c ? '#0A1628' : mutedColor,
                borderColor: category === c ? 'transparent' : (isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0'),
                boxShadow: category === c ? '0 4px 16px rgba(201,168,76,0.3)' : 'none' }}>
              {c}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, color: mutedColor }}>
            Showing <span style={{ color: '#C9A84C' }}>{filtered.length}</span> {tab === 'Sale' ? 'properties for sale' : 'rental listings'}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 24px', color: mutedColor }}>
            <FiHome size={48} style={{ marginBottom: 16, opacity: 0.4 }} />
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 16 }}>No listings match your filters.</p>
            <p style={{ fontSize: 14, marginTop: 8 }}>Try adjusting your search or category.</p>
          </div>
        ) : (
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 28 }}>
            <AnimatePresence>
              {filtered.map(l => <ListingCard key={l.id} l={l} isDark={isDark} />)}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
