/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: 'main',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      console.log('hejdå');
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    /*  addOrder3: function (event) {
    console.log('test addOrder3');
    var offset = {x: event.currentTarget.getBoundingClientRect().left,
    y: event.currentTarget.getBoundingClientRect().top};
    socket.emit("addOrder3", { orderId: this.getNext(),
    details: { x: event.clientX - 10 - offset.x,
    y: event.clientY - 10 - offset.y },
    orderItems: ["Beans", "Curry"]
  });
}*/
}
});
