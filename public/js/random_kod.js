Frågor:
kön, hur hämtar jag värde från radios
få upp beställningsrutan först när jag clickar


<!--<div class="beställning">
  <div id="beställa" v-on:click='visaBeställning'>
    <div v-for='(välj, key) in nyBeställning' v-bind:style="{left: nyBeställning.orderInfo.x + 'px', top: nyBeställning.orderInfo.y + 'px'}">
    </div>
  </div>
</div>-->


/*visaBeställning: function(event) {
var offsets = {
x: event.currentTarget.getBoundingClientRect().left,
y: event.currentTarget.getBoundingClientRect().top,
}
this.nyBeställning = ({
orderInfo: {
x: event.clientX - 10 - offsets.x,
y: event.clientY - 10 - offsets.y },
})
}*/

/*visaBeställning: function(event) {
var offsets = {
x: event.currentTarget.getBoundingClientRect().left,
y: event.currentTarget.getBoundingClientRect().top,
}
this.nyBeställning = ({
orderInfo: {
x: event.clientX - 10 - offsets.x,
y: event.clientY - 10 - offsets.y },


/*created: function () {
  socket.on('initialize', function (data) {
    this.beställning = data.beställning;
  }.bind(this));

  socket.on('currentQueue', function (data) {
    this.beställning = data.beställning;
  }.bind(this));
},*/

/*visaOrder: function(event) {
  var offsets = {
    x: event.currentTarget.getBoundingClientRect().left,
    y: event.currentTarget.getBoundingClientRect().top,
  }
  this.nyBeställning = ({
    orderInfo: {
      x: event.clientX - 10 - offsets.x,
      y: event.clientY - 10 - offsets.y },
  })
}}});*/


/*let allaBurgare = mat;*/

/* Ha kvar
var myButton = document.getElementById('myButton');
myButton.addEventListener('click', läggTill);

function läggTill() {
  document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + 'button clicked';
}*/



/* ta bort?
import {meny} from './meny.js'
'use strcit';
main();
function main(){
let menyn = getMeny(meny);
insertMeny(menyn);
let beställning = menyn.length;}*/

/*
function kopplaMeny(burgarLista) {
    for (let i=0; i<burgarLista.length; i++){
      let burgare = document.createElement('div');
      burgare.setAttribute('class', 'burgare');
      document.querySelector('.burgarMeny').appendChild(burgare)
      menyInfo(burgare, burgarLista, i);
      }
}
function menyInfo(burgare, menyLista, i){
  let burgarNamn = document.createElement('h4');
  burgarNamn.innerHTML = menyLista[i].namn;
  burgare.appendChild(burgarNamn);

  let burgarBild = document.createElement('img');
  burgarBild.setAttribute('class', 'burgar-Bild');
  burgarBild.setAttribute('src', menyLista[i].bild);
  burgarNamn.appendChild(burgarBild);

  createList(burgare, menyLista, i);

},
function createList(burgare, menyLista, i){
  let lista = document.createElement('ul');
  let kcal.innerHTML = ${menyLista[i].kcal} kCal;
  list.appendChild(kcal);
}
*/

//
//function burgarInfo() {
//  var chx = document.getElementsByName("burgare");
//  var menyLista = [];
//  var infoMenyLista = [];
//  for (var j = 0, lengths = chx.length; j < lengths; j++) {
//    if (chx[j].checked) {
//      var burgare = chx[j].value;
//      menyLista.push(burgare);
//    }
//  }
//  for (var i = 0, length = menyLista.length; i < length; i++) {
//    infoMenyLista.push(burgare[menyLista[i]].name);
//  }
//  return infoMenyLista;
//},
//


/*
            let allaBurgare=[
              new menyCell("Klassisk burgare","./burgare1.jpg", '500', "gluten","Sallad, tomat, lök, orginaldressing"),
              new MenuItem("Baconburgare","./burgare2.jpg",'550',"laktos","Bacon, sallad, tomat, lök, ost"),
              new MenuItem("Lyxburgare","./burgare3.jpg",'750',"gluten","Bacon, sallad, tomat, karameliserad lök, tryffelmajo, ost")];

            var myElement = document.getElementById("myJS");
            for (var i=0 ; i< burgers.length ; i++){
              var listItem = document.createElement("li");
                    var listValue = document.createTextNode(burgers[i].burger());
                    listItem.appendChild(listValue);
                    myElement.appendChild(listItem);
                    console.log(burgers[i].allergies);
            }*/


            /*function getMeny(mat) {
              let burgarLista = [];
              for (var i=0; i<mat.length; i++){
                burgarLista.push(new menyVal(mat[i].namn, mat[i].bild, mat[i].kcal,
                                          mat[i].gluten, mat[i].laktos, mat[i].topping));
                }
                return burgarLista;}*/
