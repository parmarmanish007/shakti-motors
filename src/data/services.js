// Catalog of Car Services offered by Shakti Motors - Wadhwan, Surendranagar
// Everyday Indian cars: Maruti, Hyundai, Tata, Honda, Mahindra

export const services = [
  {
    id: "car-service",
    slug: "car-service",
    title: "Car Service",
    gujaratiTitle: "રેગ્યુલર કાર સર્વિસ અને ચેકઅપ",
    shortDesc: "Regular service, Engine oil change, filters, brake checkup અને complete safety inspection.",
    category: "maintenance",
    iconName: "Wrench",
    badge: "મોસ્ટ પોપ્યુલર",
    startingPrice: "વાજબી સર્વિસ ચાર્જ + ઓઇલ",
    estimatedTime: "૨ થી ૩ કલાક",
    heroImage: "/images/services/car-service.jpg",
    overview: "ગાડીનું એન્જિન સ્મૂથ ચાલે અને માઇલેજ સારું મળે તે માટે સમયસર સર્વિસ જરૂરી છે. અમે પૂરી પ્રામાણિકતા સાથે ઓરિજિનલ ઓઇલ અને ફિલ્ટર્સ વાપરીએ છીએ.",
    problemsCovered: [
      "છેલ્લા ૬ મહિના કે ૧૦,૦૦૦ કિમીથી સર્વિસ ન કરાવી હોય",
      "ગાડી પિકઅપ ઓછું આપતી હોય કે માઇલેજ ઘટી ગયું હોય",
      "એન્જિનમાંથી અવાજ કે ધ્રુજારી (vibration) આવતી હોય",
      "બ્રેક દબાવતી વખતે વિચિત્ર અવાજ આવતો હોય",
      "લાંબા પ્રવાસ પર જતા પહેલા જનરલ ચેકઅપ કરાવવું હોય"
    ],
    includedWorks: [
      "એન્જિન ઓઇલ રિપ્લેસમેન્ટ (Genuine brand oil)",
      "ઓઇલ ફિલ્ટર, એર ફિલ્ટર & AC કેબિન ફિલ્ટર ચેક/ચેન્જ",
      "કુલન્ટ (Coolant) લેવલ અને બ્રેક ઓઇલ ટોપ-અપ",
      "ચાર વ્હીલના બ્રેક પેડ્સ અને ડ્રમ ક્લિનિંગ",
      "સ્પાર્ક પ્લગ અને બેટરી વોલ્ટેજ ચેકઅપ",
      "જનરલ સેફ્ટી ઇન્સ્પેક્શન"
    ],
    whyImportant: "ટાઈમ પર સર્વિસ કરાવવાથી રસ્તા વચ્ચે ગાડી બંધ પડવાનું રિસ્ક રહેતું નથી અને એન્જિનની લાઈફ લાંબી ચાલે છે."
  },
  {
    id: "car-repair",
    slug: "car-repair",
    title: "Car Repair",
    gujaratiTitle: "એન્જિન, ક્લચ અને મેકેનિકલ રીપેરીંગ",
    shortDesc: "ગાડીમાં જે problem હોય એ પહેલા સમજીને diagnose કરીએ અને પછી જ proper repair.",
    category: "repair",
    iconName: "Settings",
    badge: "અનુભવી મિકેનિક્સ",
    startingPrice: "ચેક કર્યા પછી અંદાજ",
    estimatedTime: "કામના પ્રકાર મુજબ",
    heroImage: "/images/services/car-repair.jpg",
    overview: "ગાડી ચલાવતી વખતે કોઈ અવાજ આવે છે? સ્ટાર્ટિંગ પ્રોબ્લેમ છે કે ક્લચ હાર્ડ થઈ ગયો છે? અમારા અનુભવી મિકેનિક્સ પ્રોબ્લેમનું મૂળ શોધીને વાજબી ખર્ચે રીપેર કરશે.",
    problemsCovered: [
      "એન્જિન ઓવરહીટ થવું કે કુલન્ટ લીકેજ",
      "ક્લચ હાર્ડ થઈ જવો કે ગિયર શિફ્ટિંગમાં તકલીફ",
      "સવારે ગાડી સ્ટાર્ટ થવામાં વાર લાગવી",
      "એન્જિનમાંથી ખડખડાટ કે અજીબ અવાજ",
      "ડેશબોર્ડ પર ચેક એન્જિન લાઈટ ચાલુ થઈ જવી"
    ],
    includedWorks: [
      "ફોલ્ટ ડિટેક્શન અને ટ્રબલશૂટિંગ",
      "એન્જિન ટ્યુન-અપ અને થ્રોટલ બોડી ક્લિનિંગ",
      "ક્લચ પ્લેટ, પ્રેશર પ્લેટ અને બેરિંગ રીપેરીંગ/ચેન્જ",
      "વોટર પંપ, ફેન બેલ્ટ અને ટાઈમિંગ બેલ્ટ ચેક",
      "સાયલેન્સર અને એક્ઝોસ્ટ સિસ્ટમ ચેકઅપ"
    ],
    whyImportant: "નાનો પ્રોબ્લેમ તરત સોલ્વ કરવાથી ભવિષ્યમાં એન્જિન સીઝ થવા જેવો મોટો ખર્ચો બચી જાય છે."
  },
  {
    id: "car-washing",
    slug: "car-washing",
    title: "Car Washing",
    gujaratiTitle: "કાર ફોમ વોશિંગ અને સફાઈ",
    shortDesc: "Daily dirt થી લઈને proper deep foam cleaning અને interior vacuuming સુધી.",
    category: "cleaning",
    iconName: "Droplets",
    badge: "ઝડપી સર્વિસ",
    startingPrice: "₹300 થી શરૂ",
    estimatedTime: "30 થી 45 મિનિટ",
    heroImage: "/images/services/car-washing.jpg",
    overview: "ધૂળ, કાદવ અને ડાઘાથી ગાડી ગંદી થઈ ગઈ છે? અમારે ત્યાં હાઈ-પ્રેશર વોશ, ફોમ ક્લિનિંગ, અંડરબોડી વોશ અને ઇન્ટીરિયર વેક્યૂમ સાથે ગાડી ચોખ્ખી ચણક થઈ જશે.",
    problemsCovered: [
      "ગાડીની બહાર કાદવ, ધૂળ અને ડાઘા જામી ગયા હોય",
      "ઇન્ટીરિયર સીટ અને મેટમાં કચરો/ધૂળ હોય",
      "કાચ અને મિરર પર ચીકાશ કે ડાઘા હોય",
      "વરસાદ પછી અંડરબોડીમાં માટી ચોંટી ગઈ હોય"
    ],
    includedWorks: [
      "હાઈ-પ્રેશર બોડી ફોમ વોશ (Foam Wash)",
      "અંડરચેસીસ અને વ્હીલ ક્લિનિંગ",
      "ઇન્ટીરિયર વેક્યૂમિંગ (સીટ, મેટ, ડિકી)",
      "ડેશબોર્ડ ક્લિનિંગ અને વાઇપિંગ",
      "ગ્લાસ અને વિન્ડશિલ્ડ ક્લિનિંગ"
    ],
    whyImportant: "નિયમિત વોશિંગથી ગાડીના કલરનું આયુષ્ય વધે છે અને અંડરબોડીમાં કાટ લાગતો નથી."
  },
  {
    id: "denting-painting",
    slug: "denting-painting",
    title: "Denting & Painting",
    gujaratiTitle: "ડેન્ટિંગ અને બોડી પેઇન્ટિંગ",
    shortDesc: "Accident dent, scratch removal, panel painting અને colour matching.",
    category: "bodywork",
    iconName: "Paintbrush",
    badge: "પાકું કામ",
    startingPrice: "પેનલ પ્રમાણે વાજબી ભાવ",
    estimatedTime: "૧ થી ૩ દિવસ",
    heroImage: "/images/services/denting-painting.jpg",
    overview: "ગાડી પર ડેન્ટ પડ્યો છે કે સ્ક્રેચ પડી ગયો છે? અમારે ત્યાં પતરાનું સરસ ડેન્ટિંગ કરીને ફેક્ટરી કલર મેચિંગ સાથે પેઇન્ટ કરી આપીએ છીએ.",
    problemsCovered: [
      "દરવાજા, બોનેટ કે બમ્પર પર ડેન્ટ પડી ગયો હોય",
      "બીજી ગાડી કે દીવાલ અડી જવાથી સ્ક્રેચ પડ્યા હોય",
      "બમ્પર તૂટી ગયું હોય કે ક્લિપ્સ છૂટી ગઈ હોય",
      "પતરા પર કાટ લાગીને કલર ઉખડવા લાગ્યો હોય"
    ],
    includedWorks: [
      "પ્રિસિઝન ડેન્ટ પુલિંગ અને લેવલિંગ",
      "રસ્ટ રીમુવલ અને પ્રાઈમર કોટિંગ",
      "કલર મેચિંગ સ્પ્રે પેઇન્ટિંગ",
      "ક્લિયર કોટ અને રબિંગ-પોલિશ",
      "કામ પૂરું થયા પછી ફાઇનલ ચેક"
    ],
    whyImportant: "ઝડપી ડેન્ટ રીપેરથી પતરાને કાટ લાગતો અટકે છે અને ગાડીનો લુક સચવાઈ રહે છે."
  },
  {
    id: "ac-service",
    slug: "ac-service",
    title: "AC Service",
    gujaratiTitle: "કાર AC રીપેર અને ગેસ રીફિલ",
    shortDesc: "ગરમીમાં AC cooling ઓછી છે? Gas leak checkup, cooling coil અને gas recharge.",
    category: "specialized",
    iconName: "Snowflake",
    badge: "કૂલિંગ સ્પેશિયલ",
    startingPrice: "ચેકઅપ પછી વાજબી ભાવ",
    estimatedTime: "૧ થી ૨ કલાક",
    heroImage: "/images/services/ac-service.jpg",
    overview: "ગરમીમાં ગાડીનું AC એકદમ ઠંડક આપતું હોવું જરૂરી છે. અમે AC કૂલિંગ કોઈલ ક્લિનિંગ, કમ્પ્રેસર પ્રેશર ચેક અને ક્વોલિટી ગેસ રીફિલ કરીએ છીએ.",
    problemsCovered: [
      "AC ચાલુ હોય છતાં કેબિનમાં ઠંડક ન થવી",
      "AC વેન્ટ્સમાંથી ધૂળ કે વાસી વાસ આવવી",
      "AC ઓન કરતાં એન્જિન પર વધુ લોડ પડવો",
      "AC ગેસ લીકેજની શંકા"
    ],
    includedWorks: [
      "AC કન્ડેન્સર ક્લિનિંગ",
      "કૂલિંગ કોઈલ ઇન્સ્પેક્શન & ક્લિનિંગ",
      "રેફ્રિજરેન્ટ ગેસ ટોપ-અપ / ફૂલ ચાર્જ",
      "કેબિન ફિલ્ટર ચેક અને ક્લિનિંગ"
    ],
    whyImportant: "પ્રોપર સર્વિસથી AC કમ્પ્રેસરનું લાઈફ વધે છે અને માઇલેજ પણ સુધરે છે."
  },
  {
    id: "electrical-work",
    slug: "electrical-work",
    title: "Electrical Work",
    gujaratiTitle: "ઇલેક્ટ્રિકલ વાયરિંગ અને બેટરી",
    shortDesc: "Light, wiring, battery testing, self starter, alternator અને fuses related work.",
    category: "repair",
    iconName: "Zap",
    badge: "ઝડપી ઉકેલ",
    startingPrice: "કામ મુજબ વાજબી",
    estimatedTime: "૩૦ મિનિટ થી ૧ કલાક",
    heroImage: "/images/services/electrical-work.jpg",
    overview: "હેડલાઇટ્સ ધીમી પડી ગઈ છે, હોર્ન નથી વાગતો કે સેલ્ફ નથી લાગતો? અનુભવી વાયરમેન દ્વારા વાયરિંગ અને બેટરી ફોલ્ટનું તાત્કાલિક નિરાકરણ.",
    problemsCovered: [
      "સવારે સેલ્ફ ન લાગવો કે બેટરી ડાઉન થઈ જવી",
      "હેડલાઇટ, ફોગ લેમ્પ કે ટેઇલ લાઇટ બંધ પડી ગઈ હોય",
      "પાવર વિન્ડો ઉપર-નીચે ન થવી કે હોર્ન ફોલ્ટ",
      "વાયરિંગ કટ થવું કે શોર્ટ સર્કિટ સ્મેલ આવવી"
    ],
    includedWorks: [
      "બેટરી વોલ્ટેજ અને લાઈફ ટેસ્ટિંગ",
      "અલ્ટરનેટર ચાર્જિંગ આઉટપુટ ચેકઅપ",
      "સેલ્ફ સ્ટાર્ટર મોટર સર્વિસિંગ",
      "ફ્યુઝ બોક્સ ડાયગ્નોસિસ અને વાયરિંગ રીપેર"
    ],
    whyImportant: "ઇલેક્ટ્રિકલ ફોલ્ટ સોલ્વ કરવાથી રસ્તા વચ્ચે ગાડી અટકી જતી નથી."
  },
  {
    id: "brake-suspension",
    slug: "brake-suspension",
    title: "Brake & Suspension",
    gujaratiTitle: "બ્રેક અને શોકર / સસ્પેન્શન કામ",
    shortDesc: "Brake pads, disk, shockers, bush, steering અને ખાડામાં અવાજ આવતો હોય તો.",
    category: "repair",
    iconName: "Activity",
    badge: "સેફ્ટી ફર્સ્ટ",
    startingPrice: "ચેકઅપ પછી સ્પષ્ટ ભાવ",
    estimatedTime: "૧ થી ૩ કલાક",
    heroImage: "/images/services/brake-suspension.jpg",
    overview: "ખાડા-ટેકરા વાળા રસ્તા પર ગાડી સ્મૂથ ચાલે અને પરિવારની સુરક્ષા જળવાય તે માટે બ્રેક અને શોકર્સનું પરફેક્ટ હોવું જરૂરી છે.",
    problemsCovered: [
      "ખાડામાં ગાડી પડે ત્યારે આગળથી ધડાકા કે ખડખડાટ અવાજ",
      "બ્રેક દબાવતી વખતે કીચૂડ અવાજ આવતો હોય",
      "શોકર્સમાંથી ઓઇલ લીકેજ દેખાવું",
      "હાઈ સ્પીડ પર ગાડી અનસ્ટેબલ લાગવી"
    ],
    includedWorks: [
      "બ્રેક પેડ્સ/શુઝ ચેક & રિપ્લેસમેન્ટ",
      "શોક એબ્સોર્બર (Shocker) ઇન્સ્પેક્શન",
      "લોઅર આર્મ, બોલ જોઈન્ટ અને બુશ ચેન્જ",
      "સ્ટીયરીંગ ચેકઅપ"
    ],
    whyImportant: "મજબૂત બ્રેક અને પરફેક્ટ સસ્પેન્શન રસ્તા પર સંપૂર્ણ સેફ્ટી આપે છે."
  },
  {
    id: "body-colour",
    slug: "body-colour",
    title: "Full Body Colour",
    gujaratiTitle: "ફૂલ બોડી કલર અને રી-પેઇન્ટિંગ",
    shortDesc: "જૂની ગાડીનો કલર ઝાંખો પડી ગયો હોય તો કમ્પ્લીટ બોડી પેઇન્ટિંગ.",
    category: "bodywork",
    iconName: "Palette",
    badge: "નવો લુક",
    startingPrice: "મોડેલ મુજબ વાજબી રેટ",
    estimatedTime: "૪ થી ૬ દિવસ",
    heroImage: "/images/services/body-colour.jpg",
    overview: "તમારી ગાડીનો કલર ઝાંખો પડી ગયો છે કે નવો કલર કરાવીને સરસ ચમકતી કરવી છે? અમે પૂરી બોડી સેન્ડિંગ કરીને ક્વોલિટી પેઇન્ટ કરી આપીએ છીએ.",
    problemsCovered: [
      "તડકામાં ગાડીનો અસલ કલર ઝાંખો પડી ગયો હોય",
      "આખી ગાડી પર નાના-મોટા સ્ક્રેચ હોય",
      "જૂની ગાડીને નવો લુક આપવો હોય"
    ],
    includedWorks: [
      "બોડી સેન્ડિંગ અને પ્રાઈમર કોટિંગ",
      "સ્પ્રે પેઇન્ટિંગ અને ક્લિયર કોટ",
      "રબિંગ-પોલિશ અને ફાઇનલ ચેક"
    ],
    whyImportant: "વાજબી ખર્ચે જૂની ગાડી સાવ નવી જેવી દેખાવા લાગે છે."
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(s => s.slug === slug || s.id === slug);
};
