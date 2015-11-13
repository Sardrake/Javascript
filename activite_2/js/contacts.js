//objet menu
var menu = {
	init: function(num,titre) {
		this.num = num;
		this.titre = titre
	},

	afficheMenu: function(){
		var listMenu = this.num +" : "+ this.titre;
		return listMenu;
	}
}

//objet contact
var contact = {
	// Initialise le contact
	init: function(nom,prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},

	// Renvoie le détail du contact
	affiche: function() {
		var afficher = "Nom : " + this.nom + ", Prénom : " + this.prenom;
		return afficher;
	}
}

// Menu
var menu1 = Object.create(menu);
menu1.init(1,"Lister les contacts");

var menu2 = Object.create(menu);
menu2.init(2,"Ajouter un contact");

var menu3 = Object.create(menu);
menu3.init(0,"Quitter");

var tableauMenu = [];
tableauMenu.push(menu1);
tableauMenu.push(menu2);
tableauMenu.push(menu3);

// contact initiaux

var contact1 = Object.create(contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne","Mélodie");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);


//début de la partie interactive
console.log("Bienvenue dans le gestionnaire des contacts")
var choix = 3; // On amorce la variable avec une valeur différente de 0
while (choix !== 0) {
	tableauMenu.forEach( function (choixMenu) {
		console.log(choixMenu.afficheMenu());
	});
	choix = Number(prompt("Choisissez une option :"));
	if (choix === 1) {
		contacts.forEach( function (listContact) {
			console.log(listContact.affiche());
		});
		console.log(""); //saute une ligne en fin de liste
	} else if (choix === 2) {
		var newContact = Object.create(contact);
		newContact.init(prompt("Entrez le nom du contact :"), prompt("Entrez le prénom du contact :"));
		contacts.push(newContact);
		console.log("Le contact a été ajouté");
		console.log(""); //saute une ligne
	} else if (choix === 0) {
		console.log("Au revoir !");
	} else {
		console.log("Ce choix n'est pas valide !!!")
	}
}
