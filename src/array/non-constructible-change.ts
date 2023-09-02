/**
 *
 * Non Constructible Change
 *
 * Time Complexity: O(n logn)
 *
 * Space Complexity: O(1)
 *
 */
export function nonConstructibleChange(array: number[]) {
  array.sort((a, b) => a - b); // ascending order sort (callback is neccessary)
  let currentChange = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     const change = array[i];
  //     if (change <= currentChange + 1) {
  //       currentChange += change;
  //     }
  //   }

  for (let i = 0; i < array.length; ++i) {
    const change = array[i];
    if (change > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += change;
  }

  return currentChange + 1;
}
