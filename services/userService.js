// src/services/userService.js

const API_URL = 'https://yourapi.com/api'; // Remplacez par l'URL de votre API

// Fonction pour enregistrer un utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription de l\'utilisateur');
    }
    return await response.json(); // Retourner les données de l'utilisateur inscrit
  } catch (error) {
    console.error(error); // Loguer l'erreur
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour connecter un utilisateur
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la connexion de l\'utilisateur');
    }
    return await response.json(); // Retourner les données de l'utilisateur connecté
  } catch (error) {
    console.error(error); // Loguer l'erreur
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour récupérer le profil d'un utilisateur
export const fetchUserProfile = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil de l\'utilisateur');
    }
    return await response.json(); // Retourner les données du profil utilisateur
  } catch (error) {
    console.error(error); // Loguer l'erreur
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};

// Fonction pour mettre à jour le profil d'un utilisateur
export const updateUserProfile = async (userId, userData) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du profil de l\'utilisateur');
    }
    return await response.json(); // Retourner les données du profil mis à jour
  } catch (error) {
    console.error(error); // Loguer l'erreur
    throw error; // Propager l'erreur pour un traitement ultérieur
  }
};
