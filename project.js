"use strict"
// Student ka naam define kiya gaya
let studentName = "Muhammad Izhar";

// Student ki age define ki gayi (constant hai, change nahi hogi)
const studentAge = 15;

// Student ke enrolled courses ka array (list)
var enrolledCourse = ["Computer Science"];

// Student ke marks ka array (teeno subjects ke marks)
let marks = [85, 67,74];

// Total marks calculate kiye (teeno marks ko add kiya)
let total = marks[0] + marks[1] + marks [2];
console.log(total); // Total marks print karwaye

// Average marks calculate kiye (total ko 3 se divide kiya)
let average = total / 3;
console.log(average);// Average print kiya

// Grade assign karne ke liye if-else conditions
let grade;

if (average >= 90) {
    grade = "A";
}
else if (average >= 75) {
    grade = "B";
}
else if (average >= 60) {
    grade = "C";
}
else if (average >= 40) {
    grade = "D";
}
else {
    grade = "F"; // Average 40 se kam hone par fail
}
console.log("Grade:" , grade);

// Scholarship eligibility check karne wala boolean variable
// Average 85 se zyada hona chahiye aur har score kam se kam 70 hona chahiye
// Lekin yahan "scores" variable abhi define nahi hua, error dega
let eligable = (average >= 85 && scores.every(score => score >= 70));
console.log(eligable ? "Eligable for Scolership" : "Not Eligable");

// Student ka object banaya jismein properties aur method hain
const student={
    studentName,
    studentAge,
    enrolledCourse,
    marks,
    average,
    getSummary: function() {
         // Student ke details ka summary return karta hai
        return `Student ${this.studentName} is enrolled in ${this.enrolledCourse} with an average of ${this.average}`
    }
}
console.log(student.getSummary());

// Scores ka ek aur array banaya
let scores = [85, 64, 74];

// For loop chalaya jo scores ko iterate karta hai
for (let i = 0; i < scores.length; i++) {
    // Check karta hai ke score number type ka hai ya nahi
    if (typeof scores[i] !== "number"){
        continue; // Agar number nahi hai to skip karo
}
console.log(`Scores ${i + 1} : ${scores[i]}`);
}
/*
let scores = [85, 64, 74];
while (i = 0; i < scores.length;) {
    if (typeof scores[i] !== "number"){
        continue;
        i++
}
console.log(`Scores ${i + 1} : ${scores[i]}`);
}
*/