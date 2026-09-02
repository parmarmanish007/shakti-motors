// Google Sheets Integration Helper for Shakti Motors & Service Centre
// Sends appointment bookings and contact inquiries directly to Google Sheets via Google Apps Script Web App

import { garageConfig } from '../data/config';

/**
 * Send new booking submission to Google Sheets
 * @param {Object} bookingData - Formatted booking details
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export async function sendBookingToGoogleSheets(bookingData) {
  const scriptUrl = garageConfig.googleScriptUrl;

  if (!scriptUrl || scriptUrl.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
    console.log("ℹ️ Google Sheets URL not configured yet. Saving to local storage only.");
    return { success: true, isMock: true };
  }

  const payload = {
    type: "booking",
    dateSubmitted: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    bookingId: bookingData.bookingId || `SM-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: bookingData.customerName ? bookingData.customerName.trim() : "",
    mobile: bookingData.mobile ? bookingData.mobile.trim() : "",
    whatsapp: bookingData.whatsapp ? bookingData.whatsapp.trim() : (bookingData.mobile ? bookingData.mobile.trim() : ""),
    carBrand: bookingData.carBrand ? bookingData.carBrand.trim() : "",
    carModel: bookingData.carModel ? bookingData.carModel.trim() : "",
    carNumber: bookingData.carNumber ? bookingData.carNumber.trim() : "",
    fuelType: bookingData.fuelType ? bookingData.fuelType.trim() : "",
    serviceName: bookingData.serviceName || bookingData.service || "",
    appointmentDate: bookingData.appointmentDate || bookingData.date || bookingData.preferredDate || "",
    appointmentTime: bookingData.appointmentTime || bookingData.time || bookingData.preferredTime || "",
    problemNote: bookingData.problemNote ? bookingData.problemNote.trim() : "",
    status: "પેન્ડિંગ (Pending)"
  };

  try {
    // 1. Send via POST (text/plain to avoid CORS preflight issues with Google Apps Script)
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log("✅ Booking dispatched to Google Sheets:", payload.bookingId);
    return { success: true };
  } catch (error) {
    console.warn("⚠️ Post failed, trying GET fallback:", error);
    try {
      // 2. GET fallback with query parameters
      const params = new URLSearchParams(payload);
      await fetch(`${scriptUrl}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors"
      });
      return { success: true };
    } catch (err2) {
      console.warn("⚠️ Could not send booking to Google Sheets:", err2);
      return { success: false, error: err2 };
    }
  }
}

/**
 * Send contact inquiry to Google Sheets
 * @param {Object} inquiryData - Contact inquiry details
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export async function sendInquiryToGoogleSheets(inquiryData) {
  const scriptUrl = garageConfig.googleScriptUrl;

  if (!scriptUrl || scriptUrl.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
    return { success: true, isMock: true };
  }

  const payload = {
    type: "inquiry",
    dateSubmitted: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    customerName: inquiryData.name || "",
    mobile: inquiryData.mobile || inquiryData.phone || "",
    carModel: inquiryData.car || "",
    serviceName: inquiryData.service || "જનરલ પૂછપરછ",
    problemNote: inquiryData.message || "",
    status: "નવી પૂછપરછ (New Inquiry)"
  };

  try {
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log("✅ Inquiry dispatched to Google Sheets");
    return { success: true };
  } catch (error) {
    try {
      const params = new URLSearchParams(payload);
      await fetch(`${scriptUrl}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors"
      });
      return { success: true };
    } catch (err2) {
      console.warn("⚠️ Could not send inquiry to Google Sheets:", err2);
      return { success: false, error: err2 };
    }
  }
}
