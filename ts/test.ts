///<reference path="../typings/handlebars/handlebars.d.ts" />
///<reference path="../typings/jquery/jquery.d.ts" />

class Person {
	private name : string;
	constructor(name : string) {
		this.name = name;
	}
	greet() : void {
		alert(`Hi! My name is ${this.name}`);
	}
}
var remo = new Person("Remo");
remo.greet(); // "Hi! My name is Remo"