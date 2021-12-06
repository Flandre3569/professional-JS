const finalRegistry = new FinalizationRegistry((value) => {
  console.log('某个注册在finalRegistry的对象被销毁了。',value);
});


let obj = {
  name: 'mx'
}

let info = new WeakRef(obj);

// 对obj进行监听
finalRegistry.registry(obj,'obj');
obj = null;

setTimeout(() => {
  console.log(info.deref()?.name);

  // 在可选链出来之前的写法
  // console.log(info.deref() && info.deref().name);
},5000)