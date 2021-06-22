/* this.nom = nom;
this.prenom = prenom;
// Méthode (Camel case selon les standards)
this.sePresenter = function() {
  console.log("Bonjour, je m'appelle " +
  this.prenom + " " + this.nom);
}
/*objet verre et ses parametres*/

function Verre(mon_liquide, mon_volume){
    //Promprietes de l'objet
    this.liquide = mon_liquide;
    this.volume = mon_volume;
    this.gorgee = 5;
    //Méthode
    this.remplir = function(){
    console.log('Je me remplis');
    this.volume = mon_volume;
    }
    this.vider = function(){
    console.log('je me vide');
    }
}
    this.aMoitie =function() {

    console.log('Je me vide à moitie');

    // tester le volume actuel
    if(this.volume === 0){
        console.log(this.liquide + " :" + this.volume);
        this.remplir();
        this.volume=this.volume / 2;
        console.log(this.liquide + " :" + this.volume );
    }
}