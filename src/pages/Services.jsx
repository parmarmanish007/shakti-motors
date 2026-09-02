import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CarBrandsMarquee from '../components/CarBrandsMarquee';
import { garageConfig, getWhatsAppUrl, getPhoneCallUrl } from '../data/config';
import { Search, Filter, Phone, MessageCircle, HelpCircle, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'all', label: 'બધી સર્વિસિસ (All)' },
    { id: 'maintenance', label: 'જનરલ સર્વિસ (Maintenance)' },
    { id: 'cleaning', label: 'વોશિંગ & ક્લિનિંગ (Washing)' },
    { id: 'repair', label: 'રીપેરીંગ & ઇલેક્ટ્રિકલ (Repair)' },
    { id: 'bodywork', label: 'ડેન્ટિંગ & પેઇન્ટિંગ (Bodywork)' },
    { id: 'specialized', label: 'AC & એક્સિડન્ટ (Specialized)' }
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.gujaratiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: "શું હું માત્ર ગાડી ચેકઅપ (inspection) કરાવવા માટે લાવી શકું?",
      a: "હા, ચોક્કસ! તમે ગાડી અમારે ત્યાં લાવો, અમારા એક્સપર્ટ મિકેનિક્સ ચેકઅપ કરીને પ્રોબ્લેમ સમજાવશે અને અંદાજિત ખર્ચ કહેશે. તમારી મંજૂરી પછી જ કામ શરૂ થશે."
    },
    {
      q: "જનરલ સર્વિસમાં કેટલો સમય લાગે?",
      a: "સામાન્ય રીતે જનરલ સર્વિસ અને વોશિંગમાં ૩ થી ૪ કલાકનો સમય લાગે છે. જો તમે સવારે ૧૦ વાગ્યે ગાડી આપો તો બપોર પછી ગાડી રેડી મળી જાય છે."
    },
    {
      q: "શું તમે ઓરિજિનલ (Genuine) પાર્ટ્સ અને ઓઇલ વાપરો છો?",
      a: "હા, અમે 100% કંપની રિકમન્ડેડ બ્રાન્ડ્સ (દા.ત. Castrol, Motul, Mobil, Maruti Genuine Parts, Hyundai Mobis) ના જેન્યુઇન ઓઇલ અને ફિલ્ટર્સ જ વાપરીએ છીએ."
    },
    {
      q: "ડેન્ટિંગ-પેઇન્ટિંગમાં કલર મેચિંગ કેવું રહેશે?",
      a: "અમે કમ્પ્યુટરાઇઝ્ડ ફેક્ટરી કલર કોડ મેચિંગ કરીએ છીએ. કંપનીના ઓરિજિનલ પેઇન્ટ શેડ સાથે 100% મેચ થાય તેવું કામ કરવામાં આવે છે જેથી પેચ અલગ ન દેખાય."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-garage-dark text-white py-10 sm:py-14 px-3.5 sm:px-6 lg:px-8 border-b border-slate-800 relative hero-pattern">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase tracking-wider font-gujarati inline-block">
            અમારી તમામ સેવાઓ
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-gujarati text-white">
            ગાડીનું જે કામ હોય, અહીં પાકું થઈ જાય.
          </h1>
          <p className="text-slate-300 font-gujarati max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            વોશિંગ, રેગ્યુલર સર્વિસ, એન્જિન રીપેર, AC સર્વિસ થી લઈને ડેન્ટિંગ-પેઇન્ટિંગ અને ફૂલ બોડી કલર સુધી બધું જ એક છત નીચે.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-slate-200 shadow-soft mb-8 sm:mb-10 space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="સર્વિસ શોધો... (washing, AC, brake...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-garage-blue text-xs sm:text-sm font-gujarati"
              />
            </div>

            {/* Total count */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end text-[11px] sm:text-xs font-gujarati text-slate-500">
              <span>કુલ ઉપલબ્ધ: <strong className="text-slate-800 font-bold">{filteredServices.length}</strong> સર્વિસિસ</span>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 font-gujarati scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-[7px] text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 active:translate-y-[1px] ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] text-white border-t border-t-[#BFDBFE]/80 border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)]'
                    : 'bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#E2E8F0] hover:from-[#FFFFFF] hover:to-[#CBD5E1] text-slate-800 border-t border-t-[#FFFFFF] border-b-2 border-b-[#CBD5E1] shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati mb-2">
              કોઈ સર્વિસ મળી નથી
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-gujarati mb-4">
              તમે શોધેલી સર્વિસનું નામ ફરીથી ચેક કરો અથવા સીધો ફોન કરીને પૂછી લો.
            </p>
            <Button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              variant="silver"
              size="sm"
            >
              બધી સર્વિસિસ પાછી લાવો
            </Button>
          </div>
        )}

      </div>

      {/* Supported Car Brands Moving Marquee */}
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-xs text-slate-500 font-gujarati">
          <span className="font-bold text-slate-700 text-[11px] sm:text-xs">
            અમે આ તમામ કાર બ્રાન્ડ્સની સર્વિસ કરીએ છીએ:
          </span>
          <span className="hidden sm:inline text-slate-400 text-[11px]">All Car Brands Supported</span>
        </div>
        <CarBrandsMarquee />
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <SectionTitle
          badge="વારંવાર પૂછાતા પ્રશ્નો"
          title="તમારા મનના સવાલો — સાચા જવાબો"
          subtitle="સર્વિસ કરાવતા પહેલા ગ્રાહકોના મનમાં આવતા સામાન્ય પ્રશ્નો."
        />

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-soft">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-gujarati mb-2 flex items-start gap-2">
                <span className="text-garage-blue font-bold">Q.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-gujarati pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 sm:mt-12 bg-garage-dark text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold font-gujarati mb-1">
              તમારી ગાડીમાં કોઈ અલગ પ્રોબ્લેમ છે?
            </h3>
            <p className="text-slate-300 font-gujarati text-xs sm:text-sm">
              સીધો ફોન કરો અથવા વોટ્સએપ પર ફોટો/વિડીયો મોકલીને અંદાજ મેળવો.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl("કેમ છો, મારે ગાડીના એક પ્રોબ્લેમ બાબતે વાત કરવી છે.")}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] via-[#128C7E] to-[#0F766E] hover:from-[#4ADE80] text-white px-5 py-2.5 rounded-[7px] font-bold text-xs sm:text-sm border-t border-t-[#BBF7D0]/80 border-x border-x-[#128C7E] border-b-2 border-b-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp કરો</span>
            </a>
            <a
              href={getPhoneCallUrl()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] text-white px-5 py-2.5 rounded-[7px] font-bold text-xs sm:text-sm border-t border-t-[#BFDBFE]/80 border-x border-x-[#2563EB] border-b-2 border-b-[#1E3A8A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.18)] transition-all active:translate-y-[1px]"
            >
              <Phone className="w-4 h-4" />
              <span>કૉલ કરો</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
