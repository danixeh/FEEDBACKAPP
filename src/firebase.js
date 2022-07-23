import './firebase/app'
import './firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKBHxVCPouUWIDwYPrGM2mdY_7DEwUWXI",
    authDomain: "feedbackapp-ca858.firebaseapp.com",
    projectId: "feedbackapp-ca858",
    storageBucket: "feedbackapp-ca858.appspot.com",
    messagingSenderId: "960156853914",
    appId: "1:960156853914:web:e07363cedd05b742bc2123",
    measurementId: "G-HHQ8V4GH00"
};
  
const app = initializeApp(firebaseConfig);
  
export const dv = fb.firestoe();