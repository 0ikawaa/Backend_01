// console.log('hola mundo');
// console.error('tenemos un error');
// console.warn('Informacion');

// const comidasPreferidas = "Milanesas con Pure";
// // let postresPreferidos = "Flan con dulce de leche";
// // var ensaladasPreferias = "Ninguna!!";

// // console.log({comidasPreferidas, postresPreferidos, ensaladasPreferias})

// console.log("comidasPreferidas :", comidasPreferidas);
// comidasPreferidas[0] = "Vacio";

// console.log("MUTACION")
// console.log("comidasPreferidas :", comidasPreferidas);

// function saludar() {
//   console.log("Hola mundo comida preferida :" + comidasPreferidas[0]);
// }

// const SaludarFlecha = () => {
//   console.log("Hola mundo comida DESDE ARROW " + comidasPreferidas[0]);
// }

function mostrarLista(lista) {
  if(lista.lenght === 0) {
    console.log('Lista Vacia');
    return;
  }
  for (const item of lista) {
    console.log(item);
  }
  console.log("Cantidad de elementos: ${lista.length}");
}

mostrarLista([]);

console.log("----------------");

mostrarLista(["Breaking Bad", "Dark", "Mr. Robot"]);