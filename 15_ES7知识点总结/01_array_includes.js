const names = ['asd', 'asd', 'qwe', 'aaa'];
// ES7之前
if (names.indexOf('asd') !== -1) {
  console.log('包含asd');
}

// ES7 ----> includes
if (names.includes('asd', 1)) {
  console.log('从第二个元素开始查找，有asd');
}

