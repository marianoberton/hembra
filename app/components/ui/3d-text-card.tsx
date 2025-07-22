"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface ThreeDTextCardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  label?: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  minHeight?: string;
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
  backgroundColor = '#b3c1a2',
  textColor = '#718355',
  minHeight = 'min-h-[140px] sm:min-h-[160px]',
  cardNumber,
  showArrow = true,
  className = ''
}: ThreeDTextCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      cardRef.current.style.transition = "transform 0.8s ease-out";
    }
  };

  // Check if backgroundColor is dark to determine text color
  const isDarkBackground = backgroundColor === '#718355' || backgroundColor === '#a8836d' || backgroundColor === '#2c2c2c';
  const finalTextColor = isDarkBackground ? '#ffffff' : textColor;
  const arrowClass = isDarkBackground ? 'prowl-arrow-white' : 'prowl-arrow';
  const labelClass = isDarkBackground ? 'prowl-label-white' : 'prowl-label';

  return (
    <div className="w-full">
      <div 
        ref={cardRef}
        className={`relative w-full rounded-xl overflow-hidden cursor-pointer px-4 md:px-6 py-6 md:py-9 pb-16 md:pb-20 flex flex-col justify-center ${minHeight} ${className}`}
        style={{
          backgroundColor,
          color: finalTextColor,
          transformStyle: "preserve-3d",
          transition: isHovered ? "none" : "transform 0.8s ease-out"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card Number */}
        {cardNumber && (
          <div 
            className="absolute top-2 right-2 z-20 transition-transform duration-500"
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
              transformStyle: "preserve-3d"
            }}
          >
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
              {cardNumber}
            </div>
          </div>
        )}

        {/* Label */}
        {label && (
          <div 
            className={`absolute top-8 left-1/2 z-30 transition-transform duration-500 ${labelClass}`}
            style={{
              transform: isHovered ? "translateX(-50%) translateZ(40px)" : "translateX(-50%) translateZ(0px)",
              transformStyle: "preserve-3d"
            }}
          >
            {label}
          </div>
        )}

        {/* Content */}
        <div 
          className="flex flex-col justify-center items-center h-full text-center mt-12 transition-transform duration-500"
          style={{
            transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
            transformStyle: "preserve-3d"
          }}
        >
          {title && (
            <h2 className="text-headline mb-2 w-full">
              {title}
            </h2>
          )}
          
          {subtitle && (
            <h3 className="text-headline mb-8 max-w-4xl">
              {subtitle}
            </h3>
          )}
          
          {content && (
            <p className="text-body italic underline max-w-4xl">
              {content}
            </p>
          )}
        </div>

        {/* Arrow */}
        {showArrow && (
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center transition-transform duration-500"
            style={{
              transform: isHovered ? "translateX(-50%) translateZ(60px)" : "translateX(-50%) translateZ(0px)",
              transformStyle: "preserve-3d"
            }}
          >
            <span className={arrowClass}>→</span>
          </div>
        )}

        {/* Link overlay */}
        {href && <Link href={href} className="absolute inset-0 z-10" />}
      </div>
    </div>
  );
} 