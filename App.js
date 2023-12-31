import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import AboutUs from './src/screens/AboutUs';
import HomePage from './src/screens/Home';
import Contact from './src/screens/Contact';
import FAQ from './src/screens/FAQ';
import LogIn from './src/screens/LogIn';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Stack = createStackNavigator();

export default function App() {

  const reducer = (state, action) => {
    if (action.type === 'changeUsername') {
      return { username: action.payload };
    }
    else {
      return state;
    }
  }
  const store = createStore(reducer, {username:'No user set yet'});


  return (
    <Provider store={store}>
     < NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="FAQ" component={FAQ}/>
        <Stack.Screen name="LogIn" component={LogIn}/>

        </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
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
    width: 300,  // Specify the width
    height: 80,  // Specify the height
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});