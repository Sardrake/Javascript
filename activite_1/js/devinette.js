/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme


var reponse = 0;
var nbrReponse = 1;
while (reponse !== solution && nbrReponse <= 6) {
	reponse = Number(prompt("Devinez le chiffre choisi entre 1 et 100"));
	if (reponse > solution) {
		console.log(reponse +" est trop grand");
		nbrReponse++
	} else if (reponse < solution) {
		console.log(reponse + " est trop petit");
		nbrReponse++
	} else if (reponse === solution) {
		console.log("Bravo ! La solution était " + solution);
		console.log("Vous avez trouvé en " + nbrReponse + " essai(s)");
	} else {
		console.log("Vous devez enter une valeur numérique !!!");
	}
}

// affiche perdu après le 6eme echec, nbrReponse vaut normalement 7, ne pas afficher si trouvé.
if (nbrReponse > 6) {
	console.log("Vous avez perdu, la solution était " + solution);
}
