// TASK M

function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
  const result: { number: number; square: number }[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push({
      number: arr[i],
      square: arr[i] * arr[i],
    });
  }

  return result;
}

console.log(getSquareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

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
