import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMmsRglBuKZlppwzmruu6OFnoi65WJXfY",
  authDomain: "applogin-54eda.firebaseapp.com",
  projectId: "applogin-54eda",
  storageBucket: "applogin-54eda.appspot.com",
  messagingSenderId: "562835001089",
  appId: "1:562835001089:web:d70cf8696775fdd5741500"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);