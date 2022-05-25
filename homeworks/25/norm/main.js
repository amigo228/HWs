/* 
.
.
1
.
.
*/

let yourName = prompt("What is your name?");
alert("Привіт, " + yourName);

/* 
.
.
2
.
.
*/

let birth = prompt("When you were born?");
const date = new Date();
let age = date.getFullYear() - birth;
alert("You are " + age + " years old");

/* 
.
.
3
.
.
*/

let length = prompt("Input length");

let perimetr = length * 4;

alert("Perimetr of square = " + perimetr);