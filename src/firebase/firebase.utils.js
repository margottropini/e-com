// Config firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzY0W745_l66NXu4fvLvNCXfpXAHtFBOE",
  authDomain: "e-com-b78f3.firebaseapp.com",
  databaseURL: "https://e-com-b78f3.firebaseio.com",
  projectId: "e-com-b78f3",
  storageBucket: "e-com-b78f3.appspot.com",
  messagingSenderId: "399530331056",
  appId: "1:399530331056:web:07a6b71a146f5af6536475",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    // Si snapshot n'existe pas, on le créer
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Me permet de gérer l'authentification avec google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
