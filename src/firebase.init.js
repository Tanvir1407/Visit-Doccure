// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx2VsZK5gWntv_hee3QabJb9jW-rKCnP0",
  authDomain: "assignment-10-8b358.firebaseapp.com",
  projectId: "assignment-10-8b358",
  storageBucket: "assignment-10-8b358.appspot.com",
  messagingSenderId: "781063223077",
  appId: "1:781063223077:web:bed1308410be64c08c8ccc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;