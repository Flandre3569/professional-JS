class Shape {
  getArea() { }
}

class Rectangle extends Shape {
  getArea() {
    return 100;
  }
}

class Circle extends Shape {
  getArea() {
    return 200;
  }
}

var r = new Rectangle();
var c = new Circle();

// 多态:当对不同的数据类型执行同一个操作时，会变现不同的行为，这就是多态的体现
function calcArea(shape) {
  console.log(shape.getArea());
}

calcArea(r);
calcArea(c);

