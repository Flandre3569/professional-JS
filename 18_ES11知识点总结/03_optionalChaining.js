const info = {
  name: 'mx',
  age: 18,
  // girlfriend: {
  //   name: 'mm',
  //   age: 18
  // }
}
const info2 = {
  name: 'mx',
  age: 18,
  girlfriend: {
    name: 'mm',
    age: 18
  }
}

// 可选链不是JavaScript特有的，在部分其他语言中早有使用
// 会使代码更加严禁、更加严谨、也提高了代码美观
console.log(info.girlfriend?.name);
console.log(info2.girlfriend?.name);