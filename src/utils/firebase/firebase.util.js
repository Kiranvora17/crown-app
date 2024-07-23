import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaD_xSxB1EBWRA-kmH6iZX-qIzxyzOnMg",
  authDomain: "crwn-clothing-6492c.firebaseapp.com",
  projectId: "crwn-clothing-6492c",
  storageBucket: "crwn-clothing-6492c.appspot.com",
  messagingSenderId: "1047500763213",
  appId: "1:1047500763213:web:f0c1241a63424eafe9ac04",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const firestore = getFirestore();

export const setUserFromAuth = async (user, additionalInfo = {}) => {
  const userDoc = await doc(firestore, "users", user.uid);
  const userRef = await getDoc(userDoc);
  if (!userRef.exists()) {
    try {
      const { displayName, email } = user;
      const createdAt = new Date();
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

// export const setProductsToFirestore = async (collectionKey, productsData) => {
//   const collectionRef = collection(firestore, collectionKey);
//   const batch = writeBatch(firestore);

//   productsData.forEach((obj) => {
//     const docRef = doc(collectionRef, obj.title.toLowerCase());
//     batch.set(docRef, obj);
//   });

//   await batch.commit();
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(firestore, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const authChangeListner = (callback) =>
  onAuthStateChanged(auth, callback);
