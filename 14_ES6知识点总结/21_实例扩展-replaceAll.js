console.log('aaabbbccc'.replace('b', '_'));
console.log('aaabbbccc'.replace(/b/g, '_'));

// console.log('aaabbbccc'.replaceAll('b', '_'));  //报错了

const str = '123abc456';
const regex = /(\d+)([a-z]+)(\d+)/g;
function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join('-');
}

// console.log(str.replaceAll(regex, replacer)); //凡是用到replaceAll的都会报错
