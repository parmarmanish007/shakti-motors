import React from 'react';
import { Link } from 'react-router-dom';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
import { services } from '../data/services';
import {
  Wrench,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  HeartHandshake,
  ChevronRight,
  Sparkles,
  Navigation
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-garage-darker text-slate-400 pt-12 sm:pt-16 pb-28 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">

        {/* Top Trust Banner */}
        <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-8 border border-slate-800 mb-8 sm:mb-12 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 border border-blue-700/50">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold font-gujarati text-sm sm:text-base">પહેલા ચેકઅપ, પછી કામ</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-gujarati">કોઈ પણ વધારાનો ખોટો ખર્ચો નહીં.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-900/50 text-garage-orange flex items-center justify-center shrink-0 border border-orange-700/50">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold font-gujarati text-sm sm:text-base">વાજબી & પ્રામાણિક ભાવ</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-gujarati">100% ઓરિજિનલ પાર્ટ્સ & ક્લિયર એસ્ટીમેટ.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-700/50">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold font-gujarati text-sm sm:text-base">સમયસર સર્વિસ ડિલિવરી</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-gujarati">લાઇવ સ્ટેટસ અપડેટ અને ક્વિક સપોર્ટ.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">

          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-garage-blue flex items-center justify-center text-white shadow-glow-blue">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-gujarati block">
                  {garageConfig.name}
                </span>
                <span className="text-[10px] text-slate-400 font-sans tracking-wider block">
                  SHAKTI MOTORS GARAGE
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-gujarati leading-relaxed">
              "આપણા એરિયાનું વિશ્વાસુ ગેરેજ — કામ સરસ, રેટ reasonable, અને વાત clear. અહીં ગાડીનું કામ સમજાવીને થાય છે."
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp પર વાત કરો</span>
              </a>
              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>કૉલ કરો: {garageConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 font-gujarati">
              Quick Links (ઝડપી લિંક્સ)
            </h3>
            <ul className="space-y-2.5 text-sm font-gujarati">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home (મુખ્ય પેજ)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>બધી Services</span>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-garage-orange hover:text-orange-400 font-semibold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-garage-orange" />
                  <span>Online Booking કરો</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>ગેરેજ વિશે (About Us)</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>સંપર્ક અને લોકેશન</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 font-gujarati">
              અમારી Services
            </h3>
            <ul className="space-y-2 text-sm font-gujarati">
              {services.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-xs font-semibold text-blue-400 hover:underline inline-block pt-1">
                  બધી ૯ સર્વિસિસ જુઓ →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Timings */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 font-gujarati">
              વર્કશોપ સરનામું & સમય
            </h3>
            <div className="space-y-3.5 text-xs text-slate-300 font-gujarati">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-garage-orange shrink-0 mt-0.5" />
                <span>{garageConfig.fullAddress}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{garageConfig.openingHours.weekdays}</p>
                  <p className="text-slate-400">{garageConfig.openingHours.sunday}</p>
                </div>
              </div>

              {/* Small Square Real Map Preview */}
              <div className="pt-2">
                <div className="relative w-full aspect-square max-w-[210px] rounded-xl overflow-hidden border border-slate-700/90 shadow-md group bg-slate-900">
                  <iframe
                    title="Shakti Motors Wadhwan Google Map"
                    src="https://maps.google.com/maps?q=22.7207681,71.6781722&hl=gu&z=15&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Quick Map Link overlay */}
                  <a
                    href={garageConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-center gap-1.5 bg-slate-950/90 hover:bg-[#2563EB] text-white py-1.5 px-2 rounded-lg text-[11px] font-bold font-gujarati border border-slate-700 backdrop-blur-xs transition-colors shadow-sm"
                  >
                    <Navigation className="w-3 h-3 text-garage-orange" />
                    <span>મેપ પર દિશા જુઓ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="font-gujarati text-center sm:text-left">
            © 2026 {garageConfig.name} ({garageConfig.nameEn}). All rights reserved.
          </p>
          <p className="font-gujarati text-slate-400 text-center">
            તમારું પોતાનું વિશ્વસનીય લોકલ ઓટોમોબાઇલ ગેરેજ.
          </p>
        </div>

      </div>
    </footer>
  );
}
