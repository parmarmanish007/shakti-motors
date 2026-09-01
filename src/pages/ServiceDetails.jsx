import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import { garageConfig, getWhatsAppUrl, getPhoneCallUrl } from '../data/config';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { 
  Wrench, 
  CalendarCheck, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-garage-orange flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-gujarati text-slate-900 mb-2">
          સર્વિસ મળી નથી
        </h2>
        <p className="text-sm text-slate-600 font-gujarati mb-6">
          તમે જે સર્વિસ પેજ શોધી રહ્યા છો તે ઉપલબ્ધ નથી અથવા લિંક બદલાઈ ગઈ છે.
        </p>
        <Button to="/services" variant="primary">
          બધી સર્વિસિસ જુઓ
        </Button>
      </div>
    );
  }

  // Related other services
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Breadcrumb & Top Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-gujarati text-slate-500">
            <Link to="/" className="hover:text-garage-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-garage-blue transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Service Content */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Header Area */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                {service.badge && (
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-orange-100 text-garage-orange">
                    {service.badge}
                  </span>
                )}
                <span className="text-xs text-slate-500 font-gujarati">
                  શક્તિ મોટર્સ એક્સપર્ટ સર્વિસ
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-gujarati mb-2">
                {service.title}
              </h1>
              
              <p className="text-sm sm:text-base text-garage-blue font-bold font-gujarati">
                {service.gujaratiTitle}
              </p>
            </div>

            {/* Hero Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-soft bg-slate-900 relative">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/services/car-repair.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-white text-[11px] sm:text-xs font-gujarati items-start">
                <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                  ⏱️ અંદાજિત સમય: <strong>{service.estimatedTime}</strong>
                </span>
                <span className="bg-garage-orange px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-bold">
                  💰 {service.startingPrice}
                </span>
              </div>
            </div>

            {/* Overview Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-soft space-y-2.5 sm:space-y-3">
              <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-garage-orange" />
                સર્વિસ વિશે પરિચય
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-gujarati leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Problems Covered */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                ગાડીમાં કેવા પ્રોબ્લેમ હોય ત્યારે આ સર્વિસ જરૂરી છે?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.problemsCovered.map((prob, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs sm:text-sm text-slate-800 font-gujarati">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Works */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                આ સર્વિસમાં શું-શું કામ કરવામાં આવે છે?
              </h3>

              <div className="space-y-2.5">
                {service.includedWorks.map((work, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-gujarati text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{work}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Important Note */}
            {service.whyImportant && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-3 text-blue-900">
                <ShieldCheck className="w-6 h-6 text-garage-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm font-gujarati mb-1">આ કામ કેમ મહત્વનું છે?</h4>
                  <p className="text-xs sm:text-sm font-gujarati text-blue-800">
                    {service.whyImportant}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Booking Widget & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Booking Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft sticky top-28 space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-garage-orange">
                  Quick Action
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-gujarati mt-1">
                  આ સર્વિસ બુક કરો
                </h3>
                <p className="text-xs text-slate-500 font-gujarati mt-1">
                  તમારી અનુકૂળ તારીખ અને સમય પસંદ કરો.
                </p>
              </div>

              {/* Price & Time Summary */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl text-xs font-gujarati">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">અંદાજિત ભાવ:</span>
                  <strong className="text-slate-900 text-sm font-sans">{service.startingPrice}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">અપેક્ષિત સમય:</span>
                  <strong className="text-slate-900">{service.estimatedTime}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">પાર્ટ્સ ગુણવત્તા:</span>
                  <strong className="text-emerald-700">100% Genuine</strong>
                </div>
              </div>

              {/* Primary Booking Button */}
              <Button
                to={`/booking?service=${service.slug}`}
                variant="orange"
                size="lg"
                fullWidth
                icon={CalendarCheck}
                className="font-gujarati font-bold text-base"
              >
                આ Service માટે Booking કરો
              </Button>

              {/* WhatsApp Quick Chat */}
              <a
                href={getWhatsAppUrl(`કેમ છો, મારે ${service.title} બાબતે પૂછવું છે.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] via-[#128C7E] to-[#0F766E] hover:from-[#4ADE80] text-white py-2.5 px-4 rounded-[7px] text-sm font-bold border-t border-t-[#BBF7D0]/80 border-x border-x-[#128C7E] border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp પર પૂછપરછ કરો</span>
              </a>

              {/* Phone Direct */}
              <a
                href={getPhoneCallUrl()}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-white py-2.5 px-4 rounded-[7px] text-sm font-bold border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>ફોન પર વાત કરો</span>
              </a>

              {/* Small trust point */}
              <div className="pt-2 text-center text-[11px] text-slate-500 font-gujarati border-t border-slate-100">
                ✓ પહેલા સ્પષ્ટ એસ્ટીમેટ • પૂછ્યા વગર કોઈ વધારાનું કામ નહીં
              </div>
            </div>

          </div>

        </div>

        {/* Related Other Services */}
        <div className="pt-16 border-t border-slate-200 mt-16">
          <SectionTitle
            badge="અન્ય સેવાઓ"
            title="બીજી સંબંધિત સર્વિસિસ"
            subtitle="તમારી ગાડી માટે અન્ય જરૂરી મેન્ટેનન્સ અને રીપેરીંગ વર્ક."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
