"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Helper function to strip HTML tags and return plain text
const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

interface ThreeDTextCardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  label?: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  cardNumber?: number;
  showArrow?: boolean;
  className?: string;
  svgPath?: string; // Nueva prop para mostrar SVG en lugar de texto
  compactText?: boolean; // Nueva prop para cards con texto largo
}

export default function ThreeDTextCard({
  title,
  subtitle,
  content,
  label = 'Studio',
  href,
  backgroundColor = '#f2f2f2ff', // Nuevo color por defecto
  textColor = '#333333', // Color consistente con otras cards
  cardNumber,
  showArrow = true,
  className = '',
  svgPath, // Nueva prop para SVG
  compactText = false // Nueva prop para texto compacto
}: ThreeDTextCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if backgroundColor is dark to determine text color
  const isDarkBackground = backgroundColor === '#718355' || backgroundColor === '#a8836d' || backgroundColor === '#2c2c2c';
  const finalTextColor = isDarkBackground ? '#ffffff' : textColor;
  const arrowClass = isDarkBackground ? 'prowl-arrow-white' : 'prowl-arrow';
  const labelClass = isDarkBackground ? 'prowl-label-white' : 'prowl-label';

  return (
    <div className="w-full">
      <div 
        className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        } cursor-pointer px-4 md:px-6 py-6 md:py-9 pb-16 md:pb-20 flex flex-col justify-center ${className}`}
        style={{
          backgroundColor: backgroundColor,
          color: finalTextColor,
          height: '340px', // Altura fija para todas las pantallas
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Number */}
        {cardNumber && (
          <div className="absolute top-8 right-2 z-20">
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
              {cardNumber}
            </div>
          </div>
        )}

        {/* Label */}
        {label && (
          <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-30 ${labelClass}`}>
            {label}
          </div>
        )}

        {/* Content */}
        <div 
          className={`absolute inset-x-0 flex flex-col items-center justify-center text-center overflow-hidden ${
            compactText ? 'px-6 py-4' : 'px-4 py-6'
          }`}
          style={{ 
            color: finalTextColor,
            backgroundColor: 'transparent',
            top: (cardNumber === 5 || cardNumber === 20) ? 'clamp(50px, 10vh, 65px)' : 'clamp(45px, 8vh, 55px)', // Más espacio desde arriba en móvil
            bottom: (cardNumber === 5 || cardNumber === 20) ? 'clamp(50px, 10vh, 65px)' : 'clamp(45px, 8vh, 55px)', // Más espacio desde abajo en móvil
            ...(compactText && {
                maxHeight: (cardNumber === 5 || cardNumber === 20) ? 'calc(100% - clamp(100px, 20vh, 130px))' : 'calc(100% - clamp(90px, 16vh, 110px))', // Altura ajustada
                marginTop: (cardNumber === 5 || cardNumber === 20) ? 'clamp(50px, 10vh, 65px)' : 'clamp(45px, 8vh, 55px)',
                marginBottom: (cardNumber === 5 || cardNumber === 20) ? 'clamp(50px, 10vh, 65px)' : 'clamp(45px, 8vh, 55px)',
            })
          }}
        >
          {svgPath ? (
            <div className="flex items-center justify-center h-full">
              <Image
                src={svgPath}
                alt="Logo"
                width={400}
                height={80}
                className="object-contain"
                style={{ filter: finalTextColor === '#ffffff' ? 'invert(1)' : 'none' }}
              />
            </div>
          ) : (
            <>
              {title && (
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ 
                    fontFamily: '"Helvetica Neue", sans-serif',
                    fontSize: (cardNumber === 5 || cardNumber === 20) ? 'clamp(20px, 3.2vw, 28px)' : (compactText ? 'clamp(22px, 3.5vw, 28px)' : 'clamp(24px, 4vw, 36px)'), // Tamaños más pequeños para móvil
                    fontStyle: 'normal',
                    fontWeight: 400, // Asegurar que no sea bold
                    letterSpacing: '0em',
                    lineHeight: (cardNumber === 5 || cardNumber === 20) ? '100%' : (compactText ? '105%' : '110%'), // Línea más compacta
                    textAlign: 'center' as const,
                    color: '#000000',
                    textDecoration: 'none',
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    margin: (cardNumber === 5 || cardNumber === 20) ? 'clamp(0.5px, 0.2vw, 1px)' : '2px',
                    padding: (cardNumber === 5 || cardNumber === 20) ? 'clamp(1px, 0.4vw, 2px)' : '4px',
                    boxSizing: 'border-box',
                    overflow: 'hidden', // Cambiar a hidden para evitar desbordamiento
                    wordWrap: 'break-word', // Permitir que las palabras se rompan
                    hyphens: 'auto' // Activar guiones automáticos
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                </div>
              )}
              
              {subtitle && (
                <div 
                  className={`${compactText ? 'mb-4 max-w-full' : 'mb-8 max-w-4xl'} overflow-hidden`}
                  style={{ 
                    fontFamily: '"Helvetica Neue", sans-serif',
                    fontSize: compactText ? '22px' : '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0em',
                    lineHeight: compactText ? '110%' : '95%',
                    textAlign: 'center' as const,
                    color: '#000000',
                    textDecoration: 'none',
                    textTransform: 'none',
                    ...(compactText && {
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical' as const,
                      overflow: 'hidden'
                    })
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: subtitle }} />
                </div>
              )}
              
              {content && (
                <p className={`text-body italic underline ${compactText ? 'max-w-full' : 'max-w-4xl'} overflow-hidden`} style={{
                  ...(compactText && {
                    fontSize: '16px',
                    lineHeight: '120%',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden'
                  })
                }}>
                  {content}
                </p>
              )}
            </>
          )}
        </div>

        {/* Arrow */}
        {showArrow && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <span className={arrowClass}>→</span>
          </div>
        )}

        {/* Link overlay */}
        {href && <Link href={href} className="absolute inset-0 z-10" />}
      </div>
    </div>
  );
}