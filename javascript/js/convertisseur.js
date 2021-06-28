/**Créer un script qui permettra de rendre opérationnel le formulaire suivant sachant que selon le cours du jour un euro est égal à 1.06 francs suisse.
Le comportement attendu est de pouvoir entrer un montant en euros et de voir immédiatement (event oninput) la conversion en francs suisse dès que l'on change la valeur d'un des deux inputs. La conversion se fait aussi bien des francs suisses vers l'euro que l'inverse.

euros
francs suisse

Pour ce faire, vous serez amenés à rechercher comment faire pour :
gérer l'événement de soumission d'un formulaire
bloquer le mécanisme natif des formulaires qui recharge la page au moment de la soumission via la méthode event.preventDefault()
gérer l'événement oninput sur un element input de formulaire
récupérer les données provenant d'un champ de formulaire (value)
modifier les données d'un champ de formulaire (affectation =)**/
//Declaration variables euro

(function () {
  console.log("dans le script convertisseur");
  // Récupération des éléments du formulaire
  let input_euro = document.getElementById("euro");
  let input_chf = document.getElementById("chf");

  // récupération de l'élément formulaire
  const form = document.getElementById("form-convert");

  // Gestion de l'événement de soumission du formulaire
  form.onsubmit = function (event) {
    // supression du rechargement de la page
    // qui est le comportement par défaut
    event.preventDefault();

    // teste si le champ euro n'est pas vide
    if (input_euro.value) {
      console.log("Input euro renseigné");
      input_chf.value = convert(input_euro.value, "chf").toFixed(2);
    }
    // teste si le champ chf n'est pas vide
    if (input_chf.value) {
      console.log("Input chf renseigné");
      input_euro.value = convert(input_chf.value, "euro").toFixed(2);
    }

    // Dans le cas où l'internaute entre un input qui n'est pas un nombre
    // écrire en dessous du formulaire un averstissement qui demande à entrer
    // un nombre
  };
  // Gestion des événements focus sur le champ euro
  input_euro.onfocus = function (event) {
    console.log("aprés un focus sur le champ euro");
    // on remet à rien le champ chf
    input_chf.value = "";
  };
  // Gestion des événements focus sur le champ chf
  input_chf.onfocus = function (event) {
    console.log("aprés un focus sur le champ chf");
    // on remet à rien le champ euro
    input_euro.value = "";
  };

  /**
   * Permet de convertir en euro si le deuxième argument est "euro"
   * ou de convertir en francs suisse si le deuxième argument est "chf"
   * @param {number} amount - montant
   * @param {string} currency - resultat attendu dans la monnaie "currency"
   *
   */
  function convert(amount, currency) {
    let result = 0;
    if (currency == "euro") {
      result = amount / 1.1;
    } else result = amount * 1.1;

    return result;
  }
})();
