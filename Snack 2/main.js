'use strict';

// FUNZIONE CALCOLO NUMERO RANDOM TRA DUE NUMERI, ESTREMI COMPRESI
function randomTraNumeriCompresi(inf,sup) {
  const numRandom = inf + Math.floor(Math.random() * (sup - inf + 1));
  return numRandom;
}

// GENERO L'ARRAY CON I MIEI OGGETTI SQUADRA
const teams = [
  {
    nome: 'Inter',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    nome: 'Milan',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    nome: 'Juventus',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    nome: 'Roma',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    nome: 'Lazio',
    'punti fatti': 0,
    'falli subiti': 0
  }
];

// CICLO FOR EACH PER ASSEGNARE FALLI SUBITI E PUNTI FATTI
teams.forEach((team) => {

  team["punti fatti"] = randomTraNumeriCompresi(0,5);
  team["falli subiti"] = randomTraNumeriCompresi(0,15);

});

// GENERIAMO NUOVO ARRAY CON OGGETTI CHE HANNO SOLO NOMI E FALLI SUBITI

const newArray = [];
teams.forEach((team) => {
  const {nome, ['falli subiti'] : falliSubiti} = team;
  const newTeam = {

    nome: nome,
    'falli subiti': falliSubiti

  };
  newArray.push(newTeam);
  // SE VOLESSI ARRAY I CUI ELEMENTI SONO I VALORI DELLE KEY NOME E FALLI SUBITI, E NON OGGETTI CHE LI CONTENGANO
  //newArray.push(nome); 
  //newArray.push(falliSubiti);
});

console.log(newArray);



