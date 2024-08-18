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
