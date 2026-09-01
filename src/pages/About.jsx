import React from 'react';
import { garageConfig, getPhoneCallUrl } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Phone, 
  CalendarCheck, 
  Award, 
  Users, 
  CheckCircle2,
  Wrench,
  Star
} from 'lucide-react';

export default function About() {
  const founder = {
    name: "નિતીન પરમાર",
    designation: "સંસ્થાપક & હેડ મિકેનિક (Founder & Head Mechanic)",
    role: "10+ વર્ષ અનુભવ",
    specialty: "Engine Diagnostic, Overall Car Health & Workshop Management",
    image: "/images/nitin-parmar.jpg"
  };

  const mechanics = [
    {
      name: "ભવાની પરમાર",
      role: "મિકેનિક • 6+ વર્ષ અનુભવ",
      specialty: "Wiring, Scanner Faults, Cooling System & AC Service",
      avatar: "B"
    },
    {
      name: "રાજુ લકુમ",
      role: "મિકેનિક • 3+ વર્ષ અનુભવ",
      specialty: "Accident Repair, Denting, Body Alignment & Suspension",
      avatar: "R"
    },
    {
      name: "ચેતન લકુમ",
      role: "મિકેનિક • 3+ વર્ષ અનુભવ",
      specialty: "Color Match, Painting, Body Finish & Polishing",
      avatar: "C"
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">

      {/* Hero Header */}
      <section className="bg-garage-dark text-white py-10 sm:py-14 px-3.5 sm:px-6 lg:px-8 border-b border-slate-800 hero-pattern">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase tracking-wider font-gujarati inline-block">
            અમારા વિશે
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-gujarati text-white">
            {garageConfig.name} વિશે
          </h1>
          <p className="text-slate-300 font-gujarati max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            "અમે કોઈ fancy showroom નથી. અમારું કામ simple છે — ગાડીનું કામ સરસ કરવું અને customer ને વાત clear રાખવી."
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-garage-blue bg-blue-50 px-3 py-1 rounded-full font-gujarati">
              અમારો પરિચય
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-gujarati leading-snug">
              આપણા એરિયાનું એવું ગેરેજ જ્યાં ગાડી આપીને તમને પૂરી શાંતિ રહે.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-gujarati leading-relaxed">
              શક્તિ મોટર્સની શરૂઆત એક જ ઉદ્દેશ સાથે થઈ હતી — સ્થાનિક ગાડી માલિકોને વાજબી ભાવે સાચી અને પ્રામાણિક ઓટોમોબાઇલ સર્વિસ આપવી. અમે મોટા શોરૂમ જેવા વધારાના ચાર્જીસ કે બિનજરૂરી પાર્ટ્સ બદલવાની સલાહ આપતા નથી.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-gujarati leading-relaxed">
              અમારી પાસે હાઈડ્રોલિક લિફ્ટ, OBD ડાયગ્નોસિસ સ્કેનર, પ્રેશર વોશિંગ બે અને કમ્પ્યુટરાઇઝ્ડ પેઇન્ટ મિક્સિંગ જેવી આધુનિક સુવિધાઓ સાથે કુશળ કારીગરો છે.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-garage-blue mb-1.5 sm:mb-2" />
                <h4 className="font-bold text-slate-900 font-gujarati text-xs sm:text-sm">જે કામ જરૂરી હોય એ જ</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 font-gujarati mt-0.5 sm:mt-1">ખોટો કોઈ ખર્ચો નહીં. પહેલા પ્રોબ્લેમ સમજાવીએ.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-garage-orange mb-1.5 sm:mb-2" />
                <h4 className="font-bold text-slate-900 font-gujarati text-xs sm:text-sm">પ્રામાણિક એસ્ટીમેટ</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 font-gujarati mt-0.5 sm:mt-1">100% ક્લિયર વાતચીત અને ઓરિજિનલ સ્પેરપાર્ટ્સ.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold font-gujarati text-amber-400">
                શક્તિ મોટર્સના આંકડા
              </h3>

              <div className="space-y-3 sm:space-y-4 font-gujarati">
                {garageConfig.stats.map((st, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3">
                    <span className="text-slate-300 text-xs sm:text-sm">{st.label}</span>
                    <strong className="text-xl sm:text-2xl font-black text-white font-sans">{st.value}</strong>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  to="/booking"
                  variant="orange"
                  size="lg"
                  fullWidth
                  icon={CalendarCheck}
                  className="font-gujarati font-bold shadow-glow-orange"
                >
                  ગાડી માટે Booking કરો
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Team / Mechanics Section */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionTitle
          badge="અમારી ટીમ"
          title="અનુભવી અને વિશ્વાસુ મિકેનિક્સ"
          subtitle="જેમને ગાડીના દરેક નટ-બોલ્ટ અને અવાજની પૂરી સમજ છે."
        />

        {/* 1. TOP MIDDLE: FOUNDER & HEAD MECHANIC CARD */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10">
          <div className="bg-white rounded-3xl border-2 border-orange-200/80 p-6 sm:p-8 shadow-soft text-center space-y-4 hover:shadow-card-hover hover:border-orange-300 transition-all relative overflow-hidden">
            {/* Top Founder Ribbon */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-garage-orange text-xs font-bold font-gujarati mb-1">
              <Star className="w-3.5 h-3.5 fill-garage-orange text-garage-orange" />
              <span>{founder.designation}</span>
            </div>

            {/* Founder Real Photo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto shadow-md border-2 border-amber-400/90 ring-4 ring-orange-50 bg-slate-100">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Founder Name & Role */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-gujarati">
                {founder.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-garage-orange font-gujarati mt-1">
                {founder.role}
              </p>
            </div>

            {/* Founder Specialty */}
            <p className="text-xs sm:text-sm text-slate-700 font-gujarati leading-relaxed bg-orange-50/50 p-3 rounded-2xl border border-orange-100">
              {founder.specialty}
            </p>
          </div>
        </div>

        {/* 2. BELOW ROW: 3 MECHANICS IN 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {mechanics.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-soft text-center space-y-3 sm:space-y-4 hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-garage-blue to-slate-900 text-white font-black text-lg sm:text-xl flex items-center justify-center mx-auto shadow-md">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-gujarati">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-garage-orange font-gujarati mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-gujarati leading-relaxed bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Infrastructure / Facilities */}
      <section className="bg-slate-900 text-white py-10 sm:py-16 rounded-2xl sm:rounded-3xl max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 shadow-xl">
        <SectionTitle
          dark
          badge="વર્કશોપ સુવિધાઓ"
          title="અમારું વર્કશોપ સેટઅપ"
          subtitle="તમારી ગાડીને પરફેક્ટ સર્વિસ આપવા માટે જરૂરી સાધનો અને સુવિધાઓ."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-gujarati">

          <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700">
            <span className="text-xl sm:text-2xl block mb-1.5 sm:mb-2">🚿</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">હાઈ-પ્રેશર વોશિંગ બે</h4>
            <p className="text-[11px] sm:text-xs text-slate-300">અંડરચેસીસ અને ફોમ વોશિંગ માટે પ્રેશર સિસ્ટમ.</p>
          </div>

          <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700">
            <span className="text-xl sm:text-2xl block mb-1.5 sm:mb-2">💻</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">OBD કમ્પ્યુટર સ્કેનર</h4>
            <p className="text-[11px] sm:text-xs text-slate-300">ડેશબોર્ડ ફોલ્ટ્સ અને સેન્સર ચેક કરવા માટે સ્કેનિંગ.</p>
          </div>

          <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700">
            <span className="text-xl sm:text-2xl block mb-1.5 sm:mb-2">🎨</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">પેઇન્ટ & હીટ ચેમ્બર</h4>
            <p className="text-[11px] sm:text-xs text-slate-300">કમ્પ્યુટરાઇઝ્ડ કલર મિક્સિંગ અને ડસ્ટ-ફ્રી પેઇન્ટિંગ.</p>
          </div>

          <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700">
            <span className="text-xl sm:text-2xl block mb-1.5 sm:mb-2">🛞</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">હાઈડ્રોલિક લિફ્ટ</h4>
            <p className="text-[11px] sm:text-xs text-slate-300">સસ્પેન્શન, બ્રેક અને ચેસીસ સેફ્ટી ઇન્સ્પેક્શન.</p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold font-gujarati text-slate-900">
          એક વાર તમારી ગાડી બતાવી જાઓ
        </h3>
        <p className="text-slate-600 font-gujarati text-xs sm:text-sm max-w-md mx-auto">
          અમે તમને સ્પષ્ટ વાત અને યોગ્ય સલાહ આપીશું.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          <Button to="/booking" variant="orange" size="lg" icon={CalendarCheck} className="font-gujarati font-bold w-full sm:w-auto">
            Booking કરો
          </Button>
          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-100 px-5 py-2.5 rounded-[7px] text-xs sm:text-sm font-bold font-gujarati border-t border-t-[#64748B] border-x border-x-[#334155] border-b-2 border-b-[#020617] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] transition-all active:translate-y-[1px]"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>કૉલ કરો ({garageConfig.phone})</span>
          </a>
        </div>
      </div>

    </div>
  );
}
