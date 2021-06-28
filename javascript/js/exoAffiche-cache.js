/*Première phase
Dans un premier temps, la page html ne comporte qu' un titre (h1) et un paragraphe (p) avec du texte (mettez-y ce que vous voulez).

Au click sur le titre, le paragraphe est caché ou apparaît (interrupteur)

Vous pouvez utiliser la propriété hidden

Seconde phase
Dans la page html, vous ajoutez un nombre x de titres suivis d'un paragraphe. Le click sur un titre affiche ou cache le paragraphe qui suit le titre.

Vous utiliserez la méthod querySelectorAll pour récupérer toutes les référence aux objets du dom qui correspondent au titres. Ensuite, vous utilisez la méthode forEach pour parcourir les différents titres. La difficulté sera de savoir comment récupérer la référence du paragraphe suivant un titre donné.
*/

const h1 = document.getElementById("title");

const p = document.getElementById("p");

h1.onclick = function () {
   if(p.hidden) p.hidden = false;
   else p.hidden=true;
    //p.hidden = !p.hidden;
  };
 

  