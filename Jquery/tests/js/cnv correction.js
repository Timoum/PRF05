/*const form = document.querySelector("form");
const input_euro = document.getElementById("euro");
const input_chf = document.getElementById("chf");

// Gestion des événements
form.onsubmit = function (e) {
  e.preventDefault();
};
input_euro.oninput = function (e) {
  input_chf.value = input_euro.value / 1.06;
};
input_chf.oninput = function (e) {
  input_euro.value = input_chf.value * 1.06;
};

*/

jQuery(function($){

  const chf = $('#chf');
  const euro =$("#euro");
  
  chf.on("input",function(){
    //modifier la valeur input euros
    euro.val(chf.val() / 1.09)
  }
  );

  euro.on("input",function(){
    //modifier la valeur input chf
    chf.val(euro.val() * 1.09)
  }
  );
 
 });
  















