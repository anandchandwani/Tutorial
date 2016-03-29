function Person(name) {
  this.name = name;
}

var counter = 0;

function greet(other_person) {
  console.log(`Hello, ${other_person.name}! My name is ${this.name}`);
  console.log(`I've reminded you this ${counter++} times.`);
}

Person.prototype.greet = greet;

module.exports = Person;
