import React from 'react';
import { Link } from 'react-router-dom';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Tool Button */}
        <a
          href={getPhoneCallUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-[7px] bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] active:from-[#0F172A] active:to-[#020617] text-slate-100 text-xs font-bold border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="font-gujarati text-[11px]">કૉલ કરો</span>
        </a>

        {/* WhatsApp Tool Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-[7px] bg-gradient-to-b from-[#22C55E] via-[#128C7E] to-[#0F766E] active:from-[#0F766E] active:to-[#064E3B] text-white text-xs font-bold border-t border-t-[#BBF7D0]/80 border-x border-x-[#128C7E] border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
        >
          <MessageCircle className="w-4 h-4 text-white mb-1" />
          <span className="font-sans text-[11px]">WhatsApp</span>
        </a>

        {/* Book Now Forged Orange Button */}
        <Link
          to="/booking"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-[7px] bg-gradient-to-b from-[#FB923C] via-[#F97316] to-[#EA580C] active:from-[#EA580C] active:to-[#C2410C] text-white text-xs font-bold border-t border-t-[#FFEDD5]/80 border-x border-x-[#EA580C] border-b-2 border-b-[#9A3412] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.2)] transition-all active:translate-y-[1px]"
        >
          <CalendarCheck className="w-4 h-4 mb-1" />
          <span className="font-gujarati text-[11px]">Booking કરો</span>
        </Link>
      </div>
    </div>
  );
}
