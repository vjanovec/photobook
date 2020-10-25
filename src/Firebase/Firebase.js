import app from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/storage';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.storage = app.storage();
  }

  signInWithCustomToken = (token) => {
    return this.auth.signInWithCustomToken(token);
  }
  getIdToken = (forceRefresh) => {
    return this.auth.currentUser.getIdToken(forceRefresh)
  }
  signUpWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
  signInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  getStorageRef = () => {
    return this.storage.ref();
  }
  getStorage = () => {
    return this.storage;
  }
}
 
export default Firebase;