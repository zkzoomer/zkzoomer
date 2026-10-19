import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';

import './globals.css';
import clsx from 'clsx';

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// We load Fira Code locally because Google Font's `@font-face` definition
// leaves out some important glyphs for a mono font (such as [box drawing
// characters](http://unicode.org/charts/PDF/U2500.pdf)).
const firaCode = LocalFont({
  src: '../public/static/fonts/FiraCode-VariableFont_wght.ttf',
  variable: '--font-fira-code',
});

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

const title = 'zkzoomer | Backend & Blockchain Engineer';
const description =
  'Backend and blockchain engineer building financial infrastructure across Rust services, distributed systems, databases, APIs, smart contracts, and ZK protocols.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'zkzoomer',
    'ZK',
    'zero knowledge',
    'backend engineer',
    'protocol engineer',
    'distributed systems',
    'Rust',
    'PostgreSQL',
    'SQL',
    'APIs',
    'database migrations',
    'integration testing',
    'blockchain',
    'Ethereum',
    'EVM',
    'rollup',
    'zkEVM',
    'L2',
    'zk-rollups',
    'custom ZK VMs',
    'aerospace engineering',
  ],
  creator: 'zkzoomer',
  openGraph: {
    title,
    description,
    url: 'https://zkzoomer.io',
    siteName: 'zkzoomer',
    images: [
      /* { TODO
        url: 'https://zkzoomer.com/static/og/home.png',
        alt: 'zkzoomer',
        height: 630,
        width: 1200,
      }, */
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@zkzoomer',
    creatorId: '1496528209680162819',
  },
  alternates: {
    canonical: 'https://zkzoomer.io',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000',
  width: 'device-width',
  initialScale: 1,
};

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(inter.variable, firaCode.variable, 'dark')}
      style={{ background: '#000' }}
    >
      <body className="relative flex min-h-screen w-full flex-col">
        <main className="relative flex grow flex-col">{children}</main>
      </body>
    </html>
  );
}
