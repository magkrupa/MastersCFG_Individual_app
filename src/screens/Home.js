import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage({ navigation }) {
  return (
    <LinearGradient
      colors={['#46C2CB', '#F2F7A1']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Text style={styles.textStyle}>Go to:</Text>

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
