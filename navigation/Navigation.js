// src/navigation/Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './components/screens/Auth/Auth';
import Profile from './components/screens/Profile/Profile';
import SearchTrips from './component/screens/SearchTrips/SearchTrips';
import CreateTrip from './components/screens/CreateTrip/CreateTrip';
import TripDetails from './components/screens/TripDetails/TripDetails';
import Booking from './components/screens/Booking/Booking';
import Chat from './components/screens/Chat/Chat';
import DriverManagement from './components/screens/DriverManagement/DriverManagement';
import History from './components/screens/History/History';
import Admin from './components/screens/Admin/Admin';
import Map from './components/screens/Map/Map';

// Créer le Stack Navigator
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        {/* Définir les écrans dans le Stack Navigator */}
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SearchTrips" component={SearchTrips} />
        <Stack.Screen name="CreateTrip" component={CreateTrip} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="DriverManagement" component={DriverManagement} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
