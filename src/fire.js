import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqH01TL0vtlMYrMtUP6jOK9KaxHz99CRM",
  authDomain: "mobi-trend-91247.firebaseapp.com",
  projectId: "mobi-trend-91247",
  storageBucket: "mobi-trend-91247.appspot.com",
  messagingSenderId: "1044111000051",
  appId: "1:1044111000051:web:0ccd5380db383ae4999286",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
