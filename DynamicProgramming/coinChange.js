function coinChange(n, coins) {
	let dp = [];
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
  	for (let coin of coins) {
    	if (i >= coin) {
      	dp[i] = (dp[i] || 0) + dp[i - coin];
      }
    }
  }
  return dp[n];
}

function coinChange2(n, coins) {
	let dp = [];
  dp[0] = 1;
  for (let coin of coins) {
  	for (let i = coin; i <= n; i++) {
    	dp[i] = (dp[i] || 0) + dp[i - coin];
    }
  }
  return dp[n];
}