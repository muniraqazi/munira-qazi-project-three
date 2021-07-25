// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const firebaseConfig = {
  apiKey: "AIzaSyD1LBnU4g1jBVA9E0ZxzJBGn9iRl0tvAKs",
  authDomain: "munirassupercoolshop.firebaseapp.com",
  projectId: "munirassupercoolshop",
  storageBucket: "munirassupercoolshop.appspot.com",
  messagingSenderId: "273182928257",
  appId: "1:273182928257:web:f5b8a23e433e1843e8cc80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;