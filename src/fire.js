import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXjE1SWlxfOYpcx47ylpLvJdsPiK9_GE8",
  authDomain: "podfrontilo-project.firebaseapp.com",
  projectId: "podfrontilo-project",
  storageBucket: "podfrontilo-project.appspot.com",
  messagingSenderId: "702582329956",
  appId: "1:702582329956:web:706507c294bb03bbab0571",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
