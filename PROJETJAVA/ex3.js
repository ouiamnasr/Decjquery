// Fonction de Génération du nombre aléatoire entre 1 et 100
var randomNumber = Math.floor(Math.random() * 100) + 1;


function verification() {

 var userGuess = parseInt(document.getElementById('guessInput').value); // Récupération de la proposition de l'utilisateur


 if (userGuess == randomNumber) { // Vérification de la proposition
    document.getElementById("message").textContent='Bravo!';
 } 

 else if (userGuess < randomNumber) {
    document.getElementById("message").textContent='Le nombre à deviner est plus grand.';
 } 

 else {
    document.getElementById("message").textContent='Le nombre à deviner est plus petit.';
 }

}


