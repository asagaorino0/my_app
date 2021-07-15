import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Keyboard, View, TextInput, } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor: "#fff"
    },
    titleText: {
        marginTop: 5,
        marginBottom: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        alignItems: "center",
        padding: 25
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
});

const Level6 = () => {
    const [name0, setName0] = useState('');
    const [name, setName] = useState('');
    const onPress = () => setName(name0);
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <Text style={styles.titleText}>
                    {name.length !== 0 &&
                        `こんにちは!${name}さん!!`
                    }
                </Text>
                <View>
                    <Text>Hello, I am...</Text>
                    <TextInput
                        multiline
                        placeholder=""
                        style={styles.input}
                        value={name0}
                        onChangeText={setName0}
                    />
                </View>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.button}>
                        <Text>click！</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Level6;