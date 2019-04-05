//Funciones para iniciar
import {registerUser, gmailLogIn, loginUserWithEmail} from './auth.js';

export const registerWithEmailAndPassword = () => {
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     registerUser(email, password);
};

export const signInWithEmailAndPassword = () => {
     const textEmail = document.getElementById('emaiLogin').value;
     const textPassword = document.getElementById('passwordLogin').value;
     loginUserWithEmail(textEmail, textPassword);
};


//iniciar sesion con google
export const logInGoogle = () => {
     //alert("hola")
     gmailLogIn();
};
