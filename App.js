/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// screens

import SignIn from './app/components/SignIn';
import Store from './app/components/Store';
import uploadPhoto from './app/components/uploadPhoto';


const Stack = createStackNavigator();
const noHeader = () => ({
  headerShown: false
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
         <Stack.Screen name="Store" component={Store} options={noHeader} />
         <Stack.Screen name="uploadPhoto" component={uploadPhoto} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

