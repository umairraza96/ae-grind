export function monotonicArray(array: number[]): boolean {
  let isDownwards = true;
  let isUpwards = true;

  for (let i = 1; i < array.length; i++) {
    const element = array[i - 1];
    const secElement = array[i];
    if (secElement < element) {
      isUpwards = false;
    }

    if (secElement > element) {
      isDownwards = false;
    }
  }

  return isDownwards || isUpwards;
}
