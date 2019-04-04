import{changeHash} from './changePage.js'
import{basePost, newpost} from './postUser.js'

export let wall = (posts) => {
  console.log("wal");
    const divElem = document.createElement('div');
    //divElem.classList.add("section");
     let viewHome = `

    <article class="post">
      <section class="mobile-barMenu">
        <a class="logoNav-mobile" href="#"><img src="src/imagenes/logo-poua-app.png" width="180"></a>
        <button id="menu-btn" class="menu-btn"><i class="fas fa-bars 2x menu-icon"></i></button>
      </section>

     <header>
      <nav class="nav">
       <ul>
         <li><a class="logoNav" href="#"><img src="src/imagenes/logo-poua-app.png" width="180"></a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>AMIGOS</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ESTADO</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ÉPOCA</a></li>
         <li><a href="#"><i class="fas fa-user fa-lg" style="color: #ffffff;"></i></a></li>
         <li><a href="#"><i class="fas fa-calendar-plus fa-lg" style="color: #ffffff;"></i></a></li>
         <li><a href="#"><i class="fas fa-bookmark fa-lg" style="color: #ffffff;"></i></a></li>
         <li><button id="userLogoutBtn">Cerrar Sesión</button>
       </ul>
       </nav>
     </header>

     <section class="index">
      <img src="src/imagenes/boy.png" alt="user" width="45" height="45" class="user">
      <textarea name="Crea una publicación" id="createPost" class="createPost" cols="50" rows="15" placeholder="Cuenta la historia de un lugar que conoces"></textarea>
      <article class="controlsContainer">
        <img src="src/imagenes/image.png" alt="Subir foto" width="35" height="35">
        <img src="src/imagenes/location.png" alt="Localización" width="35" height="35">
        <select name="Seleccionar época" id="era" class="era">
          <option value="" selected>Seleccionar época</option>
          <option value="">México moderno</option>
          <option value="">México post-revolucionario</option>
          <option value="">Revolución mexicana</option>
          <option value="">Porfiriato</option>
          <option value="">Reforma</option>
          <option value="">México independiente</option>
          <option value="">Independencia</option>
          <option value="">Virreinato o Colonia</option>
          <option value="">La Conquista</option>
          <option value="">México prehispánico</option>
        </select>

        <select name="Seleccionar privacidad" id="privacy" class="privacy">
          <option value="">Público</option>
          <option value="">Privado</option>
        </select>
        <button id="public" class="makePost-btn">PUBLICAR</button>
      </article>
    </section>

    <section id="visualizationPost" class="visualizationPost">

    </section>

    <footer class="desktop-foot">
      <p class="foot-parr">Powered By Perla, Jess & Itinna. 2019</p>
    </footer>

    <footer class="mobile-foot">
        <i class="fas fa-home fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-user fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-calendar-plus fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-bookmark fa-2x" style="color: #ffffff;"></i>
    </footer>
    `;
     divElem.setAttribute('id', 'muro');
     divElem.innerHTML = viewHome;

    const userLogout = () =>{
      firebase.auth().signOut()

        .then (()=>changeHash('/login'))
        //console.log('saliendo');

      .catch(function(error){
        console.log(error);
      })
    };
    divElem.querySelector('#userLogoutBtn').addEventListener('click',userLogout);

    const btnPost = divElem.querySelector('#public');
    btnPost.addEventListener( 'click', () =>{
        basePost()



      });

//newpost();
      /*
      const visualizationPost = document.querySelector('#visualizationPost');
      const newPost =()=>{
        firebase.firestore().collection("users").onSnapshot((querySnapshot)
          .then(()=>{
            visualizationPost.innerHTML = '';

              querySnapshot.forEach((doc) => {
                visualizationPost.innerHTML += `
                  <article>
                    <img src=''></img>
                    <h6></h6>
                  </article>

                  <article>
                    <h4></h4>
                    <p>${doc.data.comment()}</p>
                    <img src=''></img>
                  </article>

                  <article>
                    <i></i>
                    <p></p>
                    <p></p>
                    <h6></h6>
                  </article>
                `;
                console.log(`${doc.id} => ${doc.data.comment()}`);

          })



    }));
}*/


    //Agregar colecciones de datos
     /*db.collection("users").add({
        profileImg: "Lovelace",
        name: 1815,
        place: 1815,
        era: 'jol',
        text: 'jol',
        image: 'jol',
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        let values=divElem.querySelector('#createPost').value;
        console.log(values);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    divElem.querySelector('#public').addEventListener('click', readPost);*/


    return divElem;
  };




/*Plantilla para visualiZar post
export let readPost = () => {
  const divElemRead = document.createElement('div');
  divElemRead.setAttribute('id', 'visualizationPost');

  /*let viewPost = `
  <section id="visualizationPost">
  </section>
  `;

  return divElemRead;

};*/
