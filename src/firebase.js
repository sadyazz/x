// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-f8092.firebaseapp.com",
  projectId: "x-next-f8092",
  storageBucket: "x-next-f8092.appspot.com",
  messagingSenderId: "551969841030",
  appId: "1:551969841030:web:52cb7030fd6c432eb2d607"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);