//Tableau à index
const fruits = [ "Banane","cerise", "Pomme"];
console.log(' dernier element = ', fruits [2]);

// Parcourir le tableau fruit
fruits.forEach (function (fruits, index){
    // console.log(`fruit : ` , fruit);
    // console.log(`index: ` , index);
    // console.log(`tableau : ` , tab);

});

console.log("test: " ,);
 // Methode push  
 fruits.push("fraise");
 console.log("fruits : " , fruits);

 //suppression ou remplacement à l interieur du tabeau.
 //premier arg indique changement du tableau,
 // le second indique combien d 'elements sont supprimés.
 //le troisieme indiQUE LES ELEMENTS ajoutés,
 //la methode renvoi untableau des elements supprimés

 fruits.splice (4,1);
 console.log("fruits :", fruits);

 fruits.splice (4,1, "papaye");
 console.log("fruits :" ,fruits);
 
 //retour elet suppr
 let remove_fruits  = fruits.splice (4,1, "papaye");
 console.log(" fruits supprimés:" , remove_fruits);

 //trnasformation d'un d'un tableau
 fruits.map((fruit) => `<li>${fruit}</li>`);
