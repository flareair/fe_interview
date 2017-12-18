function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.output = function() {
    return `${this.name} has age ${this.age}`;
}

const firstGuy = new Person('Adam', 33);

console.log(firstGuy);
console.log(firstGuy.output());

// 1. Will it break if I move Person declaration to the bottom of the file?
//  Why?

// const secondGuy = Person('Stan', 25);
// 2. What's the difference between first and secong guy? Could you describe
// how "new" works?

// function executeOutput(output) {
//     console.log(output());
// }

// executeOutput(firstGuy.output);

// 3. Why output is so strange? How to fix it?

// 4. How to test output method? What if the implementation would be

// Person.prototype.output = function() {
// 	const name = this.getName();
//     return `${this.name} has age ${this.age}`;
// }
