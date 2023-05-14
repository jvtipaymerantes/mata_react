import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6b0-t57y4WxVOz_kvGUitFrJe4GzT_Nk",
    authDomain: "mata-fire-detection.firebaseapp.com",
    databaseURL: "https://mata-fire-detection-default-rtdb.firebaseio.com",
    projectId: "mata-fire-detection",
    storageBucket: "mata-fire-detection.appspot.com",
    messagingSenderId: "705390758600",
    appId: "1:705390758600:web:ed5845102aa3f6bf9133fd",
    measurementId: "G-QDPWDPVR8R"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export default app;
export { auth, db }