var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};


    var chien1 = Object.create(Chien);
    chien1.init("Crokdur", "Mâtin de Naples", 75);

    var chien2 = Object.create(Chien);
    chien2.init("Pupuce","Bichon",22);

    var chien3 = Object.create(Chien);
    chien3.init("Médor","Labradon",58);

    var chiens = [];
    chiens.push(chien1);
    chiens.push(chien2);
    chiens.push(chien3);

    chiens.forEach(function (toutou) {
    	console.log(toutou.nom + "est un " + toutou.race + " mesurant " + toutou.taille + " cm. Il aboie : "+ toutou.aboyer());
    });
