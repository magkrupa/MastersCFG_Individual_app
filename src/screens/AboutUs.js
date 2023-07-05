import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AboutUs({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello, {username}!</Text>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Text style={styles.textStyle}>About Us Page</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.textStyle}>Go back!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
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
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});
