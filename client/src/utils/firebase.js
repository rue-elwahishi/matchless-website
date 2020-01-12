import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA8FzoCelAzWRvJPLI94eJPm-tDqF0YcVc",
    authDomain: "matchless-671d5.firebaseapp.com",
    databaseURL: "https://matchless-671d5.firebaseio.com",
    projectId: "matchless-671d5",
    storageBucket: "matchless-671d5.appspot.com",
    messagingSenderId: "153510597822",
    appId: "1:153510597822:web:a72052cdb2d6b733b4baef",
    measurementId: "G-QDX7PKTPKY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;