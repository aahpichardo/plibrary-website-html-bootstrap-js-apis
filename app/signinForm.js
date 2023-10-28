/* Inicio de sesion (login)*/
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebase.js';
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        //console.log(credentials);
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();
        showMessage("Usuario logueado correctamente: " + credentials.user.email);
    } catch (error) {
        //console.log(error);
        if(error.code === "auth/invalid-login-credentials")
        {
            showMessage("El email o la contraseña no son correctos.", "error");
        }else {
            showMessage("Ha ocurrido un error inesperado, Inténtelo de nuevo más tarde.", "error");
        }
    }

});