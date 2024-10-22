import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import useTrips from '../../../hooks/useTrips.js'; // Assurez-vous que ce hook est correctement importé

const CreateTrip = () => {
  const { addTrip } = useTrips();
  const [tripDetails, setTripDetails] = useState({ destination: '', date: '', price: '' });

  const handleSubmit = () => {
    const { destination, date, price } = tripDetails;

    // Validation des champs
    if (!destination || !date || !price) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    const newTrip = {
      id: Date.now(),
      ...tripDetails,
    };

    try {
      addTrip(newTrip); // Ajoutez le nouveau trajet
      Alert.alert('Succès', 'Le trajet a été créé avec succès!');
      setTripDetails({ destination: '', date: '', price: '' }); // Réinitialiser le formulaire
    } catch (error) {
      console.error('Erreur lors de l\'ajout du trajet:', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la création du trajet.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={tripDetails.destination}
        onChangeText={(text) => setTripDetails({ ...tripDetails, destination: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={tripDetails.date}
        onChangeText={(text) => setTripDetails({ ...tripDetails, date: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix"
        value={tripDetails.price}
        onChangeText={(text) => setTripDetails({ ...tripDetails, price: text })}
        keyboardType="numeric" // Permet de restreindre le clavier aux nombres uniquement
      />
      <Button title="Créer un Trajet" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

export default CreateTrip;
