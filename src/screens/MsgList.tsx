import * as React from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from "../lib/firebase";
import "firebase/firestore";
import "firebase/auth";
import { useScrollToTop } from '@react-navigation/native';
import Card from '../screens/Card'
import MyCard from '../screens/MyCard'

export default function MsgList({ navigation }: { navigation: any }) {

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
                                });
                                setMessages(messages);
                            })
                    }
                })
            })
    }, [])

    const ref = React.useRef(null);
    // useScrollToTop(ref);


    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            {/* <ScrollView> */}
            <ScrollView ref={ref}>
                {/* <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    this.scrollView.scrollToEnd({ animated: true });
                }}> */}
                {/* <ScrollView ref="scrollView"
                    onContentSizeChange={(width, height) => this.refs.scrollView.scrollTo({ y: height })}> */}
                {messages.length !== 0 &&
                    messages.map((messages, index) => {
                        if (messages.uid === uid) {
                            return (
                                <MyCard messages={messages} key={`${messages.id} `} style={{ justifyContent: 'flex-end' }} />

                            )
                        } else {
                            return (
                                <Card messages={messages} key={`${messages.id} `} />

                            )
                        }
                    })
                }
            </ScrollView>
        </TouchableWithoutFeedback >
    );

}