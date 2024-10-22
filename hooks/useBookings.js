// src/hooks/useBookings.js

import { useState } from 'react';

// Hook personnalisé pour gérer les réservations
const useBookings = () => {
  // État pour stocker les réservations
  const [bookings, setBookings] = useState([]);

  // Fonction pour ajouter une réservation
  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Fonction pour annuler une réservation par son ID
  const cancelBooking = (bookingId) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
  };

  // Retourner les valeurs et fonctions du hook
  return {
    bookings,
    addBooking,
    cancelBooking,
  };
};

export default useBookings;
