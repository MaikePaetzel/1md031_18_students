/* --------------JS---------------*/
/* --------Agnes Olofsson---------*/

// Hoppas funktionerna har hyfsat bra namn så man förstår vad funktionen gör
function menyVal(burgare, bild, kcal, gluten, laktos, topping){
  this.burgare = burgare;
  this.bild = bild;
  this.kcal = kcal;
  this.gluten = gluten;
  this.laktos = laktos;
  this.topping = topping;}

  function hämtaKundInfo(){
    var namn = document.getElementById('namn').value;
    var mail = document.getElementById('mail').value;
    var betalning = document.getElementById('betalning').value;
    //  var dots = document.getElementById('dots').value;
    var radios = document.getElementsByName('kön');
    var info = [namn, mail, betalning];
    //  console.log(dots);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked){
        var kön = radios[i].value;
        info.push(kön);
      }
      //console.log(info);
    }
    return info;
  }

  function hämtaBurgarLista(){
    var burgarIndex = document.getElementsByName('allaBurgare');
    var burgarLista = [];
    var infoBurgarLista = [];
    for (var i = 0; i < burgarIndex.length; i++) {
      if (burgarIndex[i].checked){
        var burgare = burgarIndex[i].value;
        burgarLista.push(burgare);
      }
    }
    for (var j = 0; j < burgarLista.length; j++){
      infoBurgarLista.push(burgarLista[j]);
    }
    return infoBurgarLista;
  }

  function kundInfo(namn, mail, dots, postnr) {
    this.namn = namn;
    this.mail = mail;
    this.dots = dots;
    //this.postnummer = postnr;
  }

  function menyCell(namn, bild, kcal, all, topp){
    this.namn=namn;
    this.bild=bild;
    this.kcal=kcal;
    this.allergi=all;
    this.topping=topp;
    if(all != ''){
      var allergi= true;
    }
    else{
      var allergi=false;}
      this.burgare= function(){
        return this.namn + ' ' + this.bild;
      };
    }
