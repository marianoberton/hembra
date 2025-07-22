'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [logoError, setLogoError] = React.useState(false);

  return (
    <footer className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Logo Gigante Central - Much larger */}
        <div className="text-center mb-16">
          <div className="relative w-full mb-8" style={{ height: '500px' }}>
            {!logoError ? (
              <Image
                src="/images/logo.jpg"
                alt="Hembra"
                fill
                className="object-contain opacity-90"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[12rem] sm:text-[16rem] lg:text-[24rem] xl:text-[30rem] font-bold text-[#3D4A3D] font-serif tracking-wide opacity-15">
                  HEMBRA
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer Navigation */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Social Links - Left */}
            <div className="flex space-x-2 mb-6 sm:mb-0">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-sm font-normal transition-all duration-300 prowl-label hover:bg-white/20"
                style={{backgroundColor: '#3D4A3D', color: '#ffffff'}}
              >
                IG
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-sm font-normal transition-all duration-300 prowl-label hover:bg-white/20"
                style={{backgroundColor: '#3D4A3D', color: '#ffffff'}}
              >
                LI
              </a>
            </div>

            {/* CTA - Right - Estilo igual a navbar */}
            <div className="flex rounded-lg p-1" style={{backgroundColor: '#3D4A3D'}}>
              <Link 
                href="/contacto" 
                className="px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 prowl-label-white text-elegant bg-white shadow-sm"
                style={{color: '#3D4A3D'}}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 