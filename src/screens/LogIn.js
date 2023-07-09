import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyButton from '../components/MyButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage({ navigation }) {
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
    <LinearGradient
      colors={['#46C2CB', '#F2F7A1']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      <Text style={styles.username}>Hello, {username}!</Text>

      <Text style={styles.header}>Welcome</Text>

      <Text style={styles.textStyle}>Go to:</Text>

      <MyButton color='#46C2CB' title="Click me to change username" access="Button"/>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutUs')}>
          <LinearGradient colors={['#6D67E4', '#8B67E4']} style={styles.gradient}>
            <Text style={styles.buttonText}>The about page</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Contact')}>
          <LinearGradient colors={['#6D67E4', '#8B67E4']} style={styles.gradient}>
            <Text style={styles.buttonText}>Contact</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('FAQ')}>
          <LinearGradient colors={['#6D67E4', '#8B67E4']} style={styles.gradient}>
            <Text style={styles.buttonText}>FAQ</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginBottom: 10,
    ...Platform.select({ // Specific properties for each platform
      ios: { // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: { // Elevation for Android
        elevation: 5,
      },
    }),
  },
  buttonStyle: {
    width: 250,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 10,
  },
});
