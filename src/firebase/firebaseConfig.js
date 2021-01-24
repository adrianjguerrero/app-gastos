import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey:process.env.REACT_FIREBASE_API_KEY,
    authDomain:process.env.REACT_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db,auth}