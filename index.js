"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = void 0;
const calc = (str) => {
    let num1 = str
        .split("")
        .map((el) => el.charCodeAt(0))
        .join("");
    let num2 = num1.replace(/7/g, "1");
    let sumNum1 = num1.split("").reduce((sum, el) => sum + +el, 0);
    let sumNum2 = num2.split("").reduce((sum, el) => sum + +el, 0);
    return sumNum1 - sumNum2;
};
exports.calc = calc;
