function fibonacci(n) {
  const fibArr = [0, 1];
  if (n < 3) return fibArr[n-1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }
  return fibArr[n-1];
}
