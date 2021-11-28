const name = 'mx';
const age = 18;
const height = 1.88;

// 对变量和字符串进行拼接
const message = `my name is ${name},my age is ${age}, my height is ${height}`;
console.log(message);

// 也可以对模板字符串进行基本运算
const info = `age double is ${age * 2}`;
console.log(info);

// 也可以把函数当做模板字符串
function doubleAge() {
  return age * 2;
}

const info2 = `double age is ${doubleAge()}`;
console.log(info2);

// 也可以使用运算符
const info3 = `是成年人吗:${age > 17 ? '是' : '否'}`;
console.log(info3);

// 标签模板字符串的使用
function foo(m, n, o) {
  console.log(m, n, o, '--------');
}

// foo('hello', 'world');

// 第一次参数依然是模板字符串中整个字符串，只是被切成了多块，放到了一个数组中
// 第二个参数是模板字符串中，第一个${}中的内容
foo`hell${name}owo${age}rld`;
