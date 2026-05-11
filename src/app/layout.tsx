import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  title: 'Surya Homes – Find Your Dream Property in Greater Noida & NCR',
  description: "Greater Noida's most trusted real estate company. 500+ verified listings — buy, sell or invest in flats, plots, villas & commercial properties. RERA registered. No brokerage.",
  keywords: 'real estate Greater Noida, buy property Noida, plots Greater Noida, flats for sale NCR, villa Greater Noida, RERA registered property, Surya Homes',
  authors: [{ name: 'Surya Homes' }],
  openGraph: {
    title: 'Surya Homes – Find Your Dream Property in Greater Noida',
    description: "500+ RERA-verified properties in Greater Noida & NCR. Transparent pricing. No hidden charges.",
    type: 'website',
    locale: 'en_IN',
    siteName: 'Surya Homes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Homes – Find Your Dream Property',
    description: "Greater Noida's #1 trusted real estate platform.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
