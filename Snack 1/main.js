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
    peso: 20
  },
  {
    nome: 'bike2',
    peso: 15
  },
  {
    nome: 'bike3',
    peso: 20
  },
  {
    nome: 'bike4',
    peso: 30
  },
  {
    nome: 'bike5',
    peso: 15
  }
];

//*********** SOLUZIONI CHE NON VEDONO IL CASO DI PAREGGIO INIZIO


// // VARIABILI PER SALVARMI MENTRE CICLO IL PESO MINORE PARZIALE E LA CORRISPONDENTE BICI
// let biciLeggera = bikes[0].nome;
// let pesoBiciLeggera = bikes[0].peso;

// // CICLO PER STABILIRE LA BICI COL PESO MINORE
// // PERò IN CASO DI PIù BICI VINCITRICI CONSIDERA LA PRIMA CHE TROVA TRA GLI OGGETI DELL'ARRAY
// bikes.forEach((bike) => {
//   const {nome, peso} = bike;
//   if (peso < pesoBiciLeggera) {
//     biciLeggera = nome;
//     pesoBiciLeggera = peso;
//   }
// });

// // CICLO PER STABILIRE LA BICI COL PESO MINORE
// // PERò IN CASO DI PIù BICI VINCITRICI CONSIDERA L'ULTIMA CHE TROVA TRA GLI OGGETI DELL'ARRAY
// // bikes.forEach((bike) => {
// //   const {nome, peso} = bike;
// //   if (peso <= pesoBiciLeggera) {
// //     biciLeggera = nome;
// //     pesoBiciLeggera = peso;
// //   }
// // });

// // STAMPO RISULTATI SUL DOM
// const body = document.querySelector('body');
// const h1 = document.createElement('h1');
// h1.innerText = `La ${biciLeggera} che pesa ${pesoBiciLeggera} kg è la più leggera`;
// body.append(h1);

// //*********** SOLUZIONI CHE NON VEDONO IL CASO DI PAREGGIO FINE





//*********** SOLUZIONE CHE CONSIDERA CASO CON PIù BICI VINCENTI INIZIO

// ARRAY IN CUI DI VOLTA IN VOLTA SALVEREMO LE BICI COL PESO MINORE 
let biciLeggere = [];
// VARIABILE PER SALVARE AD OGNI PASSO IL PESO MINORE
let pesoBiciLeggera = bikes[0].peso;

bikes.forEach((bike) => {
  const {nome, peso} = bike;
  if (peso === pesoBiciLeggera ) {

    biciLeggere.push(nome)

  } else if (peso < pesoBiciLeggera) {
    
    biciLeggere = [];
    biciLeggere.push(nome);
    pesoBiciLeggera = peso;
    
  }
});

// MI PRENDO L'ELEMENTO BODY
const body = document.querySelector('body');

// CICLO LE BICI PIU LEGGERE E LE STAMPO NEL DOM
biciLeggere.forEach((element) => {
  if (biciLeggere.length === 1) {

    const h1 = document.createElement('h1');
    h1.innerText = `La ${element} che pesa ${pesoBiciLeggera} kg è la più leggera`;
    body.append(h1);

  } else {

    const h2 = document.createElement('h2');
    h2.innerText = `Tra le bici vincitrici abbiamo ${element} che pesa ${pesoBiciLeggera} kg`;
    body.append(h2);

  }
});

//*********** SOLUZIONE CHE CONSIDERA CASO CON PIù BICI VINCENTI FINE

