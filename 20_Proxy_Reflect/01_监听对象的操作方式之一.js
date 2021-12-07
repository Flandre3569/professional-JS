const obj = {
  name: 'mx', // 数据属性描述符
  age: 18
}

// 对obj的调用进行监听
// 使用这种方法将会让obj中的属性符变成访问属性描述符
Object.keys(obj).forEach(key => {
  let value = obj[key]; 
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到${key}已被访问调用`);
      return value
    },
    set: function (newValue) {
      console.log(`监听到${key}已被重新设置`);
      value = newValue;
    }
  })
})


obj.name = "kobe";
obj.age = 30;

console.log(obj.name);
console.log(obj.age);

// 但是defineProperty设计的初衷不是为了对对象进行监听
// 同时在之后添加的属性是不能被监听的。