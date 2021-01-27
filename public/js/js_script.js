function MenuItem(name, kcal, gluten, lactose) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
	this.namn = function() {
        return this.name;
    };
}
var burger1= new MenuItem('Cheese Burger', 688, true, true);
var burger2 = new MenuItem('Turkey Burger ', 753, false, false);
var burger3 = new MenuItem('American Burger', 1300, true, true);
let burgers=[burger1,burger2,burger3];
console.log( burgers[0].namn() ); 
