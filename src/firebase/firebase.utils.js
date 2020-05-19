import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBPmA_dx-dgSWVif053G8h5Jgjr7SkSTuE',
  authDomain: 'ecom1-5ff05.firebaseapp.com',
  databaseURL: 'https://ecom1-5ff05.firebaseio.com',
  projectId: 'ecom1-5ff05',
  storageBucket: 'ecom1-5ff05.appspot.com',
  messagingSenderId: '297350467131',
  appId: '1:297350467131:web:48a8f145b016dbc8c9561e',
  measurementId: 'G-7NX1MEG5T4',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
