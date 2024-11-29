const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Para seleccionar una clase en el Dom se utiliza el .seguidoDelNombre
const $b = document.querySelector('.blog'); //El # es para los id
const $l = document.querySelector('.location'); // No estaba en el html

async function displayUser(username) { //Agregando la función async.
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);// Debido a que tiene un await, podemos deducir que es una  define una función asíncrona, entonces faltaría agregarle la palabra reservada async.
  const data = await response.json();// Es necesario convertirlo a formato JSON para trabajar con los datos
  console.log(data); //Para imprimir la respuesta
  $n.textContent = `${data.name}`; //Al ejecutar el código me salio que estaban mal las '
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; // se cambiaron por `backticks
}

function handleError(err) {  //Función para advertir sobre un error.
  console.log('OH NO!'); //Imprime en consola
  console.log(err);     
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);