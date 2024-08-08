// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXp8qnOWDm0F-js0VM8cp-XZtPoCKifBo",
  authDomain: "inventory-track-f515b.firebaseapp.com",
  projectId: "inventory-track-f515b",
  storageBucket: "inventory-track-f515b.appspot.com",
  messagingSenderId: "409107294682",
  appId: "1:409107294682:web:0b8c29b3f3b35ececc38e3",
  measurementId: "G-5D53B64B2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
