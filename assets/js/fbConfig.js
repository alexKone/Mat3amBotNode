import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUv5Wk4BCtSlrYjPGTFnelQkpJSFB3tRY",
  authDomain: "mat3ambot.firebaseapp.com",
  projectId: "mat3ambot",
  storageBucket: "mat3ambot.appspot.com",
  messagingSenderId: "932651823561",
  appId: "1:932651823561:web:d2d0deca19293ddb607818"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
