function Car(name, colour, factory_date) {
	this.name = name;
	this.colour = colour;
	this.factory_date = factory_date;
};

const benz =  new Car("GLK", "Red", "2022");
console.log(benz);
console.log(benz.name);
console.log(benz.colour);
console.log(benz.factory_date);
