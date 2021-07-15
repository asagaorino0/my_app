import * as React from 'react';
import { Button, View, Text } from 'react-native';

// //Level10
export default function SubScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {

        }
    }, [route.params?.post]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sub Screen</Text>
            <Button
                title="Go to Third"
                onPress={() => {
                    navigation.navigate({
                        name: 'Third',
                    });
                }}
            />
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
            <Text style={{ margin: 10 }}>itemId: {route.params?.itemId}</Text>
            <Text style={{ margin: 10 }}>uid: {route.params?.uid}</Text>
            <Text style={{ margin: 10 }}>name: {route.params?.name}</Text>
        </View>
    );
}