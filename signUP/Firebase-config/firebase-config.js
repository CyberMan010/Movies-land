// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  child,
  onValue,
  query,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWyRt-9CbwrUeUb8Dl2ldkLoJQ5gEJMfg",
  authDomain: "baor-project.firebaseapp.com",
  databaseURL:
    "https://baor-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baor-project",
  storageBucket: "baor-project.appspot.com",
  messagingSenderId: "544542622273",
  appId: "1:544542622273:web:c73467b408819f34befcc0",
  measurementId: "G-KER7P3R8LS",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const createUser = createUserWithEmailAndPassword;
const auth = getAuth(app);
const database = getDatabase(app);
const reference = ref;
const addData = set;
const retrieveData = onValue;
const sendEmailLink = sendEmailVerification;
const loginFirebase = signInWithEmailAndPassword;

export {
  database,
  set,
  onValue,
  ref,
  child,
  query,
  getStorage,
};
