'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

function HeaderClient() {
  const { state } = useCart();
  const pathname = usePathname();
  
  // Detectar si estamos en la tienda (e-commerce)
  const isEcommerce = pathname?.includes('tienda') || pathname?.includes('carrito') || pathname?.includes('producto');
  
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="w-full">
        
        {/* Desktop Layout - PROWL Style with Full Width */}
        <div className="hidden lg:flex items-center justify-between py-3 px-8">
          
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div className="text-white px-8 py-2 rounded-full flex items-center" style={{ backgroundColor: '#969697' }}>
                <span className="text-sm font-medium tracking-wide" style={{ fontFamily: 'neue-haas-grotesk-text, sans-serif' }}>
                  HEMBRA
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Center */}
          <nav className="flex items-center space-x-2">
            <Link 
              href="/proyectos"
              className="flex items-center justify-center rounded-full font-normal nav-button"
              style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#000', 
                height: '36px',
                minWidth: '95px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              Proyectos
            </Link>
            <Link 
              href="/estudio"
              className="flex items-center justify-center rounded-full font-normal nav-button"
              style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#000', 
                height: '36px',
                minWidth: '85px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              Estudio
            </Link>
            <Link 
              href="/servicios"
              className="flex items-center justify-center rounded-full font-normal nav-button"
              style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#000', 
                height: '36px',
                minWidth: '95px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              Servicios
            </Link>
            <Link 
              href="/blog"
              className="flex items-center justify-center rounded-full font-normal nav-button"
              style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#000', 
                height: '36px',
                minWidth: '75px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              Blog
            </Link>
            <Link 
              href="/contacto"
              className="flex items-center justify-center rounded-full font-normal nav-button"
              style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#000', 
                height: '36px',
                minWidth: '95px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              Contacto
            </Link>
          </nav>

          {/* Tienda Button Right */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/tienda"
              className="flex items-center justify-center rounded-full font-normal tienda-button"
              style={{ 
                backgroundColor: '#d0ddc3', 
                color: '#000', 
                height: '36px',
                minWidth: '85px',
                padding: '0 42px',
                fontSize: '14px',
                fontFamily: 'neue-haas-grotesk-text, sans-serif'
              }}
            >
              <span>Tienda</span>
            </Link>
            
            {/* Cart Button - Only show when in ecommerce context */}
            {isEcommerce && (
              <Link 
                href="/carrito" 
                className="relative px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
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

        {/* Mobile Layout - Full Width */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-4 px-6">
            
            {/* Logo Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="bg-black text-white px-4 py-2 rounded-full flex items-center">
                  <div className="relative w-16 h-5">
                    <Image
                      src="/images/logo.jpg"
                      alt="Hembra"
                      fill
                      className="object-contain brightness-0 invert"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span class="text-xs font-medium tracking-wide text-white">HEMBRA</span>';
                        }
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button Right */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/tienda"
                className="px-6 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#d0ddc3', color: '#333' }}
              >
                Tienda
              </Link>
              
              {/* Simple Menu Button */}
              <button className="p-2">
                <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-5 h-0.5 bg-gray-600"></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="border-t border-gray-100 px-6 py-4">
            <nav className="flex flex-wrap gap-2">
              <Link 
                href="/"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Inicio
              </Link>
              <Link 
                href="/proyectos"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Proyectos
              </Link>
              <Link 
                href="/estudio"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Estudio
              </Link>
              <Link 
                href="/servicios"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Servicios
              </Link>
              <Link 
                href="/blog"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Blog
              </Link>
              <Link 
                href="/contacto"
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#f2f2f2', color: '#333' }}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>

      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="w-full bg-white border-b border-gray-100">
        <div className="w-full">
          <div className="flex items-center justify-between py-4 px-8">
            <div className="w-24 h-10 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="flex space-x-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-20 h-10 bg-gray-200 animate-pulse rounded-full"></div>
              ))}
            </div>
            <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
        </div>
      </header>
    }>
      <HeaderClient />
    </Suspense>
  );
} 