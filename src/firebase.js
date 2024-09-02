import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAQkpM5K0WCGj2mCaYzxWpbwbpfzOMum3o",
    authDomain: "the-movie-4e855.firebaseapp.com",
    projectId: "the-movie-4e855",
    storageBucket: "the-movie-4e855.appspot.com",
    messagingSenderId: "724265531909",
    appId: "1:724265531909:web:b2e9e7185da403a1f4fa6c"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db}