// Mock tracking dataset and localStorage helpers for Shakti Motors
// Future Backend Ready: Can easily be swapped with fetch('/api/bookings/:id')

export const STATUS_MAP = {
  pending: {
    key: "pending",
    labelGu: "પેન્ડિંગ (Pending)",
    labelEn: "Pending Confirmation",
    color: "bg-amber-100 text-amber-800 border-amber-300",
    badgeColor: "bg-amber-500",
    stepIndex: 0,
    desc: "તમારી બુકિંગ રિક્વેસ્ટ મળી ગઈ છે. ટીમ ટૂંક સમયમાં કન્ફર્મ કરશે."
  },
  confirmed: {
    key: "confirmed",
    labelGu: "કન્ફર્મ થઈ ગયું (Confirmed)",
    labelEn: "Booking Confirmed",
    color: "bg-blue-100 text-blue-800 border-blue-300",
    badgeColor: "bg-blue-600",
    stepIndex: 1,
    desc: "તમારી બુકિંગ કન્ફર્મ થઈ ગઈ છે. નક્કી કરેલા સમયે ગાડી લઈ આવો."
  },
  inspection: {
    key: "inspection",
    labelGu: "ગાડી ચેકિંગ (Vehicle Checked)",
    labelEn: "Vehicle Inspected",
    color: "bg-purple-100 text-purple-800 border-purple-300",
    badgeColor: "bg-purple-600",
    stepIndex: 2,
    desc: "અમારા મિકેનિકે ગાડી ચેક કરી લીધી છે અને કામ સમજી લીધું છે."
  },
  started: {
    key: "started",
    labelGu: "કામ શરૂ થઈ ગયું (Work Started)",
    labelEn: "Work Started",
    color: "bg-indigo-100 text-indigo-800 border-indigo-300",
    badgeColor: "bg-indigo-600",
    stepIndex: 3,
    desc: "ગાડીનું રીપેરીંગ/સર્વિસિંગનું કામ ચાલુ કરી દેવામાં આવ્યું છે."
  },
  processing: {
    key: "processing",
    labelGu: "પ્રોસેસિંગમાં છે (Processing)",
    labelEn: "Processing / In Progress",
    color: "bg-orange-100 text-orange-800 border-orange-300",
    badgeColor: "bg-orange-500",
    stepIndex: 4,
    desc: "કામ અંતિમ તબક્કામાં છે (વોશિંગ, ફાઇનલ ટેસ્ટિંગ કે પોલિશિંગ)."
  },
  completed: {
    key: "completed",
    labelGu: "કામ પૂરું - ગાડી રેડી છે! (Completed)",
    labelEn: "Ready for Delivery",
    color: "bg-emerald-100 text-emerald-800 border-emerald-300",
    badgeColor: "bg-emerald-600",
    stepIndex: 5,
    desc: "ગાડીનું બધું કામ સરસ રીતે પૂરું થઈ ગયું છે. તમે ગાડી લઈ જઈ શકો છો."
  },
  cancelled: {
    key: "cancelled",
    labelGu: "કેન્સલ થયેલ (Cancelled)",
    labelEn: "Cancelled",
    color: "bg-rose-100 text-rose-800 border-rose-300",
    badgeColor: "bg-rose-600",
    stepIndex: -1,
    desc: "આ બુકિંગ કેન્સલ કરવામાં આવી છે."
  }
};

export const TRACKING_STEPS = [
  { id: "received", labelGu: "Booking Received", subGu: "બુકિંગ નોંધાઈ" },
  { id: "confirmed", labelGu: "Confirmed", subGu: "કન્ફર્મેશન" },
  { id: "inspection", labelGu: "Vehicle Checked", subGu: "ગાડી ચેક થઈ" },
  { id: "started", labelGu: "Work Started", subGu: "કામ શરૂ થયું" },
  { id: "processing", labelGu: "Processing", subGu: "ફાઇનલ ચેક/વોશ" },
  { id: "completed", labelGu: "Completed & Ready", subGu: "ગાડી તૈયાર છે" }
];

