import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjj6SHlz1p-TGiBolAKkgKU_C3GoDUpVg",
  authDomain: "react-native-c0659.firebaseapp.com",
  databaseURL:
    "https://react-native-c0659-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-c0659",
  storageBucket: "react-native-c0659.appspot.com",
  messagingSenderId: "443027447396",
  appId: "1:443027447396:web:83b55e037f5585c47a8971",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);