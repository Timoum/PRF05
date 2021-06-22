
// Déclaration d'une fonction constructeur de Pokemon
function Pokemon(name, type, weight, height){
  this.name = name;     // Propriétés de l'objet
  this.type = type;
  this.weight = weight;
  this.height = height;
  this.introduceMySelf = function(){
    console.log("Je m'appelle ", this.name, "Je sui un Pokemon de type ", this.type);
  }
}

// Création d'une instance de Pokemon
const raikou = new Pokemon("Raikou", "Electrique", 178, 190); // Une instance de Pokemon vient d'être créée
const tadmorv = new Pokemon("Tadmorv", "Poison", 30, 90); // Une instance de Pokemon vient d'être créée

console.log("raikou: ", raikou);
console.log("tadmorv: ", tadmorv);