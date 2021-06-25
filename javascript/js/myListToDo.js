function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.firstchild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}
// création du bouton
const btn = document.createElement("BUTTON"); // Créer un élément <button>
var t = document.createTextcontent("CLICK MEajoute "); // Créer un noeud textuel
btn.appendChild(t); // Ajouter le texte au bouton
document.body.appendChild(btn); // Ajoute la balise <button> à la balise <body>
