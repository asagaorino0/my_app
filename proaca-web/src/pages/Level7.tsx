import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SubScreen from '../screens/SubScreen'

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Sub"
//                 onPress={() => navigation.navigate('Sub')}
//             />
//         </View>
//     );
// }

// function SubScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Sub Screen</Text>
//             <Button
//                 title="Go to Back"
//                 onPress={() => navigation.navigate('Home')}
//             />
//         </View>
//     );
// }

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Sub" component={SubScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
