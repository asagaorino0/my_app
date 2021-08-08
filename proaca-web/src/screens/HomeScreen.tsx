import * as React from 'react';
// import * as functions from "../../../proaca-function/functions/node_modules/firebase-functions";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubScreen from '../screens/SubScreen'
import ThirdScreen from '../screens/ThirdScreen';
import firebase from "../lib/firebase";
import { getFunctions } from '../lib/firebase'

function HomeScreen({ navigation }: { navigation: any }) {
    const onHello = () => {
        const functions = firebase.app().functions('us-central1');
        const proacaHello = getFunctions().httpsCallable('proacaHello')
        const res = proacaHello()
            .then((res) => {
                const sanitizedMessage = res.data.text;
                console.log(res.data);
                let result = window.alert(`${res.data}\n先生、ありがとうございます🤣🤣🤣`);
                // return { text: sanitizedMessage };
            })
            .catch((error) => {
                var code = error.code;
                var message = error.message;
                var details = error.details;
                console.log(message)
                console.log(error)
            })
    };

    const onClick = () => {
        const functions = firebase.app().functions('us-central1');
        const getUserInfo = getFunctions().httpsCallable('getUserInfo')
        const result = getUserInfo()
            .then((res) => {
                var sanitizedMessage = res.data.text;
                console.log(res.data);
            })
            .catch((error) => {
                var code = error.code;
                var message = error.message;
                var details = error.details;
                // ...
                console.log(message)
                console.log(error)
            });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Sub"
                onPress={() => navigation.navigate('Sub')}
            />
            <Button
                title="Hello"
                onPress={onHello}
            />
            <Button
                title="Get user info"
                onPress={onClick}
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


