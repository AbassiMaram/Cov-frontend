import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

const History = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('https://yourapi.com/drivers/trips/history');
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trip history:', error);
      Alert.alert('Error', 'Could not load trip history.');
    } finally {
      setLoading(false);
    }
  };

  const renderTripItem = ({ item }) => (
    <View style={styles.tripContainer}>
      <Text style={styles.tripText}>{`${item.departure} to ${item.arrival}`}</Text>
      <Text style={styles.tripText}>{`Date: ${item.date}`}</Text>
      <Text style={styles.tripText}>{`Price: $${item.price}`}</Text>
      <Text style={styles.tripText}>{`Status: ${item.status}`}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip History</Text>
      {trips.length > 0 ? (
        <FlatList
          data={trips}
          renderItem={renderTripItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noTripsText}>No trip history available.</Text>
      )}
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
  tripContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  tripText: {
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTripsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});

export default History;
