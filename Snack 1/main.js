'use strict';

/*

- Creare un array di oggetti.
- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
- Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

*/

// ARRAY BIKES

const bikes = [
  {
    nome: 'bike1',
    peso: 15
  },
  {
    nome: 'bike2',
    peso: 10
  },
  {
    nome: 'bike3',
    peso: 10
  },
  {
    nome: 'bike4',
    peso: 15
  },
  {
    nome: 'bike5',
    peso: 25
  }
];

//*********** SOLUZIONI CHE NON VEDONO IL CASO DI PAREGGIO INIZIO


// VARIABILI PER SALVARMI MENTRE CICLO IL PESO MINORE E LA CORRISPONDENTE BICI
let biciLeggera = bikes[0].nome;
let pesoBiciLeggera = bikes[0].peso;

// CICLO PER STABILIRE LA BICI COL PESO MINORE
// PERò IN CASO DI PIù BICI CON LO STESSO PESO CONSIDERA LA PRIMA CHE TROVA TRA GLI OGGETI DELL'ARRAY
bikes.forEach((bike) => {
  const {nome, peso} = bike;
  if (peso < pesoBiciLeggera) {
    biciLeggera = nome;
    pesoBiciLeggera = peso;
  }
});

// CICLO PER STABILIRE LA BICI COL PESO MINORE
// PERò IN CASO DI PIù BICI CON LO STESSO PESO CONSIDERA L'ULTIMA CHE TROVA TRA GLI OGGETI DELL'ARRAY
// bikes.forEach((bike) => {
//   const {nome, peso} = bike;
//   if (peso <= pesoBiciLeggera) {
//     biciLeggera = nome;
//     pesoBiciLeggera = peso;
//   }
// });

// STAMPO RISULTATI SUL DOM
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = `La ${biciLeggera} che pesa ${pesoBiciLeggera} kg è la più leggera`;
body.append(h1);

//*********** SOLUZIONI CHE NON VEDONO IL CASO DI PAREGGIO FINE