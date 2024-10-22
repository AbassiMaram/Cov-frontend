import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchTrips } from '../../../services/tripService.js'; // Assurez-vous que cette ligne est décommentée

const SearchTrips = () => {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrips = async () => {
      setLoading(true);
      try {
        const tripsData = await fetchTrips();
        setTrips(tripsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); // Affiche un indicateur de chargement pendant le chargement des données
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          {trips.length === 0 ? (
            <Text style={styles.noTripsText}>Aucun voyage trouvé.</Text>
          ) : (
            <FlatList
              data={trips}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.tripContainer}>
                  <Text style={styles.tripText}>{item.destination}</Text>
                  <Text style={styles.tripText}>{item.date}</Text>
                  <Text style={styles.tripText}>{item.price}€</Text>
                </View>
              )}
            />
          )}
        </>
      )}
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  noTripsText: {
    textAlign: 'center',
    marginTop: 16,
  },
  tripContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  tripText: {
    fontSize: 16,
  },
});

export default SearchTrips;
