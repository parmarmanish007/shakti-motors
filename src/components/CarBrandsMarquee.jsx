import React from 'react';
import { Link } from 'react-router-dom';
import { CAR_BRANDS } from '../data/carBrands';
import CarBrandIcon from './CarBrandIcon';

export default function CarBrandsMarquee({
  className = ""
}) {
  // Duplicated list for seamless, continuous infinite loop animation
  const duplicatedBrands = [...CAR_BRANDS, ...CAR_BRANDS];

  return (
    <div className={`w-full overflow-hidden border-t border-[#1E293B] bg-[#0B1220] py-3.5 sm:py-4 px-4 sm:px-6 ${className}`}>

      {/* Continuous Infinite Moving Row — 100% Fully Visible with 24px padding & 24px gap */}
      <div className="flex items-center">
        <div className="flex items-center gap-6 animate-marquee select-none py-1 px-4 sm:px-6">
          {duplicatedBrands.map((brand, idx) => (
            <Link
              key={`marquee-${brand.id}-${idx}`}
              to={`/booking?service=car-service`}
              className="group shrink-0 flex items-center gap-3 px-4 py-2 rounded-xl border border-[#1F2937] bg-[#111827] hover:bg-[#1E293B] hover:border-orange-500/80 transition-all duration-200 hover:scale-105 shadow-sm"
            >
              {/* Brand Vector Emblem */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <CarBrandIcon brandId={brand.id} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              </div>

              {/* Brand Name */}
              <div className="flex items-center whitespace-nowrap">
                <span className="font-bold text-xs sm:text-sm font-sans tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  {brand.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
