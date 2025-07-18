// 1. The for Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
const names = ["Aisha", "Obaid", "Younas", "Khattak"];

for (i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}`);
}

// 2. Looping Arrays with break and continue
const items = ["Book", 34, "Pen", true, "Notebook", 0,];
console.log("Only strings:");

for (let i = 0; i < items.length; i++) {
    if (typeof items[i] !== "string") {
        continue;
    }
    console.log(items[i]);
}

console.log("Stop at boolean:")
for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "boolean") {
        break;
    }
    console.log(items[i]);
}

// 3. Looping Backwards & Nested Loops
const colors = ["Black", "White", "Yellow", "Red"];
for (let i = colors.length - 1 ; i >= 0; i--) {
    console.log(colors[i])
}
for (let exercise = 1; exercise <= 2; exercise++) {
    console.log("Exercise" , exercise);

for (let set = 1; set <= 2; set++) {
    console.log("set" , set);
    }
}

// 4. The while Loop
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

let diceRoll;
do {
    diceRoll = Math.floor(Math.random() *6) + 1;
    console.log("You rolled:" , diceRoll);
}
while (diceRoll !== 6);