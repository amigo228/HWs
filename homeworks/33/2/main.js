const mark = [];
const averageMark = [];
const year = [];

const firstRow = document.querySelector('.first-row');
console.log(firstRow);

let markHeader = document.querySelector('.mark');
let averageMarkHeader = document.querySelector('.average-mark');
let yearHeader = document.querySelector('.year');

function parseArray(array) {
    let temp = [];
    for (var i = 0; i < array.length; i++) {
        temp.push(parseInt(array[i]));
    }

    array.length = 0;

    for (var i = 0; i < temp.length; i++) {
        array.push(temp[i]);
    }

    return array;

}

const table = document.querySelectorAll('.td');

for (let i = 0; i < table.length; i += 3) {
    mark.push(table[i].textContent);
}

for (let i = 1; i < table.length; i += 3) {
    averageMark.push(table[i].textContent);
}

for (let i = 2; i < table.length; i += 3) {
    year.push(table[i].textContent);
}

parseArray(mark);
parseArray(averageMark);
parseArray(year);

mark.sort((a, b) => b - a);
averageMark.sort((a, b) => b - a);
year.sort((a, b) => b - a);

function customSort(array, iterator) {
    let j = 0;
    for (let i = iterator; i < table.length; i += 3) {
        table[i].textContent = array[j];
        ++j;
    }
}

firstRow.addEventListener('click', (event) => {
    if (event.target == firstRow.firstElementChild) {
        customSort(mark, 0);
    }
    else if (event.target == firstRow.firstElementChild.nextElementSibling) {
        customSort(averageMark, 1);
    }
    else if (event.target == firstRow.lastElementChild) {
        customSort(year, 2);
    }
})



