import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'The Middleman Network — South Africa\'s Smart B2B Marketplace',
  description: 'Connect with verified service providers and suppliers across 11 industries. Solar, security, automotive technology, smart agriculture, digital tipping, trading technology and more.',
  keywords: 'South Africa marketplace, B2B, solar installers, ECU repair, YieldCore AI, TipGuard, Scope Indices, DR Autotronics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
