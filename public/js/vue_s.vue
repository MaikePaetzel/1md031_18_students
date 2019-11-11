



var vm = new Vue({
    el: '#selectBurger',
    data: {
        burgerMessage: 'Välj burgare'
    }
})


var example2 = new Vue({
    el: '#wrapper',
    data: {
        parentMessage: 'Parent',
        burgers: [{
                name: "Supreme",
                stock: 2,
                img: "img/burg1.png"
            },
            {
                name: "Extra cheese",
                stock: 8,
                img: "img/burg2.png"
            },
            {
                name: "Chicken Royal",
                stock: 0,
                img: "img/burg3.png"
            },
            {
                name: "Supreme",
                stock: 2,
                img: "img/burg4.png"
            },
            {
                name: "Chicken Royal",
                stock: 0,
                img: "img/burg5.png"
            },
            {
                name: "pp Royal",
                stock: 8,
                img: "img/burg6.png"
            }
        ]
    }
})
