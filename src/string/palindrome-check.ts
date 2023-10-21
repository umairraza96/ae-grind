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
