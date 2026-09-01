import React, { useState } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { garageConfig, getWhatsAppUrl, getPhoneCallUrl } from '../data/config';
import Button from '../components/Button';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Car, 
  Wrench, 
  Copy, 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Home, 
  Phone, 
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function BookingSuccess() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  
  // Fallback demo booking if user navigated directly
  const booking = location.state?.booking || {
    bookingId: "SM-1024",
    customerName: "રાજેશભાઈ પટેલ",
    mobile: "9033972706",
    car: "Maruti Swift",
    service: "જનરલ કાર સર્વિસ + વોશિંગ",
    date: "૧૨ સપ્ટેમ્બર ૨૦૨૬",
    time: "સવારે ૧૦:૩૦ વાગ્યે"
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(booking.bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppMsg = `કેમ છો શક્તિ મોટર્સ, મારી બુકિંગ થઈ ગઈ છે. Booking ID: ${booking.bookingId}, ગાડી: ${booking.car}, સર્વિસ: ${booking.service}.`;

  return (
    <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-16">
      
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 lg:p-12 border border-slate-200 shadow-xl text-center space-y-6 sm:space-y-8 animate-fadeIn">
        
        {/* Big Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        {/* Heading */}
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider font-gujarati inline-block mb-3">
            બુકિંગ સફળ (Booking Confirmed)
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-gujarati">
            Booking થઈ ગઈ 👍
          </h1>
          <p className="text-slate-600 font-gujarati text-sm sm:text-base mt-2 max-w-lg mx-auto">
            તમારી બુકિંગ સફળતાપૂર્વક નોંધાઈ ગઈ છે. અમારી ટીમ તમને કન્ફર્મેશન માટે થોડી વારમાં કૉલ અથવા WhatsApp કરશે.
          </p>
        </div>

        {/* Booking ID Highlight Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-inner max-w-md mx-auto relative overflow-hidden">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-gujarati block">
            તમારો બુકિંગ આઈડી (BOOKING ID)
          </span>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-wider font-sans">
              {booking.bookingId}
            </span>
            <button
              onClick={handleCopyId}
              className="p-2 rounded-[7px] bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-200 border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-xs transition-colors active:translate-y-[1px]"
              title="Copy Booking ID"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-emerald-400 font-gujarati">
              ✓ ID કોપી થઈ ગયો!
            </p>
          )}
          <p className="text-[11px] text-slate-400 font-gujarati mt-1">
            કોઈપણ પૂછપરછ વખતે આ Booking ID જણાવવો.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left max-w-md mx-auto space-y-3 font-gujarati text-xs sm:text-sm">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="text-slate-500">ગ્રાહકનું નામ:</span>
            <strong className="text-slate-900">{booking.customerName}</strong>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="text-slate-500">ગાડી મોડેલ:</span>
            <strong className="text-slate-900">{booking.car}</strong>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="text-slate-500">સર્વિસ:</span>
            <strong className="text-garage-blue">{booking.service}</strong>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="text-slate-500">તારીખ & સમય:</span>
            <strong className="text-slate-900">{booking.date} ({booking.time})</strong>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          
          <a
            href={getWhatsAppUrl(whatsAppMsg)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] via-[#128C7E] to-[#0F766E] hover:from-[#4ADE80] text-white px-5 py-2.5 rounded-[7px] font-bold text-sm border-t border-t-[#BBF7D0]/80 border-x border-x-[#128C7E] border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp પર મોકલો</span>
          </a>

          <a
            href={getPhoneCallUrl()}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-white px-5 py-2.5 rounded-[7px] font-bold text-sm border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>કૉલ કરો</span>
          </a>

        </div>

        {/* Return Home Link */}
        <div className="pt-4">
          <Button
            to="/"
            variant="silver"
            size="md"
            icon={ArrowLeft}
            className="font-gujarati shadow-sm"
          >
            હોમ પેજ પર પાછા જાઓ
          </Button>
        </div>

      </div>

    </div>
  );
}
