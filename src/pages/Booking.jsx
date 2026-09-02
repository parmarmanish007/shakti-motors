import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { saveNewBooking } from '../data/mockBookings';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
import { sendBookingToGoogleSheets } from '../utils/googleSheets';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import {
  User,
  Phone,
  Car,
  Wrench,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  Check,
  CalendarCheck,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Sparkles,
  RotateCcw,
  Home as HomeIcon,
  Navigation,
  CheckCircle
} from 'lucide-react';

const POPULAR_BRANDS = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Honda",
  "Mahindra",
  "Toyota",
  "Kia",
  "Volkswagen",
  "Skoda",
  "Renault",
  "Nissan",
  "MG",
  "Jeep",
  "Citroen",
  "Fiat",
  "Ford",
  "Isuzu",
  "BYD",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volvo",
  "Jaguar",
  "Land Rover",
  "Lexus",
  "Porsche",
  "Mini",
  "Mitsubishi",
  "Datsun",
  "Chevrolet",
  "Other (અન્ય)"
];

const FUEL_TYPES = [
  "પેટ્રોલ (Petrol)",
  "CNG + પેટ્રોલ",
  "ડીઝલ (Diesel)",
  "ઇલેક્ટ્રિક (EV)"
];

const TIME_SLOTS = [
  "સવારે ૦૯:૦૦ થી ૧૧:૦૦ (Morning)",
  "બપોરે ૧૧:૦૦ થી ૦૨:૦૦ (Afternoon)",
  "બપોરે ૦૨:૦૦ થી ૦૫:૦૦ (Post Afternoon)",
  "સાંજે ૦૫:૦૦ થી ૦૭:૩૦ (Evening)"
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preSelectedServiceSlug = searchParams.get('service');

  const [step, setStep] = useState(1); // 1: Customer, 2: Car, 3: Service, 4: Summary
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    whatsapp: '',
    sameAsMobile: true,
    carBrand: 'Maruti Suzuki',
    carModel: '',
    carNumber: '',
    fuelType: 'પેટ્રોલ (Petrol)',
    serviceSlug: preSelectedServiceSlug || 'car-service',
    serviceName: '',
    preferredDate: '',
    preferredTime: TIME_SLOTS[0],
    problemNote: ''
  });

  // Set default service name on init
  useEffect(() => {
    const srv = services.find(s => s.slug === formData.serviceSlug) || services[1];
    setFormData(prev => ({
      ...prev,
      serviceSlug: srv.slug,
      serviceName: `${srv.title} (${srv.gujaratiTitle})`
    }));
  }, [formData.serviceSlug]);

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.customerName.trim()) {
        newErrors.customerName = 'કૃપા કરીને તમારું નામ લખો.';
      }
      if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) {
        newErrors.mobile = 'માન્ય ૧૦ આંકડાનો મોબાઈલ નંબર લખો.';
      }
    }

    if (currentStep === 2) {
      if (!formData.carBrand) {
        newErrors.carBrand = 'ગાડીની કંપની સિલેક્ટ કરો.';
      }
      if (!formData.carModel.trim()) {
        newErrors.carModel = 'ગાડીનું મોડેલ લખો (દા.ત. Swift, i20, Nexon).';
      }
    }

    if (currentStep === 3) {
      if (!formData.preferredDate) {
        newErrors.preferredDate = 'કઈ તારીખે ગાડી લાવવી છે તે પસંદ કરો.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleConfirmBooking = async () => {
    // Validate all steps before finalizing
    if (!validateStep(1)) {
      setStep(1);
      return;
    }
    if (!validateStep(2)) {
      setStep(2);
      return;
    }
    if (!validateStep(3)) {
      setStep(3);
      return;
    }

    setIsSubmitting(true);

    const bookingPayload = {
      customerName: formData.customerName,
      mobile: formData.mobile,
      whatsapp: formData.sameAsMobile ? formData.mobile : formData.whatsapp,
      carBrand: formData.carBrand || 'Maruti Suzuki',
      carModel: formData.carModel || '',
      carNumber: formData.carNumber || '',
      fuelType: formData.fuelType || 'પેટ્રોલ (Petrol)',
      serviceName: formData.serviceName || 'જનરલ કાર સર્વિસ',
      date: formData.preferredDate,
      time: formData.preferredTime,
      problemNote: formData.problemNote
    };

    const createdBooking = saveNewBooking(bookingPayload);

    const completeBooking = {
      ...bookingPayload,
      ...createdBooking,
      carBrand: formData.carBrand || 'Maruti Suzuki',
      carModel: formData.carModel || '',
      carNumber: formData.carNumber || '',
      serviceName: formData.serviceName || 'જનરલ કાર સર્વિસ'
    };

    // Send asynchronously to Google Sheets
    await sendBookingToGoogleSheets({ ...completeBooking });

    setIsSubmitting(false);
    setConfirmedBooking(completeBooking);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetForm = () => {
    setConfirmedBooking(null);
    setStep(1);
    setFormData({
      customerName: '',
      mobile: '',
      whatsapp: '',
      sameAsMobile: true,
      carBrand: 'Maruti Suzuki',
      carModel: '',
      carNumber: '',
      fuelType: 'પેટ્રોલ (Petrol)',
      serviceSlug: 'car-service',
      serviceName: 'જનરલ કાર સર્વિસ',
      preferredDate: '',
      preferredTime: TIME_SLOTS[0],
      problemNote: ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // =========================================================================
  // SUCCESS VIEW: Rendered IN-PLACE on same page (No URL redirect)
  // =========================================================================
  if (confirmedBooking) {
    const whatsappText = `નમસ્તે શક્તિ મોટર્સ,\nમેં ઓનલાઇન કાર સર્વિસ બુક કરી છે:\n• Booking ID: #${confirmedBooking.bookingId}\n• નામ: ${confirmedBooking.customerName}\n• ગાડી: ${confirmedBooking.carBrand} ${confirmedBooking.carModel}\n• તારીખ: ${confirmedBooking.date}\n• સમય: ${confirmedBooking.time}\n• સર્વિસ: ${confirmedBooking.serviceName}`;

    return (
      <div className="space-y-8 sm:space-y-12 pb-16 pt-4 animate-fadeIn">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Main Success Container */}
          <div className="bg-white rounded-3xl border border-emerald-200 shadow-xl overflow-hidden text-center">

            {/* Top Celebratory Header */}
            <div className="bg-gradient-to-b from-emerald-600 to-teal-700 text-white p-6 sm:p-10 relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/40 shadow-inner">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold font-gujarati tracking-wider mb-2">
                Booking કન્ફર્મ થયું છે 🎉
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-gujarati">
                તમારી અપોઇન્ટમેન્ટ બુક થઈ ગઈ છે!
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm font-gujarati max-w-md mx-auto mt-2">
                શક્તિ મોટર્સ તરફથી તમારી વિગતો નોંધાઈ ગઈ છે. અમારા મિકેનિક ટૂંક સમયમાં તમને કૉલ કરશે.
              </p>
            </div>

            {/* Booking Details Card Body */}
            <div className="p-5 sm:p-8 space-y-6 text-left font-gujarati">

              {/* Summary Grid */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/80 space-y-3.5 text-xs sm:text-sm">
                {/* Booking ID Header Badge */}
                <div className="flex items-center justify-between bg-emerald-50/90 border border-emerald-200/80 rounded-xl px-4 py-2.5 mb-3.5">
                  <span className="text-xs font-bold text-emerald-800 font-gujarati flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Booking ID:
                  </span>
                  <strong className="text-sm sm:text-base font-black text-emerald-950 font-sans tracking-wide">
                    #{confirmedBooking.bookingId}
                  </strong>
                </div>

                <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Car className="w-4 h-4 text-garage-orange" />
                  <span>બુકિંગની સંપૂર્ણ વિગતો</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[11px]">ગ્રાહકનું નામ:</span>
                    <strong className="text-slate-900 text-sm">
                      {confirmedBooking.customerName || formData.customerName}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">મોબાઈલ નંબર:</span>
                    <strong className="text-slate-900 font-sans text-sm">
                      {confirmedBooking.mobile || formData.mobile}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">ગાડીનું મોડેલ:</span>
                    <strong className="text-slate-900 text-sm">
                      {confirmedBooking.carBrand || formData.carBrand} {confirmedBooking.carModel || formData.carModel || ''}
                    </strong>
                    {(confirmedBooking.carNumber || formData.carNumber) && (
                      <span className="text-slate-500 font-sans block text-[11px]">
                        ({confirmedBooking.carNumber || formData.carNumber})
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">પસંદ કરેલ સર્વિસ:</span>
                    <strong className="text-garage-blue text-sm">
                      {confirmedBooking.serviceName || confirmedBooking.service || formData.serviceName || 'જનરલ કાર સર્વિસ'}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">અપોઇન્ટમેન્ટ તારીખ:</span>
                    <strong className="text-slate-900 text-sm">
                      {confirmedBooking.date || formData.preferredDate}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">સમય સ્લોટ:</span>
                    <strong className="text-slate-900 text-sm">
                      {confirmedBooking.time || formData.preferredTime}
                    </strong>
                  </div>
                </div>

                {(confirmedBooking.problemNote || formData.problemNote) && (
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-slate-400 block text-[11px]">ખાસ સમસ્યા / નોટ:</span>
                    <p className="text-slate-700 italic mt-0.5">
                      "{confirmedBooking.problemNote || formData.problemNote}"
                    </p>
                  </div>
                )}
              </div>

              {/* What happens next instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 text-xs text-blue-900 space-y-2">
                <h4 className="font-bold text-sm flex items-center gap-1.5 text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>હવે પછી શું થશે?</span>
                </h4>
                <ul className="space-y-1.5 text-blue-800 list-disc list-inside">
                  <li>અમારી ટીમ તમને કન્ફર્મેશન માટે કૉલ અથવા WhatsApp મેસેજ કરશે.</li>
                  <li>નક્કી કરેલા સમયે ગાડી લઈને વર્કશોપ પર પધારો: <strong>નેક્સા શોરૂમ સામે, રોડ, ફેઝ ૨, કોઠારિયા, વઢવાણ</strong>.</li>
                  <li>તમારી હાજરીમાં ગાડી ચેક કરીને જ કામ શરૂ કરવામાં આવશે.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] via-[#16A34A] to-[#15803D] hover:from-[#4ADE80] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:translate-y-[1px] text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp પર વિગત મેળવો</span>
                </a>

                <a
                  href={getPhoneCallUrl()}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-100 font-bold py-3 px-4 rounded-xl border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-sm transition-all active:translate-y-[1px] text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>ગેરેજ પર કૉલ કરો ({garageConfig.phone})</span>
                </a>
              </div>

              {/* Secondary Navigation */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-200 text-xs gap-3">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-garage-blue hover:underline font-bold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>બીજું નવું Booking કરો</span>
                </button>

                <Link
                  to="/"
                  className="text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1.5"
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  <span>હોમ પેજ પર પાછા જાઓ</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // BOOKING FORM VIEW (Step 1 to 4)
  // =========================================================================
  return (
    <div className="space-y-12 pb-16">

      {/* Page Header */}
      <section className="bg-garage-dark text-white py-10 sm:py-12 px-3.5 sm:px-6 lg:px-8 border-b border-slate-800 hero-pattern">
        <div className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-3">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase tracking-wider font-gujarati inline-block">
            ઓનલાઇન એપોઇન્ટમેન્ટ
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-gujarati text-white">
            ગાડી સર્વિસ માટે Booking કરો
          </h1>
          <p className="text-slate-300 font-gujarati text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            માત્ર ૧ મિનિટમાં ફોર્મ ભરો. અમે તમને કૉલ કરીને કન્ફર્મ કરીશું.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">

        {/* Step Wizard Progress Bar with Connected Track */}
        <div className="mb-8 sm:mb-10 px-2 sm:px-4">
          <div className="relative">
            {/* Background Track Line */}
            <div className="absolute top-4 sm:top-5 left-4 right-4 -translate-y-1/2 h-1 bg-slate-200 z-0 rounded-full" />

            {/* Active Progress Track Line */}
            <div
              className="absolute top-4 sm:top-5 left-4 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-garage-orange rounded-full transition-all duration-500 ease-out z-0"
              style={{
                width: `${((step - 1) / 3) * 100}%`,
                maxWidth: 'calc(100% - 2rem)'
              }}
            />

            {/* 4 Step Nodes */}
            <div className="flex justify-between items-start relative z-10">
              {[
                { num: 1, title: 'ગ્રાહક વિગત', sub: 'Customer' },
                { num: 2, title: 'ગાડી વિગત', sub: 'Car Info' },
                { num: 3, title: 'સર્વિસ & તારીખ', sub: 'Service' },
                { num: 4, title: 'કન્ફર્મ કરો', sub: 'Confirm' }
              ].map((st) => {
                const isCompleted = step > st.num;
                const isCurrent = step === st.num;
                const isClickable = st.num < step;

                return (
                  <div
                    key={st.num}
                    onClick={() => isClickable && setStep(st.num)}
                    className={`flex flex-col items-center select-none ${isClickable ? 'cursor-pointer group' : ''}`}
                  >
                    {/* Circle Badge */}
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ring-4 ${isCompleted
                        ? 'bg-emerald-600 text-white ring-emerald-100 shadow-md scale-100'
                        : isCurrent
                          ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white ring-blue-100 shadow-lg scale-110'
                          : 'bg-white text-slate-400 border-2 border-slate-300 ring-slate-50'
                        }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                      ) : (
                        <span>{st.num}</span>
                      )}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`font-gujarati text-[11px] sm:text-xs text-center mt-2 transition-colors max-w-[70px] sm:max-w-none leading-tight ${isCurrent
                        ? 'text-blue-700 font-extrabold'
                        : isCompleted
                          ? 'text-slate-800 font-bold group-hover:text-blue-600'
                          : 'text-slate-400 font-medium'
                        }`}
                    >
                      {st.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Multi-step Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-soft">

          <div className="space-y-6">

            {/* STEP 1: CUSTOMER DETAILS */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati">
                    પગલું ૧: તમારી સંપર્ક માહિતી
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati mt-0.5">
                    જેથી અમે તમારો સંપર્ક કરી શકીએ.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      તમારું પૂરું નામ *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="દા.ત. રમેશભાઈ પટેલ"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border font-gujarati focus:outline-none focus:ring-2 ${errors.customerName ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-garage-blue'
                          }`}
                      />
                    </div>
                    {errors.customerName && (
                      <p className="text-red-500 text-[11px] font-gujarati mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.customerName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      મોબાઈલ નંબર * (કૉલ માટે)
                    </label>
                    <input
                      type="tel"
                      placeholder="98XXXXXXXX"
                      maxLength="10"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border font-sans focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-garage-blue'
                        }`}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-[11px] font-gujarati mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.sameAsMobile}
                        onChange={(e) => setFormData({ ...formData, sameAsMobile: e.target.checked })}
                        className="w-4 h-4 rounded text-garage-blue focus:ring-garage-blue"
                      />
                      <span className="text-xs text-slate-700 font-gujarati font-medium">
                        આ જ નંબર પર WhatsApp ચાલુ છે
                      </span>
                    </label>
                  </div>

                  {!formData.sameAsMobile && (
                    <div className="animate-fadeIn">
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                        WhatsApp નંબર
                      </label>
                      <input
                        type="tel"
                        placeholder="WhatsApp નંબર લખો"
                        maxLength="10"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '') })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: CAR DETAILS */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati">
                    પગલું ૨: તમારી ગાડીની વિગતો
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati mt-0.5">
                    જેથી અમે જરૂરી પાર્ટ્સ અને ટૂલ્સ અગાઉથી તૈયાર રાખી શકીએ.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      ગાડીની કંપની (Brand) *
                    </label>
                    <select
                      value={formData.carBrand}
                      onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans bg-white"
                    >
                      {POPULAR_BRANDS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      ગાડીનું મોડેલ (Car Model) *
                    </label>
                    <input
                      type="text"
                      placeholder="દા.ત. Swift VXI, i20 Magna, WagonR, Nexon"
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border font-sans focus:outline-none focus:ring-2 ${errors.carModel ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-garage-blue'
                        }`}
                    />
                    {errors.carModel && (
                      <p className="text-red-500 text-[11px] font-gujarati mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.carModel}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      ગાડી નંબર (ઓપ્શનલ)
                    </label>
                    <input
                      type="text"
                      placeholder="GJ-13-XX-XXXX"
                      value={formData.carNumber}
                      onChange={(e) => setFormData({ ...formData, carNumber: e.target.value.toUpperCase() })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      ફ્યુઅલ પ્રકાર (Fuel Type)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {FUEL_TYPES.map((f) => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setFormData({ ...formData, fuelType: f })}
                          className={`p-2.5 rounded-xl border text-xs font-gujarati text-center transition-all ${formData.fuelType === f
                            ? 'bg-blue-50 border-garage-blue text-garage-blue font-bold shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: SERVICE & DATE */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati">
                    પગલું ૩: કઈ સર્વિસ કરાવવી છે અને ક્યારે?
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati mt-0.5">
                    સર્વિસનો પ્રકાર અને અનુકૂળ સમય પસંદ કરો.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      પસંદ કરેલ સર્વિસ *
                    </label>
                    <select
                      value={formData.serviceSlug}
                      onChange={(e) => {
                        const s = services.find(x => x.slug === e.target.value);
                        setFormData({
                          ...formData,
                          serviceSlug: e.target.value,
                          serviceName: s ? `${s.title} (${s.gujaratiTitle})` : 'જનરલ કાર સર્વિસ'
                        });
                      }}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                    >
                      {services.map((srv) => (
                        <option key={srv.slug} value={srv.slug}>
                          {srv.title} — {srv.gujaratiTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                        પસંદગીની તારીખ *
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border font-sans focus:outline-none focus:ring-2 ${errors.preferredDate ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-garage-blue'
                          }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-red-500 text-[11px] font-gujarati mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                        અનુકૂળ સમય સ્લોટ *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                      ગાડીમાં કોઈ ખાસ અવાજ કે સમસ્યા છે? (ઓપ્શનલ)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="દા.ત. બ્રેકમાંથી અવાજ આવે છે, AC ઓછું ઠંડુ કરે છે, ગાડી ખેંચાય છે..."
                      value={formData.problemNote}
                      onChange={(e) => setFormData({ ...formData, problemNote: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: SUMMARY & CONFIRMATION */}
            {step === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati">
                    પગલું ૪: તમારી વિગતો ચકાસો
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati mt-0.5">
                    બધી વિગતો બરાબર છે? Confirm બટન દબાવો.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3 font-gujarati text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">ગ્રાહકનું નામ:</span>
                    <strong className="text-slate-900">{formData.customerName}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">મોબાઈલ નંબર:</span>
                    <strong className="text-slate-900 font-sans">{formData.mobile}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">ગાડી & મોડેલ:</span>
                    <strong className="text-slate-900">{formData.carBrand} {formData.carModel} ({formData.fuelType})</strong>
                  </div>

                  {formData.carNumber && (
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500">ગાડી નંબર:</span>
                      <strong className="text-slate-900 font-sans">{formData.carNumber}</strong>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">પસંદ કરેલ સર્વિસ:</span>
                    <strong className="text-garage-blue">{formData.serviceName}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">તારીખ અને સમય:</span>
                    <strong className="text-slate-900">{formData.preferredDate} ({formData.preferredTime})</strong>
                  </div>

                  {formData.problemNote && (
                    <div className="pt-1 text-slate-600">
                      <span className="text-slate-500 block mb-0.5">ખાસ નોટ / પ્રોબ્લેમ:</span>
                      <p className="italic bg-white p-2.5 rounded-lg border border-slate-200">
                        "{formData.problemNote}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs font-gujarati text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-garage-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">પ્રામાણિક સેવા બાંહેધરી:</p>
                    <p className="text-blue-800 mt-0.5">
                      ગાડી લાવ્યા પછી અમારા હેડ મિકેનિક સંપૂર્ણ ચેકઅપ કરીને સ્પષ્ટ અંદાજ જણાવશે.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
              {step > 1 ? (
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="silver"
                  size="md"
                  icon={ArrowLeft}
                  className="font-gujarati w-full sm:w-auto"
                >
                  પાછળ જાઓ
                </Button>
              ) : (
                <div className="hidden sm:block" />
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="font-gujarati font-bold px-6 w-full sm:w-auto"
                >
                  આગળ વધો
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleConfirmBooking}
                  variant="orange"
                  size="lg"
                  disabled={isSubmitting}
                  icon={Check}
                  className="font-gujarati font-bold text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto"
                >
                  {isSubmitting ? 'Booking થઈ રહ્યું છે...' : 'Booking Confirm કરો'}
                </Button>
              )}
            </div>

          </div>

        </div>

        {/* Need Help Box */}
        <div className="mt-8 text-center text-xs font-gujarati text-slate-600">
          <span>ઓનલાઇન ફોર્મ ભરવામાં મુશ્કેલી છે? સીધો કૉલ કરો: </span>
          <a href={getPhoneCallUrl()} className="font-bold text-garage-blue hover:underline font-sans">
            {garageConfig.phone}
          </a>
        </div>

      </div>

    </div>
  );
}
