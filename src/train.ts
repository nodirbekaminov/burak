console.log("=============================================");
// TASK S

function missingNumber(nums: number[]) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber([3, 0, 1]));

// TASK R

// function calculate(input: string): number {
//   const parts = input.split(" ");

//   const numberOne = Number(parts[0]);
//   const operator = parts[1];
//   const numberTwo = Number(parts[2]);

//   if (operator === "+") {
//     return numberOne + numberTwo;
//   } else if (operator === "-") {
//     return numberOne - numberTwo;
//   } else if (operator === "*") {
//     return numberOne * numberTwo;
//   } else if (operator === "/") {
//     return numberOne / numberTwo;
//   } else {
//     throw new Error("Invalid operator");
//   }
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("5 - 2"));
// console.log(calculate("4 * 3"));
// console.log(calculate("8 / 2"));

// TASK Q

// function hasProperty(obj: object, property: string): boolean {
//   if (property in obj) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(hasProperty({ name: "BMW" }, "name"));
// console.log(hasProperty({ name: "BMW" }, "age"));

// TASK P

// function objectToArray(obj: Record<string, number>): [string, number][] {
//   let result: [string, number][] = [];

//   for (let key of Object.keys(obj)) {
//     let value = obj[key];
//     result.push([key, value]);
//   }
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));

console.log("=============================================");

// TASK O

// function calculateSumOfNumbers(arr: unknown[]): number {
//   let sum: number = 0;

//   for (let num of arr) {
//     if (typeof num === "number") {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
// console.log(calculateSumOfNumbers([48, "40", { son: 40 }, true, 15]));

// console.log("=============================================");

// TASK N

// function palindromCheck(str: string): boolean {
//   const findStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
//   return findStr === findStr.split('').reverse().join('');
// }

// console.log(palindromCheck('Dad'));
// console.log(palindromCheck('Madam'));
// console.log(palindromCheck('Hello'));
// console.log(palindromCheck('Radar'));

// TASK M

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   const result: { number: number; square: number }[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push({
//       number: arr[i],
//       square: arr[i] * arr[i],
//     });
//   }

//   return result;
// }

// console.log(getSquareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task L

// const reverseString = (sentence: string): string => {
//   const words: string[] = sentence.split(" ");
//   const result: string[] = [];

//   for (let i = 0; i < words.length; i++) {
//     let reversedWord: string = "";

//     for (let j = words[i].length - 1; j >= 0; j--) {
//       reversedWord += words[i][j];
//     }

//     result.push(reversedWord);
//   }

//   return result.join(" ");
// };

// console.log(reverseString("Hello World From Me!"));
