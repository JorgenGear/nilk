import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyB_hKoSpfCnRiTbBhX16xqL4Uyad0UNzpM",
    authDomain: "nilk-3a766.firebaseapp.com",
    projectId: "nilk-3a766",
    storageBucket: "nilk-3a766.appspot.com",
    messagingSenderId: "592973766791",
    appId: "1:592973766791:web:b8fe4248d962116f1f5822",
    measurementId: "G-PCQQZH0F0R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
