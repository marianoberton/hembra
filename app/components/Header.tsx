'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-black text-white px-4 py-2 rounded-full">
              <span className="text-sm font-medium tracking-wide">PROWL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <Link 
              href="/" 
              className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Index
            </Link>
            <Link 
              href="/work" 
              className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/studio" 
              className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Studio
            </Link>
            <Link 
              href="/projections" 
              className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Projections
            </Link>
            <Link 
              href="/news" 
              className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              News
            </Link>
          </nav>

          {/* CTA and Cart */}
          <div className="flex items-center space-x-3">
            {/* Get in touch CTA */}
            <Link 
              href="/contacto" 
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors"
            >
              Get in touch
            </Link>

            {/* Cart - Hidden on mobile, shown on desktop */}
            <Link 
              href="/carrito" 
              className="hidden md:flex relative p-2 text-gray-900 hover:text-gray-600 transition-colors"
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
                  strokeWidth={1.5} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Index
              </Link>
              <Link 
                href="/work" 
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/studio" 
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Studio
              </Link>
              <Link 
                href="/projections" 
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Projections
              </Link>
              <Link 
                href="/news" 
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              
              {/* Mobile Cart */}
              <Link 
                href="/carrito" 
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
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
                    strokeWidth={1.5} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  />
                </svg>
                <span className="text-sm">Carrito ({state.itemCount})</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 