class AgedPerson {	
	printAge() {
		console.log(this.age);
	}
}

class Person {
	name = 'Max';


	constructor() {
	//	super();
		this.age = 30;
	}
	
	greet = () => {
		console.log(
			'Hi, I am ' + this.name + ' and I am' + this.age + ' years old'
		);
	}

	/*greet () {
		console.log(
			'Hi, I am ' + this.name + ' and I am' + this.age + ' years old'
		);
	}
	*/
}
/*
function Person() {
	this.name = 'Max';
	this.age = 30;
}
	
Person.prototype.greet = function() {
		console.log(
			'Hi, I am ' + this.name + ' and I am' + this.age + ' years old'
		);
	};
/*
Person.describe = function() {
	console.log('Creating persons...');
}

Person.prototype = {
	printAge() {
		console.log(this.age);
	}
};

Person.prototype.printAge = function() {
	console.log(this.age);
};


console.dir(Person);


const p = new Person();
p.greet();
p.printAge();
console.log(p.length);
console.log(p.toString());
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__);
*/

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p.__proto__ === p2.__proto__);

const button = document.getElementById('btn')
button.addEventListener('click', p.greet.bind(p));