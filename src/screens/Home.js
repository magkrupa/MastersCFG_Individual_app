import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Button title='Click to go to the about page' color="#ffdd80" onPress={() => navigation.navigate('AboutUs')}></Button>
    </View>
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

});