// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJBOdkR6RzG0aXJ-pB5YAs2zA3h02a0E",
  authDomain: "create-email-pass-auth.firebaseapp.com",
  projectId: "create-email-pass-auth",
  storageBucket: "create-email-pass-auth.appspot.com",
  messagingSenderId: "475308526196",
  appId: "1:475308526196:web:9777d536d3f2bee83b9f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;