import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";


// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_API_KEY,
//     authDomain:process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId:process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_APP_ID 
// };

const firebaseConfig = {
    apiKey: "AIzaSyCn1W4_SPb-sXriUgbmk6Zh8WUwQJmd3Jo",
    authDomain: "ignews-8ceae.firebaseapp.com",
    databaseURL: "https://ignews-8ceae-default-rtdb.firebaseio.com",
    projectId: "ignews-8ceae",
    storageBucket: "ignews-8ceae.appspot.com",
    messagingSenderId: "883408646516",
    appId: "1:883408646516:web:b9d639a895be79e5913c21"
  }


if(!firebase.apps.length) 
    firebase.initializeApp(firebaseConfig) 

const auth = firebase.auth();
const database= firebase.database();


export {
    auth,
    database,
    firebase
}