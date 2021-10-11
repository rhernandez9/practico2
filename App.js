import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import { AppRegistry } from 'react-native';

export default function App(){
  return(
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("calculadora", () => App);