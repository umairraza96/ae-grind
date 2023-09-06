/**
 * **Move element to end**
 *
 * Time Complexity: O(n)
 * Space Complexity: 0(1)
 *
 * This algorithm doesn't respects the ordering
 */
export function moveElementToEnd(array: number[], element: number): number[] {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    if (array[rightPointer] === element) rightPointer--;
    if (array[leftPointer] === element) {
      const tmp = array[leftPointer];
      array[leftPointer] = array[rightPointer];
      array[rightPointer] = tmp;
      rightPointer--;
      leftPointer++;
    } else {
      leftPointer++;
    }
  }
  return array;
}

/**
 * **Move element to end**
 *
 * Time Complexity: O(n+m)
 * Space Complexity: 0(n)
 *
 * This algorithm respects the ordering
 */
export function moveElementToEndWithOrder(
  array: number[],
  element: number,
): number[] {
  const newArray: number[] = [];
  let counter = 0;

  for (let i = 0; i < array.length; ++i) {
    if (array[i] === element) {
      counter++;
    } else {
      newArray.push(array[i]);
    }
  }

  for (let i = 0; i < counter; i++) {
    newArray.push(element);
  }

  return newArray;
}
