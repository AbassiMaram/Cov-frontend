import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Booking = ({ route }) => {
  const { trip } = route.params; // Récupération des informations sur le trajet passé en tant que paramètre de navigation
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');

  const handleBooking = async () => {
    // Validation des champs obligatoires
    if (!passengerName.trim() || !passengerPhone.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await axios.post(`https://yourapi.com/trips/${trip.id}/reserve`, {
        name: passengerName,
        phone: passengerPhone,
      });

      Alert.alert('Réservation réussie', `Vous avez réservé un trajet vers ${trip.destination} avec succès.`);
      // Logique supplémentaire après la réservation réussie (ex. : navigation vers une autre page)
    } catch (error) {
      console.error('Erreur lors de la réservation du trajet :', error);
      Alert.alert('Échec de la réservation', 'Un problème est survenu lors de votre réservation. Veuillez réessayer plus tard.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réservation pour {trip.destination}</Text>
      <Text style={styles.label}>Nom du passager :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        value={passengerName}
        onChangeText={setPassengerName}
      />
      <Text style={styles.label}>Téléphone du passager :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre numéro de téléphone"
        value={passengerPhone}
        onChangeText={setPassengerPhone}
        keyboardType="phone-pad"
      />
      <Button title="Confirmer la réservation" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Booking;
