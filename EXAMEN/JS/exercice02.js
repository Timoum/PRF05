//recuperation et affectation onglet formation
let formation = document.getElementById("forma");
//recuperation et affectation onglet langage front dev
let lfront = document.getElementById("lfe");
console.log("Lang front :", lfe + "lang Back :", lbe);
//recuperation et affectation onglet front dev
let fdev = document.getElementById("fd");
console.log(`Dev front ;`, fd);
// recuperation et affectation onglet back dev
let bdev = document.getElementById("db");
console.log(`dev Back ;`, fd);
// recuperation et affectation onglet langage back D
let back_l = document.getElementById("lbe");
console.log(`hello :,`, lbe);

//initialisation, masquage onglets front et back dev
lfront.hidden = true;
back_l.hidden = true;

//action clic sur l'évènement onglet Dev front
fdev.onclick = function (e) {
  //onglet langage front réapparait par demasquage au clic avec les selections
  lfront.hidden = false;
  back_l.hidden = true;
};

//action clic sur l'événement onglet Dev back
bdev.onclick = function (e) {
  //onglet langage back réapparait par demasquage au clic avec les selections tandis que l'onglet langage front est masqué
  back_l.hidden = false;
  lfront.hidden = true;
};
// action clic sur l'événement onglet formation reset le formulaire est efface les onglets ouverts
formation.onclick = function (e) {
  back_l.hidden = true;
  lfront.hidden = true;
};
