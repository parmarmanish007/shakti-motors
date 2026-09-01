import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { saveNewBooking } from '../data/mockBookings';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
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
  ShieldCheck
} from 'lucide-react';

const POPULAR_BRANDS = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Honda",
  "Mahindra",
  "Toyota",
  "Kia",
  "Volkswagen / Skoda",
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
  const navigate = useNavigate();
  const preSelectedServiceSlug = searchParams.get('service');

  const [step, setStep] = useState(1); // 1: Customer, 2: Car, 3: Service, 4: Summary
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setStep(3);
      return;
    }

    const createdBooking = saveNewBooking({
      customerName: formData.customerName,
      mobile: formData.mobile,
      whatsapp: formData.sameAsMobile ? formData.mobile : formData.whatsapp,
      carBrand: formData.carBrand,
      carModel: formData.carModel,
      carNumber: formData.carNumber || 'GJ-XX-XXXX',
      fuelType: formData.fuelType,
      serviceName: formData.serviceName,
      date: formData.preferredDate,
      time: formData.preferredTime,
      problemNote: formData.problemNote
    });

    navigate('/booking-success', { state: { booking: createdBooking } });
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="bg-garage-dark text-white py-10 sm:py-12 px-3.5 sm:px-6 lg:px-8 border-b border-slate-800 hero-pattern">
        <div className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-3">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-orange-500/20 text-garage-orange border border-orange-500/30 uppercase tracking-wider font-gujarati inline-block">
            Online Booking Form
          </span>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-gujarati text-white">
            ગાડી સર્વિસ / રીપેરીંગ Booking
          </h1>
          <p className="text-slate-300 font-gujarati text-xs sm:text-base max-w-xl mx-auto">
            માત્ર ૨ મિનિટમાં બુકિંગ કરો. તમારી અનુકૂળતા મુજબ તારીખ અને સમય પસંદ કરો.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Step Indicator */}
        <div className="bg-white rounded-2xl p-3 sm:p-6 border border-slate-200 shadow-soft mb-6 sm:mb-8">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center font-gujarati text-[11px] sm:text-xs">
            
            {/* Step 1 Pill */}
            <div className={`flex flex-col items-center gap-1 ${step >= 1 ? 'text-garage-blue font-bold' : 'text-slate-400'}`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step > 1 ? 'bg-emerald-600 text-white' : step === 1 ? 'bg-garage-blue text-white shadow-glow-blue' : 'bg-slate-100 text-slate-400'
              }`}>
                {step > 1 ? '✓' : '1'}
              </div>
              <span className="hidden sm:inline">1. ગ્રાહકની વિગત</span>
              <span className="sm:hidden">ગ્રાહક</span>
            </div>

            {/* Step 2 Pill */}
            <div className={`flex flex-col items-center gap-1 ${step >= 2 ? 'text-garage-blue font-bold' : 'text-slate-400'}`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step > 2 ? 'bg-emerald-600 text-white' : step === 2 ? 'bg-garage-blue text-white shadow-glow-blue' : 'bg-slate-100 text-slate-400'
              }`}>
                {step > 2 ? '✓' : '2'}
              </div>
              <span className="hidden sm:inline">2. ગાડીની વિગત</span>
              <span className="sm:hidden">ગાડી</span>
            </div>

            {/* Step 3 Pill */}
            <div className={`flex flex-col items-center gap-1 ${step >= 3 ? 'text-garage-blue font-bold' : 'text-slate-400'}`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step > 3 ? 'bg-emerald-600 text-white' : step === 3 ? 'bg-garage-blue text-white shadow-glow-blue' : 'bg-slate-100 text-slate-400'
              }`}>
                {step > 3 ? '✓' : '3'}
              </div>
              <span className="hidden sm:inline">3. સર્વિસ & સમય</span>
              <span className="sm:hidden">સર્વિસ</span>
            </div>

            {/* Step 4 Pill */}
            <div className={`flex flex-col items-center gap-1 ${step === 4 ? 'text-garage-orange font-bold' : 'text-slate-400'}`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === 4 ? 'bg-garage-orange text-white shadow-glow-orange' : 'bg-slate-100 text-slate-400'
              }`}>
                4
              </div>
              <span className="hidden sm:inline">4. કન્ફર્મેશન</span>
              <span className="sm:hidden">કન્ફર્મ</span>
            </div>

          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-soft">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* STEP 1: Customer Details */}
            {step === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                    <User className="w-5 h-5 text-garage-blue" />
                    તમારી સંપર્ક વિગત (Customer Details)
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati">
                    બુકિંગ કન્ફર્મેશન અને અપડેટ્સ માટે સંપર્ક નંબર જરૂરી છે.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    તમારું પૂરું નામ *
                  </label>
                  <input
                    type="text"
                    placeholder="દા.ત. રાજેશભાઈ પટેલ"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className={`w-full text-sm px-4 py-3 rounded-xl border ${
                      errors.customerName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati`}
                  />
                  {errors.customerName && (
                    <p className="text-xs text-red-600 font-gujarati mt-1">{errors.customerName}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    મોબાઈલ નંબર *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-sans">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98XXXXXXXX"
                      maxLength="10"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                      className={`w-full pl-14 pr-4 py-3 text-sm rounded-xl border ${
                        errors.mobile ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-xs text-red-600 font-gujarati mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* WhatsApp Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 font-gujarati cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sameAsMobile}
                      onChange={(e) => setFormData({ ...formData, sameAsMobile: e.target.checked })}
                      className="w-4 h-4 text-garage-blue rounded focus:ring-garage-blue"
                    />
                    <span>આ જ નંબર પર WhatsApp છે (અપડેટ મેળવવા માટે)</span>
                  </label>

                  {!formData.sameAsMobile && (
                    <div className="mt-3">
                      <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1">
                        WhatsApp નંબર લખો
                      </label>
                      <input
                        type="tel"
                        placeholder="WhatsApp નંબર"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Car Details */}
            {step === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                    <Car className="w-5 h-5 text-garage-blue" />
                    ગાડીની વિગત (Car Details)
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati">
                    યોગ્ય સ્પેરપાર્ટ્સ અને ઓઇલ નક્કી કરવા માટે ગાડીની માહિતી જરૂરી છે.
                  </p>
                </div>

                {/* Brand Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    ગાડીની કંપની (Brand) *
                  </label>
                  <select
                    value={formData.carBrand}
                    onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                  >
                    {POPULAR_BRANDS.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    મોડેલ (Car Model) *
                  </label>
                  <input
                    type="text"
                    placeholder="દા.ત. Swift VXI, i20 Magna, Nexon XZ..."
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className={`w-full text-sm px-4 py-3 rounded-xl border ${
                      errors.carModel ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati`}
                  />
                  {errors.carModel && (
                    <p className="text-xs text-red-600 font-gujarati mt-1">{errors.carModel}</p>
                  )}
                </div>

                {/* Vehicle Number (Optional) & Fuel Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                      ગાડી નંબર (GJ-XX-XXXX) (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="GJ-01-AB-1234"
                      value={formData.carNumber}
                      onChange={(e) => setFormData({ ...formData, carNumber: e.target.value.toUpperCase() })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                      ફ્યુઅલ પ્રકાર (Fuel Type)
                    </label>
                    <select
                      value={formData.fuelType}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                    >
                      {FUEL_TYPES.map((fuel) => (
                        <option key={fuel} value={fuel}>{fuel}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 3: Service & Date/Time Details */}
            {step === 3 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-garage-blue" />
                    સર્વિસ અને સમય (Service & Schedule)
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati">
                    તમને કઈ સર્વિસ કરાવવી છે અને ક્યારે અનુકૂળ રહેશે?
                  </p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    સર્વિસ પસંદ કરો *
                  </label>
                  <select
                    value={formData.serviceSlug}
                    onChange={(e) => {
                      const selected = services.find(s => s.slug === e.target.value);
                      setFormData({
                        ...formData,
                        serviceSlug: e.target.value,
                        serviceName: selected ? `${selected.title} (${selected.gujaratiTitle})` : e.target.value
                      });
                    }}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.slug}>
                        {s.title} — {s.startingPrice}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                      પસંદગીની તારીખ (Date) *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full text-sm px-4 py-3 rounded-xl border ${
                        errors.preferredDate ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-garage-blue font-sans`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-600 font-gujarati mt-1">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                      અનુકૂળ સમય (Time Slot)
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati bg-white"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Problem Description Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-gujarati mb-1.5">
                    ગાડીમાં શું પ્રોબ્લેમ છે તે ટૂંકમાં લખો (Problem Note)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="દા.ત. AC ઓછું કૂલિંગ કરે છે, ખાડામાં અવાજ આવે છે, બ્રેક પેડલ વાઇબ્રેટ થાય છે..."
                    value={formData.problemNote}
                    onChange={(e) => setFormData({ ...formData, problemNote: e.target.value })}
                    className="w-full text-sm p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue font-gujarati resize-none"
                  />
                </div>

              </div>
            )}

            {/* STEP 4: Review & Summary */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-gujarati flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    બુકિંગ વિગત ચકાસો (Review Summary)
                  </h3>
                  <p className="text-xs text-slate-500 font-gujarati">
                    બધી વિગત બરાબર છે? કન્ફર્મ કરતા જ તમારી બુકિંગ નોંધાઈ જશે.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3.5 text-xs sm:text-sm font-gujarati">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">ગ્રાહકનું નામ:</span>
                    <strong className="text-slate-900">{formData.customerName}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">મોબાઈલ નંબર:</span>
                    <strong className="text-slate-900 font-sans">+91 {formData.mobile}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">ગાડી:</span>
                    <strong className="text-slate-900">
                      {formData.carBrand} {formData.carModel} {formData.carNumber && `(${formData.carNumber})`}
                    </strong>
                  </div>

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
                  type="submit"
                  variant="orange"
                  size="lg"
                  icon={Check}
                  className="font-gujarati font-bold text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto"
                >
                  Booking Confirm કરો
                </Button>
              )}
            </div>

          </form>

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
