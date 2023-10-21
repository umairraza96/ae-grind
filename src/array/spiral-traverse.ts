/**
 * Time Complexity - O(n)
 *
 * Space Complexity - O(n)
 */
export function spiralTraverse(spiralArray: number[][]): number[] {
  let startRow = 0;
  let startCol = 0;
  let endCol = spiralArray[0].length - 1;
  let endRow = spiralArray.length - 1;
  let flattenedArray: number[] = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      const element = spiralArray[startRow][i];
      flattenedArray.push(element);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      const element = spiralArray[i][endCol];
      flattenedArray.push(element);
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      const element = spiralArray[endRow][i];
      flattenedArray.push(element);
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      const element = spiralArray[i][startCol];
      flattenedArray.push(element);
    }
    startCol++;
  }

  return flattenedArray;
}

/**
 * With Recursion
 */
export function spiralTraverseRecursion(array: number[][]): number[] {
  let resultArray: number[] = [];
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, resultArray);
  return resultArray;
}

function spiralFill(
  array: number[][],
  startRow: number,
  endRow: number,
  startCol: number,
  endCol: number,
  resultArray: number[],
) {
  if (startRow > endRow || startCol > endCol) {
    return;
  }

  /** Goes Right */
  for (let col = startCol; col <= endCol; col++) {
    const element = array[startRow][col];
    resultArray.push(element);
  }

  /** Goes Down */
  for (let row = startRow + 1; row <= endRow; row++) {
    const element = array[row][endCol];
    resultArray.push(element);
  }

  /** Goes Left */
  for (let rRow = endCol - 1; rRow >= startCol; rRow--) {
    const element = array[endRow][rRow];
    resultArray.push(element);
  }

  /** Goes Top */
  for (let rCol = endRow - 1; rCol >= startRow + 1; rCol--) {
    const element = array[rCol][startCol];
    resultArray.push(element);
  }

  return spiralFill(
    array,
    startRow + 1,
    endRow - 1,
    startCol + 1,
    endCol - 1,
    resultArray,
  );
}
