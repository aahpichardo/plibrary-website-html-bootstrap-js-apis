/*Cerrar sesion*/
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'
const logout = document.querySelector('#logout');

logout.addEventListener('click', async (e) => {
    //console.log("logout");
    await signOut(auth);
    showMessage("Usuario desconectado correctamente");
    //console.log("Usuario desconectado");
});