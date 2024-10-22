// src/utils/validation.js

export const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const isPhoneNumberValid = (phone) => {
    const re = /^\d{10}$/; // Exemple pour les numéros de téléphone à 10 chiffres
    return re.test(phone);
  };
  
  export const isNotEmpty = (value) => {
    return value.trim() !== '';
  };
  
  export const validateTripData = (tripData) => {
    const { departure, arrival, date, price } = tripData;
    return (
      isNotEmpty(departure) &&
      isNotEmpty(arrival) &&
      new Date(date).getTime() > Date.now() &&
      price > 0
    );
  };
  