import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { garageConfig, getPhoneCallUrl } from '../data/config';
import { 
  Menu, 
  X, 
  Phone, 
  CalendarCheck, 
  Wrench, 
  Compass, 
  Info, 
  PhoneCall, 
  Activity,
  ShieldCheck
} from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll for sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home (હોમ)', path: '/' },
    { name: 'Services (સર્વિસિસ)', path: '/services' },
    { name: 'About (અમારા વિશે)', path: '/about' },
    { name: 'Contact (સંપર્ક)', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-garage-dark/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
        : 'bg-garage-dark border-b border-slate-800'
    }`}>
      {/* Top micro bar for quick business info */}
      <div className="hidden lg:block bg-garage-darker text-slate-400 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-gujarati">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {garageConfig.openingHours.weekdays}
            </span>
            <span className="text-slate-400">
              📍 {garageConfig.address}, {garageConfig.city}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-amber-400 font-medium">
              ⭐ 100% પ્રામાણિક ભાવ & ઓરિજિનલ પાર્ટ્સ
            </span>
            <a href={getPhoneCallUrl()} className="hover:text-white transition-colors flex items-center gap-1 font-sans">
              <Phone className="w-3 h-3 text-garage-orange" />
              {garageConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-gujarati">
                  {garageConfig.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400 font-sans tracking-wide">
                  WADHWAN
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-gujarati">
                લોકલ કાર સર્વિસ & રીપેરીંગ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative font-gujarati ${
                    isActive
                      ? 'text-white bg-slate-800/80 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`
                }
              >
                {({ isActive }) => (
                  <span>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getPhoneCallUrl()}
              className="inline-flex items-center gap-2 text-slate-100 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] hover:via-[#334155] hover:to-[#1E293B] border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] text-xs font-bold py-2 px-3.5 rounded-[7px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-150 active:translate-y-[1px]"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-sans font-bold">{garageConfig.phone}</span>
            </a>

            <Button
              to="/booking"
              variant="orange"
              size="md"
              icon={CalendarCheck}
              className="font-gujarati"
            >
              Booking કરો
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#FB923C] via-[#F97316] to-[#EA580C] text-white text-xs font-bold px-3 py-1.5 rounded-[7px] border-t border-t-[#FFEDD5]/80 border-b-2 border-b-[#9A3412] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.18)] font-gujarati active:translate-y-[1px]"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Booking</span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-[7px] bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] text-slate-200 flex items-center justify-center hover:text-white border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-xs transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-garage-dark border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 mb-4 font-gujarati text-xs text-slate-300 flex items-center justify-between">
            <span>📍 {garageConfig.city} (નેક્સા શોરૂમ સામે)</span>
            <span className="text-emerald-400 font-semibold">ઓપન છે</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium font-gujarati transition-colors ${
                    isActive
                      ? 'bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] text-white font-bold border-t border-t-[#BFDBFE]/80 border-b-2 border-b-[#1E3A8A] shadow-xs'
                      : 'text-slate-200 hover:bg-slate-800/80'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={getPhoneCallUrl()}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-100 hover:text-white py-2.5 px-3 rounded-[7px] text-xs font-bold border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>કૉલ કરો</span>
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FB923C] via-[#F97316] to-[#EA580C] hover:from-[#FDBA74] text-white py-2.5 px-3 rounded-[7px] text-xs font-bold border-t border-t-[#FFEDD5]/80 border-b-2 border-b-[#9A3412] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.18)] font-gujarati transition-all active:translate-y-[1px]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Booking કરો</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
