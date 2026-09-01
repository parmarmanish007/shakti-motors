import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ''
}) {
  return (
    <div className={`mb-10 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          dark
            ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
            : 'bg-blue-50 text-garage-blue border border-blue-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-garage-orange"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 font-gujarati break-words ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-gujarati ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
