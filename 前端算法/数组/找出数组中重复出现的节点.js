const findRepeatItem = function (arr) {
  // const { length } = arr;
  const len = arr.length;
  if (len <= 1) {
    return [];
  }
  arr.sort((a, b) => a - b);
  const res = []
  for (let i = 0; i < len - 2; i++) {
    if (arr[i] === arr[i + 1] && !res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}


const result = findRepeatItem([1, 2, 4, 4, 3, 3, 1, 5, 3]);
const test = findRepeatItem([1, 2, 2, 2, 2, 2])
console.log(result);
console.log(test);