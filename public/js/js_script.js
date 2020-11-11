function MenuItem(name, kcal, gluten, lactose) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
	this.namn = function() {
        return this.name;
    };
}

// Objects are then instantiated using the new keyword
var burger = new MenuItem('Maike', 130, true, false);
console.log( burger.namn() ); 