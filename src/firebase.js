// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw96bxeagiDZCdZy5S7zg9ArubXht9StI",
  authDomain: "realtor-clone-react-c1716.firebaseapp.com",
  projectId: "realtor-clone-react-c1716",
  storageBucket: "realtor-clone-react-c1716.appspot.com",
  messagingSenderId: "145500895638",
  appId: "1:145500895638:web:e248e8806814a1f0a605b7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()