import * as React from 'react';
import { Button, View, Text } from 'react-native';


// //Level10
export default function ThirdScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Third Screen</Text>
            <Button
                title="Go to Fourth"
                onPress={() => {
                    navigation.navigate({
                        name: 'Fourth',
                    });
                }}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}