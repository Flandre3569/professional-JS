var obj = {
  name: 'fa',
  age: 18
}

obj.__proto__ = {
  // address: '北京市'
}

obj.__proto__.__proto__ = {
  address: '上海市'
}

console.log(obj.address);
console.log(Object.prototype);
console.log(obj.__proto__.__proto__.__proto__ === Object.prototype);
console.log(Object.getOwnPropertyDescriptors(Object.prototype));
console.log(Object.prototype.__proto__);