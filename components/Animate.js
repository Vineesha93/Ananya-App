import React from 'react';
import LottieView from 'lottie-react-native';

export default class Animate extends React.Component{
  render() {
    return (
      <LottieView
      source={require('../assets/image.json')}
      style = {{width: "60%"}}
      autoplay loop />  
    )
  }
} 