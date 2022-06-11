class Circle {
    constructor() {
        this.radius = 10;
    }

    get circle() {
        return this.radius;
    }

    set circle(_radius) {
        this.radius = _radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    square() {
        return ((this.radius * this.radius) * Math.PI);
    }

    circleLength() {
        return (2 * Math.PI * this.radius);
    }
}

let spiner = new Circle();
