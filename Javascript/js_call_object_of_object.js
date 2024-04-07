#!/usr/bin/node
const person = {
	name : {
		first : "Walter",
		last : "Torubiri",
	},
	age : 26
};

console.log(person);
console.log("\nDot Notation");
console.log(person.name.first);
console.log(person.name.last);
console.log("\nSquare Bracket Notation");
console.log(person["name"]["first"]);
console.log(person["name"]["last"]);

person["course"] = "Chemical Engineering";
console.log(person);

person.hobby = "Coding";
console.log(person);
