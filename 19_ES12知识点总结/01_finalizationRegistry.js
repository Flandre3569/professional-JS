// ES12官方为我们提供了一个FinalizationRegistry类

const finalRegistry = new FinalizationRegistry(() => {
  console.log('某个注册在finalRegistry的对象被销毁了。');
});


let obj = {
  name: 'mx'
}

// 对obj进行监听
finalRegistry.registry(obj);
obj = null;