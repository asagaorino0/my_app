import React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Level6 from './src/pages/Level6'
import Level7 from './src/pages/Level7'
import Level11 from './src/pages/Level11'
import HomeScreen from './src/screens/HomeScreen';
import SubScreen from './src/screens/SubScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import MsgList from './src/screens/MsgList';
import Constants from 'expo-constants';
import firebase from 'firebase/app';

const Stack = createStackNavigator();
export default function App() {
  console.log("extra", Constants.manifest!.extra?.firebase.authDomain);
  return (
    <HomeScreen />
  );
}

