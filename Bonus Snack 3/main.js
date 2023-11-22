'use strict';

/* 

Bonus Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

*/

// ARRAY DA FAR MANGIARE ALLA NOSTRA FUNZIONE
const oldArray = [1, 'ciao', true, 34, 'mela', false];

// SOLUZIONE CON METODO ARRAY FILTER
// function filtra(array, a, b) {
//   const newArray = array.filter((element, index) => {
//     if (index >= a & index <= b) {
//       return true;
//     }
//   });
//   return newArray;
// }

// SOLUZIONE CON METODO ARRAY FOR EACH
function filtra(array, a, b) {
  const newArray = [];
  array.forEach((element, index) => {
    if (index >= a & index <= b) {
      newArray.push(element);
    }
  });
  return newArray;
}

const newArray = filtra(oldArray, 2, 3);
console.log(newArray);

