export function sumDigits(n: number): number {
  return Math.abs(n)
    .toString()
    .split("")
    .reduce((sum, el) => sum + +el, 0);
}
