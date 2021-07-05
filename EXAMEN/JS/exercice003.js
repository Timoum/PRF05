//declaration est affectation de l'input formulaire
const pnom = document.getElementById("in");

// verification de la prise en charge de l'input
console.log("nom :", pnom);

//declaration est affectation du bouton de recherche
const bouton = document.getElementById("btn");

//declaration est affectation du bouton de recherche
console.log("bouton :", bouton);

//Declaration et affectation du clic sur le bouton de recherche
bouton.onclick = function () {
  console.log(`choix prenom : `, pnom.value);

  //==================================================================//

  // récupération des données qui correspondent à la recherche prenom
  fetch(`https://api.nationalize.io/?name=${pnom.value}`)
    .then((data) => {
      console.log(`https://api.nationalize.io/?name=${pnom.value}`);
      // data est de type Response
      console.log(`data json : `);
      //Vérification que la donnée soit bien au format json
      // via la fonction json qui renvoie une promesse
      return data.json();
    })
    .then(function (data) {
      // Data est de type tableau d'objets
      console.log(`dataprenom : `, data);
      console.log(`datacodepays : `, data.country[0].country_id);

      //=========================================================================//

      // récupération des données qui correspondent aux pays d'origine des prénnom
      fetch(
        `https://restcountries.eu/rest/v2/alpha/${data.country[0].country_id}`
      )
        .then((data) => {
          // data est de type Response
          console.log(`data json : `);
          //Vérification que la donnée soit bien au format json
          // via la fonction json qui renvoie une promesse
          return data.json();
        })
        .then(function (data) {
          // Data est de type tableau d'objets
          console.log(`datapays: `, data);
          console.log(`Pays d'origine : `, data.name);

          //declaration et affectation ce la variable affichage
          const display = data.name;
          //recuperation des données et affichage HTML
          document.querySelector("#data").innerHTML = display;
        })
        //======================================================//
        //Gestion des erreurs
        .catch((error) => {
          console.error(`erreur : `, error.message);
        });
    })
    //gestion des erreurs
    .catch((error) => {
      console.error(`erreur : `, error.message);
    });
};
