// Centralized Garage Configuration for Shakti Motors & Service Centre - Wadhwan, Surendranagar
// Honest, approachable, practical local garage

export const garageConfig = {
  name: "શક્તિ મોટર્સ & સર્વિસ સેન્ટર",
  nameEn: "Shakti Motors & Service Centre",
  tagline: "વઢવાણ નું વિશ્વાસુ લોકલ કાર ગેરેજ - હવે Online Booking સાથે.",
  subTagline: "કાર સર્વિસ, રિપેર, વોશિંગ, એ.સી. કામ અને ડેન્ટિંગ-પેઇન્ટિંગ — ગાડીનું બધું કામ એક જ જગ્યાએ.",

  // Contact Information
  phone: "+91 90339 72706",
  phoneRaw: "+919033972706",
  whatsapp: "+91 90339 72706",
  whatsappRaw: "919033972706",
  email: "parmarnitin151099@gmail.com",

  // Exact Google Maps Address & Location - Kothariya / Wadhwan, Surendranagar
  shopNo: "શોપ નં. ૧",
  landmark: "નેક્સા શોરૂમ સામે (Opposite Nexa Showroom)",
  area: "ફેઝ ૨, કોઠારિયા",
  address: "નેક્સા શોરૂમ સામે, રોડ, ફેઝ ૨, કોઠારિયા, વઢવાણ",
  city: "વઢવાણ",
  district: "સુરેન્દ્રનગર",
  state: "ગુજરાત",
  pincode: "363030",
  plusCode: "PMCJ+87 Kothariya, Gujarat",
  fullAddress: "શોપ નં. ૧, નેક્સા શોરૂમ સામે, રોડ, ફેઝ ૨, કોઠારિયા, વઢવાણ, સુરેન્દ્રનગર, ગુજરાત - 363030",
  fullAddressEn: "Shop No.1, Nexa Showroom Same, Road, Phase 2, Wadhwan, Kothariya, Surendranagar, Gujarat 363030",

  // Google Maps Official Business Listing URL
  googleMapsUrl: "https://www.google.com/maps/place/Shakti+motors%26service+centre/@22.7207681,71.6781722,17z/data=!3m1!4b1!4m6!3m5!1s0x395947c255a7715f:0xf3578fe51bbf89e3!8m2!3d22.7207681!4d71.6781722!16s%2Fg%2F11v9n05_sn?entry=ttu",

  // Google Reviews
  googleRating: "4.9",
  googleReviewCount: "33+",

  // Workshop Timings
  openingHours: {
    weekdays: "સોમવાર - શનિવાર: સવારે ૯:૦૦ થી રાત્રે ૮:૦૦",
    sunday: "રવિવાર: સવારે ૯:૦૦ થી બપોરે ૨:૦૦",
    emergency: "બ્રેકડાઉન અને ઇમરજન્સી હેલ્પ ઉપલબ્ધ"
  },

  // Key Stats / Highlights
  stats: [
    { value: "10+", label: "વર્ષોનો અનુભવ" },
    { value: "6000+", label: "લોકલ ગાડીઓનું કામ" },
    { value: "4.9 ★", label: "Google Rating (33+ Reviews)" },
    { value: "4", label: "અનુભવી મિકેનિક્સ" }
  ],

  // Trust Factors (Practical & Honest)
  trustPoints: [
    "પહેલા ગાડી જોઈને પ્રોબ્લેમ સમજાવીએ",
    "જે કામ જરૂરી હોય એ જ — ખોટો ખર્ચો નહીં",
    "વાજબી અને વાસ્તવિક ભાવ",
    "કામ પૂરું થયા પછી ફાઇનલ ચેક કરીને ડિલિવરી"
  ]
};

// WhatsApp Helper function with prefilled conversational Gujarati message
export const getWhatsAppUrl = (customMessage = "") => {
  const defaultMsg = "કેમ છો શક્તિ મોટર્સ, મારે મારી ગાડીની સર્વિસ/રીપેરીંગ માટે વાત કરવી છે.";
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${garageConfig.whatsappRaw}?text=${msg}`;
};

// Phone Call Helper
export const getPhoneCallUrl = () => {
  return `tel:${garageConfig.phoneRaw}`;
};
