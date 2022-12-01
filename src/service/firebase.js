// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOsglt91e9wRm6aqQDyGqqTNq3eRfa5ck',
  authDomain: 'prode-f3134.firebaseapp.com',
  projectId: 'prode-f3134',
  storageBucket: 'prode-f3134.appspot.com',
  messagingSenderId: '482392305470',
  appId: '1:482392305470:web:fd6ed49e3beb06362e866f',
  measurementId: 'G-YKKEX8XVF4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
