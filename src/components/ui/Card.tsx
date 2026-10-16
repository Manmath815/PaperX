import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'surface' | 'paper' | 'dark' | 'glass';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  hoverEffect = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variantStyles = {
    surface: 'bg-warm-white border border-warm-beige shadow-paper',
    paper: 'bg-warm border border-warm-beige/80 shadow-paper',
    dark: 'bg-charcoal text-warm-white border border-charcoal-600 shadow-paper-lg',
    glass: 'bg-warm-white/80 backdrop-blur-md border border-warm-beige/60 shadow-paper',
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-paper-lg hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
