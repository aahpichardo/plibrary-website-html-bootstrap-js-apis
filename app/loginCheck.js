/*Checkeo para ver si hay abierta una sesion*/
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

//console.log(loggedOutLinks);
//console.log(loggedInLinks);

export const loginCheck = user =>{
    const userEmailDisplay = document.getElementById('userEmail');
    const profileEmailInput = document.getElementById('email');
    if(user)
    {
        loggedInLinks.forEach(link => link.style.display = 'block');
        loggedOutLinks.forEach(link => link.style.display = 'none'); //si el usuario existe, coloca solo salir
        userEmailDisplay.innerHTML = user.email;
        profileEmailInput.value = user.email; //para que el email del perfil se llene automaticamente
    }else{
        loggedInLinks.forEach(link => link.style.display = 'none');
        loggedOutLinks.forEach(link => link.style.display = 'block'); //si el usuario no existe, coloca solo entrar y registrarse
        profileEmailInput.value = ''; //para que el email del perfil se vacie automaticamente
    }
}