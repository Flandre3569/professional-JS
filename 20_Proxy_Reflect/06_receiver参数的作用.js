const obj = {
  _name: 'mx',
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  }
}


const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log(`get方法被访问------`,key);
    console.log(objProxy === receiver);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log(`set方法被访问------`,key);
    Reflect.set(target, key, newValue, receiver);
  }
})

// 打印代理对象的属性，发现整个get的访问进行了两次，证明receiver参数改变了原对象中this的指向，使其指向了代理对象。
// 而且打印结果为true也证明  receiver参数代表的就是objProxy对象。
console.log(objProxy.name);
objProxy.name = 'kobe';


// 只有get和set里有receiver