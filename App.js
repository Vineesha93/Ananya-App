import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
// class soundButton extends React.Component {
//   render() {
//     return (
//       <Button title='Sound' color="red"/>
//     )
//   }
// }

export default function App() {

  return (
    <WelcomeScreen/>

  );
}
  // const switchNavigator = createSwitchNavigator({
  //   WelcomeScreen:{screen:WelcomeScreen}
  // })

  // const AppContainer= createAppContainer(switchNavigator)
