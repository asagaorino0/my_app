import * as React from 'react';
import { Button, Text, View } from "react-native";
import Firebase from "../lib/firebase";
import "firebase/auth";
import 'firebase/analytics'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubScreen from '../screens/SubScreen'
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen({ navigation }: { navigation: any }) {
    // firebase.auth().signInAnonymously()
    //     .then(() => {
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //     });
    const [uid, setUid] = React.useState('');
    const db = Firebase.firestore()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Sub"
                onPress={() => navigation.navigate('Sub')}
            />
        </View>
    )
}


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Sub" component={SubScreen} />
                <Stack.Screen name="Third" component={ThirdScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


