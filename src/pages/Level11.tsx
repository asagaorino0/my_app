import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SubScreen from '../screens/SubScreen'
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const HomeStack = createStackNavigator();
const SubStack = createStackNavigator();
const ThirdStack = createStackNavigator();
const FourthStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="home">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <SubStack.Screen name="Sub" component={SubScreen} />
            <ThirdStack.Screen name="Third" component={ThirdScreen} />
            <FourthStack.Screen name="Fourth" component={FourthScreen} />
        </HomeStack.Navigator>
    );
}
function SubStackScreen() {
    return (
        <SubStack.Navigator initialRouteName="sub">
            <SubStack.Screen name="Sub" component={SubScreen} />
        </SubStack.Navigator>
    );
}
function ThirdStackScreen() {
    return (
        <ThirdStack.Navigator initialRouteName="Third">
            <ThirdStack.Screen name="Third" component={ThirdScreen} />
        </ThirdStack.Navigator>
    );
}
function FourthStackScreen() {
    return (
        <FourthStack.Navigator initialRouteName="Fourth">
            <FourthStack.Screen name="Fourth" component={FourthScreen} />
        </FourthStack.Navigator>
    );
}
// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
    // export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="home">
                <Tab.Screen
                    name="home"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="sub"
                    component={SubStackScreen}
                    options={{
                        tabBarLabel: 'Sub',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="profile" color={color} size={24} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Third"
                    component={ThirdStackScreen}
                    options={{
                        tabBarLabel: 'Third',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="numeric-3-circle" color={color} size={24} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Fourth"
                    component={FourthStackScreen}
                    options={{
                        tabBarLabel: 'Fourth',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="numeric-4-circle" color={color} size={24} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
