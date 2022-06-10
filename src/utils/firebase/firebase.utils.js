import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  //   console.log('docref->', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //   console.log('usersnap->', userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log('Error: ', err.message);
    }
  }

  //   return getDoc(userDocRef);
  return userDocRef;
};
