function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index++]
        }
      } else {
        return {
          done: true,
          value: undefined
        }
      }
    }
  }
}

const names = ["assda", "sasda", "fdas"];
const ages = [20, 19, 18];

const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());