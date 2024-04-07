const person = {
	first_name : "Alice",
	last_name : "Smith",
	full_name : function () {
		console.log(`${this.first_name} ${this.last_name}`);
	}
};

console.log(person.full_name());
