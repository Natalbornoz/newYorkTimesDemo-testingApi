//Nos traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');

//*Está invocando la función getNews() y es en esta función donde crearemos las peticiones
form.addEventListener('submit', function(e){
    e.preventDefault();
    // La propiedad Element.innerHTML cambia o devuelve la sintaxis HTML describiendo los descendientes del elemento.
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});

//*A nuestro formulario le agregamos el evento submit y las instrucciones a ejecutar

function getNews() {
    // Creamos objeto
 const articleRequest = new XMLHttpRequest();
    //Hacemos uso del método .open() y sustituimos nuestra KEY
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=7e800d63f5274315aa1d72ff1d2967cd`);
    //Las propiedades .onload y .onerror tienen asignadas sus funciones correspondientes
    //.onload: Se produce cuando un navegador carga un elemento HTML o una imagen 
    //.onerror: El evento de error ocurre cuando se produce un error durante la carga de un archivo multimedia
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    //Con el método .send se envía la petición
    articleRequest.send();
}

function handleError() {
    console.log('Se ha presentado un error');
}

// function addNews() {
//     //Devolverá siempre un DOMString, es decir un string normal, conteniendo la respuesta del servidor.
//     const data = JSON.parse(this.responseText);
//     // console.log(data);
//     const response = data.response;
//     console.log(response);
// }

function addNews() {
   const data = JSON.parse(this.responseText);
   const article = data.response.docs[0];
   const title = article.headline.main;
   const snippet = article.snippet;

   let li = document.createElement('li');
   li.getElementsByClassNameme = 'articleClass';
   li.innerText =snippet;

   responseContainer.appendChild(li);
}

