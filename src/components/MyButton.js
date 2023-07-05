import {View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';



export default function MyButton({color, title, access}) {
  const[newTitle, setNewTitle] = useState(title)
  const[newColor, setNewColor] = useState(color)
  const dispatch = useDispatch();



// if re remove [] from useEffect, it will be called every time the component is rendered
  useEffect(() => {
    //Fetch API endpoint for what you want to show on screen
    Alert.alert('Component rendered')
    console.log('Page has rendered successfully')
  }, [])



  useEffect(() => {
    Alert.alert('New title has been set successfully')
  }, [newTitle])


  function pressedButton() {
      // return Alert.alert(song)
   }

   function Timer() {

  }

  function changeOnPress() {
    // setNewTitle('I was pressed 3')
    // setNewColor('red')
    dispatch({type: 'changeUsername', payload: 'Sidd'})
  }
  return (
    <View>
        <Button
        title={newTitle}
        color={newColor}
        onPress={changeOnPress}
        accessibilityLabel={access}

        />
    </View>
  );
}







// import {View, Button, Alert } from 'react-native';
// import { useState } from 'react';

// export default function MyButton({color, title, access, song}) {
//   const[newTitle, setNewTitle] = useState(title)

//   function pressedButton() {
//       return Alert.alert(song)
//    }
//   return (
//     <View>
//         <Button
//         title={newTitle}
//         color={color}
//         onPress={pressedButton}
//         accessibilityLabel={access}

//         />
//     </View>
//   );
// }








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