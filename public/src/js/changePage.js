import {loginUser} from './templateLogin.js';
import {registerUser} from './templateRegisterUser.js';
import {wall} from './templatePerfil.js';
import{ newpost} from './postUser.js'

//export const content = document.getElementById('container');

/*export let routers = {
  '/':loginUser,
  '/login':loginUser,
  '/register':registerUser,
  '/home':viewHome
}
window.onpopstate = ()=>{
  content.innerHTML = routers[window.location.pathname];
  //content.innerHTML=' ';

}
export let onNav = (pathName)=>{
  window.history.pushState({},pathName,window.location.origin + pathName);
  content.innerHTML = routers[pathName];
}



content.innerHTML = routers[window.location.pathname];
//console.log(routers);
}*/


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

          const templateSignIn = loginUser();
          container.appendChild(templateSignIn);
      }
};

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  if ('onhashchange' in window) {
     window.onhashchange = () => changeRouter(window.location.hash);
  }
};
