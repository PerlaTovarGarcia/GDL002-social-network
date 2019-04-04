import {registerWithEmailAndPassword, logInGoogle} from './userValue.js';

export let registerUser = () => {
    const formElemtTwo = document.createElement('form');
   let templateRegisterUser = `
                <section>
                  <img alt="logo Poua" src="src/imagenes/inicio-banner.png" class="desktop-index" width="100%"/>
                  <img alt="" src="src/imagenes/inicio-mobile.png" class="mobile-index" width="100%"/>
                  <img alt="" src="src/imagenes/poua-text-mobile.png" class="mobile-index" width="100%"/>

                  <form class= "container hide" id="register" data-tab-for="register">

                    <button class="googleBtn">
                      <a class="google" id="btnGmail" href="#"><i class="fab fa-google"></i>Registrarse con Google</a>
                    </button>
                    <div>
                      <input class= "input" id="name" type="text" placeholder="Nombre" required></input>
                    </div>
                      <input type="email" id="email" class="input" placeholder="Ingresa un correo" required></input>
                    <div>
                      <input type = "password" id="password" class= "input" placeholder="Ingresa una contraseña"required></input>
                    </div>
                    <div id="message2"><p></p></div>
                    <button id="btnSignUp" class="btn">REGISTRARSE</button>
                </form>

                <div class="register">
                    <a id="return" class="createAccount" href="#/login">INICIAR</a>
                </div>
                </section>
                  `;

      formElemtTwo.classList.add('register');
      formElemtTwo.innerHTML = templateRegisterUser;


      const btnRegister = formElemtTwo.querySelector('#btnSignUp');
      btnRegister.addEventListener( 'click', () => {
      registerWithEmailAndPassword();
    });

      const btnSignInWithGoogle = formElemtTwo.querySelector('#btnGmail');
      btnSignInWithGoogle.addEventListener( 'click', () => {
          logInGoogle();
        });

      return formElemtTwo;
};
