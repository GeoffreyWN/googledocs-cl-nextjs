import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBhj-iaizeeTI_pknKFvQBjm07KLmyqE5s",
    authDomain: "gdocs-cl.firebaseapp.com",
    projectId: "gdocs-cl",
    storageBucket: "gdocs-cl.appspot.com",
    messagingSenderId: "1003746084557",
    appId: "1:1003746084557:web:3913f8ddc8a227b3930b84"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export { db }