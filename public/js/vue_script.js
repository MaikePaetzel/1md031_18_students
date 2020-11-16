 function MenuItem(name, kcal, gluten, lactose,imgUrl,stock) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
	this.imgUrl=imgUrl;
	this.stock=stock;
	this.namn = function() {
        return this.name;
    };

}


/* var vm= new Vue({
  el: "#burgerList",
  data: {
   burgers:[new MenuItem('Cheese Burger', 688, true, true,"img/Cheesecropped-1.png",20),
   new MenuItem('Turkey Burger ', 753, false, false,"img/Halloumicropped.png",50),
   new MenuItem('American Burger', 1300, true, true,"img/Klassikercropped.png",10),
   new MenuItem('American Burger', 1300, true, true,"img/Klassikercropped.png",0)
   ],
	
	
  },
}) */
var vm= new Vue({
  el: "#burgerList",
  data: {
   burgers:food,
  
  },
})