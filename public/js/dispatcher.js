/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
    meddelande: '',
    nyBeställning: {},
    click: false,
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
    //console.log('hej1');

  },
  methods: {
    addOrder: function(event){
      console.log('test addOrder ny');
      socket.emit('addOrder', {
        //  orderId: this.getNext(),
        details: this.nyBeställning,
        orderItems: this.burgarLista,
        kund: this.kundInfo,
      });
    },}})




    /*
    addOrder2: function (event) {
    console.log('test addOrder2');
    socket.emit("addOrder2", { details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
    y: event.clientX-10 - event.currentTarget.getBoundingClientRect().top, },
    orderItems: ["Beans", "Curry"]

  });
},

getNext: function () {
console.log('test getNext');
var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
return Math.max(last, next);
}, 0);
return lastOrder + 1;
},
addOrder4: function (event) {
console.log('test addOrder4');
var offset = {x: event.currentTarget.getBoundingClientRect().left,
y: event.currentTarget.getBoundingClientRect().top};
socket.emit("addOrder4", { orderId: this.getNext(),
details: { x: event.clientX - 10 - offset.x,
y: event.clientY - 10 - offset.y },
orderItems: ["Beans", "Curry"]}
)}},
})

methods: {
getNext: function() {
var lastOrder = Object.keys(this.orders).reduce(function(last, next) {
return Math.max(last, next);
}, 0);
return lastOrder + 1;
},

addOrder: function(event){
console.log('test2');
var offsets = {
x: event.currentTarget.getBoundingClientRect().left,
y: event.currentTarget.getBoundingClientRect().top,
socket.emit('addOrder', {orderId: this.getNext(),
details: {
x: event.clientX - 10 - offsets.x,
y: event.clientY - 10 - offsets.y,
orderItems: ['hejhej', 'hejdå']
});
}        }});
}
this.nyBeställning = ({
details: {
x: event.clientX - 10 - offsets.x,
y: event.clientY - 10 - offsets.y },
});
},


methods:{
buttonClicked: function(){
this.clicked = true;
this.clearInfo();
this.kundLista = kundInfo();
this.menyLista = burgarInfo();
this.addOrder();
},
clearInfo: function(){
this.kundLista = [];
this.menyLista = [];
},
}

*/
