function powerSet(set) {
  const subSets = [];

  const numOfCombinations = 2 ** set.length;

  for (let i = 0; i < numOfCombinations; i++) {
    const subSet = [];

    for (let j = 0; j < set.length; j++) {
      if (i & (1 << j)) subSet.push(set[j]);
    }

    subSets.push(subSet);
  }
  
  return subSets;
}

powerSet([1, 2, 3]);
