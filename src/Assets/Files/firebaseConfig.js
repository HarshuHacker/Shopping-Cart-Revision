import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_770d0DjZEgkUjawOf22KhKWsSnAMr50",
  authDomain: "shopping-cart-d4315.firebaseapp.com",
  projectId: "shopping-cart-d4315",
  storageBucket: "shopping-cart-d4315.appspot.com",
  messagingSenderId: "599730926138",
  appId: "1:599730926138:web:bc02e0c924d1047076fb03",
};

// Initialize Firebase
const firebaseInfo = initializeApp(firebaseConfig);
export default firebaseInfo;
