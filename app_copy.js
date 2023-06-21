//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import MyButton from './src/components/MyButton';
//import { createStackNavigator } from '@react-navigation/stack'
//import  {NavigationContainer } from  '@react-navigation/native'
//import HomePage from './src/screen_1'
//
//
//const Stack = createStackNavigator()
//
//export default function App() {
//
//  return (
//    <NavigationContainer>
//        <Stack.Navigator>
//            <Stack.Screen name="screen_1" component={Homepage} />
//        </Stack.Navigator>
//    </NavigationContainer>
//
//    <View style={styles.container}>
//      <LinearGradient
//        // Background Linear Gradient
//        colors={['purple', 'white']}
//        start={{ x: 0, y: 0 }}
//        end={{ x: 1, y: 1 }}
//        style={styles.container}>
//        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
//        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
//        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
//        <Text style={styles.text}>It is working :D</Text>
//        <MyButton color='#82CAFF' title="ok" access="Button"/>
//        <MyButton color='red' title="ok2" access="Button"/>
//        <MyButton color='pink' title="ok3" access="Button"/>
//        <MyButton title="ok4"/>
//        <MyButton title="ok5"/>
//
//        <StatusBar style="auto" />
//      </LinearGradient>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  text: {
//    color: 'white',
//    fontSize: 20,
//    fontWeight: 'bold',
//    textDecorationLine: 'underline',
//    margin: 50,
//  }
//});
