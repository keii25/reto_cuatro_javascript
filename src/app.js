var scanf = require('scanf');

console.log('---Programa De Calificacion entre 0 y 10---: ');
console.log('Escriba la nota del Estudiante: ');
let score = scanf('%d');

switch (true) {
    case (isNaN(score)):
        console.log('Numero Invalido');
        break;

    case (score >= 0 && score <= 3):
        console.log('----> Muy deficiente');
        break;

    case (score > 3 && score <= 5):
        console.log('----> Insuficiente');
        break;

    case (score > 5 && score <= 6):
        console.log('----> Suficiente');
        break;

    case (score > 6 && score <= 7):
        console.log('----> Bien');
        break;

    case (score > 7 && score <= 9):
        console.log('----> Notable');
        break;

    case (score > 9 && score <= 10):
        console.log('----> Sobresaliente');
        break;

    default:
        console.log('Error, fuera de rango');
        console.log('Debe ingresar nota entre 0 y 10');
        break;
}

console.log('\n');
console.log('Programa Finalizado');