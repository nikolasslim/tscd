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
