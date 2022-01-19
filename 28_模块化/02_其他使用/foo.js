// 第一种导出方式
// export const name = 'mx';
// export const age = 18;

// export function foo() {
//   console.log('这里是foo');
// }

// export class Person {

// }


const name = 'mx';
const age = 18;
function foo() {
  console.log('这里是foo');
}
class Person {
  constructor() {
    this.name = "张三";
  }
}

// 第二种导出方式
// export {
//   name,
//   age,
//   foo,
//   Person
// }

// 第三种方式：导出时起别名
export {
  name as fName,
  age as fAge,
  foo as fFoo,
  Person as FPerson
}