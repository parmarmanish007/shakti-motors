import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Professional Automotive Mechanic Wrench / Spanner Inspired Button System
 * Visual style: Forged Chrome-Vanadium steel, beveled tool edges, specular light reflection,
 * tactile industrial depth, tactile active press state.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  // Forged Tool Precision Base Styling (Chamfered tool edges, mechanical proportion, tactile feedback)
  const baseStyles = 'group relative inline-flex items-center justify-center font-medium rounded-[7px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none text-center cursor-pointer overflow-hidden tracking-tight';

  // Wrench & Spanner Chrome/Forged Steel Palette
  const variants = {
    // Primary Orange Tool CTA (#F97316) — Baked automotive safety enamel in forged steel chassis
    orange: 'bg-gradient-to-b from-[#FB923C] via-[#F97316] to-[#EA580C] hover:from-[#FDBA74] hover:via-[#FB923C] hover:to-[#EA580C] text-white font-bold border-t border-t-[#FFEDD5]/80 border-x border-x-[#EA580C] border-b-2 border-b-[#9A3412] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.18)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_4px_10px_rgba(249,115,22,0.3)] active:translate-y-[1px] active:from-[#EA580C] active:to-[#C2410C] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:ring-[#F97316] focus:ring-offset-slate-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]',
    
    // Pure Chrome Vanadium Silver Tool (Direct Spanner/Wrench Reference Style)
    silver: 'bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#CBD5E1] hover:from-[#FFFFFF] hover:via-[#F1F5F9] hover:to-[#CBD5E1] text-slate-800 font-bold border-t border-t-[#FFFFFF] border-x border-x-[#CBD5E1] border-b-2 border-b-[#94A3B8] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95),inset_0_-2px_2px_rgba(100,116,139,0.35),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_2px_rgba(100,116,139,0.45),0_4px_8px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:from-[#CBD5E1] active:to-[#94A3B8] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] focus:ring-slate-400 focus:ring-offset-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]',

    // Gunmetal / Dark Tool Steel (For dark hero & dark footer sections)
    outlineDark: 'bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] hover:via-[#334155] hover:to-[#1E293B] text-slate-100 font-semibold border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-2px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.6),0_4px_8px_rgba(0,0,0,0.4)] active:translate-y-[1px] active:from-[#0F172A] active:to-[#020617] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:ring-slate-500 focus:ring-offset-slate-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]',

    // Light Tool Steel Outline (For light card sections)
    outline: 'bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] hover:from-[#FFFFFF] hover:via-[#F1F5F9] hover:to-[#E2E8F0] text-slate-800 font-bold border-t border-t-[#FFFFFF] border-x border-x-[#E2E8F0] border-b-2 border-b-[#CBD5E1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1.5px_2px_rgba(148,163,184,0.25),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1.5px_2px_rgba(148,163,184,0.35),0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-[1px] active:from-[#E2E8F0] active:to-[#CBD5E1] active:shadow-[inset_0_2px_3px_rgba(0,0,0,0.2)] focus:ring-slate-400 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]',

    // Precision Blue Tool (#2563EB) — Technician precision cobalt tool
    primary: 'bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] hover:via-[#3B82F6] hover:to-[#1D4ED8] text-white font-bold border-t border-t-[#BFDBFE]/80 border-x border-x-[#2563EB] border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.18)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.35),0_4px_10px_rgba(37,99,235,0.3)] active:translate-y-[1px] active:from-[#1D4ED8] active:to-[#1E40AF] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:ring-[#2563EB] focus:ring-offset-slate-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]',

    // Heavy-Duty Industrial Charcoal (#111827)
    secondary: 'bg-gradient-to-b from-[#1F2937] via-[#111827] to-[#030712] hover:from-[#374151] hover:via-[#1F2937] hover:to-[#111827] text-slate-100 font-bold border-t border-t-[#4B5563] border-x border-x-[#1F2937] border-b-2 border-b-[#000000] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-2px_3px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.35)] active:translate-y-[1px] active:from-[#030712] active:to-[#000000] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] focus:ring-slate-500 focus:ring-offset-slate-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]',

    // Workshop WhatsApp Tool
    whatsapp: 'bg-gradient-to-b from-[#22C55E] via-[#128C7E] to-[#0F766E] hover:from-[#4ADE80] hover:via-[#16A34A] hover:to-[#0F766E] text-white font-bold border-t border-t-[#BBF7D0]/80 border-x border-x-[#128C7E] border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:from-[#0F766E] active:to-[#064E3B] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:ring-[#128C7E] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]',

    // Direct Phone Tool
    phone: 'bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] hover:via-[#334155] hover:to-[#1E293B] text-slate-100 font-bold border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-2px_2px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[1px] focus:ring-slate-500'
  };

  // Structured Tool Sizes (Strong horizontal proportions, compact height)
  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-sm sm:text-base px-6 py-2.5 sm:px-7 sm:py-3 gap-2 font-bold',
    xl: 'text-base sm:text-lg px-8 py-3 sm:px-9 sm:py-3.5 gap-2.5 font-extrabold'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none grayscale' : '';
  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthStyle} ${disabledStyle} ${className}`;

  const content = (
    <>
      {/* Specular Light Catch Highlight Line */}
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:scale-110 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={props.target || '_self'} rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
