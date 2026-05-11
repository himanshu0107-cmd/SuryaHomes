'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';

interface Props {
  onLogin: () => void;
  onGoToRegister: () => void;
}

export default function LoginSection({ onLogin, onGoToRegister }: Props) {
  const [email, setEmail] = useState('admin@suryahomes.in');
  const [password, setPassword] = useState('admin123');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (email === 'admin@suryahomes.in' && password === 'admin123') {
        onLogin();
      } else {
        setError('Invalid credentials. Use admin@suryahomes.in / admin123');
        setLoading(false);
      }
    }, 900);
  };

  return (
    <div className="login-bg">
      {/* Decorative orbs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(201,168,76,0.09) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-8%', left: '-4%', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(26,51,88,0.6) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="12" fill="#C9A84C" fillOpacity="0.15" />
              <circle cx="22" cy="22" r="10" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="22" y1="4" x2="22" y2="10" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="34" x2="22" y2="40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="22" x2="10" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              <line x1="34" y1="22" x2="40" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 13 L30 19 L30 28 L14 28 L14 19 Z" fill="#0A1628" />
              <path d="M12 20 L22 12 L32 20" fill="none" stroke="#C9A84C" strokeWidth="2.2" strokeLinejoin="round" />
              <rect x="19" y="21" width="6" height="7" rx="1" fill="#C9A84C" />
            </svg>
            <div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: 'white', fontSize: '22px', lineHeight: 1 }}>Surya Homes</div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, color: 'rgba(201,168,76,0.85)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px' }}>Your Dream, Our Foundation</div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: '16px', fontFamily: "'Poppins',sans-serif" }}>
            Sign in to explore 500+ verified listings
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '8px', textTransform: 'uppercase', fontFamily: "'Poppins',sans-serif" }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <FiMail style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={16} />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                className="input-spa" style={{ paddingLeft: '44px' }} placeholder="admin@suryahomes.in" />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '8px', textTransform: 'uppercase', fontFamily: "'Poppins',sans-serif" }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <FiLock style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={16} />
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                className="input-spa" style={{ paddingLeft: '44px', paddingRight: '44px' }} placeholder="••••••••" />
              <button type="button" onClick={() => setShowPw(!showPw)}
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
                {showPw ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', marginBottom: '16px', color: '#fc8181', fontSize: '13px', fontFamily: "'Poppins',sans-serif" }}>
              <FiAlertCircle size={14} /> {error}
            </motion.div>
          )}

          {/* Submit */}
          <button type="submit" disabled={loading} className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '15px', opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto', borderRadius: '12px' }}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ animation: 'spin 1s linear infinite' }}>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Signing in...
              </span>
            ) : 'Sign In →'}
          </button>
        </form>

        {/* Demo hint */}
        <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(201,168,76,0.8)', fontSize: '12px', fontFamily: "'Poppins',sans-serif" }}>
            Demo: <strong>admin@suryahomes.in</strong> / <strong>admin123</strong>
          </p>
        </div>

        {/* ── Register Link ── */}
        <div style={{ marginTop: '20px', textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: "'Poppins',sans-serif" }}>
            Don&apos;t have an account?{' '}
          </span>
          <button onClick={onGoToRegister}
            style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Poppins',sans-serif", textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Create Account
          </button>
        </div>
      </motion.div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
