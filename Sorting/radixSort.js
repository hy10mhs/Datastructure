const radixSort = function (arr) {
  let _arr = [...arr];
  const base = 10;
  let divider = 1;
  let maxVal = Number.NEGATIVE_INFINITY;

  while (divider === 1 || divider <= maxVal) {
    const buckets = Array(base).fill(null).map(() => []);

    for (let val of _arr) {
      buckets[Math.floor((val / divider) % base)].push(val);
      maxVal = val > maxVal ? val : maxVal;
    }

    _arr = [].concat(...buckets);
    divider *= base;
  }

  return _arr;
}

export default radixSort;
