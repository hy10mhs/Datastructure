// 다시 해보자 :)
function integerPartition(number, coins) {
  const matrix = Array(coins.length).fill(null).map(() => Array(number + 1).fill(null));

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= number; j++) {
      if (i === 0 && number % coins[0] === 0) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = (matrix[i-1][j] || 0) + (matrix[i][j-coins[i]] || 1);
      }
    }
  }
  console.log(matrix);
}