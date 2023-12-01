// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA8aoLDuDpslD1wlyyp6G4Kh7kq2Ufk-8",
  authDomain: "new-otp-project-b67a6.firebaseapp.com",
  projectId: "new-otp-project-b67a6",
  storageBucket: "new-otp-project-b67a6.appspot.com",
  messagingSenderId: "898092361920",
  appId: "1:898092361920:web:6b3584613f56fe6f542525",
  measurementId: "G-X2Q7KZENML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
