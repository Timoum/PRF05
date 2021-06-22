class Verre{
    constructor(nom_liquide, mon_volume) {
        this.liquide = mon_liquide;
        this.volume_max = mon_volume;
        this.volume = mon_volume;
        this.gorgee = 5;
    }
    remplir() {
        console.log("je me remplis ");
        this.volume = this.volume_max;
        console.log("volume actuel" , this.volume);
    }
    vider(nbr_de_gorgee = 5) {
        console.log('je me vide de ' , nbr_de_gorgee);
        this.volume = this.volume - (nbr_de_gorgee * this.gorge);
        console.log('Volume actuel' , this.volume);
    }

}   

class VerreCouleur extends Verre{
    constructor (nom_liquide, mon_volume, ma_couleur ){
    this.liquide = mon_liquide;
    this.volume_max = mon_volume;
    this.couleur = ma_couleur;
    }

    
       
    


    
}







