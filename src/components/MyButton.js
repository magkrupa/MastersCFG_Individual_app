import {View, Button, Alert } from 'react-native';

export default function MyButton({color, title, access}) {
  function pressedButton() {
      return Alert.alert('Button pressed')
   }
  return (
    <View>
        <Button
        title={title}
        color={color}
        onPress={pressedButton}
        accessibilityLabel={access}
        />
    </View>
  );
}

//import { View, Button, Alert } from 'react-native';
//
//export default function MyButton({props}) {
//  function randomSong() {
//    return Alert.alert('Somebody once told me the world...');
//  }
//
//  return (
//    <View>
//      <Button
//        title={props.title}
//        color={props.color}
        //        onPress={randomSong}
//      />
//    </View>
//  );
//}