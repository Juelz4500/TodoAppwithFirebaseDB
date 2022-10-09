import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7IIdrJRxjACkJl3hMuozDEuIYooeoIto",
    authDomain: "todo-b9dbc.firebaseapp.com",
    projectId: "todo-b9dbc",
    storageBucket: "todo-b9dbc.appspot.com",
    messagingSenderId: "126846626856",
    appId: "1:126846626856:web:ca2266d4b3f3c67811591d",
    measurementId: "G-NWJ82VNCB8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { db };

