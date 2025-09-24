import React from 'react';
import BaseCard from './BaseCard';

interface TypographyItem {
  text: string;
  className?: string;
  color?: string;
  fontSize?: string;
}

interface TypographyCardProps {
  items: TypographyItem[];
  backgroundColor?: string;
  cardNumber?: number;
  className?: string;
  label?: string;
  showArrow?: boolean;
  href?: string;
}

export default function TypographyCard({
  items,
  backgroundColor = '#f5f5f5',
  cardNumber,
  className = '',
  label = 'Work',
  showArrow = true,
  href
}: TypographyCardProps) {
  const isLightBackground = backgroundColor === '#f5f5f5' || backgroundColor === '#ffffff' || backgroundColor === 'white';
  const textColor = isLightBackground ? '#000000' : '#ffffff';

  return (
    <BaseCard 
      href={href}
      className={`w-full relative overflow-hidden ${className}`}
      style={{
        backgroundColor,
        borderRadius: '12px',
        height: '240px'
      }}
      cardNumber={cardNumber}
    >
      {/* Badge - Project → Work */}
      {label && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-30"
          style={{
            top: '25px',
            fontFamily: '"Helvetica Neue LT Pro", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '15px',
            color: textColor,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {label}
        </div>
      )}

      {/* Main content - Typography */}
      <div 
        className="flex items-center justify-center h-full"
        style={{
          fontFamily: 'Neue Haas Grotesk Display Pro',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '36px',
          lineHeight: '37px',
          color: textColor,
          textAlign: 'center'
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className={item.className || ''}
            style={{
              fontSize: item.fontSize || 'inherit',
              color: item.color || 'inherit'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Arrow → → → */}
      {showArrow && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            bottom: '25px',
            fontFamily: '"Liberation Sans", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '37px',
            color: textColor,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          →
        </div>
      )}
    </BaseCard>
  );
}