const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

function btn() {
    if (red.classList.contains('active')) {
        red.classList.remove('active');
        yellow.classList.add('active');
    }

    else if (yellow.classList.contains('active')) {
        yellow.classList.remove('active');
        green.classList.add('active');
    }

    else {
        green.classList.remove('active');
        red.classList.add('active');
    }

}
