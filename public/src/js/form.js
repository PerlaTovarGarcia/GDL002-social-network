import {registerUser, gmailLogIn, loginUserWithEmail} from '../js/auth.js';

 //const textEmail = document.getElementById('email');
  //const textPassword = document.getElementById('password');
  //const btnLogin = document.getElementById('btnLogin');
  //const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

//registar al usuario.
const registerWithEmailAndPassword = () => {
     const textEmail = document.getElementById('email').value;
     const textPassword = document.getElementById('password').value;
     registerUser(textEmail, textPassword);
  };
  document.getElementById('btnSignUp').addEventListener('click', registerWithEmailAndPassword);

//iniciar sesion con el password
const signInWithEmailAndPassword = () => {
     const textEmail = email.value;
     const textPassword = password.value;
     loginUserWithEmail(textEmail, textPassword);
  };
  document.getElementById('btnLogin').addEventListener('click', signInWithEmailAndPassword);


//iniciar sesion con google
const logInGoogle = () => {
     //alert("hola")
     gmailLogIn()
  }
  document.getElementById('btnGmail').addEventListener('click', logInGoogle);






/*
  btnLogin.addEventListener('click', e => {
    //obtener email y password
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    //obtener email y password
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
  });*/
