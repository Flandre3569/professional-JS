const names = ['xs', 'mx', 'ms'];
const name = 'why';
const info = { name: 'mx', age: 18 };

function foo(x, y, z) {
  console.log(x, y, z);
}

// 将数组展开放入
foo(...names);
// 也可以展开字符串
foo(...name);


// 也可以用来构造新的数组
const newNames = [...names, ...name];
console.log(newNames);


// 也可以传入对象
const obj = {
  ...info,
  address: '山东',
  ...names
}

console.log(obj);

// 展开运算符实际上进行的是浅拷贝
