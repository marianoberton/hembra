'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const pathname = usePathname();
  
  // Detectar si estamos en la tienda (e-commerce)
  const isEcommerce = pathname?.includes('tienda') || pathname?.includes('carrito') || pathname?.includes('producto');
  
  // Business Unit Tabs activos - solo /tienda es tienda, todo lo demás es estudio
  const isTienda = pathname?.startsWith('/tienda');
  
  return (
    <header className="w-full bg-white">
      <div className="w-full px-6">
        {/* Layout inspirado en el ejemplo - Logo pegado a la izquierda */}
        <div className="flex items-center justify-between py-6">
          {/* Logo - Pegado al borde izquierdo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Ir al inicio">
              <div className="relative w-44 h-14">
                <Image
                  src="/images/logo.jpg"
                  alt="Hembra"
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-3xl font-bold text-[#2C2C2C] font-serif tracking-wide">HEMBRA</span>';
                    }
                  }}
                />
              </div>
            </a>
          </div>
          
          {/* Navigation Central - Con Contacto incluido */}
          <nav className="flex-1 flex items-center justify-center px-4">
            <div className="flex items-center space-x-6">
              <Link 
                href="/estudio" 
                className="px-6 py-2 rounded-full transition-all duration-500 font-light tracking-wider text-sm hover:shadow-xl hover:scale-110 hover:bg-[#b8c5a3] hover:-translate-y-1"
                style={{
                  backgroundColor: '#cedbbf', 
                  color: '#3D4A3D', 
                  border: '2px solid #b8c5a3', 
                  letterSpacing: '0.08em'
                }}
              >
                Estudio
              </Link>
              <Link 
                href="/proyectos" 
                className="px-6 py-2 rounded-full transition-all duration-500 font-light tracking-wider text-sm hover:shadow-xl hover:scale-110 hover:bg-[#b8c5a3] hover:-translate-y-1"
                style={{
                  backgroundColor: '#cedbbf', 
                  color: '#3D4A3D', 
                  border: '2px solid #b8c5a3', 
                  letterSpacing: '0.08em'
                }}
              >
                Proyectos
              </Link>
              <Link 
                href="/servicios" 
                className="px-6 py-2 rounded-full transition-all duration-500 font-light tracking-wider text-sm hover:shadow-xl hover:scale-110 hover:bg-[#b8c5a3] hover:-translate-y-1"
                style={{
                  backgroundColor: '#cedbbf', 
                  color: '#3D4A3D', 
                  border: '2px solid #b8c5a3', 
                  letterSpacing: '0.08em'
                }}
              >
                Servicios
              </Link>
              <Link 
                href="/blog" 
                className="px-6 py-2 rounded-full transition-all duration-500 font-light tracking-wider text-sm hover:shadow-xl hover:scale-110 hover:bg-[#b8c5a3] hover:-translate-y-1"
                style={{
                  backgroundColor: '#cedbbf', 
                  color: '#3D4A3D', 
                  border: '2px solid #b8c5a3', 
                  letterSpacing: '0.08em'
                }}
              >
                Blog
              </Link>
              <Link 
                href="/contacto" 
                className="px-6 py-2 rounded-full transition-all duration-500 font-light tracking-wider text-sm hover:shadow-xl hover:scale-110 hover:bg-[#b8c5a3] hover:-translate-y-1"
                style={{
                  backgroundColor: '#cedbbf', 
                  color: '#3D4A3D', 
                  border: '2px solid #b8c5a3', 
                  letterSpacing: '0.08em'
                }}
              >
                Contacto
              </Link>
            </div>
          </nav>
          
          {/* Toggle - Orden invertido: Tienda primero, luego Estudio */}
          <div className="flex-shrink-0">
            <div className="flex space-x-0 rounded-lg overflow-hidden shadow-lg border-2 border-[#cedbbf] bg-white">
              <Link
                href="/tienda"
                className={`px-6 py-2 text-sm font-light tracking-wider cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isTienda 
                    ? 'bg-[#a8836d] text-white shadow-inner' 
                    : 'bg-[#f9f8f6] text-[#8c624e] hover:bg-[#e8ddd4]'
                }`}
                style={{
                  borderRight: '2px solid #cedbbf', 
                  minWidth: '100px', 
                  textAlign: 'center'
                }}
              >
                Tienda
              </Link>
              <Link
                href="/"
                className={`px-6 py-2 text-sm font-light tracking-wider cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  !isTienda 
                    ? 'bg-[#718355] text-white shadow-inner' 
                    : 'bg-[#f9f8f6] text-[#3D4A3D] hover:bg-[#cedbbf]'
                }`}
                style={{
                  minWidth: '100px', 
                  textAlign: 'center'
                }}
              >
                Estudio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="w-full bg-white">
        <div className="w-full px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex-shrink-0">
              <div className="w-44 h-14 bg-[#cedbbf] animate-pulse rounded"></div>
            </div>
            <nav className="flex-1 flex items-center justify-center px-4">
              <div className="flex items-center space-x-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="px-6 py-2 bg-[#cedbbf] animate-pulse rounded-full w-20 h-8"></div>
                ))}
              </div>
            </nav>
            <div className="flex-shrink-0">
              <div className="flex space-x-0 rounded-lg overflow-hidden shadow-lg border-2 border-[#cedbbf] bg-white">
                <div className="px-6 py-2 bg-[#a8836d] text-white animate-pulse w-24 h-10"></div>
                <div className="px-6 py-2 bg-[#718355] text-white animate-pulse w-24 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    }>
      <HeaderClient />
    </Suspense>
  );
} 