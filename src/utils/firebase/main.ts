import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAkLBRHMXgrW0reKwvy8NjiCIePytYjBqI",
    authDomain: "gang-ga.firebaseapp.com",
    projectId: "gang-ga",
    storageBucket: "gang-ga.appspot.com",
    messagingSenderId: "528422666443",
    appId: "1:528422666443:web:7dc703767c7e7f6421db4e",
    measurementId: "G-8L9JN62EXP",
};
const fire = firebase.initializeApp(config);
export default fire;
