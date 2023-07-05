import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('Component has mounted');
    const getUsername = async () => {
      try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
          setUsername(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsername();
  }, []);  

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('username');
      navigation.navigate('Login');
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Text style={styles.header}>Contact page</Text>

      <Text style={styles.username}>Hello, {username}!</Text>

      <Button title='Click to go to the about page' color="#ffdd80" onPress={() => navigation.navigate('FAQ')}></Button>

      <Button title="Logout" color="#ff0000" onPress={handleLogout}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
