import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWm8nvsndi-IJK5ZoqJPLn6gHwJrfvlHM",
  authDomain: "react-projects-da08b.firebaseapp.com",
  projectId: "react-projects-da08b",
  storageBucket: "react-projects-da08b.appspot.com",
  messagingSenderId: "522813886437",
  appId: "1:522813886437:web:02605cbf710fa53b39a90c",
  measurementId: "G-2CJ9KTP8RS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
