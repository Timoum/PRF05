/*Première phase
Dans un premier temps, la page html ne comporte qu' un titre (h1) et un paragraphe (p) avec du texte (mettez-y ce que vous voulez).

Au click sur le titre, le paragraphe est caché ou apparaît (interrupteur)

Vous pouvez utiliser la propriété hidden

Seconde phase
Dans la page html, vous ajoutez un nombre x de titres suivis d'un paragraphe. Le click sur un titre affiche ou cache le paragraphe qui suit le titre.

Vous utiliserez la méthod querySelectorAll pour récupérer toutes les référence aux objets du dom qui correspondent au titres. Ensuite, vous utilisez la méthode forEach pour parcourir les différents titres. La difficulté sera de savoir comment récupérer la référence du paragraphe suivant un titre donné.
*/


//phase ii
// on stocke tous les éléments du dom qui ont pour nom
// de balise h1 dans la variable titles
const titles = document.querySelectorAll("h1");

// On "boucle" sur le tableau titles et pour chaque
// title, on va chercher l'élément frère suivant pour
// le cacher ou l'afficher
titles.forEach((title) => {
  title.onclick = function () {
    // On ne cache l'élément suivant que si c'est bien un paragraphe
    console.log(`element suivant : `, title.nextElementSibling.tagName);
    if (title.nextElementSibling.tagName != "H1")
      title.nextElementSibling.hidden = !title.nextElementSibling.hidden;
  };
});
  