export const INITIAL_MOCK_BOOKINGS = [
  {
    bookingId: "SM-1024",
    customerName: "નિતીનભાઈ પરમાર (Rajesh Patel)",
    mobile: "9825012345",
    car: "Maruti Swift (GJ-01-AB-1234)",
    service: "જનરલ કાર સર્વિસ + વોશિંગ",
    date: "આજની તારીખ",
    time: "10:30 AM",
    status: "processing",
    notes: "ઓઇલ ફિલ્ટર બદલાઈ ગયું છે. હાલમાં અંડરબોડી વોશિંગ અને વેક્યૂમિંગ ચાલી રહ્યું છે.",
    mechanicName: "મુકેશભાઈ (હેડ મિકેનિક)",
    estimatedReadyTime: "આજે બપોરે ૩:૩૦ વાગ્યે",
    createdAt: "2026-09-01T09:00:00.000Z",
    billAmount: "₹2,450 (લગભગ)"
  },
  {
    bookingId: "SM-1025",
    customerName: "હિતેશભાઈ શાહ (Hitesh Shah)",
    mobile: "9879054321",
    car: "Hyundai i20 (GJ-27-CD-5678)",
    service: "ડેન્ટિંગ અને પેઇન્ટિંગ",
    date: "ગઈકાલે",
    time: "11:00 AM",
    status: "started",
    notes: "રિયર ફેન્ડરનું ડેન્ટિંગ પૂરું થયું છે. પ્રાઈમર કોટિંગ લગાવવાનું ચાલુ છે.",
    mechanicName: "ઇમરાનભાઈ (પેઇન્ટ એક્સપર્ટ)",
    estimatedReadyTime: "કાલે સાંજે ૬:૦૦ વાગ્યે",
    createdAt: "2026-08-31T11:00:00.000Z",
    billAmount: "ઇન્સ્પેક્શન મુજબ ₹3,200"
  },
  {
    bookingId: "SM-1026",
    customerName: "અલ્પેશભાઈ સોની (Alpesh Soni)",
    mobile: "9909011223",
    car: "Honda City (GJ-01-EF-9012)",
    service: "AC સર્વિસ & ગેસ રીચાર્જ",
    date: "આજે",
    time: "09:15 AM",
    status: "completed",
    notes: "કૂલિંગ કોઈલ ક્લિનિંગ અને ગેસ રીફિલ પૂરું થયું છે. AC પરફેક્ટ ચિલ્ડ છે.",
    mechanicName: "નરેશભાઈ",
    estimatedReadyTime: "ગાડી રેડી છે, લઈ જઈ શકો છો",
    createdAt: "2026-09-01T08:30:00.000Z",
    billAmount: "₹1,850"
  },
  {
    bookingId: "SM-1027",
    customerName: "વિપુલભાઈ દેસાઈ (Vipul Desai)",
    mobile: "9712033445",
    car: "Tata Nexon (GJ-18-GH-3456)",
    service: "સસ્પેન્શન ચેકઅપ & બ્રેક વર્ક",
    date: "આજે",
    time: "02:00 PM",
    status: "inspection",
    notes: "ગાડી વર્કશોપમાં આવી ગઈ છે. મિકેનિક ટેસ્ટ ડ્રાઈવ લઈને અવાજ ચેક કરી રહ્યો છે.",
    mechanicName: "મુકેશભાઈ",
    estimatedReadyTime: "આજે સાંજે ૬:૩૦ વાગ્યે",
    createdAt: "2026-09-01T10:00:00.000Z",
    billAmount: "ચેકઅપ પછી અંદાજ"
  }
];

const LOCAL_STORAGE_KEY = "shakti_motors_bookings";

// Get all bookings from localStorage or fallback to default mocks
export const getAllBookings = () => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_MOCK_BOOKINGS;
    }
  } catch (e) {
    console.warn("Error reading local bookings:", e);
  }
  return INITIAL_MOCK_BOOKINGS;
};

// Save a new booking
export const saveNewBooking = (bookingData) => {
  const all = getAllBookings();
  const newBookingId = `SM-${Math.floor(1000 + Math.random() * 9000)}`;

  const formattedBooking = {
    bookingId: newBookingId,
    customerName: bookingData.customerName || "",
    mobile: bookingData.mobile || "",
    whatsapp: bookingData.whatsapp || bookingData.mobile || "",
    carBrand: bookingData.carBrand || "",
    carModel: bookingData.carModel || "",
    carNumber: bookingData.carNumber || "",
    car: `${bookingData.carBrand || ''} ${bookingData.carModel || ''}`.trim(),
    fuelType: bookingData.fuelType || "",
    serviceName: bookingData.serviceName || bookingData.service || "",
    service: bookingData.serviceName || bookingData.service || "",
    date: bookingData.date || "",
    time: bookingData.time || "",
    problemNote: bookingData.problemNote || "",
    status: "pending",
    notes: "તમારી બુકિંગ રિક્વેસ્ટ સફળતાપૂર્વક નોંધાઈ ગઈ છે. અમારી ટીમ ટૂંક સમયમાં તમને કન્ફર્મેશન માટે કોલ/વોટ્સએપ કરશે.",
    mechanicName: "શક્તિ મોટર્સ ટીમ",
    estimatedReadyTime: "ગાડી વર્કશોપમાં આવ્યા પછી સમય નક્કી થશે",
    createdAt: new Date().toISOString(),
    billAmount: "કામ ચેક કર્યા પછી નક્કી થશે"
  };

  const updated = [formattedBooking, ...all];
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }

  return formattedBooking;
};

// Find booking by ID or Mobile Number
export const findBooking = (query) => {
  if (!query) return null;
  const cleanQuery = query.trim().toLowerCase();
  const all = getAllBookings();

  return all.find(b =>
    b.bookingId.toLowerCase() === cleanQuery ||
    b.mobile.replace(/\D/g, '').includes(cleanQuery.replace(/\D/g, '')) ||
    (b.car && b.car.toLowerCase().includes(cleanQuery))
  ) || null;
};
