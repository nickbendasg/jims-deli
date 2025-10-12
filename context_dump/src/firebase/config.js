=== File: src/firebase/config.js ===
=== Content ===
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDXhJCEoG5t7v5yxyrRwfwrqqkKueYF6Pw",
  authDomain: "jims-deli.firebaseapp.com",
  projectId: "jims-deli",
  storageBucket: "jims-deli.appspot.com",
  messagingSenderId: "227627974015",
  appId: "1:227627974015:web:f6fc165fe033449960ae4a"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
=== End of src/firebase/config.js ===

