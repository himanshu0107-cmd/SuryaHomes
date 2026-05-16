'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiPhone, FiEye, FiEyeOff, FiAlertCircle, FiCheck } from 'react-icons/fi';

interface Props {
  onRegister: () => void;
  onBackToLogin: () => void;
}

export default function RegisterSection({ onRegister, onBackToLogin }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) return setError('Password must be at least 6 characters.');
    if (form.password !== form.confirm) return setError('Passwords do not match.');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => onRegister(), 1800);
    }, 1200);
  };

  return (
    <div className="login-bg">
      {/* Orbs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(201,168,76,0.09) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-8%', left: '-4%', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(26,51,88,0.6) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <motion.div className="login-card"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '480px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '6px' }}>
            <span
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '14px',
                padding: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/Logo_1-transparent.png"
                alt="Surya Homes logo"
                width={40}
                height={40}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </span>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: 'white', fontSize: '22px', lineHeight: 1 }}>
              Surya Homes
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: "'Poppins',sans-serif", marginTop: '8px' }}>
            Create your free account to get started
          </p>
        </div>

        {success ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '32px 16px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <FiCheck size={32} style={{ color: '#10B981' }} />
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '8px' }}>
              Account Created! 🎉
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
              Welcome to Surya Homes. Signing you in...
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '7px', fontFamily: "'Poppins',sans-serif" }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <FiUser style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={15} />
                <input type="text" required value={form.name} onChange={update('name')}
                  className="input-spa" style={{ paddingLeft: '44px' }} placeholder="Himanshu Pandey" />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '7px', fontFamily: "'Poppins',sans-serif" }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <FiMail style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={15} />
                <input type="email" required value={form.email} onChange={update('email')}
                  className="input-spa" style={{ paddingLeft: '44px' }} placeholder="your@email.com" />
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '7px', fontFamily: "'Poppins',sans-serif" }}>
                Phone Number
              </label>
              <div style={{ position: 'relative' }}>
                <FiPhone style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={15} />
                <input type="tel" required value={form.phone} onChange={update('phone')}
                  className="input-spa" style={{ paddingLeft: '44px' }} placeholder="+91 98765 43210" />
              </div>
            </div>

            {/* Password row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '7px', fontFamily: "'Poppins',sans-serif" }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <FiLock style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={14} />
                  <input type={showPw ? 'text' : 'password'} required value={form.password} onChange={update('password')}
                    className="input-spa" style={{ paddingLeft: '38px', paddingRight: '38px' }} placeholder="Min. 6 chars" />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', display: 'flex' }}>
                    {showPw ? <FiEyeOff size={14} /> : <FiEye size={14} />}
                  </button>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '7px', fontFamily: "'Poppins',sans-serif" }}>
                  Confirm
                </label>
                <div style={{ position: 'relative' }}>
                  <FiLock style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.7)' }} size={14} />
                  <input type={showCpw ? 'text' : 'password'} required value={form.confirm} onChange={update('confirm')}
                    className="input-spa" style={{ paddingLeft: '38px', paddingRight: '38px' }} placeholder="Repeat" />
                  <button type="button" onClick={() => setShowCpw(!showCpw)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', display: 'flex' }}>
                    {showCpw ? <FiEyeOff size={14} /> : <FiEye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password strength */}
            {form.password && (
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4].map(lvl => {
                    const strength = form.password.length >= 12 ? 4 : form.password.length >= 8 ? 3 : form.password.length >= 6 ? 2 : 1;
                    return (
                      <div key={lvl} style={{ flex: 1, height: '3px', borderRadius: '2px', background: lvl <= strength ? (strength <= 1 ? '#ef4444' : strength <= 2 ? '#f59e0b' : strength <= 3 ? '#3b82f6' : '#10b981') : 'rgba(255,255,255,0.1)', transition: 'all 0.3s' }} />
                    );
                  })}
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: "'Poppins',sans-serif" }}>
                  {form.password.length < 6 ? 'Too short' : form.password.length < 8 ? 'Weak' : form.password.length < 12 ? 'Good' : 'Strong'}
                </div>
              </div>
            )}

            {error && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', marginBottom: '14px', color: '#fc8181', fontSize: '13px', fontFamily: "'Poppins',sans-serif" }}>
                <FiAlertCircle size={14} /> {error}
              </motion.div>
            )}

            <button type="submit" disabled={loading} className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '15px', borderRadius: '10px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Creating Account...' : 'Create Account →'}
            </button>

            {/* Terms */}
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '14px', fontFamily: "'Poppins',sans-serif", lineHeight: 1.6 }}>
              By registering, you agree to our{' '}
              <span style={{ color: 'rgba(201,168,76,0.7)', cursor: 'pointer' }}>Terms of Service</span> and{' '}
              <span style={{ color: 'rgba(201,168,76,0.7)', cursor: 'pointer' }}>Privacy Policy</span>.
            </p>
          </form>
        )}

        {/* Switch to Login */}
        {!success && (
          <div style={{ marginTop: '20px', textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: "'Poppins',sans-serif" }}>
              Already have an account?{' '}
            </span>
            <button onClick={onBackToLogin}
              style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Poppins',sans-serif" }}>
              Sign In
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
