var names = ['zhangsan', 'lisi', 'wangwu'];

// 解构
var [item1, item2, item3] = names;
console.log(item1, item2, item3);

// 解构后面两个元素
var [, itema, itemb] = names;
console.log(itema, itemb);

// 解构出一个元素，然后剩下的放到数组中
var [itemx, ...itemy] = names;
console.log(itemy);

// 解构的默认值
var [itemm, itemn, iteml, itemk = 'zhaoliu'] = names;
console.log(itemk);