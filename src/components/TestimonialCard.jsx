import React from 'react';
import { Star, MapPin, Car, CheckCircle2, Quote } from 'lucide-react';

export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 relative">
      <Quote className="absolute right-5 top-5 w-8 h-8 text-slate-100 -z-0" />
      
      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-bold text-slate-500 ml-1">
            {item.rating}.0
          </span>
        </div>

        {/* Gujarati Review Text */}
        <p className="text-slate-700 text-sm leading-relaxed mb-6 font-gujarati italic">
          "{item.comment}"
        </p>
      </div>

      {/* Author & Car Info */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-garage-blue to-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
            {item.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-slate-900 font-gujarati">
                {item.name}
              </h4>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="વેરિફાઈડ કસ્ટમર" />
            </div>
            <p className="text-xs text-slate-500 font-gujarati flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {item.location}
            </p>
          </div>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-[11px] font-semibold text-garage-blue bg-blue-50 px-2 py-0.5 rounded-md block">
            {item.serviceUsed}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block flex items-center justify-end gap-1">
            <Car className="w-3 h-3" />
            {item.car}
          </span>
        </div>
      </div>
    </div>
  );
}
