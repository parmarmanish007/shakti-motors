# 📊 Shakti Motors & Service Centre — Google Sheets Integration Guide

Follow these 4 simple steps to save **every new appointment booking and contact inquiry** directly into your personal Google Sheet in real-time.

---

## 🛠️ Step 1: Create a New Google Sheet & Open Apps Script

1. Go to [Google Sheets](https://sheets.new) in your browser.
2. Name your Google Sheet: **"Shakti Motors Bookings & Inquiries"**.
3. In the top menu, click: **Extensions (એક્સટેન્શન) ➔ Apps Script**.

---

## 📝 Step 2: Copy & Paste the Script Code

Delete any code currently in `Code.gs` and replace it with this exact script:

```javascript
function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Auto-create Header Row if Sheet is blank
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submission Time",
        "Type",
        "Booking ID",
        "Customer Name (નામ)",
        "Mobile Number (મોબાઈલ)",
        "WhatsApp Number",
        "Car Brand",
        "Car Model (મોડેલ)",
        "Vehicle Plate No. (ગાડી નંબર)",
        "Fuel Type",
        "Selected Service (સર્વિસ)",
        "Appointment Date (તારીખ)",
        "Appointment Time (સમય)",
        "Problem Note (સમસ્યા/નોટ)",
        "Status"
      ]);
      
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 15);
      headerRange.setBackground("#EA580C"); // Shakti Motors Orange
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    var p = (e && e.parameter) ? e.parameter : {};
    
    // Parse JSON fallback if sent in body
    if (e && e.postData && e.postData.contents) {
      try {
        var bodyData = JSON.parse(e.postData.contents);
        for (var key in bodyData) {
          p[key] = bodyData[key];
        }
      } catch (err) {}
    }
    
    // Format timestamp
    var timestamp = p.dateSubmitted || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    
    // Append booking/inquiry row (Leave missing fields completely blank)
    sheet.appendRow([
      timestamp,
      p.type === "inquiry" ? "Inquiry (પૂછપરછ)" : "Appointment Booking",
      p.bookingId || "",
      p.customerName || p.name || "",
      p.mobile || p.phone || "",
      p.whatsapp || "",
      p.carBrand || "",
      p.carModel || p.car || "",
      p.carNumber || "",
      p.fuelType || "",
      p.serviceName || p.service || "",
      p.appointmentDate || p.date || "",
      p.appointmentTime || p.time || "",
      p.problemNote || p.message || "",
      p.status || "પેન્ડિંગ (Pending)"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 🚀 Step 3: Deploy as Web App

1. Click on the blue **Deploy (ડિપ્લોય)** button at the top right ➔ **New deployment (નવું ડિપ્લોયમેન્ટ)**.
2. Click the gear ⚙️ icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Shakti Motors Booking API`
   - **Execute as**: `Me (તમારું Google Account)`
   - **Who has access (કોણ એક્સેસ કરી શકે)**: **`Anyone (કોઈપણ વ્યક્તિ)`** 👈 *(ખાસ આ પસંદ કરવું)*
4. Click **Deploy**.
5. Click **Authorize access (પરવાનગી આપો)**, choose your Google account, click **Advanced ➔ Go to Shakti Motors Booking API (unsafe)**, and click **Allow**.
6. **Copy the Web App URL** (It looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔗 Step 4: Paste the URL in your Website Config

Open `src/data/config.js` in your project and paste your URL on line 18:

```javascript
// src/data/config.js
export const garageConfig = {
  // ...
  googleScriptUrl: "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec",
  // ...
};
```

---

## ✅ You're Done!
Whenever a customer books a service on `/booking` or submits a query on `/contact`, a new row will instantly appear in your Google Sheet with all customer and vehicle details!
