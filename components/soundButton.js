import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert= ()=>{
    alert("This is an alert");
  }
  render(){
    return(
      <Button title="Click Me" color={this.props.mycolor} onPress={this.displayAlert}/>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 200}}>
        <AnyColorButton mycolor="purple"/>
        <Text>My First React component</Text>
      </View>
    );
  }
}