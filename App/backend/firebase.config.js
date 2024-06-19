// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1lwLIqYhwP_F0hwpSxMZpzRVCCDfIBMo",
  authDomain: "mtu-app3.firebaseapp.com",
  projectId: "mtu-app3",
  storageBucket: "mtu-app3.appspot.com",
  messagingSenderId: "20852437987",
  appId: "1:20852437987:web:68fd9758a8c377082c26d6",
  measurementId: "G-H0NR41479L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);