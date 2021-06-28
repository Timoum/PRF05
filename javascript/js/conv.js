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

const input_euro = document.getElementById(euro);
const input_chf = document.getElementById(chf);

input_euro.addEventListener("input", function () {
  convertir(this.id, this.value);
});
input_chf.addEventListener("input", function () {
  chf(this.id, this.value);
});

form.onsubmit = function (e) {
  // supression du rechargement de la page

  e.preventDefault();
  function oninput() {
    const input_euro = document.getElementById("euro").value;
    const input_chf = document.getElementById("chf").value;

    /** const euro =
  document.getElementById("euro"); document.getElementById("submit").innerHTML =
  "Vous avez saisi un montant à convertir" + euro;*/
  }
  function convertir(value, currency) {
    let result = 0;
    if (currency == "euro") {
      result = value / 1.09;
    } else result = value * 1.09;
    return result;
  }
};
