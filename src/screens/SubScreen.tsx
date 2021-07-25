import * as React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from "../lib/firebase";
import "firebase/firestore";

const styles = StyleSheet.create({
    titleText: {
        marginTop: 5,
        marginBottom: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        padding: 10
    },
    input: {
        height: 20,
        borderColor: 'gray',
        borderWidth: 1
    },
});

export default function SubScreen({ navigation }: { navigation: any }) {
    const [uid, setUid] = React.useState('');
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [user, setUser] = React.useState('');
    const db = firebase.firestore()

    React.useEffect(() => {
        firebase.auth().signInAnonymously()
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        var uid = user.uid;
                        setUid(uid)
                        firebase
                            .firestore()
                            .collection("users")
                            .where("id", "==", `${user.uid}`)
                            .get()
                            .then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    console.log(doc.id, " => ", doc.data())
                                    setUser(doc.data())
                                })
                            })
                    }
                })
            })
    }, [])

    const onPress = () => {
        // setName(name)
        // setAge(name)
        db.collection('users').doc(`${uid}`).set({
            name: `${name}`,
            age: `${age}`,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true }//←上書きされないおまじない
        )
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sub Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
                {/* <Button
                title="Save User Info"
                onPress={() => { onPress }
                }
            /> */}
                {/* <Button
                    title="Go to Fourth"
                    onPress={() => navigation.navigate('Fourth')}
                /> */}
                <Text style={{ margin: 10 }}>uid: {uid}</Text>
                <View>
                    <Text>name</Text>
                    <TextInput
                        multiline
                        placeholder=""
                        style={styles.input}
                        value={name}
                        // defaultValue={`${user.name}`}
                        onChangeText={setName}
                    />
                    <Text>age</Text>
                    <TextInput
                        multiline
                        placeholder=""
                        style={styles.input}
                        value={age}
                        // defaultValue={`${user.age}`}
                        onChangeText={setAge}
                    />
                    <TouchableHighlight onPress={onPress}>
                        <View style={styles.button}>
                            <Text>Save User Info</Text>
                        </View>
                    </TouchableHighlight>
                    <Button
                        title="Go to Third"
                        onPress={() => {
                            navigation.navigate({
                                name: 'Third',
                            });
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
