const obj = {
  name: 'mx',
  age: 18
}

const objProxy = new Proxy(obj, { 
  get: function (target, key) {
    console.log(`监听到${key}已被访问`);
    return Reflect.get(target, key);
  },
  set: function (target, key, newValue) {
    console.log(`监听到${key}已被重新设置为${newValue}`);
    Reflect.set(target, key, newValue);
  }
})

objProxy.name = 'kobe';
console.log(objProxy.name);