/*registro de ususarios*/
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebase.js';
import { showMessage } from "./showMessage.js";
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    //const name = signupForm['signup-name'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const confirmPassword = signupForm['confirm-signup-password'].value;
    
    //console.log(email, password)

    if(password === confirmPassword){
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);
    
            //cerrar el modal de signup
            const signupModal = document.querySelector('#signupModal');
            const modal = bootstrap.Modal.getInstance(signupModal);
            modal.hide();
    
            showMessage("Usuario registrado correctamente: " + userCredentials.user.email);
    
        } catch (error) {
            //console.log(error.message);
            //console.log(error.code); //da un identificador unico para el error
    
            if (error.code === 'auth/email-already-in-use')
            {
                showMessage("El email ya está en uso.", "error");
                //alert('El email ya está en uso.');
            }else if (error.code === 'auth/invalid-email.')
            {
                showMessage("El email no es válido.", "error");
                //alert('El email no es válido');
            }else if (error.code === 'auth/weak-password')
            {
                showMessage("La contraseña debe tener al menos 6 caracteres.", "error");
                //alert('La contraseña debe tener al menos 6 caracteres.');
            }else if (error.code)
            {
                showMessage("Ha ocurrido un error inesperado, Inténtelo de nuevo más tarde.", "error");
                //alert('Ha ocurrido un error inesperado. Inténtelo de nuevo más tarde.');
            }
        }
    }else{
        showMessage("Las contraseñas no coinciden.", "error");
    }

});
