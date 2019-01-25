function integerPartition(number) {
  const matrix = Array(number + 1).fill(null).map(() => Array(number+1).fill(null));

  // row: sum, column: summand, element: number of cases
  //   X 
  // Y     0  1  2
  //   0 [ 1, 0, 0 ]
  //   1 [ 1, 1, 1 ]
  //   2 [ 1, 1, 2 ]

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 1;
  }

  for (let i = 1; i < number + 1; i++) {
    matrix[0][i] = 0;
  }

  for (let index = 1; index < number + 1; index++) {
    for (let summandIndex = 1; summandIndex < number + 1; summandIndex++) {
      if (index < summandIndex) {
       matrix[summandIndex][index] = matrix[summandIndex-1][index];
      } else {
       matrix[summandIndex][index] = matrix[summandIndex-1][index] + matrix[summandIndex][index - summandIndex];
      }
    }
  }

  return matrix[number][number];
}