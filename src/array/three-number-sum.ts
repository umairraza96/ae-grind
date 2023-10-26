export function threeNumberSum(array: number[], target: number): number[][] {
  array.sort((a, z) => a - z);
  const newArray = [];
  /*
   * array.length -2 iteration because we need 3 numbers to sum it up
   */
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    const currentElement = array[i];

    while (leftPointer < rightPointer || rightPointer > leftPointer) {
      const currentSum =
        currentElement + array[leftPointer] + array[rightPointer];
      const isEqualToTarget = currentSum === target;
      const isGreaterThanTarget = currentSum > target;
      const isLessThanTarget = currentSum < target;
      if (isEqualToTarget) {
        newArray.push([
          currentElement,
          array[leftPointer],
          array[rightPointer],
        ]);
        leftPointer++;
        rightPointer--;
      }
      if (isGreaterThanTarget) {
        rightPointer--;
      }
      if (isLessThanTarget) {
        leftPointer++;
      }
    }
  }
  return newArray;
}
