// src/hooks/useTrips.js

import { useState } from 'react';

// Hook personnalisé pour gérer les trajets
const useTrips = () => {
  // État pour stocker les trajets
  const [trips, setTrips] = useState([]);

  // Fonction pour ajouter un nouveau trajet
  const addTrip = (trip) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  // Fonction pour mettre à jour un trajet existant
  const updateTrip = (updatedTrip) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => (trip.id === updatedTrip.id ? updatedTrip : trip))
    );
  };

  // Fonction pour supprimer un trajet par son ID
  const deleteTrip = (tripId) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
  };

  // Retourner les trajets et les fonctions du hook
  return {
    trips,
    addTrip,
    updateTrip,
    deleteTrip,
  };
};

export default useTrips;
