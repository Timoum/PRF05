const pnom = document.getElementById("in");
console.log('nom :',pnom);
const bouton = document.getElementById("btn");
console.log('bouton :',bouton);

pnom.onclick = () => {
    
    console.log(`choix prenom : `, pnom);
  
    // récupération des données qui correspondent au département cliqué
    fetch(`https://api.nationalize.io/?name=${pnom.value}`)
      .then((data) => {
        // data est de type Response
        console.log(`data : `, data);
        // Je vérifie si la données est bien du json
        // via la fonction json qui renvoie une promesse
        return data.json();
      })
      .then(function (data) {
        // Data est de type tableau d'objets
        console.log(`choix prenom: `,pnom );
       
      })
      .catch((error) => {
        console.error(`erreur : `, error.message);
      
      })
  };