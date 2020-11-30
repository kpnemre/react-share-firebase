import firebase from "firebase/app";
import "firebase/auth";
//firestore

const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};


const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

// firebase.initializeApp(config);

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    // console.log(firebase);
    this.firebaseAuth= firebase.auth();
    // console.log(this.firebaseAuth);
  }

  register (email,password){
      this.firebaseAuth.createUserWithEmailAndPassword(email,password)
  }
  // sign in/up with google GoogleAuthProvider
  useGoogleProvider() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    this.firebaseAuth.signInWithPopup(googleProvider);
  }
  signOut () {
    this.firebaseAuth.signOut();
  }

}

  

export default new Firebase();
