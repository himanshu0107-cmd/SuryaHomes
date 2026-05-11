'use client';
import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('sh_cookies');
    if (!accepted) {
      setTimeout(() => setVisible(true), 2000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('sh_cookies', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner animate-fadeInUp">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"/>
        <p className="text-sm text-white/80">
          We use cookies to enhance your browsing experience, personalize content, and analyze traffic.
          By clicking "Accept", you consent to our use of cookies.{' '}
          <a href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</a>
        </p>
      </div>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={() => setVisible(false)} className="text-white/60 text-sm hover:text-white transition-colors whitespace-nowrap px-4 py-2">
          Decline
        </button>
        <button onClick={accept} className="btn-gold text-sm py-2 px-5 whitespace-nowrap">
          Accept All
        </button>
      </div>
    </div>
  );
}
