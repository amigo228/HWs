// 1.

/*let num = +prompt("Input a 5-digit number");

if ((num % 10 == (parseInt(num / 10000) % 10)) && ((parseInt(num / 10) % 10) == (parseInt(num / 1000) % 10))) {
    console.log("It is palindrom");
}

else {
    console.log("It is not palindrom");
}*/

// 3.

/*let evenCounter = 0;
let oddCounter = 0;
let positiveCounter = 0;
let negativeCounter = 0;
let zeroCounter = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt("Input a number");
    if (num > 0) {
        positiveCounter++;
    }
    else if (num < 0) {
        negativeCounter++;
    }
    else {
        zeroCounter++;
    }

    if (num % 2 == 0) {
        evenCounter++;
    }
    else {
        oddCounter++;
    }
}

console.log("Додатніх чисел: " + positiveCounter + "\n"
    + "Від'ємних чисел: " + negativeCounter + "\n"
    + "Нулів: " + zeroCounter + "\n"
    + "Парних чисел: " + evenCounter + "\n"
    + "Непарних чисел: " + oddCounter
)

*/
// 4.
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < 7; ++i) {

    confirm(week[i] + ".Хочеш побачити наступний день?");
    if (i == 6) {
        i = -1;
    }
}
