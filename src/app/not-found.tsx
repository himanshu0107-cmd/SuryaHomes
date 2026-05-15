export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(145deg, #060e1c 0%, #0A1628 50%, #0F2040 100%)',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative orb */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(201,168,76,0.08) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', maxWidth: '480px', position: 'relative' }}>
        {/* Gold house icon */}
        <div style={{ fontSize: '64px', marginBottom: '12px' }}>🏚️</div>

        <div style={{ fontWeight: 800, fontSize: '96px', lineHeight: 1, background: 'linear-gradient(135deg,#A8872E,#E4C46A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
          404
        </div>
        <h1 style={{ color: 'white', fontWeight: 700, fontSize: '28px', marginBottom: '16px' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '36px', fontSize: '15px' }}>
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL may be incorrect.
        </p>
        <a href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: 'linear-gradient(135deg,#A8872E,#C9A84C,#E4C46A)', color: '#0A1628', fontWeight: 700, fontSize: '15px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(201,168,76,0.4)', transition: 'all 0.25s' }}>
          🏠 Go to Homepage
        </a>
      </div>
    </div>
  );
}
