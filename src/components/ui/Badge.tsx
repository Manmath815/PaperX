import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'leaf' | 'neutral' | 'kraft' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const base = 'inline-flex items-center font-medium rounded-full';
  
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  const variants = {
    green: 'bg-forest/10 text-forest border border-forest/20',
    leaf: 'bg-leaf/20 text-forest-900 border border-leaf/30 font-semibold',
    neutral: 'bg-charcoal/5 text-charcoal border border-charcoal/10',
    kraft: 'bg-warm-kraft/30 text-forest-900 border border-warm-kraft/40',
    outline: 'border border-charcoal/20 text-charcoal-500',
  };

  return (
    <span className={`${base} ${sizeStyles[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
