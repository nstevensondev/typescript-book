var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        alert("Hi! My name is " + this.name);
    };
    return Person;
}());
var remo = new Person("Remo");
remo.greet(); // "Hi! My name is Remo"
