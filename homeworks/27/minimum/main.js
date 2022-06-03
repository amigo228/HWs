// 2.

/*let num = prompt("Input num from 0 to 9");

switch (num) {
    case '1': console.log('!'); break;
    case '2': console.log('@'); break;
    case '3': console.log('#'); break;
    case '4': console.log('$'); break;
    case '5': console.log('%'); break;
    case '6': console.log('^'); break;
    case '7': console.log('&'); break;
    case '8': console.log('*'); break;
    case '9': console.log('('); break;
    case '0': console.log(')'); break;
    default: console.log('error'); break;
} */

// 3.

/*let numFirst = +prompt("Input first number form the range");
let numSecond = +prompt("Input second number form the range");
let sum = 0;
while (numFirst <= numSecond) {
    sum += numFirst;
    numFirst++;
}

console.log(sum); */

// 4.

/*let a = +prompt("Input first number");
let b = +prompt("Input second number");



while (true) {

    if (a != b) {
        if (a < b) {
            let temp = a;
            a = b;
            b = temp;
        }

        else {
            a -= b;
        }
    }
    else {
        console.log(a);
        break;
    }

} */

// 5.

let num = +prompt("Input a number");

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }

}

