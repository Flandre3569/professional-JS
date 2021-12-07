const obj = {
  name: 'mx',
  age: 18
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  // target是代理的对象，key是对象中属性的的key值
  get: function (target, key) {
    console.log(`监听到${key}已被访问`);
    return target[key];
  },

  // 设置值时的捕获器
  // target是代理的对象，key是对象中属性的的key值，newValue是设置的值
  set: function (target, key, newValue) {
    console.log(`监听到${key}已被重新设置为${newValue}`);
    target[key] = newValue
  },

  // 监听key的in操作
  has: function (target, key) {
    console.log(`监听到${key}的in操作`);
    return key in target;
  },
  // 监听key的删除操作
  deleteProperty: function (target, key) {
    console.log(`监听到${key}的删除操作`);
    delete target[key];
  }
});


console.log(objProxy.name);
console.log(objProxy.age);

objProxy.name = 'kobe';
objProxy.age = 20;

console.log(obj.name);
console.log(obj.age);

console.log("name" in objProxy);

delete objProxy.name;
console.log(objProxy);