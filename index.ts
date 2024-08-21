export function adjacentElementsProduct(arr: number[]): number {
  let maxVal: number = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > maxVal) maxVal = arr[i] * arr[i + 1];
  }
  return maxVal;
}
