// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// 使用 ？或者 || 重写函数

function checkAge(age) {
  return (age > 18) ? true : 'Do you have your parents permission to access this page?'
}

function checkAge_2(age) {
  return (age > 18) || 'Do you have your parents permission to access this page?'
}

console.log(checkAge(17));
console.log(checkAge_2(19));