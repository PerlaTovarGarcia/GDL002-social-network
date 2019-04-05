import {loginUser} from './templateLogin.js';
import {registerUser} from './templateRegisterUser.js';
import {wall} from './templatePerfil.js';
import{ newpost} from './postUser.js';


export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
};


export const changeRouter = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return showTemplate(hash); //el que carga por defecto, primera vez
    } else if (hash === '#/login' || hash=== '#/register' || hash === '#/profile') {
      return showTemplate(hash);
    } else {
      return showTemplate('#/404');
    }
};




const showTemplate = (routers) => {


    const router = routers.substr(2, routers.length - 2);


    const container = document.getElementById("container");
    container.innerHTML = ' ';

    const templateSignIn = loginUser();

    switch (router) {
      case 'login':
        container.appendChild(loginUser());
        break;


      case 'register':
        container.appendChild(registerUser());
        break;


      case 'profile':
        container.innerHTML = '';
          container.appendChild(wall());
          newpost();
          break;

      default:
      container.appendChild(templateSignIn);
      }
};

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  if ('onhashchange' in window) {
     window.onhashchange = () => changeRouter(window.location.hash);
  }
};
