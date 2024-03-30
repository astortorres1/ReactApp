import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth"; 


// Firebase configuracion
const firebaseConfig = {
    apiKey: "AIzaSyDcXcJDaXFULJmazNS-4biNaL1Ygof_1u0",
    authDomain: "proyecto-react-752d9.firebaseapp.com",
    projectId: "proyecto-react-752d9",
    storageBucket: "proyecto-react-752d9.appspot.com",
    messagingSenderId: "1013980070731",
    appId: "1:1013980070731:web:acd374ed564d2b7d219ece"
};

 const app = initializeApp (firebaseConfig);

 export const db = getFirestore (app);

 export const auth = getAuth(app)

 export const googleProvider = new GoogleAuthProvider();