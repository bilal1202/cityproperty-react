// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr_fOorETrkr7BWdSajvA9Il178Cjv4rY",
  authDomain: "city-property-react.firebaseapp.com",
  projectId: "city-property-react",
  storageBucket: "city-property-react.appspot.com",
  messagingSenderId: "986421614460",
  appId: "1:986421614460:web:df3875ebce9c4076a376f9"
};

// Initialize Firebase
  initializeApp(firebaseConfig);

  export const db=getFirestore()