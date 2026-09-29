import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyASw6wu_I1KYmyhDLsLMQvPOPXq19iCwTQ",
  authDomain: "lym-magazine.firebaseapp.com",
  databaseURL: "https://lym-magazine-default-rtdb.firebaseio.com",
  projectId: "lym-magazine",
  storageBucket: "lym-magazine.firebasestorage.app",
  messagingSenderId: "607638249088",
  appId: "1:607638249088:web:626252e2cabd62d755065"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const database = getDatabase(app);