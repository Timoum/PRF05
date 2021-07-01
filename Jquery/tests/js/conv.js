jQuery(function ($) {
  //Déclaration des constantes, Affectation des entrées
  const form = $("form");
  const euro = $("#euro");
  const chf = $("#chf");

  // Gestion de l'événement de soumission des entrées
  // supression du rechargement de la page
  form.on("click", function (e) {
    e.preventDefault();

    //initialisation avant la saisie
    euro.val("");
    chf.val("");

    //gestion conversion à l'entrée euros
    euro.on("input", function () {
      chf.val(euro.val() / 1.09);
    });

    //Gestion Conversion à l'entrée chf
    chf.on("input", function () {
      euro.val(chf.val() * 1.09);
    });
  });
});
