import{initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJ0mnfkn1mcW8RnJAGqTnh0v5slRECvaU",
  authDomain: "telegrammessenger-8bdcf.firebaseapp.com",
  projectId: "telegrammessenger-8bdcf",
  storageBucket: "telegrammessenger-8bdcf.appspot.com",
  messagingSenderId: "491258265644",
  appId: "1:491258265644:web:70387d4d9bd75275b8d189"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);

