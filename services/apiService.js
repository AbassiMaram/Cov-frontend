// src/services/apiService.js

import axios from 'axios';
import CONFIG from '../config/config';

// Créer un client API avec Axios
const apiClient = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: CONFIG.TIMEOUT,
});

// Exemple de requête GET pour récupérer les trajets
export const getTrips = async () => {
  try {
    const response = await apiClient.get('/trips');
    return response.data; // Retourne les données des trajets
  } catch (error) {
    console.error('Erreur lors de la récupération des trajets:', error);
    // Vous pouvez gérer l'erreur ici selon vos besoins
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Vous pouvez ajouter d'autres requêtes API ici (POST, PUT, DELETE, etc.)

export default apiClient; // Exporter le client API si nécessaire
