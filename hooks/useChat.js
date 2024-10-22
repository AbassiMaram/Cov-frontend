// src/hooks/useChat.js

import { useState } from 'react';

// Hook personnalisé pour gérer les messages de chat
const useChat = () => {
  // État pour stocker les messages du chat
  const [messages, setMessages] = useState([]);

  // Fonction pour ajouter un message au chat
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Fonction pour effacer tous les messages du chat
  const clearChat = () => {
    setMessages([]);
  };

  // Retourner les messages et les fonctions du hook
  return {
    messages,
    addMessage,
    clearChat,
  };
};

export default useChat;
