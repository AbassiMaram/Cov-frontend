import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Chat = ({ route }) => {
  const { tripId } = route.params; // Récupération de l'ID du trajet passé en tant que paramètre de navigation
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://yourapi.com/trips/${tripId}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        Alert.alert('Erreur', 'Impossible de charger les messages.');
      }
    };

    fetchMessages();
  }, [tripId]);

  const handleSend = async () => {
    // Validation de l'entrée du message
    if (!newMessage.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer un message valide.');
      return;
    }

    try {
      const response = await axios.post(`https://yourapi.com/trips/${tripId}/messages`, {
        text: newMessage,
      });
      setMessages([...messages, response.data]);
      setNewMessage(''); // Réinitialisation du champ de message
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      Alert.alert('Erreur', 'Impossible d\'envoyer le message.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Assurez-vous que les ID sont des chaînes de caractères
      />
      <TextInput
        style={styles.input}
        placeholder="Tapez votre message..."
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <Button title="Envoyer" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
  },
  messageText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 5,
  },
});

export default Chat;
