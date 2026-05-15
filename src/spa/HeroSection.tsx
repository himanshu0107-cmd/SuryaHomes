'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiHome, FiDollarSign, FiSearch, FiChevronDown } from 'react-icons/fi';

interface Props { onExplore: () => void; }

const heroSlides = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85',
];

export default function HeroSection({ onExplore }: Props) {
  const [location, setLocation] = useState('');
  const [propType, setPropType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => onExplore();

  return (
    <section id="home" className="hero-section spa-section">
      {/* Background */}
      <div className="hero-bg" style={{backgroundImage:`url('${heroSlides[0]}')`}}/>

      {/* Multi-layer overlay */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(10,22,40,0.35) 0%,rgba(10,22,40,0.2) 30%,rgba(10,22,40,0.65) 75%,rgba(10,22,40,0.95) 100%)'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,rgba(10,22,40,0.5) 0%,transparent 55%)'}}/>

      {/* Content */}
      <div style={{position:'relative',zIndex:10,width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 24px',paddingTop:'72px'}}>

        {/* Badge */}
        <motion.div
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
          style={{marginBottom:'24px'}}>
          <div className="section-pill" style={{fontSize:'11px'}}>
            <span style={{width:'6px',height:'6px',background:'#C9A84C',borderRadius:'50%',animation:'pulse 2s infinite'}}/>
            Greater Noida&apos;s #1 Trusted Real Estate
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.18,ease:[0.16,1,0.3,1]}}
          style={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:800,
            fontSize:'clamp(36px,6.5vw,76px)',
            lineHeight:1.08,
            color:'white',
            letterSpacing:'-0.02em',
            maxWidth:'720px',
            marginBottom:'20px',
          }}>
          Find Your<br/>
          <span className="text-gold-gradient">Dream Home</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.26}}
          style={{
            color:'rgba(255,255,255,0.7)',
            fontSize:'clamp(14px,2vw,18px)',
            fontWeight:400,
            maxWidth:'520px',
            lineHeight:1.75,
            marginBottom:'48px',
          }}>
          500+ verified properties in Greater Noida, Noida, and NCR. RERA registered. Transparent pricing. No brokerage.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{opacity:0,y:36,scale:0.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:0.7,delay:0.34,ease:[0.16,1,0.3,1]}}
          style={{
            background:'rgba(255,255,255,0.96)',
            backdropFilter:'blur(20px)',
            borderRadius:'18px',
            padding:'6px',
            maxWidth:'860px',
            boxShadow:'0 32px 80px rgba(0,0,0,0.35)',
            display:'flex',
            flexWrap:'wrap',
            gap:'4px',
          }}>

          {/* Location */}
          <div style={{flex:'1',minWidth:'160px',position:'relative',display:'flex',alignItems:'center',padding:'10px 16px',borderRight:'1px solid #EEF0F5'}}>
            <FiMapPin style={{color:'#C9A84C',flexShrink:0,marginRight:'10px'}} size={16}/>
            <div style={{flex:1}}>
              <div style={{fontSize:'10px',fontWeight:700,color:'#8A97B0',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'3px'}}>Location</div>
              <select value={location} onChange={e=>setLocation(e.target.value)}
                style={{width:'100%',border:'none',outline:'none',fontSize:'13px',fontWeight:600,color:'#0A1628',background:'transparent',cursor:'pointer',appearance:'none',fontFamily:"'Poppins',sans-serif"}}>
                <option value="">All Cities</option>
                <option>Greater Noida</option>
                <option>Noida</option>
                <option>Ghaziabad</option>
                <option>Delhi NCR</option>
              </select>
            </div>
          </div>

          {/* Type */}
          <div style={{flex:'1',minWidth:'150px',position:'relative',display:'flex',alignItems:'center',padding:'10px 16px',borderRight:'1px solid #EEF0F5'}}>
            <FiHome style={{color:'#C9A84C',flexShrink:0,marginRight:'10px'}} size={16}/>
            <div style={{flex:1}}>
              <div style={{fontSize:'10px',fontWeight:700,color:'#8A97B0',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'3px'}}>Property Type</div>
              <select value={propType} onChange={e=>setPropType(e.target.value)}
                style={{width:'100%',border:'none',outline:'none',fontSize:'13px',fontWeight:600,color:'#0A1628',background:'transparent',cursor:'pointer',appearance:'none',fontFamily:"'Poppins',sans-serif"}}>
                <option value="">All Types</option>
                <option>Flat</option>
                <option>Plot</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div style={{flex:'1',minWidth:'150px',display:'flex',alignItems:'center',padding:'10px 16px'}}>
            <FiDollarSign style={{color:'#C9A84C',flexShrink:0,marginRight:'10px'}} size={16}/>
            <div style={{flex:1}}>
              <div style={{fontSize:'10px',fontWeight:700,color:'#8A97B0',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'3px'}}>Budget</div>
              <select value={budget} onChange={e=>setBudget(e.target.value)}
                style={{width:'100%',border:'none',outline:'none',fontSize:'13px',fontWeight:600,color:'#0A1628',background:'transparent',cursor:'pointer',appearance:'none',fontFamily:"'Poppins',sans-serif"}}>
                <option value="">Any Budget</option>
                <option>Under ₹50 L</option>
                <option>₹50L – ₹1Cr</option>
                <option>₹1Cr – ₹2Cr</option>
                <option>₹2Cr+</option>
              </select>
            </div>
          </div>

          {/* Search CTA */}
          <button onClick={handleSearch} className="btn-primary"
            style={{borderRadius:'13px',padding:'14px 28px',flexShrink:0,gap:'8px'}}>
            <FiSearch size={16}/>
            Search
          </button>
        </motion.div>

        {/* Quick tags */}
        <motion.div
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:0.6}}
          style={{display:'flex',flexWrap:'wrap',gap:'10px',marginTop:'24px'}}>
          {['Ready to Move','Under ₹50L','3 BHK Flats','Corner Plots','Luxury Villas'].map(tag => (
            <button key={tag} onClick={onExplore}
              style={{padding:'7px 16px',borderRadius:'100px',background:'rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.8)',border:'1px solid rgba(255,255,255,0.2)',fontSize:'12px',fontWeight:500,cursor:'pointer',backdropFilter:'blur(8px)',fontFamily:"'Poppins',sans-serif",transition:'all 0.2s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(201,168,76,0.2)';(e.currentTarget as HTMLElement).style.borderColor='rgba(201,168,76,0.5)';(e.currentTarget as HTMLElement).style.color='#C9A84C';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.1)';(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.2)';(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.8)';}}>
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Explore CTA */}
        <motion.div
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.56,duration:0.6}}
          style={{marginTop:'48px',display:'flex',gap:'16px',alignItems:'center',flexWrap:'wrap'}}>
          <button onClick={onExplore} className="btn-primary" style={{padding:'16px 36px',fontSize:'15px',borderRadius:'12px'}}>
            Explore Properties
          </button>
          <a href="#about" style={{display:'flex',alignItems:'center',gap:'8px',color:'rgba(255,255,255,0.65)',fontSize:'14px',fontWeight:500,textDecoration:'none',transition:'color 0.2s'}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color='#C9A84C';}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.65)';}}>
            Why Surya Homes? <FiChevronDown size={16}/>
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',maxWidth:'900px',margin:'0 auto'}}>
          {[
            {n:'500+',l:'Properties'},
            {n:'1,000+',l:'Happy Clients'},
            {n:'15+',l:'Years Experience'},
            {n:'6',l:'Cities Covered'},
          ].map((s,i)=>(
            <motion.div key={i}
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6+i*0.08}}
              style={{
                textAlign:'center',padding:'20px 16px',
                background:i%2===0?'rgba(10,22,40,0.92)':'rgba(15,30,56,0.92)',
                backdropFilter:'blur(12px)',
                borderTop:'1px solid rgba(255,255,255,0.06)',
              }}>
              <div style={{fontFamily:"'Poppins',sans-serif",fontWeight:800,fontSize:'26px',color:'#C9A84C',lineHeight:1}}>{s.n}</div>
              <div style={{fontFamily:"'Poppins',sans-serif",fontSize:'11px',color:'rgba(255,255,255,0.5)',fontWeight:500,marginTop:'4px',textTransform:'uppercase',letterSpacing:'0.08em'}}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
    </section>
  );
}
