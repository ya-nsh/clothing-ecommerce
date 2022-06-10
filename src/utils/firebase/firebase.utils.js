import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZB0iF3ZXjFMQ6F0mdgbRqfJNM6Y5RU4c',
  authDomain: 'clothing-ecommerce-d5a64.firebaseapp.com',
  projectId: 'clothing-ecommerce-d5a64',
  storageBucket: 'clothing-ecommerce-d5a64.appspot.com',
  messagingSenderId: '654120546683',
  appId: '1:654120546683:web:2e32db77d6ec3c102f8dde'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
