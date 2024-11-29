import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbrn6JXQmc-OrK_cCXw8jAxseYpzuDBn8",
  authDomain: "crypto-tracker-38584.firebaseapp.com",
  projectId: "crypto-tracker-38584",
  storageBucket: "crypto-tracker-38584.firebasestorage.app",
  messagingSenderId: "477588845518",
  appId: "1:477588845518:web:b5ee1110b21e499493f19f"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth};
