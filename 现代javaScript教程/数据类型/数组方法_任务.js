// 方案一
const camelize = (str) => {
  const newStr = str.split("-");
  newStr.forEach((item, index, arr) => {
    if (index !== 0) {
      // 因为js的引用赋值机制，此处必须使用arr也就是引用类型，才能修改成功
      arr[index] = item[0].toUpperCase() + item.slice(1);
    }
  })

  return newStr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

// 方案二
// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));