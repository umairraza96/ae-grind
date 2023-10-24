/**
 * Caesar Cipher Algorithm
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */
export function caesarCipherEncryptor(str: string, key: number): string {
  let decryptedArray: string[] = [];
  const newKey = key % 26;
  for (let i = 0; i < str.length; ++i) {
    const characterNumber = str.charCodeAt(i);
    const decryptValueNo =
      characterNumber + newKey <= 122
        ? characterNumber + newKey
        : ((characterNumber + newKey) % 122) + 96;

    const decryptValue = String.fromCharCode(decryptValueNo);

    decryptedArray.push(decryptValue);
  }

  return decryptedArray.join("");
}

export function caesarCipherWithArray(str: string, key: number): string {
  let decryptedArray: string[] = [];
  let newKey = key % 26;
  let lettersArray = [..."abcdefghijklmnopqrstuvwxyz"];

  for (let i = 0; i < str.length; i++) {
    const inOurArray = lettersArray.indexOf(str[i]);
    const newVaue =
      inOurArray + newKey <= 25
        ? inOurArray + newKey
        : (inOurArray + newKey) % 26;
    decryptedArray.push(lettersArray[newVaue]);
  }

  return decryptedArray.join("");
}
