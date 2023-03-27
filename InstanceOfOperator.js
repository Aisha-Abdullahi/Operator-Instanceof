class Square {
  constructor(side) {
    this.side = side;
  }
  calculateArea() {
    return this.side * this.side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.height * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  calculateArea() {
    return 3.142 * (this.radius * this.radius);
  }
}

class AreaCalculator {
  static calculate(shape) {
    // return shape.calculateArea();
    if (shape instanceof Square) {
      return shape.calculateArea();
    }
    else if (shape instanceof Rectangle) {
      return shape.calculateArea();
    }
    else if (shape instanceof Circle) {
      return shape.calculateArea();
    }
    else {
      console.log("Invalid Shape");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));