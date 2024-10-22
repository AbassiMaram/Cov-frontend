import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

const Map = () => {
  const [trips, setTrips] = useState([]);
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://yourapi.com/trips');
      setTrips(response.data);

      // Update the map region based on the trips' locations if available
      if (response.data.length > 0 && response.data[0].startLocation) {
        const { startLocation } = response.data[0];
        setRegion({
          latitude: startLocation.latitude,
          longitude: startLocation.longitude,
          latitudeDelta: 0.0922, // Adjust as needed
          longitudeDelta: 0.0421, // Adjust as needed
        });
      }
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // Use Google Maps
        style={styles.map}
        region={region} // Use region instead of initialRegion for dynamic updates
      >
        {trips.map((trip) => (
          trip.startLocation && trip.endLocation ? ( // Ensure locations exist
            <Marker
              key={trip.id}
              coordinate={{
                latitude: trip.startLocation.latitude,
                longitude: trip.startLocation.longitude,
              }}
              title={trip.title}
              description={`From: ${trip.startLocation.name} To: ${trip.endLocation.name}`}
            />
          ) : null
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
