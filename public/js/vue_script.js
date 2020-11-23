/* -------------VUE---------------*/
/* --------Agnes Olofsson---------*/
/*global Vue, io*/

'use strict';
var socket = io();

var vm = new Vue({
  el: 'main',
  data: {
    allaBurgare: mat,     //kopplar informationen om vardera burares innehåll
    meddelande: '',
    orders: {},
    nyBeställning: {},
    click: false,          //visa inte rutan för beställningsinformation om ingen beställning gjorts
    kundInfo: [],
    burgarLista: []
  },

  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },

  methods:{
    buttonClicked: function(){
      this.click = true;         //visa beställningsinformationen om man klickar på knappen för beställning
      this.clearInfo();
      this.kundInfo = hämtaKundInfo();
      this.burgarLista = hämtaBurgarLista();
      this.addOrder();
    },

    //Rensar tidigare info för att säkerställa att listorna är tomma om man vill göra en ny beställning

    clearInfo: function(){
      this.kundInfo = [];
      this.burgarLista = [];
    },

    getNext: function() {
      console.log('test getNext');
      var lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function(event){
      console.log('test addOrder');
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: this.nyBeställning,
        orderItems: this.burgarLista,
        kund: this.kundInfo,
      });
    },

    visaOrder: function(event){
      console.log('test');
      var offsets = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      }
      this.nyBeställning = ({
        details: {
          x: event.clientX - 10 - offsets.x,
          y: event.clientY - 10 - offsets.y },
        });
        //return offsets;
      },

      /*  socket.emit('addOrder', { orderInfo: this.getNext(),
      details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
      y: event.clientX-10 - event.currentTarget.getBoundingClientRect().top, },
      orderItems: this.burgarLista,
      kund: this.kundInfo,
    });
  },*/
}})

/*  getNext: function () {
var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
return Math.max(last, next);
}, 0);
return lastOrder + 1;
},



}})
*/
