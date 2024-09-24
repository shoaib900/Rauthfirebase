// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqli0tW5GfY6Y5XOfX5fab47bOaTYAohk",
  authDomain: "ss-009.firebaseapp.com",
  projectId: "ss-009",
  storageBucket: "ss-009.appspot.com",
  messagingSenderId: "18954108165",
  appId: "1:18954108165:web:741b9db12ee6a851918b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);