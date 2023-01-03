//EXO1
// function addition(x, y) {
//     let resultat = x+y;
//     console.log(resultat);
    
// }
// addition(5,5);


//EXO2
// function soustraction(x,y) {
//     let resultat = y-x;
//     console.log(resultat);
    
// }

// soustraction(5,20);

//EXO3
// function multiplication(x,y) {
//     let resultat = x * y;
//     console.log(resultat);
    
// }
// multiplication(7,7);

//EXO4
// function division(x,y) {
//     let resultat = x/y;
//     console.log(resultat);
    
// }
// division(49,7);

//EXO5
// function modulo(x,y) {
//     let reste = x%y;
//     console.log(reste);
    
// }
// modulo(12,5);

//EXO6
// function carre(nombre) {
//     let racine = nombre * nombre;
//     console.log(racine);
    
// }
// carre(6)

//EXO7
// function exposant(x, y) {
//     let resultat = x ** y;
//     console.log(resultat);
    
// }
// exposant(5,2)

//EXO8
// function capitalize(str) {
//     return str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase();
// }
// console.log(capitalize("test"));

//Exo9
function calcul(nbr1, operator, nbr2) {
    switch (operator) {
      case "+":
        return nbr1 + nbr2;
      case "-":
        return nbr1 - nbr2;
      case "*":
        return nbr1 * nbr2;
      case "/":
        return nbr1 / nbr2;
      default:
        break;
    }
  }
  console.log(calcul(2 ,"+", 2));
  console.log(calcul(6 ,"-", 2));
  console.log(calcul(2 ,"*", 2));
  console.log(calcul(8 ,"/", 2));