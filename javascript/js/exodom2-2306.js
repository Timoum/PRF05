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

function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}

const body = createMarkup("body", "BODY", document.body);
console.log("body.text :," + body.text);
const button = createMarkup("button", "Ajouter un paragraphe", body);
console.log('button:', +button);
