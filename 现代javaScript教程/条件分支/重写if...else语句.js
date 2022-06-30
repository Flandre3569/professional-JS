

let login = "Employee"
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// 使用 ？重写
let message = (login == 'Employee') ? 'hello'
  : (login == 'Director') ? 'Greetings'
    : (login == '') ? 'No login'
      : ''

console.log(message);