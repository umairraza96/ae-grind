/**
 * Time Complexity : O(n^2)
 *
 * Space Complexity: O(n)
 */
export function palindromeCheck(str: string): boolean {
  let newString = "";

  /*
   * Removes special characters and spaces from the string
   */
  let removedSpaces = str.replace(/[\s*,!@#\$%\^&\*\(\)]/g, "");

  for (let i = removedSpaces.length - 1; i >= 0; i--) {
    newString += removedSpaces[i];
  }

  return newString === removedSpaces;
}

/*
 * Optimized Palindrome
 */

/**
 * Time Complexity : O(n)
 *
 * Space Complexity: O(1)
 */
export function palindromeCheckPointer(str: string): boolean {
  let leftPointer = 0;
  const cleanStr = str.replace(/[\s,]+/g, "");
  let rightPointer = cleanStr.length - 1;

  while (leftPointer < rightPointer) {
    const check = cleanStr[leftPointer] === cleanStr[rightPointer];
    if (check === false) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
}

/**
 * Recursive Solution
 *
 */
export function palindromeCheckRecursion(str: string, i: number = 0): boolean {
  const cleanString = str.replace(/[\s,]+/g, "");
  const j = cleanString.length - 1 - i;
  if (i >= j) return true;
  return (
    cleanString[i] === cleanString[j] && palindromeCheckRecursion(str, i + 1)
  );
}
