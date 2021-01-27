
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
var food =[new MenuItem('Cheese Burger', 688, true, true,"img/Cheesecropped-1.png",20),
   new MenuItem('Turkey Burger ', 753, false, false,"img/Halloumicropped.png",50),
   new MenuItem('American Burger', 1300, true, true,"img/Klassikercropped.png",10),
	new MenuItem('American Burger', 1300, true, true,"img/Klassikercropped.png",0)
   
	

]
/* var food = [
  {
  "name": 'Cheese Burger',
  "kCal": 688,
  "lactose": false,
  "gluten": true,    
  "img": "img/Cheesecropped-1.png",
  "stock":10
  },
  {
  "name": "Turkey Burger",
  "kCal": 753,
  "lactose": true,
  "gluten": false,    
  "img": "img/Halloumicropped.png",
  "stock":10
  },
  {
  "name": "American Burger",
  "kCal": 1300,
  "lactose": true,
  "gluten": true,    
  "img": "img/Klassikercropped.png",
  "stock":10
  }
  {
  "name": "zero Burger",
  "kCal": 1300,
  "lactose": true,
  "gluten": true,    
  "img": "img/ffs.jpg",
  "stock":0
  }
  
] */