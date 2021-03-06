// déclaration et affectation de la variable btn1 .
// On affecte l'élément du dom qui correspond à
// l'id btn1

const btn1 = document.getElementById("btn1");

// Affectation d'une fonction gestionnaire d'événement à la propriété onclick

// Avec le mot clé function, "this" est "relié" (bind) à l'instance
// de l'objet appelant (ici btn1)
// Avec les fonctions fléchées, this dépend du contexte dans lequel
// la fonction a été déclarée. Ici, le contexte étant global, this
// est un alias de window

btn1.onclick = () => {
  // ! signifie "inverse", le texte va se cacher ou s'afficher
  document.querySelector("p").hidden = !document.querySelector("p").hidden;

  console.log(`this : `, this);
};

const link = document.querySelector("a");
link.onclick = function (event) {
  // Supprime l'action par défaut de l'événement en cours
  // Très utile pour les liens et les formulaires
  event.preventDefault();

  console.log(`source la plus profonde de l'événement : `, event.target);
  console.log(`tu as cliqué sur le lien`);
};
