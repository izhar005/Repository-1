let getFullName = (firstName , lastName) => {
    return (firstName + " " + lastName);
}
console.log(getFullName("Muhammad Izhar"))

let square = (num) => {
    return (num * num);
}
console.log(square(5))

let greet = () => {
    console.log("Welcome to JavaScript learning!")
}
greet()

function cutFruit(fruitPieces) {
    return fruitPieces * 4;
}
function makeJuice(apples , oranges) {
    const applePieces = cutFruit (apples);
    const orangePieces = cutFruit (oranges);
    const Juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return Juice;
}
console.log(makeJuice(2 , 3));

function calculateBMI(weight , height) {
    return weight / (height * height);
}
console.log("BMI:" , calculateBMI(60,1.7));

function  celsiusToFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}
console.log("Fahrenheit:" , celsiusToFahrenheit(30));