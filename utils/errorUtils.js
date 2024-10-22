// src/utils/errorUtils.js

export const handleError = (error) => {
    console.error(error); // Log l'erreur pour le développement
    if (error.response) {
      // Erreur de réponse du serveur
      return error.response.data.message || 'Une erreur est survenue';
    } else if (error.request) {
      // Pas de réponse du serveur
      return 'Aucune réponse du serveur. Vérifiez votre connexion.';
    } else {
      // Erreur autre
      return error.message || 'Une erreur est survenue';
    }
  };
  