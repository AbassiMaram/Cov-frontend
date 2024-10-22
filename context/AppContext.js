// src/context/AppContext.js

import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const AppContext = createContext();

// Fournisseur de contexte
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [bookings, setBookings] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, trips, setTrips, bookings, setBookings }}>
      {children} {/* Vérifiez que 'children' ne contient pas de texte brut ici */}
    </AppContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useAppContext = () => {
  return useContext(AppContext);
};
