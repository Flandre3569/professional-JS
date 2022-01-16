function* createArrayIterator(arr) {
  // for (const item of arr) {
  //   yield item;
  // }

  // 使用yield*语法糖
  yield* arr;
}

const names = ["abs", "ksd", "lsk"];

const nameIterator = createArrayIterator(names);

console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());


// 类中使用生成器代替迭代器
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent);
  }

  // 直接使用生成器
  [Symbol.iterator] = function*() {
    yield * this.students;
  }
}

const classroom = new Classroom("4楼2栋202", "计算机系教室", ["mx", "mm", "ls"]);
classroom.entry("yh");
for (const item of classroom) {
  console.log(item);
  // if (item === 'ls') break;
}
