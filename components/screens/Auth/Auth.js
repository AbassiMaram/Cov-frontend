import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup
  const [error, setError] = useState('');

  const handleAuth = async () => {
    const url = isLogin ? 'https://yourapi.com/login' : 'https://yourapi.com/signup';

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await axios.post(url, { email, password });
      console.log(response.data);
      // Effacer l'erreur et naviguer après une authentification réussie
      setError('');
      Alert.alert('Succès', isLogin ? 'Connexion réussie!' : 'Inscription réussie!');
      navigation.navigate('Home'); 
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Une erreur est survenue, réessayez.';
      setError(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Connexion' : 'Inscription'}</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isLogin ? 'Se connecter' : 'S\'inscrire'} onPress={handleAuth} />
      
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
        <Text style={styles.toggleText}>
          {isLogin ? 'Pas de compte ? Inscrivez-vous' : 'Déjà un compte ? Connectez-vous'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  toggleButton: {
    marginTop: 16,
  },
  toggleText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Auth;
