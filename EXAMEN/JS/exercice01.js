// affectation et recuperation des elements html
const section = document.getElementById("P");

const button = document.getElementById("btn");

//Affectation de la propriété .hidden à la section et au bouton

p.hidden = true;
btn.hidden = false;

//active la fonction on click sur le bouton pour apparition de la section 
// disparition de la section.

btn.onclick = function (){
   // if (p.hidden) p.hidden = false;
   // else btn.hidden = true;
   p.hidden = false;
   btn.hidden = true;
}


