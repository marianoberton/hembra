import React from 'react';
import Link from 'next/link';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  cardNumber?: number;
}

export default function BaseCard({ 
  children, 
  className = '', 
  href, 
  onClick, 
  style,
  cardNumber 
}: BaseCardProps) {
  const baseClasses = "relative rounded-xl overflow-hidden block";
  const combinedClasses = `${baseClasses} ${className}`;

  const cardContent = (
    <>
      {cardNumber && (
        <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-medium z-20 bg-black bg-opacity-20 text-white">
          {cardNumber}
        </div>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} style={style}>
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div className={`${combinedClasses} cursor-pointer`} onClick={onClick} style={style}>
        {cardContent}
      </div>
    );
  }

  return (
    <div className={combinedClasses} style={style}>
      {cardContent}
    </div>
  );
}