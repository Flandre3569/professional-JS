class Person {

}

var Student = class {

}

console.log(Person.prototype);
console.log(Person.prototype.__proto__);
// 构造器指向类本身
console.log(Person.prototype.constructor);

var person = new Person();

console.log(person.__proto__ === Person.prototype);
console.log(typeof (Person));

class Teacher {
  // 一个类只能有一个构造函数
  constructor(name, tno) {
    this.name = name;
    this.tno = tno;
    this._address = '山东省';
  }
  // 访问器
  get address() {
    return this._address;
  }
  set address(add) {
    this._address = add;
  }
}

var teacher = new Teacher('张三', 10086);
console.log(teacher.name);
console.log(teacher.address);
teacher.address = '北京';
console.log(teacher.address);