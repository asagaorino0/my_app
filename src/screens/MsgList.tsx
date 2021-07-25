import * as React from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useScrollToTop } from '@react-navigation/native';
import Card from '../screens/Card'

export default function MsgList({ navigation, }) {

    const [uid, setUid] = React.useState('');
    const [name, setName] = React.useState('');
    const [user, setUser] = React.useState('');
    const [age, setAge] = React.useState('');
    const [messages, setMessages] = React.useState('');
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
                            .collection("messages")
                            .orderBy("timestamp")
                            .onSnapshot((snapshot) => {
                                const messages = snapshot.docs.map((doc) => {
                                    return doc.id &&
                                        doc.data()
                                    // doc.data().timestamp.toDate()
                                });
                                setMessages(messages);
                            })
                        firebase
                            .firestore()
                            .collection("users")
                            .where("id", "==", `${user.uid}`)
                            .get()
                            .then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    console.log(doc.id, " => ", doc.data())
                                    setUser(doc.data())
                                    setName(doc.data().name)
                                    setAge(doc.data().age)
                                    console.log(user)
                                })
                            })
                    }
                })
            })
    }, [])

    // const ref = React.useRef(null);
    // useScrollToTop(ref);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <ScrollView>
                {/* <ScrollView ref={ref}> */}

                {messages.length !== 0 &&
                    messages.map((messages, index) => {
                        return (
                            <Card messages={messages} key={`${messages.id} `} />
                        )
                    })
                }
            </ScrollView>
        </TouchableWithoutFeedback>
    );

}