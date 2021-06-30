console.log("Hello")
/*Jquery est une fonction qui sera utilisée de differentes mannieres.
Manniere 1 en lui donnant en argument une fonction anomyme qui admet un unique paramètre $.
Cette fonction a plusieurs caracteristiques :
- elee attend que le dom soit chargé
- elle isole le code (comme toutes les fonctions)
- elle s'assure que $ soit bien un allias jquery
*/
jQuery(function ($) {
    console.log(`$ :`, $);
    //creation d'élément du DOM avec ajout de proprietes (comme appendto par exemple)
    //jQUery
    const h1 = jQuery(`<h1>Titre de niveau 1</h1>`).appendTo("body").hide(200).show(2000);
  
    //Recuperer des references aux elements du DOM qui seront au passage augmentés par de nouvelles ////propriétés (comme text qui est une fonction)

   // Const h2 = $(`<h2>)
    const h2 = jQuery("h2").text("Salut Bob").fadeOut(1000).fadeIn(1000);
  
    // Recuperer des references  aux elements du DOM qui seront au passage 
    //augmentés par de nouvelles  propriétés 'comme text qui est une fonction)
    console.log("h1  ", h1);
    h1.hide();
    //Gestion des evenements
    h1.on("click", function () {
        h2.toggle(2000);
        console.log('cliks');

    });

    const text = h2.text();
    //Getter injecte le texte initial renvoie
    console.log('texte de h2 :', text);

    // Setter change le texte de h2
    const test = h2.text("Pas plus de ").css("color","red").attr("class","h2"); //renvoie une instance de jQuery (element du DOM augmenté par jQuery) ici h2.
    console.log('type de test :', typeof test);



});