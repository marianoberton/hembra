"use client";

import React from "react";
import Image from "next/image";

interface ServiceRowProps {
  title: string;
  description: string;
  backgroundColor: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export default function ServiceRow({
  title,
  description,
  backgroundColor,
  imageSrc,
  imageAlt,
  isReversed = false
}: ServiceRowProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Contenido de texto - 1 columna */}
      <div 
        className={`p-6 lg:p-8 rounded-xl ${isReversed ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}
        style={{ backgroundColor }}
      >
        {/* Título con tipografía del proyecto */}
        <h2 className="text-display mb-4 text-black" style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          textAlign: 'left'
        }}>
          {title}
        </h2>

        {/* Descripción con tipografía mejorada */}
        <div>
          <p className="text-body text-black leading-relaxed" style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            letterSpacing: '-0.01em',
            fontWeight: '400'
          }}>
            {description}
          </p>
        </div>
      </div>

      {/* Imagen tipo tira con bordes redondeados - 1 columna */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} flex items-center`}>
        <div className="w-full">
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden bg-gray-200">
            {/* Background Image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
} 