// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAZByPNmGeUj8aFVlEPGlV7fTs177-bUoY",
  authDomain: "real-time-database-56b56.firebaseapp.com",
  databaseURL: "https://real-time-database-56b56-default-rtdb.firebaseio.com",
  projectId: "real-time-database-56b56",
  storageBucket: "real-time-database-56b56.firebasestorage.app",
  messagingSenderId: "1033651311640",
  appId: "1:1033651311640:web:90b9003721c9d17470df6d",
  measurementId: "G-EDPZKMGGR8"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
const database = getDatabase(cong);
export { database, ref, set, push, get };
export default cong;