import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFi4OyzgCL0lBbwl565iqd5ouu5sik51I",
    authDomain: "fb-clone-5735a.firebaseapp.com",
    projectId: "fb-clone-5735a",
    storageBucket: "fb-clone-5735a.appspot.com",
    messagingSenderId: "626649419222",
    appId: "1:626649419222:web:6508a9f579ebc9f4272877"
};

const app = !firebase.app.length < 1 ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const storage = firebase.storage()


export { db, storage }