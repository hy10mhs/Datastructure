function isPowerOfTwo(n) {
  while (n !== 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}
