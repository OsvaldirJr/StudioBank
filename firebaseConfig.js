import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAURt0ws_0xA2J8frrlsWY6TKHP2qnwOIQ",
  authDomain: "studiobank-671af.firebaseapp.com",
  projectId: "studiobank-671af",
  storageBucket: "studiobank-671af.appspot.com",
  messagingSenderId: "945858050634",
  appId: "1:945858050634:web:bf4d01eb207a5af6e684b3",
  measurementId: "G-S5YQJSSK00"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { auth };
export default db; 
