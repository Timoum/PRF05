1// declaration et affectation de  la variable affectation de la variable html
2//on affecte  l elt du dom qui correspond
//l'id btn 1

/*

*/
btn.onclick = document.getElementById("btn1");

btn1.onclick = function (){
console.log('click sur bouton1');
//document.querySelector("p").hidden = true;
document.querySelector("p").hidden = !document.querySelector ("p").hidden
console.log('this :', this);

};
const link = document.querySelector("a");
link.onclick = function (event) {
    event.preventDefault();
  
}