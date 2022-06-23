const fib = (num) => {
  const result = [];
  for (i = 0; i < num; i++) {
    if (i < 2) {
      const fibNum = 1;
      result.push(fibNum);
    } else {
      const fibNum = result[i - 1] + result[i - 2];
      result.push(fibNum);
    }
  }
  return result;
};

console.log("First 100 Fibonacci numbers", fib(100));
