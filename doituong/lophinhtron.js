class Circle {
    constructor(radius,) {
        this.radius = radius;
    }    
    getRadius() {
        return this.radius;
    }
    getArea() {
        this.area = Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(2);
circle.getRadius();
circle.getArea();
console.log(circle);
