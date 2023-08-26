/**
 *
 * Check if the given array is a subsequence of the given sequence
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 * This is a while loop solution
 */
export function validateSubsequence(
  array: number[],
  sequence: number[]
): boolean {
  let subsequencePointer = 0;
  let arrayIdx = 0;

  while (arrayIdx < array.length && subsequencePointer < sequence.length) {
    const seqElement = sequence[subsequencePointer];
    const arrayElement = array[arrayIdx];
    if (seqElement === arrayElement) subsequencePointer++;
    arrayIdx++;
  }

  if (subsequencePointer === sequence.length) return true;

  return false;
}

/**
 * Check if the given array is a subsequence of the given sequence
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 * This is a for loop solution
 */
export function validateSubsequenceWithForLoop(
  array: number[],
  sequence: number[]
) {
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (seqIdx === sequence.length) break;
    const sequenceElement = sequence[seqIdx];
    const arrayElement = array[i];
    if (sequenceElement === arrayElement) seqIdx++;
  }

  if (seqIdx === sequence.length) return true;

  return false;
}
