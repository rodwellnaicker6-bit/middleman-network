import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'The Middleman Network — South Africa\'s Smart B2B Marketplace',
  description: 'South Africa\'s B2B marketplace. 22 industries, 120+ verified niches. Solar, security, ECU repair, legal, logistics, CNC, telecoms, agriculture AI, trading tech, fleet — 0% commission.',
  keywords: 'South Africa marketplace, B2B marketplace SA, solar installers, ECU repair Durban, YieldCore AI, TipGuard digital tipping, Scope Indices trading, DR Autotronics, legal services SA, logistics courier SA, CNC machining, telecoms MTN Vodacom, DSV freight, fleet management, construction KZN',
  openGraph: {
    title: 'The Middleman Network — South Africa\'s Smart B2B Marketplace',
    description: '22 industries. 120+ verified niches. 0% commission. The platform South African businesses have been waiting for.',
    url: 'https://middleman-network.vercel.app',
    siteName: 'The Middleman Network',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Middleman Network',
    description: '22 industries. 120+ verified niches. 0% commission. South Africa\'s smart B2B marketplace.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp floating button — every page */}
        <a
          href="https://wa.me/27627135401?text=Hi%2C%20I%20found%20you%20on%20The%20Middleman%20Network"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 9999,
            background: '#25d366',
            color: '#fff',
            borderRadius: 50,
            width: 58,
            height: 58,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
            fontSize: 28,
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
        >
          💬
        </a>
      </body>
    </html>
  );
}
