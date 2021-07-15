import * as React from 'react';
import { Button, View, Text } from 'react-native';

// //Level10
export default function HomeScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Sub"
                onPress={() => {
                    navigation.navigate({
                        name: 'Sub',
                        params: {
                            itemId: 12345,
                            uid: 'saeidfk12',
                            name: 'satake'
                        },
                        merge: true,
                    });
                }}
            />
        </View>
    );
}

