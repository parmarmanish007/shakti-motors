import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Wrench, 
  Settings, 
  Snowflake, 
  Zap, 
  Activity, 
  Paintbrush, 
  Palette, 
  ShieldAlert,
  ChevronRight,
  Clock,
  CalendarCheck
} from 'lucide-react';

const iconMap = {
  Droplets,
  Wrench,
  Settings,
  Snowflake,
  Zap,
  Activity,
  Paintbrush,
  Palette,
  ShieldAlert
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Wrench;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200/60">
            <IconComponent className="w-5 h-5 text-blue-600" />
          </div>
          {service.badge && (
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 font-gujarati">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 mb-1 hover:text-blue-600 transition-colors">
          <Link to={`/services/${service.slug}`}>
            {service.title}
          </Link>
        </h3>
        
        {/* Gujarati sub-headline */}
        <p className="text-xs font-medium text-slate-500 mb-2.5 font-gujarati">
          {service.gujaratiTitle}
        </p>

        {/* Conversational Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 font-gujarati">
          {service.shortDesc}
        </p>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-3.5 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5 font-gujarati">
          <span className="font-semibold text-slate-800">
            {service.startingPrice}
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {service.estimatedTime}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center justify-center text-xs font-bold text-slate-800 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#E2E8F0] hover:from-[#FFFFFF] hover:to-[#CBD5E1] py-2 px-3 rounded-[7px] border-t border-t-[#FFFFFF] border-x border-x-[#E2E8F0] border-b-2 border-b-[#CBD5E1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-150 active:translate-y-[1px] gap-1 font-gujarati"
          >
            <span>વિગત જુઓ</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          </Link>
          <Link
            to={`/booking?service=${service.slug}`}
            className="inline-flex items-center justify-center text-xs font-bold text-white bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] hover:via-[#3B82F6] hover:to-[#1D4ED8] py-2 px-3 rounded-[7px] border-t border-t-[#BFDBFE]/80 border-x border-x-[#2563EB] border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.18)] transition-all duration-150 active:translate-y-[1px] gap-1 font-gujarati"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Booking</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
