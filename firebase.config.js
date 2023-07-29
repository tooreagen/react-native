import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYFkYFToRfSdIyN6yszqujXnuS6nH5O7E",
  authDomain: "tets-9035b.firebaseapp.com",
  projectId: "tets-9035b",
  storageBucket: "tets-9035b.appspot.com",
  messagingSenderId: "516945514242",
  appId: "1:516945514242:web:b3cad1b60cbb5d1b32bc1b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);