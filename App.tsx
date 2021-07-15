import React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Level6 from './src/pages/Level6'
import Level7 from './src/pages/Level7'
import Level11 from './src/pages/Level11'
import HomeScreen from './src/screens/HomeScreen';
import SubScreen from './src/screens/SubScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     {/* <Stack.Screen name="Home" component={Level7} /> */}
    //     {/* <Stack.Screen name="My First Page" component={HomeScreen} /> */}
    //     {/* <Stack.Screen name="Sub" component={SubScreen} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Level11 />
  );
}
