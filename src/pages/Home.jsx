import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { saveNewBooking } from '../data/mockBookings';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import {
  Wrench,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Car,
  Droplets,
  Settings,
  Sparkles,
  FileText,
  ChevronRight,
  Paintbrush,
  Check
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  // Quick Booking Form State
  const [quickForm, setQuickForm] = useState({
    customerName: '',
    mobile: '',
    carModel: '',
    serviceName: 'Car Service (રેગ્યુલર કાર સર્વિસ)',
    preferredDate: '',
    preferredTime: 'સવારે ૧૦:૦૦',
    problemNote: ''
  });
  const [formError, setFormError] = useState('');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickForm.customerName.trim()) {
      setFormError('કૃપા કરીને તમારું નામ લખો.');
      return;
    }
    if (!quickForm.mobile.trim() || quickForm.mobile.length < 10) {
      setFormError('કૃપા કરીને માન્ય ૧૦ આંકડાનો મોબાઈલ નંબર લખો.');
      return;
    }
    if (!quickForm.carModel.trim()) {
      setFormError('કૃપા કરીને તમારી ગાડીનું મોડેલ લખો (દા.ત. Swift, WagonR, i20, Dzire).');
      return;
    }

    setFormError('');
    const newBooking = saveNewBooking({
      customerName: quickForm.customerName,
      mobile: quickForm.mobile,
      carModel: quickForm.carModel,
      carBrand: '',
      carNumber: 'Quick Booking',
      serviceName: quickForm.serviceName,
      date: quickForm.preferredDate || 'શક્ય તેટલું વહેલું',
      time: quickForm.preferredTime,
      problemNote: quickForm.problemNote
    });

    navigate('/booking-success', { state: { booking: newBooking } });
  };

  // 4 Featured Real Work Showcase Cards
  const featuredWorks = [
    {
      id: "car-service",
      title: "Car Service",
      subtitle: "Regular service અને general checkup",
      desc: "Engine oil change, filters, brake checkup અને complete general service જેથી ગાડી સ્મૂથ ચાલે.",
      icon: Wrench,
      image: "/images/services/car-service.jpg",
      points: ["ઓરિજિનલ એન્જિન ઓઇલ & ફિલ્ટર", "બ્રેક પેડ્સ ક્લિનિંગ", "કુલન્ટ & બેટરી ચેક"],
      slug: "car-service"
    },
    {
      id: "car-repair",
      title: "Car Repair",
      subtitle: "ગાડીમાં કોઈ problem હોય તો check કરીને repair",
      desc: "એન્જિનમાંથી અવાજ આવતો હોય, ક્લચ હાર્ડ હોય કે સ્ટાર્ટિંગ પ્રોબ્લેમ હોય — પહેલા problem સમજીએ, પછી repair.",
      icon: Settings,
      image: "/images/services/car-repair.jpg",
      points: ["એન્જિન & ક્લચ કામ", "વાયરિંગ & સ્ટાર્ટર ફોલ્ટ", "સસ્પેન્શન & બ્રેક રીપેરીંગ"],
      slug: "car-repair"
    },
    {
      id: "car-washing",
      title: "Car Washing",
      subtitle: "ગાડીની proper સફાઈ અને washing",
      desc: "હાઈ-પ્રેશર વોશિંગ, ફોમ ક્લિનિંગ, અંડરબોડી વોશ અને ઇન્ટીરિયર વેક્યૂમ સાથે ગાડી ચોખ્ખી ચણક.",
      icon: Droplets,
      image: "/images/services/car-washing.jpg",
      points: ["પ્રેશર ફોમ વોશિંગ", "અંડરચેસીસ સફાઈ", "ઇન્ટીરિયર વેક્યૂમ"],
      slug: "car-washing"
    },
    {
      id: "denting-painting",
      title: "Denting & Painting",
      subtitle: "Dent, scratch અને body paint નું કામ",
      desc: "દરવાજા કે બમ્પર પર ડેન્ટ પડ્યો હોય કે સ્ક્રેચ પડી ગયો હોય — સરસ ડેન્ટિંગ અને કલર મેચિંગ સાથે પાકું કામ.",
      icon: Paintbrush,
      image: "/images/services/denting-painting.jpg",
      points: ["પ્રિસિઝન ડેન્ટિંગ", "સ્ક્રેચ રિમૂવલ", "ફેક્ટરી કલર મેચિંગ"],
      slug: "denting-painting"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">

      {/* 1. HERO SECTION */}
      <section className="relative bg-garage-dark text-white overflow-hidden hero-pattern pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">

        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] lg:w-[550px] h-[200px] sm:h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">

              {/* Trust Badge Tag */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-[11px] sm:text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-garage-orange animate-ping" />
                <span className="font-gujarati">વઢવાણ & સુરેન્દ્રનગરનું વિશ્વાસુ લોકલ ગેરેજ</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-gujarati tracking-tight leading-snug sm:leading-tight">
                ગાડીનું કામ છે? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                  ચિંતા ના કરો - અમે છીએ ને, થઈ જશે!
                </span>
              </h1>

              {/* Conversational Gujarati Subtitle */}
              <p className="text-xs sm:text-base lg:text-lg text-slate-300 font-gujarati leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {garageConfig.tagline} <br className="hidden sm:inline" />
                <span className="text-amber-400 font-semibold block sm:inline mt-1 sm:mt-0">"કામ સરસ, રેટ reasonable, અને વાત clear."</span>
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
                <Button
                  to="/booking"
                  variant="orange"
                  size="lg"
                  icon={CalendarCheck}
                  className="font-gujarati w-full sm:w-auto"
                >
                  Booking કરો
                </Button>

                <Button
                  to="/services"
                  variant="silver"
                  size="lg"
                  icon={Wrench}
                  className="font-gujarati w-full sm:w-auto"
                >
                  Services જુઓ
                </Button>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-4 sm:pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-sm text-slate-300 font-gujarati font-medium">Honest Estimate</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-sm text-slate-300 font-gujarati font-medium">Skilled Mechanic</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-sm text-slate-300 font-gujarati font-medium">Time પર Update</span>
                </div>
              </div>

            </div>

            {/* Right Quick Booking Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-xl border border-slate-200/80 text-slate-800 relative">

                {/* Header */}
                <div className="border-b border-slate-100 pb-3.5 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-gujarati">
                    ગાડી ક્યારે લાવવાની છે?
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati mt-0.5">
                    ઓનલાઇન સમય બુક કરો — કોઈ એડવાન્સ ચાર્જ નથી
                  </p>
                </div>

                {formError && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-gujarati font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    {formError}
                  </div>
                )}

                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-gujarati mb-1">
                      તમારું નામ (Name) *
                    </label>
                    <input
                      type="text"
                      placeholder="દા.ત. રાજેશભાઈ પટેલ"
                      value={quickForm.customerName}
                      onChange={(e) => setQuickForm({ ...quickForm, customerName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-gujarati transition-colors"
                      required
                    />
                  </div>

                  {/* Mobile & Car Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 font-gujarati mb-1">
                        મોબાઈલ નંબર *
                      </label>
                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        maxLength="10"
                        value={quickForm.mobile}
                        onChange={(e) => setQuickForm({ ...quickForm, mobile: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-sans transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 font-gujarati mb-1">
                        ગાડી મોડેલ *
                      </label>
                      <input
                        type="text"
                        placeholder="Swift, WagonR, i20..."
                        value={quickForm.carModel}
                        onChange={(e) => setQuickForm({ ...quickForm, carModel: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-gujarati transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Type Select */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-gujarati mb-1">
                      કઈ સર્વિસ કરાવવી છે?
                    </label>
                    <select
                      value={quickForm.serviceName}
                      onChange={(e) => setQuickForm({ ...quickForm, serviceName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-gujarati bg-white transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={`${s.title} (${s.gujaratiTitle})`}>
                          {s.title} — {s.gujaratiTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Problem Note */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-gujarati mb-1">
                      કોઈ ખાસ પ્રોબ્લેમ? (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="દા.ત. AC ઓછું ઠંડુ થાય છે, બ્રેક અવાજ કરે છે..."
                      value={quickForm.problemNote}
                      onChange={(e) => setQuickForm({ ...quickForm, problemNote: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-gujarati transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="orange"
                    size="lg"
                    fullWidth
                    className="mt-2 font-gujarati font-semibold text-sm sm:text-base shadow-sm"
                  >
                    Booking Confirm કરો
                  </Button>

                  <p className="text-[11px] text-center text-slate-500 font-gujarati pt-1">
                    બુકિંગ સબમિટ કર્યા પછી અમારી ટીમ તમને કન્ફર્મેશન માટે કૉલ/WhatsApp કરશે.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL GARAGE WORK SHOWCASE ("આપણે કયા કામ કરીએ છીએ?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="અમારે ત્યાં આ બધું કામ થાય છે"
          title="ગાડીનું જે કામ હોય, અમારે ત્યાં થઈ જાય."
          subtitle="Service હોય, repair હોય કે washing — ગાડી જોઈને જે કામ જરૂરી હોય એ પ્રમાણે કરી આપીએ."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work) => {
            const Icon = work.icon;
            return (
              <div
                key={work.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/services/car-repair.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-garage-blue text-white flex items-center justify-center shadow-md shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-white font-bold text-base sm:text-lg font-gujarati">
                        {work.title}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs bg-slate-900/85 backdrop-blur-md text-slate-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-gujarati">
                      {work.subtitle}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed mb-3 sm:mb-4">
                      {work.desc}
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-100">
                      {work.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-gujarati text-slate-700">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2 sm:gap-3">
                    <Link
                      to={`/services/${work.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-800 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#E2E8F0] hover:from-[#FFFFFF] hover:to-[#CBD5E1] px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-[7px] border-t border-t-[#FFFFFF] border-x border-x-[#E2E8F0] border-b-2 border-b-[#CBD5E1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-150 font-gujarati active:translate-y-[1px]"
                    >
                      <span>વિગત જુઓ</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    </Link>
                    <Link
                      to={`/booking?service=${work.slug}`}
                      className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-[7px] border-t border-t-[#BFDBFE]/80 border-x border-x-[#2563EB] border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.18)] transition-all duration-150 font-gujarati active:translate-y-[1px]"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Booking કરો</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Button
            to="/services"
            variant="silver"
            size="lg"
            icon={Wrench}
            className="font-gujarati shadow-md w-full sm:w-auto"
          >
            બધી Services જુઓ →
          </Button>
        </div>
      </section>

      {/* 3. PROCESS SECTION: "કામ કરવાની અમારી રીત — સીધું અને simple" */}
      <section className="bg-slate-900 text-white py-10 sm:py-16 lg:py-20 rounded-2xl sm:rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl">
        <SectionTitle
          dark
          badge="કામ કરવાની રીત"
          title="કામ કરવાની અમારી રીત — સીધું અને simple"
          subtitle="ગાડીનું નાનું કામ હોય કે મોટું, કોઈ વધારાની ગૂંચવણ વગર સરળ ૪ સ્ટેપમાં કામ થાય છે."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">

          {/* Step 01 */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <span className="text-5xl font-black text-slate-700/40 absolute -right-2 -top-2 select-none font-sans">
              01
            </span>
            <div className="w-12 h-12 rounded-xl bg-blue-900/50 text-blue-400 flex items-center justify-center mb-4 font-bold text-lg border border-blue-700/50">
              1
            </div>
            <h3 className="font-bold text-white text-lg mb-2 font-gujarati">01. ગાડી જુઓ (ગાડી check)</h3>
            <p className="text-sm text-slate-300 font-gujarati leading-relaxed">
              ગાડીમાં actual problem શું છે એ અમારા મિકેનિક પહેલા સરખી રીતે check કરે.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
            <span className="text-5xl font-black text-slate-700/40 absolute -right-2 -top-2 select-none font-sans">
              02
            </span>
            <div className="w-12 h-12 rounded-xl bg-orange-900/50 text-garage-orange flex items-center justify-center mb-4 font-bold text-lg border border-orange-700/50">
              2
            </div>
            <h3 className="font-bold text-white text-lg mb-2 font-gujarati">02. તમને સમજાવીએ</h3>
            <p className="text-sm text-slate-300 font-gujarati leading-relaxed">
              શું કામ કરવાનું છે અને કેમ કરવાનું છે એ તમને clear વાત કરીને estimate જણાવીએ.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <span className="text-5xl font-black text-slate-700/40 absolute -right-2 -top-2 select-none font-sans">
              03
            </span>
            <div className="w-12 h-12 rounded-xl bg-purple-900/50 text-purple-400 flex items-center justify-center mb-4 font-bold text-lg border border-purple-700/50">
              3
            </div>
            <h3 className="font-bold text-white text-lg mb-2 font-gujarati">03. કામ શરૂ</h3>
            <p className="text-sm text-slate-300 font-gujarati leading-relaxed">
              તમારી permission પછી જ જે કામ જરૂરી હોય એ શરૂ કરવામાં આવે.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <span className="text-5xl font-black text-slate-700/40 absolute -right-2 -top-2 select-none font-sans">
              04
            </span>
            <div className="w-12 h-12 rounded-xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center mb-4 font-bold text-lg border border-emerald-700/50">
              4
            </div>
            <h3 className="font-bold text-white text-lg mb-2 font-gujarati">04. ગાડી Ready</h3>
            <p className="text-sm text-slate-300 font-gujarati leading-relaxed">
              કામ પૂરું થયા પછી final check કરીને તમને ગાડી સોંપવામાં આવે.
            </p>
          </div>

        </div>
      </section>

      {/* 4. ALL SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="બધી સર્વિસિસ"
          title="અમારી મુખ્ય કાર સેવાઓ"
          subtitle="વોશિંગ, રેગ્યુલર સર્વિસ, એન્જિન રીપેર, AC સર્વિસ, ડેન્ટિંગ અને પેઇન્ટિંગ."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <SectionTitle
            badge="વિશ્વાસનું કારણ"
            title="અમારી પાસે ગાડી કેમ આપવી?"
            subtitle="અમે કોઈ ફેન્સી શોરૂમ નથી. અમારો નિયમ સાદો છે: સાચું કામ અને સાચી વાત."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-garage-blue flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">પહેલા સમજીએ, પછી repair</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                Problem check કર્યા વગર સીધું કામ શરૂ ન કરવું. શું બદલવું પડશે અને શું રીપેર થશે એ તમને સમજાવીએ છીએ.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-garage-orange flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">Estimate clear</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                કામ શરૂ કરતા પહેલા શક્ય ખર્ચ સમજાવવો. કોઈ બિનજરૂરી પાર્ટ્સ બદલવાની સલાહ નહીં.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">Local અને trusted</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                વઢવાણ અને સુરેન્દ્રનગરના ગ્રાહકો માટે સરળ અને સીધી service.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">Update મળતું રહે</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                કામ ક્યાં સુધી પહોંચ્યું એની નિયમિત માહિતી તમને WhatsApp અથવા ફોન પર સીધી મળતી રહેશે.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-garage-blue flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">એક જ જગ્યાએ બધું</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                Washing, regular service, engine repair, AC કામ, denting અને painting — બધું જ એક છત નીચે.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 font-gujarati">સમયની કદર</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed">
                Customer ને શક્ય હોય ત્યાં સુધી સાચો અને realistic delivery time આપવો જેથી સમય ન બગડે.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROMOTIONAL COMBO BANNER */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-garage-dark via-slate-900 to-blue-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 sm:space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-garage-orange text-white uppercase tracking-wider inline-block">
                સર્વિસ + વોશિંગ કોમ્બો
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-gujarati leading-snug sm:leading-tight">
                Service સાથે Car Washing કરાવશો?
              </h2>
              <p className="text-slate-300 font-gujarati text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
                એક જ visit માં ગાડીનું complete service + washing કરાવી લો. સમય પણ બચે અને ગાડી અંદર-બહારથી એકદમ સરસ થઈ જાય.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 justify-center">
              <Button
                to="/booking"
                variant="orange"
                size="lg"
                icon={CalendarCheck}
                className="font-gujarati font-bold text-center justify-center w-full"
              >
                Booking કરો
              </Button>
              <a
                href={getWhatsAppUrl("કેમ છો, મારે સર્વિસ અને વોશિંગ કોમ્બો બુક કરાવવું છે.")}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] active:bg-[#054C44] text-white px-5 py-2.5 rounded-[7px] font-bold text-xs sm:text-sm border-t border-t-[#BBF7D0]/80 border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp પર પૂછો</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionTitle
          badge="ગ્રાહકોનો અવાજ"
          title="વઢવાણ અને સુરેન્દ્રનગરના લોકો શું કહે છે?"
          subtitle="સ્થાનિક ગાડી માલિકોનો સાચો અનુભવ."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-soft flex flex-col justify-between hover:shadow-card-hover transition-all">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-1 font-sans">{item.rating}.0</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-gujarati italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-gujarati truncate">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-gujarati flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-garage-blue bg-blue-50 px-2 py-0.5 rounded-md block whitespace-nowrap">
                    {item.serviceUsed}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block whitespace-nowrap">{item.car}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CONTACT & LOCATION SUMMARY */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center">

            <div>
              <span className="text-xs font-bold text-garage-orange uppercase tracking-wider font-gujarati">
                સીધો સંપર્ક
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-gujarati mt-1">
                આજે જ ગાડી બતાવી જાઓ
              </h3>
              <p className="text-xs text-slate-600 font-gujarati mt-1">
                {garageConfig.openingHours.weekdays}
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm font-gujarati text-slate-700">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-garage-orange shrink-0" />
                <span>{garageConfig.address}, {garageConfig.city} ({garageConfig.district})</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-garage-blue shrink-0" />
                <span className="font-sans font-bold text-slate-900">{garageConfig.phone}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 justify-center">
              <a
                href={getPhoneCallUrl()}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-100 px-4 py-2.5 rounded-[7px] text-xs font-bold font-gujarati border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>કૉલ કરો ({garageConfig.phone})</span>
              </a>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#E2E8F0] hover:from-[#FFFFFF] text-slate-800 px-4 py-2.5 rounded-[7px] text-xs font-bold font-gujarati border-t border-t-[#FFFFFF] border-b-2 border-b-[#CBD5E1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.08)] transition-all active:translate-y-[1px]"
              >
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>લોકેશન & મેપ જુઓ</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
