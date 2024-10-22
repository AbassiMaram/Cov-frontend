import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import axios from 'axios';

const DriverManagement = () => {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({
    departure: '',
    arrival: '',
    date: '',
    time: '',
    price: '',
  });

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://yourapi.com/drivers/trips');
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trips:', error);
      Alert.alert('Error', 'Could not load trips.');
    }
  };

  const handleAddTrip = async () => {
    const { departure, arrival, date, time, price } = newTrip;

    // Validation des champs
    if (!departure || !arrival || !date || !time || !price) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('https://yourapi.com/drivers/trips', newTrip);
      setTrips([...trips, response.data]);
      setNewTrip({ departure: '', arrival: '', date: '', time: '', price: '' });
      Alert.alert('Success', 'Trip added successfully.');
    } catch (error) {
      console.error('Error adding trip:', error);
      Alert.alert('Error', 'Could not add the trip.');
    }
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      await axios.delete(`https://yourapi.com/drivers/trips/${tripId}`);
      setTrips(trips.filter((trip) => trip.id !== tripId));
      Alert.alert('Success', 'Trip deleted successfully.');
    } catch (error) {
      console.error('Error deleting trip:', error);
      Alert.alert('Error', 'Could not delete the trip.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Management</Text>

      <TextInput
        style={styles.input}
        placeholder="Departure"
        value={newTrip.departure}
        onChangeText={(text) => setNewTrip({ ...newTrip, departure: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Arrival"
        value={newTrip.arrival}
        onChangeText={(text) => setNewTrip({ ...newTrip, arrival: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={newTrip.date}
        onChangeText={(text) => setNewTrip({ ...newTrip, date: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={newTrip.time}
        onChangeText={(text) => setNewTrip({ ...newTrip, time: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={newTrip.price}
        onChangeText={(text) => setNewTrip({ ...newTrip, price: text })}
        keyboardType="numeric" // Utiliser le clavier numérique pour le prix
      />
      <Button title="Add Trip" onPress={handleAddTrip} />

      <FlatList
        data={trips}
        renderItem={({ item }) => (
          <View style={styles.tripContainer}>
            <Text style={styles.tripText}>{`${item.departure} to ${item.arrival} on ${item.date} at ${item.time}`}</Text>
            <Text style={styles.tripText}>Price: ${item.price}</Text>
            <Button title="Delete" onPress={() => handleDeleteTrip(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  tripContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  tripText: {
    fontSize: 16,
  },
});

export default DriverManagement;
