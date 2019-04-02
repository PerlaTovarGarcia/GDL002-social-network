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
    let passworRegister = document.getElementById('passwordRegister').value;

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passworRegister).catch(function(error) {
        // Manejar errores
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);   
      });
};

document.getElementById('btnRegister').addEventListener('click',register);

/*
//iniciar con google
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });*/