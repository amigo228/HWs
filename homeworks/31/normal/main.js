class Marker {
    constructor(remainder) {
        this.remainder = remainder;
    }

    input(color) {
        let temp = this.remainder;
        let str = prompt("Input a string");

        for (let i = 0; i < str.length; i++) {
            console.log(`%c ${str[i]} `, `color: ${color} `);
            if (str[i] != ' ') {
                this.remainder -= 0.5;
            }

            if (this.remainder <= 0) {
                break;
            }
        }
        console.log(this.remainder + "%");


    }
}

let marker1 = new Marker(15);


class SmartMarker extends Marker {
    constructor(remainder) {
        super(remainder);
    }

    refuel() {
        let check = confirm("Do you want to refuel your marker");
        if (check) {
            this.remainder = 100;
            console.log(this.remainder + "%");
        }
    }

}

let marker2 = new SmartMarker(15);