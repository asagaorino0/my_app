import * as functions from "firebase-functions";
import * as express from 'express';
import * as line from '@line/bot-sdk';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
// The Firebase Admin SDK to access Firestore.
const admin = require(`firebase-admin`);
admin.initializeApp();

// // LINE bot
const config = {
    channelSecret: "4d5f11ad200af09808a7b5057ffe45e1",//チャンネルシークレット
    channelAccessToken: "RyGBqiciaprN0e4/UWor9L4kgra7M560lqinnyXyu6LWwnSNI5O7ZA2Ug4MHnpoViLyk0pwZfJ5bCdOVWNUmlM7PKtJPbIq1cevZtPmVuPsv0nKutgL8prDWKGc6NDnQgYosP8BwHh3Ss6ZRG+2tfwdB04t89/1O/w1cDnyilFU=" //アクセストークン
};
const client = new line.Client(config);
const app = express();
app.post('/', line.middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(() => res.status(200).end())
        .catch((err) => {
            console.error(err);
            res.status(500).end()
        })
});
async function handleEvent(event: any) {
    // return client.replyMessage(event.replyToken, { type: "text", text: event.message.text + "ね" })
    //ユーザから送られた各メッセージに対する処理を実装する。
    //https://developers.line.biz/ja/reference/messaging-api/#message-event を参照。
    switch (event.message.type) {
        case 'text':
            return client.replyMessage(event.replyToken, { type: "text", text: event.message.text + "ね" });
        case 'image':
            return client.replyMessage(event.replyToken, { type: "text", text: '画像を受け取りました。' });
        case 'video':
            return client.replyMessage(event.replyToken, { type: "text", text: '動画を受け取りました。' });
        case 'audio':
            return client.replyMessage(event.replyToken, { type: "text", text: '音声を受け取りました。' });
        case 'file':
            return client.replyMessage(event.replyToken, { type: "text", text: 'ファイルを受け取りました。' });
        case 'location':
            return client.replyMessage(event.replyToken, { type: "text", text: '位置情報を受け取りました。' });
        case 'sticker':
            return client.replyMessage(event.replyToken, { type: "text", text: 'スタンプを受け取りました。' });
        default:
            return Promise.resolve(null);
    }
}
// exports.app = functions.https.onRequest(app);
export const lineBot = functions.https.onRequest(app);

const targetUserId = 'Ue990787da85bbd95eae9595867add9ba';
export const helloPubSub = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:19006'); // localhostを許可
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST'); // DELETEだけは拒否
    res.set('Access-Control-Allow-Headers', 'Content-Type, authorization,Firebase-Instance-Id-Token');// Content-Typeのみを許可
    //   .runWith({ memory: '1GB' })
    //   .region('us-central1')
    const text = '送信できちゃいます';
    await client.pushMessage(targetUserId, { type: 'text', text })
        .then(() => res.status(200).end()
            // return text;
        )
        .catch((err) => {
            console.error(err);
            res.status(500).end()
        })
})

export const proacaHello = functions.https.onRequest((req, res) => {
    // export const proacaHello = functions.https.onCall((data, context) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:19006'); // localhostを許可
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST'); // DELETEだけは拒否
    res.set('Access-Control-Allow-Headers', 'Content-Type, authorization,Firebase-Instance-Id-Token');// Content-Typeのみを許可

    // app.use(cors({ origin: true }));
    // res.json({ message: "Hello world" })
    res.json({ data: "Hello world" })
})

export const getUserInfo = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:19006'); // localhostを許可
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST'); // DELETEだけは拒否
    res.set('Access-Control-Allow-Headers', 'Content-Type, authorization,Firebase-Instance-Id-Token'); // Content-Typeのみを許可

    // app.use(cors({ origin: true }));

    /**
     * data: jsonの値みたいな感じにしてみてください。
     *
     */

    const userInfo = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "Ing": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        }
    ]
    res.json({ data: userInfo })
})