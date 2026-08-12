import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'The Middleman Network — South Africa\'s Smart B2B Marketplace',
  description: 'Connect with verified service providers and suppliers across 11 industries. Solar, security, automotive technology, smart agriculture, digital tipping, trading technology and more.',
  keywords: 'South Africa marketplace, B2B, solar installers, ECU repair, YieldCore AI, TipGuard, Scope Indices, DR Autotronics',
  viewport: 'width=device-width, initial-scale=1',
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
