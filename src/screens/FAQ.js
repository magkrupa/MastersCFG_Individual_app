import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Frequently asked questions</Text>
      <Text style={styles.header}> </Text>
      <Text style={styles.header}> </Text>
      <Text style={styles.italicTextStyle}>1. Something does not work?</Text>
      <Text style={styles.textStyle}> Shake the phone!</Text>
      <Text style={styles.italicTextStyle}>2. You do not know something?</Text>
      <Text style={styles.textStyle}> Google it!</Text>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textStyle}>Go to Home page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
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