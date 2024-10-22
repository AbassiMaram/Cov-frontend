// src/services/tripService.js

const API_URL = 'https://yourapi.com/api'; // Remplacez par l'URL de votre API

// Fonction pour récupérer les trajets
export const fetchTrips = async () => {
  try {
    const response = await fetch(`${API_URL}/trips`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des trajets');
    }
    return await response.json(); // Retourner la liste des trajets
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour créer un trajet
export const createTrip = async (tripData) => {
  try {
    const response = await fetch(`${API_URL}/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la création du trajet');
    }
    return await response.json(); // Retourner le trajet créé
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour mettre à jour un trajet
export const updateTrip = async (tripId, tripData) => {
  try {
    const response = await fetch(`${API_URL}/trips/${tripId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du trajet');
    }
    return await response.json(); // Retourner le trajet mis à jour
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour supprimer un trajet
export const deleteTrip = async (tripId) => {
  try {
    const response = await fetch(`${API_URL}/trips/${tripId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du trajet');
    }
    return await response.json(); // Retourner le résultat de la suppression
  } catch (error) {
    console.error(error);
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};
