import * as React from 'react';
import { Button, View, Text } from 'react-native';

// //Level8
export default function SubScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sub Screen</Text>
            <Button
                title="Go to Back"
                onPress={() => navigation.navigate('My first Page')}
            />
            <Text style={{ margin: 10 }}>itemId: {route.params?.itemId}</Text>
            <Text style={{ margin: 10 }}>uid: {route.params?.uid}</Text>
            <Text style={{ margin: 10 }}>name: {route.params?.name}</Text>
        </View>
    );
}