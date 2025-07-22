'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';
import FlowingMenu from './FlowingMenu';

// Configuración del menú fluido
const menuItems = [
  { 
    link: '/estudio', 
    text: 'Estudio', 
    image: '/images/hero1.jpg' 
  },
  { 
    link: '/proyectos', 
    text: 'Proyectos', 
    image: '/images/1. Florero Betty/Copia de Betty Vase Colours.jpg' 
  },
  { 
    link: '/servicios', 
    text: 'Servicios', 
    image: '/images/linea-complementos-chapa.jpeg' 
  },
  { 
    link: '/blog', 
    text: 'Blog', 
    image: '/images/hero1.jpg' 
  },
  { 
    link: '/contacto', 
    text: 'Contacto', 
    image: '/images/hero3.jpg' 
  }
];

function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFirstItemHovered, setIsFirstItemHovered] = useState(false);
  const { state } = useCart();
  const pathname = usePathname();
  
  // Detectar si estamos en la tienda (e-commerce)
  const isEcommerce = pathname?.includes('tienda') || pathname?.includes('carrito') || pathname?.includes('producto');
  
  // Business Unit Tabs activos - solo /tienda es tienda, todo lo demás es estudio
  const isTienda = pathname?.startsWith('/tienda');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsFirstItemHovered(false);
  };

  const handleFirstItemHover = (isHovered: boolean) => {
    setIsFirstItemHovered(isHovered);
  };
  
  return (
    <header className="w-full bg-white relative z-50">
      <div className={`w-full px-4 md:px-6 ${isMenuOpen ? 'pointer-events-none' : ''}`}>
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            {/* Logo Left - Circular H */}
            <div className="flex-shrink-0">
              <a href="/" aria-label="Ir al inicio">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#3D4A3D' }}
                >
                  <span className="text-white font-bold text-lg tracking-wide">H</span>
                </div>
              </a>
            </div>

            {/* Toggle Center - Sleek Pills */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-1">
                <Link
                  href="/"
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 text-button ${
                    !isTienda 
                      ? 'bg-[#3D4A3D] text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Estudio
                </Link>
                <Link
                  href="/tienda"
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 text-button ${
                    isTienda 
                      ? 'bg-[#3D4A3D] text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Tienda
                </Link>
              </div>
            </div>
            
            {/* Hamburger Menu Button Right */}
            <button 
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-[70] flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white rotate-45 translate-y-1.5' 
                  : 'rotate-0'
              }`} style={{ backgroundColor: isMenuOpen ? '#ffffff' : '#3D4A3D' }}></span>
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white opacity-0' 
                  : 'opacity-100'
              }`} style={{ backgroundColor: isMenuOpen ? '#ffffff' : '#3D4A3D' }}></span>
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white -rotate-45 -translate-y-1.5' 
                  : 'rotate-0'
              }`} style={{ backgroundColor: isMenuOpen ? '#ffffff' : '#3D4A3D' }}></span>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between py-6">
          {/* Toggle Left - Less rounded, darker green, prowl-label typography */}
          <div className="flex rounded-lg p-1" style={{backgroundColor: '#3D4A3D'}}>
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-normal transition-all duration-300 prowl-label-white text-elegant ${
                !isTienda 
                  ? 'bg-white shadow-sm' 
                  : 'text-white hover:bg-white/20'
              }`}
              style={{
                color: !isTienda ? '#3D4A3D' : '#ffffff'
              }}
            >
              Estudio
            </Link>
            <Link
              href="/tienda"
              className={`px-4 py-2 rounded-md text-sm font-normal transition-all duration-300 prowl-label-white text-elegant ${
                isTienda 
                  ? 'bg-white shadow-sm' 
                  : 'text-white hover:bg-white/20'
              }`}
              style={{
                color: isTienda ? '#3D4A3D' : '#ffffff'
              }}
            >
              Tienda
            </Link>
          </div>

          {/* Logo Center - Bigger */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <a href="/" aria-label="Ir al inicio">
              <div className="relative w-48 h-14">
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

          {/* Right Side: Menu Button + Cart */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleMenu}
              className={`flex flex-col justify-center items-center w-12 h-12 transition-all duration-500 hover:shadow-xl hover:scale-110 hover:-translate-y-1 relative z-[70] space-y-1 ${isMenuOpen ? 'pointer-events-auto' : ''}`}
            >
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? (isFirstItemHovered ? 'rotate-45 translate-y-1.5' : 'rotate-45 translate-y-1.5')
                  : 'rotate-0'
              }`} style={{ 
                backgroundColor: isMenuOpen 
                  ? (isFirstItemHovered ? '#000000' : '#ffffff') 
                  : '#3D4A3D' 
              }}></span>
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? (isFirstItemHovered ? 'opacity-0' : 'opacity-0')
                  : 'opacity-100'
              }`} style={{ 
                backgroundColor: isMenuOpen 
                  ? (isFirstItemHovered ? '#000000' : '#ffffff') 
                  : '#3D4A3D' 
              }}></span>
              <span className={`w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? (isFirstItemHovered ? '-rotate-45 -translate-y-1.5' : '-rotate-45 -translate-y-1.5')
                  : 'rotate-0'
              }`} style={{ 
                backgroundColor: isMenuOpen 
                  ? (isFirstItemHovered ? '#000000' : '#ffffff') 
                  : '#3D4A3D' 
              }}></span>
            </button>

            {/* Cart Button - Only show when in ecommerce context */}
            {isEcommerce && (
              <Link 
                href="/carrito" 
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Carrito
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Flowing Menu Overlay - Full Screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60]" style={{backgroundColor: '#3D4A3D'}}>
          <div className="w-full h-full">
            <FlowingMenu 
              items={menuItems} 
              onItemClick={closeMenu}
              onFirstItemHover={handleFirstItemHover}
            />
          </div>
        </div>
      )}


    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="w-full bg-white">
        <div className="w-full px-4 md:px-6">
          {/* Mobile fallback */}
          <div className="md:hidden">
            <div className="flex items-center justify-between py-4">
              <div className="w-32 h-10 bg-[#cedbbf] animate-pulse rounded"></div>
              <div className="w-8 h-8 bg-[#cedbbf] animate-pulse rounded"></div>
            </div>
            <div className="pb-4 flex justify-center">
              <div className="flex space-x-0 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-[#a8836d] animate-pulse w-20 h-8"></div>
                <div className="px-4 py-2 bg-[#718355] animate-pulse w-20 h-8"></div>
              </div>
            </div>
          </div>
          
          {/* Desktop fallback */}
          <div className="hidden md:flex items-center justify-between py-6">
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