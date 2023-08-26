/**
 * Checks if the array items can be added to the target
 */
export function twoNumberSum(array: number[], target: number) {
  const complimentSet = new Set();
  for (let i = 0; i < array.length; i++) {
    if (complimentSet.has(array[i])) return true;

    const compliment = target - array[i];
    complimentSet.add(compliment);
  }
  return false;
}

/**
 * Checks the array items that can be added to the targets
 *
 * If the values are found, returns values and indexes else returns false
 */
export function twoNumberSumWithValueAndIndex(
  array: number[],
  target: number
): { values: number[]; indexes: number[] } | false {
  const map: Record<string, number> = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (map[element] || map[element] === 0)
      return {
        values: [element, array[map[element]]],
        indexes: [i, map[element]],
      };
    const compliment = target - element;
    map[compliment] = i;
  }
  return false;
}
