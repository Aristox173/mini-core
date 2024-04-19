import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeLjTGdGexlT-tKT7G8KIqPjwvIBJXg9c",
  authDomain: "mini-core-20030.firebaseapp.com",
  projectId: "mini-core-20030",
  storageBucket: "mini-core-20030.appspot.com",
  messagingSenderId: "133066522722",
  appId: "1:133066522722:web:75e4e9a37a622d7a71513b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, collection, getDocs, app };
