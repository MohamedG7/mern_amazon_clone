import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBtbYmXrTaz1q1KXz8MB1bOuRBCsZtnN_U",
  authDomain: "skype-clone-113c0.firebaseapp.com",
  projectId: "skype-clone-113c0",
  storageBucket: "skype-clone-113c0.appspot.com",
  messagingSenderId: "1068164912182",
  appId: "1:1068164912182:web:11c9e52bccb6fd91a9b497",
  measurementId: "G-G1LCG0QP9D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{
    db,
    auth
}
