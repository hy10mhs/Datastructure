const arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

function pivotal(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[i].length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
}
