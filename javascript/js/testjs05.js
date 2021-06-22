class Card {
  constructor(question, reponse) {
    this.question = question;
    this.reponse = reponse;
  }
  //declaration de la methode checkanswer

  checkAnswer() {}
}
// instanciation
const be = new Card(`qui est l'inventeur du js , Brendan eich `);

class Instrument {
  constructor(cordes, corps) {
    this.cordes = cordes;
    this.corps = corps;
  }
}

const kora = new Instrument("nylon  ", "calebasse");
console.log(
  "La kora est composée d'une " + kora.corps + " et de cordes en " + kora.cordes
);
class Batiment {
  constructor(ouverture, fenetre) {
    this.ouverture = ouverture;
    this.fenetre = fenetre;
  }
}
const maison = new Batiment("  Portes en bois", " volets en pvc");
console.log(`maison avec :` + maison.ouverture, "et" + maison.fenetre);

class Instru {
  constructor(sorte, element) {
    this.sorte = sorte;
    this.element = element;
  }
}
const guitare = new Instru("je suis une guitare basse ", "à quatre cordes");
console.log(guitare.sorte + guitare.element);

class etudiant {
  constructor(sexe, nationalite) {
    this.sexe = sexe;
    this.nationalite = nationalite;
  }
}
const id = new etudiant("feminin", "belge");

console.log(`sexe:` + id.sexe, "-", `nationalite:  ` + id.nationalite);
