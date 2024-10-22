import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/AppContext';
import Auth from './components/screens/Auth/Auth'; 
import Profile from './components/screens/Profile/Profile'; 
import SearchTrips from './components/screens/SearchTrips/SearchTrips'; 
import CreateTrip from './components/screens/CreateTrips/CreateTrip'; 
import TripDetails from './components/screens/TripDetails/TripDetails'; 
import Booking from './components/screens/Booking/Booking'; 
import Chat from './components/screens/Chat/Chat'; 
import DriverManagement from './components/screens/DriverManagement/DriverManagement'; 
import History from './components/screens/History/History'; 
import Admin from './components/screens/Admin/Admin'; 
import Map from './components/screens/Map/Map'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
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
    </AppProvider>
  );
};

export default App;
