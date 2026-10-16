import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-forest-500 mb-3 px-3 py-1 rounded-full bg-forest/10 border border-forest/15">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight ${dark ? 'text-warm-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-warm-kraft/80' : 'text-charcoal-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
