import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    this.getUsername();
    console.log('Component has mounted');
  }

  getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        this.setState({ username: value });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.username}>Hello, {this.state.username}!</Text>
        <Text style={styles.header}>Frequently asked questions</Text>
        <Text style={styles.italicTextStyle}>1. Something does not work?</Text>
        <Text style={styles.textStyle}> Shake the phone!</Text>
        <Text style={styles.italicTextStyle}>2. You do not know something?</Text>
        <Text style={styles.textStyle}> Google it!</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.textStyle}>Go to Home page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginBottom: 10,
  },
  italicTextStyle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'normal',
    fontStyle: 'italic',
    letterSpacing: 0.25,
    color: 'black',
  },
});
