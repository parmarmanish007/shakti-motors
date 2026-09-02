// Centralized localStorage manager for Shakti Motors appointments and bookings
// Phase 07 Deliverable: Keeps storage logic clean and modular

import {
  getAllBookings,
  saveNewBooking,
  findBooking,
  INITIAL_MOCK_BOOKINGS,
  STATUS_MAP
} from '../data/mockBookings';

export const bookingStorage = {
  // Get all bookings from localStorage or fallback to defaults
  getAll: getAllBookings,

  // Save new customer booking and generate a custom Booking ID (e.g. SM-1048)
  save: saveNewBooking,

  // Find booking by Booking ID or Mobile Number
  find: findBooking,

  // Reset to initial mock dataset (useful for testing)
  resetToDefaults: () => {
    try {
      localStorage.setItem("shakti_motors_bookings", JSON.stringify(INITIAL_MOCK_BOOKINGS));
      return true;
    } catch (e) {
      console.warn("Error resetting bookings:", e);
      return false;
    }
  },

  // Clear all bookings
  clearAll: () => {
    try {
      localStorage.removeItem("shakti_motors_bookings");
      return true;
    } catch (e) {
      console.warn("Error clearing bookings:", e);
      return false;
    }
  },

  // Status map reference
  statusMap: STATUS_MAP
};

export default bookingStorage;
