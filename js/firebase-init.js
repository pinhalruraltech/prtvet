import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDR69colU9JHvemBpab3x8PLHqaUm_5EM0",
  authDomain: "appvet-prt.firebaseapp.com",
  projectId: "appvet-prt",
  storageBucket: "appvet-prt.firebasestorage.app",
  messagingSenderId: "26046923372",
  appId: "1:26046923372:web:fdbef180eadced87018e49"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage };
