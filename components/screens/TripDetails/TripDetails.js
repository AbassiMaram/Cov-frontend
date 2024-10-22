import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const TripDetails = ({ route }) => {
  const { tripId } = route.params;
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // État pour gérer les erreurs

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`https://yourapi.com/trips/${tripId}`);
        setTrip(response.data);
      } catch (error) {
        console.error('Error fetching trip details:', error);
        setError('Could not load trip details.'); // Mettre à jour l'état d'erreur
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  const handleReserve = async () => {
    try {
      const response = await axios.post(`https://yourapi.com/trips/${tripId}/reserve`);
      console.log('Trip reserved:', response.data);
      Alert.alert('Success', 'Trip reserved successfully!'); // Afficher une alerte de succès
    } catch (error) {
      console.error('Error reserving trip:', error);
      Alert.alert('Error', 'Could not reserve the trip.'); // Afficher une alerte d'erreur
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text> {/* Assurez-vous que ce texte est dans un <Text> */}
      </View>
    );
  }
  

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text> {/* Afficher le message d'erreur si présent */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Details</Text>
      <Text style={styles.label}>Departure: {trip.departure}</Text>
      <Text style={styles.label}>Destination: {trip.destination}</Text>
      <Text style={styles.label}>Date: {trip.date}</Text>
      <Text style={styles.label}>Time: {trip.time}</Text>
      <Text style={styles.label}>Price: ${trip.price}</Text>
      <Text style={styles.label}>Driver: {trip.driver.name}</Text>
      <Text style={styles.label}>Available Seats: {trip.availableSeats}</Text>
      <Button title="Reserve this Trip" onPress={handleReserve} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default TripDetails;
