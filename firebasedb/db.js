import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Your Firebase project configuration goes here
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
