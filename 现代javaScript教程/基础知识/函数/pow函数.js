// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...*1 = 1

function pow(x, n) {
  let power = x;
  while (--n) {
    x *= power;
  }
  return x;
}

console.log(pow(2, 3));
console.log(pow(1, 100));