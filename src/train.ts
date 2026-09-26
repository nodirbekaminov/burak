// TASK O

function calculateSumOfNumbers(arr: unknown[]): number {
  let sum: number = 0;

  for (let num of arr) {
    if (typeof num === "number") {
      sum += num;
    }
  }
  return sum;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
console.log(calculateSumOfNumbers([48, "40", { son: 40 }, true, 15]));
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
