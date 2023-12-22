`Write a program having an array of numbers if the number is negative it should 
remove the negative number from the array.`;

function removeNegativeNumbers(arr: number[]) {
  let result = arr.filter((number) => number >= 0);
  return result;
}

let numbers: number[] = [1, -2, -10, 4, 5, -14, -7, 8, 59];
console.log(removeNegativeNumbers(numbers));

export {};
