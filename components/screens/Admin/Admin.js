import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, Alert } from 'react-native';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer la liste des utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://yourapi.com/admin/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
      Alert.alert('Erreur', 'Impossible de charger les utilisateurs.');
    }
  };

  // Fonction pour activer ou désactiver un utilisateur
  const toggleUserStatus = async (userId, isActive) => {
    try {
      await axios.patch(`https://yourapi.com/admin/users/${userId}`, { active: !isActive });
      fetchUsers(); // Rafraîchit la liste des utilisateurs après la mise à jour
    } catch (error) {
      console.error('Error updating user status:', error);
      Alert.alert('Erreur', 'Impossible de mettre à jour le statut de l\'utilisateur.');
    }
  };

  // Fonction pour rendre chaque élément utilisateur dans la liste
  const renderUserItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text style={styles.userText}>{item.name}</Text>
      <Text style={styles.userText}>{item.email}</Text>
      <Text style={styles.userText}>{`Statut: ${item.active ? 'Actif' : 'Inactif'}`}</Text>
      <Button
        title={item.active ? 'Désactiver' : 'Activer'}
        onPress={() => toggleUserStatus(item.id, item.active)}
        color={item.active ? 'red' : 'green'}
      />
    </View>
  );

  // Affichage d'un indicateur de chargement pendant le chargement des données
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des utilisateurs...</Text>
      </View>
    );
  }

  // Rendu de la liste des utilisateurs
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des Utilisateurs</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Styles pour le composant Admin
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  userText: {
    fontSize: 16,
    marginBottom: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Admin;
