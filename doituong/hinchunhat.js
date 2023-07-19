class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setArea() {
        this.area = this.width * this.height;
    }
    getArea() {
        return this.area;
    }
    setPerimeter() {
        this.perimeter = (this.width + this.height) * 2;
    }
    getPerimeter() {
        return this.perimeter;
    }
}

let a = new Rectangle(20, 30)
let width = a.getWidth();
let height = a.getHeight();

// a.setWidth();
// a.setHeight();
a.setArea();
a.setPerimeter();

console.log(a);