import React from 'react';
import { garageConfig, getPhoneCallUrl, getWhatsAppUrl } from '../data/config';
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
  Star,
  Zap,
  Cpu,
  Car,
  Gauge,
  Clock,
  MapPin,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

export default function About() {
  const founder = {
    name: "નિતીન પરમાર",
    nameEn: "Nitin Parmar",
    designation: "સંસ્થાપક & હેડ ટેકનિશિયન (Founder & Head Mechanic)",
    experience: "૧૦+ વર્ષનો અનુભવ",
    specialty: "કમ્પ્યુટર સ્કેનિંગ, એન્જિન ડાયગ્નોસિસ અને ઓવરઓલ વર્કશોપ સુપરવિઝન",
    image: "/images/nitin-parmar.jpg"
  };

  const mechanics = [
    {
      name: "ભવાની પરમાર",
      role: "ઇલેક્ટ્રિકલ & AC સ્પેશિયાલિસ્ટ",
      exp: "૬+ વર્ષ અનુભવ",
      specialty: "વાયરિંગ, OBD સ્કેનર ફોલ્ટ્સ, AC કૂલિંગ સિસ્ટમ અને સેન્સર કામ",
      initials: "BP",
      color: "from-blue-600 to-indigo-700",
      icon: Cpu
    },
    {
      name: "ચેતન જાદવ",
      role: "એન્જિન & સસ્પેન્શન એક્સપર્ટ",
      exp: "૭+ વર્ષ અનુભવ",
      specialty: "એન્જિન ઓવરહોલિંગ, બ્રેક સિસ્ટમ, ગિયરબોક્સ અને સસ્પેન્શન ફિટિંગ",
      initials: "CJ",
      color: "from-emerald-600 to-teal-800",
      icon: Wrench
    },
    {
      name: "રાજુ લકુમ",
      role: "ડેન્ટિંગ & પેઇન્ટિંગ માસ્ટર",
      exp: "૫+ વર્ષ અનુભવ",
      specialty: "બોડી ડેન્ટ રીમુવલ, સ્ક્રૅચ રીપેરિંગ, કલર મેચિંગ અને ફાઇનલ ફિનિશ",
      initials: "RL",
      color: "from-orange-500 to-amber-700",
      icon: Car
    },
    {
      name: "ગૌતમ લકુમ",
      role: "વોશિંગ & જનરલ સર્વિસિંગ",
      exp: "૩+ વર્ષ અનુભવ",
      specialty: "હાઈ-પ્રેશર અંડરબોડી વોશિંગ, ઓઇલ-ફિલ્ટર સર્વિસ અને ઇન્ટિરિયર સ્પા",
      initials: "GL",
      color: "from-cyan-600 to-blue-800",
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">

      {/* Hero Header */}
      <section className="bg-garage-dark text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 relative z-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-wider font-gujarati inline-block">
            અમારા વિશે (About Us)
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-gujarati text-white tracking-tight">
            {garageConfig.name}
          </h1>
          <p className="text-slate-300 font-gujarati max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            "અમે કોઈ મોંઘો શોરૂમ નથી. અમારું કામ બિલકુલ સ્પષ્ટ છે — ગાડીનું કામ સાચું અને ઉત્તમ કરવું, વાજબી ભાવ લેવો અને કસ્ટમર સાથે વાત હંમેશાં ચોખ્ખી રાખવી."
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Story Left */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full font-gujarati">
              અમારી ઓળખ અને સિદ્ધાંત
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-gujarati leading-snug">
              વઢવાણ અને સુરેન્દ્રનગરના લોકોનું વિશ્વાસુ લોકલ કાર ગેરેજ.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-gujarati leading-relaxed">
              શક્તિ મોટર્સની શરૂઆત વઢવાણમાં એક સરળ વિચાર સાથે થઈ હતી — સ્થાનિક ગાડી માલિકોને મોટા શોરૂમના ખોટા ચાર્જીસ કે બિનજરૂરી પાર્ટ્સ બદલવાની સલાહ વગર સાચી અને સંતોષકારક કાર સર્વિસ આપવી.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-gujarati leading-relaxed">
              અમારી પાસે મારુતિ સ્વિફ્ટ, વેગનઆર, બલેનો, અલ્ટો, ડિઝાયર, હ્યુન્ડાઈ i20, ક્રેટા, ટાટા નેક્સન અને મહિન્દ્રા જેવી તમામ લોકપ્રિય ગાડીઓ માટે હાઇડ્રોલિક લિફ્ટ, લેટેસ્ટ OBD ડાયગ્નોસિસ સ્કેનર અને પ્રેશર વોશિંગ જેવી સુવિધાઓ ઉપલબ્ધ છે.
            </p>

            {/* Core Values 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 font-gujarati text-sm">જે જરૂરી હોય એ જ કામ</h4>
                <p className="text-xs text-slate-500 font-gujarati mt-1">ખોટો કોઈ વધારાનો ખર્ચો નહીં. પહેલા પ્રોબ્લેમ સમજાવીને જ કામ શરૂ થાય.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-orange-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 font-gujarati text-sm">૧૦૦% પ્રામાણિક ભાવ</h4>
                <p className="text-xs text-slate-500 font-gujarati mt-1">વાજબી લેબર ચાર્જ અને ઓરિજિનલ સ્પેરપાર્ટ્સ સાથે ચોખ્ખો અંદાજ.</p>
              </div>
            </div>
          </div>

          {/* Stats Box Right */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold font-gujarati text-amber-400 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>શક્તિ મોટર્સ — આંકડામાં</span>
                </h3>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full font-sans">
                  Wadhwan
                </span>
              </div>

              <div className="space-y-4 font-gujarati">
                {garageConfig.stats.map((st, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-slate-300 text-xs sm:text-sm">{st.label}</span>
                    <strong className="text-xl sm:text-2xl font-black text-white font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                      {st.value}
                    </strong>
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
                  className="font-gujarati font-bold shadow-md"
                >
                  ગાડી સર્વિસ માટે Booking કરો
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          badge="અમારી અનુભવી ટીમ"
          title="શક્તિ મોટર્સના કુશળ મિકેનિક્સ"
          subtitle="જેમને ગાડીના દરેક અવાજ, એન્જિન પાર્ટ અને રિપેરિંગની પૂરી સમજ છે."
        />

        {/* 1. FOUNDER & HEAD MECHANIC CARD */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-orange-300/80 p-6 sm:p-8 shadow-md text-center space-y-4 hover:shadow-lg transition-all relative overflow-hidden">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold font-gujarati">
              <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>{founder.designation}</span>
            </div>

            {/* Founder Real Photo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto shadow-md border-2 border-amber-400 ring-4 ring-orange-100/80 bg-slate-100">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Name & Experience */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-gujarati">
                {founder.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-orange-600 font-gujarati mt-1 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>{founder.experience}</span>
              </p>
            </div>

            {/* Specialty */}
            <p className="text-xs sm:text-sm text-slate-700 font-gujarati leading-relaxed bg-orange-50/60 p-3 rounded-2xl border border-orange-100">
              {founder.specialty}
            </p>
          </div>
        </div>

        {/* 2. BALANCED 4-COLUMN MECHANICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mechanics.map((member, i) => {
            const IconComponent = member.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-center space-y-4"
              >
                <div className="space-y-3">
                  {/* Distinct Avatar with Icon Accent */}
                  <div className="relative inline-block">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.color} text-white font-black text-lg flex items-center justify-center mx-auto shadow-md font-sans`}>
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-slate-700 shadow-sm border border-slate-200 flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-gujarati">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-orange-600 font-gujarati mt-0.5">
                      {member.role}
                    </p>
                    <span className="inline-block text-[11px] text-slate-400 font-gujarati mt-0.5">
                      {member.exp}
                    </span>
                  </div>
                </div>

                {/* Specific Specialty Description */}
                <p className="text-xs text-slate-600 font-gujarati leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {member.specialty}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workshop Infrastructure / Facilities */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl border border-slate-800 space-y-8">
        <SectionTitle
          dark
          badge="વર્કશોપ સુવિધાઓ"
          title="અમારું વર્કશોપ સેટઅપ"
          subtitle="તમારી ગાડીને પરફેક્ટ સર્વિસ આપવા માટે જરૂરી સાધનો અને આધુનિક સુવિધાઓ."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-gujarati">

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-2xl block mb-2">🚿</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">હાઈ-પ્રેશર વોશિંગ બે</h4>
            <p className="text-xs text-slate-400">અંડરચેસીસ, ફોમ વોશિંગ અને વેક્યૂમ ડ્રાયિંગ માટે હાઈ પ્રેશર સિસ્ટમ.</p>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-2xl block mb-2">💻</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">OBD કમ્પ્યુટર સ્કેનર</h4>
            <p className="text-xs text-slate-400">ડેશબોર્ડ ચેક-એન્જિન લાઇટ્સ અને સેન્સર ફોલ્ટ્સ ઝડપથી શોધવા માટે.</p>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-2xl block mb-2">🎨</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">પેઇન્ટ & ડેન્ટિંગ સેટઅપ</h4>
            <p className="text-xs text-slate-400">ઓરિજિનલ શેડ મેચિંગ, હીટિંગ ચેમ્બર અને ડસ્ટ-ફ્રી સ્ક્રૅચ રીપેરિંગ.</p>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-2xl block mb-2">🛞</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1">હાઈડ્રોલિક લિફ્ટ</h4>
            <p className="text-xs text-slate-400">સસ્પેન્શન, બ્રેક્સ અને અંડરબોડી સેફ્ટી ઇન્સ્પેક્શન માટે સક્ષમ લિફ્ટ.</p>
          </div>

        </div>
      </section>

      {/* Bottom Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold font-gujarati text-slate-900">
          એક વાર તમારી ગાડીનું કામ અમારે બતાવી જાઓ
        </h3>
        <p className="text-slate-600 font-gujarati text-xs sm:text-sm max-w-md mx-auto">
          અમે પહેલા ગાડી ચેક કરીને સ્પષ્ટ સલાહ અને વાજબી ભાવ જણાવીશું.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/booking" variant="orange" size="lg" icon={CalendarCheck} className="font-gujarati font-bold w-full sm:w-auto">
            Booking કરો
          </Button>
          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] hover:from-[#475569] text-slate-100 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold font-gujarati border-t border-t-[#64748B] border-b-2 border-b-[#020617] shadow-sm transition-all active:translate-y-[1px]"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>કૉલ કરો ({garageConfig.phone})</span>
          </a>
        </div>
      </div>

    </div>
  );
}
