const sum = prompt("How much money do you have?");
const barPrice = prompt("How much bar of chocolate cost?");
let bars = parseInt(sum / barPrice);

alert("You can buy " + bars + "\n" + "Your change: " + (sum - (bars * barPrice)));

let num = prompt("Input number");

alert("Your changed number is " + (num % 10) + (parseInt(num / 10) % 10) + (parseInt(num / 100) % 10));