jQuery(function($) {
  // Récupération des réferences vers les éléments du DOM input (objet)
  let input_euro = $("#euro");
  let input_chf = $("#chf");
  console.log(`input_euro : `, input_euro);

  input_euro.on("input", function() {
      input_chf.val(input_euro.val() / 1.06);
      console.log('Montant en euro : ', input_euro.val());
  });

  input_chf.on("input", function() {
      input_euro.val(input_chf.val() * 1.06);
      console.log('Montant en chf : ', input_chf.val());
  });




});
/*$(function() {
  $('#convertir').click(function() {
      var x = $('#euro').val();
      x = Number(x);
      $('#usad').val() = (1.3 * x);
      alert(y);
  });
});*/









