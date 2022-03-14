import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAbKI7ejhHNOF8Yt2_4cVFYHA5ypDclnJw",
  authDomain: "tours-67388.firebaseapp.com",
  projectId: "tours-67388",
  storageBucket: "tours-67388.appspot.com",
  messagingSenderId: "771316826180",
  appId: "1:771316826180:web:7096b93b7e2b9abd43fc11",
  measurementId: "G-P1W6QMS9W4",
};
// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();
// collection ref
const toursRef = collection(db, "tours");
const walksRef = collection(db, "walks");

// storage
const storage = getStorage(app);

// get collection data
// getDocs(colRef).then((snapshot) => console.log(snapshot.docs));
export { db, getDocs, toursRef, walksRef, addDoc, deleteDoc, doc, storage };
