/**
 * Brute Force sorted squared array
 *
 * Time Complexity: O(N)
 * **if we use merge sort it can go down to O(n log n)**
 *
 * Space Complexity: O(N)
 *
 * Returns a new array with sorted and squared elements
 */
export function bruteForceSortedSquareArray(array: number[]): number[] {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const squaredElement = array[i] * array[i];
    newArr.push(squaredElement);
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[i + 1]) {
      let temp: number = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = temp;
    }
  }

  return newArr;
}

/**
 * Sorted Squared Array
 *
 * Time Complexity: O(n)
 *
 * Space Complexity:O(n)
 *
 * Returns a new array with sorted squared
 */
export function sortedSquaredArray(array: number[]): number[] {
  let newArr = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let newArrIdx = array.length - 1;

  /**
   * While Loop
   */

  // while (newArrIdx >= 0) {
  //   const leftMostElement = Math.abs(array[leftPointer]);
  //   const rightMostElement = Math.abs(array[rightPointer]);
  //   if (leftMostElement > rightMostElement) {
  //     newArr[newArrIdx] = leftMostElement * leftMostElement;
  //     leftPointer++;
  //     newArrIdx--;
  //   } else {
  //     newArr[newArrIdx] = rightMostElement * rightMostElement;
  //     rightPointer--;
  //     newArrIdx--;
  //   }
  // }

  /**
   * For Loop
   */

  for (let i = array.length - 1; i >= 0; --i) {
    const rightMostElement = Math.abs(array[rightPointer]);
    const leftMostElement = Math.abs(array[leftPointer]);

    if (leftMostElement > rightMostElement) {
      newArr[i] = leftMostElement * leftMostElement;
      leftPointer++;
    } else {
      newArr[i] = rightMostElement * rightMostElement;
      rightPointer--;
    }
  }

  return newArr;
}
const array = [-4, 1, 2];

sortedSquaredArray(array);
