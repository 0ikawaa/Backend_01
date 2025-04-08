// metodo Exponencial

console.log('Elevamos al cuadrado:', 2 ** 2);
console.log('Elevamos al cubo:', 2 ** 3);

console.log('Elevamos al cuadrado con Math:', Math.pow(2,2));
console.log('Elevamos al cubo con Math:', Math.pow(2,3));


// metodo Include

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(99)); // encontrar el 99 dentro de la constante

// Nullish

let nombre = null | undefined;
console.log(nombre ?? "Sin Nombre");
console.log(typeof nombre);