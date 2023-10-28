import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js" //para saber si el usuario esta logueado o no
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'
import './app/signupform.js'
import './app/signinForm.js'
import './app/logout.js'


onAuthStateChanged(auth, async (user) => {
    //console.log(user);
    loginCheck(user);
    /*if(user){
        loginCheck(user);
    }else{
        loginCheck(user);
    }*/
});
