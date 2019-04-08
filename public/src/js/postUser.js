import {wall} from './templatePerfil.js';

const db = firebase.firestore();


// Inicializar firebase
export let basePost=()=>{
	let comment = document.querySelector(".createPost").value;
  let time = new Date();

	db.collection('users').add({ //agrega un ID automatico a cada usuario
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

	export function deletedPost(id) {
		db.collection('users')
			.doc(id)
			.delete()
			.then(function () {
				console.log('Document successfully deleted!');
			})
			.catch(function (error) {
				console.error('Error removing document: ', error);
		});
	}

//Inicializa funcion para mostrar post
export const newpost = () => {
//Visualizar template de posts
  if (wall()){
		const visualizationPost = document.querySelector('#visualizationPost');
		console.log(visualizationPost);
		db.collection('users').onSnapshot((querySnapshot) => {
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
              <button class="erase"><i class="fas fa-trash-alt"></i></button>
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

          db.collection('users').orderBy('date', 'desc');


				});
				let deleteButtons = document.querySelectorAll('.erase');

    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function (event) {
        deletedPost(event.target.id);
        console.log(event.target.id);
    });
    }


					//document.querySelector('.eliminar').addEventListener('click', dlete,false);
					//let orderPost = () => {

          //}

          //console.log(document.querySelector('.eliminar'));
          /*document.querySelector('.eliminar').addEventListener('click', () => {dlete(doc.id);
					});*/
					//dlete(doc.id));
				});

    }
};
