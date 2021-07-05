const pnom = document.getElementById("in");
console.log("nom :", pnom);
const bouton = document.getElementById("btn");
console.log("bouton :", bouton);

bouton.onclick = function () {
  console.log(`choix prenom : `, pnom.value);

  // // récupération des données qui correspondent au département cliqué
  fetch(`https://api.nationalize.io/?name=${pnom.value}`)
    .then((data) => {
      console.log(`https://api.nationalize.io/?name=${pnom.value}`);
      // data est de type Response
      console.log(`data json : `);
      // Je vérifie si la données est bien du json
      // via la fonction json qui renvoie une promesse
      return data.json();
    })
    .then(function (data) {
      // Data est de type tableau d'objets
      console.log(`dataprenom : `, data);
      console.log(`datacodepays: `, data.country[0].country_id);
      ///////////////////////////////////////////////////////////

      fetch(
        `https://restcountries.eu/rest/v2/alpha/${data.country[0].country_id}`
      )
        .then((data) => {
          // data est de type Response
          console.log(`data json : `);
          // Je vérifie si la données est bien du json
          // via la fonction json qui renvoie une promesse
          return data.json();
        })
        .then(function (data) {
          // Data est de type tableau d'objets
          console.log(`datapays: `, data);
          console.log(`Pays : `, data.name);

          ///////////////////////////////////////////////////////////

          //////////////////////////////////////////////////////////////
        })
        .catch((error) => {
          console.error(`erreur : `, error.message);
        });
    })
    .catch((error) => {
      console.error(`erreur : `, error.message);
    });
};
