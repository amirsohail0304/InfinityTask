// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  //@ts-ignore
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyD5GrOiEoWbzG9CEgaw-cA8iNuwb8R-pz8',
  authDomain: 'rmas-57824.firebaseapp.com',
  projectId: 'rmas-57824',
  storageBucket: 'rmas-57824.appspot.com',
  messagingSenderId: '58281220817',
  appId: '1:58281220817:web:2651b4ad7372caf970c3f0',
  measurementId: 'G-E4EXN0DL2S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth, getAuth };
