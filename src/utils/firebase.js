// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIJYGYrFnhbFXPsNEQLekwXiuAJ1u2YOs",
  authDomain: "netflixgpt-4bbb2.firebaseapp.com",
  projectId: "netflixgpt-4bbb2",
  storageBucket: "netflixgpt-4bbb2.appspot.com",
  messagingSenderId: "1016087538319",
  appId: "1:1016087538319:web:47d699bc3e1c10ad88defa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
