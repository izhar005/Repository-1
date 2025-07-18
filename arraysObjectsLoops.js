// 1. Basic Array Operations
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
fruits.push("Orange");

fruits.shift();
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

let mangoIndex = fruits.indexOf("Mango")
console.log(mangoIndex);

let pineapple = fruits.includes("Pineapple");
console.log(pineapple);

// 2. Introduction to Objects
let person = {
    firstName : "Muhammad",
    lastName : "Izhar",
    age : "15",
    hobbies : ["Football", "Cricket", "Coding",]
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName)
console.log(person.age);
console.log(person.hobbies);

// 3. Dot vs. Bracket Notation
// Do notation tab use hoti hai jab property ka naam sedha likha ho.
// Bracket notation tab use hoti hai jab property ka naam variable mein ho ya usmin space special character ho.

person.profession = "Gamer";
person["city"] = "Kohat";

// 4. Object Methods
person.getSummary = function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and loves playing ${this.hobbies} and ${this.profession} of ${this.city}`;
}
console.log("Person Summary:" , person.getSummary())

// 5. Iteration: The for Loop
let scores = [80, 92, 67, 75, 88];

let total = 0;
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1} , ${scores[i]}`);
    total += scores[i];
}
let average = total / scores.length;

console.log("Total Score:" + total);
console.log("Average Score:" + average);

