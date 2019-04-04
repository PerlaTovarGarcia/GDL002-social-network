import {wall} from './templatePerfil.js'

const db = firebase.firestore();


// Initialize Cloud Firestore through Firebase
export let basePost=()=>{
	let comment = document.querySelector(".createPost").value;
  let time = new Date();

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

}

//Visualizar posts
export const newpost = () => {
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

            <article class="postContainer">
              <h4></h4>
              <p class="postextStyle">${doc.data().comment}</p>
              <img src=''></img>
            </article>

            <article>
              <i></i>
              <p></p>
              <p></p>
              <h6></h6>
            </article>
          `;

       db.collection("users").orderBy('date', 'desc');

            console.log(`${doc.id} => ${doc.data().comment}`);
        });
    });
  }

};
