// 1.


/*let low = 0;
let high = 100;
let res;


alert("Загадай число від 0 до 100");

while (true) {
    res = Math.floor((high + low) / 2);
    res = Math.trunc(res);

    let check = prompt("Ваше число > " + res + ", " + "< " + res + " або == " + res + " ?");
    if (check == "=") {
        alert(res);
        break;
    }

    else if (check == ">") {
        low = Math.floor((high + low) / 2);
    }
    else {
        high = Math.floor((high + low) / 2);
    }

}*/

// 2.

// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(i * j);
//     }
// }

// 3.

let day = +prompt("Input day");
let month = +prompt("Input month");
let year = +prompt("Input year");

switch (true) {
    case (month == 12 && day == 31):
        alert((year + 1) + " " + 1 + " " + 1);
        break;
    case (year % 4 == 0 && month == 2 && day == 29):
        alert(year + " " + (month + 1) + " " + "1");
        break;
    case (year % 4 != 0 && month == 2 && day == 28):
        alert(year + " " + (month + 1) + " " + "1");
        break;
    case (month == 4 || month == 6 || month == 9 || month == 11):
        if (day == 30) {
            alert(year + " " + (month + 1) + " " + "1");
        }
        else {
            alert(year + " " + month + " " + (day + 1));
        }
        break;
    default: if (day == 31) {
        alert(year + " " + (month + 1) + " " + "1")
    }
    else {
        alert(year + " " + month + " " + (day + 1));
    }
        break;
}

//