import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth" 

const config = {
    apikey: '',
}

const firebase = Firebase.initializeApp(config)

export { firebase }