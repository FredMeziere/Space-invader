/*
const maFunction = function (param1, param2){
  return param1 * param2;
};

// une fonction fléchée renvoie (return) automatiquement la valeur
// issue de l'évaluation de son bloc de code si ce dernier ne fait qu'une ligne
// et qu'on a pas utilisé d'accolade
(param1, param2) => param1 * param2;

// sinon il faut être explicite et faire le renvoi à la main en utlisant return
(param1, param2) => {
  return param1 * param2;
};

() => 'bob';

const maFonctionFlechee = (param) => param + 2;

// forEach est une méthode des tableaux (et des collections)
// permttant d'éxecuter une fonction sur les valeurs stockées
// dans un tableau
*/
const countries = ['France', 'Russie', 'Belgique', 'Allemagne'];
/*
for (let country of countries){
  console.log("J'habite en " + country);
}

for(let countryIndex = 0; countryIndex < countries.length; countryIndex++){
  console.log("J'habite en " + countries[countryIndex]);
}
*/
countries.forEach((country) => console.log("J'habite en " + country));
/*
countries.forEach(function(country){console.log("J'habite en " + country);});

// forEach avec un boucle classique
function forEach(array, callback){
  for(let index = 0; index < array.length; index++){
    callback(array[index], index, array);
  }
}

forEach(countries, (country) => console.log("J'habite en " + country));
*/
const person = {
  firstname: 'John',
  lastname: 'Coltrane',
  instrument: 'saxophone'
};

// on peut énumérer les clefs des propriétés d'un objet
// grâce à la boucle for...in

for(let property in person){
  console.log(property + ' : ' + person[property]);
}