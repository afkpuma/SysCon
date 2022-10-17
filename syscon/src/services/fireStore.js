import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUf2e6FxFc5brXGVeoZ2zTxQIoISA6ypc",
  authDomain: "syscon-b9bb8.firebaseapp.com",
  projectId: "syscon-b9bb8",
  storageBucket: "syscon-b9bb8.appspot.com",
  messagingSenderId: "752027087699",
  appId: "1:752027087699:web:8fd81af74b763059bf67a6",
  measurementId: "G-7BEHCZVXH1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;