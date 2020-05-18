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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
