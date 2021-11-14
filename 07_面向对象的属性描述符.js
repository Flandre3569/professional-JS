var obj = {
  name: 'fmx',
  age: 18
}

Object.defineProperty(obj, 'name', {
  value: 'mmm',
  // 属性不可删除，也不可重新定义属性描述符
  // configurable: true;
  configurable: false
})

Object.defineProperty(obj, 'age', {
  value: 20,
  // 属性是否可修改
  // writable: true;
  writable: false
})

delete obj.name;
console.log(obj);

obj.age = 30;
console.log(obj);