import { Metadata } from 'next';
import Link from 'next/link';
import { Lora, Inter } from 'next/font/google';

// Premium typography setup
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hembra | Tienda',
  description: 'Productos únicos de diseño regenerativo. Macetas, luminarias, decoración y accesorios creados con materiales upcycled.',
  openGraph: {
    title: 'Hembra | Tienda',
    description: 'Productos únicos de diseño regenerativo',
    images: ['/images/logo.jpg']
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e9f5db'}}>
      {children}
    </div>
  );
} 