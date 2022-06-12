class Marker {
    constructor(remainder, color) {
        this.remainder = remainder;
        this.color = color;
    }

    input(color) {
        this.color = color;
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

let marker1 = new Marker(15, "Black");


class SmartMarker extends Marker {
    constructor(remainder, color) {
        super(remainder, color);
    }

    refuel() {
        let check = confirm("Do you want to refuel your marker");
        if (check) {
            this.remainder = 100;
            console.log(this.remainder + "%");
        }
    }

}

let marker2 = new SmartMarker(15, "Black");