'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const pathname = usePathname();
  
  // Detectar si estamos en la tienda (e-commerce) - simplificado
  const isEcommerce = pathname?.includes('tienda') || pathname?.includes('carrito') || pathname?.includes('producto');
  
  return (
    <>
      {/* Business Unit Tab - Improved Design */}
      <div className="fixed top-0 left-0 right-0 z-[60] border-b" style={{backgroundColor: '#fefcfb', borderColor: '#b3c1a2'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Left side - Business Unit Tabs */}
            <div className="flex">
              <Link 
                href="/"
                className="px-4 py-2 text-sm font-medium transition-all duration-300 tracking-wide mx-1"
                style={{
                  backgroundColor: '#718355',
                  color: '#fefcfb',
                  border: 'none'
                }}
              >
                Taller
              </Link>
              <Link 
                href="/tienda"
                className="px-6 py-2 text-sm font-medium transition-all duration-300 tracking-wide mx-1"
                style={{
                  backgroundColor: '#a8836d',
                  color: '#fefcfb',
                  border: 'none'
                }}
              >
                Tienda
              </Link>
            </div>

            {/* Right side - Optional context info */}
            <div className="text-xs text-gray-400 hidden md:block">
              {isEcommerce ? 'E-commerce' : 'Diseño Industrial'}
            </div>
          </div>
        </div>
      </div>

      <header className="fixed top-10 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{backgroundColor: 'rgba(254, 252, 251, 0.95)', borderColor: '#cedbbf'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={isEcommerce ? "/tienda" : "/"} className="flex items-center">
                <div className="relative w-32 h-12">
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
                        parent.innerHTML = '<span class="text-2xl font-bold text-[#2C2C2C] font-serif tracking-wide">HEMBRA</span>';
                      }
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* Navigation - Different for E-commerce vs Taller */}
            {isEcommerce ? (
              /* E-COMMERCE NAVIGATION - Removed redundant "Conocé el Taller" */
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/tienda" 
                  className="text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-medium font-sans"
                >
                  Productos
                </Link>
                <div className="relative group">
                  <button className="text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-medium font-sans flex items-center space-x-1">
                    <span>Categorías</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Categories - Updated with new 4 categories */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="space-y-3">
                        <Link 
                          href="/tienda?categoria=luminarias" 
                          className="block text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        >
                          <div className="font-medium">Luminarias</div>
                          <div className="text-xs text-gray-500 mt-0.5">Vol. 1 → Vol. 10 (mesa, pie, pared)</div>
                        </Link>
                        <Link 
                          href="/tienda?categoria=macetas" 
                          className="block text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        >
                          <div className="font-medium">Macetas</div>
                          <div className="text-xs text-gray-500 mt-0.5">Betty M, Alicia, Enrica, Diana, Berta</div>
                        </Link>
                        <Link 
                          href="/tienda?categoria=decoracion" 
                          className="block text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        >
                          <div className="font-medium">Decoración</div>
                          <div className="text-xs text-gray-500 mt-0.5">Floreros, Jarrones, Bandejas Ø 12-32</div>
                        </Link>
                        <Link 
                          href="/tienda?categoria=accesorios" 
                          className="block text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        >
                          <div className="font-medium">Accesorios</div>
                          <div className="text-xs text-gray-500 mt-0.5">Mesa Bea, Estante Mabel, Marga, Luisa</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            ) : (
              /* TALLER/CORPORATE NAVIGATION */
              <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
                <div className="flex items-center space-x-6">
                  <Link 
                    href="/" 
                    className="px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide"
                    style={{
                      backgroundColor: pathname === '/' ? '#718355' : '#fefcfb',
                      color: pathname === '/' ? '#fefcfb' : '#a8836d',
                      border: pathname === '/' ? 'none' : '1px solid #cedbbf'
                    }}
                  >
                    Index
                  </Link>
                  <Link 
                    href="/work" 
                    className="px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide"
                    style={{
                      backgroundColor: pathname === '/work' ? '#718355' : '#fefcfb',
                      color: pathname === '/work' ? '#fefcfb' : '#a8836d',
                      border: pathname === '/work' ? 'none' : '1px solid #cedbbf'
                    }}
                  >
                    Work
                  </Link>
                  <Link 
                    href="/studio" 
                    className="px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide"
                    style={{
                      backgroundColor: pathname === '/studio' ? '#718355' : '#fefcfb',
                      color: pathname === '/studio' ? '#fefcfb' : '#a8836d',
                      border: pathname === '/studio' ? 'none' : '1px solid #cedbbf'
                    }}
                  >
                    Studio
                  </Link>
                  <Link 
                    href="/projections" 
                    className="px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide"
                    style={{
                      backgroundColor: pathname === '/projections' ? '#718355' : '#fefcfb',
                      color: pathname === '/projections' ? '#fefcfb' : '#a8836d',
                      border: pathname === '/projections' ? 'none' : '1px solid #cedbbf'
                    }}
                  >
                    Projections
                  </Link>
                  <Link 
                    href="/news" 
                    className="px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide"
                    style={{
                      backgroundColor: pathname === '/news' ? '#718355' : '#fefcfb',
                      color: pathname === '/news' ? '#fefcfb' : '#a8836d',
                      border: pathname === '/news' ? 'none' : '1px solid #cedbbf'
                    }}
                  >
                    News
                  </Link>
                </div>
              </nav>
            )}

            {/* Search and Cart - Always visible but cart only for e-commerce */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="p-2 transition-colors" style={{color: '#718355'}}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart - Only show in e-commerce */}
              {isEcommerce && (
                <Link 
                  href="/carrito" 
                  className="relative flex items-center p-2 transition-colors"
                  style={{color: '#718355'}}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                    />
                  </svg>
                  {state.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#3D4A3D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {state.itemCount}
                    </span>
                  )}
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 transition-colors"
                style={{color: '#718355'}}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{backgroundColor: '#fefcfb', borderColor: '#cedbbf'}}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {isEcommerce ? (
                /* Mobile E-commerce Menu - Removed redundant link */
                <>
                  <Link 
                    href="/tienda" 
                    className="block py-2 text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-medium font-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Productos
                  </Link>
                  <div className="py-2">
                    <div className="text-[#2C2C2C] font-medium font-sans mb-2">Categorías</div>
                    <div className="pl-4 space-y-2">
                      <Link 
                        href="/tienda?categoria=luminarias" 
                        className="block py-1 text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Luminarias
                      </Link>
                      <Link 
                        href="/tienda?categoria=macetas" 
                        className="block py-1 text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Macetas
                      </Link>
                      <Link 
                        href="/tienda?categoria=decoracion" 
                        className="block py-1 text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Decoración
                      </Link>
                      <Link 
                        href="/tienda?categoria=accesorios" 
                        className="block py-1 text-sm text-[#2C2C2C] hover:text-[#3D4A3D] transition-colors font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Accesorios
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                /* Mobile Taller Menu */
                <>

                                      <Link 
                      href="/studio" 
                      className="block py-2 transition-colors font-medium font-sans"
                      style={{color: '#718355'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      STUDIO
                    </Link>
                    <Link 
                      href="/work" 
                      className="block py-2 transition-colors font-medium font-sans"
                      style={{color: '#718355'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      WORK
                    </Link>
                    <Link 
                      href="/tienda" 
                      className="block py-2 transition-colors font-medium font-sans"
                      style={{color: '#718355'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      TIENDA
                    </Link>
                    <Link 
                      href="/projections" 
                      className="block py-2 transition-colors font-medium font-sans"
                      style={{color: '#718355'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PROJECTIONS
                    </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
} 