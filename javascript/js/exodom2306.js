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
const header = createMarkup("header", "HEADER", document.body);
console.log("header.text :," + header.text);
const nav = createMarkup("nav", "NAV", header);
console.log("nav.text :," + nav.text);
const button = createMarkup("button", "Item1", nav);
console.log("button :," + button);
const button2 = createMarkup("button", "Item2", nav);
console.log("button :," + button2);
const button3 = createMarkup("button", "Item3", nav);
console.log("button :," + button3);
const button4 = createMarkup("button", "Item4", nav);
console.log("button :," + button4);

button.style.background = "red";
