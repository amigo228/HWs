let car = {
    company: "Lamborghini",
    model: "Aventador",
    year: 2011,
    averageSpeed: 175,
    fuelTankCapacity: 90,
    averageFuel: 17.2,
    driver: "Rostyk"
}

function showCar(param) {
    for (const key in param) {
        console.log(`${key} = ${param[key]}`);
    }
}

function addDriver() {
    let driver = prompt("Input driver name");
    car.driver = driver;
}

function refuel() {
    confirm("You should to refuel you car");
}

function timeCalc(s) {
    let t = 0;
    // let fuel = car.fuelTankCapacity;
    do {
        car.fuelTankCapacity = Math.trunc(car.fuelTankCapacity - (car.averageFuel * 1.75));
        if (car.fuelTankCapacity <= 0) {
            refuel();
            car.fuelTankCapacity = 90;
        }
        s -= car.averageSpeed;
        if (s < 0) {
            break;
        }
        t++;
        if (t % 4 == 0) {
            t++;
            addDriver();
        }

    } while (t > 0);

    console.log(t);
}
