export const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            checkEmail()
        })
        .catch(error => document.getElementById('error-m').innerHTML = `${error.message}`)
};

export const loginUserWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => document.getElementById('error-m').innerHTML = `${error.message}`)
};

//Ingresar con cuenta google (Documentación de Firebase)
 export const gmailLogIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider(); //Se crea una instancia del objeto del proveedor de Google
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API. (acceso a google)
        let token = result.credential.accessToken;
        // The signed-in user info. (informacion del usuario que inicia sesión)
        let user = result.user;

        // ...
    }).catch(function (error) {
        // Handle Errors here. (manejar errores)
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used. (email de la cuenta de usuario utilizado)
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used. (tipo de identificador usado por firebase)
        let credential = error.credential;
        // ...
    });

};
