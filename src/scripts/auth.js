// Initializar Firebase
const config = {
    apiKey: "AIzaSyANXB1QICy5UrOliUFpOzNOBt_2fKyC0_M",
    authDomain: "poua-8a563.firebaseapp.com",
    databaseURL: "https://poua-8a563.firebaseio.com",
    projectId: "poua-8a563",
    storageBucket: "poua-8a563.appspot.com",
    messagingSenderId: "777091228447"
};
firebase.initializeApp(config);

//Registrar usuario
const register = () => {
    let emailRegister = document.getElementById('emailRegister').value;
    let passwordRegister = document.getElementById('passwordRegister').value;

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister).catch(function(error) {
        // Manejar errores
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert('El usuario o contraseña no son válidos');   
      });
};

document.getElementById('btnRegister').addEventListener('click',register);

//Inicio de sesión
const login = () => {
  const emailLogin = document.getElementById('email').value;
  const passwordLogin = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
    // Manejar errores
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode + errorMessage);
    alert('Correo o contraseña incorrectos');
  });
};

document.getElementById('btnLogin').addEventListener('click', login);

//iniciar con google
const googleInit = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // Token de google para iniciar API
    const token = result.credential.accessToken;
    // Info de usuario
    let user = result.user;
    // ...
  }).catch(function(error) {
    // Manejar errores
    let errorCode = error.code;
    let errorMessage = error.message;
    // Email de la cuenta del usuario
    let email = error.email;
    // Tipo de credencial de firebase.auth.AuthCredential
    let credential = error.credential;
  });
};

document.getElementById('btnGoogleReg').addEventListener('click', googleInit);
document.getElementById('btnGoogleLog').addEventListener('click', googleInit);

//Observador
const watcher = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Existe usuario activo');
      showcontent();
      
      // Usuario está logueado
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('Usuario inactivo');
      // Usuario cierra sesión
    }
  });
};
watcher();

const showcontent = () => {
  let content = document.getElementById('logout');
  content.innerHTML = `<button onclick="userLogout()">Cerrar</button>`;
};

//Cerrar sesión
const userLogout = () => {
  firebase.auth().signOut()
  .then(function(){
      console.log('saliendo...');
  })
  .catch(function(error){
      console.log(error);
  })
};