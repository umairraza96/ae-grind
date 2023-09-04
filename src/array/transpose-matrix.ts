/**
 * Transpose Matrix
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */
export function transposeMatrix(matrix: number[][]): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize a new matrix with transposed dimensions
  const transposedMatrix: number[][] = new Array(numCols);
  for (let i = 0; i < numCols; i++) {
    transposedMatrix[i] = new Array(numRows).fill(0);
  }

  // Populate the transposed matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}
