/**
 * Smallest Difference
 *
 * Time Complexity: O(n^2)
 *
 * Space Complexity: O(1)
 */
export function mySmallestDifference(
  array1: number[],
  array2: number[],
): number[] {
  let smallestDifference = Math.abs(Math.max());
  let smallestDifferenceArr = [0, 0];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      const currentDiff = Math.abs(array1[i] - array2[j]);

      if (currentDiff < smallestDifference) {
        smallestDifference = currentDiff;
        smallestDifferenceArr[0] = array1[i];
        smallestDifferenceArr[1] = array2[j];
      }
    }
  }
  return smallestDifferenceArr;
}
/**
 * Smallest Difference
 * Time Complexity : **O(n log n + m log m)**
 * where n is the length of first array and m is the length of second array
 *
 * Space Complexity: O(1)
 */
export function smallestDifference(array1: number[], array2: number[]) {
  array1.sort((a, z) => a - z);
  array2.sort((a, z) => a - z);
  let leftArrayPointer = 0;
  let rightArrayPointer = 0;
  let smallestDifference = Math.abs(Math.max());
  let differenceArr: number[] = [];
  while (
    leftArrayPointer < array1.length ||
    rightArrayPointer < array2.length
  ) {
    const currentDifference = Math.abs(
      array1[leftArrayPointer] - array2[rightArrayPointer],
    );
    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
      differenceArr = [array1[leftArrayPointer], array2[rightArrayPointer]];
      leftArrayPointer++;
    } else {
      rightArrayPointer++;
    }
  }
  return differenceArr;
}
