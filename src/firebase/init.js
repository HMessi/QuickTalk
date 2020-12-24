import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA6IsCOTW2oM5MW5bFvQBy2xXktsxwBHWw",
    authDomain: "quicktalka.firebaseapp.com",
    projectId: "quicktalka",
    storageBucket: "quicktalka.appspot.com",
    messagingSenderId: "409685718383",
    appId: "1:409685718383:web:997d7a0a7291b4cd45a49a",
    measurementId: "G-FGVMZHKPSN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firbaseApp.firestore().settings({ timestampInSnapshots: true});
//firebase.analytics();


export default firebase.firestore()


