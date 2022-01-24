function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap));

module.exports = strMapToObj;