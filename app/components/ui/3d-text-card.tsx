"use client";

import React from "react";
import Link from "next/link";

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
  className = ''
}: ThreeDTextCardProps) {
  // Check if backgroundColor is dark to determine text color
  const isDarkBackground = backgroundColor === '#718355' || backgroundColor === '#a8836d' || backgroundColor === '#2c2c2c';
  const finalTextColor = isDarkBackground ? '#ffffff' : textColor;
  const arrowClass = isDarkBackground ? 'prowl-arrow-white' : 'prowl-arrow';
  const labelClass = isDarkBackground ? 'prowl-label-white' : 'prowl-label';

  return (
    <div className="w-full">
      <div 
        className={`relative w-full rounded-xl overflow-hidden cursor-pointer px-4 md:px-6 py-6 md:py-9 pb-16 md:pb-20 flex flex-col justify-center ${className} hover:shadow-md transition-shadow duration-300`}
        style={{
          backgroundColor,
          color: finalTextColor,
          height: '340px', // Altura fija para todas las pantallas
        }}
      >
        {/* Card Number */}
        {cardNumber && (
          <div className="absolute top-2 right-2 z-20">
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
        <div className="flex flex-col justify-center items-center text-center h-full mt-12">
          {title && (
            <div 
              className="mb-2 w-full"
              style={{ 
                fontFamily: '"Helvetica Neue", sans-serif',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '0em',
                lineHeight: '95%',
                textAlign: 'center' as const,
                color: '#000000',
                textDecoration: 'none',
                textTransform: 'none'
              }}
            >
              {stripHtmlTags(title)}
            </div>
          )}
          
          {subtitle && (
            <div 
              className="mb-8 max-w-4xl"
              style={{ 
                fontFamily: '"Helvetica Neue", sans-serif',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '0em',
                lineHeight: '95%',
                textAlign: 'center' as const,
                color: '#000000',
                textDecoration: 'none',
                textTransform: 'none'
              }}
            >
              {stripHtmlTags(subtitle)}
            </div>
          )}
          
          {content && (
            <p className="text-body italic underline max-w-4xl">
              {content}
            </p>
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