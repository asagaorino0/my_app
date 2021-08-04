import * as React from 'react';
import * as functions from "../../../proaca-function/functions/node_modules/firebase-functions";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubScreen from '../screens/SubScreen'
import ThirdScreen from '../screens/ThirdScreen';



function HomeScreen({ navigation }: { navigation: any }) {

    const onClick = () => {

        var request = new XMLHttpRequest();
        request.open('GET', 'https://us-central1-react-native-firebase-15517.cloudfunctions.net/proacaHello?text=uppercasemetoo', true);
        // request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
        request.responseType = 'json';

        request.onload = function () {
            var data = this.response;
            console.log(data);
        };
        request.send();


        // fetch('https://us-central1-react-native-firebase-15517.cloudfunctions.net/getUserInfo?text=uppercasemetoo', {
        //     // fetch("https://jsonplaceholder.typicode.com/users", {
        //     method: "GET",
        // }).then(response => response.text())
        //     .then(text => {
        //         console.log(text);
        //     });


        // let requestURL = "https://us-central1-react-native-firebase-15517.cloudfunctions.net/proacaHello";
        // // let request = new XMLHttpRequest();
        // // request.open('GET', requestURL);
        // // request.responseType = 'text'; // now we're getting a string!
        // // request.send();
        // // // request.onload = function () {
        // // const superHeroesText = request.response; // get the string from the response
        // // const superHeroes = JSON.parse(superHeroesText || "null"); // convert it to an object
        // // console.log(superHeroes);
        // // }
        // // const object = { requestURL };
        // const object = { requestURL };
        // const myjson = JSON.stringify(object || "null");
        // const newjson = JSON.parse(myjson || "null");
        // console.table(newjson);
        // console.log(myjson);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Sub"
                onPress={() => navigation.navigate('Sub')}
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


