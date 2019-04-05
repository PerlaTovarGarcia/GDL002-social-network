import { changeHash }from "./changePage.js";

export const watcher=()=>{
  firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            console.log("Ingreso un usuario >" + JSON.stringify(firebaseUser));
        } else {
            console.log('No está logueado');
        }
    });
};


export const registerUser = (email, password) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{checkEmail();
          changeHash('/profile');}
        ).catch((e) => {console.log(e);
          document.getElementById('menssage2').innerHTML = 'No se ingreso usuario, e-mail o contraseña';
    });
};



export const loginUserWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => changeHash('/profile'))
          .catch((e) => {console.log(e);
           document.getElementById('message').innerHTML = 'Usuario o contraseña incorrectos';
    });
};



//Ingresar con cuenta google (Documentación de Firebase)
 export const gmailLogIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider(); //Se crea una instancia del objeto del proveedor de Google
    firebase.auth().signInWithPopup(provider)//accede al objeto y te muestra la ventana emergente.
      .then(()=> changeHash('/profile'))//haces la promesa... de que si entra con google te cambie el has al muro.
     .catch((e) =>{console.log(e);
     });//nos sale en la consola los errores.

};

//confirma el mail
export const checkEmail=()=> {
  firebase.auth().currentUser.sendEmailVerification();

};



//salir del muro
export const gOut = () =>{
    firebase.auth().signOut()//
     .then(()=> changeHash('/register'))
     .catch((e)=> {console.log(e);
     });
};
