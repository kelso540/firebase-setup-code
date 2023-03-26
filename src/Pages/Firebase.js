// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoj-qBSoOZ1zUoGwXAmkOzDnX3d1nIetk",
  authDomain: "free-games-85f7c.firebaseapp.com",
  projectId: "free-games-85f7c",
  storageBucket: "free-games-85f7c.appspot.com",
  messagingSenderId: "561970170017",
  appId: "1:561970170017:web:2e837800be904ecdc008e0",
  measurementId: "G-YP1G7YW07M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app; 