// src/config/config.js

const CONFIG = {
    // API URL
    API_URL: 'https://api.votre-app-covoiturage.com', // Remplacez par l'URL de votre API
  
    // Clés d'API pour les services externes
    GOOGLE_MAPS_API_KEY: 'VOTRE_CLE_API_GOOGLE_MAPS',
  
    // Paramètres de notification
    NOTIFICATION: {
      // Configuration des notifications
      EXPO_PUSH_NOTIFICATION_ENDPOINT: 'https://exp.host/--/api/v2/push/send',
    },
  
    // Configuration des délais d'attente
    TIMEOUT: 5000, // Temps d'attente en millisecondes pour les requêtes API
  
    // Autres paramètres
    APP_NAME: 'Yallabina', // Nom de votre application
    APP_VERSION: '1.0.0', // Version de votre application
  
    // Configurations de l'environnement
    ENVIRONMENT: process.env.NODE_ENV || 'development', // 'development' ou 'production'
  };
  
  export default CONFIG;
  