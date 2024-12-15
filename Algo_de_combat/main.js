// La classe "Personnage" définit un personnage avec des caractéristiques :
// - "nom" : le nom du personnage (ex. : "Jojus")
// - "pointsVie" : les points de vie du personnage (ex. : 100)
// - "attaque" : les points de vie que le personnage inflige lorsqu'il attaque (ex. : 30)
// - "précision" : la chance de réussir l'attaque, un nombre entre 0 et 1 (ex. : 0.8 pour 80% de chance)

class Personnage {
    constructor(nom, pointsVie, attaque, precision) {
        this.nom = nom;
        this.pointsVie = pointsVie;
        this.attaque = attaque;
        this.precision = precision; // Précision entre 0 et 1
    }

    // La fonction "peutAttaquer()" génère un nombre aléatoire entre 0 et 1 et compare
    // ce nombre avec la précision du personnage pour savoir si l'attaque réussit
    peutAttaquer() {
        return Math.random() < this.precision;
    }

    // La fonction "attaquer()" permet au personnage d'attaquer un autre personnage.
    // Si l'attaque réussit, l'adversaire perd des points de vie égaux à l'attaque du personnage.
    // Sinon, un message indique que l'attaque a échoué.
    attaquer(adversaire) {
        if (this.peutAttaquer()) {
            console.log(`${this.nom} attaque et touche ${adversaire.nom} !`);
            adversaire.pointsVie -= this.attaque; // L'adversaire perd des points de vie
        } else {
            console.log(`${this.nom} rate son attaque contre ${adversaire.nom} !`);
        }
    }

    // La fonction "estVivant()" vérifie si le personnage est encore en vie,
    // c'est-à-dire si ses points de vie sont supérieurs à 0.
    estVivant() {
        return this.pointsVie > 0;
    }
}

// Création de deux personnages avec des caractéristiques différentes
let personnage1 = new Personnage("Jojus", 100, 30, 0.8);  // Précision de 80%
let personnage2 = new Personnage("Maximus", 100, 25, 0.6); // Précision de 60%

// Simulation du combat : tant que les deux personnages sont vivants, ils s'attaquent à tour de rôle
while (personnage1.estVivant() && personnage2.estVivant()) {
    // Personnage 1 attaque Personnage 2
    personnage1.attaquer(personnage2);
    console.log(`${personnage2.nom} a ${personnage2.pointsVie} points de vie restants.`);
    
    // Vérification si Personnage 2 est mort
    if (!personnage2.estVivant()) {
        console.log(`${personnage2.nom} est mort ! ${personnage1.nom} est le vainqueur !`);
        break;
    }

    // Personnage 2 attaque Personnage 1
    personnage2.attaquer(personnage1);
    console.log(`${personnage1.nom} a ${personnage1.pointsVie} points de vie restants.`);
    
    // Vérification si Personnage 1 est mort
    if (!personnage1.estVivant()) {
        console.log(`${personnage1.nom} est mort ! ${personnage2.nom} est le vainqueur !`);
        break;
    }
}
