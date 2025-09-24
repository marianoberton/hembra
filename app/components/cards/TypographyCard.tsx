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
  backgroundColor = 'bg-white border border-gray-200',
  cardNumber,
  className = '',
  label = 'Work',
  showArrow = true,
  href
}: TypographyCardProps) {
  // Check if backgroundColor is a hex color or CSS class
  const isHexColor = backgroundColor.startsWith('#');
  
  // Determine if we need white text for dark backgrounds
  const isDarkBackground = backgroundColor === 'bg-black' || 
                           backgroundColor === 'bg-gray-900' || 
                           backgroundColor === 'bg-slate-900' ||
                           (isHexColor && (
                             backgroundColor === '#000000' ||
                             backgroundColor.toLowerCase() === '#000'
                           ));

  // Auto-select label and arrow classes based on background
  const labelClass = isDarkBackground ? 'prowl-label-white' : 'prowl-label';
  const arrowClass = isDarkBackground ? 'prowl-arrow-white' : 'prowl-arrow';

  // Card styling with consistent padding and height
  const cardClasses = `${isHexColor ? '' : backgroundColor} p-4 md:p-6 pb-16 flex flex-col justify-center ${className}`;
  
  const cardStyle: React.CSSProperties = {
    minHeight: '200px',
    position: 'relative',
    ...(isHexColor && { backgroundColor }),
    ...(isDarkBackground && { color: '#ffffff' })
  };

  return (
    <BaseCard 
      className={cardClasses}
      style={cardStyle}
      cardNumber={cardNumber}
      href={href}
    >
      {/* Label - positioned like other cards */}
      {label && (
        <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 ${labelClass}`}>
          {label}
        </div>
      )}

      {/* Main content area with consistent spacing */}
      <div className="space-y-2 text-center mt-8 mb-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={item.className || 'font-light'}
            style={{
              fontSize: item.fontSize || '32px',
              color: isDarkBackground ? '#ffffff' : (item.color || 'inherit'),
              fontFamily: '"Helvetica Neue", sans-serif'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Arrow - positioned like other cards */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <span className={arrowClass}>→</span>
        </div>
      )}
    </BaseCard>
  );
}