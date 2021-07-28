import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Level5() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);


    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    いいね！： {count ? count : null}
                </Text>
            </View>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Text>いいね！</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    // container: {
    //   flex: 1,
    //   justifyContent: "center",
    //   paddingHorizontal: 10
    // },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
})