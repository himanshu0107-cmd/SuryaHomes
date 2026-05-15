'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiArrowRight, FiArrowLeft, FiUpload } from 'react-icons/fi';

interface Props { isDark: boolean; }

const STEPS = ['Listing Type', 'Property Details', 'Features', 'Contact Info', 'Review'];
const CATEGORIES = ['Flat', 'Villa', 'Plot', 'Row House', 'Studio', 'Commercial', 'PG / Hostel'];
const CITIES = ['Noida', 'Greater Noida', 'Ghaziabad', 'Delhi', 'Gurugram', 'Faridabad'];
const AMENITY_OPTIONS = ['Swimming Pool','Gym','Car Parking','24/7 Security','Power Backup','Club House','Children Play Area','CCTV','Intercom','Lift','Wi-Fi','Garden','Servant Room','Modular Kitchen','Terrace','Solar Panels','Fire Safety','Rainwater Harvesting'];

const Field = ({ label, children, isDark }: { label: string; children: React.ReactNode; isDark: boolean }) => (
  <div>
    <label style={{ display: 'block', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 12, color: isDark ? 'rgba(255,255,255,0.55)' : '#8A97B0', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>
    {children}
  </div>
);

const inputStyle = (isDark: boolean): React.CSSProperties => ({
  width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.12)' : '#E2E6F0'}`,
  background: isDark ? 'rgba(255,255,255,0.07)' : 'white', color: isDark ? '#fff' : '#0A1628',
  fontFamily: "'Poppins',sans-serif", fontSize: 14, outline: 'none',
});

export default function ListPropertySection({ isDark }: Props) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    listingType: 'Sale', category: 'Flat', city: '', location: '', price: '', priceUnit: '₹ Lakhs',
    area: '', areaUnit: 'Sq Ft', bedrooms: '2', bathrooms: '2', furnishing: 'Semi Furnished',
    possession: 'Ready to Move', facing: 'East', floor: '', totalFloors: '', parking: true,
    description: '', amenities: [] as string[],
    postedByName: '', postedByPhone: '', postedByEmail: '', postedByRole: 'Owner', reraId: '', agreeToTerms: false,
  });

  const set = (k: string, v: unknown) => setForm(f => ({ ...f, [k]: v }));
  const toggleAmenity = (a: string) => set('amenities', form.amenities.includes(a) ? form.amenities.filter(x => x !== a) : [...form.amenities, a]);

  const bg = isDark ? '#070f1e' : '#F8F9FC';
  const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'white';
  const textColor = isDark ? '#FFFFFF' : '#0A1628';
  const mutedColor = isDark ? 'rgba(255,255,255,0.45)' : '#8A97B0';
  const border = isDark ? 'rgba(255,255,255,0.08)' : '#E2E6F0';

  if (submitted) return (
    <section id="list-property" className="spa-section" style={{ padding: '100px 24px', background: bg, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#34d399)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <FiCheck size={36} color="white" />
        </div>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 28, color: textColor, marginBottom: 12 }}>Listing Submitted!</h2>
        <p style={{ color: mutedColor, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
          Your property has been submitted successfully. Our team will review and publish it within <strong style={{ color: '#C9A84C' }}>24–48 hours</strong>. You'll receive a confirmation on your registered phone/email.
        </p>
        <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(0); setForm(f => ({ ...f, city: '', location: '', price: '', area: '', description: '', postedByName: '', postedByPhone: '', postedByEmail: '', reraId: '', agreeToTerms: false, amenities: [] })); }}>
          List Another Property <FiArrowRight size={14} />
        </button>
      </motion.div>
    </section>
  );

  return (
    <section id="list-property" className="spa-section" style={{ padding: '100px 24px 80px', background: bg, transition: 'background 0.4s' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-pill" style={{ justifyContent: 'center', display: 'inline-flex' }}>✦ Free Listing</div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,4vw,42px)', color: textColor, lineHeight: 1.15, margin: '0 0 12px' }}>
            List Your <span className="text-gold-gradient">Property</span>
          </h2>
          <div className="gold-bar gold-bar-center" />
          <p style={{ color: mutedColor, fontSize: 15, maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            Sell or rent your flat, villa, or plot — reach thousands of verified buyers &amp; tenants for free.
          </p>
        </div>

        {/* Stepper */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 48, overflowX: 'auto' }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 13, transition: 'all 0.3s',
                  background: i < step ? 'linear-gradient(135deg,#A8872E,#C9A84C)' : i === step ? 'linear-gradient(135deg,#A8872E,#C9A84C)' : (isDark ? 'rgba(255,255,255,0.08)' : '#F1F3F8'),
                  color: i <= step ? '#0A1628' : mutedColor, boxShadow: i === step ? '0 4px 16px rgba(201,168,76,0.4)' : 'none' }}>
                  {i < step ? <FiCheck size={16} /> : i + 1}
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, color: i <= step ? '#C9A84C' : mutedColor, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div style={{ width: 60, height: 2, background: i < step ? 'linear-gradient(90deg,#A8872E,#C9A84C)' : border, transition: 'background 0.4s', margin: '0 4px', marginBottom: 22 }} />}
            </div>
          ))}
        </div>

        {/* Card */}
        <div style={{ background: cardBg, borderRadius: 24, border: `1px solid ${border}`, padding: '40px 36px', boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 40px rgba(10,22,40,0.08)' }}>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.32 }}>

              {/* ── Step 0: Listing Type ── */}
              {step === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: textColor, margin: 0 }}>What do you want to do?</h3>
                  <div style={{ display: 'flex', gap: 16 }}>
                    {['Sale', 'Rent'].map(t => (
                      <button key={t} onClick={() => set('listingType', t)}
                        style={{ flex: 1, padding: '24px 16px', borderRadius: 16, border: `2px solid ${form.listingType === t ? '#C9A84C' : border}`, background: form.listingType === t ? 'rgba(201,168,76,0.1)' : 'transparent', cursor: 'pointer', transition: 'all 0.25s' }}>
                        <div style={{ fontSize: 32, marginBottom: 8 }}>{t === 'Sale' ? '🏠' : '🔑'}</div>
                        <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 16, color: form.listingType === t ? '#C9A84C' : textColor }}>
                          {t === 'Sale' ? 'Sell Property' : 'Rent Out Property'}
                        </div>
                        <div style={{ fontSize: 13, color: mutedColor, marginTop: 4 }}>
                          {t === 'Sale' ? 'List for outright sale to buyers' : 'List for monthly rental to tenants'}
                        </div>
                      </button>
                    ))}
                  </div>
                  <Field label="Property Category" isDark={isDark}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {CATEGORIES.map(c => (
                        <button key={c} onClick={() => set('category', c)}
                          style={{ padding: '8px 18px', borderRadius: 100, border: `1.5px solid ${form.category === c ? '#C9A84C' : border}`, background: form.category === c ? 'rgba(201,168,76,0.12)' : 'transparent', color: form.category === c ? '#C9A84C' : mutedColor, cursor: 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, transition: 'all 0.2s' }}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>
              )}

              {/* ── Step 1: Property Details ── */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: textColor, margin: 0 }}>Property Details</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                    <Field label="City" isDark={isDark}>
                      <select style={inputStyle(isDark)} value={form.city} onChange={e => set('city', e.target.value)}>
                        <option value="">Select City</option>
                        {CITIES.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </Field>
                    <Field label="Locality / Society" isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="e.g. Sector 150, Noida" value={form.location} onChange={e => set('location', e.target.value)} />
                    </Field>
                    <Field label="Price" isDark={isDark}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <input style={{ ...inputStyle(isDark), flex: 1 }} placeholder="e.g. 75" value={form.price} onChange={e => set('price', e.target.value)} />
                        <select style={{ ...inputStyle(isDark), width: 130 }} value={form.priceUnit} onChange={e => set('priceUnit', e.target.value)}>
                          <option>₹ Lakhs</option>
                          <option>₹ Crores</option>
                          {form.listingType === 'Rent' && <option>₹/Month</option>}
                        </select>
                      </div>
                    </Field>
                    <Field label={`Area (${form.areaUnit})`} isDark={isDark}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <input style={{ ...inputStyle(isDark), flex: 1 }} placeholder="e.g. 1200" value={form.area} onChange={e => set('area', e.target.value)} />
                        <select style={{ ...inputStyle(isDark), width: 110 }} value={form.areaUnit} onChange={e => set('areaUnit', e.target.value)}>
                          <option>Sq Ft</option>
                          <option>Sq Yd</option>
                          <option>Sq M</option>
                        </select>
                      </div>
                    </Field>
                    {form.category !== 'Plot' && <>
                      <Field label="Bedrooms" isDark={isDark}>
                        <select style={inputStyle(isDark)} value={form.bedrooms} onChange={e => set('bedrooms', e.target.value)}>
                          {['1','2','3','4','5','5+'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </Field>
                      <Field label="Bathrooms" isDark={isDark}>
                        <select style={inputStyle(isDark)} value={form.bathrooms} onChange={e => set('bathrooms', e.target.value)}>
                          {['1','2','3','4','4+'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </Field>
                      <Field label="Furnishing Status" isDark={isDark}>
                        <select style={inputStyle(isDark)} value={form.furnishing} onChange={e => set('furnishing', e.target.value)}>
                          <option>Fully Furnished</option>
                          <option>Semi Furnished</option>
                          <option>Unfurnished</option>
                        </select>
                      </Field>
                    </>}
                    <Field label="Possession Status" isDark={isDark}>
                      <select style={inputStyle(isDark)} value={form.possession} onChange={e => set('possession', e.target.value)}>
                        <option>Ready to Move</option>
                        <option>Under Construction</option>
                        <option>New Launch</option>
                      </select>
                    </Field>
                    <Field label="Facing Direction" isDark={isDark}>
                      <select style={inputStyle(isDark)} value={form.facing} onChange={e => set('facing', e.target.value)}>
                        {['East','West','North','South','North-East','North-West','South-East','South-West'].map(d => <option key={d}>{d}</option>)}
                      </select>
                    </Field>
                    <Field label="Floor No." isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="e.g. 5th of 12" value={form.floor} onChange={e => set('floor', e.target.value)} />
                    </Field>
                  </div>
                  <Field label="Car Parking" isDark={isDark}>
                    <div style={{ display: 'flex', gap: 12 }}>
                      {[true, false].map(v => (
                        <button key={String(v)} onClick={() => set('parking', v)}
                          style={{ padding: '9px 24px', borderRadius: 10, border: `1.5px solid ${form.parking === v ? '#C9A84C' : border}`, background: form.parking === v ? 'rgba(201,168,76,0.12)' : 'transparent', color: form.parking === v ? '#C9A84C' : mutedColor, cursor: 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13 }}>
                          {v ? 'Yes' : 'No'}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>
              )}

              {/* ── Step 2: Features ── */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: textColor, margin: 0 }}>Features &amp; Description</h3>
                  <Field label="Amenities (select all that apply)" isDark={isDark}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                      {AMENITY_OPTIONS.map(a => (
                        <button key={a} onClick={() => toggleAmenity(a)}
                          style={{ padding: '7px 16px', borderRadius: 100, border: `1.5px solid ${form.amenities.includes(a) ? '#C9A84C' : border}`, background: form.amenities.includes(a) ? 'rgba(201,168,76,0.12)' : 'transparent', color: form.amenities.includes(a) ? '#C9A84C' : mutedColor, cursor: 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 12, transition: 'all 0.18s', display: 'flex', alignItems: 'center', gap: 5 }}>
                          {form.amenities.includes(a) && <FiCheck size={11} />}{a}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Property Description" isDark={isDark}>
                    <textarea rows={5} style={{ ...inputStyle(isDark), resize: 'vertical', lineHeight: 1.7 }} placeholder="Describe your property — key highlights, nearby landmarks, special features…" value={form.description} onChange={e => set('description', e.target.value)} />
                  </Field>
                  <div style={{ padding: '20px 24px', borderRadius: 14, border: `2px dashed ${border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = border)}>
                    <FiUpload size={28} style={{ color: '#C9A84C' }} />
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, color: textColor }}>Upload Property Photos</div>
                    <div style={{ fontSize: 12, color: mutedColor }}>Drag &amp; drop or click to browse (JPG, PNG — max 10 photos)</div>
                    <button className="btn-secondary" style={{ fontSize: 12, padding: '8px 20px' }}>Browse Files</button>
                  </div>
                </div>
              )}

              {/* ── Step 3: Contact Info ── */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: textColor, margin: 0 }}>Your Contact Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                    <Field label="Full Name" isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="Your full name" value={form.postedByName} onChange={e => set('postedByName', e.target.value)} />
                    </Field>
                    <Field label="Phone Number" isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="+91 XXXXX XXXXX" value={form.postedByPhone} onChange={e => set('postedByPhone', e.target.value)} />
                    </Field>
                    <Field label="Email Address" isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="you@example.com" value={form.postedByEmail} onChange={e => set('postedByEmail', e.target.value)} />
                    </Field>
                    <Field label="You Are A" isDark={isDark}>
                      <select style={inputStyle(isDark)} value={form.postedByRole} onChange={e => set('postedByRole', e.target.value)}>
                        <option>Owner</option>
                        <option>Agent</option>
                        <option>Builder</option>
                      </select>
                    </Field>
                    <Field label="RERA ID (optional)" isDark={isDark}>
                      <input style={inputStyle(isDark)} placeholder="e.g. UPRERAPRJ-XXXXXX" value={form.reraId} onChange={e => set('reraId', e.target.value)} />
                    </Field>
                  </div>
                  <div style={{ padding: '16px 20px', borderRadius: 12, background: isDark ? 'rgba(201,168,76,0.07)' : 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 13, color: '#C9A84C', marginBottom: 4 }}>🔒 Your Privacy is Protected</div>
                    <div style={{ fontSize: 12, color: mutedColor, lineHeight: 1.65 }}>Your phone number will only be shared with interested buyers/tenants after you review their inquiry. We do not sell your data to third parties.</div>
                  </div>
                </div>
              )}

              {/* ── Step 4: Review ── */}
              {step === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: textColor, margin: 0 }}>Review Your Listing</h3>
                  {[
                    ['Listing Type', `${form.listingType} · ${form.category}`],
                    ['Location', `${form.location}${form.city ? ', ' + form.city : ''}`],
                    ['Price', `${form.price} ${form.priceUnit}`],
                    ['Area', `${form.area} ${form.areaUnit}`],
                    ['Configuration', form.category !== 'Plot' ? `${form.bedrooms} BHK · ${form.bathrooms} Bath · ${form.furnishing}` : 'N/A'],
                    ['Possession', form.possession],
                    ['Facing', form.facing],
                    ['Parking', form.parking ? 'Yes' : 'No'],
                    ['Amenities', form.amenities.length > 0 ? form.amenities.join(', ') : 'None selected'],
                    ['Posted By', `${form.postedByName} (${form.postedByRole})`],
                    ['Contact', `${form.postedByPhone} · ${form.postedByEmail}`],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: 16, padding: '12px 0', borderBottom: `1px solid ${border}` }}>
                      <div style={{ minWidth: 130, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, color: mutedColor }}>{k}</div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: textColor, flex: 1 }}>{v}</div>
                    </div>
                  ))}
                  {form.description && (
                    <div style={{ padding: '12px 0', borderBottom: `1px solid ${border}` }}>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, color: mutedColor, marginBottom: 6 }}>Description</div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: textColor, lineHeight: 1.65 }}>{form.description}</div>
                    </div>
                  )}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginTop: 8 }}>
                    <input type="checkbox" checked={form.agreeToTerms} onChange={e => set('agreeToTerms', e.target.checked)}
                      style={{ marginTop: 2, accentColor: '#C9A84C', width: 16, height: 16, cursor: 'pointer' }} />
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: mutedColor, lineHeight: 1.6 }}>
                      I confirm that the information provided is accurate and I agree to the <span style={{ color: '#C9A84C', fontWeight: 600 }}>Terms & Conditions</span> and <span style={{ color: '#C9A84C', fontWeight: 600 }}>Privacy Policy</span> of Surya Homes.
                    </span>
                  </label>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36, gap: 12 }}>
            <button onClick={() => setStep(s => s - 1)} disabled={step === 0}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 10, border: `1.5px solid ${border}`, background: 'transparent', color: step === 0 ? (isDark ? 'rgba(255,255,255,0.2)' : '#C5CAD5') : mutedColor, cursor: step === 0 ? 'not-allowed' : 'pointer', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14 }}>
              <FiArrowLeft size={15} /> Back
            </button>
            {step < STEPS.length - 1 ? (
              <button className="btn-primary" onClick={() => setStep(s => s + 1)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                Continue <FiArrowRight size={14} />
              </button>
            ) : (
              <button className="btn-primary" disabled={!form.agreeToTerms}
                onClick={() => form.agreeToTerms && setSubmitted(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: form.agreeToTerms ? 1 : 0.5, cursor: form.agreeToTerms ? 'pointer' : 'not-allowed' }}>
                <FiCheck size={14} /> Submit Listing
              </button>
            )}
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          {[['🔒', 'Secure & Private'], ['✅', 'Free Listing'], ['⚡', 'Published in 24–48 hrs'], ['📞', 'Dedicated Support']].map(([icon, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 500, color: mutedColor }}>
              <span style={{ fontSize: 16 }}>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
