console.log(typeof (null));
console.log(typeof (undefined));
console.log(null == undefined);
console.log(null === undefined);

let result = null == 0 ? 'right' : 'false';
console.log(result); // 打印结果是false

result = null >= 0 ? 'right' : 'false';
console.log(result); // 打印结果是true

// 非常奇怪的现象，会出现这种结果的原因是，相等性检查和比较符的逻辑是相对独立的，
// 当进行相等性检查时，null不会进行任何类型转换，而进行比较时，null会自动类型
// 转换为0,所以得到上面的结果。


// 结果都是false
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// 得到以上结果的原因是因为undefined在比较中转换成了NaN，NaN是一种特殊的数值类型，它与任何值进行比较都会返回false


// 所以除了我们在使用 === 严格相等的时候，遇到undefined和null时，要十分小心。