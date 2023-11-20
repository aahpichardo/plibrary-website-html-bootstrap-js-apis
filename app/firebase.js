/*Core de Firebase*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


      
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIigWxpMVYyXGdyWtWijjwAA_VifHD4Ak",
    authDomain: "plibrary-c14af.firebaseapp.com",
    projectId: "plibrary-c14af",
    storageBucket: "plibrary-c14af.appspot.com",
    messagingSenderId: "763247303438",
    appId: "1:763247303438:web:a1345a9530004d2b18d55f"
};
      
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//console.log(app);
