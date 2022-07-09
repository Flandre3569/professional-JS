// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // 结果是什么？


function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

console.log(user.ref().name); // John


// 创建一个计时器
let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

calculator.read(2, 3)

console.log('计算器求和 :>> ', calculator.sum())
console.log('计算器求积 :>> ', calculator.mul())


// 链式调用
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // 显示当前的 step
    console.log(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0