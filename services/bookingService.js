// src/services/bookingService.js

const API_URL = 'https://yourapi.com/api'; // Remplacez par l'URL de votre API

// Fonction pour récupérer les réservations
export const fetchBookings = async () => {
  try {
    const response = await fetch(`${API_URL}/bookings`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des réservations');
    }
    return await response.json(); // Retourner les réservations
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour créer une réservation
export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la création de la réservation');
    }
    return await response.json(); // Retourner la réservation créée
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour annuler une réservation
export const cancelBooking = async (bookingId) => {
  try {
    const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'annulation de la réservation');
    }
    return await response.json(); // Retourner le résultat de l'annulation
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};
