function pascalTriangle(lineIndex) {
  const curLine = [1];

  const curLineLength = lineIndex + 1;

  for (let i = 1; i < curLineLength; i += 1) {
    curLine[i] = curLine[i - 1] * (lineIndex - i + 1) / i;
  }

  return curLine;
}

pascalTriangle(5);
