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