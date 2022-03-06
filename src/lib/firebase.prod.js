import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth" 

const config = {
    apiKey: "AIzaSyD2wcuO4nL-JGu4tVp8IOkNjFwG5yUepWY",
    authDomain: "netflix-clone-3322.firebaseapp.com",
    projectId: "netflix-clone-3322",
    storageBucket: "netflix-clone-3322.appspot.com",
    messagingSenderId: "1052838039041",
    appId: "1:1052838039041:web:863f769dfc675ea4a3fa00",
}

const firebase = Firebase.initializeApp(config)

export { firebase }