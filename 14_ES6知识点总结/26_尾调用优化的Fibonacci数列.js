function Fibonacci (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci (n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci(100));
console.log(Fibonacci(1000));