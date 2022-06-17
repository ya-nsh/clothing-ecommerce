import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  writeBatch
} from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
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

const googleProvider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  console.log('object', objectsToAdd);
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
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
        createdAt,
        ...additionalInfo
      });
    } catch (err) {
      console.log('Error: ', err.message);
    }
  }

  //   return getDoc(userDocRef);
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
