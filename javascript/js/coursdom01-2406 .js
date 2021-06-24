/*
//condition
let i = math.random();
// ==compare
if(i> 0.5){
    console.log('i est inférieur ou egal à 0.5');
} else {
    console.logi( `i est inferieur ou égal à 0.5`)
}
*/

/*
//condition
const p1 = {
    name: "bob",
}
// ==, > < compare
if (p1 == p2){
    console.log('p1 egal p2');
} else {
    console.log('p1 n\'est pas egal à p2');
}



function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  } */
  
/**
 * Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name
 * @param {string} text
 * @param {Objet} parent DOM element
 * @param {Objet} attribute
 * @return {0bject} element du DOM
 */
 function createMarkup(markup_name, text, parent, attribute) {
   //variable markup stocke le retour de la fonction
   //createElement. Ce return a pour type object. cet object est un element du DOM. markup pointe donc ou stocke vers un element
  const markup = document.createElement(markup_name);
  
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}
// Création d'un élément du DOM (h2), ajout en son sein du texte ("Titre 2"),positionnement en dernier fils de "body" et ajout de l'attribut class avec pour valeur "text-warning"
const h2 = createMarkup("h2", "Titre 2", document.body, {
  name: "class",
  value: "text-warning",
});

// Comment affecter à la propriété onclick de l'élément du dom créé (h2) une fonction qui permettra de mettre en rouge son texte ?
h2.onclick = function () {
  h2.style.color = "red";
};

/**
 const body = createMarkup("body", "BODY", document.body);
console.log("body.text :," + body.text);
const button = createMarkup("button", "Ajouter un paragraphe", body);
console.log('button:', +button);
**/
