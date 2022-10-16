// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfK7ryd0-U9dRf86SI5Va6gKfL1t704RA",
  authDomain: "react-authentication-87b34.firebaseapp.com",
  projectId: "react-authentication-87b34",
  storageBucket: "react-authentication-87b34.appspot.com",
  messagingSenderId: "445322624943",
  appId: "1:445322624943:web:2c0268b390c7655356795a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;