'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, MapPin, Home, DollarSign, BedDouble, ChevronDown } from 'lucide-react';
import { stats } from '@/lib/data';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const duration = 2200;
        const fps = 60;
        const steps = (duration / 1000) * fps;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (step >= steps) { setCount(target); clearInterval(timer); }
        }, 1000 / fps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{count.toLocaleString('en-IN')}{suffix}</div>;
}

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85',
    tag: "Greater Noida's #1 Real Estate Brand",
    headline: 'Find Your Perfect\nProperty in Greater Noida',
    sub: 'Flats, plots, villas & commercial spaces — verified, RERA registered, and ready to move.'
  },
  {
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85',
    tag: '500+ Premium Listings',
    headline: 'Luxury Villas &\nPremium Apartments',
    sub: 'Hand-curated luxury homes across Greater Noida, Noida, Ghaziabad and NCR.'
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85',
    tag: 'Award-Winning Construction',
    headline: 'Build Your Dream\nHome With Us',
    sub: 'Residential & commercial construction with 5-year warranty and on-time delivery.'
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number|null>(null);
  const [loc, setLoc] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [current]);

  const goTo = (i: number) => { setPrev(current); setCurrent(i); };

  const handleSearch = () => {
    const p = new URLSearchParams();
    if (loc) p.set('city', loc);
    if (type) p.set('type', type);
    if (budget) p.set('budget', budget);
    if (bhk) p.set('bhk', bhk);
    window.location.href = `/properties?${p.toString()}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{minHeight:'100svh'}}>
      {/* ── BACKGROUND IMAGES ── */}
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-all duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover"
            style={{filter:'brightness(0.45) saturate(1.1)'}} loading={i===0?'eager':'lazy'}/>
        </div>
      ))}
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10" style={{background:'linear-gradient(to bottom, rgba(10,20,40,0.3) 0%, rgba(10,20,40,0.1) 30%, rgba(10,20,40,0.5) 70%, rgba(10,20,40,0.9) 100%)'}}/>
      <div className="absolute inset-0 z-10" style={{background:'linear-gradient(to right, rgba(10,20,40,0.4) 0%, transparent 50%)'}}/>

      {/* ── CONTENT ── */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-5 pt-24 pb-40">
        {/* Slide badge */}
        <div key={`badge-${current}`} className="animate-fadeUp mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{background:'rgba(201,148,10,0.18)',color:'#E0A82E',border:'1px solid rgba(201,148,10,0.35)',backdropFilter:'blur(8px)'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
            {slides[current].tag}
          </div>
        </div>

        {/* Headline */}
        <h1 key={`h1-${current}`} className="animate-fadeUp font-serif font-extrabold text-white mb-5"
          style={{fontSize:'clamp(32px,6vw,72px)',lineHeight:1.1,letterSpacing:'-0.02em',animationDelay:'0.08s',
            textShadow:'0 2px 40px rgba(0,0,0,0.4)',whiteSpace:'pre-line',maxWidth:'900px'}}>
          {slides[current].headline.split('\n').map((line,i)=>(
            <span key={i}>{i===0?line:<><br/><span style={{color:'#E0A82E'}}>{line}</span></>}</span>
          ))}
        </h1>

        {/* Sub */}
        <p key={`sub-${current}`} className="animate-fadeUp text-white/70 mb-10 max-w-xl leading-relaxed"
          style={{fontSize:'clamp(14px,2vw,18px)',animationDelay:'0.16s'}}>
          {slides[current].sub}
        </p>

        {/* ── SEARCH BOX ── */}
        <div className="animate-fadeUp w-full max-w-4xl" style={{animationDelay:'0.22s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{background:'rgba(255,255,255,0.97)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,0.9)'}}>
            {/* Filters Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {[
                { icon: <MapPin className="w-4 h-4 text-amber-500"/>, label:'Location', el: (
                  <select value={loc} onChange={e=>setLoc(e.target.value)} className="w-full bg-transparent text-sm text-gray-700 outline-none cursor-pointer py-4 pr-3 appearance-none">
                    <option value="">All Locations</option>
                    {['Greater Noida','Noida','Ghaziabad','Delhi NCR','Lucknow','Agra'].map(c=><option key={c}>{c}</option>)}
                  </select>
                )},
                { icon: <Home className="w-4 h-4 text-amber-500"/>, label:'Type', el: (
                  <select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-transparent text-sm text-gray-700 outline-none cursor-pointer py-4 pr-3 appearance-none">
                    <option value="">Property Type</option>
                    {['Flat','Plot','Villa','Commercial'].map(t=><option key={t}>{t}</option>)}
                  </select>
                )},
                { icon: <DollarSign className="w-4 h-4 text-amber-500"/>, label:'Budget', el: (
                  <select value={budget} onChange={e=>setBudget(e.target.value)} className="w-full bg-transparent text-sm text-gray-700 outline-none cursor-pointer py-4 pr-3 appearance-none">
                    <option value="">Budget Range</option>
                    <option value="20-50">₹20L – ₹50L</option>
                    <option value="50-100">₹50L – ₹1Cr</option>
                    <option value="100-200">₹1Cr – ₹2Cr</option>
                    <option value="200+">₹2Cr+</option>
                  </select>
                )},
                { icon: <BedDouble className="w-4 h-4 text-amber-500"/>, label:'BHK', el: (
                  <select value={bhk} onChange={e=>setBhk(e.target.value)} className="w-full bg-transparent text-sm text-gray-700 outline-none cursor-pointer py-4 pr-3 appearance-none">
                    <option value="">BHK Type</option>
                    {['1','2','3','4'].map(b=><option key={b} value={b}>{b} BHK</option>)}
                  </select>
                )},
              ].map((f,i)=>(
                <div key={i} className="flex items-center gap-3 px-5 py-1" style={{borderRight:i<3?'1px solid #F0F0F0':'none',borderBottom:'1px solid #F0F0F0'}}>
                  {f.icon}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-400 mb-0.5 uppercase tracking-wider">{f.label}</div>
                    {f.el}
                  </div>
                </div>
              ))}
            </div>
            {/* Search button */}
            <button onClick={handleSearch}
              className="w-full flex items-center justify-center gap-3 py-4 font-bold text-white text-base transition-all hover:opacity-95 active:scale-99"
              style={{background:'linear-gradient(135deg,#1A2E4A 0%,#243d62 100%)'}}>
              <Search className="w-5 h-5"/>
              Search Properties
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="animate-fadeUp flex flex-wrap gap-3 justify-center mt-7" style={{animationDelay:'0.3s'}}>
          {['Ready to Move','Under ₹50L','3 BHK Flats','Land & Plots','Commercial Spaces'].map(q=>(
            <button key={q} onClick={()=>window.location.href='/properties'}
              className="text-xs px-4 py-2 rounded-full font-semibold transition-all hover:-translate-y-0.5"
              style={{background:'rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.9)',border:'1px solid rgba(255,255,255,0.2)',backdropFilter:'blur(8px)'}}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE DOTS ── */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_,i)=>(
          <button key={i} onClick={()=>goTo(i)} className="transition-all duration-300 rounded-full"
            style={{width:i===current?'28px':'8px',height:'8px',background:i===current?'#C9940A':'rgba(255,255,255,0.4)'}}/>
        ))}
      </div>

      {/* ── STATS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{background:'rgba(255,255,255,0.06)'}}>
          {stats.map((s,i)=>(
            <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 px-6 py-6"
              style={{background: i%2===0?'rgba(10,22,42,0.94)':'rgba(15,28,46,0.94)',backdropFilter:'blur(16px)',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
              <div className="text-3xl sm:text-2xl lg:text-3xl">{s.icon}</div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold font-serif" style={{color:'#E0A82E'}}>
                  <AnimatedCounter target={s.value} suffix={s.suffix}/>
                </div>
                <div className="text-xs text-white/50 font-medium mt-0.5 tracking-wide">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
