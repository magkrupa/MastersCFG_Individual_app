import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        navigation.navigate('LogIn');
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.log('Error while login:', error);
    }
  };

  const handleRegister = async () => {
    if (username === '' || password === '') {
      alert('Please enter a username and password.');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      alert('Registration successful!');
      setUsername('');
      setPassword('');

      // Redirect to the home page after successful registration
      navigation.navigate('Contact');
    } catch (error) {
      console.log('Error storing credentials:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="Enter your password"
      />

      <View style={styles.buttonContainer}>
        <Button title="Log in" onPress={handleLogin} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 8, 
  },
});

export default LoginScreen;
