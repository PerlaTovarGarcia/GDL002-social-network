import {wall} from './templatePerfil.js';

const db = firebase.firestore();


// Inicializar firebase
export let basePost=()=>{
	let comment = document.querySelector(".createPost").value;
  let time = new Date();

  let buttnsDelete=Array.from(document.getElementsByClassName('eliminar'));
  buttnsDelete.forEach(button => button.addEventListener('click', dlete));

	db.collection("users").add({ //agrega un ID automatico a cada usuario
    comment: comment,
    date: time

	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
		document.querySelector(".createPost").value = "";

	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
};


//Inicializa funcion para mostrar post
export const newpost = () => {

//Eliminar post
	let buttnsDelete = Array.from(document.getElementsByClassName('eliminar'));
	buttnsDelete.forEach(button => button.addEventListener('click', dlete));

	function dlete () {
		let idParentDleteBtn = this.event.target.parentNode.getAttribute('id');
		db.collection("users").doc(idParentDleteBtn).delete().then(function() {
		console.log(idParentDleteBtn);
		//let ids = document.querySelector(id);
		//ids.innerHTML = '';
			}).catch(function(error) {
				console.error("Error removing document: ", error);
			});
		}


//Visualizar template de posts
  if (wall()){
		const visualizationPost = document.querySelector('#visualizationPost');
		console.log(visualizationPost);
		db.collection("users").onSnapshot((querySnapshot) => {
			visualizationPost.innerHTML = '';

			querySnapshot.forEach((doc) => {
				visualizationPost.innerHTML += `
            <article>
              <img src=''></img>
              <h6></h6>
            </article>

            <article id= "${doc.id}" class="postContainer">
              <h4></h4>
              <button class="editar" onclick="edit()"><i class="fas fa-pen"></i></button>
              <button class="eliminar"><i class="fas fa-trash-alt"></i></button>
              <p class="postextStyle">${doc.data().comment}</p>
              <img src=''></img>
              <button><i class="fas fa-heart" style="color #F1C711"></i></button>
            </article>

            <article>
              <i></i>
              <p></p>
              <p></p>
              <h6></h6>
            </article>
          `;

          //db.collection("users").orderBy('date', 'desc');
          //let orderPost = () => {

          //}

          /*console.log(document.querySelector('.eliminar'));
          document.querySelector('.eliminar').addEventListener('click', () => {
            dlete(doc.id)});*/

            //dlete(doc.id));
          });

        });
  }
};
