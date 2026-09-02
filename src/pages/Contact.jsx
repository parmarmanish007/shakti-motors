import React, { useState } from 'react';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
import { sendInquiryToGoogleSheets } from '../utils/googleSheets';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  CalendarCheck
} from 'lucide-react';

export default function Contact() {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    mobile: '',
    phone: '',
    car: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendInquiryToGoogleSheets(inquiryForm);
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">

      {/* Header Banner */}
      <section className="bg-garage-dark text-white py-10 sm:py-14 px-3.5 sm:px-6 lg:px-8 border-b border-slate-800 relative hero-pattern">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase tracking-wider font-gujarati inline-block">
            સંપર્ક & લોકેશન
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-gujarati text-white">
            અમારો સંપર્ક કરો
          </h1>
          <p className="text-slate-300 font-gujarati max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            કોઈપણ પૂછપરછ હોય, અંદાજ મેળવવો હોય કે વર્કશોપનું લોકેશન જોઈતું હોય — સીધો કૉલ અથવા WhatsApp કરો.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-soft flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-garage-blue flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 font-gujarati">
                  ફોન નંબર
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans truncate">
                  {garageConfig.phone}
                </h4>
                <p className="text-xs text-slate-500 font-gujarati">
                  કોઈપણ સમયે કૉલ કરીને સલાહ મેળવી શકો છો.
                </p>
                <div className="pt-1.5">
                  <a
                    href={getPhoneCallUrl()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-garage-blue hover:underline font-gujarati"
                  >
                    હમણાં કૉલ કરો →
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-soft flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                  WHATSAPP CHAT
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans truncate">
                  {garageConfig.whatsapp}
                </h4>
                <p className="text-xs text-slate-500 font-gujarati">
                  ગાડીના ડેન્ટ કે પ્રોબ્લેમનો ફોટો મોકલીને અંદાજ મેળવો.
                </p>
                <div className="pt-1.5">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:underline font-gujarati"
                  >
                    WhatsApp પર મેસેજ કરો →
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Address Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-soft flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 text-garage-orange flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 font-gujarati">
                  વર્કશોપ સરનામું
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-gujarati leading-relaxed">
                  {garageConfig.fullAddress}
                </h4>
                <div className="pt-2">
                  <a
                    href={garageConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold font-gujarati transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-garage-orange" />
                    <span>Google Maps પર દિશા જુઓ</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-soft flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1 font-gujarati min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  કામ કરવાનો સમય
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {garageConfig.openingHours.weekdays}
                </h4>
                <p className="text-xs text-slate-500">
                  {garageConfig.openingHours.sunday}
                </p>
              </div>
            </div>

          </div>

          {/* Right: Quick Inquiry Form & Map Mock (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-soft">
              <div className="border-b border-slate-100 pb-3.5 sm:pb-4 mb-4 sm:mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-garage-blue bg-blue-50 px-2.5 py-0.5 rounded-full font-gujarati">
                  સંદેશો મોકલો
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-gujarati mt-1.5">
                  કોઈ સવાલ કે પૂછપરછ હોય તો જણાવો
                </h3>
                <p className="text-xs text-slate-500 font-gujarati mt-1">
                  અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 sm:p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base sm:text-lg font-bold font-gujarati text-emerald-900">
                    તમારો મેસેજ મળી ગયો છે 👍
                  </h4>
                  <p className="text-xs text-emerald-700 font-gujarati">
                    અમે તમને થોડી જ વારમાં કૉલ અથવા WhatsApp પર જવાબ આપીશું.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-800 underline font-gujarati pt-2"
                  >
                    બીજો મેસેજ મોકલો
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1 sm:mb-1.5">
                        તમારું નામ *
                      </label>
                      <input
                        type="text"
                        placeholder="નિતીનભાઈ પરમાર"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1 sm:mb-1.5">
                        મોબાઈલ નંબર *
                      </label>
                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        maxLength="10"
                        value={inquiryForm.mobile}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, mobile: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1 sm:mb-1.5">
                      તમારી ગાડીનું મોડેલ (દા.ત. Swift, i20, Nexon)
                    </label>
                    <input
                      type="text"
                      placeholder="Maruti Swift VXI"
                      value={inquiryForm.car}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, car: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1 sm:mb-1.5">
                      તમારો મેસેજ અથવા સવાલ
                    </label>
                    <textarea
                      rows="3"
                      placeholder="ગાડીમાં શું કામ કરાવવું છે તે લખો..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 sm:p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={Send}
                    className="font-gujarati font-bold text-sm sm:text-base"
                  >
                    મેસેજ મોકલો
                  </Button>
                </form>
              )}
            </div>

            {/* Google Map Mock Location Visual */}
            <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-800 relative overflow-hidden space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs font-bold text-garage-orange uppercase tracking-wider font-gujarati">
                    ગૂગલ મેપ્સ લોકેશન (4.9 ★ 33 Reviews)
                  </span>
                  <h4 className="text-xs sm:text-base font-bold text-white font-gujarati mt-0.5 truncate">
                    શોપ નં. ૧, નેક્સા શોરૂમ સામે, ફેઝ ૨, કોઠારિયા, વઢવાણ
                  </h4>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-800 text-garage-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Real Interactive Google Map */}
              <div className="aspect-[16/8] rounded-2xl bg-slate-800 border border-slate-700 relative overflow-hidden shadow-inner">
                <iframe
                  title="Shakti Motors Workshop Location Google Maps"
                  src="https://maps.google.com/maps?q=22.7207681,71.6781722&hl=gu&z=15&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="pt-1.5 sm:pt-2 text-center">
                <a
                  href={garageConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-[7px] text-xs font-bold font-gujarati border-t border-t-[#BFDBFE]/80 border-x border-x-[#2563EB] border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps પર નેવિગેશન ચાલુ કરો</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
