function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

isPrime(11);

function primeList(n) {
  const isPrime = Array(n+1).fill(null).map(() => true);
  isPrime[0] = false;
  isPrime[1] = false;

  const prime = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      prime.push(i);
      let ii = 2 * i;
      while (ii <= n) {
        isPrime[ii] = false;
        ii += i;
      }
    }
  }

  return prime;
}

primeList(10);

