import * as React from 'react';
import { Button, View, Text } from 'react-native';

// //Level10
export default function FourthScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Fourth Screen</Text>
            <Button
                title="Go to Third"
                onPress={() => {
                    navigation.navigate({
                        name: 'Third',
                    });
                }}
            />
            <Button
                title="Go to Sub"
                onPress={() => {
                    navigation.navigate({
                        name: 'Sub',
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