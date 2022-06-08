let today = new Date();

let date = {
    hours: 23,
    minutes: 59,
    seconds: 45
}

function showDate(date) {
    for (const key in date) {
        console.log(`${key} = ${date[key]}`);
    }
}

function addSeconds(sec) {
    date.seconds = date.seconds + (sec % 60);
    date.minutes = Math.trunc(date.minutes + (sec / 60));
    date.hours = Math.trunc(date.hours + (sec / 3600));
    if (date.seconds >= 60) {
        date.minutes++;
        date.seconds = date.seconds - 60;
    }
    if (date.minutes >= 60) {
        date.hours++;
        date.minutes = date.minutes - 60;
    }
    if (date.hours >= 24) {
        date.hours = date.hours - 24;
    }
}

function addMinutes(min) {
    date.minutes = date.minutes + (min % 60);
    date.hours = Math.trunc(date.hours + (min / 60));
    if (date.minutes >= 60) {
        date.hours++;
        date.minutes = date.minutes - 60;
    }
    if (date.hours >= 24) {
        date.hours = date.hours - 24;
    }
}

function addHours(hours) {
    date.hours = date.hours + (hours % 24);
    if (date.hours >= 24) {
        date.hours = date.hours - 24;
    }
}