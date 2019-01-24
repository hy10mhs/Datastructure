function factorial(n) {
  let i = 1;
  let value = 1;
  while (i++ < n) {
    value *= i;
  }
  return value;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n-1);
}
