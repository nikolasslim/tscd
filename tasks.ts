//7 lvl

/*
export const calc = (str: string): number => {
    let num1 = str
      .split("")
      .map((el) => el.charCodeAt(0))
      .join("");
    let num2 = num1.replace(/7/g, "1");
    let sumNum1: number = num1.split("").reduce((sum, el) => sum + +el, 0);
    let sumNum2: number = num2.split("").reduce((sum, el) => sum + +el, 0);
    return sumNum1 - sumNum2;
  };
  */

// 7lvl

/*
 export function sumCubes(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}
*/

// 7 lvl

/*
export function switcheroo(x: string): string {
  let withoutA = x.replace(/a/g, "z");
  let withoutB = withoutA.replace(/b/g, "a");
  let reverse = withoutB.replace(/z/g, "b");
  return reverse;
}
 */
// 7 lvl

/* 
export function sortMe (names: string[]): string[] {
  return names.sort()
  
}*/

// 7 lvl
/*export function sumDigits(n: number): number {
  return Math.abs(n)
    .toString()
    .split("")
    .reduce((sum, el) => sum + +el, 0);
}
*/

// 7 lvl

/* export function capitalize(s: string) {
  let even = "";
  let odd = "";

  for (let i = 0; i <= s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }
  return [even, odd];
}
*/

// 7 lvl

/*
export function adjacentElementsProduct(arr: number[]): number {
  let maxVal: number = -Infinity;// чутка сомнительно, но мб пойдет
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > maxVal) maxVal = arr[i] * arr[i + 1];
  }
  return maxVal;
}
 */
